"""Tasarım sistemini uygulamaya aktarır.

tasarim/project/tokens.json ve components/bundle.css dosyalarını okuyup
index.html içindeki işaretli bölümlere yazar. Token veya bileşen stili
değiştiğinde çalıştırın:  python3 tasarim/esitle.py
"""
import json, pathlib, re

kok = pathlib.Path(__file__).resolve().parent
t = json.loads((kok / "project/tokens.json").read_text(encoding="utf-8"))

def deger(tok, tema):
    v = tok["value"]
    return v.get(tema, v.get("light")) if isinstance(v, dict) else v

renk = t["color"]["tokens"] + t.get("shadow", {}).get("tokens", [])
def tema_blogu(tema):
    return "".join(f"  --{x['name']}: {deger(x, tema)};\n" for x in renk)
digerleri = "".join(f"  --{x['name']}: {x['value']};\n" for aile in ("spacing", "radius") for x in t[aile]["tokens"])
aileler = "".join(f"  --font-{k}: {v};\n" for k, v in t["type"]["families"].items())

tokens_css = (
    ":root {\n" + tema_blogu("light") + digerleri + aileler + "}\n"
    "@media (prefers-color-scheme: dark) {\n  :root:not([data-theme=\"light\"]) {\n"
    + tema_blogu("dark").replace("  --", "    --") + "    color-scheme: dark;\n  }\n}\n"
    ":root[data-theme=\"dark\"] {\n" + tema_blogu("dark") + "  color-scheme: dark;\n}\n"
)
bundle = (kok / "project/components/bundle.css").read_text(encoding="utf-8")
bundle = re.sub(r"^@import[^\n]*\n", "", bundle, flags=re.M)

hedef = kok.parent / "index.html"
html = hedef.read_text(encoding="utf-8")
def yerlestir(html, ad, icerik):
    desen = re.compile(rf"(/\* @{ad}:başla \*/\n).*?(/\* @{ad}:bitir \*/)", re.S)
    assert desen.search(html), f"{ad} işareti bulunamadı"
    return desen.sub(lambda m: m.group(1) + icerik + m.group(2), html)
html = yerlestir(html, "tokenlar", tokens_css)
html = yerlestir(html, "bilesenler", bundle)
hedef.write_text(html, encoding="utf-8")
print("index.html güncellendi")
