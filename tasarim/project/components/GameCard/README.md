# GameCard

Bir mini oyunun ekranını taşıyan ana kart; başlık şeridi oyunun rengindedir.

- `ak-card` düz içerik kartı; `ak-card--game` + `style="--c:var(--nar)"` oyun kartı.
- `ak-card__head`: solda `ak-card__ico` (oyun emojisi) ve oyun adı, sağda `ak-steps` tur göstergesi (`is-done`, `is-now`). Şerit sekiz köşeli yıldız desenini taşır.
- Oyun renkleri: Pandomim `nar`, Bil Bakalım `cini`, Ses Taklidi `kandil`, Sen Olsan? `zumrut`, Küçük Hoca `firuze`, Şaşkın Ebeveyn `lale`.
- `kandil` renkli oyunlarda (Ses Taklidi, Hızlı Tur) karta `ak-on-kandil` sınıfını da ekleyin: şerit metni `on-kandil` olur. Aynı kural `ak-flip` için de geçerlidir.
- Kart gövdesi tek odaklıdır: bir soru ya da bir kart ve altında eylem butonları.
