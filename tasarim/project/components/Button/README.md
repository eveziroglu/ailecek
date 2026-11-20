# Button

Basılabilir 3B buton; ekrandaki eylemi tek fiille söyler.

- Sınıf: `ak-btn`. Varyantlar: `ak-btn--kandil` (ana çağrı, ekranda en fazla bir tane), `ak-btn--zumrut`, `--nar`, `--firuze`, `--lale` (oyun renkleri), `ak-btn--ghost` (ikincil seçenek), `ak-btn--night` (gece zemininde açık buton). Boyut: `ak-btn--lg` tam genişlik, 66px yükseklik. Dikkat çekmek için `ak-btn--pulse`.
- Özel renk için `style="--c:var(--cini)"` verin; metin rengi `--on` ile değişir.
- Etiket bir fiil ya da kısa bir eylemdir: “Gizle ve Başla”, “Mühürle”. Emoji etiketin sonunda en fazla bir tane olabilir.
- Yan yana iki buton `ak-btn` ile iki sütunlu ızgarada durur; olumlu seçenek solda ve renkli, diğeri `--ghost`.
- Yapmayın: aynı ekranda iki `--kandil`; düz beyaz metinli koyu tema butonu.
