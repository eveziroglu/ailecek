#!/usr/bin/env node
/* Yeni sürüm etiketi: node surum.mjs
   index.html, icerik.js, kuslar.js, kalp.js, kainat.js ve sw.js içindeki sürüm etiketlerini aynı yeni değere çevirir.
   Telefonlar böylece eski önbellekteki dosyaları kullanmaz; eski ve yeni dosyalar karışırsa oyun kendini onarır. */
import fs from "node:fs";
const d = new Date(), pad = n => String(n).padStart(2, "0");
const yeni = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
const kurallar = {
  "index.html": [[/(\?v=)[\w-]+/g, `$1${yeni}`], [/(const OYUN_SURUM = ")[^"]*(")/, `$1${yeni}$2`]],
  "icerik.js": [[/(const ICERIK_SURUM = ")[^"]*(")/, `$1${yeni}$2`]],
  "kuslar.js": [[/(const KUSLAR_SURUM = ")[^"]*(")/, `$1${yeni}$2`]],
  "kalp.js": [[/(const KALP_SURUM = ")[^"]*(")/, `$1${yeni}$2`]],
  "kainat.js": [[/(const KAINAT_SURUM = ")[^"]*(")/, `$1${yeni}$2`]],
  "sw.js": [[/(const SURUM = "ailecek-)[^"]*(")/, `$1${yeni}$2`], [/(\?v=)[\w-]+/g, `$1${yeni}`]]
};
for (const [f, ks] of Object.entries(kurallar)) {
  let s = fs.readFileSync(f, "utf8");
  for (const [re, to] of ks) { if (!re.test(s)) { console.error(`${f}: etiket bulunamadı (${re})`); process.exit(1); } re.lastIndex = 0; s = s.replace(re, to); }
  fs.writeFileSync(f, s);
}
console.log("Yeni sürüm:", yeni);
