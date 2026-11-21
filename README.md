# Ailecek

Anne, baba ve çocukların İslami değerleri **gülerek ve yaşayarak** öğrendiği bir aile oyun gecesi.

Masaya tek telefon konur, sırası gelene uzatılır. Asıl oyun ekranın dışında oynanır: canlandırma, tartışma, kahkaha.

Oyunun rehberi, Kur'an'da Hz. Süleyman'a haber getiren **Hüdhüd kuşu**dur. Hareketli bir karakter olarak soruları ve durumları **sesli okur**, böylece okuma bilmeyen çocuklar da oyuna katılır. Gizli kartlar (pandomim kelimesi, gizli iyilik, hoca cevabı) asla sesli okunmaz.

Hüdhüd'ün sesi varsayılan olarak tatlı bir **küçük kız** tonundadır. Uygulama cihazdaki en doğal Türkçe kadın sesini kendiliğinden seçer (Edge'de Emel Doğal, iPhone'da Yelda Gelişmiş, Android'de Google Türkçe). Ayarlardan **Küçük kız**, **Abla** ya da **Masalcı** tonu ve cihazdaki başka bir ses seçilebilir.

## Nasıl oynanır?

1. **Aile kurulumu:** Kaç kişi oynanacağı, isimler ve yaş aralıkları (3-5, 6-8, 9-12, 13-17, yetişkin) girilir.
2. **Tema seçimi:** Şükür, Sabır, Merhamet, Doğruluk, Paylaşmak, Anne Baba, Temizlik ya da rastgele bir tema seçen Sürpriz Gece.
3. **Turlar:** Sırası gelen **oyun çarkını** çevirir. Çark, yaşına uygun bir mini oyun seçer. Her dört turda bir herkesin katıldığı hareketli bir grup oyunu gelir. Doğru cevaplar ve güzel davranışlar ailenin ortak **bahçesine fidan** diker. Rekabet yoktur, aile tek takımdır.
4. **Derinlik anı:** Temayla ilgili bir ayet ve hadis, bir sohbet sorusu ve haftalık aile görevi.
5. **Gizli İyilik Haftası:** Gece sonunda herkes bir zarf açar ve gizli dostunu görür (bkz. aşağı).

### Mini oyunlar

| Oyun | Açıklama |
|---|---|
| 🎭 Kıssa Pandomimi | Kart çevrilir, kıssalardaki hayvanlar, nesneler ve davranışlar canlandırılır (60 sn). Peygamberler ve sahabeler canlandırılmaz. |
| 🔊 Ses Taklidi | Herkes gözünü kapatır, oynayan sadece ses çıkarır: horoz, gök gürültüsü, deniz dalgaları… (45 sn) |
| 🐾 Hayvan Yürüyüşü | Grup oyunu: davul çalarken herkes Kur'an'da geçen bir hayvan gibi yürür, Hüdhüd “DUR!” deyince heykel olunur. Hakem en küçük çocuktur. |
| 💡 Bil Bakalım | Yaşa göre 4 seviyede soru. Küçükler için resimli. |
| 🤔 Sen Olsan? | Komik ama düşündüren durumlar. Hakem en küçük çocuktur, en güzel cevabı o seçer. |
| ⚡ Hızlı Tur | Herkes birlikte, 30 saniyede hedef sayıya ulaşmaya çalışır. |
| 🙃 Şaşkın Ebeveyn | Yetişkin bilerek hata yapar (abdest, sofra adabı…), çocuklar yakalar. |
| 🧑‍🏫 Küçük Hoca | Çocuk öğretmen olur ve büyüklere soru sorar. Cevap sadece çocukta. Büyükler bilemezse hoca kazanır. |
| 🙋 Kalk-Otur | Herkes ayakta: cümle doğruysa zıplanır, yanlışsa çömelinir. 5 cümlelik hareketli grup turu. |

## Yolculuk ve koleksiyon

Oyun geceleri uzun soluklu bir aile macerasına dönüşür:

- **Yolculuk Haritası:** Yedi tema sırayla birer duraktır: Şükür Vadisi, Sabır Kıyısı, Merhamet Bahçesi, Doğruluk Tepesi, Paylaşma Çarşısı, Aile Ocağı, Temizlik Pınarı. Her oyun gecesi bir durağı tamamlar ve dikilen fidana göre 1-3 yıldız verir; tamamlanan durak bir sonrakini açar. Durak tekrar oynanıp yıldız artırılabilir. Yolun sonunda **Kandil Gecesi** ve ailenin isimlerinin yazılı olduğu bir yolculuk belgesi vardır. Ayarlardan "Tüm durakları aç" ile sıra beklemeden oynanabilir.
- **Kıssa Kartları albümü:** Pandomimde, ses taklidinde ve hayvan yürüyüşünde bilinen her hayvan ve nesne, kıssasıyla birlikte albüme kart olarak eklenir (52 kart). Kartlara dokununca Hüdhüd kıssasını anlatır.
- **Aile rozetleri:** 16 rozet (İlk Gece, Pandomim Ustası, Bilge Aile, Küçük Hocalar, Dedektif Ailesi, Gizli Dostlar, Koleksiyoncu, Kandil Gecesi…). Kazanılmamış rozetlerde nasıl kazanılacağı ve ilerleme görünür.
- **Kandil zinciri:** Ailenin kaç hafta üst üste oyun gecesi yaptığını gösterir.
- Gece sonunda kazanılan yıldızlar, açılan durak, yeni kartlar ve rozetler bir özet ekranında kutlanır.

## Yapay zekâ sesi

Hüdhüd'ün sesi, cihaz seslerinin yerine **yapay zekâ ile üretilmiş, neşeli küçük kız tonunda** bir sesle çalınabilir. Sesler bir kez üretilir ve `ses/` klasöründe paketler hâlinde oyuna eklenir; oyun oynarken internet ya da ek ücret gerekmez.

- Oyunun söyleyebileceği tüm sabit cümleler (yaklaşık 525 cümle, 25.500 karakter) sayfanın kendi `allSpeechLines()` fonksiyonundan alınır; ekrandaki metinle ses her zaman eşleşir.
- İsim ve sayı içeren cümleler önceden üretilemez. Yapay zekâ sesinde bunların isimsiz karşılığı okunur ("Sıra Zeynep'te!" yerine "Sıra sende!"); isim ekranda görünür.
- Ayarlardan **Yapay zekâ sesi** ile **Cihaz sesi** arasında geçiş yapılabilir. Yapay zekâ sesi henüz üretilmemişse Hüdhüd sessiz kalır.

Üretmek için (Node 18+, ffmpeg ve playwright gerekir):

```
node ses/uret.mjs liste                                  # cümle listesi ve karakter sayısı
node ses/uret.mjs ornek                                  # iki servisle örnek sesler (ses/ornek.html ile dinlenir)
node ses/uret.mjs uret --saglayici openai --varsayilan   # OpenAI gpt-4o-mini-tts, "coral" sesi + küçük kız talimatı
node ses/uret.mjs uret --saglayici elevenlabs --ses <voice_id> --varsayilan
```

Anahtarlar: Claude Code bulut ortamında ortamın **Network secrets** bölümüne (`api.openai.com` için `Authorization: Bearer …`, `api.elevenlabs.io` için `xi-api-key`), kendi bilgisayarınızda `OPENAI_API_KEY` / `ELEVENLABS_API_KEY` ortam değişkenlerine. Yeni cümle eklendiğinde komutu tekrar çalıştırmak yeterli; daha önce üretilenler önbellekten (`ses/onbellek/`) gelir.

## Gizli İyilik Haftası

İhlası yaşayarak öğretmek için tasarlanmış, bir hafta süren gizli iyilik oyunu.

1. **Zarflar:** Herkes sırayla telefonu alır, zarfını açar ve gizli dostunu görür. Yaşına uygun **üç farklı türde görev** arasından birini seçer (yardım, sevindirme, dua, hizmet, güzel söz) ya da **kendi iyiliğini yazar**. Görev mühürlenir.
2. **İyilik Haftası:** Ana sayfada haftanın kaçıncı günü olduğu, kaç iyiliğin yapıldığı ve her gün değişen bir "gizli kalma ipucu" görünür. Herkes "Kartım" ile görevine gizlice tekrar bakabilir, iyiliğini yapınca "Yaptım" deyip nasıl hissettiğini seçer. Kimin kime iyilik yaptığı hiçbir yerde görünmez.
3. **Açılış Töreni:** Yedinci gün (ya da istenen bir gün) her aile üyesi "Bana kim iyilik yaptı?" diye tahmin eder. Mühür açılır: doğru bilen **Dedektif**, bilinmeyen **Usta Gizli Dost** olur. Yapılamamış görevler için "Bu hafta yapabilirsin, sorun değil" denir. Sonra iyiliği alan kişi bir teşekkür seçer: sarılma, dua, yıldız ya da çiçek.
4. **Nar Ağacı ve İyilik Defteri:** Yapılan her gizli iyilik ailenin nar ağacına bir nar ekler. Geçmiş haftaların tüm iyilikleri teşekkürleriyle birlikte İyilik Defteri'nde saklanır.

## Tasarım sistemi

Arayüz, `tasarim/project/` altındaki **Ailecek Tasarım Sistemi**'ne göre kurulmuştur:

- **Renkler:** İznik çini paleti (çini mavisi, firuze, zümrüt, nar, kandil, lale ve gizli iyilikler için gece). Açık ve koyu tema, tüm metin çiftleri WCAG 4.5:1 üzerinde.
- **Yazı tipleri:** Başlıklar Fredoka, metin Figtree.
- **Biçim:** Mihrap kemeri biçimli kartlar, sekiz köşeli yıldız deseni.
- **Bileşenler:** `ak-` önekli CSS bileşenleri (Button, Chip, Avatar, HudhudGuide, GameCard, OptionTile, Timer, FlipCard, Stamp, DeedCard, Station, KissaCard, Badge, Toast).

Token'lar `tasarim/project/tokens.json`, bileşen stilleri `tasarim/project/components/bundle.css` dosyasındadır. Birini değiştirdikten sonra uygulamaya aktarmak için:

```
python3 tasarim/esitle.py
```

## Çalıştırma

Kurulum gerektirmeyen bir web uygulamasıdır: `index.html` dosyasını tarayıcıda açmak yeterli. Oyun kartları ve temalar `icerik.js` dosyasındadır. Aile bilgisi, bahçe, iyilik haftası ve İyilik Defteri cihazın tarayıcısında saklanır; ayarlardan sıfırlanabilir.

## İçerik notu

İçerik değiştiğinde ve her yayından önce `node kontrol.mjs` çalıştırın. Betik Ehl-i Sünnet ölçüsüne göre şunları denetler: Allah'ın isimleri hiçbir resim ya da sembolle eşleşmez, peygamberler ve melekler kart ya da resim konusu olmaz, Allah hakkında yanlış şık ya da yanlış cümle kurulmaz.


Bu bir **prototiptir**. Tüm ayet, hadis ve kıssa bilgileri yayından önce bir hoca ya da ilahiyatçı tarafından kontrol edilmelidir. Tüm içerik `icerik.js` dosyasındadır. Yeni kart eklemek için ilgili listeye bir satır eklemek yeterlidir.
