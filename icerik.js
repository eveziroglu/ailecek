/* Sürüm etiketi: node surum.mjs ile güncellenir; index.html ile aynı olmalı. */
const ICERIK_SURUM = "20261122-1707";
/* Ailecek oyun içeriği.
   Yeni kart eklemek için ilgili listeye bir satır eklemeniz yeterli.
   Bil Bakalım'da ilk seçenek doğru cevaptır (oyunda karıştırılır).
   Not: Ayet ve hadisler yayından önce bir hoca tarafından kontrol edilmelidir. */

const AGES = [
  { id: "k", label: "3-5 yaş", lvl: 0 },
  { id: "c", label: "6-8 yaş", lvl: 1 },
  { id: "o", label: "9-12 yaş", lvl: 2 },
  { id: "g", label: "13-17 yaş", lvl: 3 },
  { id: "y", label: "Yetişkin", lvl: 3 }
];

const AVATARS = ["🦁","🐻","🦊","🐰","🐼","🐯","🐨","🦉","🐢","🐬","🐝","🦄"];

const GAMES = {
  pandomim: { name: "Kıssa Pandomimi", color: "--nar", ico: "🎭", short: "Canlandır, ailen bilsin!" },
  bilgi: { name: "Bil Bakalım", color: "--cini", ico: "💡", short: "Doğru cevabı bul!" },
  ses: { name: "Ses Taklidi", color: "--kandil", ico: "🔊", short: "Herkes gözünü kapatsın, sadece ses!" },
  senolsan: { name: "Sen Olsan?", color: "--zumrut", ico: "🤔", short: "Sen olsan ne yapardın?" },
  hoca: { name: "Küçük Hoca", color: "--firuze", ico: "🧑‍🏫", short: "Öğretmen sensin, soruyu sen sor!" },
  saskin: { name: "Şaşkın Ebeveyn", color: "--lale", ico: "🙃", short: "Hatalar yapacak, sen yakala!" },
  hizli: { name: "Hızlı Tur", color: "--kandil", ico: "⚡", short: "30 saniyede hep birlikte sayın!" },
  kalkotur: { name: "Kalk-Otur", color: "--cini", ico: "🙋", short: "Doğruysa zıpla, yanlışsa çömel!" },
  hayvan: { name: "Hayvan Yürüyüşü", color: "--zumrut", ico: "🐾", short: "Hayvan gibi yürü, DUR deyince don!" },
  bilmece: { name: "Bilmece", color: "--lale", ico: "❓", short: "Bilmecem bilmece, bil bakalım ne?" },
  sirala: { name: "Kıssa Sıralama", color: "--firuze", ico: "🔢", short: "Olayları doğru sıraya dizin!" },
  farkli: { name: "Hangisi Farklı?", color: "--nar", ico: "🔍", short: "Gruba uymayanı bulun!" },
  kalpdoktoru: { name: "Kalp Doktoru", color: "--zumrut", ico: "🌱", short: "Kalpte hangi ot bitti? İlacını bulalım!" },
  hikaye: { name: "Hikmetli Hikâye", color: "--cini", ico: "📖", short: "Dinle, düşün, hikmeti bul!" },
  aile: { name: "Aile Kartı", color: "--kandil", ico: "🏡", short: "Ailemizin kendi sorusu!" }
};

const THEMES = {
  sukur: {
    name: "Şükür Gecesi", ico: "🤲", color: "--kandil",
    desc: "Nimetleri fark etmek ve teşekkür etmek",
    ayet: { text: "Eğer şükrederseniz, elbette size (nimetimi) artırırım.", ref: "İbrâhîm Suresi, 7. ayet" },
    hadis: { text: "İnsanlara teşekkür etmeyen, Allah'a şükretmiş olmaz.", ref: "Ebû Dâvûd, Edeb 11; Tirmizî, Birr 35" },
    soru: "Bugün kime ve hangi nimete teşekkür etmek istersin? Herkes bir tane söylesin.",
    gorev: "Bu hafta her akşam yemeğinde herkes o gün fark ettiği bir nimeti söylesin."
  },
  sabir: {
    name: "Sabır Gecesi", ico: "🌊", color: "--cini",
    desc: "Öfkeye hâkim olmak, beklemeyi bilmek",
    ayet: { text: "Ey iman edenler! Sabır ve namazla Allah'tan yardım isteyin. Şüphesiz Allah sabredenlerle beraberdir.", ref: "Bakara Suresi, 153. ayet" },
    hadis: { text: "Pehlivan, güreşte rakibini yenen değildir. Asıl pehlivan, öfkelendiği zaman kendine hâkim olandır.", ref: "Buhârî, Edeb 76; Müslim, Birr 107" },
    soru: "En son ne zaman çok sinirlendin? Şimdi düşününce ne yapabilirdin?",
    gorev: "Aile şifremiz: “Pehlivan!” Bu hafta biri sinirlenince şifreyi söyleyin ve hep birlikte üç derin nefes alın."
  },
  merhamet: {
    name: "Merhamet Gecesi", ico: "💚", color: "--nar",
    desc: "İnsanlara ve hayvanlara şefkat göstermek",
    ayet: { text: "Biz seni ancak âlemlere rahmet olarak gönderdik.", ref: "Enbiyâ Suresi, 107. ayet" },
    hadis: { text: "Merhamet etmeyene merhamet olunmaz.", ref: "Buhârî, Edeb 18" },
    soru: "Evimizde, okulda ya da sokakta merhamete en çok kimin ihtiyacı var?",
    gorev: "Bu hafta ailece bir canlıya iyilik yapın: kuşlara yem, sokak hayvanlarına su ya da yalnız bir komşuya ziyaret."
  },
  dogruluk: {
    name: "Doğruluk Gecesi", ico: "🌟", color: "--zumrut",
    desc: "Doğru sözlü ve güvenilir olmak",
    ayet: { text: "Ey iman edenler! Allah'a karşı gelmekten sakının ve doğrularla beraber olun.", ref: "Tevbe Suresi, 119. ayet" },
    hadis: { text: "Doğruluk iyiliğe, iyilik de cennete götürür.", ref: "Buhârî, Edeb 69; Müslim, Birr 103" },
    soru: "Doğruyu söylemenin zor geldiği bir an oldu mu? Sonunda ne hissettin?",
    gorev: "Bu hafta bir hata yapan onu kendisi söylerse kızmak yok, sarılmak var! Buna “doğruluk ödülü” diyoruz."
  },
  paylasmak: {
    name: "Paylaşma Gecesi", ico: "🎁", color: "--lale",
    desc: "Cömert olmak, sevdiğimizi paylaşmak",
    ayet: { text: "Sevdiğiniz şeylerden (Allah yolunda) harcamadıkça iyiliğe asla erişemezsiniz.", ref: "Âl-i İmrân Suresi, 92. ayet" },
    hadis: { text: "Sizden biriniz, kendisi için istediğini kardeşi için de istemedikçe (gerçek anlamda) iman etmiş olmaz.", ref: "Buhârî, Îmân 7; Müslim, Îmân 71" },
    soru: "Sahip olduğun şeylerden hangisini paylaşmak sana en zor gelir? Neden?",
    gorev: "Ailece bir “paylaşma kutusu” hazırlayın. Herkes iyi durumdaki bir eşyasını koysun ve hafta sonu ihtiyacı olana verin."
  },
  annebaba: {
    name: "Anne Baba Gecesi", ico: "🏡", color: "--firuze",
    desc: "Anne babaya iyilik, çocuğa şefkat",
    ayet: { text: "Rabbin, yalnız kendisine kulluk etmenizi ve anne babaya iyilik etmenizi emretti… Onlara “öf” bile deme, onları azarlama; onlara güzel söz söyle.", ref: "İsrâ Suresi, 23. ayet" },
    hadis: { text: "Allah'ın rızası anne babanın rızasındadır.", ref: "Tirmizî, Birr 3 (1899)" },
    soru: "Çocuklar: anne babanızı en çok ne mutlu eder? Anne baba: çocuklarınızın hangi davranışı sizi en çok sevindiriyor?",
    gorev: "Bu hafta çocuklar anne babalarına sorulmadan bir iş yapsın. Anne babalar da her çocuğa ona özel 15 dakika ayırsın."
  },
  temizlik: {
    name: "Temizlik Gecesi", ico: "🫧", color: "--cini",
    desc: "Bedenimizi, evimizi ve çevremizi temiz tutmak",
    ayet: { text: "Şüphesiz Allah çok tövbe edenleri sever, temizlenenleri sever.", ref: "Bakara Suresi, 222. ayet" },
    hadis: { text: "Temizlik imanın yarısıdır.", ref: "Müslim, Tahâret 1" },
    soru: "Evimizde temizliğe en çok kim emek veriyor? Biz ona nasıl yardım edebiliriz?",
    gorev: "Bu hafta her akşam 5 dakikalık “ailece toparlanma yarışı” yapın ve bitince hep birlikte “Elhamdülillah” deyin."
  }
};

/* Kıssa Pandomimi: kolay = 3-5 yaş için uygun */
const PANDOMIM = [
  { w: "Fil", e: "🐘", kolay: true, info: "Fil Suresi: Ebrehe fillerden oluşan ordusuyla Kâbe'yi yıkmaya geldi, ama Allah Kâbe'yi korudu." },
  { w: "Karınca", e: "🐜", kolay: true, info: "Neml Suresi: Hz. Süleyman'ın ordusu yaklaşırken bir karınca arkadaşlarını uyardı: “Yuvalarınıza girin!”" },
  { w: "Hüdhüd kuşu", e: "🐦", kolay: true, info: "Neml Suresi: Hüdhüd kuşu, Hz. Süleyman'a Sebe ülkesinden haber getirdi." },
  { w: "Büyük balık", e: "🐋", kolay: true, info: "Hz. Yunus'u büyük bir balık yuttu. O, balığın karnında “Lâ ilâhe illâ ente sübhâneke innî küntü mine'z-zâlimîn” diye dua etti. (Enbiyâ, 87)" },
  { w: "Uyuyan köpek", e: "🐕", kolay: true, info: "Kehf Suresi: Mağaradaki gençlerin köpeği, ön ayaklarını uzatmış bekliyordu. Geleneğe göre adı Kıtmîr'dir." },
  { w: "Deve", e: "🐪", kolay: true, info: "Peygamberimiz (s.a.v.) Medine'ye vardığında devesi Kasvâ'nın çöktüğü yere Mescid-i Nebevî yapıldı." },
  { w: "İnek", e: "🐄", kolay: true, info: "Kur'an'ın en uzun suresinin adı Bakara'dır, yani “inek”." },
  { w: "Yılan", e: "🐍", kolay: true, info: "Hz. Musa asasını yere attığında, Allah'ın izniyle asa yılana dönüştü." },
  { w: "Koç", e: "🐏", kolay: true, info: "Allah, Hz. İbrahim'e oğlu Hz. İsmail'in yerine kurban etmesi için büyük bir kurbanlık gönderdi. (Sâffât, 107)" },
  { w: "Kurt", e: "🐺", kolay: true, info: "Hz. Yusuf'un kardeşleri onu kuyuya attı ve babalarına “Onu kurt yedi” diye yalan söyledi." },
  { w: "Ağ ören örümcek", e: "🕸️", kolay: false, info: "Hicret yolculuğunda Peygamberimiz (s.a.v.) ve Hz. Ebû Bekir Sevr Mağarası'na saklandı. Rivayete göre mağaranın ağzına bir örümcek ağ ördü." },
  { w: "Gemi yapmak", e: "🔨", kolay: false, info: "Hz. Nuh, Allah'ın emriyle büyük bir gemi yaptı. İnsanlar onunla alay etti ama o sabırla devam etti. (Hûd, 38)" },
  { w: "Taş taşıyan kuşlar", e: "🪨", kolay: false, info: "Fil Suresi: Allah, Ebrehe'nin ordusunun üzerine taş taşıyan kuş sürüleri (Ebâbil) gönderdi." },
  { w: "Hurma ağacını sallamak", e: "🌴", kolay: false, info: "Meryem Suresi: Hz. Meryem'e hurma ağacını sallaması söylendi ve üzerine taze hurmalar döküldü." },
  { w: "Sahura uykulu kalkmak", e: "😴", kolay: false, info: "Peygamberimiz (s.a.v.) “Sahur yapın, çünkü sahurda bereket vardır” buyurdu. (Buhârî, Müslim)" },
  { w: "Hapşırıp Elhamdülillah demek", e: "🤧", kolay: true, info: "Hapşıran “Elhamdülillah” der. Duyan “Yerhamükellah” (Allah sana rahmet etsin) der. Hapşıran da “Yehdînâ ve yehdîkümullah” (Allah bize ve size hidayet versin) diye karşılık verir. (Buhârî, Edeb 126)" },
  { w: "Susamış kediye su vermek", e: "🐱", kolay: true, info: "Peygamberimiz (s.a.v.) kediler için “Onlar etrafınızda dolaşan canlılardandır” buyurdu. (Ebû Dâvûd, Tahâret 38) Susamış bir köpeğe su veren adamı Allah'ın bağışladığını da anlattı. (Buhârî, Müslim)" },
  { w: "Abdest almak", e: "💧", kolay: false, info: "Peygamberimiz (s.a.v.) “Namazın anahtarı temizliktir” buyurdu. (Tirmizî, Tahâret 3) Abdest alırken suyu da israf etmezdi." },
  { w: "Bal yapan arı", e: "🐝", kolay: true, info: "Nahl (Arı) Suresi: Allah arıya dağlarda ve ağaçlarda yuva yapmasını ilham etti. Karınlarından insanlara şifa olan bal çıkar. (Nahl, 68-69)" },
  { w: "Kurbağa", e: "🐸", kolay: true, info: "Firavun ve kavmi inat edince Allah onlara tufan, çekirge, haşere, kurbağa ve kan gönderdi. (A'râf, 133)" },
  { w: "Çekirge", e: "🦗", kolay: true, info: "Firavun'un kavmine gönderilen uyarılardan biri de çekirge sürüleriydi. (A'râf, 133)" },
  { w: "Sivrisinek", e: "🦟", kolay: true, info: "Bakara Suresi'nde Allah, sivrisineği bile örnek vermekten çekinmeyeceğini bildirir. (Bakara, 26)" },
  { w: "Zürafa gemiye biniyor", e: "🦒", kolay: true, info: "Allah Hz. Nuh'a her canlıdan birer çifti gemiye almasını emretti. (Hûd, 40)" },
  { w: "Koyun gütmek", e: "🐑", kolay: true, info: "Peygamberimiz (s.a.v.) gençliğinde çobanlık yaptı ve gönderilen her peygamberin çobanlık yaptığını söyledi. (Buhârî)" },
  { w: "Kuyudan kova ile su çekmek", e: "🪣", kolay: false, info: "Bir kervan, su almak için Hz. Yusuf'un bulunduğu kuyuya kova sarkıttı ve onu buldu. (Yûsuf, 19)" },
  { w: "Yıldızları ve ayı izlemek", e: "🌙", kolay: false, info: "Hz. Yusuf rüyasında on bir yıldızın, güneşin ve ayın kendisine saygıyla eğildiğini gördü. (Yûsuf, 4)" },
  { w: "Hurma ile iftar açmak", e: "🌴", kolay: false, info: "Peygamberimiz (s.a.v.) orucunu genellikle taze ya da kuru hurma ile, bulamazsa su ile açardı. (Ebû Dâvûd, Tirmizî)" },
  { w: "Misafire yemek ikram etmek", e: "🍲", kolay: false, info: "Hz. İbrahim misafirleri gelince hemen semiz bir buzağı kızartıp ikram etti. (Zâriyât, 24-27)" },
  { w: "Esen rüzgâr", e: "🌬️", kolay: true, info: "Allah rüzgârı Hz. Süleyman'ın emrine verdi. (Sebe, 12)" },
  { w: "Misvakla diş fırçalamak", e: "🪥", kolay: true, info: "Peygamberimiz (s.a.v.) misvakı çok severdi ve sık sık kullanırdı. (Buhârî)" },
  { w: "Fidan dikmek", e: "🌳", kolay: true, info: "Peygamberimiz (s.a.v.), kıyamet kopacağı sırada bile elinde bir fidan olanın onu dikmesini tavsiye etti. (Ahmed b. Hanbel)" },
  { w: "Bayramda el öpmek", e: "🍬", kolay: true, info: "Bayramlarda büyükleri ziyaret etmek, el öpmek ve küçükleri sevindirmek güzel bir gelenektir." },
  { w: "Yoldaki taşı kaldırmak", e: "🪨", kolay: true, info: "Peygamberimiz (s.a.v.) yoldan insanlara eziyet veren bir şeyi kaldırmanın sadaka olduğunu söyledi. (Buhârî, Müslim)" }
];

/* Bil Bakalım: 0 = 3-5 yaş (resimli), 1 = 6-8, 2 = 9-12, 3 = 13+ ve yetişkin */
const BILGI = {
  0: [
    { q: "Yemeğe başlarken ne deriz?", o: [["Bismillah","🍽️"],["Günaydın","☀️"],["Hoşça kal","👋"]] },
    { q: "Yemek bitince ne deriz?", o: [["Elhamdülillah","🤲"],["Ayy, doydum!","😮"],["İyi geceler","🌙"]] },
    { q: "Biriyle karşılaşınca ne deriz?", o: [["Selâmün aleyküm","🤝"],["Bismillah","🍽️"],["Hiçbir şey","😶"]] },
    { q: "Hangisi Kâbe?", o: [["Kâbe","🕋"],["Şato","🏰"],["Kule","🗼"]] },
    { q: "Hapşırınca ne deriz?", o: [["Elhamdülillah","🤧"],["Günaydın","☀️"],["Miyav","🐱"]] },
    { q: "Ramazan'da ne yaparız?", o: [["Oruç tutarız","🌙"],["Kardan adam yaparız","⛄"],["Uçağa bineriz","✈️"]] },
    { q: "Hz. Nuh'un gemisine hangileri bindi?", o: [["Hayvanlar ve inananlar","🦒"],["Arabalar","🚗"],["Robotlar","🤖"]] },
    { q: "Camiye ne için gideriz?", o: [["Namaz kılmak","🕌"],["Top oynamak","⚽"],["Uyumak","🛏️"]] },
    { q: "Namaz kılmadan önce ne yaparız?", o: [["Abdest alırız","💧"],["Dondurma yeriz","🍦"],["Dans ederiz","💃"]] },
  { q: "Dua ederken ellerimizi nasıl tutarız?", o: [["Avuçlarımızı açarız", "🤲"], ["Alkışlarız", "👏"], ["El sallarız", "👋"]] },
    { q: "Kardeşin ağlarsa ne yaparız?", o: [["Sarılırız","🤗"],["Güleriz","😂"],["Kaçarız","🏃"]] },
    { q: "Bayramda büyüklerimizin neyini öperiz?", o: [["Elini","✋"],["Ayağını","🦶"],["Kulağını","👂"]] },
    { q: "Yerde çöp görürsek ne yaparız?", o: [["Çöp kutusuna atarız","🗑️"],["Tekmeleriz","⚽"],["Üstüne basarız","👟"]] },
    { q: "Hz. Yunus'u kim yuttu?", o: [["Büyük balık","🐋"],["Kedi","🐱"],["Kuş","🐦"]] },
    { q: "Bal yapan hayvan hangisi? Kur'an'da onun adını taşıyan bir sure var!", o: [["Arı","🐝"],["Kelebek","🦋"],["Uğur böceği","🐞"]] },
    { q: "Uyumadan önce ne yaparız?", o: [["Dua ederiz","🤲"],["Zıplarız","🤸"],["Bağırırız","📢"]] },
    { q: "Biri bize hediye verince ne deriz?", o: [["Teşekkür ederim","🎁"],["Bana ne","🙄"],["Hiçbir şey","😶"]] },
    { q: "Dişlerimizi neyle temizleriz?", o: [["Misvak ya da diş fırçası","🪥"],["Tarak","🪮"],["Kaşık","🥄"]] },
    { q: "Sabah uyanınca ne deriz?", o: [["Elhamdülillah","🌅"],["Of, yine mi sabah","😫"],["Hoşça kal","👋"]] },
    { q: "Müezzin ezanı nerede okur?", o: [["Camide","🕌"],["Uçakta","✈️"],["Gemide","🚢"]] },
    { q: "Su içerken nasıl içeriz?", o: [["Oturarak, Bismillah diyerek","🥛"],["Koşarken","🏃"],["Baş aşağı","🙃"]] },
    { q: "Hangi elimizle yemek yeriz?", o: [["Sağ elimizle","🫱"],["Ayağımızla","🦶"],["Dirseğimizle","💪"]] },
    { q: "Misafir gelince ne yaparız?", o: [["İkram ederiz","🍵"],["Saklanırız","🙈"],["Kapıyı kapatırız","🚪"]] },
    { q: "Annemiz yorulunca ne yaparız?", o: [["Yardım ederiz","🧺"],["Daha çok dağıtırız","🧸"],["Ağlarız","😭"]] },
    { q: "Bir şeyi kırınca ne yaparız?", o: [["Doğruyu söyleriz","🗣️"],["Saklarız","🫣"],["Kardeşimizi suçlarız","👉"]] },
    { q: "Yuvasına yiyecek taşıyan, Kur'an'da adını taşıyan bir sure olan küçük hayvan hangisi?", o: [["Karınca","🐜"],["Penguen","🐧"],["Dinozor","🦖"]], info: "Neml, yani Karınca Suresi." },
    { q: "Oruçlu biri akşam ezanı okununca ne yapar?", o: [["İftar yapar","🍲"],["Uyur","😴"],["Okula gider","🎒"]] },
    { q: "Kurban Bayramı'nda hangi hayvan kurban edilir?", o: [["Koyun","🐑"],["Kedi","🐈"],["Tavuk","🐔"]], info: "Koyun, keçi, sığır ve deve kurban edilir." },
    { q: "Arkadaşımız düşünce ne yaparız?", o: [["Kalkmasına yardım ederiz","🤝"],["Güleriz","😂"],["Bakmayız","🙈"]] },
    { q: "Ezan okunurken ne yaparız?", o: [["Sessizce dinleriz","👂"],["Bağırırız","📢"],["Müziği açarız","🎵"]] }
  ],
  1: [
    { q: "Günde kaç vakit namaz kılınır?", o: ["5","3","7"] },
    { q: "Mushaf'ın, yani Kur'an-ı Kerim'in ilk sayfasındaki sure hangisidir?", o: ["Fâtiha","İhlâs","Bakara"] },
    { q: "Peygamberimiz (s.a.v.) hangi şehirde doğdu?", o: ["Mekke","Medine","Kudüs"] },
    { q: "Hz. Yunus'u ne yuttu?", o: ["Büyük bir balık","Bir aslan","Bir kartal"] },
    { q: "Kur'an-ı Kerim'de kaç sure vardır?", o: ["114","99","40"] },
    { q: "Abdeste başlarken önce neyi yıkarız?", o: ["Ellerimizi","Ayaklarımızı","Saçlarımızı"] },
    { q: "Ramazan ayının sonunda hangi bayramı kutlarız?", o: ["Ramazan Bayramı","Kurban Bayramı","Yılbaşı"] },
    { q: "Ezan günde kaç kez okunur?", o: ["5","2","10"] },
    { q: "Hz. Nuh ne yaptı?", o: ["Büyük bir gemi","Bir saray","Bir köprü"] },
    { q: "İlk insan ve ilk peygamber kimdir?", o: ["Hz. Âdem","Hz. Nuh","Hz. Musa"] },
    { q: "Kâbe hangi şehirdedir?", o: ["Mekke","Medine","İstanbul"] },
    { q: "Peygamberimize (s.a.v.) indirilen kitap hangisidir?", o: ["Kur'an-ı Kerim","Tevrat","Zebur"] },
    { q: "Oruçlu biri iftarı ne zaman açar?", o: ["Akşam ezanı okununca","Öğle vakti","Sabah kalkınca"] },
    { q: "Peygamberimizin (s.a.v.) kızlarından biri kimdir?", o: ["Hz. Fâtıma","Hz. Meryem","Hz. Havva"] },
    { q: "Hangi hayvanın adı bir sureye verilmiştir?", o: ["Arı (Nahl)","Aslan","Kaplan"] },
    { q: "Namazda yüzümüzü hangi yöne döneriz?", o: ["Kâbe'ye, yani kıbleye","Güneşe","Pencereye"] },
    { q: "Cuma namazı hangi gün kılınır?", o: ["Cuma","Pazartesi","Pazar"] },
    { q: "Ramazan ayında tutulan ibadet hangisidir?", o: ["Oruç","Hac","Kurban"] },
    { q: "Oruç tutacağımız gün, sabah ezanından önce yenen yemeğe ne denir?", o: ["Sahur","İftar","Kuşluk"] },
    { q: "Kur'an-ı Kerim Peygamberimize (s.a.v.) hangi melek aracılığıyla indirildi?", o: ["Cebrail","İsrafil","Mikail"] },
    { q: "Hz. Musa asasını denize vurunca ne oldu?", o: ["Deniz yarıldı, yol açıldı","Deniz buz tuttu","Yağmur yağdı"], info: "Şuarâ Suresi, 63. ayet." },
    { q: "Hz. Yusuf'un babası kimdir?", o: ["Hz. Yakup","Hz. İbrahim","Hz. Nuh"] },
    { q: "Kâbe'nin etrafında dönerek yapılan ibadete ne denir?", o: ["Tavaf","Secde","Rükû"] },
    { q: "Namazda alnımızı yere koymaya ne denir?", o: ["Secde","Kıyam","Selam"] },
    { q: "Peygamberimizin (s.a.v.) adı nedir?", o: ["Hz. Muhammed","Hz. Musa","Hz. İsa"] },
    { q: "Zekât kime verilir?", o: ["İhtiyacı olanlara","Zenginlere","Hiç kimseye"] },
    { q: "İslam'ın şartı kaçtır?", o: ["5","3","10"] },
    { q: "İmanın şartı kaçtır?", o: ["6","4","9"] },
    { q: "Gücü yeten kişinin ömründe bir kez yapması farz olan ibadet hangisidir?", o: ["Hac","Namaz","Oruç"] },
    { q: "Kurban Bayramı kaç gün sürer?", o: ["4","1","10"] }
  ],
  2: [
    { q: "Peygamberimizin (s.a.v.) annesinin adı nedir?", o: ["Hz. Âmine","Hz. Hatice","Hz. Fâtıma"] },
    { q: "İlk vahiy nerede geldi?", o: ["Hira Mağarası","Sevr Mağarası","Uhud Dağı"] },
    { q: "İlk inen ayet hangi emirle başlar?", o: ["Oku!","Yaz!","Koş!"] },
    { q: "Peygamberimiz (s.a.v.) hangi şehre hicret etti?", o: ["Medine","Tâif","Şam"] },
    { q: "Hz. Süleyman'a Sebe ülkesinden haber getiren kuş hangisidir?", o: ["Hüdhüd","Güvercin","Karga"] },
    { q: "Allah'ın güzel isimlerine ne denir?", o: ["Esmâ-i Hüsnâ","Kelime-i Tevhid","Amentü"] },
    { q: "Hangisi İslam'ın beş şartından biri DEĞİLDİR?", o: ["Kurban kesmek","Zekât vermek","Oruç tutmak"] },
    { q: "Hangisi Allah'ın güzel isimlerinden (Esmâ-i Hüsnâ) biridir?", o: ["er-Rahmân", "Hüdhüd", "Kevser"], info: "er-Rahmân, “çok merhametli” demektir. Hüdhüd bir kuşun, Kevser ise bir surenin adıdır." },
    { q: "Hz. İbrahim ateşe atıldığında ateş ne oldu?", o: ["Serin ve esenlik oldu","Daha çok yandı","Söndü ve duman oldu"], info: "Allah ateşe “Ey ateş! İbrahim'e karşı serin ve esenlik ol” dedi. (Enbiyâ, 69)" },
    { q: "Hz. Musa'ya indirilen kitap hangisidir?", o: ["Tevrat","İncil","Zebur"] },
    { q: "Hz. Davud'a indirilen kitap hangisidir?", o: ["Zebur","Tevrat","İncil"] },
    { q: "Peygamberimizin (s.a.v.) ilk eşi kimdir?", o: ["Hz. Hatice","Hz. Âişe","Hz. Fâtıma"] },
    { q: "Ezanı ilk okuyan sahabi kimdir?", o: ["Hz. Bilâl","Hz. Ömer","Hz. Ali"] },
    { q: "Kur'an'ın indirilmeye başladığı mübarek gece hangisidir?", o: ["Kadir Gecesi","Berat Kandili","Mevlid Kandili"] },
    { q: "Hac ibadeti hangi şehirde yapılır?", o: ["Mekke","Medine","Kudüs"] },
    { q: "Hicret yolculuğunda yapılan ilk mescid hangisidir?", o: ["Kuba Mescidi","Mescid-i Aksâ","Mescid-i Haram"] },
    { q: "Annesinin vefatından sonra Peygamberimizi (s.a.v.) yanına alan dedesi kimdir?", o: ["Abdülmuttalib","Ebû Tâlib","Hz. Hamza"] },
    { q: "Hz. Nuh'un gemisi tufandan sonra hangi dağın üzerine oturdu?", o: ["Cûdî","Uhud","Tûr"], info: "Hûd Suresi, 44. ayet." },
    { q: "Hz. Musa'nın Allah ile konuştuğu dağın adı nedir?", o: ["Tûr Dağı","Cûdî Dağı","Uhud Dağı"] },
    { q: "Peygamberimiz (s.a.v.) ve Hz. Ebû Bekir hicret sırasında hangi mağarada saklandı?", o: ["Sevr","Hira","Kehf"] },
    { q: "Farz namaz başlamadan hemen önce okunan çağrıya ne denir?", o: ["Kâmet","Ezan","Hutbe"] },
    { q: "Ramazan, hicri takvimin kaçıncı ayıdır?", o: ["9.","1.","12."] },
    { q: "Kurban Bayramı hangi ibadetle aynı günlere denk gelir?", o: ["Hac","Oruç","Teravih"] },
    { q: "Teravih namazı hangi ayda kılınır?", o: ["Ramazan","Şevval","Muharrem"] },
    { q: "Neml Suresi'ne göre Hz. Süleyman hangi canlıların sözünü anlardı?", o: ["Kuşların ve karıncaların","Balıkların","Atların"], info: "Neml Suresi, 16-19. ayetler." },
    { q: "Kur'an-ı Kerim kaç yılda indirildi?", o: ["Yaklaşık 23 yılda","Bir günde","100 yılda"] },
    { q: "Peygamberimizin (s.a.v.) Mekke'den Medine'ye göçüne ne denir?", o: ["Hicret","Hac","Mirac"] },
    { q: "Hangisi Kur'an'daki bir surenin adı DEĞİLDİR?", o: ["Zebur","Yâsîn","Mülk"], info: "Zebur, Hz. Davud'a indirilen kitaptır." },
    { q: "Peygamberimize (s.a.v.) göre bir müslüman kardeşine en fazla ne kadar küs durabilir?", o: ["Üç günden fazla küs durmamalı","Bir ay","Hiç barışmasa da olur"], info: "Peygamberimiz (s.a.v.) bir müslümanın kardeşine üç günden fazla küs durmasının helal olmadığını bildirdi. (Buhârî ve Müslim)" },
    { q: "Peygamberimizin (s.a.v.) gece yolculuğu (İsrâ) hangi surede anlatılır?", o: ["İsrâ","Fil","Kevser"], info: "İsrâ Suresi, 1. ayet." }
  ],
  3: [
    { q: "Hz. İbrahim, Kâbe'yi hangi oğluyla birlikte inşa etti?", o: ["Hz. İsmail","Hz. İshak","Hz. Yakup"], info: "Bakara Suresi, 127. ayet." },
    { q: "Kur'an'da adı geçen tek kadın kimdir?", o: ["Hz. Meryem","Hz. Âsiye","Hz. Hacer"] },
    { q: "Besmele ile başlamayan sure hangisidir?", o: ["Tevbe","Fâtiha","Yâsîn"] },
    { q: "Hz. Musa'nın kardeşi ve yardımcısı olan peygamber kimdir?", o: ["Hz. Hârûn","Hz. Şuayb","Hz. Lût"] },
    { q: "Peygamberimizin (s.a.v.) süt annesi kimdir?", o: ["Hz. Halîme","Hz. Ümmü Eymen","Hz. Sevde"] },
    { q: "Hicret hangi yılda gerçekleşti?", o: ["622","571","632"] },
    { q: "Hz. Yusuf'u kuyuya kimler attı?", o: ["Kardeşleri","Kervancılar","Mısır askerleri"] },
    { q: "Mağarada uzun yıllar uyuyan gençlerin kıssası hangi surededir?", o: ["Kehf","Yûsuf","Meryem"] },
    { q: "Asr Suresi'ne göre ziyanda olmayanlar birbirlerine neyi tavsiye eder?", o: ["Hakkı ve sabrı","Zenginliği","Şöhreti"] },
    { q: "Kur'an'ın en kısa suresi hangisidir?", o: ["Kevser","İhlâs","Fâtiha"], info: "Kevser Suresi üç ayettir." },
    { q: "“Kalpler ancak Allah'ı anmakla huzur bulur” ayeti hangi surededir?", o: ["Ra'd","Bakara","Yâsîn"], info: "Ra'd Suresi, 28. ayet." },
    { q: "Hz. Musa çocukken kimin sarayında büyüdü?", o: ["Firavun'un","Nemrut'un","Ebrehe'nin"] },
    { q: "İlk dört halifeden ikincisi kimdir?", o: ["Hz. Ömer","Hz. Osman","Hz. Ali"] },
    { q: "Peygamberimiz (s.a.v.) hangi şehirde vefat etti?", o: ["Medine","Mekke","Tâif"] },
    { q: "Peygamberimize (s.a.v.) peygamberlikten önce de verilen “güvenilir” anlamındaki lakap nedir?", o: ["el-Emîn","el-Fârûk","es-Sıddîk"] },
    { q: "Ashâb-ı Kehf ile birlikte mağarada bekleyen hayvan hangisidir?", o: ["Köpek","Kedi","At"], info: "Kehf Suresi, 18. ayet." },
    { q: "Hz. Yusuf hangi ülkede hazinelerden sorumlu oldu?", o: ["Mısır","Yemen","Şam"] },
    { q: "Bedir Savaşı hicretin kaçıncı yılında oldu?", o: ["2.","5.","8."] },
    { q: "Mekke'nin fethi hicretin kaçıncı yılında oldu?", o: ["8.","2.","11."] },
    { q: "“Ey iman edenler! Oruç size farz kılındı” ayeti hangi surededir?", o: ["Bakara","Âl-i İmrân","Mâide"], info: "Bakara Suresi, 183. ayet." },
    { q: "Lokmân Suresi'nde Lokmân oğluna ilk olarak ne öğüt verir?", o: ["Allah'a ortak koşmamasını","Zengin olmasını","Ünlü olmasını"], info: "Lokmân Suresi, 13. ayet." },
    { q: "Peygamberimiz (s.a.v.) Vedâ Hutbesi'ni nerede okudu?", o: ["Arafat'ta","Bedir'de","Tâif'te"] },
    { q: "Hz. Ebû Bekir'in lakabı nedir?", o: ["es-Sıddîk","el-Fârûk","Seyfullah"] },
    { q: "Hz. Ömer'in lakabı nedir?", o: ["el-Fârûk","es-Sıddîk","Zinnûreyn"] },
    { q: "Kur'an-ı Kerim'i ilk kez bir mushaf hâlinde toplatan halife kimdir?", o: ["Hz. Ebû Bekir","Hz. Osman","Hz. Ali"], info: "Hz. Osman döneminde ise mushaf çoğaltılıp merkezlere gönderildi." },
    { q: "“Şüphesiz zorlukla beraber bir kolaylık vardır” ayeti hangi surededir?", o: ["İnşirâh","Duhâ","Fil"], info: "İnşirâh Suresi, 5-6. ayetler." },
    { q: "Hz. Musa'nın sabrı öğrendiği yolculuğun kıssası hangi surededir?", o: ["Kehf","Tâhâ","Kasas"], info: "Kehf Suresi, 60-82. ayetler." },
    { q: "“Sübhâne Rabbiye'l-azîm” namazın hangi hâlinde okunur?", o: ["Rükûda","Secdede","Oturuşta"], info: "Secdede “Sübhâne Rabbiye'l-a'lâ” okunur." },
    { q: "Hicri takvimin ilk ayı hangisidir?", o: ["Muharrem","Ramazan","Zilhicce"] },
    { q: "Medine'de Muhacirler ile Ensar arasında kurulan kardeşliğe ne ad verilir?", o: ["Muâhât","Hilfü'l-fudûl","Bey'at"] }
  ]
};

/* Sen Olsan: e = sahne simgesi, s = durum, i = güzel ahlak ipucu */
const SENOLSAN = {
  sukur: [
    { e: "🧦", s: "Doğum gününde istediğin oyuncak yerine kocaman bir çorap paketi geldi! Ne yaparsın, ne dersin?", i: "Hediyeyi verene teşekkür etmek de şükürdür. Peygamberimiz (s.a.v.) “İnsanlara teşekkür etmeyen Allah'a şükretmiş olmaz” buyurdu." },
    { e: "🥬", s: "Annen en sevmediğin yemeği yaptı: ıspanak! Sofrada ne yaparsın?", i: "Peygamberimiz (s.a.v.) hiçbir yemeği ayıplamazdı. Canı isterse yer, istemezse sessizce bırakırdı. (Buhârî, Müslim)" },
    { e: "☔", s: "Yağmur yağdı ve beklediğin piknik iptal oldu. Ne dersin?", i: "Yağmur da Allah'ın bir rahmetidir. İstediğimiz olmasa da “Elhamdülillah” diyebiliriz." },
    { e: "📱", s: "Arkadaşının yepyeni bir telefonu var, seninki eski ve çizik. İçinden ne geçer?", i: "Peygamberimiz (s.a.v.) “Sizden aşağıda olana bakın, üstünüzde olana bakmayın. Bu, Allah'ın nimetlerini küçümsememeniz için daha uygundur” buyurdu. (Müslim)" },
    { e: "🏃", s: "Sabah uyandın: gözlerin görüyor, kulakların duyuyor, bacakların koşuyor. Bunlardan hangisi olmasa en çok zorlanırdın?", i: "Her sabah uyandığımızda “Elhamdülillah” demek, bu nimetleri hatırlamanın en güzel yoludur." },
    { e: "🕯️", s: "Elektrikler kesildi; tablet yok, televizyon yok, mum ışığında oturuyorsunuz. Ne yaparsınız?", i: "Bazen bir nimetin değerini o nimet gidince anlarız. Bu, ailece sohbet etmek için güzel bir fırsat olabilir." },
    { e: "🧶", s: "Ninen sana kendi ördüğü kocaman, rengârenk bir kazak gönderdi. Biraz kaşındırıyor! Ninene ne dersin?", i: "Emeğe teşekkür etmek çok kıymetlidir. Hediyenin arkasındaki sevgiyi görmek de şükürdür." },
    { e: "🍞", s: "Kahvaltıda en sevmediğin peynir var, en sevdiğin reçel de bitmiş. Ne dersin?", i: "Sofradaki nimetleri görüp “Elhamdülillah” demek. Peygamberimiz (s.a.v.) hiçbir yemeği ayıplamazdı (Buhârî, Et'ime 21)." },
    { e: "💧", s: "Dünyada birçok çocuğun temiz suya ulaşmak için kilometrelerce yürüdüğünü öğrendin. Musluğu açınca ne düşünürsün?", i: "Kolayca ulaştığımız suyun büyük bir nimet olduğunu fark edip şükretmek ve israf etmemek." },
    { e: "🏠", s: "Yeni taşındığınız ev eskisinden küçük; odanı kardeşinle paylaşacaksın. Ne dersin?", i: "Sıcak bir evimiz ve ailemiz olduğu için şükretmek. Kardeşle oda paylaşmak da güzel anılar demektir." }
  ],
  sabir: [
    { e: "🧱", s: "Kardeşin, saatlerce yaptığın legodan kuleyi bir tekmede yıktı! Ne yaparsın?", i: "Asıl pehlivan, öfkelendiği zaman kendine hâkim olandır. (Buhârî, Müslim)" },
    { e: "👟", s: "Bayram sabahı herkes hazır, sadece senin tek ayakkabın kayıp ve herkes sana sesleniyor. Ne yaparsın?", i: "Sabır sadece beklemek değil, telaşlıyken de sakin kalabilmektir." },
    { e: "🍰", s: "Oruçlusun, iftara 10 dakika var ve en sevdiğin tatlı gözünün önünde duruyor. Bu 10 dakikayı nasıl geçirirsin?", i: "İftar vakti dua vaktidir. Beklerken dua etmek sabrı tatlandırır." },
    { e: "🎲", s: "Oyunda üst üste kaybediyorsun ve kardeşin seninle dalga geçiyor. Ne yaparsın?", i: "Kaybetmek de oyunun bir parçasıdır. Öfkelenince sakinleşmek için Peygamberimiz (s.a.v.) ayaktaysak oturmayı tavsiye etti. (Ebû Dâvûd)" },
    { e: "⏳", s: "Doktorda sıra çok uzun, bir saat bekleyeceksiniz. Zamanı nasıl değerlendirirsin?", i: "Beklerken zikir yapmak, hikâye anlatmak ya da sohbet etmek zamanı bereketlendirir." },
    { e: "🌧️", s: "Bütün gün yağmur yağdı ve dışarı çıkamıyorsun. Çok sıkıldın! Ne yaparsın?", i: "Sabır, sıkıldığımızda bile güzel bir şeyler bulabilmektir." },
    { e: "🚗", s: "Uzun bir araba yolculuğundasınız ve kardeşin 30 saniyede bir “Geldik mi?” diye soruyor. Ne yaparsın?", i: "Kardeşine sabır göstermek, ona bir oyun önermek ya da ilahi söylemek yolculuğu güzelleştirir." },
    { e: "🧩", s: "Bin parçalık yapbozun yarısındasın ve bir parça kayıp. Ne yaparsın?", i: "Pes etmeden aramak ya da biraz ara verip sonra devam etmek sabırdır." },
    { e: "🤒", s: "Hastalandın, bir hafta dışarı çıkamayacaksın. Ne yaparsın?", i: "Hastalıkta sabretmek, dua etmek ve “Geçmiş olsun” diyenlere teşekkür etmek güzeldir." },
    { e: "🌱", s: "Ektiğin tohum bir haftadır filiz vermedi. Ne yaparsın?", i: "Her şeyin bir vakti var. Sulamaya devam etmek sabırdır." }
  ],
  merhamet: [
    { e: "🧍", s: "Sınıfa yeni gelen bir öğrenci teneffüste tek başına duruyor. Ne yaparsın?", i: "Güler yüz göstermek bile sadakadır. (Tirmizî)" },
    { e: "🐱", s: "Sokakta, susuzluktan dili dışarıda bir kedi gördün. Ne yaparsın?", i: "Peygamberimiz (s.a.v.), susamış bir köpeğe su veren adamı Allah'ın bağışladığını anlattı. (Buhârî, Müslim)" },
    { e: "🤒", s: "Kardeşin hasta ve bugün tablet onun sırasıydı. Sen alabilirsin, kimse bir şey demez. Ne yaparsın?", i: "Hastayı sevindirmek ve ona hizmet etmek çok güzel bir iyiliktir." },
    { e: "😢", s: "Arkadaşın sınavdan düşük aldı ve ağlıyor, bazıları da ona gülüyor. Ne yaparsın?", i: "Müslüman, müslümanın kardeşidir. Onu yalnız bırakmaz. (Buhârî, Müslim)" },
    { e: "👴", s: "Deden telefonda aynı şeyi sana beşinci kez soruyor. Ne yaparsın?", i: "Peygamberimiz (s.a.v.) “Küçüklerimize merhamet etmeyen, büyüklerimize saygı göstermeyen bizden değildir” buyurdu. (Tirmizî)" },
    { e: "🐦", s: "Bahçede kanadı kırık bir kuş buldun. Ne yaparsın?", i: "Peygamberimiz (s.a.v.) yavrusu alınan bir kuşun telaşını görünce “Yavrusunu ona geri verin” buyurdu. (Ebû Dâvûd)" },
    { e: "🛍️", s: "Mahallede yaşlı bir teyze ağır alışveriş poşetleriyle yürüyor. Ne yaparsın?", i: "Büyüklere yardım etmek, merhametin en güzel hâllerinden biridir." },
    { e: "🧓", s: "Komşunuz yaşlı amca hasta ve evden çıkamıyor. Ne yaparsın?", i: "Ona yemek götürmek ve hâlini sormak merhamettir. Hasta ziyareti çok sevaplı bir iştir." },
    { e: "🚌", s: "Otobüste yaşlı bir teyze ayakta kaldı, sen oturuyorsun. Ne yaparsın?", i: "Yerini vermek merhametin ve saygının güzel bir örneğidir." },
    { e: "🐶", s: "Arkadaşların bir köpeğe taş atıyor. Ne yaparsın?", i: "Onları nazikçe durdurmak. Hayvanlara eziyet etmek günahtır, onlara iyilik etmek sevaptır." }
  ],
  dogruluk: [
    { e: "🏺", s: "Topla oynarken vazoyu kırdın ve kimse görmedi. Annen “Bunu kim kırdı?” diye soruyor. Ne dersin?", i: "Doğruluk iyiliğe, iyilik de cennete götürür. (Buhârî, Müslim) Hatanı söylemek cesaret ister!" },
    { e: "💰", s: "Bakkal sana yanlışlıkla fazla para üstü verdi. Kimsenin haberi yok! Ne yaparsın?", i: "Peygamberimize (s.a.v.) daha peygamber olmadan önce bile “el-Emîn”, yani güvenilir denirdi." },
    { e: "🎨", s: "Arkadaşın yaptığı resmi gösterip “Güzel mi?” diye soruyor. Pek beğenmedin. Ne dersin?", i: "Doğruyu söylemek kırıcı olmayı gerektirmez. Beğendiğin bir yanını güzel bir dille söyleyebilirsin." },
    { e: "🐶📄", s: "Ödevini yapmadın. Öğretmen sorunca “Köpeğim yedi!” demek aklına geldi. Ne yaparsın?", i: "Peygamberimiz (s.a.v.) şaka yapardı, ama şakasında bile doğrudan başka bir şey söylemezdi. (Tirmizî)" },
    { e: "🎮", s: "Oyunda kimse görmeden puanını biraz artırabilirsin. Ne yaparsın?", i: "Allah her şeyi görür. Kimse görmese de dürüst olmak gerçek doğruluktur." },
    { e: "🤐", s: "Kardeşin bir şeyi kırdı ve senden “Söyleme ne olur!” diye rica ediyor. Ne yaparsın?", i: "Kardeşini gizlice suçlamak yerine, onu doğruyu kendisinin söylemesi için cesaretlendirebilirsin." },
    { e: "📝", s: "Öğretmen sınavını yanlışlıkla fazla puanla okumuş. Ne yaparsın?", i: "Öğretmene söylemek. Doğruluk iyiliğe götürür." },
    { e: "🎮", s: "Arkadaşın “Annene oyun oynadığımızı söyleme” diyor. Ne yaparsın?", i: "Anne babaya karşı dürüst olmak. Gizli kapaklı işler kalbi huzursuz eder." },
    { e: "⏰", s: "Okula geç kaldın; öğretmen sebebini soruyor ama aslında uyuya kaldın. Ne dersin?", i: "Doğruyu söyleyip özür dilemek. Bahane uydurmak yalan olur." }
  ],
  paylasmak: [
    { e: "🍫", s: "Elinde tek bir çikolata var ve kardeşin de çok istiyor. Ne yaparsın?", i: "Kendin için istediğini kardeşin için de istemek imanın güzelliğidir. (Buhârî, Müslim)" },
    { e: "🖍️", s: "Arkadaşın yeni boyalarını ödünç istiyor ama biraz dağınık biridir. Ne yaparsın?", i: "Paylaşırken eşyaya özen göstermesini nazikçe rica edebilirsin. Paylaşmak ve dikkatli olmak birlikte olabilir." },
    { e: "🪙", s: "Harçlığını oyuncak almak için biriktiriyordun. Camide ihtiyaç sahipleri için yardım toplanıyor. Ne yaparsın?", i: "Peygamberimiz (s.a.v.) “Yarım hurma ile de olsa ateşten korunun” buyurdu. (Buhârî, Müslim) Az da olsa vermek değerlidir." },
    { e: "🧸", s: "Misafir çocuk senin en sevdiğin oyuncakla oynamak istiyor. Ne yaparsın?", i: "Misafire ikram sadece yemekle olmaz; oyuncağımızı paylaşmak da bir ikramdır." },
    { e: "🥪", s: "Okulda beslenmesini unutan bir arkadaşın var ve aç. Ne yaparsın?", i: "Peygamberimiz (s.a.v.) “İki kişilik yemek üç kişiye, üç kişilik yemek dört kişiye yeter” buyurdu. (Buhârî, Müslim)" },
    { e: "🍕", s: "Pizzadan son dilim kaldı ve herkes ona bakıyor! Ne yaparsın?", i: "Başkasını kendine tercih etmeye “îsâr” denir. Kur'an'da Medineli Ensar bu güzel ahlakla övülür. (Haşr, 9)" },
    { e: "📚", s: "Arkadaşın dersi anlamadı, sen anladın. Ne yaparsın?", i: "Bildiğini öğretmek de bir paylaşmaktır." },
    { e: "🧸", s: "Kullanmadığın oyuncaklar dolapta yıllardır duruyor. Ne yaparsın?", i: "İhtiyacı olan çocuklarla paylaşmak oyuncaklara yeniden hayat verir." },
    { e: "🍎", s: "Bahçenizdeki ağaç bu yıl çok meyve verdi. Ne yaparsınız?", i: "Komşulara ve akrabalara ikram etmek. Paylaşılan nimet bereketlenir." }
  ],
  annebaba: [
    { e: "🍽️", s: "Annen yorgun gelmiş, sen de çizgi film izliyorsun. Seni sofrayı kurmaya çağırıyor. Ne yaparsın?", i: "Kur'an, anne babaya “öf” bile denmemesini öğütler. (İsrâ, 23)" },
    { e: "📖", s: "Baban aynı hikâyeyi sana üçüncü kez anlatıyor. Ne yaparsın?", i: "Anne babamızı sabırla dinlemek, onlara iyiliğin bir parçasıdır." },
    { e: "🙈", s: "Yetişkinler cevaplasın! Çocuğun bir hata yaptı ve gelip sana itiraf etti. Ne yaparsın?", i: "Hz. Enes, Peygamberimize (s.a.v.) on yıl hizmet ettiğini ve ondan bir kez bile “öf” duymadığını anlatır. (Buhârî, Müslim)" },
    { e: "🎂", s: "Annenin doğum günü yarın ve hiç paran yok. Ne yaparsın?", i: "En güzel hediye bir dua, sıcak bir sarılma ya da senin emek verdiğin bir iştir." },
    { e: "📞", s: "Dedenle ninen telefonla arıyor, sen de oyunun en heyecanlı yerindesin. Ne yaparsın?", i: "Peygamberimiz (s.a.v.) rızkının bol ve ömrünün bereketli olmasını isteyenin akrabasını gözetmesini öğütledi. (Buhârî, Müslim)" },
    { e: "📱", s: "Yetişkinler cevaplasın! Çocuğun sana en sevdiği oyunu anlatmak istiyor ama sen telefonla meşgulsün. Ne yaparsın?", i: "Peygamberimiz (s.a.v.) çocuklarla ilgilenir, torunlarını sırtına alıp onlarla oynardı." },
    { e: "📵", s: "Baban seninle konuşurken sen tabletle oynuyorsun. Ne yaparsın?", i: "Tableti bırakıp yüzüne bakarak dinlemek anne babaya saygıdır." },
    { e: "🧹", s: "Annen “Odanı toplar mısın?” dedi, sen de “Sonra” dedin. Şimdi ne yaparsın?", i: "Hemen “Peki” deyip yardım etmek. Kur'an anne babaya “öf” bile denmemesini öğütler (İsrâ, 23)." },
    { e: "🫖", s: "Annen ve baban misafirle konuşuyor, sen sürekli araya giriyorsun. Ne yaparsın?", i: "Sözlerinin bitmesini bekleyip sonra konuşmak. Büyükleri dinlemek saygıdır." }
  ],
  temizlik: [
    { e: "🍔", s: "Parkta oynadın, ellerin çamur içinde ve çok acıktın. Ne yaparsın?", i: "Yemekten önce ve sonra elleri yıkamak hem sağlık hem de güzel bir adaptır." },
    { e: "🧦", s: "Odan o kadar dağınık ki terliğini bulamıyorsun. Ne yaparsın?", i: "Temizlik imanın yarısıdır. (Müslim) Düzenli bir oda, temiz bir kalbe yakışır." },
    { e: "🧺", s: "Piknik bitti ve diğerleri çöplerini çimlere bırakıp gidiyor. Ne yaparsın?", i: "Peygamberimiz (s.a.v.) yoldan insanlara eziyet veren bir şeyi kaldırmanın sadaka olduğunu söyledi. (Buhârî, Müslim)" },
    { e: "🪥", s: "Sabah çok uykulusun ve dişlerini fırçalamadan çıkmak istiyorsun. Ne yaparsın?", i: "Peygamberimiz (s.a.v.) misvakı çok sever ve sık sık kullanırdı. (Buhârî)" },
    { e: "🚿", s: "Kardeşin abdest alırken musluğu sonuna kadar açmış, su şırıl şırıl akıyor. Ne dersin?", i: "Peygamberimiz (s.a.v.) çok az bir suyla abdest alırdı. (Buhârî, Müslim) Suyu israf etmemek de temizliğin parçasıdır." },
    { e: "🚻", s: "Okulda tuvaletler çok kirli ve kimse bir şey yapmıyor. Ne yaparsın?", i: "Ortak alanları temiz tutmak hepimizin görevidir. Öğretmene güzel bir dille haber vermek de bir çözümdür." },
    { e: "🍫", s: "Parkta çikolatanı yedin ama etrafta çöp kutusu yok. Ne yaparsın?", i: "Ambalajı cebine koyup çöp kutusu bulunca atmak temizliktir." },
    { e: "⚽", s: "Futboldan ter içinde geldin, hemen yemeğe oturmak istiyorsun. Ne yaparsın?", i: "Önce ellerini yıkayıp temizlenmek hem sağlık hem güzel bir adaptır." },
    { e: "👕", s: "Kıyafetlerini yere attın, annen topluyor. Ne yaparsın?", i: "Kirlileri sepete, temizleri dolaba koymak hem temizlik hem de anneye yardımdır." }
  ]
};

/* Hızlı Tur: t = hedef sayı */
const HIZLI = {
  sukur: [
    { p: "Allah'ın bize verdiği nimetleri sayın!", t: 10 },
    { p: "Vücudumuzdaki nimetleri sayın! (göz, kulak…)", t: 8 },
    { p: "Şu an sofrada ya da mutfakta olan nimetleri sayın!", t: 8 },
    { p: "Meyve ve sebze nimetlerini sayın!", t: 12 }
  ],
  sabir: [
    { p: "Sabır gerektiren durumları sayın! (sıra beklemek…)", t: 6 },
    { p: "Sinirlenince sakinleşmek için yapabileceklerimizi sayın!", t: 5 }
  ],
  merhamet: [
    { p: "Hayvanlara nasıl merhamet edebiliriz? Sayın!", t: 6 },
    { p: "Bugün birine yapabileceğimiz iyilikleri sayın!", t: 8 }
  ],
  genel: [
    { p: "Bildiğiniz peygamber isimlerini sayın!", t: 8 },
    { p: "Bildiğiniz sure isimlerini sayın!", t: 6 },
    { p: "Esmâ-i Hüsnâ'dan bildiğiniz isimleri sayın!", t: 6 },
    { p: "Kur'an'da adı geçen hayvanları sayın!", t: 5 },
    { p: "Hz. Muhammed'in (s.a.v.) aile fertlerinin isimlerini sayın!", t: 4 }
  ],
  dogruluk: [
    { p: "Güvenilir bir insanın özelliklerini sayın!", t: 6 },
    { p: "Bize emanet edilen şeyleri sayın! (gözlerimiz, ödünç kitap…)", t: 6 }
  ],
  paylasmak: [
    { p: "Paylaşabileceğimiz şeyleri sayın!", t: 10 },
    { p: "Sadaka sayılan iyilikleri sayın! (gülümsemek…)", t: 6 }
  ],
  annebaba: [
    { p: "Anne babamızın bizim için yaptıklarını sayın!", t: 10 },
    { p: "Anne babamızı mutlu edecek şeyleri sayın!", t: 8 }
  ],
  temizlik: [
    { p: "Temiz tutmamız gereken şeyleri sayın!", t: 8 },
    { p: "Abdestte yıkanan ve mesh edilen yerleri sayın!", t: 6 }
  ]
};

/* Şaşkın Ebeveyn: s = gizli senaryo, h = doğrusu */
const SASKIN = [
  { s: "Abdest alıyormuş gibi yap. Ama: ayaklarını yüzünden önce yıka, ağzını çalkalamayı unut ve başını mesh etmek yerine saçını tara. Abartmak serbest!", h: ["Ayaklar en son yıkanır.","Ağız çalkalanır, burna su verilir.","Baş, ıslak elle mesh edilir."] },
  { s: "Sofraya otur ve yemeğe başla. Ama: Besmele çekme, sol elinle ye ve tabağının yarısını bırakıp “Doydum!” de.", h: ["Yemeğe “Bismillah” diyerek başlanır.","Yemek sağ elle yenir.","İsraf etmeyiz; tabağa yiyebileceğimiz kadar alırız."] },
  { s: "Dışarı çıkıp eve gir. Ama: selam verme, ayakkabılarınla içeri yürü ve kapıyı çarp.", h: ["Eve girerken “Selâmün aleyküm” denir.","Ayakkabılar kapıda çıkarılır, ev temiz tutulur.","Kapı yavaşça kapatılır, kimse rahatsız edilmez."] },
  { s: "Çok yüksek sesle hapşır ve hiçbir şey deme. Biri “Yerhamükellah” derse “Ne?” diye cevap ver.", h: ["Hapşıran “Elhamdülillah” der.", "Duyan “Yerhamükellah” (Allah sana rahmet etsin) der.", "Hapşıran da “Yehdînâ ve yehdîkümullah” (Allah bize ve size hidayet versin) diye karşılık verir."] },
  { s: "Misafir karşılıyormuş gibi yap. Ama: yerinden kalkma, “Hoş geldin” deme ve telefonuna bakmaya devam et.", h: ["Misafir ayağa kalkılarak, güler yüzle karşılanır.","“Hoş geldin” denir, hâli hatırı sorulur.","Misafire ikram edilir. (Allah'a ve ahiret gününe iman eden misafirine ikram etsin. Buhârî, Müslim)"] },
  { s: "Yatıp uyuyormuş gibi yap. Ama: dua etmeden, sol tarafına dönüp hemen horlamaya başla.", h: ["Uyumadan önce dua edilir: “Bismikellâhümme emûtü ve ahyâ.”","Sünnet olan, sağ tarafa yatmaktır.","Abdestli yatmak güzel bir sünnettir."] },
  { s: "Biri sana hediye veriyormuş gibi yap. Ama: teşekkür etme, “Bu ne ya?” de ve hediyeyi kenara fırlat.", h: ["Hediye verene teşekkür edilir.","Hediye ayıplanmaz; güzel bir söz söylenir.","Peygamberimiz (s.a.v.) “Hediyeleşin, birbirinizi sevin” buyurdu. (Buhârî, el-Edebü'l-Müfred)"] },
  { s: "Su içiyormuş gibi yap. Ama: ayakta, sol elinle, tek nefeste iç ve sonunda hiçbir şey deme.", h: ["Su sağ elle içilir.","Oturarak ve üç nefeste içmek sünnettir.","Başlarken “Bismillah”, bitince “Elhamdülillah” denir."] },
  { s: "Telefonla konuşuyormuş gibi yap. Ama: selam verme, karşındakinin sözünü sürekli kes ve bağırarak konuş.", h: ["Konuşmaya selamla başlanır.","Karşımızdakinin sözünü kesmeden dinleriz.","Sesimizi yumuşak tutarız. (Lokmân, 19)"] },
  { s: "Camiye giriyormuş gibi yap. Ama: sol ayağınla gir, koşarak ve yüksek sesle konuşarak içeri dal.", h: ["Camiye sağ ayakla girilir.","Camide sessiz ve sakin olunur.","Girerken dua edilir; vakit uygunsa iki rekât “tahiyyetü'l-mescid” namazı kılınır."] }
];

/* Gizli iyilik görevleri.
   {X} isim, {X:e} "Ali'ye", {X:in} "Ali'nin". min = en küçük yaş seviyesi (0: 3-5, 1: 6-8, 2: 9-12, 3: 13+).
   tur: yardim | sevindir | dua | hizmet | soz. Görev seçerken her türden bir tane önerilir. */
const IYILIK = [
  { d: "{X} için her gün kimseye söylemeden dua et.", min: 0, tur: "dua" },
  { d: "{X} için sabah namazından ya da yatmadan önce gizlice bir dua et ve “Allah'ım onu mutlu et” de.", min: 1, tur: "dua" },
  { d: "{X} için güzel bir resim çiz ve fark ettirmeden yastığının altına koy.", min: 0, tur: "sevindir" },
  { d: "{X:in} ayakkabılarını kapının önünde güzelce diz.", min: 0, tur: "hizmet" },
  { d: "{X:e} sebepsiz yere kocaman sarıl.", min: 0, tur: "sevindir" },
  { d: "{X:in} terliklerini o kalkmadan yatağının yanına koy.", min: 0, tur: "hizmet" },
  { d: "{X:e} gün içinde üç kez gülümse ve bir kez “Seni seviyorum” de.", min: 0, tur: "soz" },
  { d: "{X:e} güzel bir not yaz, imzasız olarak bulacağı bir yere sakla.", min: 1, tur: "sevindir" },
  { d: "{X:in} bir işini, o fark etmeden sen yap.", min: 1, tur: "yardim" },
  { d: "{X:e} en sevdiği içeceği hazırla ve masasına bırak.", min: 1, tur: "hizmet" },
  { d: "{X:in} dağınık bir köşesini gizlice topla.", min: 1, tur: "yardim" },
  { d: "{X:in} su bardağını dolu tut; boşaldıkça sessizce doldur.", min: 1, tur: "hizmet" },
  { d: "{X:e} el yapımı küçük bir hediye hazırla, kimden geldiğini söyleme.", min: 1, tur: "sevindir" },
  { d: "{X} hakkında başkalarına güzel bir şey söyle; ona ulaşsın ama senden geldiğini bilmesin.", min: 2, tur: "soz" },
  { d: "{X:in} sevdiği bir atıştırmalığı çantasına ya da cebine gizlice koy.", min: 2, tur: "sevindir" },
  { d: "{X:e} içten bir iltifat et, ama bunun görev olduğunu belli etme.", min: 2, tur: "soz" },
  { d: "{X:in} yapması gereken sıkıcı bir işe gizlice yardım et.", min: 2, tur: "yardim" },
  { d: "{X:in} telefonunu, tabletini ya da kitabını o fark etmeden şarj et, sil, düzenle.", min: 2, tur: "yardim" },
  { d: "{X:in} sevdiği bir yemeği ya da tatlıyı hazırla.", min: 3, tur: "hizmet" },
  { d: "{X} ile ilgili güzel bir anıyı kâğıda yaz ve hafta sonu bulacağı bir yere bırak.", min: 3, tur: "sevindir" },
  { d: "{X:in} bu hafta en çok yorulduğu bir işi üstlen, ama bunu senin yaptığını söyleme.", min: 3, tur: "yardim" },
  { d: "{X} için her gün bir iyilik niyetiyle sadaka ver (bir kumbaraya atmak yeter).", min: 2, tur: "dua" },
  { d: "{X:e} bir sabah kahvaltısını hazırla ya da sofrasını kur.", min: 2, tur: "hizmet" },
  { d: "{X:e} her gün “Allah razı olsun” demek için bir sebep bul.", min: 1, tur: "soz" }
];

/* Gizli kalma ipuçları: İyilik Haftası boyunca Hüdhüd her gün birini söyler */
const IPUCLARI = [
  "Herkes uyurken ya da başka bir odadayken yap. Gece ile sabah arası en gizli zamandır!",
  "İz bırakma: yazdığın notu imzalama, el yazını biraz değiştirebilirsin.",
  "Herkese biraz iyilik yaparsan, asıl gizli dostunun kim olduğu anlaşılmaz.",
  "Gizli iyilik niyetle başlar: “Allah rızası için” de ve başla.",
  "Kimse görmediğinde yapılan iyiliği Allah görür. Gizli dost olmak buna en güzel alıştırmadır.",
  "Bugün iyiliğini yapmadıysan sorun değil; yarın yapabilirsin. Önemli olan vazgeçmemek.",
  "Açılış Töreni yaklaşıyor! Gizli dostun seni tahmin edebilir mi?"
];

/* Açılış Töreni'nde teşekkür kartları */
const TESEKKUR = [
  { e: "🤗", w: "Sarılma", s: "Şimdi gizli dostuna kocaman sarıl!" },
  { e: "🤲", w: "Dua", s: "Gizli dostun için “Allah senden razı olsun” de." },
  { e: "⭐", w: "Yıldız", s: "Gizli dostuna bu haftanın yıldızı olduğunu söyle!" },
  { e: "💐", w: "Çiçek", s: "Gizli dostuna hayalî bir buket uzat ve teşekkür et." }
];

/* Gizli iyiliğin anlamı: hafta başında ve törende gösterilir */
const GIZLI_AYET = { text: "Sadakaları açıktan verirseniz ne güzel! Eğer onları gizler de ihtiyaç sahiplerine verirseniz, bu sizin için daha hayırlıdır.", ref: "Bakara Suresi, 271. ayet" };
const GIZLI_HADIS = { text: "Yedi kişi vardır ki Allah onları kendi gölgesinden başka gölgenin bulunmadığı günde gölgelendirir… Biri de sağ elinin verdiğini sol eli bilmeyecek kadar gizli sadaka verendir.", ref: "Buhârî, Ezan 36; Müslim, Zekât 91" };

/* Kalk-Otur: d = doğru mu? */
const KALKOTUR = [
  { s: "Kur'an-ı Kerim'de 114 sure vardır.", d: true },
  { s: "Hz. Yunus'u bir kedi yuttu.", d: false, i: "Hz. Yunus'u büyük bir balık yuttu." },
  { s: "Günde 5 vakit namaz kılınır.", d: true },
  { s: "Ramazan Bayramı'ndan önce bir ay oruç tutulur.", d: true },
  { s: "Peygamberimiz (s.a.v.) Medine'de doğdu.", d: false, i: "Peygamberimiz (s.a.v.) Mekke'de doğdu, Medine'ye hicret etti." },
  { s: "Hapşırınca “Elhamdülillah” denir.", d: true },
  { s: "Yemeğe sol elle başlanır.", d: false, i: "Yemek sağ elle yenir." },
  { s: "Kâbe Medine'dedir.", d: false, i: "Kâbe Mekke'dedir." },
  { s: "Hz. Musa'nın asası yılana dönüştü.", d: true },
  { s: "Temizlik imanın yarısıdır.", d: true },
  { s: "Mushaf'ın ilk suresi İhlâs'tır.", d: false, i: "Mushaf'ın ilk suresi Fâtiha'dır. İlk inen sure ise Alak Suresi'dir." },
  { s: "Gülümsemek de sadakadır.", d: true },
  { s: "Hz. İbrahim'i ateş yaktı.", d: false, i: "Allah'ın emriyle ateş ona serin ve esenlik oldu." },
  { s: "Kur'an'da adı karınca olan bir sure vardır.", d: true, i: "Neml Suresi, “karınca” demektir." },
  { s: "Hüdhüd bir balıktır.", d: false, i: "Hüdhüd, Hz. Süleyman'a haber getiren bir kuştur." },
  { s: "Hz. Meryem'in adı Kur'an'da geçer.", d: true },
  { s: "Akşam ezanı okununca iftar açılır.", d: true },
  { s: "Komşuya iyilik yapmak önemli değildir.", d: false, i: "Peygamberimiz (s.a.v.) komşu hakkı üzerinde çok durmuştur." },
  { s: "Peygamberimizin (s.a.v.) ilk eşi Hz. Hatice'dir.", d: true },
  { s: "Hz. Nuh büyük bir gemi yaptı.", d: true },
  { s: "Abdestte ayaklar en başta yıkanır.", d: false, i: "Ayaklar en son yıkanır." },
  { s: "Bir hayvana su vermek sevaptır.", d: true },
  { s: "Ezanı ilk okuyan sahabi Hz. Bilâl'dir.", d: true },
  { s: "Ramazan ayı yılda iki kez gelir.", d: false, i: "Ramazan yılda bir kez gelir." }
];

/* Ses Taklidi: oynayan sadece ses çıkarır, diğerleri gözünü kapatıp tahmin eder */
const SESLER = [
  { w: "Horoz", e: "🐓", kolay: true, info: "Peygamberimiz (s.a.v.) “Horozun öttüğünü duyunca Allah'tan lütfunu isteyin” buyurdu. (Buhârî, Müslim)" },
  { w: "Eşek", e: "🫏", kolay: true, info: "Lokmân Suresi'nde, konuşurken sesimizi yumuşak tutmamız öğütlenir. (Lokmân, 19)" },
  { w: "Dörtnala koşan at", e: "🐎", kolay: true, info: "Âdiyât Suresi, soluk soluğa koşan atlara yemin ederek başlar." },
  { w: "Gök gürültüsü", e: "⛈️", kolay: true, info: "Ra'd Suresi'nin adı “gök gürültüsü” demektir. Gök gürültüsü de Allah'ı hamd ile tesbih eder. (Ra'd, 13)" },
  { w: "Yağmur", e: "🌧️", kolay: true, info: "Peygamberimiz (s.a.v.) yağmur yağınca “Allah'ım, faydalı bir yağmur yağdır” diye dua ederdi. (Buhârî)" },
  { w: "Vızıldayan arı", e: "🐝", kolay: true, info: "Nahl, yani Arı Suresi: Arıların karnından insanlara şifa olan bal çıkar. (Nahl, 69)" },
  { w: "Deniz dalgaları", e: "🌊", kolay: true, info: "Hz. Musa asasını denize vurdu ve deniz ikiye yarıldı. (Şuarâ, 63)" },
  { w: "Cıvıldayan kuşlar", e: "🐦", kolay: true, info: "Hz. Davud Allah'ı tesbih ettiğinde dağlar ve kuşlar da onunla birlikte tesbih ederdi. (Sebe, 10)" },
  { w: "Fil", e: "🐘", kolay: true, info: "Fil Suresi: Ebrehe'nin fillerle gelen ordusu Kâbe'ye zarar veremedi." },
  { w: "Uluyan kurt", e: "🐺", kolay: true, info: "Hz. Yusuf'un kardeşleri babalarına “Onu kurt yedi” diye yalan söyledi." },
  { w: "İnek", e: "🐄", kolay: true, info: "Kur'an'ın en uzun suresinin adı Bakara, yani “inek”tir." },
  { w: "Koyun", e: "🐑", kolay: true, info: "Peygamberimiz (s.a.v.) gençliğinde çobanlık yaptı. (Buhârî)" },
  { w: "Sivrisinek", e: "🦟", kolay: true, info: "Allah sivrisineği bile örnek vermekten çekinmez. (Bakara, 26)" },
  { w: "Kurbağa", e: "🐸", kolay: true, info: "Firavun'un kavmine gönderilen uyarılardan biri kurbağalardı. (A'râf, 133)" },
  { w: "Esen rüzgâr", e: "🌬️", kolay: true, info: "Allah rüzgârı Hz. Süleyman'ın emrine verdi. (Sebe, 12)" },
  { w: "Deve", e: "🐪", kolay: true, info: "Peygamberimizin (s.a.v.) devesi Kasvâ'nın çöktüğü yere Mescid-i Nebevî yapıldı." },
  { w: "Havlayan köpek", e: "🐕", kolay: true, info: "Kehf Suresi'nde mağaradaki gençlerin köpeğinden bahsedilir." },
  { w: "Sahur davulu", e: "🥁", kolay: true, info: "Ramazan'da sahura kaldırmak için davul çalınması güzel bir gelenektir." },
  { w: "Kocaman bir hapşırık", e: "🤧", kolay: true, info: "Hapşıran “Elhamdülillah”, duyan “Yerhamükellah” der; hapşıran da “Yehdînâ ve yehdîkümullah” diye karşılık verir. (Buhârî)" },
  { w: "Kaynayan çaydanlık", e: "🫖", kolay: true, info: "Misafire çay ikram etmek güzel bir gelenektir. Peygamberimiz (s.a.v.) misafire ikramı öğütledi. (Buhârî, Müslim)" }
];

/* Hayvan Yürüyüşü: herkes hayvan gibi yürür, telefon "DUR!" deyince heykel olur */
const HAYVANLAR = [
  { w: "Fil", e: "🐘", m: "Hortumunu salla, ağır ağır yürü!", info: "Fil Suresi'nde geçer." },
  { w: "Karınca", e: "🐜", m: "Minik minik, hızlı hızlı yürü!", info: "Neml, yani Karınca Suresi'nde geçer." },
  { w: "Deve", e: "🐪", m: "Sallana sallana çölde yürü!", info: "Peygamberimizin (s.a.v.) devesinin adı Kasvâ idi." },
  { w: "Kurbağa", e: "🐸", m: "Zıpla, zıpla, zıpla!", info: "A'râf Suresi'nde geçer." },
  { w: "Arı", e: "🐝", m: "Vızıldayarak uç!", info: "Nahl, yani Arı Suresi'nde geçer." },
  { w: "Hüdhüd kuşu", e: "🐦", m: "Kanatlarını çırp, başını salla!", info: "Neml Suresi'nde Hz. Süleyman'a haber getirir." },
  { w: "Balık", e: "🐟", m: "Kollarınla yüzüyormuş gibi yap!", info: "Hz. Yunus kıssasında büyük bir balık geçer." },
  { w: "Örümcek", e: "🕷️", m: "Elinle ve ayağınla dört ayaklı yürü!", info: "Ankebût, yani Örümcek Suresi'nde geçer." },
  { w: "Koyun", e: "🐑", m: "Meleyerek otla!", info: "Peygamberler gençliklerinde çobanlık yaptı." },
  { w: "Yılan", e: "🐍", m: "Kıvrıl kıvrıl ilerle!", info: "Hz. Musa'nın asası yılana dönüştü." },
  { w: "Zürafa", e: "🦒", m: "Boynunu uzat, gemiye bin!", info: "Hz. Nuh gemisine her canlıdan bir çift aldı." },
  { w: "At", e: "🐎", m: "Dörtnala koş!", info: "Âdiyât Suresi'nde koşan atlar anlatılır." },
  { w: "Kurt", e: "🐺", m: "Sinsice yürü ve ulu!", info: "Hz. Yusuf kıssasında geçer." },
  { w: "Uyuyan köpek", e: "🐕", m: "Ayaklarını uzat, esne, sonra koş!", info: "Kehf Suresi'nde geçer." }
];

/* Yolculuk Haritası: temalar sırayla birer durak. Bir durak tamamlanınca sonraki açılır. */
const DURAKLAR = [
  { tema: "sukur", ad: "Şükür Vadisi" },
  { tema: "sabir", ad: "Sabır Kıyısı" },
  { tema: "merhamet", ad: "Merhamet Bahçesi" },
  { tema: "dogruluk", ad: "Doğruluk Tepesi" },
  { tema: "paylasmak", ad: "Paylaşma Çarşısı" },
  { tema: "annebaba", ad: "Aile Ocağı" },
  { tema: "temizlik", ad: "Temizlik Pınarı" }
];
const FINAL_DURAK = { ad: "Kandil Gecesi", ico: "🪔" };

/* Aile rozetleri. olcut: ilerleme kaydındaki sayaç, hedef: kaç tane gerektiği */
const ROZETLER = [
  { id: "ilk-gece", e: "🌙", ad: "İlk Gece", nasil: "İlk oyun gecesini tamamlayın.", olcut: "nights", hedef: 1 },
  { id: "bes-gece", e: "✨", ad: "Beş Gece", nasil: "Beş oyun gecesi tamamlayın.", olcut: "nights", hedef: 5 },
  { id: "on-gece", e: "🌟", ad: "On Gece", nasil: "On oyun gecesi tamamlayın.", olcut: "nights", hedef: 10 },
  { id: "zincir", e: "🪔", ad: "Kandil Zinciri", nasil: "Üç hafta üst üste oyun gecesi yapın.", olcut: "streak", hedef: 3 },
  { id: "pandomim", e: "🎭", ad: "Pandomim Ustası", nasil: "On pandomim kartını bildirin.", olcut: "pandomim", hedef: 10 },
  { id: "ses", e: "🔊", ad: "Ses Sihirbazı", nasil: "On ses taklidini bildirin.", olcut: "ses", hedef: 10 },
  { id: "bilge", e: "💡", ad: "Bilge Aile", nasil: "Bil Bakalım'da 25 doğru cevap verin.", olcut: "correct", hedef: 25 },
  { id: "hoca", e: "🧑‍🏫", ad: "Küçük Hocalar", nasil: "Küçük Hoca turunda büyükleri üç kez şaşırtın.", olcut: "hocaWins", hedef: 3 },
  { id: "heykel", e: "🗿", ad: "Heykel Ustaları", nasil: "Beş Hayvan Yürüyüşü tamamlayın.", olcut: "hayvan", hedef: 5 },
  { id: "dedektif", e: "🔍", ad: "Dedektif Ailesi", nasil: "Açılış Töreni'nde üç gizli dostu doğru tahmin edin.", olcut: "detective", hedef: 3 },
  { id: "gizli-dost", e: "💌", ad: "Gizli Dostlar", nasil: "On gizli iyilik yapın.", olcut: "deeds", hedef: 10 },
  { id: "nar", e: "🍎", ad: "Nar Bahçesi", nasil: "Nar ağacında 25 nar biriktirin.", olcut: "deeds", hedef: 25 },
  { id: "orman", e: "🌳", ad: "Fidan Ormanı", nasil: "Bahçeye 100 fidan dikin.", olcut: "garden", hedef: 100 },
  { id: "koleksiyon", e: "🃏", ad: "Koleksiyoncu", nasil: "Albümde 25 Kıssa Kartı toplayın.", olcut: "cards", hedef: 25 },
  { id: "yolcu", e: "🧭", ad: "Yolcu", nasil: "Haritada üç durağı tamamlayın.", olcut: "lands", hedef: 3 },
  { id: "kandil", e: "🏆", ad: "Kandil Gecesi", nasil: "Yolculuğun tüm duraklarını tamamlayın.", olcut: "lands", hedef: 7 }
];

/* Yolculukla ilgili Hüdhüd cümleleri (yapay zekâ sesi için sabit) */
const YOLCULUK_SOZ = {
  harita: "Yolculukta sıradaki durak neresi? Haydi seçelim!",
  kilitli: "Bu durak henüz kilitli. Önceki durağı tamamlayınca açılacak!",
  durakAcildi: "Yeni bir durak açıldı!",
  rozet: "Yeni bir rozet kazandınız!",
  kart: "Yeni bir Kıssa Kartı albüme eklendi!",
  albüm: "Kıssa Kartları albümümüz. Her kart bir kıssa anlatıyor!",
  rozetler: "Ailemizin rozetleri. Hangisini sıradaki hedefimiz yapalım?",
  final: "Tebrikler! Ailecek yolculuğunun bütün duraklarını tamamladınız. Allah hepinizden razı olsun!"
};

/* ===== Bilmece (çark oyunu) =====
   l: 0 minikler (3-5), 1 çocuklar (6-8), 2 büyükler (9+). din: hoca kontrolüne giren bilmece.
   Kural: Allah, peygamberler, sahabeler ve melekler asla bilmece cevabı olmaz; cevaplar nesne, hayvan, ibadet ve davranıştır. */
const BILMECELER = [
  { l: 0, s: "Çiçekten çiçeğe konarım, vız vız ederim; tatlı tatlı bal yaparım.", i: "Kur'an'da benim adımı taşıyan bir sure var.", c: "Arı", e: "🐝", din: true, info: "Nahl, yani Arı Suresi'nde arının balından insanlara şifa olduğu anlatılır." },
  { l: 0, s: "Küçücüğüm ama çok çalışkanım; yazın kışlık yiyeceğimi yuvama taşırım.", i: "Hz. Süleyman'ın ordusunu görünce arkadaşlarımı uyardım.", c: "Karınca", e: "🐜", din: true, info: "Neml, yani Karınca Suresi'nde anlatılır." },
  { l: 0, s: "Gün doğmadan uyanırım, ü-ü-ürü-üü diye herkesi kaldırırım.", i: "Sabahları ilk ben öterim.", c: "Horoz", e: "🐓" },
  { l: 0, s: "Uzun hortumum, kocaman kulaklarım var; ağır ağır yürürüm.", i: "Kur'an'da benim adımı taşıyan bir sure var.", c: "Fil", e: "🐘", din: true, info: "Fil Suresi'nde Kâbe'nin nasıl korunduğu anlatılır." },
  { l: 0, s: "Gökten damla damla inerim; çiçekler beni görünce sevinir.", i: "Gelmeden önce bulutlar toplanır.", c: "Yağmur", e: "🌧️" },
  { l: 0, s: "Gündüz gökyüzündeyim, sıcacığım, parlarım; ben batınca akşam olur.", i: "Bana çıplak gözle bakılmaz.", c: "Güneş", e: "☀️" },
  { l: 0, s: "Evimi sırtımda taşırım, yavaş yavaş yürürüm, hiç acele etmem.", i: "Korkunca başımı kabuğuma saklarım.", c: "Kaplumbağa", e: "🐢" },
  { l: 0, s: "Kanatlarım rengârenk, çiçekten çiçeğe uçarım; önce tırtıldım, şimdi süslüyüm.", i: "Kozamdan çıktım.", c: "Kelebek", e: "🦋" },
  { l: 0, s: "Sen gülersen ben de gülerim, el sallarsan ben de sallarım; ama hiç konuşmam.", i: "Sabah saçını tararken bana bakarsın.", c: "Ayna", e: "🪞" },
  { l: 0, s: "Abdest alırken beni kullanırsın, susayınca beni içersin; israf edilmeyi hiç sevmem.", i: "Musluktan akarım.", c: "Su", e: "💧", din: true },
  { l: 1, s: "Otuz üç tanem var, bir ipe dizilmişiz; parmaklar bizi çeker, dil Allah'ı anar.", i: "Namazdan sonra elinde tutarsın.", c: "Tespih", e: "📿", din: true },
  { l: 1, s: "Yere serilirim, üzerimde namaz kılınır; yönüm hep Kâbe'ye döner.", i: "Desenli bir halıya benzerim.", c: "Seccade", e: "", din: true },
  { l: 1, s: "Ağaçtan gelirim, dişleri temizlerim; Peygamberimiz (s.a.v.) beni çok severdi.", i: "Diş fırçasının dedesiyim.", c: "Misvak", e: "🪥", din: true, info: "Misvak kullanmak sünnettir." },
  { l: 1, s: "Akşam ezanı okununca sofraya ilk ben gelirim; tatlıyım, çekirdeğim var.", i: "Orucunu benimle açarsın.", c: "Hurma", e: "🌴", din: true, info: "Peygamberimiz (s.a.v.) orucunu genellikle hurma ile açardı." },
  { l: 1, s: "Herkes uyurken kalkarız, ezan okunmadan yeriz; bu yemekte bereket var.", i: "Ramazan'da imsaktan önce yenir.", c: "Sahur", e: "🌙", din: true, info: "Peygamberimiz (s.a.v.) “Sahur yapın, çünkü sahurda bereket vardır” buyurdu. (Buhârî, Müslim)" },
  { l: 1, s: "İncecik bir yay gibi doğarım, büyüyüp yuvarlak olurum; beni görünce Ramazan'ın geldiğini anlarsın.", i: "Geceleri gökyüzündeyim.", c: "Hilal (Ay)", e: "🌙", din: true },
  { l: 1, s: "Ağzım yok ama konuşurum, dilim yok ama anlatırım; beni okudukça bilgin artar.", i: "Sayfalarım var.", c: "Kitap", e: "📖" },
  { l: 1, s: "Kırmızı kabuğumun içinde yüzlerce yakut gibi tanem var; birini düşürme, hepsi bereket.", i: "Ailecek'teki ağaçta beni toplarsın.", c: "Nar", e: "" },
  { l: 1, s: "Kapıdan girerken söylenirim, birine rastlayınca söylenirim; söyleyene de duyana da esenlik getiririm.", i: "Cevabım “Aleyküm selam”dır.", c: "Selam", e: "👋", din: true },
  { l: 1, s: "Yemeğe, işe, derse başlarken söylersin; söyleyince bereket gelir.", i: "“Bismillah” diye başlarım.", c: "Besmele", e: "", din: true },
  { l: 1, s: "İpek gibi ağımı örerim, köşelerde beklerim; Kur'an'da adımı taşıyan bir sure var.", i: "Sekiz bacağım var.", c: "Örümcek", e: "🕷️", din: true, info: "Ankebût, yani Örümcek Suresi." },
  { l: 1, s: "Çölde günlerce susuz yürürüm, sırtımda hörgücüm, yükleri taşırım.", i: "Çölün gemisi derler bana.", c: "Deve", e: "🐫" },
  { l: 1, s: "Yüzüm var ağzım yok, kollarım var elim yok; durmadan yürürüm ama yerimden kımıldamam.", i: "Namaz vakitlerine bakarken bana da bakarsın.", c: "Saat", e: "🕰️" },
  { l: 1, s: "Toprağa gömülürüm ama ölmem; su içer, filiz verir, ağaç olurum.", i: "Küçücük bir tanecikten başlarım.", c: "Tohum", e: "🌱" },
  { l: 1, s: "Kapı çalınır, sofra kurulur; ben gelince ev şenlenir, giderken bereket bırakırım.", i: "Bana ikram edilir.", c: "Misafir", e: "🫖", din: true, info: "Peygamberimiz (s.a.v.) misafire ikram etmeyi öğütledi." },
  { l: 2, s: "Ne kadar çok verirsen o kadar çoğalırım, ne kadar saklarsan o kadar azalırım.", i: "Kalpten kalbe geçerim.", c: "Sevgi", e: "❤️" },
  { l: 2, s: "Söylemesi bazen zordur, ama söyleyince içini rahatlatırım; yalanın tam tersiyim.", i: "Beni söyleyene güvenilir.", c: "Doğruluk", e: "✅", din: true, info: "Peygamberimiz (s.a.v.) “Doğruluk iyiliğe götürür” buyurdu. (Buhârî, Müslim)" },
  { l: 2, s: "Gizlice yapılırım, kimse bilmez; sağ elin verdiğini sol el görmez.", i: "Ailecek'te bir haftalık oyunum var.", c: "Gizli iyilik", e: "💌", din: true },
  { l: 2, s: "Sana bırakılırım, sende kalırım ama senin değilim; beni korursan güvenilir olursun.", i: "Sahibine geri verilirim.", c: "Emanet", e: "🔐", din: true },
  { l: 2, s: "Kızınca beni hatırla; beklersen, sakin kalırsan sonunda kazanan hep ben olurum.", i: "Ağacım acı, meyvem tatlıdır.", c: "Sabır", e: "🌱", din: true },
  { l: 2, s: "Nimeti görünce kalpten gelirim, dilde “Elhamdülillah” olurum.", i: "Teşekkürün en güzeliyim.", c: "Şükür", e: "🤲", din: true },
  { l: 2, s: "Paylaştıkça azalmam, aksine çoğalırım; okudukça, sordukça büyürüm.", i: "Okulda, kitapta, sohbette kazanılırım.", c: "İlim (bilgi)", e: "💡", din: true },
  { l: 2, s: "Sabah dört ayakla, öğlen iki ayakla, akşam üç ayakla yürür.", i: "Sabah bebek, öğlen yetişkin, akşam bastonlu bir dede.", c: "İnsan", e: "" },
  { l: 2, s: "Gece belirir, gündüz kaybolurum; on biri bir rüyada saygıyla eğildi.", i: "Hz. Yusuf'un rüyasını hatırla.", c: "Yıldız", e: "⭐", din: true },
  { l: 2, s: "Kardeşine gülümsersen ben olurum, yoldaki taşı kaldırırsan yine ben olurum.", i: "Sadece parayla verilmem.", c: "Sadaka", e: "🤲", din: true, info: "Peygamberimiz (s.a.v.) kardeşine gülümsemenin de sadaka olduğunu söyledi. (Tirmizî)" },
  { l: 2, s: "Hep birlikte uçarız, gökyüzüne V harfi çizeriz; öndeki yorulunca arkaya geçer, birbirimize destek oluruz.", i: "Kuşların Yolculuğu'nun Tevhid Vadisi'nde de vardık.", c: "Yaban kazları", e: "🪿" }
];

/* ===== Kıssa Sıralama (grup oyunu) =====
   o: olaylar doğru sırada yazılır; oyunda karıştırılır. l: 0 en küçükler için de uygun. */
const SIRALAMA = [
  { l: 0, ad: "Yemek adabı", e: "🍽️", o: ["Ellerimizi yıkarız", "“Bismillah” deriz", "Sağ elimizle yeriz", "“Elhamdülillah” deriz"] },
  { l: 0, ad: "Sabah namazına hazırlık", e: "🌅", o: ["Uyanınca dua ederiz", "Abdest alırız", "Sabah namazını kılarız"] },
  { l: 0, ad: "Tohumdan ağaca", e: "🌱", o: ["Tohumu toprağa ekeriz", "Sularız, filiz çıkar", "Fidan büyür", "Ağaç meyve verir"] },
  { l: 1, ad: "Hz. Nuh'un gemisi", e: "⛵", din: true, o: ["Hz. Nuh, Allah'ın emriyle gemiyi yaptı", "Hayvanlar çift çift gemiye bindi", "Tufan başladı, sular yükseldi", "Gemi Cûdî Dağı'na oturdu"], ref: "Hûd Suresi, 37-44" },
  { l: 1, ad: "Fil olayı", e: "🐘", din: true, o: ["Ebrehe ordusu ve filleriyle Kâbe'ye yürüdü", "Allah kuş sürüleri gönderdi", "Kuşlar ordunun üzerine taş attı", "Ordu yenildi, Kâbe korundu"], ref: "Fil Suresi" },
  { l: 1, ad: "Bebek Musa", e: "🧺", din: true, o: ["Annesi onu bir sandığa koyup nehre bıraktı", "Sandık Firavun'un sarayına ulaştı", "Bebek başka sütannelerin sütünü emmedi", "Allah onu annesine geri kavuşturdu"], ref: "Kasas Suresi, 7-13" },
  { l: 2, ad: "Hz. Yunus", e: "🐋", din: true, o: ["Hz. Yunus bir gemiye bindi", "Büyük bir balık onu yuttu", "Balığın karnında Allah'a dua etti", "Balık onu sahile bıraktı"], ref: "Sâffât Suresi, 139-145; Enbiyâ Suresi, 87" },
  { l: 2, ad: "Hz. Yusuf", e: "⭐", din: true, o: ["Hz. Yusuf rüyasında yıldızları gördü", "Kardeşleri onu kuyuya attı", "Bir kervan onu kuyudan çıkardı", "Mısır'da kardeşleriyle yeniden buluştu"], ref: "Yûsuf Suresi" },
  { l: 2, ad: "Hz. İbrahim ve ateş", e: "🔥", din: true, o: ["Hz. İbrahim kavmine tek Allah'a inanmayı anlattı", "Kavmi onu ateşe attı", "Allah'ın emriyle ateş serin ve esenlik oldu"], ref: "Enbiyâ Suresi, 51-69" },
  { l: 2, ad: "Hicret", e: "🐪", din: true, o: ["Peygamberimiz (s.a.v.) ve Hz. Ebû Bekir Mekke'den yola çıktı", "Sevr Mağarası'nda saklandılar", "Yollarına devam edip Medine'ye vardılar", "Medine'de Mescid-i Nebevî yapıldı"], ref: "Siyer" }
];

/* ===== Hangisi Farklı? (grup oyunu) =====
   o: dört seçenek [metin, resim]; ilk seçenek farklı olandır (oyunda karıştırılır). Kutsal isimlerde resim yoktur. */
const FARKLI = [
  { l: 0, o: [["Ev", "🏠"], ["Yağmur", "🌧️"], ["Kar", "❄️"], ["Dolu", "🧊"]], n: "Yağmur, kar ve dolu gökten yağar; ev yağmaz." },
  { l: 0, o: [["Elma", "🍎"], ["Ay", "🌙"], ["Yıldız", "⭐"], ["Güneş", "☀️"]], n: "Ay, yıldız ve güneş gökyüzündedir; elma ağaçta yetişir." },
  { l: 0, o: [["Balık", "🐟"], ["Horoz", "🐓"], ["Kartal", "🦅"], ["Hüdhüd", "🐦"]], n: "Horoz, kartal ve hüdhüd kanatlı kuşlardır; balığın kanadı yoktur, yüzgeci vardır." },
  { l: 0, o: [["Top", "⚽"], ["Tespih", "📿"], ["Abdest suyu", "💧"], ["Cami", "🕌"]], n: "Tespih, abdest suyu ve cami ibadetle ilgilidir; top oyun içindir.", din: true },
  { l: 1, o: [["Penguen", "🐧"], ["Karınca", "🐜"], ["Arı", "🐝"], ["Örümcek", "🕷️"]], n: "Karınca (Neml), arı (Nahl) ve örümcek (Ankebût) Kur'an'da birer surenin adıdır; penguenin adıyla bir sure yoktur.", din: true },
  { l: 1, o: [["Pikniğe gitmek", "🧺"], ["Namaz kılmak", "🕌"], ["Oruç tutmak", "🌙"], ["Zekât vermek", "🤲"]], n: "Namaz, oruç ve zekât İslam'ın şartlarındandır; piknik güzel bir aile etkinliğidir ama ibadet değildir.", din: true },
  { l: 1, o: [["Günaydın", ""], ["Bismillah", ""], ["Elhamdülillah", ""], ["Maşallah", ""]], n: "Bismillah, Elhamdülillah ve Maşallah, Allah'ı anan güzel sözlerdir; Günaydın bir selamlaşma sözüdür.", din: true },
  { l: 2, o: [["Tevrat", ""], ["Fâtiha", ""], ["İhlâs", ""], ["Kevser", ""]], n: "Fâtiha, İhlâs ve Kevser Kur'an'daki surelerdir; Tevrat, Hz. Musa'ya indirilen kitaptır.", din: true },
  { l: 2, o: [["Hz. Bilâl", ""], ["Hz. Musa", ""], ["Hz. Nuh", ""], ["Hz. İsa", ""]], n: "Hz. Musa, Hz. Nuh ve Hz. İsa peygamberdir; Hz. Bilâl ise ilk ezanı okuyan sahabidir.", din: true },
  { l: 2, o: [["Paris", ""], ["Mekke", ""], ["Medine", ""], ["Kudüs", ""]], n: "Mekke'de Kâbe, Medine'de Mescid-i Nebevî, Kudüs'te Mescid-i Aksâ vardır; bu üç mescid müslümanlar için özeldir. Paris'te böyle bir mescid yoktur.", din: true },
  { l: 2, o: [["Dinozor", "🦖"], ["Fil", "🐘"], ["Deve", "🐫"], ["İnek", "🐄"]], n: "Fil, deve ve inek Kur'an'da adı geçen hayvanlardır; dinozor geçmez.", din: true }
];

/* ===== Kalp Bahçesi: kalbin yedi köşesi =====
   İlham: Gazâlî, İhyâu Ulûmi'd-Dîn (Mühlikât ve Münciyât) ve Kimyâ-yı Saâdet. Her kalp hastalığı bir yabani ot,
   ilacı bir çiçektir. Bahçe benzetmesi bizimdir. Kalp Doktoru oyunu ve Kalp Bahçesi sezonu bu listeyi kullanır. */
const KALP_KOSELER = [
  { id: "kibir", hastalik: "Kibir", ot: "Diken", otE: "🌵", cicek: "Menekşe", cicekE: "💜", ilac: "Tevazu" },
  { id: "dil", hastalik: "Kırıcı söz", ot: "Pıtrak", otE: "🌰", cicek: "Gül", cicekE: "🌹", ilac: "Güzel söz" },
  { id: "ofke", hastalik: "Öfke", ot: "Isırgan", otE: "🍃", cicek: "Lavanta", cicekE: "🪻", ilac: "Sabır" },
  { id: "haset", hastalik: "Haset", ot: "Sarmaşık", otE: "🌿", cicek: "Papatya", cicekE: "🌼", ilac: "Kardeşinin sevincine sevinmek" },
  { id: "cimrilik", hastalik: "Cimrilik", ot: "Kuru dal", otE: "🪵", cicek: "Nar fidanı", cicekE: "🌳", ilac: "Cömertlik" },
  { id: "hirs", hastalik: "Hırs", ot: "Ayrık otu", otE: "🌾", cicek: "Kekik", cicekE: "🌱", ilac: "Kanaat" },
  { id: "riya", hastalik: "Gösteriş", ot: "Yapma çiçek", otE: "🎀", cicek: "Yasemin", cicekE: "🤍", ilac: "İhlas: Allah için yapmak" }
];

/* ===== Kalp Doktoru (grup oyunu) =====
   k: köşe, s: durum, i: ilaç önerisi. l: 0 en küçükler için de uygun. y: yetişkin kartı (büyükler teşhis edilir).
   Kartlar kimseyi etiketlemez; ot her kalpte biter, hep birlikte sökülür. */
const KALP_DOKTORU = [
  { l: 0, k: "kibir", s: "Oyunda kazanınca “Ben herkesten iyiyim, siz hiç bilmiyorsunuz!” dedi.", i: "Kazanınca “Güzel oynadınız” demek ve kaybedeni sevindirmek." },
  { l: 1, k: "kibir", s: "Takım oyununda kendinden küçükleri seçmedi, “Onlar oyunu bilmez” dedi.", i: "Küçükleri de oyuna almak, onlara oyunu sabırla öğretmek." },
  { l: 1, k: "kibir", s: "Sınıfta bir arkadaşının yanlış cevabına herkesle birlikte güldü.", i: "Herkesin hata yapabileceğini hatırlamak ve arkadaşına destek olmak." },
  { l: 3, y: true, k: "kibir", s: "Toplantıda başkalarını dinlemeden “Doğrusu benim dediğim” dedi.", i: "Önce dinlemek ve “Haklı olabilirsin” diyebilmek." },
  { l: 0, k: "dil", s: "Kardeşinin çizdiği resme “Bu ne biçim çizim!” dedi.", i: "Resmin güzel bir yerini bulup söylemek: “Renklerini çok sevdim!”" },
  { l: 1, k: "dil", s: "Arkadaşları, o gün okula gelmeyen bir çocuk hakkında gülerek konuştu; o da katıldı.", i: "Konuyu değiştirmek ya da o arkadaşın güzel bir huyunu söylemek." },
  { l: 2, k: "dil", s: "Vazoyu kendisi kırdı ama “Kedi kırdı” dedi.", i: "Doğruyu söylemek. Doğru söyleyenin kalbi rahat eder." },
  { l: 3, y: true, k: "dil", s: "Akşam yemeğinde işteki bir arkadaşını çekiştirdi.", i: "Arkadaşını iyilikle anmak ya da hiç söz etmemek." },
  { l: 0, k: "ofke", s: "Oyunu kaybedince kartları etrafa dağıttı.", i: "Durmak, derin nefes almak ve “Bir dahaki sefere” demek." },
  { l: 0, k: "ofke", s: "Kardeşi lego kulesini yanlışlıkla yıkınca ona vurdu.", i: "Önce durup nefes almak, sonra “Üzüldüm, birlikte yeniden yapalım” demek." },
  { l: 1, k: "ofke", s: "Ödevi zor gelince defterini fırlattı.", i: "Biraz ara vermek, sakinleşince yardım istemek." },
  { l: 3, y: true, k: "ofke", s: "Trafikte öndeki araç yavaş gidince korna çalıp bağırdı.", i: "“Eûzü billâh” demek, derin nefes almak ve sabırla beklemek." },
  { l: 0, k: "haset", s: "Kardeşi doğum gününde hediye alınca “Bana neden yok?” deyip hediyeyi elinden aldı.", i: "Kardeşine “Güle güle kullan” demek ve onun sevincine ortak olmak." },
  { l: 1, k: "haset", s: "Arkadaşı resim yarışmasında birinci olunca “Zaten kopya çekti” dedi.", i: "“Tebrik ederim, Allah daha nice başarılar versin” demek." },
  { l: 1, k: "haset", s: "Öğretmen bir arkadaşını övünce bütün gün onunla konuşmadı.", i: "Arkadaşını tebrik etmek ve “Ben de onun gibi çalışayım” diye imrenmek." },
  { l: 3, y: true, k: "haset", s: "Arkadaşının terfi haberine sevinmiş gibi yaptı ama içi çok sıkıldı.", i: "Onun için içten dua etmek. Kardeşine dua eden, kalbindeki sarmaşığı söker." },
  { l: 0, k: "cimrilik", s: "Çikolatasını kimse görmesin diye odasında saklayarak yedi.", i: "Çikolatasını bölüp kardeşine ikram etmek." },
  { l: 0, k: "cimrilik", s: "Misafir çocuk oyuncağıyla oynamak isteyince “Hepsi benim!” dedi.", i: "Bir oyuncağını seçip misafire vermek, birlikte oynamak." },
  { l: 1, k: "cimrilik", s: "Arkadaşı kalemini unutmuş. Onun üç kalemi var ama hiçbirini vermedi.", i: "Kalemlerinden birini seve seve vermek." },
  { l: 3, y: true, k: "cimrilik", s: "Çocuğunun “Benimle oynar mısın?” sorusuna telefondan başını kaldırmadan “Sonra” dedi.", i: "Telefonu bırakıp vaktini çocuğuyla paylaşmak. Vakit de bir ikramdır." },
  { l: 0, k: "hirs", s: "Bayramda üç hediye aldı ama dördüncüyü alamadığı için surat astı.", i: "Elindeki hediyeler için “Elhamdülillah” demek." },
  { l: 1, k: "hirs", s: "Markette her raftan bir şey istedi, alınmayınca ağladı.", i: "“Bende zaten var” diyebilmek ve ihtiyacı olanı seçmek." },
  { l: 1, k: "hirs", s: "Arkadaşının tableti daha yeni diye kendi tabletini hiç beğenmemeye başladı.", i: "Kendi tabletinin çalıştığına şükretmek; bakılacaksa daha azı olana bakmak." },
  { l: 3, y: true, k: "hirs", s: "Dolabı kıyafetle dolu olduğu hâlde “Giyecek hiçbir şeyim yok” deyip indirim sitelerinde saatler geçirdi.", i: "Elindekilere şükretmek ve “Buna gerçekten ihtiyacım var mı?” diye sormak." },
  { l: 1, k: "riya", s: "Annesi bakarken odasını topladı, annesi gidince bıraktı.", i: "Kimse bakmasa da yapmak; çünkü Allah her zaman görür." },
  { l: 1, k: "riya", s: "Gizli bir iyilik yaptı, sonra herkese tek tek anlattı.", i: "İyiliği yapıp kimseye söylememek; yasemin gibi sessizce açmak." },
  { l: 2, k: "riya", s: "Öğretmen bakarken yerdeki çöpleri topladı, öğretmen çıkınca bıraktı.", i: "İyiliği öğretmen görsün diye değil, Allah rızası için yapmak." },
  { l: 3, y: true, k: "riya", s: "Yardım kampanyasına bağış yaptı, fotoğrafını çekip hemen paylaştı.", i: "Niyetini yoklamak: başkalarını teşvik için mi, övülmek için mi? Mümkünse iyiliği gizli yapmak." }
];

/* ===== Hikmetli Hikâye =====
   k: ilgili kalp köşesi (yoksa genel). h: hikâye, s: soru, c: hikmet, r: hikmette geçen hadisin kaynağı.
   kaynak: "Özgün temsil" ya da "Halk hikâyesi". Kaynağı belli olmayan hikâyeler Gazâlî'ye ya da hadise dayandırılmaz. */
const HIKMETLI = [
  { k: "kibir", ad: "İki başak", e: "🌾", kaynak: "Özgün temsil",
    h: "Bir tarlada iki başak yan yana büyüdü. Biri başını hep dik tutardı: “Bakın, en uzun benim!” Öteki başını yavaş yavaş eğiyordu. Hasat zamanı çiftçi geldi; eğilen başağı eline aldı ve gülümsedi. İçi dolu dolu buğdaydı. Dik duran başağın içi ise bomboştu.",
    s: "Sence dolu başak neden eğiliyor?",
    c: "İnsanın bildiği ve sahip olduğu şeyler arttıkça daha alçakgönüllü olur. Allah için tevazu göstereni Allah yüceltir.", r: "Müslim, Birr 69" },
  { k: "dil", ad: "Rüzgârdaki tüyler", e: "🪶", kaynak: "Halk hikâyesi",
    h: "Bir köyde biri, komşusu hakkında doğru olmayan bir söz yaymış. Sonra pişman olmuş ve köyün yaşlısına gidip “Nasıl düzeltebilirim?” diye sormuş. Yaşlı adam ona bir tüy yastık vermiş: “Tepeye çık, yastığı aç, tüyleri rüzgâra bırak.” O da öyle yapmış. Ertesi gün yaşlı adam “Şimdi git, o tüylerin hepsini topla” demiş. “Ama tüyler her yere dağıldı!” “Söz de öyledir. Bir kez ağızdan çıktı mı, her yere dağılır.”",
    s: "Söylenen bir söz neden rüzgârdaki tüylere benziyor? Peki güzel bir söz dağılırsa ne olur?",
    c: "Konuşmadan önce düşünelim: Doğru mu? Güzel mi? Faydalı mı? Peygamberimiz (s.a.v.) “Allah'a ve ahiret gününe iman eden ya hayır söylesin ya da sussun” buyurmuştur.", r: "Buhârî, Edeb 31; Müslim, Îmân 74" },
  { k: "ofke", ad: "Taşan süt", e: "🥛", kaynak: "Özgün temsil",
    h: "Ocakta bir tencere süt ısınıyordu. Önce sessizdi. Sonra yavaş yavaş köpürmeye başladı; köpük yükseldi, yükseldi… ve taştı! Ocağın üstü yandı, mutfak kokuyla doldu, temizlemek saatler sürdü. Anneanne gülümsedi: “Süt taşmadan önce ocağın altını kısmak gerekir. Köpürdüğünü görür görmez.”",
    s: "Öfkemiz köpürmeye başlayınca “ocağın altını kısmak” için ne yapabiliriz?",
    c: "Durmak, nefes almak, oturmak ve “Eûzü billâh” demek öfkeyi söndürür. Peygamberimiz (s.a.v.) gerçek güçlünün, öfkelendiğinde kendine hâkim olan kişi olduğunu bildirmiştir.", r: "Buhârî, Edeb 76; Müslim, Birr 107" },
  { k: "haset", ad: "Papatya tarlası", e: "🌼", kaynak: "Özgün temsil",
    h: "Bir tarlada tek bir papatya açtı. Çok güzeldi ama yalnızdı. Ertesi gün yanında bir papatya daha açtı. İlk papatya üzülmedi, sevindi: “Hoş geldin!” Sonra bir tane daha, bir tane daha… Bir hafta sonra bütün tarla bembeyaz oldu. Arılar uzaklardan geldi, kelebekler tarlayı doldurdu.",
    s: "Yanındakinin de çiçek açması papatyadan bir şey eksiltti mi? Kardeşinin sevinci senden bir şey eksiltir mi?",
    c: "Kardeşimizin sevincine sevinmek kalbi genişletir. Peygamberimiz (s.a.v.), kişi kendisi için istediğini kardeşi için de istemedikçe tam iman etmiş olmayacağını bildirmiştir.", r: "Buhârî, Îmân 7; Müslim, Îmân 71" },
  { k: "cimrilik", ad: "Nar ağacı", e: "🌳", kaynak: "Özgün temsil",
    h: "Bir bahçede yaşlı bir nar ağacı vardı. Her sonbahar dalları kıpkırmızı narlarla dolardı. Narlarını kuşlara, yoldan geçenlere, komşu çocuklarına verirdi. Yanındaki kuru dal bir gün sordu: “Hepsini dağıtıyorsun, sana ne kalıyor?” Nar ağacı gülümsedi: “Verdikçe dallarıma kuşlar konuyor, gölgemde çocuklar oynuyor. Hiç yalnız kalmıyorum.”",
    s: "Nar ağacı narlarını verince neyi kazandı? Sen bir şeyini paylaştığında neler kazanırsın?",
    c: "Paylaşmak insanı fakirleştirmez, Allah bereket verir. Peygamberimiz (s.a.v.) “Sadaka malı eksiltmez” buyurmuştur.", r: "Müslim, Birr 69" },
  { k: "hirs", ad: "Kavanozdaki el", e: "🫙", kaynak: "Halk hikâyesi",
    h: "Küçük bir çocuk, elini dar ağızlı bir fındık kavanozuna soktu ve avucunu fındıkla doldurdu. Ama elini çıkarmaya çalışınca çıkaramadı; dolu yumruk kavanozun ağzından geçmiyordu. Ağlamaya başladı. Dedesi yanına geldi: “Avucundakilerin yarısını bırak, elin rahatça çıkar. Yarım avuç fındık da sana yeter.” Çocuk biraz bıraktı ve eli kolayca çıktı.",
    s: "Çocuk neden elini çıkaramadı? Biz de bazen “hepsini” isteyince neyi kaçırırız?",
    c: "Elimizdekiyle yetinmek kalbi rahatlatır. Peygamberimiz (s.a.v.), asıl zenginliğin gönül zenginliği olduğunu bildirmiştir.", r: "Buhârî, Rikâk 15; Müslim, Zekât 120" },
  { k: "riya", ad: "Gece açan yasemin", e: "🤍", kaynak: "Özgün temsil",
    h: "Pazarda iki çiçek satılıyordu. Biri parlak, yaldızlı bir yapma çiçekti; gelen geçen “Ne kadar parlak!” diyordu. Diğeri küçük bir saksıda, beyaz, süssüz bir yasemindi; kimse ona bakmıyordu. Bir aile yasemini alıp bahçesine dikti. O gece, herkes uyurken, karanlıkta yasemin açtı. Kimse görmedi. Ama sabah olunca bütün sokak mis gibi kokuyordu. Yapma çiçek ise vitrinde parlamaya devam etti; tek bir arı bile ona konmadı.",
    s: "Arılar neden yapma çiçeğe konmadı? Yasemin kimse görmezken açtı, kokusu yine de neden her yere yayıldı?",
    c: "İyiliğin değeri niyetindedir. Allah için yapılan iyilik, kimse görmese de güzelliğini yayar. Peygamberimiz (s.a.v.) “Ameller niyetlere göredir” buyurmuştur.", r: "Buhârî, Bed'ü'l-vahy 1; Müslim, İmâre 155" },
  { ad: "Mum mumu yakar", e: "🕯️", kaynak: "Özgün temsil",
    h: "Karanlık bir odada bir mum yanıyordu. Yanına sönük bir mum getirdiler. Yanan mum düşündü: “Onu yakarsam benim ışığım azalır mı?” Yine de alevini ona uzattı. Sönük mum tutuştu. Yanan mumun ışığı hiç azalmadı; oda ise iki kat aydınlandı. Sonra ikinci mum üçüncüyü yaktı, üçüncü dördüncüyü… Bir süre sonra oda gündüz gibi oldu.",
    s: "Mum ışığını paylaşınca ne kaybetti? Biz neleri böyle paylaşabiliriz?",
    c: "Bilgi, sevgi ve iyilik paylaştıkça azalmaz, çoğalır." },
  { ad: "Çatlak testi", e: "🏺", kaynak: "Halk hikâyesi",
    h: "Bir sucunun iki testisi vardı. Biri sağlamdı, öteki çatlak. Çatlak testi her gün yolda suyunun yarısını döküyor ve çok utanıyordu: “Ben hiçbir işe yaramıyorum.” Bir gün sucu ona yolun kenarını gösterdi. Çatlak testinin geçtiği tarafta rengârenk çiçekler açmıştı! “Senin döktüğün suyla buraya tohum ektim. Her gün sen onları suladın.”",
    s: "Çatlak testi kendini neden işe yaramaz sandı? Senin eksik sandığın bir yanın nasıl bir güzelliğe dönüşebilir?",
    c: "Herkesin bir eksiği vardır ve Allah her birimize başka bir güzellik vermiştir. Ne kendimizi ne de başkalarını küçük görürüz." },
  { ad: "Yaşlı adamın fidanı", e: "🌰", kaynak: "Halk hikâyesi",
    h: "Yaşlı bir adam bahçesine ceviz fidanı dikiyordu. Yoldan geçen biri güldü: “Ceviz ağacı yıllar sonra meyve verir. Sen o günleri göremezsin ki!” Yaşlı adam gülümsedi: “Bizden öncekiler dikti, biz yedik. Şimdi biz dikelim, bizden sonrakiler yesin.”",
    s: "Yaşlı adam meyvesini yiyemeyecekse neden fidan dikti?",
    c: "İyilik yalnızca bugün için yapılmaz. Peygamberimiz (s.a.v.), bir müslümanın diktiği ağaçtan insanlar ve hayvanlar yedikçe bunun ona sadaka olacağını bildirmiştir.", r: "Buhârî, Hars 1; Müslim, Müsâkât 7" },
  { ad: "Su damlası ve kaya", e: "💧", kaynak: "Özgün temsil",
    h: "Dağda kocaman bir kaya vardı. Üstüne her gün tek bir su damlası düşüyordu: tıp… tıp… Kaya güldü: “Minicik bir damla bana ne yapabilir?” Damla cevap vermedi, düşmeye devam etti. Günler, aylar, yıllar geçti. Bir sabah kaya baktı ki üstünde küçük bir çukur açılmış! Damla güçlü olduğu için değil, hiç vazgeçmediği için kayayı oymuştu.",
    s: "Damla kayayı nasıl oydu? Sen hangi işi her gün biraz biraz yaparak başarabilirsin?",
    c: "Az ama devamlı yapılan iyilik çok değerlidir. Peygamberimiz (s.a.v.), Allah'a en sevimli amelin az da olsa devamlı olanı olduğunu bildirmiştir.", r: "Buhârî, Rikâk 18; Müslim, Müsâfirîn 216" }
];

/* ===== Günün sorusu =====
   Oyun geceleri arasında akşam yemeğinde konuşmak için. Ana sayfada her gün bir tanesi görünür. */
const GUNUN_SORUSU = [
  "Bugün seni en çok ne sevindirdi?",
  "Bugün kime teşekkür etmek istersin?",
  "Bugün birine nasıl yardım ettin?",
  "Bugün zor gelen bir şey oldu mu? Nasıl sabrettin?",
  "Bugün hangi nimeti fark ettin?",
  "Bir süper gücün olsa onu hangi iyilik için kullanırdın?",
  "Sırayla, sofradaki herkesin bir güzel huyunu söyleyelim.",
  "Bugün bir hata yaptın mı? Ondan ne öğrendin?",
  "Hangi peygamber kıssasını en çok seviyorsun, neden?",
  "Bu hafta ailece hangi iyiliği yapabiliriz?",
  "Büyüyünce nasıl biri olmak istersin?",
  "Bugün kimi güldürdün?",
  "Evimizde en çok hangi nimete şükretmeliyiz?",
  "Dünyada bir şeyi güzelleştirebilseydin ne olurdu?",
  "Bugün birine güzel bir söz söyledin mi?",
  "Hangi duayı ezbere biliyorsun? Birlikte okuyalım mı?",
  "Bugün öğrendiğin yeni bir şey var mı?",
  "Kardeşin ya da bir arkadaşın için ne dua edersin?",
  "Sence iyi bir arkadaş nasıl olur?",
  "En sevdiğin hayvan hangisi? Allah onu nasıl yaratmış, en ilginç yanı ne?",
  "Komşularımız için ne yapabiliriz?",
  "Ailemizin en güzel anısı hangisi?",
  "Bugün kimden özür dilemek istersin?",
  "Bir gün boyunca anne ya da baba sen olsan ne yapardın?",
  "Bugün yaptığın en güzel şey neydi?",
  "Yaşlılara nasıl yardım edebiliriz?",
  "Bugün ne için “Elhamdülillah” dedin?",
  "Seni en çok ne sakinleştirir?",
  "Kimse görmeden yapabileceğin bir iyilik düşün; ama kime yapacağını söyleme!",
  "Peygamberimizin (s.a.v.) hangi güzel ahlakını örnek almak istersin?",
  "Bugün doğayı korumak için ne yaptın?",
  "Başkası için bir dilek dileyebilsen ne dilerdin?",
  "Bu hafta sana en çok kim yardım etti?",
  "Bugün kızdığın bir an oldu mu? Nasıl sakinleştin?",
  "Hangi söz seni çok mutlu eder?",
  "Yarın kimi sevindirmek istersin?",
  "Bugün okulda ya da işte en ilginç şey neydi?",
  "Bu akşam yatmadan önce kimin için dua edeceksin?",
  "Sence Allah'ın en çok sevdiği iyiliklerden biri hangisi?",
  "Bugün kendini en çok ne zaman güçlü hissettin?"
];

/* ===== Özel günler =====
   Hicri tarih telefonun takviminden (Ümmü'l-Kurâ) hesaplanır; Diyanet takvimiyle bir gün fark olabilir.
   Kandil geceleri bir önceki günün akşamıdır: ay ve gün, o akşamın hicri tarihidir. */
const OZEL_GUNLER = [
  { id: "regaip", e: "🌙", ad: "Regaip Kandili", ay: 7, regaip: true, gece: true,
    bilgi: "Üç ayların ilk kandili; Recep ayının ilk cuma gecesidir.",
    sorular: ["Üç aylar boyunca ailece hangi güzel alışkanlığı edinelim?", "Bu gece kimin için dua etmek istersin?", "Allah'ın bize verdiği hangi nimete bu gece özellikle şükredelim?"],
    oneri: "Üç aylar boyunca her akşam yemekten sonra ailece kısa bir dua öğrenmeye niyet edin." },
  { id: "mirac", e: "🌙", ad: "Miraç Kandili", ay: 7, gun: 26, gece: true,
    bilgi: "Peygamberimizin (s.a.v.) Mescid-i Haram'dan Mescid-i Aksâ'ya, oradan da semaya yükseltildiği gecedir (İsrâ, 1). Beş vakit namaz bu yolculukta farz kılındı.",
    sorular: ["Namaz bize bir hediye olarak verildi. Sence neden hediye?", "Mescid-i Aksâ nerededir, onun hakkında ne biliyoruz?", "Namazı daha güzel kılmak için ne yapabiliriz?"],
    oneri: "Bu akşam bir vakit namazı ailece birlikte kılın; küçükler de yanınızda dursun." },
  { id: "berat", e: "🌙", ad: "Berat Kandili", ay: 8, gun: 14, gece: true,
    bilgi: "Şaban ayının on beşinci gecesidir. Müslümanlar bu geceyi dua, tövbe ve ibadetle geçirmeye çalışır.",
    sorular: ["Bugüne kadar yaptığımız bir hatadan dolayı kimden helallik isteyelim?", "Önümüzdeki yıl için ailece hangi iyiliğe niyet edelim?", "Ramazan'a yaklaşık iki hafta kaldı. Ramazan'a nasıl hazırlanalım?"],
    oneri: "Aile içinde birbirinizden helallik isteyin ve küslükleri bu gece bitirin." },
  { id: "kadir", e: "✨", ad: "Kadir Gecesi", ay: 9, gun: 26, gece: true,
    bilgi: "Kur'an'ın indirilmeye başlandığı gecedir. Kadir Suresi'nde bin aydan daha hayırlı olduğu bildirilir (Kadir, 1-3).",
    sorular: ["Kur'an'dan en sevdiğin sure hangisi?", "Bin aydan hayırlı bir gece! Sence bu gece en güzel ne yapılır?", "Bu gece ailece hangi duayı birlikte okuyalım?"],
    oneri: "Ailece kısa bir sure okuyun ya da dinleyin; herkes içinden kendi duasını etsin." },
  { id: "mevlid", e: "🌙", ad: "Mevlid Kandili", ay: 3, gun: 11, gece: true,
    bilgi: "Peygamberimizin (s.a.v.) dünyaya gelişinin yıldönümüdür.",
    sorular: ["Peygamberimiz (s.a.v.) hakkında bildiğin en güzel bilgi hangisi?", "Onun hangi güzel ahlakını bu hafta örnek alalım?", "Peygamberimize (s.a.v.) salavat getirmeyi birlikte öğrenelim mi?"],
    oneri: "Bu akşam Peygamberimizin (s.a.v.) hayatından kısa bir olayı anlatın ve ailece salavat getirin." },
  { id: "ramazanbayrami", e: "🎉", ad: "Ramazan Bayramı", ay: 10, gunler: [1, 2, 3],
    bilgi: "Ramazan orucunu tamamlamanın sevinci. Büyükler ziyaret edilir, küslükler biter.",
    sorular: ["Bu bayram hangi büyüğümüzü ziyaret edelim?", "Ramazan'da öğrendiğin en güzel şey neydi?", "Bayram harçlığından bir kısmıyla kimi sevindirebilirsin?"],
    oneri: "Bir büyüğünüzü ziyaret edin ya da arayın; küs olduğunuz biri varsa barışın." },
  { id: "arefe", e: "🤲", ad: "Kurban Bayramı Arefesi", ay: 12, gun: 9,
    bilgi: "Hacıların Arafat'ta toplandığı gündür. Yarın Kurban Bayramı başlıyor.",
    sorular: ["Hac nedir, hacılar neler yapar?", "Bayramda kimleri sevindirmek istersin?", "Hz. İbrahim'in teslimiyetinden ne öğreniyoruz?"],
    oneri: "Bayram sabahı için ailece bir iyilik planı yapın: kimi ziyaret edeceksiniz, kime ikram edeceksiniz?" },
  { id: "kurbanbayrami", e: "🎉", ad: "Kurban Bayramı", ay: 12, gunler: [10, 11, 12, 13],
    bilgi: "Kurban, Allah'a yakınlaşmak ve paylaşmak demektir. Kurban eti ihtiyaç sahipleri, akraba ve komşularla paylaşılır.",
    sorular: ["Kurban bize paylaşmayı nasıl öğretiyor?", "Bu bayram kiminle neyi paylaşabiliriz?", "Hz. İbrahim ve Hz. İsmail'in kıssasından ne öğreniyoruz?"],
    oneri: "Bayramda bir komşunuza ya da ihtiyaç sahibine ailece bir ikram götürün." },
  { id: "hicriyil", e: "🌙", ad: "Hicri Yılbaşı", ay: 1, gun: 1,
    bilgi: "Hicri takvim, Peygamberimizin (s.a.v.) Mekke'den Medine'ye hicretini başlangıç alır.",
    sorular: ["Hicret ne demektir, neden önemlidir?", "Yeni yılda ailece hangi güzel alışkanlığa başlayalım?", "Medineliler (Ensar) muhacirlere nasıl yardım etti?"],
    oneri: "Yeni yıl için ailece bir iyilik niyeti yazın ve görünür bir yere asın." },
  { id: "asure", e: "🍲", ad: "Aşure Günü", ay: 1, gun: 10,
    bilgi: "Muharrem ayının onuncu günüdür. Bu günde, bir gün öncesi ya da sonrasıyla birlikte oruç tutmak sünnettir; komşulara aşure ikram etmek güzel bir gelenektir.",
    sorular: ["Aşurenin içinde neler var? Her biri bir nimet!", "Bu gün hangi komşumuza ikram götürelim?", "Hz. Nuh'un gemisi kıssasını hatırlıyor musun?"],
    oneri: "Ailece aşure pişirin ya da bir tatlı yapıp komşulara dağıtın." }
];
const RAMAZAN = { e: "🌙", ad: "Ramazan",
  bilgi: "Oruç ayı. Akşam iftar sofrası ailenin en güzel buluşma anıdır.",
  sorular: ["Bugün oruç tutarken en zor an hangisiydi?", "İftar sofrasında kime teşekkür edelim?", "Bugün kime iftarlık bir ikram götürebiliriz?", "Ramazan'da hangi kötü alışkanlığı bırakmak istersin?", "Orucun bize öğrettiği en güzel şey ne?", "Bu Ramazan ailece hangi sureyi ezberleyelim?", "Aç olan insanları düşününce ne hissediyorsun?", "Sahurda kalkmak zor mu? Seni ne kolaylaştırıyor?", "Bugün sabrettiğin bir an oldu mu?", "Ramazan'ın en sevdiğin yanı ne?"],
  oneri: "İftardan sonra kısa bir oyun gecesi için Kısa ya da Sakin süreyi seçebilirsiniz." };
const CUMA = { e: "🕌", ad: "Cuma", bilgi: "Haftanın bayramı. Cuma akşamı ailece oyun gecesi için güzel bir zaman.",
  sorular: ["Bu hafta yaptığın en güzel iyilik neydi?", "Haftaya kimi sevindirmek istersin?"], oneri: "Hayırlı Cumalar!" };
