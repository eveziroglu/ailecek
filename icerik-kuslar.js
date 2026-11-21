/* Kuşların Yolculuğu (ikinci sezon) içeriği.
   Ferîdüddîn-i Attâr'ın Mantıku't-Tayr'ından esinlenen, Ailecek'e özgü sadeleştirilmiş metinler.
   Hikâye tasarım belgesi: https://claude.ai/artifact/7qvSy542VVNwPjg4EwUgxJ
   Not: Yayından önce uzman kontrolünden geçecek (bkz. belgedeki "Uzman kontrolü için açık sorular"). */

/* Vadi hikâyeleri: Derinlik Anı'nda Hüdhüd anlatır. paragraflar sırayla sesli okunur. */
const VADI_HIKAYELERI = [
  {
    vadi: "talep", vadiAd: "Talep Vadisi", baslik: "Soru Soran Kumru", e: "🕊️",
    paragraflar: [
      "Vadinin dibinde, söğütlerin arasında Pıtır adında küçük bir kumru yaşardı. Pıtır her sabah derenin şırıltısıyla uyanır ve hep aynı şeyi merak ederdi: “Bu su nereden geliyor?”",
      "Annesine sordu. Annesi gülümsedi: “Soran bulur, yavrum.”",
      "Pıtır kanatlarını açtı ve derenin kenarından yukarı uçtu. Önce bir kurbağaya rastladı. “Su nereden geliyor?” diye sordu. Kurbağa “Yukarıdaki göletten” dedi. Gölete vardı; orada bir ördek yüzüyordu. “Gölet nereden doluyor?” Ördek kanadıyla dağı gösterdi: “Yamaçtaki çağlayandan.”",
      "Pıtır yoruldu ama vazgeçmedi. Çağlayanın yanında otlayan bir keçi ona son ipucunu verdi: “Tepenin başında, kayaların arasından bir pınar fışkırır.”",
      "Sonunda Pıtır pınara ulaştı. Su, taşların arasından buz gibi ve pırıl pırıl çıkıyordu. Pıtır dönüp aşağı baktı ve nefesi kesildi: bütün vadi ayaklarının altındaydı. Dere gümüş bir kurdele gibi kıvrılıyor, ağaçlar yemyeşil sallanıyordu.",
      "“Sormasaydım, bu güzelliği hiç göremeyecektim” dedi Pıtır."
    ],
    soz: "Her soru bir kanat çırpışıdır. Soru soran kuş, yükseklere uçar.",
    kucukler: "Pıtır sordu, sordu ve sonunda en güzel yeri buldu.",
    soru: "En son neyi merak ettin? Cevabını kime sorabilirsin?"
  },
  {
    vadi: "ask", vadiAd: "Aşk Vadisi", baslik: "Fırtınadaki Leylek", e: "🪺",
    paragraflar: [
      "Köyün camisinin yanındaki yaşlı çınarın tepesinde Ak Leylek'in yuvası vardı. Yuvada üç minik yavru, gagalarını açmış, annelerini beklerdi.",
      "Bir akşam gökyüzü karardı, rüzgâr çınarın dallarını salladı. Ak Leylek kanatlarını yavrularının üstüne gerdi, onları sıcacık sakladı. Sabah olduğunda yavrular güvendeydi, ama yuvanın yarısı dağılmış, dallar yerlere saçılmıştı.",
      "Komşusu karga seslendi: “Bu yuvayı yeniden yapmak günler sürer, boşuna yorulma!”",
      "Ak Leylek cevap verdi: “Yavrularımı seviyorum. Sevdiğin için yorulmak, yorulmak sayılmaz.”",
      "Ve işe koyuldu. Tarladan bir dal, dere kenarından bir saman, bahçeden yumuşak bir yaprak... Her seferinde bir tane taşıdı. Kanatları ağrıdı, ama her dalı yerleştirdiğinde yavrularının mutlu cıvıltısını duydu.",
      "Akşam olduğunda yuva eskisinden de sağlamdı. Karga bile hayran kaldı; gagasında bir dal getirip yuvaya ekledi.",
      "O gece yavrular, annelerinin kanatları altında huzurla uyudular."
    ],
    soz: "Sevgi kanatlara güç verir. Sevdiğin için emek verdiğinde yol kısalır.",
    kucukler: "Ak Leylek yavrularını çok sevdiği için yuvayı yeniden yaptı.",
    soru: "Sevdiğin biri için en son ne yaptın? Senin için kim emek veriyor?"
  },
  {
    vadi: "marifet", vadiAd: "Marifet Vadisi", baslik: "Karıncanın Tohumu", e: "🐜",
    paragraflar: [
      "Sonbaharın ilk serin sabahıydı. Telaşlı bir serçe olan Cik, bir taşın üstüne konmuş, kahvaltılık arıyordu. Birden yerde ilginç bir şey gördü: minicik bir karınca, kendisinden üç kat büyük bir buğday tanesini sürüklüyordu.",
      "Cik kahkahayı bastı: “Hey küçük! O tane senden büyük. Hem neden bu kadar uğraşıyorsun? Etraf yiyecek dolu!”",
      "Karınca durmadı, sadece “Gel de gör” dedi.",
      "Cik merakla karıncanın peşine takıldı. Karınca toprağın altındaki yuvasına girdi. Cik başını eğip içeri baktı: yüzlerce karınca düzenli sıralar hâlinde taneleri depoluyordu. Yaşlı bir karınca anlattı: “Kış gelince toprak donar, dışarıda tek bir tane bulamayız. Bugün taşıdığımız her tane, kışın bütün yuvayı doyuracak.”",
      "Cik utandı. Az önce güldüğü küçük karınca, aslında bütün ailesini düşünüyordu.",
      "“Bakmak başka, anlamak başkaymış” dedi Cik. Ve o gün, karıncalara yolun üstündeki buğday tanelerini göstererek yardım etti."
    ],
    soz: "Gözle bakan görür, kalple bakan anlar. Gülmeden önce sebebini sor.",
    kucukler: "Karınca, kışın ailesi aç kalmasın diye tane taşıyordu.",
    soru: "Bir şeyin sebebini öğrenince fikrin hiç değişti mi?"
  },
  {
    vadi: "istigna", vadiAd: "İstiğna Vadisi", baslik: "Parlak Taşların Sahibi", e: "💎",
    paragraflar: [
      "Ormanın kenarında Simsim adında bir saksağan yaşardı. Simsim parlak şeylere bayılırdı: bir cam boncuk, bir düğme, güneşte ışıldayan küçük taşlar... Gördüğü her parlak şeyi gagasıyla kapıp yuvasına taşırdı.",
      "Yuva gün geçtikçe doldu. Simsim her akşam hazinesine bakar, “Daha fazlası lazım!” derdi. Ama bir türlü mutlu olamıyordu, çünkü başka ağaçlarda hep daha parlak taşlar görüyordu.",
      "Bir gün göç vakti geldi. Bütün kuşlar sıcak ülkelere uçmak için toplandı. Simsim taşlarını bırakmak istemedi; hepsini bir bohçaya doldurup havalandı. Ama bohça o kadar ağırdı ki Simsim bir türlü yükselemedi; dal dal kona kona geride kaldı.",
      "Bunu gören yaşlı bir güvercin yanına kondu: “Kanatların taş taşımak için değil, gökyüzü için, Simsim.”",
      "Simsim düşündü. Sonra en güzel boncuğu yuvası süssüz kalmış yavru bir ispinoza, mavi düğmeyi de yuvasını süslemek isteyen bir bülbüle hediye etti. Taşları dağıttıkça yükü hafifledi, içi ferahladı.",
      "Ve Simsim, ilk kez, bulutların üstüne kadar yükseldi."
    ],
    soz: "Kimseyi kıskanmayan, azla yetinen kalp en zengin kalptir. Paylaştıkça hafifleriz.",
    kucukler: "Simsim taşlarını paylaşınca hafifledi ve uçabildi.",
    soru: "Neyi daha az isteyerek daha mutlu olabilirsin?"
  },
  {
    vadi: "tevhid", vadiAd: "Tevhid Vadisi", baslik: "Kazların Kanadı", e: "🪿",
    paragraflar: [
      "Sonbaharda gökyüzünde V harfi gibi uçan kaz sürülerini gördünüz mü? Bu hikâye onlardan biri hakkında.",
      "Genç kaz Dırdır, çok hızlı uçmasıyla övünürdü. “Ben sürüyü beklemem!” dedi ve tek başına yola çıktı. İlk saatlerde çok eğlendi. Ama rüzgâr karşıdan esiyordu; her kanat çırpışı bir öncekinden zor geldi. Akşama doğru kanatları titremeye başladı.",
      "Tam o sırada arkasından tanıdık bir ses duydu: sürü geliyordu! En öndeki yaşlı kaz seslendi: “Gel Dırdır, arkama gir!”",
      "Dırdır sürüye katıldı ve şaşırdı: öndeki kazların kanatları havayı yarıyor, arkadakilere yol açıyordu. Uçmak birden kolaylaşmıştı. Bir süre sonra öndeki yaşlı kaz yoruldu ve geriye geçti; yerine bir başkası geçti. Herkes sırayla öne çıkıyor, sırayla dinleniyordu. Arkadakiler de “Haydi, az kaldı!” diye öttükçe öndekiler güçleniyordu.",
      "O gece Dırdır, sürüyle birlikte sıcak bir göle kondu. “Tek başıma hızlıydım” dedi, “ama birlikte uzağa gidebiliyormuşuz.”"
    ],
    soz: "Kanat kanada verenin yolu kısalır, yükü hafifler. Birlik, güçtür.",
    kucukler: "Kazlar birlikte uçunca hiç yorulmadılar.",
    soru: "Ailece hangi işi birlikte daha kolay yapıyoruz?"
  },
  {
    vadi: "hayret", vadiAd: "Hayret Vadisi", baslik: "Baykuş Yavrusunun İlk Gecesi", e: "🦉",
    paragraflar: [
      "Yaşlı ceviz ağacının kovuğunda Pofuduk adında bir baykuş yavrusu yaşardı. Pofuduk bugüne kadar hep annesinin kanadının altına sokulmuş, dışarıya hiç bakmamıştı. Ama bu gece farklıydı. Annesi “Artık büyüdün, gel, dışarıya bakalım” dedi.",
      "Pofuduk kovuğun ağzına çıktı ve başını kaldırdı. Gözleri kocaman açıldı.",
      "Gökyüzü yıldızlarla doluydu! Bazıları bir kum tanesi kadar küçük, bazıları bir kandil kadar parlaktı. Ay, gümüş bir tabak gibi tepenin üstünde duruyordu. Uzaktan bir dere şırıldıyor, cırcır böcekleri şarkı söylüyor, serin rüzgâr yaprakları hışırdatıyordu.",
      "Pofuduk yıldızları saymaya başladı: “Bir, iki, üç... yüz...” Ama yıldızlar bitmiyordu; saydıkça yenileri beliriyordu.",
      "“Anne, bunları kim yarattı? Hepsini kim yerinde tutuyor?”",
      "Annesi yumuşak bir sesle cevap verdi: “Her şeyi yaratan Allah, yavrum. Bak, dere de, rüzgâr da, böcekler de O'nu anıyor.”",
      "Pofuduk bir süre sessizce dinledi. Sonra minicik gagasıyla fısıldadı: “Sübhânallah.”"
    ],
    soz: "Durup bakan hayran kalır. Hayran kalan kalp Allah'ı anar.",
    kucukler: "Pofuduk yıldızları görünce “Sübhânallah” dedi.",
    soru: "Seni en son hayran bırakan şey neydi? Bu akşam pencereden gökyüzüne bakalım mı?"
  },
  {
    vadi: "fakr", vadiAd: "Fakr ü Fenâ Vadisi", baslik: "Öne Geçmek İsteyen Tavus", e: "🦚",
    paragraflar: [
      "Kuşlar uzun bir yolculuğa çıkacaktı. Yola çıkmadan önce kimin önden uçacağını konuşmaya başladılar.",
      "Tavus kuşu Şaşaa kuyruğunu yelpaze gibi açtı: “Elbette ben! En güzel tüyler bende, en parlak renkler bende. Önde ben olmalıyım!”",
      "Kuşlar birbirine baktı, kimse bir şey diyemedi. Şaşaa en öne geçti ve sürü havalandı.",
      "Ama çok geçmeden sis bastırdı. Önünü göremeyen Şaşaa sağa döndü, sola döndü; sürü dağılmaya başladı. Tam o sırada arkadan ince bir ses duyuldu: “Bu yolu biliyorum! Her yıl annemle geçerdik. Dereyi takip edersek sisten çıkarız.”",
      "Bu, sürünün en küçüğü, minik serçe Cıvıl'dı.",
      "Şaşaa bir an durdu. İçinden “Ben bu kadar güzelken bu minicik kuşun arkasından mı uçacağım?” diye geçirdi. Sonra sürüye baktı: herkes yorgundu, herkes yolunu kaybetmişti.",
      "Şaşaa derin bir nefes aldı: “Cıvıl, sen önden uç. Biz de arkandan geliyoruz.”",
      "Cıvıl'ın arkasında sürü sisten çıktı ve güneşli bir vadiye kondu. Kuşlar Cıvıl'a teşekkür etti. Ama en çok da Şaşaa'yı takdir ettiler, çünkü “ben” demeyi bırakıp “biz” diyebilmişti."
    ],
    soz: "Alçakgönüllü kalp en yükseğe uçar. “Ben” yerine “biz” diyen, sürüyü kurtarır.",
    kucukler: "Tavus, minik serçenin arkasından uçmayı kabul etti ve herkes yolunu buldu.",
    soru: "“Ben” yerine “biz” demek ne zaman zor geliyor?"
  }
];

/* Sekiz kuş: sezon başında her aile üyesi birini seçer (aynı kuşu iki kişi seçemez). */
const KUSLAR = [
  { id: "bulbul", ad: "Bülbül", e: "🌹", karakter: "Romantik, duygulu, şarkıcı", bahane: "Gülüne âşıktır, onu bırakıp yola çıkamaz.", gorev: "Bu hafta en sevdiğin bir şeyden bir gün uzak dur ve onun yerine ailene vakit ayır." },
  { id: "papagan", ad: "Papağan", e: "🦜", karakter: "Konuşkan, neşeli, gösterişli", bahane: "Ölümsüzlük suyunu arar, sonsuza dek yaşamak ister.", gorev: "Bu hafta oyunu kendi isteğinle zamanında bitir." },
  { id: "tavus", ad: "Tavus", e: "🦚", karakter: "Güzel, özenli, biraz kendini beğenmiş", bahane: "Cennetteki eski yerine dönmekten başka bir şey düşünmez.", gorev: "Bu hafta karşılık beklemeden üç iyilik yap." },
  { id: "keklik", ad: "Keklik", e: "💎", karakter: "Titiz, biriktirici", bahane: "Değerli taşlara, mücevherlere düşkündür.", gorev: "Bu hafta bir eşyanı kardeşinle ya da arkadaşınla paylaş." },
  { id: "sahin", ad: "Şahin", e: "🦅", karakter: "Güçlü, gururlu", bahane: "Sultanın kolunda yaşamaktan vazgeçmez.", gorev: "Bu hafta evdeki en küçüğün bir isteğini sevinerek yerine getir." },
  { id: "serce", ad: "Serçe", e: "🐦", karakter: "Minik, çekingen, sevimli", bahane: "“Ben çok küçük ve zayıfım, bu yol bana göre değil” der.", gorev: "Bu hafta daha önce hiç denemediğin bir işi dene." },
  { id: "baykus", ad: "Baykuş", e: "🦉", karakter: "Sessiz, yalnız, meraklı", bahane: "Yıkıntılarda gizli hazine bekler, köşesinden çıkmaz.", gorev: "Bu hafta aileye bir oyun ya da etkinlik teklif et." },
  { id: "huma", ad: "Hüma", e: "✨", karakter: "İhtişamlı, övgüye düşkün", bahane: "Gölgesinin düştüğü kişinin padişah olduğunu söyler, şöhretine güvenir.", gorev: "Bu hafta birinden yeni bir şey öğren ve ona teşekkür et." }
];

/* Bahane Avcısı: k = kuş id, b = canlandırılacak bahane, c = Hüdhüd'ün cevabı, h = hayattaki karşılığı, y = yetişkin sürümü */
const BAHANE_KARTLARI = [
  { k: "bulbul", b: "Gülümü bırakamam, onsuz şarkı söyleyemem!", c: "Gül bir mevsim açar, sonra solar. Bir mevsimlik güzellik için bütün yolu kaçırma.", h: "Ekrandan kalkıp aileyle vakit geçirmek", y: "Telefonumu bırakamam, bir mesaja daha bakayım!" },
  { k: "bulbul", b: "Bu şarkı bitmeden kalkmam! Bir kere daha, bir kere daha!", c: "En güzel şarkı, sevdiklerinle birlikte söylenendir.", h: "Çağrılınca hemen gelmek", y: "Bir bölüm daha izleyeyim, sonra gelirim!" },
  { k: "bulbul", b: "Bahçemden çıkarsam gülüm üzülür, ben burada kalayım!", c: "Gülün seni bekler, ama yol seni beklemez. Dönünce ona anlatacak güzel hikâyelerin olur.", h: "Yeni bir yere, yeni bir etkinliğe katılmak", y: "Evden çıkmayalım, burası çok rahat." },
  { k: "papagan", b: "Eğlence hiç bitmesin, ben sonsuza kadar oynamak istiyorum!", c: "Her güzel şeyin bir zamanı vardır; zamanında bırakmayı bilen, yarın yine oynar.", h: "Yatma saatine uymak", y: "Gece yarısına kadar otursam ne olur ki?" },
  { k: "papagan", b: "Ben konuşurum, konuşurum, siz de beni dinlersiniz!", c: "Dinlemeyi bilen kuş, yeni şarkılar öğrenir.", h: "Söz kesmeden dinlemek", y: "Ben anlatayım, sen sonra anlatırsın." },
  { k: "papagan", b: "Bir şeker daha! Bir tane daha! Bir tane daha!", c: "Doymayı bilen midenin de kalbin de keyfi yerinde olur.", h: "Yeterince olanla yetinmek", y: "Bir dilim daha pasta alayım, son olsun." },
  { k: "tavus", b: "Ödülü ne? Ödül yoksa ben kanat bile çırpmam!", c: "En güzel iyilik, karşılık beklemeden yapılandır.", h: "Karşılıksız yardım etmek", y: "Bunun bana ne faydası var ki?" },
  { k: "tavus", b: "Önce tüylerimi düzelteyim, aynaya bakayım, sonra gelirim!", c: "Asıl güzellik tüylerde değil, kalptedir.", h: "Görünüşe fazla takılmamak", y: "Fotoğrafını çekmeden başlamayın!" },
  { k: "tavus", b: "Herkes bana baksın, alkışlasın! Alkış yoksa yapmam!", c: "Kimse görmese de yapılan iyilik, en parlak tüyden güzeldir.", h: "Gösteriş için değil, gönülden yapmak", y: "Kimse fark etmeyecekse neden uğraşayım?" },
  { k: "keklik", b: "Bu taşlar benim, hepsi benim, kimseye vermem!", c: "Taşların parlaklığı gider; paylaştığın sevinç hep kalır.", h: "Oyuncağını paylaşmak", y: "Bu benim, kimse dokunmasın!" },
  { k: "keklik", b: "Kardeşim boyalarımı kullanırsa bozar, vermem!", c: "Ödünç verdiğin her şey arkadaşlığını büyütür. Nasıl kullanacağını güzelce anlatabilirsin.", h: "Eşyasını özenle ödünç vermek", y: "Arabamı kimseye vermem, çizerler!" },
  { k: "keklik", b: "Bütün kurabiyeleri ben saklayayım, belki sonra yerim!", c: "Saklanan kurabiye bayatlar, paylaşılan kurabiye tatlanır.", h: "Sofrayı paylaşmak", y: "En güzel parça benim payım!" },
  { k: "sahin", b: "Ben sultanın kuşuyum, sıraya girmem!", c: "Gerçek büyüklük, küçüklere yer açmaktır.", h: "Küçük kardeşe sıra vermek", y: "Ben büyüğüm, benim dediğim olur!" },
  { k: "sahin", b: "Ben en hızlı uçarım, yavaşları beklemem!", c: "Sürü, en yavaş kuşuyla birlikte varır.", h: "Geride kalanı beklemek", y: "Yetişemeyen kalsın, işimiz var!" },
  { k: "sahin", b: "O iş benim işim değil, onu başkası yapsın!", c: "Sultanın şahini de yuvasına çöp taşır; işin küçüğü yoktur.", h: "Ev işlerine yardım etmek", y: "Ben yorgunum, ev işlerini başkası halletsin." },
  { k: "serce", b: "Ben çok minicikçim, bu yol bana göre değil!", c: "Küçük kanatlar da uçar; yeter ki sürüden ayrılma.", h: "Yeni bir şeyi denemek", y: "Bu yaştan sonra ben öğrenemem." },
  { k: "serce", b: "Ya düşersem? Ya beceremezsem? Hiç denemeyeyim!", c: "Düşmekten korkan kuş uçmayı hiç öğrenemez.", h: "Hata yapmaktan korkmamak", y: "Ya yanlış yaparsam? Herkes güler." },
  { k: "serce", b: "Herkes benden büyük, benim sözüm dinlenmez ki!", c: "Küçük kuşun sesi de duyulur; yeter ki güzel söylesin.", h: "Fikrini nazikçe söylemek", y: "Benim fikrim önemli değil, siz bilirsiniz." },
  { k: "baykus", b: "Köşemden çıkmam, burada bir hazine var!", c: "Asıl hazine, birlikte uçtuğun dostlarındır.", h: "Odadan çıkıp aileye katılmak", y: "Çalışma odamdan çıkamam, işim var." },
  { k: "baykus", b: "Ben kimseyle konuşmam, selam bile vermem!", c: "Selam veren kuşun dostu çok olur.", h: "Selam verip sohbet etmek", y: "Komşularla tanışmama gerek yok." },
  { k: "baykus", b: "Kimse beni anlamıyor, ben tek başıma takılırım!", c: "Derdini paylaşan kuşun kanadı hafifler.", h: "Duygularını ailesiyle paylaşmak", y: "Kimseye dert anlatmam, kendim hallederim." },
  { k: "huma", b: "Gölgem kimin üstüne düşerse o kral olur, ben zaten en iyisiyim!", c: "Kendini en iyi sanan yolda durur; öğrenmeye devam eden ileri gider.", h: "Öğrenmeye açık olmak", y: "Ben bunu zaten bilirim, anlatmana gerek yok." },
  { k: "huma", b: "Ben hiç hata yapmam, hata hep başkasında!", c: "Hatasını kabul eden kuş daha yükseğe uçar.", h: "Özür dilemek", y: "Ben yanılmam, sen yanlış anladın." },
  { k: "huma", b: "Kaybedersem oyunu bozarım, ben hep kazanmalıyım!", c: "Kazanmak güzeldir, ama birlikte oynamak daha güzeldir.", h: "Kaybetmeyi kabullenmek", y: "Tartışmada son sözü hep ben söylerim." }
];
