# FlipCard

Gizli kelimeyi saklayan, mihrap kemeri biçiminde çevrilen kart.

- Yapı: `ak-flip` > `ak-flip__inner` > ön yüz `ak-flip__face ak-flip__front` (buton) ve arka yüz `ak-flip__face ak-flip__back`. Açmak için `ak-flip`'e `is-open` ekleyin.
- Ön yüz oyunun rengi (`--c`) ve yıldız deseniyle dolar: `ak-flip__glyph` (? veya 🎭), `ak-flip__hint`, `ak-flip__note` (kim bakabilir).
- Arka yüz: `ak-flip__pic` (zıplayan büyük emoji) ve `ak-flip__word`.
- Kartı yalnızca sırası gelen açar; kelime asla sesli okunmaz. Oyun başlarken kart tekrar kapanır, sonunda herkese açılır.
