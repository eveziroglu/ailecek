/* Sürüm etiketi: node surum.mjs ile güncellenir; index.html ile aynı olmalı. */
const KAINAT_SURUM = "20261122-1804";
/* ============ HAFTALIK ETKİNLİK: KÂİNAT KİTABI ============
   Aile her hafta doğadan bir "sayfa" okur: üç gözlem görevi, oyun gecesinde Kâinat Anı, sonra sayfa ailenin kitabına girer.
   İlkeler: Kâinat Allah'ı temsil etmez, O'nun eseridir; Allah hiçbir şeye benzemez (Şûrâ, 11).
   "Doğa yaptı" denmez, "Allah böyle yaratmış" denir. Ayetler bilimin kanıtı olarak sunulmaz; bilgi ayrı kutuda verilir.
   Hayvana ve bitkiye zarar veren görev yoktur: bak, dokunma. Ayetler yayından önce bir hoca tarafından kontrol edilmelidir. */

const KAINAT_SOZ = {
  davet: "Yeni bir kitap açıldı: Kâinat Kitabı! Kur'an okunan bir kitaptır, kâinat da bakılan bir kitap. Her hafta bir sayfasını birlikte okuyalım.",
  kitap: "İşte Kâinat Kitabımız! On iki sayfası var. Her sayfa bir hafta sürer.",
  acilis: "Kitabı açmak için tek şey lazım: bakmak! Bu hafta üç görevimiz var.",
  anGiris: "Kâinat Anı! Bu hafta neler gördünüz? Sırayla anlatın.",
  hayret: "Biliyor muydunuz?",
  tefekkur: "Şimdi biraz düşünelim.",
  sukur: "Hep birlikte söyleyelim: Sübhânallah! Elhamdülillah!",
  yazildi: "Sayfa kitabımıza yazıldı. Allah gözümüzü ve kalbimizi O'nun eserlerine açık tutsun.",
  ara: "Bu hafta ara verelim. Sayfa sizi bekler.",
  finalGiris: "On iki sayfa doldu! Kâinat Kitabımızı baştan sona birlikte çevirelim.",
  belge: "Kâinat Kitabınız tamamlandı! Allah bakan gözlerinizi ve düşünen kalplerinizi artırsın.",
  son: "Kâinat Kitabı bitmez; her gün yeni bir sayfa açılır. Bakmaya devam edelim!"
};

const KAINAT_FINAL_AYET = {
  text: "Göklerin ve yerin yaratılışında, gece ile gündüzün birbiri ardınca gelişinde akıl sahipleri için işaretler vardır. Onlar ayakta, otururken ve yanları üzerine yatarken Allah'ı anarlar, göklerin ve yerin yaratılışını düşünürler: Rabbimiz! Sen bunu boşuna yaratmadın.",
  ref: "Âl-i İmrân Suresi, 190-191"
};

/* mevsim: uygulamanın bu sayfayı önereceği aylar (1-12). Her sayfa her zaman seçilebilir. */
const HER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], ILKYAZ = [3, 4, 5, 6, 7, 8], SONKIS = [9, 10, 11, 12, 1, 2];
const KAINAT_SAYFALAR = [
  { id: "gokyuzu", e: "🌅", ad: "Gökyüzü, gece ve gündüz", color: "--cini", mevsim: HER,
    giris: "Bu hafta başımızı kaldırıp gökyüzüne bakıyoruz. Güneş her gün doğuyor, her akşam batıyor. Hiç şaşmadan!",
    ayet: { text: "Göklerin ve yerin yaratılışında, gece ile gündüzün birbiri ardınca gelişinde akıl sahipleri için işaretler vardır.", ref: "Âl-i İmrân Suresi, 190" },
    gorevler: ["Güneşin battığı yönü balkondan ya da pencereden bulun.", "Üç gün aynı saatte gökyüzünün rengine bakın. Ne değişiyor?", "Akşam ezanıyla güneşin batışını birlikte izleyin."],
    soru: "Hep gündüz olsaydı ne olurdu? Hiç uyuyabilir miydik?",
    bilgi: "Güneşin ışığı bize yaklaşık 8 dakikada ulaşır." },
  { id: "ay", e: "🌙", ad: "Ay", color: "--firuze", mevsim: HER,
    giris: "Bu hafta her akşam Ay'a bakacağız. Bazen ince bir hilal, bazen kocaman yuvarlak. Ay bize bir şey anlatıyor!",
    ayet: { text: "Güneşi bir ışık, Ay'ı bir nur yapan ve yılların sayısını, hesabı bilesiniz diye ona konaklar belirleyen O'dur.", ref: "Yûnus Suresi, 5" },
    gorevler: ["Bir hafta her akşam Ay'a bakın.", "Ay'ın şeklini her gün bir kâğıdın köşesine çizin.", "Hicri ayın başında ince hilali birlikte arayın."],
    soru: "Allah Ay'ı neden her gece biraz farklı gösteriyor olabilir?",
    bilgi: "Ay bize hep aynı yüzünü gösterir; öbür yüzünü Dünya'dan hiç göremeyiz." },
  { id: "yagmur", e: "🌧️", ad: "Yağmur ve bulut", color: "--cini", mevsim: SONKIS,
    giris: "Bu hafta yağmuru bekliyoruz! Gökten damla damla düşen su nereden geliyor, nereye gidiyor?",
    ayet: { text: "Gökten bereketli bir su indirdik de onunla bahçeler ve biçilecek taneler bitirdik.", ref: "Kâf Suresi, 9" },
    gorevler: ["Yağmur yağarken pencereden damlaların sesini dinleyin.", "Balkona bir bardak koyun. Bir yağmurda ne kadar su birikiyor?", "Yağmur yağarken Peygamberimizin (s.a.v.) duasını okuyun: “Allah'ım, faydalı bir yağmur yağdır.” (Buhârî, İstiskâ 23)"],
    soru: "Bulutlar bu kadar suyu nasıl taşıyor? Hepsi birden yağsaydı ne olurdu?",
    bilgi: "Orta büyüklükte bir bulut yüzlerce ton su taşıyabilir." },
  { id: "tohum", e: "🌱", ad: "Tohum ve filiz", color: "--zumrut", mevsim: HER,
    giris: "Bu hafta küçücük bir tohumun içindeki sırrı arıyoruz. Kuru bir taneden yemyeşil bir filiz nasıl çıkıyor?",
    ayet: { text: "Tohumu ve çekirdeği yaran şüphesiz Allah'tır.", ref: "En'âm Suresi, 95" },
    gorevler: ["Mutfaktaki bir meyvenin çekirdeğine yakından bakın.", "Islak pamukta bir fasulye çimlendirin. Her gün ne değişiyor?", "Filizlenen fasulyeyi birlikte bir saksıya dikin."],
    soru: "Kuru görünen bir tohumun içinde koca bir bitki nasıl saklı?",
    bilgi: "Tohum nasıl konursa konsun, kökü aşağıya, filizi yukarıya doğru uzanır." },
  { id: "ari", e: "🐝", ad: "Arı", color: "--kandil", mevsim: ILKYAZ,
    giris: "Bu hafta çiçekten çiçeğe uçan çalışkan bir dostumuzu izliyoruz: bal arısı!",
    ayet: { text: "Rabbin bal arısına ilham etti… Onların karnından çeşit renklerde bir içecek çıkar; onda insanlar için şifa vardır.", ref: "Nahl Suresi, 68-69" },
    gorevler: ["Bir arının çiçeğe konduğunu uzaktan izleyin.", "Arılar hangi renk çiçekleri seçiyor? Sayalım.", "Bir kaşık balı tadın; kaç çiçekten geldiğini tahmin edin."],
    soru: "Arı balı yalnızca kendisi için mi yapıyor? Allah onu neden böyle yaratmış olabilir?",
    bilgi: "Bir bal arısı bütün ömrü boyunca bir çay kaşığının on ikide biri kadar bal yapar." },
  { id: "karinca", e: "🐜", ad: "Karınca", color: "--nar", mevsim: ILKYAZ,
    giris: "Bu hafta yerde, küçük ama çok çalışkan bir orduyu izliyoruz: karıncalar! Kur'an'da onların adını taşıyan bir sure var.",
    ayet: { text: "Bir karınca: Ey karıncalar! Yuvalarınıza girin; Süleyman ve ordusu farkında olmadan sizi ezmesin, dedi.", ref: "Neml Suresi, 18" },
    gorevler: ["Bir karınca yolu bulun ve yuvayı bozmadan izleyin.", "Yolun yanına bir şeker kırıntısı bırakın. Sonra ne oluyor?", "Hz. Süleyman ile karınca kıssasını birlikte okuyun."],
    soru: "Karıncalar birbirine yolu nasıl haber veriyor?",
    bilgi: "Karıncalar kendi ağırlıklarının 10 ila 50 katını taşıyabilir ve yollarını kokuyla işaretler." },
  { id: "kuslar", e: "🐦", ad: "Kuşlar", color: "--firuze", mevsim: HER,
    giris: "Bu hafta gökyüzünün yolcularını izliyoruz. Hüdhüd de bir kuş, biliyorsunuz! Kanatlarıma iyi bakın.",
    ayet: { text: "Başlarının üstünde kanat çırparak ve kanat kapayarak uçan kuşları görmüyorlar mı? Onları Rahmân'dan başkası havada tutmuyor.", ref: "Mülk Suresi, 19" },
    gorevler: ["Bir kuşun kanat çırpışını izleyin.", "Pencereden kaç farklı kuş görüyorsunuz? Sayın.", "Balkona kuşlar için bir su kabı koyun."],
    soru: "Kuş havada nasıl düşmüyor?",
    bilgi: "Kuşların kemiklerinin çoğu içi boş ve hafiftir." },
  { id: "su", e: "💧", ad: "Su", color: "--cini", mevsim: HER,
    giris: "Bu hafta her gün kullandığımız ama pek fark etmediğimiz bir nimete bakıyoruz: su!",
    ayet: { text: "Her canlıyı sudan yarattık.", ref: "Enbiyâ Suresi, 30" },
    gorevler: ["Bir gün boyunca evde suyu nerelerde kullandığınızı sayın.", "Bir buz küpü ne kadar sürede eriyor? Ölçün.", "Ailece bir “musluk açık kalmasın” günü yapın."],
    soru: "Su olmasaydı bugün neyi yapamazdık?",
    bilgi: "Vücudumuzun yarısından fazlası sudur." },
  { id: "renkler", e: "🌈", ad: "Renkler ve gökkuşağı", color: "--lale", mevsim: ILKYAZ,
    giris: "Bu hafta renklerin peşindeyiz! Allah dünyayı ne kadar çok renkle süslemiş, hiç saydınız mı?",
    ayet: { text: "Allah'ın gökten su indirdiğini görmedin mi? Onunla renkleri farklı ürünler çıkardık.", ref: "Fâtır Suresi, 27" },
    gorevler: ["Bugün gördüğünüz en güzel rengi söyleyin.", "Mutfakta kaç farklı renkte meyve ve sebze var? Sayın.", "Güneşli bir günde bir bardak suyla duvarda gökkuşağı yapmayı deneyin."],
    soru: "Dünya siyah beyaz olsaydı ne kaybederdik?",
    bilgi: "Gökkuşağı, güneş ışığının yağmur damlalarında kırılmasıyla oluşur; güneş arkamızdayken görünür." },
  { id: "agac", e: "🍂", ad: "Ağaç ve yaprak", color: "--kandil", mevsim: [9, 10, 11],
    giris: "Bu hafta ağaçlara bakıyoruz. Yapraklar sarardı, kızardı, yere düştü. Ağaç uyuyor mu?",
    ayet: { text: "O'nun bilgisi dışında bir yaprak bile düşmez.", ref: "En'âm Suresi, 59" },
    gorevler: ["Yere düşmüş, farklı renkte üç yaprak toplayın.", "Yaprakların damarlarına yakından bakın. Neye benziyor?", "Yaprakları kurutup bir deftere yapıştırın: ailenin kâğıt Kâinat Kitabı!"],
    soru: "Ağaç kışın kuru görünüyor. Baharda yeniden nasıl yeşeriyor?",
    bilgi: "Yaprağın yeşil rengi klorofilden gelir. Sonbaharda klorofil azalınca, yaprakta saklı duran sarı ve turuncu renkler görünür." },
  { id: "sofra", e: "🍎", ad: "Sofraya gelen nimetler", color: "--nar", mevsim: HER,
    giris: "Bu hafta her gün önümüze gelen bir kitabı okuyoruz: sofra! Tabağımızdaki her lokmanın bir hikâyesi var.",
    ayet: { text: "Öyleyse insan yediğine bir baksın.", ref: "Abese Suresi, 24" },
    gorevler: ["Akşam yemeğinde tabaktakilerin nereden geldiğini sayın.", "Bir elmayı enine kesin. Çekirdekler nasıl dizilmiş?", "Bir yemeğe emeği geçenleri sayın ve onlar için dua edin."],
    soru: "Bir dilim ekmeğin sofraya gelmesi için kaç kişi ve kaç nimet gerekti?",
    bilgi: "Elma enine kesilince çekirdek yuvası beş köşeli bir yıldız gibi görünür." },
  { id: "beden", e: "👁️", ad: "Bedenimiz", color: "--zumrut", mevsim: HER,
    giris: "Bu hafta en yakınımızdaki kitabı okuyoruz: kendi bedenimizi! Gözümüz, elimiz, kalbimiz hiç durmadan çalışıyor.",
    ayet: { text: "Biz ona iki göz, bir dil ve iki dudak vermedik mi?", ref: "Beled Suresi, 8-9" },
    gorevler: ["Aynada gözünüze bakın. Işığa bakınca göz bebeği nasıl değişiyor?", "Bir dakikada kaç kez göz kırptığınızı sayın: biri sayar, biri kırpar.", "Gözler kapalı, bir meyveyi koklayıp dokunarak tahmin edin."],
    soru: "Gözümüz olmasaydı en çok neyi özlerdik?",
    bilgi: "Göz bebeği karanlıkta büyür, aydınlıkta küçülür. İnsan dakikada yaklaşık 15-20 kez göz kırpar." }
];

/* Hayret! mini oyunu: doğru mu, şaka mı? d: true doğru, false şaka. k: bağlı olduğu sayfa. */
const HAYRET = [
  { k: "gokyuzu", e: "☀️", s: "Güneş bir yıldızdır.", d: true, a: "Güneş bize en yakın yıldızdır. Diğer yıldızlar çok uzakta olduğu için küçük görünür." },
  { k: "gokyuzu", e: "⏱️", s: "Güneşin ışığı Dünya'ya bir saniyede gelir.", d: false, a: "Güneşin ışığı bize yaklaşık 8 dakikada gelir." },
  { k: "gokyuzu", e: "🌍", s: "Dünya hem kendi etrafında hem de Güneş'in etrafında döner.", d: true, a: "Kendi etrafında dönmesi gece ile gündüzü, Güneş'in etrafında dönmesi yılı getirir." },
  { k: "ay", e: "🌕", s: "Ay kendi ışığıyla parlar.", d: false, a: "Ay, Güneş'in ışığını yansıtır." },
  { k: "ay", e: "🌙", s: "Ay bize hep aynı yüzünü gösterir.", d: true, a: "Ay'ın öbür yüzünü Dünya'dan hiç göremeyiz." },
  { k: "ay", e: "🗓️", s: "Hicri aylar Ay'ın hilaliyle başlar.", d: true, a: "Ramazan ayı da hilalin görülmesiyle başlar." },
  { k: "yagmur", e: "💧", s: "Yağmur damlaları gözyaşı şeklindedir.", d: false, a: "Küçük damlalar yuvarlaktır; büyük damlaların altı düşerken yassılaşır." },
  { k: "yagmur", e: "☁️", s: "Bulutlar minicik su damlacıklarından oluşur.", d: true, a: "Damlacıklar birleşip ağırlaşınca yağmur olarak yere düşer." },
  { k: "yagmur", e: "⛅", s: "Bir bulut yüzlerce ton su taşıyabilir.", d: true, a: "Hafif görünen bir bulutta bile çok su vardır." },
  { k: "tohum", e: "🌱", s: "Tohum nasıl ekilirse ekilsin, kökü aşağıya uzanır.", d: true, a: "Allah bitkiye yönünü bulma yeteneği vermiş: kök aşağıya, filiz yukarıya." },
  { k: "tohum", e: "🪴", s: "Bitkiler suyu yapraklarıyla topraktan çeker.", d: false, a: "Bitkiler suyu kökleriyle alır; su gövdeden yapraklara kadar çıkar." },
  { k: "tohum", e: "⏳", s: "Bir tohum ekildiği gün filizlenir.", d: false, a: "Tohumların çoğu birkaç gün ister. Bahçıvan sabırlıdır." },
  { k: "ari", e: "🐝", s: "Arılar dans ederek birbirine çiçeklerin yerini anlatır.", d: true, a: "Kovana dönen arının dansı, çiçeklerin yönünü ve uzaklığını gösterir." },
  { k: "ari", e: "🍯", s: "Bir arı ömrü boyunca bir kavanoz bal yapar.", d: false, a: "Bir arı ömrü boyunca bir çay kaşığının on ikide biri kadar bal yapar. Bir kavanoz bal binlerce arının emeğidir." },
  { k: "ari", e: "🫙", s: "Bal doğru saklanırsa çok uzun süre bozulmaz.", d: true, a: "Allah balı bozulmaya karşı dayanıklı yaratmış." },
  { k: "karinca", e: "🐜", s: "Karıncalar kendi ağırlıklarından çok daha ağır yük taşıyabilir.", d: true, a: "Bir karınca kendi ağırlığının 10 ila 50 katını taşıyabilir." },
  { k: "karinca", e: "👃", s: "Karıncalar yollarını kokuyla işaretler.", d: true, a: "Arkadan gelen karıncalar bu kokuyu takip ederek yemeği bulur." },
  { k: "karinca", e: "🕷️", s: "Örümcek bir böcektir.", d: false, a: "Örümceğin sekiz bacağı vardır; böceklerin ise altı bacağı vardır." },
  { k: "kuslar", e: "🪶", s: "Kuşların kemiklerinin çoğu içi boştur.", d: true, a: "İçi boş kemikler kuşu hafif tutar." },
  { k: "kuslar", e: "🐧", s: "Penguen bir kuştur.", d: true, a: "Penguen uçamaz ama kuştur; kanatlarıyla suda yüzer." },
  { k: "kuslar", e: "🦇", s: "Yarasa bir kuştur.", d: false, a: "Yarasa uçar ama kuş değildir; yavrusunu emziren bir memelidir." },
  { k: "su", e: "🚰", s: "Vücudumuzun yarısından fazlası sudur.", d: true, a: "Bu yüzden her gün su içmemiz gerekir." },
  { k: "su", e: "🐪", s: "Deve hörgücünde su saklar.", d: false, a: "Hörgüçte yağ saklanır; deve onunla günlerce yemeden yol alabilir." },
  { k: "su", e: "🧊", s: "Buz suyun üstünde yüzer.", d: true, a: "Bu sayede kışın göller üstten donar, balıklar altta yaşamaya devam eder." },
  { k: "renkler", e: "🌈", s: "Gökkuşağını görmek için Güneş arkamızda olmalıdır.", d: true, a: "Güneş ışığı önümüzdeki yağmur damlalarında kırılır ve renklere ayrılır." },
  { k: "renkler", e: "🦩", s: "Flamingolar yumurtadan pembe çıkar.", d: false, a: "Yavrular gri-beyaz doğar; yedikleri yiyeceklerdeki renk onları zamanla pembeleştirir." },
  { k: "renkler", e: "🦋", s: "Kelebeğin kanatlarındaki renkler minicik pullardan oluşur.", d: true, a: "Bu pullar o kadar küçüktür ki toz gibi görünür. Bu yüzden kelebeğin kanadına dokunmayız." },
  { k: "agac", e: "🌳", s: "Bir ağacın yaşını gövdesindeki halkalardan anlayabiliriz.", d: true, a: "Ağaç her yıl gövdesine yeni bir halka ekler." },
  { k: "agac", e: "🍁", s: "Sarı ve turuncu renk yaprağa sonbaharda sonradan gelir.", d: false, a: "Bu renkler yaprakta hep vardır; yeşil renk azalınca görünür hâle gelir." },
  { k: "agac", e: "🍃", s: "Yapraklar bize oksijen verir.", d: true, a: "Yapraklar havadaki karbondioksiti alır, soluduğumuz oksijeni verir." },
  { k: "sofra", e: "🍎", s: "Elma enine kesilince içinde bir yıldız şekli görünür.", d: true, a: "Çekirdek yuvası beş köşeli bir yıldız gibi dizilmiştir." },
  { k: "sofra", e: "🍌", s: "Muz ağaçta yukarıya doğru kıvrılarak büyür.", d: true, a: "Muzlar önce aşağı sarkar, sonra uçları ışığa doğru yukarı kıvrılır." },
  { k: "sofra", e: "🥜", s: "Yer fıstığı ağaçta yetişir.", d: false, a: "Yer fıstığı, adı üstünde, toprağın altında büyür." },
  { k: "beden", e: "🦴", s: "Bebeklerin kemik sayısı yetişkinlerden fazladır.", d: true, a: "Bebekte 300'e yakın kemik vardır; büyüdükçe bazıları birleşir ve 206 olur." },
  { k: "beden", e: "❤️", s: "Kalbimiz bir günde yaklaşık 100 bin kez atar.", d: true, a: "Biz uyurken bile kalbimiz hiç durmadan çalışır." },
  { k: "beden", e: "🖐️", s: "İki insanın parmak izi tıpatıp aynı olabilir.", d: false, a: "Her insanın parmak izi farklıdır; ikizlerin bile." }
];

GAMES.hayret = { name: "Hayret!", color: "--firuze", ico: "😮", short: "Doğru mu, şaka mı?" };
GAMES.kainat = { name: "Kâinat Anı", color: "--cini", ico: "🔭", short: "Bu hafta neler gördük?" };
ROZETLER.push(
  { id: "kainat-okuru", e: "🔭", ad: "Kâinat Okuru", nasil: "Kâinat Kitabı'nın ilk sayfasını okuyun.", olcut: "kksayfa", hedef: 1 },
  { id: "gezgin", e: "🧭", ad: "Gezgin", nasil: "Kâinat Kitabı'nda altı sayfa okuyun.", olcut: "kksayfa", hedef: 6 },
  { id: "kainat-kitabi", e: "📗", ad: "Kâinat Kitabımız", nasil: "Kâinat Kitabı'nın on iki sayfasını da okuyun.", olcut: "kksayfa", hedef: 12 }
);

const KK = (() => {
  const st = () => (P.kk ||= { aktif: null, sayfalar: {}, finalDone: 0 });
  const sayfa = id => KAINAT_SAYFALAR.find(x => x.id === id);
  const unlocked = () => landsDone() >= 3 || !!P.freeAll;
  const okundu = id => !!st().sayfalar[id];
  const okunanSay = () => KAINAT_SAYFALAR.filter(x => okundu(x.id)).length;
  const aktif = () => { const a = st().aktif; return a && sayfa(a.id) ? a : null; };
  const ay = () => new Date().getMonth() + 1;
  const oneri = () => KAINAT_SAYFALAR.find(x => !okundu(x.id) && x.mevsim.includes(ay())) || KAINAT_SAYFALAR.find(x => !okundu(x.id)) || null;
  const tarih = t => new Date(t).toLocaleDateString("tr-TR", { day: "numeric", month: "long" });
  const ETIKET = ["Bak", "Keşfet", "Ailece dene"];
  const badgeValue = olcut => olcut === "kksayfa" ? okunanSay() : olcut === "kkfinal" ? st().finalDone : undefined;

  /* ---------- Ana sayfa kartı ---------- */
  function homeCard() {
    if (!unlocked()) return "";
    const a = aktif(), n = okunanSay();
    if (!a) {
      if (n === 12) return st().finalDone ? "" : `<section class="ak-card kk-kart" style="gap:10px"><span class="ak-label">🔭 Kâinat Kitabı · 12/12 sayfa</span>
        <b style="font:700 20px/1.25 var(--font-display)">Kitabınız doldu! Final sizi bekliyor.</b>
        <button class="ak-btn ak-btn--kandil" data-act="kk-final" data-arg="0">📗 Kâinat Kitabımız</button></section>`;
      const o = oneri();
      return `<section class="ak-card kk-kart" style="gap:10px">
        <span class="ak-label">🔭 Kâinat Kitabı · ${n}/12 sayfa${n ? "" : " · Yeni"}</span>
        <b style="font:700 20px/1.25 var(--font-display)">${n ? "Bu hafta hangi sayfayı okuyalım?" : "Her hafta doğadan bir sayfa okuyalım"}</b>
        ${o ? `<p class="small bold muted" style="margin:0">Hüdhüd'ün önerisi: ${o.e} ${esc(o.ad)}</p>` : ""}
        <div class="btn-row" style="justify-content:flex-start">${o ? `<button class="ak-btn ak-btn--kandil" data-act="kk-ac" data-arg="${o.id}">${o.e} Sayfayı aç</button>` : ""}<button class="ak-btn ak-btn--night" data-act="kk-kitap">Kitabı aç</button></div>
      </section>`;
    }
    const s = sayfa(a.id), yapilan = a.gorev.filter(Boolean).length;
    return `<section class="ak-card kk-kart" style="gap:10px;--c:var(${s.color})">
      <span class="ak-label">🔭 Kâinat Kitabı · Bu hafta</span>
      <b style="font:700 22px/1.2 var(--font-display)">${s.e} ${esc(s.ad)}</b>
      <div class="kk-gorevler">${s.gorevler.map((g, i) => `<button class="kk-gorev" data-act="kk-gorev" data-arg="${i}" aria-pressed="${!!a.gorev[i]}"><span class="kk-gorev__kutu">${a.gorev[i] ? "✓" : ""}</span><span><b>${ETIKET[i]}:</b> ${esc(g)}</span></button>`).join("")}</div>
      <label class="small bold muted" for="kk-not" style="margin:0">Ne gördük? (isteğe bağlı)</label>
      <input id="kk-not" class="ak-input" maxlength="140" placeholder="Örneğin: Üç arı saydık, hepsi mor çiçeğe kondu" value="${esc(a.not || "")}">
      <div class="btn-row" style="justify-content:flex-start">
        <button class="ak-btn ak-btn--kandil" data-act="kk-an" data-arg="0">Kâinat Anı${yapilan ? ` · ${yapilan}/3` : ""}</button>
        <button class="ak-btn ak-btn--night" data-act="kk-kitap">Kitabı aç</button>
      </div>
      <p class="small muted bold" style="margin:0">Kâinat Anı bir sonraki oyun gecesinde kendiliğinden gelir.</p>
    </section>`;
  }
  function gorev(i, el) {
    const a = aktif(); if (!a) return;
    a.gorev[+i] = !a.gorev[+i]; saveP(); sfx.pop();
    if (el) { el.setAttribute("aria-pressed", String(a.gorev[+i])); el.querySelector(".kk-gorev__kutu").textContent = a.gorev[+i] ? "✓" : ""; }
    if (a.gorev[+i]) toast("🔭", "Kâinat Kitabı", "Görev yapıldı");
  }
  function notYaz(v) { const a = aktif(); if (!a) return; a.not = v.slice(0, 140); saveP(); }

  /* Ailemiz sayfasındaki tek satır */
  function homeRow() {
    if (!unlocked()) return "";
    const a = aktif(), n = okunanSay();
    return yolSatiri({ act: "kk-kitap", ikon: a ? sayfa(a.id).e : n === 12 ? "📗" : "🔭", renk: "--cini",
      etiket: `Kâinat Kitabı · ${n}/12 sayfa`, baslik: a ? `Bu hafta: ${sayfa(a.id).ad}` : n === 12 ? (st().finalDone ? "Kitabınız tamamlandı" : "Final sizi bekliyor") : "Yeni bir sayfa açın",
      noktalar: KAINAT_SAYFALAR.map(x => okundu(x.id) ? "on" : a && a.id === x.id ? "now" : "") });
  }

  /* ---------- Kitap ekranı ---------- */
  function kitap() {
    closeSheet(); G = null; checkBadges();
    const a = aktif(), n = okunanSay();
    render(`
      ${guide(n ? KAINAT_SOZ.kitap : KAINAT_SOZ.davet)}
      <section class="ak-card" style="gap:12px">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span class="ak-label">Kâinat Kitabımız · ${n}/12 sayfa</span><span class="small bold muted">${family.map(p => p.av).join("")}</span></div>
        <div class="kk-grid">${KAINAT_SAYFALAR.map((x, i) => { const r = st().sayfalar[x.id], bu = a && a.id === x.id;
          return `<button class="kk-sayfa ${r ? "is-okundu" : ""} ${bu ? "is-current" : ""}" style="--c:var(${x.color})" data-act="kk-sayfa" data-arg="${x.id}">
            <span class="kk-sayfa__ico">${x.e}</span><b>${i + 1}. ${esc(x.ad)}</b>
            <small>${r ? `📮 ${tarih(r.t)}` : bu ? "Bu hafta" : x.mevsim.length < 12 && x.mevsim.includes(ay()) ? "🍃 Tam mevsimi" : ""}</small>
            ${r && r.not ? `<span class="kk-sayfa__not">“${esc(r.not)}”</span>` : ""}
          </button>`; }).join("")}
          <button class="kk-sayfa kk-sayfa--final ${n === 12 ? "" : "is-locked"}" data-act="kk-final" data-arg="0"><span class="kk-sayfa__ico">${n === 12 ? "📗" : "🔒"}</span><b>Kâinat Kitabımız</b><small>${st().finalDone ? "Tamamlandı" : "Final"}</small></button>
        </div>
        <p class="small muted bold" style="margin:0">Bir sayfaya dokunun: okunduysa notunuzu görürsünüz, okunmadıysa o hafta onu açarsınız.</p>
      </section>
      <button class="ak-btn ak-btn--night" data-act="home">Ana sayfa</button>`, n ? KAINAT_SOZ.kitap : KAINAT_SOZ.davet);
  }
  function sayfaTik(id) {
    const r = st().sayfalar[id], x = sayfa(id); if (!x) return;
    if (r) {
      render(`<section class="ak-card ak-card--game center" style="--c:var(${x.color})">
        <header class="ak-card__head"><span class="ak-card__title"><span class="ak-card__ico">${x.e}</span>${esc(x.ad)}</span></header>
        <span class="ak-stamp">📮 ${tarih(r.t)}</span>
        ${r.not ? `<p class="q-text">“${esc(r.not)}”</p>` : `<p class="small muted bold">Bu sayfaya not yazılmamış.</p>`}
        <blockquote>“${esc(x.ayet.text)}”<cite>${esc(x.ayet.ref)}</cite></blockquote>
        <div class="tip" style="text-align:left"><b>Biliyor muydun?</b>${esc(x.bilgi)}</div>
        <button class="ak-btn ak-btn--kandil" data-act="kk-ac" data-arg="${id}">Bu sayfayı yeniden oku</button>
        <button class="link muted" data-act="kk-kitap">Kitaba dön</button>
      </section>`, x.ayet.text);
      return;
    }
    ac(id);
  }

  /* ---------- Sayfanın açılışı ---------- */
  function ac(id) {
    const x = sayfa(id); if (!x) return kitap();
    const a = aktif();
    if (!a || a.id !== id) st().aktif = { id, basla: Date.now(), gorev: [false, false, false], not: "" };
    saveP(); sfx.flip(); closeSheet();
    const line = { text: `${x.giris} ${KAINAT_SOZ.acilis}`, ai: [x.giris, KAINAT_SOZ.acilis] };
    render(`<section class="ak-card ak-card--game ${onFor(x.color)}" style="--c:var(${x.color})">
      <header class="ak-card__head"><span class="ak-card__title"><span class="ak-card__ico">🔭</span>Kâinat Kitabı</span></header>
      ${sahne("kainat:" + id) || `<span class="mega bounce">${x.e}</span>`}
      <h2 style="font:700 28px/32px var(--font-display);margin:0;text-align:center">${esc(x.ad)}</h2>
      ${guide(line.text, { noSpeak: true })}
      <blockquote>“${esc(x.ayet.text)}”<cite>${esc(x.ayet.ref)}</cite></blockquote>
      <ol class="small" style="margin:0;padding-left:1.3em;display:grid;gap:6px;font-weight:600;text-align:left">${x.gorevler.map((g, i) => `<li><b>${ETIKET[i]}:</b> ${esc(g)}</li>`).join("")}</ol>
      <p class="small muted bold" style="margin:0">Hayvanlara ve bitkilere dokunmadan bakarız. Görevlerin hepsini yapmak şart değil.</p>
      <button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="home">Haydi bakalım!</button>
    </section>`, line);
  }

  /* ---------- Oyun gecesinde Kâinat Anı ---------- */
  function planla(G) {
    if (!unlocked() || !aktif() || G.plan.length < 3) return;
    G.plan.splice(G.plan.length - 1, 0, { group: true, type: "kainat" });
  }
  const groupLine = "Kâinat Anı! Bu hafta Kâinat Kitabı'ndan bir sayfa okuduk. Herkes ne gördüğünü anlatsın.";
  const geceIcinde = () => !!(G && G.plan && G.plan[G.i] && G.plan[G.i].type === "kainat");
  function an(step) {
    const a = aktif(); if (!a) { if (geceIcinde()) return nextTurn(); return kitap(); }
    const x = sayfa(a.id), gece = geceIcinde();
    const ileri = (lbl, s) => `<button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="kk-an" data-arg="${s}">${lbl}</button>`;
    const kisiler = (gece ? G.players : family);
    let inner, sayObj;
    if (step === 0) {
      inner = `<span class="mega bounce">${x.e}</span><h2 style="font:700 26px/30px var(--font-display);margin:0;text-align:center">${esc(x.ad)}</h2>
        ${guide(KAINAT_SOZ.anGiris, { noSpeak: true })}
        ${a.not ? `<div class="tip" style="text-align:left"><b>Notumuz</b>“${esc(a.not)}”</div>` : ""}
        <p class="small bold muted" style="margin:0;text-align:center">Görevler: ${x.gorevler.map((g, i) => `${a.gorev[i] ? "✓" : "○"} ${ETIKET[i]}`).join(" · ")}</p>
        <div class="ak-chips">${kisiler.map((p, i) => `<button class="ak-chip ak-chip--select" data-act="kk-anlatti" data-arg="${i}">${p.av} ${esc(p.name)}</button>`).join("")}</div>
        ${ileri("Herkes anlattı", 1)}`;
      sayObj = KAINAT_SOZ.anGiris;
    } else if (step === 1) {
      inner = `<span class="ak-stamp">😮 ${KAINAT_SOZ.hayret}</span><p class="q-text">${esc(x.bilgi)}</p>${ileri("Ayeti okuyalım", 2)}`;
      sayObj = { text: `${KAINAT_SOZ.hayret} ${x.bilgi}`, ai: [KAINAT_SOZ.hayret, x.bilgi] };
    } else if (step === 2) {
      inner = `<span class="mega">📖</span><blockquote>“${esc(x.ayet.text)}”<cite>${esc(x.ayet.ref)}</cite></blockquote>${ileri("Düşünelim", 3)}`;
      sayObj = x.ayet.text;
    } else if (step === 3) {
      inner = `<span class="mega">💭</span><p class="q-text">${esc(x.soru)}</p><span class="ak-chip" style="align-self:center">Önce en küçükler, sonra herkes</span>${ileri("Şükredelim", 4)}`;
      sayObj = { text: `${KAINAT_SOZ.tefekkur} ${x.soru}`, ai: [KAINAT_SOZ.tefekkur, x.soru] };
    } else {
      kapat(a);
      inner = `<span class="mega bounce">${x.e}</span><span class="ak-stamp">📮 Kitabımıza yazıldı</span>
        ${guide(KAINAT_SOZ.sukur, { noSpeak: true })}
        <p class="small bold muted" style="margin:0;text-align:center">${okunanSay()}/12 sayfa · ${esc(KAINAT_SOZ.yazildi)}</p>
        ${gece ? doneBtn() : `${okunanSay() === 12 ? ileriFinal() : ""}<button class="ak-btn ak-btn--lg ak-btn--night" data-act="kk-kitap">Kitabı aç</button>`}`;
      sayObj = [KAINAT_SOZ.sukur, KAINAT_SOZ.yazildi];
      later(() => { confetti(24); sfx.win(); }, 150);
    }
    if (gece) render(card("kainat", `<div class="stack center" style="width:100%">${inner}</div>`), sayObj);
    else { closeSheet(); render(`<section class="ak-card ak-card--game center ${onFor(x.color)}" style="--c:var(${x.color})"><header class="ak-card__head"><span class="ak-card__title"><span class="ak-card__ico">🔭</span>Kâinat Anı</span></header>${inner}</section>`, sayObj); }
  }
  const ileriFinal = () => `<button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="kk-final" data-arg="0">📗 Final: Kâinat Kitabımız</button>`;
  function kapat(a) {
    if (!a || st().aktif !== a) return;
    st().sayfalar[a.id] = { t: Date.now(), not: (a.not || "").trim(), gorev: a.gorev.filter(Boolean).length };
    st().aktif = null; saveP(); grow(1); checkBadges();
  }
  function anlatti(i, el) { if (el) el.setAttribute("aria-pressed", "true"); sfx.pop(); }

  /* ---------- Final ---------- */
  function final(step) {
    closeSheet(); G = null;
    if (okunanSay() < 12 && !P.freeAll) { toast("🔒", "Kâinat Kitabı", "Önce on iki sayfayı okuyun"); return kitap(); }
    const next = (lbl, s) => `<button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="kk-final" data-arg="${s}">${lbl}</button>`;
    const simgeler = `<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;font-size:32px">${KAINAT_SAYFALAR.map(x => `<span style="animation:hover 2.4s ease-in-out ${Math.random() * -2}s infinite;display:inline-block">${x.e}</span>`).join("")}</div>`;
    const frame = (eyebrow, inner, sayObj) => render(`<section class="ak-deed"><span class="ak-deed__eyebrow">${eyebrow}</span>${inner}</section>`, sayObj);
    if (step === 0) frame("Kâinat Kitabımız", `${simgeler}<div class="ak-on-night" style="width:100%">${guide(KAINAT_SOZ.finalGiris, { noSpeak: true })}</div>${next("Kitabı çevir", 1)}`, KAINAT_SOZ.finalGiris);
    else if (step === 1) frame("Sayfa sayfa", `<ul class="checks" style="text-align:left;width:100%">${KAINAT_SAYFALAR.map(x => { const r = st().sayfalar[x.id] || {}; return `<li><span>${x.e}</span><span><b>${esc(x.ad)}</b>${r.not ? ` · “${esc(r.not)}”` : ""}</span></li>`; }).join("")}</ul>${next("Devam", 2)}`, "Her sayfada bir şey gördük, bir şey düşündük.");
    else if (step === 2) frame("Kur'an'dan", `<span class="mega hover" style="font-size:64px">📖</span><blockquote style="color:inherit">“${esc(KAINAT_FINAL_AYET.text)}”<cite>${esc(KAINAT_FINAL_AYET.ref)}</cite></blockquote>${next("Âmin", 3)}`, KAINAT_FINAL_AYET.text);
    else if (step === 3) {
      st().finalDone = 1; saveP(); checkBadges();
      render(`<section class="cert">
          <span class="ak-deed__eyebrow">Kâinat Kitabımız</span>
          ${simgeler}
          <h2>Kâinat Kitabı</h2>
          <p class="names">${family.map(p => `${p.av} ${esc(p.name)}`).join("<br>")}</p>
          <p class="ak-deed__text" style="font-size:18px">On iki hafta boyunca gökyüzüne, suya, canlılara ve kendimize baktık; her birinde Allah'ın sanatını gördük.</p>
          <div class="ak-chips"><span class="ak-chip" style="background:var(--surface-200)">📗 12 sayfa</span></div>
          <p class="ak-deed__quote">${new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</p>
          ${next("Devam", 4)}
        </section>`, KAINAT_SOZ.belge);
      confetti(40); sfx.win();
    }
    else frame("Kitap tamam", `<span class="mega bounce" style="font-size:72px">🔭</span><div class="ak-on-night" style="width:100%">${guide(KAINAT_SOZ.son, { noSpeak: true })}</div><button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="home">Ana sayfa</button>`, KAINAT_SOZ.son);
  }

  /* ---------- Hayret! mini oyunu (çarkta) ---------- */
  function playHayret(t) {
    const a = aktif(), oncelik = a ? HAYRET.filter(h => h.k === a.id && !(G.used.hayret && G.used.hayret.has(h))) : [];
    const kartlar = [];
    while (kartlar.length < 3) {
      const h = oncelik.length ? oncelik.shift() : pick(HAYRET, "hayret");
      if (!kartlar.includes(h)) { isaretle(h, "hayret"); kartlar.push(h); }
    }
    G.cur = { kartlar, j: 0, kim: t.player };
    hayretKart();
  }
  function hayretKart() {
    const { kartlar, j, kim } = G.cur, h = kartlar[j];
    render(card("hayret", `
      <span class="ak-label" style="text-align:center">Kart ${j + 1}/3 · Önce ${esc(kim.name)} tahmin etsin</span>
      <span class="mega wiggle">${h.e}</span>
      <p class="q-text">${esc(h.s)}</p>
      <div class="hr-oy"><span>👍<small>Doğru</small></span><span>🙌<small>Şaka (eller başa)</small></span></div>
      <div id="after" class="stack center" style="width:100%"><button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="hr-oy">Herkes oy versin: 3, 2, 1!</button></div>`),
      { text: `Doğru mu, şaka mı? ${h.s}`, ai: ["Doğru mu, şaka mı?", h.s] });
  }
  function hayretOy() {
    const el = document.getElementById("after"); if (!el) return;
    let n = 3; el.innerHTML = `<span class="mega" id="hr-say">3</span>`; sfx.tick();
    const tik = () => { n--; const s = document.getElementById("hr-say"); if (!s) return; if (n > 0) { s.textContent = n; sfx.tick(); later(tik, 700); } else hayretCevap(); };
    later(tik, 700);
  }
  function hayretCevap() {
    const { kartlar, j } = G.cur, h = kartlar[j], el = document.getElementById("after"); if (!el) return;
    const son = j === 2;
    if (h.d) { confetti(14); sfx.win(); } else sfx.flip();
    el.innerHTML = `<span class="ak-stamp" style="--c:var(${h.d ? "--zumrut" : "--lale"})">${h.d ? "👍 Doğru!" : "🙌 Şaka!"}</span>
      <p style="margin:0;font-weight:700;font-size:18px;text-align:center">${esc(h.a)}${h.d ? " Sübhânallah!" : ""}</p>
      ${son ? (grow(1), doneBtn()) : `<button class="ak-btn ak-btn--lg" data-act="hr-sonraki">Sıradaki kart</button>`}`;
    say({ text: `${h.d ? "Doğru!" : "Şaka!"} ${h.a}${h.d ? " Sübhânallah!" : ""}`, ai: [h.d ? "Doğru!" : "Şaka!", h.a] });
  }
  function hayretSonraki() { G.cur.j++; hayretKart(); }

  /* ---------- Haftalık özet ve yapay zekâ sesi ---------- */
  function ozet() {
    if (!unlocked()) return "";
    const hafta = Object.entries(st().sayfalar).filter(([, r]) => Date.now() - r.t < 7 * DAY).map(([id]) => sayfa(id)).filter(Boolean);
    const a = aktif();
    if (hafta.length) return `Kâinat Kitabı: ${hafta.map(x => x.ad).join(", ")} sayfası okundu`;
    if (a) return `Kâinat Kitabı: ${sayfa(a.id).ad} sayfası açık, ${a.gorev.filter(Boolean).length}/3 görev`;
    return "";
  }
  function lines() {
    const L = [], add = (...ts) => ts.flat(Infinity).forEach(t => t && L.push(t));
    add(Object.values(KAINAT_SOZ), KAINAT_FINAL_AYET.text, groupLine, "Doğru mu, şaka mı?", "Doğru!", "Şaka!", "Her sayfada bir şey gördük, bir şey düşündük.");
    KAINAT_SAYFALAR.forEach(x => add(x.giris, x.ayet.text, x.soru, x.bilgi, `${KAINAT_SOZ.hayret} ${x.bilgi}`, `${KAINAT_SOZ.tefekkur} ${x.soru}`));
    HAYRET.forEach(h => add(h.s, h.a));
    return L;
  }

  const actions = {
    "kk-kitap": kitap, "kk-ac": ac, "kk-sayfa": sayfaTik, "kk-gorev": (a, el) => gorev(a, el),
    "kk-an": a => an(+a || 0), "kk-anlatti": (a, el) => anlatti(+a, el), "kk-final": a => final(+a || 0),
    "hr-oy": hayretOy, "hr-sonraki": hayretSonraki
  };

  return { unlocked, homeCard, homeRow, kitap, planla, groupLine, an, playHayret, badgeValue, notYaz, ozet, lines, actions, st, aktif };
})();
