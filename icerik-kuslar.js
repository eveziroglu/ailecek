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
