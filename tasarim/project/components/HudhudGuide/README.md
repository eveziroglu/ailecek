# HudhudGuide

Rehber karakter Hüdhüd ve konuşma balonu: ekranın tek anlatıcısı.

- Yapı: `ak-guide` (veya `ak-guide--lg`) içinde satır içi `ak-bird` SVG'si ve `ak-bubble`. SVG `assets/Characters/hudhud.svg` ile aynıdır, ek olarak `lid` ve `jaw` gruplarını taşır.
- Durumlar: `is-talking` (sesli anlatım sürerken gaga oynar), `is-happy` (fidan kazanılınca kanat çırpar).
- Balon metni en fazla iki kısa cümle. `ak-bubble__say` (🔈) metni tekrar okutur; gizli bilgi taşıyan balonda bu düğme olmaz.
- Kart içinde balon `surface-300` olur. Bir ekranda yalnızca bir Hüdhüd.
