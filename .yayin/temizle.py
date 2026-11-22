#!/usr/bin/env python3
"""Herkese açık depo için kopyayı hazırlar: çalışma ortamına ait notları ve linkleri çıkarır.
Kullanım: python3 .yayin/temizle.py <hedef_klasör>   (hedef: git archive ile çıkarılmış kopya)"""
import sys, os, re, json
K = sys.argv[1]
def duzenle(yol, degisimler):
    p = os.path.join(K, yol)
    if not os.path.exists(p): return
    s = open(p, encoding="utf-8").read()
    for eski, yeni in degisimler:
        if eski not in s: sys.exit(f"bulunamadı: {yol}: {eski[:60]}")
        s = s.replace(eski, yeni)
    open(p, "w", encoding="utf-8").write(s)
META = '<meta name="claude:viewport-fit-sides" content="cover">\n'
duzenle("index.html", [
    (META, ""),
    ("Yalnızca oyun kendi adresinde açıldığında çalışır (ör. GitHub Pages). claude.ai içindeki\n   önizlemede (iframe) devre dışıdır; orada oyun her zamanki gibi açılır.",
     "Yalnızca oyun kendi adresinde açıldığında çalışır (ör. GitHub Pages). Başka bir sayfanın\n   içinde (iframe) açıldığında devre dışıdır; orada oyun her zamanki gibi açılır."),
    ("|Telegram|Claude/i.test(ua)", "|Telegram/i.test(ua)"),
])
duzenle("ses/ornek.html", [(META, "")])
duzenle("ses/uret.mjs", [
    ('    Claude Code bulut ortamında anahtarlar ortamın "Network secrets" bölümüne kaydedilir; ağ vekili istek başlığına kendisi ekler.\n    Kendi bilgisayarınızda çalıştırırken OPENAI_API_KEY veya ELEVENLABS_API_KEY ortam değişkenlerini kullanın.',
     '    OPENAI_API_KEY veya ELEVENLABS_API_KEY ortam değişkenini tanımlayın.'),
])
duzenle("icerik-kuslar.js", [(re.search(r"   Hikâye tasarım belgesi: https://\S+\n", open(os.path.join(K, "icerik-kuslar.js"), encoding="utf-8").read()).group(0), "")])
duzenle("README.md", [
    (re.search(r"Anahtarlar: Claude Code bulut ortamında.*?ortam değişkenlerine\.", open(os.path.join(K, "README.md"), encoding="utf-8").read()).group(0),
     "Anahtarlar: `OPENAI_API_KEY` / `ELEVENLABS_API_KEY` ortam değişkenlerine."),
    (re.search(r"Görseller \[sanat yönetimi belgesindeki\]\(https://[^)]+\) komutlarla üretilir\.", open(os.path.join(K, "README.md"), encoding="utf-8").read()).group(0),
     "Görseller `gorsel/liste.json` dosyasındaki komutlarla üretilir (eksiklerin komutları `gorsel/DURUM.md` dosyasında da listelenir)."),
    ("claude.ai linkinde aynı düğme ana ekrana kısayol eklemeyi anlatır; çevrimdışı çalışma orada kapalıdır.",
     "Oyun başka bir sayfanın içinde açıldığında aynı düğme ana ekrana kısayol eklemeyi anlatır; çevrimdışı çalışma orada kapalıdır."),
])
p = os.path.join(K, "tasarim/project/design-system.json")
d = json.load(open(p, encoding="utf-8"))
if "lastChange" in d: d["lastChange"] = {k: v for k, v in d["lastChange"].items() if k not in ("by", "via")}
json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2); open(p, "a").write("\n")
# Son kontrol
kalan = []
for kok, _, dosyalar in os.walk(K):
    if "/.git" in kok: continue
    for f in dosyalar:
        if f.endswith((".png", ".webp")): continue
        t = open(os.path.join(kok, f), encoding="utf-8", errors="ignore").read()
        for m in re.finditer(r"(?i)claude|anthropic|co-authored", t): kalan.append(f"{os.path.relpath(os.path.join(kok, f), K)}: {t[max(0,m.start()-30):m.end()+30]!r}")
if kalan: print("KALAN İZLER:\n" + "\n".join(kalan)); sys.exit(1)
print("Temiz: hiçbir iz kalmadı.")
