# Ailecek

Anne, baba ve çocukların İslami değerleri **gülerek ve yaşayarak** öğrendiği bir aile oyun gecesi.

Masaya tek telefon konur, sırası gelene uzatılır. Asıl oyun ekranın dışında oynanır: canlandırma, tartışma, kahkaha.

Oyunun rehberi, Kur'an'da Hz. Süleyman'a haber getiren **Hüdhüd kuşu**dur. Hareketli bir karakter olarak soruları ve durumları **sesli okur**, böylece okuma bilmeyen çocuklar da oyuna katılır. Gizli kartlar (pandomim kelimesi, gizli iyilik, hoca cevabı) asla sesli okunmaz.

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
- **Bileşenler:** `ak-` önekli CSS bileşenleri (Button, Chip, Avatar, HudhudGuide, GameCard, OptionTile, Timer, FlipCard, Stamp, DeedCard).

Token'lar `tasarim/project/tokens.json`, bileşen stilleri `tasarim/project/components/bundle.css` dosyasındadır. Birini değiştirdikten sonra uygulamaya aktarmak için:

```
python3 tasarim/esitle.py
```

## Çalıştırma

Kurulum gerektirmeyen bir web uygulamasıdır: `index.html` dosyasını tarayıcıda açmak yeterli. Oyun kartları ve temalar `icerik.js` dosyasındadır. Aile bilgisi, bahçe, iyilik haftası ve İyilik Defteri cihazın tarayıcısında saklanır; ayarlardan sıfırlanabilir.

## İçerik notu

Bu bir **prototiptir**. Tüm ayet, hadis ve kıssa bilgileri yayından önce bir hoca ya da ilahiyatçı tarafından kontrol edilmelidir. Tüm içerik `icerik.js` dosyasındadır. Yeni kart eklemek için ilgili listeye bir satır eklemek yeterlidir.
