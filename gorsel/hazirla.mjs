#!/usr/bin/env node
/* Ailecek görsel hazırlayıcı
 *
 * Kullanım:
 *   1. Ürettiğiniz görselleri gorsel/kaynak/ klasörüne, liste.json'daki dosya adıyla koyun
 *      (ör. kart-fil.png, avatar-bulbul.svg, durak-sukur.jpg). Uzantı png, jpg, webp ya da svg olabilir.
 *   2. node gorsel/hazirla.mjs
 *
 * Betik her görseli küçültüp WebP'ye çevirir (SVG olduğu gibi kopyalanır), oyunun okuduğu
 * gorsel/gorsel.json dosyasını yazar ve hangi görsellerin hazır, hangilerinin eksik olduğunu
 * komutlarıyla birlikte gorsel/DURUM.md dosyasına yazar. Görseli olmayan yerlerde oyun
 * emoji ve çizimlerle çalışmaya devam eder.
 *
 * Gerekenler: Node 18+ ve ffmpeg (libwebp ile).
 */
import { readFileSync, writeFileSync, readdirSync, existsSync, copyFileSync, mkdirSync, unlinkSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = dirname(fileURLToPath(import.meta.url));
const KAYNAK = join(KOK, "kaynak");
const liste = JSON.parse(readFileSync(join(KOK, "liste.json"), "utf8"));
mkdirSync(KAYNAK, { recursive: true });

/* Oyunda gösterilecek en büyük boyut (piksel) */
const HEDEF = d => d.startsWith("kart-") ? [600, 800]
  : d.startsWith("durak-") || d.startsWith("vadi-") || d === "kaf-dagi" ? [1200, 900]
  : d === "harita-zemin" ? [1080, 3240]
  : [320, 320];

const kaynaklar = readdirSync(KAYNAK).filter(f => /\.(png|jpe?g|webp|svg)$/i.test(f));
const bul = d => kaynaklar.find(f => basename(f, extname(f)).toLowerCase() === d.toLowerCase());

const manifest = {}, durum = [], hatalar = [];
for (const e of liste) {
  const f = bul(e.dosya);
  if (!f) { durum.push({ ...e, var: false }); continue; }
  const giris = join(KAYNAK, f), svg = /\.svg$/i.test(f);
  const cikisAd = e.dosya + (svg ? ".svg" : ".webp"), cikis = join(KOK, cikisAd);
  for (const eski of [e.dosya + ".svg", e.dosya + ".webp"]) if (eski !== cikisAd && existsSync(join(KOK, eski))) unlinkSync(join(KOK, eski));
  try {
    if (svg) copyFileSync(giris, cikis);
    else {
      const [w, h] = HEDEF(e.dosya);
      execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-i", giris,
        "-vf", `scale=${w}:${h}:force_original_aspect_ratio=decrease`,
        "-c:v", "libwebp", "-quality", "82", cikis]);
    }
    manifest[e.anahtar] = "gorsel/" + cikisAd;
    durum.push({ ...e, var: true });
  } catch (err) {
    hatalar.push(`${f}: ${String(err.message).split("\n")[0]}`);
    durum.push({ ...e, var: false });
  }
}
const taninmayan = kaynaklar.filter(f => !liste.some(e => e.dosya.toLowerCase() === basename(f, extname(f)).toLowerCase()));

writeFileSync(join(KOK, "gorsel.json"), JSON.stringify(manifest, null, 1) + "\n");

/* DURUM.md: grup grup hazır ve eksik görseller, eksiklerin komutlarıyla */
const gruplar = [...new Set(liste.map(e => e.grup))];
const hazir = durum.filter(d => d.var).length;
let md = `# Görsel durumu\n\n${hazir} / ${liste.length} görsel hazır. Bu dosya \`node gorsel/hazirla.mjs\` ile yeniden yazılır; elle düzenlemeyin.\n\n`;
md += `Görseli \`gorsel/kaynak/\` klasörüne aşağıdaki dosya adıyla koyun (uzantı png, jpg, webp ya da svg olabilir), sonra betiği yeniden çalıştırın.\n\n`;
md += `Her görseli üretmeden önce sanat yönetimi belgesindeki 5 kontrol sorusunu uygulayın: insan figürü yok, yazı yok, kutsal kişi ya da Allah'ı temsil eden hiçbir öğe yok, çocuk için korkutucu değil, paletle uyumlu.\n\n`;
if (hatalar.length) md += `## Hatalar\n\n${hatalar.map(h => `- ${h}`).join("\n")}\n\n`;
if (taninmayan.length) md += `## Tanınmayan dosyalar\n\nŞu dosyalar listede yok, adlarını kontrol edin: ${taninmayan.map(f => "`" + f + "`").join(", ")}\n\n`;
for (const g of gruplar) {
  const ds = durum.filter(d => d.grup === g), n = ds.filter(d => d.var).length;
  md += `## ${g} (${n}/${ds.length})\n\n${ds[0].kullanim}.\n\n| | Dosya adı | Konu | Üretim boyutu |\n| --- | --- | --- | --- |\n`;
  md += ds.map(d => `| ${d.var ? "✓" : "✗"} | \`${d.dosya}\` | ${d.ad} | ${d.boyut[0]} × ${d.boyut[1]} |`).join("\n") + "\n\n";
  const eksik = ds.filter(d => !d.var);
  if (eksik.length) md += `<details><summary>Eksiklerin komutları (${eksik.length})</summary>\n\n` + eksik.map(d => `**${d.dosya}** · ${d.ad}\n\n\`\`\`text\n${d.komut}\n\`\`\`\n`).join("\n") + `\n</details>\n\n`;
}
writeFileSync(join(KOK, "DURUM.md"), md);

console.log(`${hazir}/${liste.length} görsel hazır → gorsel/gorsel.json`);
if (taninmayan.length) console.log("Tanınmayan dosyalar:", taninmayan.join(", "));
if (hatalar.length) { console.log("Hatalar:"); hatalar.forEach(h => console.log("  " + h)); process.exitCode = 1; }
console.log("Ayrıntı: gorsel/DURUM.md");
