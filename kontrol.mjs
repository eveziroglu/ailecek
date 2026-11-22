#!/usr/bin/env node
/*
  Ailecek içerik kontrolü: node kontrol.mjs
  Ehl-i Sünnet ölçüsüne göre görsel ve metin kurallarını denetler. İçerik değiştiğinde ve yayından önce çalıştırın.

  Kurallar:
  1. Allah hiçbir şeye ve sembole benzemez: Allah'ın isimleri ve sıfatları hiçbir resim, emoji veya sembolle eşleştirilmez.
  2. Peygamberler, sahabeler ve melekler resim/emoji ile temsil edilmez; kartların konusu olamaz.
  3. Bil Bakalım'da yanlış şıklar Allah hakkında bir hüküm içermez (çocuk "✗ Yanlış" etiketini Allah'a nispet etmesin).
  4. Kalk-Otur'da Allah hakkında "yanlış" cümle kurulmaz.
  5. Bilmece cevabı Allah, peygamber, sahabe ya da melek olamaz; Hangisi Farklı'da kutsal isimler resimsiz gelir.
  6. Kalp Doktoru ve Hikmetli Hikâye: her kart bilinen bir kalp köşesine bağlıdır; "gösteriş" kartları en küçüklere gelmez;
     hikmette "Peygamberimiz" geçiyorsa hadisin kaynağı (r) yazılıdır; korkutma dili kullanılmaz.
  7. Kâinat Kitabı: her sayfanın ayet kaynağı, üç görevi ve üç Hayret! kartı vardır; "doğa/tabiat yaptı" dili kullanılmaz;
     görevlerde canlıya zarar (koparmak, kavanoza kapatmak, yuva bozmak) yoktur.
  8. İnsan figürü yok: hiçbir dosyada insan, yüz silüeti ya da beden hareketi gösteren insan emojisi kullanılmaz
     (koşan, ayakta duran, dede, nine, bebek, öğretmen, dedektif…). Yerine nesne, hayvan ya da işaret kullanılır.
*/
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.dirname(fileURLToPath(import.meta.url));
const oku = (f, adlar) => new Function(fs.readFileSync(path.join(kok, f), "utf8") + `;return {${adlar}}`)();
const C = oku("icerik.js", "BILGI,PANDOMIM,SESLER,HAYVANLAR,KALKOTUR,SENOLSAN,HIZLI,SASKIN,IYILIK,THEMES,BILMECELER,SIRALAMA,FARKLI,KALP_KOSELER,KALP_DOKTORU,HIKMETLI");
const ALLAH = /\bAllah|\bRab(b|bi|bim|bimiz)?\b|Rahmân|Rahîm|Esmâ-i Hüsnâ|\bO'nu\b/i;
const KUTSAL = /Allah|\bRab|Rahmân|Rahîm|Peygamber|Resûl|Hz\.|sahabe|melek|Cebrail/i;
const hatalar = [], uyarilar = [];
const ekle = (liste, kural, yer, metin) => liste.push(`[Kural ${kural}] ${yer}: ${metin}`);

// 1. Resimli seçenekler
C.BILGI[0].forEach((x, i) => {
  x.o.forEach(o => { if (Array.isArray(o) && KUTSAL.test(o[0]) && o[1]) ekle(hatalar, 1, `BILGI[0][${i}] "${x.q}"`, `"${o[0]}" seçeneği "${o[1]}" resmiyle eşleşmiş`); });
  if (KUTSAL.test(x.q)) ekle(uyarilar, 1, `BILGI[0][${i}] "${x.q}"`, `resimler (${x.o.map(o => o[1]).join(" ")}) kutsal kişiyi değil yalnızca hayvan/nesne/davranışı göstermeli`);
});
// 2. Kartlar
[["PANDOMIM", C.PANDOMIM], ["SESLER", C.SESLER], ["HAYVANLAR", C.HAYVANLAR]].forEach(([ad, arr]) => arr.forEach(x => {
  if (KUTSAL.test(x.w)) ekle(hatalar, 2, `${ad} "${x.w}"`, "Kartın konusu kutsal bir kişi/isim olamaz");
}));
// 3. Yanlış şıklar
[1, 2, 3].forEach(l => C.BILGI[l].forEach(x => x.o.slice(1).forEach(o => {
  if (ALLAH.test(String(o))) ekle(hatalar, 3, `BILGI[${l}] "${x.q}"`, `Yanlış şıkta Allah hakkında ifade: "${o}"`);
})));
[1, 2, 3].forEach(l => C.BILGI[l].forEach(x => {
  if (/ne demektir|ne anlama gelir/i.test(x.q) && ALLAH.test(x.q)) ekle(uyarilar, 3, `BILGI[${l}] "${x.q}"`, "Allah'ın ismi/sıfatı için anlam sorusu: yanlış şıklar başka bir sıfat olmamalı");
}));
// 4. Kalk-Otur
C.KALKOTUR.forEach(x => { if (!x.d && ALLAH.test(x.s)) ekle(hatalar, 4, `KALKOTUR "${x.s}"`, "Allah hakkında yanlış cümle"); });

// 5. Bilmece, Kıssa Sıralama, Hangisi Farklı?
C.BILMECELER.forEach((b, i) => {
  if (KUTSAL.test(b.c)) ekle(hatalar, 5, `Bilmece ${i + 1} "${b.c}"`, "Allah, peygamberler, sahabeler ve melekler bilmece cevabı olamaz");
  if (ALLAH.test(b.c)) ekle(hatalar, 5, `Bilmece ${i + 1}`, "Cevap Allah'ı tarif edemez");
});
C.FARKLI.forEach((f, i) => f.o.forEach(o => { if (KUTSAL.test(o[0]) && o[1]) ekle(hatalar, 1, `Hangisi Farklı ${i + 1}`, `"${o[0]}" resimle eşleşmiş`); }));
C.FARKLI.forEach((f, i) => { if (ALLAH.test(f.o[0][0])) ekle(hatalar, 3, `Hangisi Farklı ${i + 1}`, "Farklı olan seçenek Allah hakkında olamaz"); });
C.SIRALAMA.forEach((x, i) => { if (x.o.length < 3) ekle(uyarilar, 5, `Sıralama ${x.ad}`, "En az 3 olay olmalı"); });

// 6. Kalp Doktoru ve Hikmetli Hikâye
const koseler = new Set(C.KALP_KOSELER.map(k => k.id));
const KORKU = /cehennem|azap|yanacak|ceza(lan)?|günaha girer|cennete giremez/i;
C.KALP_KOSELER.forEach(k => { if (KUTSAL.test(k.ot + k.cicek)) ekle(hatalar, 1, `Köşe ${k.id}`, "Ot ya da çiçek kutsal bir isimle eşleşmiş"); });
C.KALP_DOKTORU.forEach((x, i) => {
  if (!koseler.has(x.k)) ekle(hatalar, 6, `Kalp Doktoru ${i + 1}`, `Bilinmeyen köşe: ${x.k}`);
  if (x.k === "riya" && x.l === 0) ekle(hatalar, 6, `Kalp Doktoru ${i + 1}`, "Gösteriş kartı en küçüklere gelmemeli");
  if (KORKU.test(x.s + x.i)) ekle(hatalar, 6, `Kalp Doktoru ${i + 1}`, "Korkutma dili");
});
C.HIKMETLI.forEach(x => {
  if (x.k && !koseler.has(x.k)) ekle(hatalar, 6, `Hikâye "${x.ad}"`, `Bilinmeyen köşe: ${x.k}`);
  if (/Peygamber/.test(x.c) && !x.r) ekle(hatalar, 6, `Hikâye "${x.ad}"`, "Hikmette hadis var ama kaynak (r) yok");
  if (/Peygamber|Hz\./.test(x.h)) ekle(hatalar, 2, `Hikâye "${x.ad}"`, "Hikâyenin kahramanı kutsal bir kişi olamaz");
  if (!/^(Özgün temsil|Halk hikâyesi)$/.test(x.kaynak)) ekle(uyarilar, 6, `Hikâye "${x.ad}"`, "Kaynak türü belirtilmeli");
  if (KORKU.test(x.h + x.c)) ekle(hatalar, 6, `Hikâye "${x.ad}"`, "Korkutma dili");
});

// Kalp Bahçesi sezonu (kalp.js)
if (fs.existsSync(path.join(kok, "kalp.js"))) {
  const KB = new Function(["icerik.js", "kalp.js"].map(f => fs.readFileSync(path.join(kok, f), "utf8")).join("\n") + ";return {KALP_ICERIK,KALP_SOZ,KALP_KOSELER}")();
  KB.KALP_KOSELER.forEach(k => { if (!KB.KALP_ICERIK[k.id]) ekle(hatalar, 6, `Köşe ${k.id}`, "Kalp Bahçesi içeriği yok"); });
  Object.entries(KB.KALP_ICERIK).forEach(([id, x]) => {
    if (!koseler.has(id)) ekle(hatalar, 6, `Kalp Bahçesi ${id}`, "Bilinmeyen köşe");
    if (!x.ayet.ref || !x.hadis.ref) ekle(hatalar, 6, `Kalp Bahçesi ${id}`, "Ayet ya da hadisin kaynağı yok");
    if (x.gorevler.length !== 3 || x.senolsan.length < 3) ekle(uyarilar, 6, `Kalp Bahçesi ${id}`, "3 bakım görevi ve en az 3 Sen Olsan kartı olmalı");
    const tum = [x.giris, x.muhasebe, x.dua, x.bakim, x.gorevler, x.senolsan.map(c => c.s + c.i)].flat().join(" ");
    if (KORKU.test(tum)) ekle(hatalar, 6, `Kalp Bahçesi ${id}`, "Korkutma dili");
    x.senolsan.forEach(c => { if (KUTSAL.test(c.s) && c.e) ekle(uyarilar, 1, `Kalp Bahçesi ${id} Sen Olsan`, `"${c.s.slice(0, 40)}…" resimle birlikte kutsal isim içeriyor`); });
  });
  if (KORKU.test(Object.values(KB.KALP_SOZ).join(" "))) ekle(hatalar, 6, "Kalp Bahçesi sözleri", "Korkutma dili");
}

// Kâinat Kitabı (kainat.js)
if (fs.existsSync(path.join(kok, "kainat.js"))) {
  const KK = new Function(["icerik.js", "kainat.js"].map(f => fs.readFileSync(path.join(kok, f), "utf8")).join("\n") + ";return {KAINAT_SAYFALAR,HAYRET,KAINAT_SOZ}")();
  const ids = new Set(KK.KAINAT_SAYFALAR.map(x => x.id));
  const DOGA = /(doğa|tabiat)\s*(ana|yap|tasarla|yarat)|evrim/i, ZARAR = /kopar|kavanoz|yuvayı boz|yakala/i;
  KK.KAINAT_SAYFALAR.forEach(x => {
    if (!x.ayet || !x.ayet.ref || !/Suresi, \d/.test(x.ayet.ref)) ekle(hatalar, 7, `Kâinat sayfası ${x.id}`, "Ayetin kaynağı yok");
    if (x.gorevler.length !== 3) ekle(hatalar, 7, `Kâinat sayfası ${x.id}`, "3 görev olmalı");
    const tum = [x.giris, x.soru, x.bilgi, x.gorevler].flat().join(" ");
    if (DOGA.test(tum)) ekle(hatalar, 7, `Kâinat sayfası ${x.id}`, "“Doğa yaptı” dili");
    if (ZARAR.test(x.gorevler.join(" ").replace(/yuvayı bozmadan/g, ""))) ekle(hatalar, 7, `Kâinat sayfası ${x.id}`, "Görevde canlıya zarar");
    if (KORKU.test(tum)) ekle(hatalar, 7, `Kâinat sayfası ${x.id}`, "Korkutma dili");
    const n = KK.HAYRET.filter(h => h.k === x.id).length; if (n !== 3) ekle(uyarilar, 7, `Kâinat sayfası ${x.id}`, `${n} Hayret! kartı var, 3 olmalı`);
  });
  KK.HAYRET.forEach((h, i) => {
    if (!ids.has(h.k)) ekle(hatalar, 7, `Hayret! kartı ${i + 1}`, `Bilinmeyen sayfa: ${h.k}`);
    if (KUTSAL.test(h.s) || ALLAH.test(h.s)) ekle(hatalar, 3, `Hayret! kartı ${i + 1}`, "Doğru/şaka cümlesi kutsal isim ya da Allah hakkında olmamalı");
    if (DOGA.test(h.s + h.a)) ekle(hatalar, 7, `Hayret! kartı ${i + 1}`, "“Doğa yaptı” dili");
  });
  if (DOGA.test(Object.values(KK.KAINAT_SOZ).join(" "))) ekle(hatalar, 7, "Kâinat Kitabı sözleri", "“Doğa yaptı” dili");
}

// Kuşların Yolculuğu
if (fs.existsSync(path.join(kok, "icerik-kuslar.js"))) {
  const K = new Function(["icerik.js", "icerik-kuslar.js"].map(f => fs.readFileSync(path.join(kok, f), "utf8")).join("\n") + ";return {VADI_HIKAYELERI,KUSLAR,BAHANE_KARTLARI,VADILER}")();
  K.VADILER.forEach(v => { if (KUTSAL.test(v.ad)) ekle(hatalar, 2, `Vadi "${v.ad}"`, "Vadi adında kutsal isim + simge"); });
  K.VADI_HIKAYELERI.forEach(h => { if (KUTSAL.test(h.baslik)) ekle(hatalar, 2, `Vadi hikâyesi "${h.baslik}"`, "Başlıkta kutsal isim + resim"); });
  const kusIds = new Set(K.KUSLAR.map(x => x.id));
  K.BAHANE_KARTLARI.forEach((x, i) => {
    if (!kusIds.has(x.k)) ekle(hatalar, 2, `Bahane kartı ${i + 1}`, `Bilinmeyen kuş: ${x.k}`);
    if (ALLAH.test(x.b + x.y)) ekle(hatalar, 4, `Bahane kartı ${i + 1}`, "Canlandırılacak bahanede Allah hakkında ifade olmamalı");
  });
  K.KUSLAR.forEach(k => { const n = K.BAHANE_KARTLARI.filter(x => x.k === k.id).length; if (n !== 3) ekle(uyarilar, 2, `Kuş ${k.ad}`, `${n} kart var, 3 olmalı`); });
}

// 8. İnsan emojisi taraması (bütün içerik ve arayüz dosyaları)
{
  const INSAN = /[\u{1F9CD}\u{1F9CE}\u{1F3C3}\u{1F6B6}\u{1F938}\u{1F483}\u{1F57A}\u{1F64B}\u{1F647}\u{1F646}\u{1F645}\u{1F937}\u{1F926}\u{1F476}\u{1F466}\u{1F467}\u{1F9D2}\u{1F468}\u{1F469}\u{1F9D1}\u{1F474}\u{1F475}\u{1F9D3}\u{1F46E}\u{1F477}\u{1F482}\u{1F575}\u{1F9D5}\u{1F473}\u{1F472}\u{1F9D4}\u{1F471}\u{1F5E3}\u{1F464}\u{1F465}\u{1F930}\u{1FAC3}\u{1F9D8}\u{1F3CA}\u{1F6B4}\u{26F9}\u{1F93E}\u{1F3CB}\u{1F93C}\u{1F64D}\u{1F64E}\u{1F481}\u{1FAC5}\u{1F47C}\u{1F385}\u{1F936}\u{1F9B8}\u{1F9B9}\u{1F9D9}-\u{1F9DF}\u{1F46F}\u{1F9D6}\u{1F9D7}\u{1F3C4}\u{1F93D}\u{1F6A3}\u{1F3C7}\u{26F7}\u{1F3C2}\u{1F3CC}\u{1F93A}\u{1F46A}\u{1F48F}\u{1F491}\u{1FAC2}\u{1F977}\u{1F934}\u{1F478}\u{1F9CC}]/u;
  ["icerik.js", "icerik-kuslar.js", "kuslar.js", "kalp.js", "kainat.js", "index.html", "hakkinda.html"].forEach(f => {
    const yol = path.join(kok, f); if (!fs.existsSync(yol)) return;
    fs.readFileSync(yol, "utf8").split("\n").forEach((l, i) => { const m = l.match(INSAN); if (m) ekle(hatalar, 8, `${f}:${i + 1}`, `İnsan emojisi ${m[0]}`); if (l.includes("🌷")) ekle(hatalar, 1, `${f}:${i + 1}`, "Lale (🌷) Osmanlı sanatında Allah lafzını çağrıştırdığı için kullanılmaz"); });
  });
}

uyarilar.forEach(u => console.log("⚠ " + u));
hatalar.forEach(h => console.log("✗ " + h));
console.log(hatalar.length ? `\n${hatalar.length} hata bulundu.` : `✓ İçerik kontrolü geçti (${uyarilar.length} uyarı).`);
process.exit(hatalar.length ? 1 : 0);
