#!/usr/bin/env node
/*
  Hüdhüd'ün yapay zekâ sesini üretir.

  Kullanım:
    node ses/uret.mjs liste                         Oyunun söyleyeceği tüm sabit cümleleri listeler (ses/satirlar.json)
    node ses/uret.mjs ornek                         Anahtarı olan her servisle birkaç örnek üretir (ses/ornek/, ses/ornek.html)
    node ses/uret.mjs uret --saglayici openai       Tüm sesleri üretir, paketler ve ses/ses.json'a ekler
    node ses/uret.mjs uret --saglayici elevenlabs --ses <voice_id>
    node ses/uret.mjs uret --saglayici deneme       Anahtarsız deneme: cümle uzunluğunda bip sesleri (test için)

  Seçenekler:
    --ses <ad|id>     OpenAI ses adı (varsayılan coral) veya ElevenLabs voice_id (verilmezse hesabınızdaki en uygun genç kadın/çocuk sesi seçilir)
    --varsayilan      Bu sesi oyunun varsayılan sesi yap
    --paralel <n>     Aynı anda kaç istek (varsayılan 4)

  Anahtarlar:
    OPENAI_API_KEY veya ELEVENLABS_API_KEY ortam değişkenini tanımlayın.

  Gereksinimler: Node 18+, ffmpeg, playwright (cümle listesi oyun sayfasının kendisinden alınır).
*/
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const KOK = process.env.AILECEK_KOK || path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SES = path.join(KOK, "ses");
const args = process.argv.slice(2);
const komut = args[0];
const opt = (ad, vars) => { const i = args.indexOf("--" + ad); return i < 0 ? vars : (args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : true); };

/* Küçük kız sesi için yönlendirme (OpenAI gpt-4o-mini-tts talimatla ses tonunu ayarlar) */
const OPENAI_TALIMAT = [
  "Sen Hüdhüd'sün: sekiz yaşında, neşeli, sevimli ve meraklı bir Türk kız çocuğu gibi konuş.",
  "Sesin ince, parlak ve sıcak olsun; gülümseyerek konuşuyormuş gibi.",
  "Doğal bir çocuk gibi tonlama yap: soru sorarken merakla, sevinirken heyecanla, ama bağırmadan.",
  "Acele etme, cümlelerin arasında kısa nefes payları bırak.",
  "Ayet, hadis ve dua içeren cümleleri yumuşak, saygılı ve sakin bir sesle oku.",
  "Türkçe telaffuzun kusursuz olsun; Arapça kökenli kelimeleri (Hüdhüd, Elhamdülillah, Selâmün aleyküm, Hazreti) Türkiye'deki gibi doğru söyle."
].join(" ");

const ORNEK_CUMLELER = [
  "Selâmün aleyküm! Ben Hüdhüd. Bu akşam ailecek oynayalım mı?",
  "Sıra sende! Çarkı çevir!",
  "Kardeşin, saatlerce yaptığın legodan kuleyi bir tekmede yıktı! Ne yaparsın?",
  "Peygamberimiz buyurdu: Pehlivan, güreşte rakibini yenen değildir. Asıl pehlivan, öfkelendiği zaman kendine hâkim olandır."
];

function hata(m) { console.error("\n✗ " + m + "\n"); process.exit(1); }
function ffmpegVarMi() { try { execFileSync("ffmpeg", ["-version"], { stdio: "ignore" }); return true; } catch { return false; } }

/* ---------- Cümle listesi: oyun sayfasının allSpeechLines() fonksiyonundan ---------- */
async function satirlar() {
  let chromium;
  try { ({ chromium } = require("playwright")); } catch { hata("playwright bulunamadı. 'npm i -g playwright' ile kurun."); }
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto("file://" + path.join(KOK, "index.html"));
  await p.waitForFunction(() => typeof allSpeechLines === "function");
  const liste = await p.evaluate(() => allSpeechLines());
  await b.close();
  fs.writeFileSync(path.join(SES, "satirlar.json"), JSON.stringify(liste, null, 1));
  return liste;
}

/* ---------- Sağlayıcılar ---------- */
const anahtar = (env, bos) => process.env[env] || bos;   // bulutta vekil gerçek anahtarı ekler; yer tutucu yeterli

async function istek(url, secenek, deneme = 0) {
  const r = await fetch(url, secenek);
  if (r.status === 429 || r.status >= 500) {
    if (deneme >= 5) throw new Error(`${r.status} ${await r.text()}`);
    await new Promise(z => setTimeout(z, 1500 * 2 ** deneme));
    return istek(url, secenek, deneme + 1);
  }
  if (!r.ok) {
    const govde = await r.text();
    if (r.status === 401 || r.status === 403) throw new Error(`Yetki hatası (${r.status}). Anahtar eksik ya da geçersiz olabilir. ${govde.slice(0, 200)}`);
    throw new Error(`${r.status} ${govde.slice(0, 300)}`);
  }
  return Buffer.from(await r.arrayBuffer());
}

const SAGLAYICILAR = {
  openai: {
    etiket: ses => `OpenAI · ${ses[0].toUpperCase() + ses.slice(1)}`,
    varsayilanSes: async () => "coral",
    async seslendir(metin, ses) {
      return istek("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + anahtar("OPENAI_API_KEY", "vekil-ekler") },
        body: JSON.stringify({ model: "gpt-4o-mini-tts", voice: ses, input: metin, instructions: OPENAI_TALIMAT, response_format: "mp3" })
      });
    }
  },
  elevenlabs: {
    etiket: (ses, ad) => `ElevenLabs · ${ad || ses}`,
    async varsayilanSes() {
      const r = await fetch("https://api.elevenlabs.io/v1/voices", { headers: { "xi-api-key": anahtar("ELEVENLABS_API_KEY", "vekil-ekler") } });
      if (!r.ok) throw new Error(`ElevenLabs ses listesi alınamadı (${r.status}). Anahtar eksik olabilir.`);
      const { voices } = await r.json();
      const puan = v => {
        const L = v.labels || {}, d = `${v.name} ${v.description || ""} ${L.description || ""} ${L.descriptive || ""} ${L.use_case || ""}`.toLowerCase();
        let s = 0;
        if (/child|kid|childish|girl|çocuk/.test(d)) s += 50;
        if (/cute|sweet|playful|cheerful|animation|cartoon|bubbly/.test(d)) s += 25;
        if ((L.age || "").includes("young")) s += 20;
        if (L.gender === "female") s += 15;
        if (L.gender === "male") s -= 40;
        if (/turkish|türk/.test(`${L.accent || ""} ${L.language || ""}`.toLowerCase())) s += 10;
        return s;
      };
      const sirali = voices.sort((a, b) => puan(b) - puan(a));
      if (!sirali.length) throw new Error("Hesapta ses bulunamadı. ElevenLabs ses kütüphanesinden bir ses ekleyip --ses <voice_id> verin.");
      console.log("ElevenLabs aday sesler:", sirali.slice(0, 5).map(v => `${v.name} (${v.voice_id}) puan ${puan(v)}`).join(" | "));
      return { id: sirali[0].voice_id, ad: sirali[0].name };
    },
    async seslendir(metin, ses) {
      return istek(`https://api.elevenlabs.io/v1/text-to-speech/${ses}?output_format=mp3_44100_64`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "xi-api-key": anahtar("ELEVENLABS_API_KEY", "vekil-ekler") },
        body: JSON.stringify({ text: metin, model_id: "eleven_multilingual_v2", voice_settings: { stability: 0.4, similarity_boost: 0.8, style: 0.35, use_speaker_boost: true } })
      });
    }
  },
  deneme: {
    etiket: () => "Deneme (bip)",
    varsayilanSes: async () => "bip",
    async seslendir(metin) {
      const sure = Math.min(6, 0.4 + metin.length / 18).toFixed(2);
      return execFileSync("ffmpeg", ["-v", "error", "-f", "lavfi", "-i", `sine=frequency=660:duration=${sure}`, "-ac", "1", "-b:a", "32k", "-f", "mp3", "-"]);
    }
  }
};

/* Sesi temizle: kenardaki sessizliği kırp, ses seviyesini eşitle, tek kanal 48 kbps mp3 */
function temizle(ham) {
  return execFileSync("ffmpeg", ["-v", "error", "-i", "pipe:0",
    "-af", "silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,loudnorm=I=-16:TP=-1.5:LRA=11",
    "-ac", "1", "-ar", "24000", "-b:a", "48k", "-id3v2_version", "0", "-write_xing", "0", "-f", "mp3", "pipe:1"], { input: ham, maxBuffer: 64 << 20 });
}

async function havuz(isler, n, fn) {
  let i = 0, bitti = 0;
  const calis = async () => { while (i < isler.length) { const k = i++; await fn(isler[k], k); bitti++; if (bitti % 20 === 0 || bitti === isler.length) process.stdout.write(`\r  ${bitti}/${isler.length}`); } };
  await Promise.all(Array.from({ length: n }, calis));
  process.stdout.write("\n");
}

/* ---------- Komutlar ---------- */
async function uret() {
  const ad = opt("saglayici");
  const S = SAGLAYICILAR[ad];
  if (!S) hata("--saglayici openai | elevenlabs | deneme olmalı.");
  if (!ffmpegVarMi()) hata("ffmpeg bulunamadı.");
  let ses = opt("ses"), sesAd = null;
  if (!ses || ses === true) { const v = await S.varsayilanSes(); if (typeof v === "object") { ses = v.id; sesAd = v.ad; } else ses = v; }
  const id = `${ad}-${String(sesAd || ses).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`.replace(/-+$/, "");
  const liste = await satirlar();
  console.log(`${liste.length} cümle, ses: ${S.etiket(ses, sesAd)} (${id})`);
  const onbellek = path.join(SES, "onbellek", id);
  fs.mkdirSync(onbellek, { recursive: true });
  const eksik = liste.filter(l => !fs.existsSync(path.join(onbellek, l.key + ".mp3")));
  console.log(`${liste.length - eksik.length} cümle önbellekte, ${eksik.length} cümle üretilecek.`);
  const hatalar = [];
  await havuz(eksik, +opt("paralel", 4), async l => {
    try { fs.writeFileSync(path.join(onbellek, l.key + ".mp3"), temizle(await S.seslendir(l.text, ses))); }
    catch (e) { hatalar.push(`${l.key} "${l.text.slice(0, 40)}…": ${e.message}`); if (/Yetki hatası/.test(e.message)) { console.error("\n" + e.message); process.exit(1); } }
  });
  if (hatalar.length) console.warn(`${hatalar.length} cümle üretilemedi:\n  ` + hatalar.slice(0, 10).join("\n  "));
  /* Paketle: aynı paketteki parçaları art arda ekle, konumlarını kaydet */
  const klasor = path.join(SES, id); fs.rmSync(klasor, { recursive: true, force: true }); fs.mkdirSync(klasor, { recursive: true });
  const paketler = {}, clips = {}, gruplar = {};
  liste.forEach(l => (gruplar[l.pack] ||= []).push(l));
  let toplam = 0;
  for (const [paket, ls] of Object.entries(gruplar)) {
    const parcalar = []; let ofs = 0;
    for (const l of ls) {
      const f = path.join(onbellek, l.key + ".mp3"); if (!fs.existsSync(f)) continue;
      const buf = fs.readFileSync(f); clips[l.key] = [paket, ofs, buf.length]; parcalar.push(buf); ofs += buf.length;
    }
    if (!parcalar.length) continue;
    fs.writeFileSync(path.join(klasor, paket + ".mp3"), Buffer.concat(parcalar));
    paketler[paket] = `${id}/${paket}.mp3`; toplam += ofs;
    if (ofs > 15 * 1024 * 1024) console.warn(`  ! ${paket} paketi 15 MB'ı aşıyor (${(ofs / 1048576).toFixed(1)} MB); yayınlamak için bölün.`);
  }
  const mf = path.join(SES, "ses.json");
  const manifest = fs.existsSync(mf) ? JSON.parse(fs.readFileSync(mf, "utf8")) : { voices: {} };
  manifest.voices[id] = { id, label: S.etiket(ses, sesAd), provider: ad, voice: ses, created: new Date().toISOString(), packs: paketler, clips };
  if (opt("varsayilan") || !manifest.default || !manifest.voices[manifest.default]) manifest.default = id;
  fs.writeFileSync(mf, JSON.stringify(manifest));
  console.log(`✓ ${Object.keys(clips).length}/${liste.length} cümle, ${Object.keys(paketler).length} paket, ${(toplam / 1048576).toFixed(1)} MB → ses/${id}/`);
  console.log(`  Varsayılan ses: ${manifest.default}`);
}

async function ornek() {
  if (!ffmpegVarMi()) hata("ffmpeg bulunamadı.");
  const klasor = path.join(SES, "ornek"); fs.mkdirSync(klasor, { recursive: true });
  const sonuc = [];
  for (const ad of ["openai", "elevenlabs"]) {
    const S = SAGLAYICILAR[ad];
    try {
      let ses = opt("ses-" + ad), sesAd = null;
      if (!ses || ses === true) { const v = await S.varsayilanSes(); if (typeof v === "object") { ses = v.id; sesAd = v.ad; } else ses = v; }
      const dosyalar = [];
      for (const [i, m] of ORNEK_CUMLELER.entries()) {
        const f = `${ad}-${i + 1}.mp3`;
        fs.writeFileSync(path.join(klasor, f), temizle(await S.seslendir(m, ses)));
        dosyalar.push({ f, m });
      }
      sonuc.push({ ad, etiket: S.etiket(ses, sesAd), dosyalar });
      console.log(`✓ ${S.etiket(ses, sesAd)}: ${dosyalar.length} örnek`);
    } catch (e) { console.warn(`✗ ${ad}: ${e.message}`); }
  }
  if (!sonuc.length) hata("Hiçbir servisle örnek üretilemedi. Anahtarları kontrol edin.");
  fs.writeFileSync(path.join(SES, "ornek.json"), JSON.stringify(sonuc, null, 1));
  console.log("Örnekler: ses/ornek/  (dinleme sayfası: ses/ornek.html)");
}

if (komut === "liste") { const l = await satirlar(); const say = {}; l.forEach(x => say[x.pack] = (say[x.pack] || 0) + 1); console.log(`${l.length} cümle, ${l.reduce((a, x) => a + x.text.length, 0)} karakter`, say); }
else if (komut === "uret") await uret();
else if (komut === "ornek") await ornek();
else console.log(fs.readFileSync(fileURLToPath(import.meta.url), "utf8").split("*/")[0]);
