# Chip

Kısa kural, etiket ya da kişi seçimi için hap biçimli öğe.

- `ak-chip`: bilgi etiketi (kural, ipucu). `ak-chip--tint` + `style="--c:var(--nar)"`: oyun rengine boyanmış etiket.
- `ak-chip--select`: dokunulabilir seçim (hakem, tahmin). Seçili durumu `aria-pressed="true"` ile verin; 48px yükseklik.
- Gruplamak için `ak-chips` kapsayıcısı.
- Çip metni üç-dört kelimeyi geçmez; başında bir emoji olabilir.
