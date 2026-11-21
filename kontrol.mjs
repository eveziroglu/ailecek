#!/usr/bin/env node
/*
  Ailecek içerik kontrolü: node kontrol.mjs
  Ehl-i Sünnet ölçüsüne göre görsel ve metin kurallarını denetler. İçerik değiştiğinde ve yayından önce çalıştırın.

  Kurallar:
  1. Allah hiçbir şeye ve sembole benzemez: Allah'ın isimleri ve sıfatları hiçbir resim, emoji veya sembolle eşleştirilmez.
  2. Peygamberler, sahabeler ve melekler resim/emoji ile temsil edilmez; kartların konusu olamaz.
  3. Bil Bakalım'da yanlış şıklar Allah hakkında bir hüküm içermez (çocuk "✗ Yanlış" etiketini Allah'a nispet etmesin).
  4. Kalk-Otur'da Allah hakkında "yanlış" cümle kurulmaz.
*/
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kok = path.dirname(fileURLToPath(import.meta.url));
const oku = (f, adlar) => new Function(fs.readFileSync(path.join(kok, f), "utf8") + `;return {${adlar}}`)();
const C = oku("icerik.js", "BILGI,PANDOMIM,SESLER,HAYVANLAR,KALKOTUR,SENOLSAN,HIZLI,SASKIN,IYILIK,THEMES");
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

// Kuşların Yolculuğu
if (fs.existsSync(path.join(kok, "icerik-kuslar.js"))) {
  const K = oku("icerik-kuslar.js", "VADI_HIKAYELERI,KUSLAR,BAHANE_KARTLARI");
  K.VADI_HIKAYELERI.forEach(h => { if (KUTSAL.test(h.baslik)) ekle(hatalar, 2, `Vadi hikâyesi "${h.baslik}"`, "Başlıkta kutsal isim + resim"); });
  const kusIds = new Set(K.KUSLAR.map(x => x.id));
  K.BAHANE_KARTLARI.forEach((x, i) => {
    if (!kusIds.has(x.k)) ekle(hatalar, 2, `Bahane kartı ${i + 1}`, `Bilinmeyen kuş: ${x.k}`);
    if (ALLAH.test(x.b + x.y)) ekle(hatalar, 4, `Bahane kartı ${i + 1}`, "Canlandırılacak bahanede Allah hakkında ifade olmamalı");
  });
  K.KUSLAR.forEach(k => { const n = K.BAHANE_KARTLARI.filter(x => x.k === k.id).length; if (n !== 3) ekle(uyarilar, 2, `Kuş ${k.ad}`, `${n} kart var, 3 olmalı`); });
}

uyarilar.forEach(u => console.log("⚠ " + u));
hatalar.forEach(h => console.log("✗ " + h));
console.log(hatalar.length ? `\n${hatalar.length} hata bulundu.` : `✓ İçerik kontrolü geçti (${uyarilar.length} uyarı).`);
process.exit(hatalar.length ? 1 : 0);
