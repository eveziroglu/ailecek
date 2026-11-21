Ailecek, anne babaların ve çocukların İslami değerleri bir oyun gecesinde **oynayarak, gülerek ve yaşayarak** öğrendiği bir aile oyunudur. Masaya tek telefon konur, sırası gelene uzatılır; asıl oyun ekranın dışında oynanır. Arayüz bir oyun sunucusu gibi davranır: az konuşur, büyük gösterir, sevinci kutlar ve sonra kenara çekilir.

## Ses ve içerik

- Çocuğa **“sen”**, aileye **“siz”** diye hitap edin. “Sıra Zeynep'te! Çarkı çevir!”, “Telefonu ortaya koyun, herkes katılıyor.”
- Hüdhüd'ün balonunda **en fazla iki kısa cümle** olsun. Açıklama gerekiyorsa sesli anlatıma bırakın; ekrana uzun paragraf yazmayın.
- Butonlar ne olacağını söyler: “Çarkı Çevir”, “Gizle ve Başla”, “Mühürle”. “Tamam”, “İleri” gibi belirsiz etiketler kullanmayın.
- Ayet ve hadis her zaman kaynağıyla yazılır, kaynak `caption` stilinde ve `ink-muted` renginde alt satırdadır: “Bakara Suresi, 153. ayet”. Tüm dini içerik yayından önce bir hocanın kontrolünden geçer.
- Korku değil sevgi dili: ceza, cehennem, utandırma yok. Yapılmamış bir gizli iyilik için “Bu hafta yapabilirsin, sorun değil” denir.
- **Allah hiçbir şeye ve sembole benzemez** (Ehl-i Sünnet ölçüsü). Allah'ın isimleri ve sıfatları hiçbir resim, emoji, ışık veya sembolle eşleştirilmez; resimli seçeneklerde, kartlarda ve sahnelerde Allah'ı temsil eden hiçbir öğe olmaz. Allah'ın sıfatları bir sorunun yanlış şıkkı olarak kullanılmaz.
- Peygamberler, sahabeler ve melekler **asla çizilmez, canlandırılmaz, emojiyle temsil edilmez.** Pandomim ve ses kartları hayvanlar, nesneler ve davranışlardır.
- Türkçe ekler isme göre çekimlenir: Zeynep'te, Ömer'e, Anne'nin. İsme sabit ek yapıştırmayın.
- Emoji, oyunun **resim dilidir**: kart simgeleri, hayvanlar, avatarlar, sahne simgeleri. Başlık ya da bölüm işareti olarak emoji kullanmayın.

## Renk

Palet İznik çinilerinden gelir. Zemin serin beyaz, metin derin lacivert, vurgular çini renkleridir.

- Sayfa zemini `surface-100`, kartlar `surface-200`, kart içi ikincil yüzeyler `surface-300`. Metin `ink`, ikincil metin `ink-muted`.
- Marka rengi `cini`: birincil butonlar, logo, Bil Bakalım. Ana çağrı (“Oyun Gecesini Başlat”, “Mühürle”) `kandil` doldurulur ve üstüne `on-kandil` yazılır.
- Her mini oyunun bir rengi vardır ve kart başlık şeridi o renkle dolar: Kıssa Pandomimi `nar`, Bil Bakalım `cini`, Ses Taklidi `kandil`, Sen Olsan? `zumrut`, Küçük Hoca `firuze`, Şaşkın Ebeveyn `lale`, Hızlı Tur `kandil`, Kalk-Otur `cini`, Hayvan Yürüyüşü `zumrut`.
- Renkli dolgular (`cini`, `firuze`, `zumrut`, `nar`, `lale`) üzerine `on-accent` yazın. Koyu temada bu renkler açıldığı için `on-accent` koyu laciverte döner; düz beyaz yazmayın.
- Gizli iyilik dünyası `gece` zeminidir: üstüne `on-gece` metin, vurgular ve yıldızlar `yildiz`. `yildiz` yalnızca `gece` üzerinde kullanılır.
- Doğru cevap `zumrut`, yanlış cevap `nar`; ikisi de **her zaman ✓/✗ işareti ve kelimeyle birlikte** gösterilir, renk tek başına anlam taşımaz.
- Tüm metin çiftleri her iki temada 4.5:1 üzerindedir. Odak halkası `focus`: 3px düz çizgi, 3px boşluk.

## Tipografi

- Başlıklar, butonlar, sorular ve Hüdhüd'ün sesi `display` ailesinde (Baloo 2; Türkçe harflerin tamamını içerir, Fredoka'da ş, ğ ve İ eksik olduğu için kullanılmaz): yuvarlak, sıcak, okunaklı. Stiller: `hero`, `card-word`, `title`, `question`, `bubble`.
- Gövde metni `body` ailesinde (Figtree): `body-lg`, `body`, `caption`. Büyük harfli etiketler `label` (0.08em harf aralığı).
- Rakamlar (zamanlayıcı, sayaç, fidan sayısı) `display` ailesinde ve `tabular-nums`.
- Metni ortalayın yalnızca tek odaklı oyun ekranlarında (soru, kelime, mühür). Liste ve açıklamalar sola dayalıdır.

## Biçim ve desen

- **Mihrap kemeri** markanın imzasıdır: çevrilen kartlar ve gizli iyilik kartı üstte `radius-arch`, altta `radius-lg` köşelidir. Kemeri yalnızca “bir şey açığa çıkacak” yüzeylerde kullanın.
- **Sekiz köşeli yıldız** deseni (`--ak-tile`, adım `space-6`), renkli kart başlıklarının ve çevrilen kartın ön yüzünün dokusudur. Desen her zaman saydam beyaz çizgidir; renk taşımaz.
- Kartlar `radius-lg`, butonlar ve seçenekler `radius-md`, çipler ve avatarlar `radius-pill`.
- Derinlik iki katmandır: altta `line` renginde 4–6px düz şerit (basılabilir his) ve kartlarda `shadow-lift`. Butona basılınca şerit 1px'e iner ve buton 4px aşağı kayar.
- Boşluklar `space-1`…`space-6`. Sayfa kenarı `space-4`, kart içi `space-5`.

## Hareket

- Hareket sevinci anlatır: doğru cevapta `ak-pop`, yanlışta `ak-shake`, sonuçta `ak-stamp` mühür, kart açılırken 3B çevirme. Bir ekranda tek bir “büyük an” olsun.
- Hüdhüd sürekli hafifçe zıplar, göz kırpar ve tepeliğini sallar; konuşurken gagası oynar (`is-talking`), fidan kazanılınca kanat çırpar (`is-happy`).
- `prefers-reduced-motion` açıkken tüm animasyonlar durur; oyun hareketsiz de eksiksiz oynanır.

## Yolculuk ve koleksiyon

- Temalar Yolculuk Haritası'nda sırayla birer duraktır (`Station`); tamamlanan durak bir sonrakini açar, her durak 1–3 yıldız alır. Yolun sonu Kandil Gecesi'dir ve gece zemininde bir yolculuk belgesiyle kutlanır.
- Bilinen pandomim, ses ve hayvan kartları albüme `KissaCard` olarak eklenir; eksik kartlar adı gizli, yıldız desenli gri yüzlerdir.
- Rozetler (`Badge`) aileye aittir; yeni rozet `Toast` ile duyurulur. Dil her zaman “birlikte” dilidir: “Ailece fidan kazandınız”, “Ailemizin rozetleri”.

## Ses ve sesli anlatım

- Hüdhüd soruları, seçenekleri, durumları ve ayet/hadisleri sesli okur. **Gizli kartlar asla okunmaz:** pandomim kelimesi, Şaşkın Ebeveyn senaryosu, Küçük Hoca cevabı, gizli iyilik görevi.
- Hüdhüd'ün varsayılan sesi **Küçük kız** tonudur: cihazdaki en doğal Türkçe kadın sesi (Emel Doğal, Yelda Gelişmiş, Google Türkçe sırasıyla) 1.4 perde ve 1.03 hızla okunur. Diğer tonlar **Abla** (1.15 / 1.0) ve **Masalcı** (1.0 / 0.88). Metin cümle cümle okunur; “Hz.” “Hazreti” diye açılır, parantez içindeki kaynaklar okunmaz.
- Efekt sesleri kısadır (tık, pop, mühür, davul). Ayrı bir anahtarla kapatılabilirler; davul ritmini istemeyen aileler için sesli anlatım açık kalabilir.

## İkonografi ve görseller

- Oyun simgeleri sistem emojisidir: 🎭 Kıssa Pandomimi, 🔊 Ses Taklidi, 💡 Bil Bakalım, 🤔 Sen Olsan?, 🧑‍🏫 Küçük Hoca, 🙃 Şaşkın Ebeveyn, ⚡ Hızlı Tur, 🙋 Kalk-Otur, 🐾 Hayvan Yürüyüşü, 💌 Gizli İyilik.
- Logo `assets/Logos/ailecek-mark.svg`; rehber karakter `assets/Characters/hudhud.svg` (uygulamada satır içi SVG olarak canlandırılır).
- Fotoğraf kullanılmaz. Sahneler emoji, renk blokları ve yıldız deseniyle kurulur.

## Bileşenler

Bileşenler `components/bundle.css` içindeki `ak-` önekli sınıflardır; JavaScript gerektirmezler. Kapsayıcıya `ak` sınıfını verin. Button, Chip, Avatar, HudhudGuide, GameCard, OptionTile, Timer, FlipCard, Stamp, DeedCard, Station, KissaCard, Badge ve Toast için kullanım kuralları her bileşenin kendi sayfasındadır.
