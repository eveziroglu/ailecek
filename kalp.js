/* Sürüm etiketi: node surum.mjs ile güncellenir; index.html ile aynı olmalı. */
const KALP_SURUM = "20261122-1509";
/* ============ ÜÇÜNCÜ SEZON: KALP BAHÇESİ ============
   İlham: İmam Gazâlî, İhyâu Ulûmi'd-Dîn (Mühlikât ve Münciyât bölümleri) ve Kimyâ-yı Saâdet.
   Kalp bir bahçedir: her köşede bir yabani ot (kalp hastalığı) biter, aile onun yerine bir çiçek (ilacı) diker.
   Bahçe benzetmesi bizimdir; Gazâlî'den alıntı yapılmaz, fikirler kendi sözümüzle anlatılır.
   Kurallar: puan yok, ceza yok; ot geri büyümez, bahçe kurumaz. Kimse "kibirli" ya da "kıskanç" diye etiketlenmez.
   Hadisler yalnızca kaynak numarasıyla verilir. Ayet ve hadisler yayından önce bir hoca tarafından kontrol edilmelidir.
   Köşeler (ot, çiçek, hastalık, ilaç) icerik.js içindeki KALP_KOSELER listesindedir. */

const KALP_SOZ = {
  davet: "Hüdhüd bu kez bahçıvan! Kalbimiz bir bahçe gibidir: bakılmazsa yabani otlar biter, bakılırsa çiçekler açar. Hadi, kalp bahçemize birlikte bakalım.",
  bahce: "İşte kalp bahçemiz! Yedi köşesi var. Her köşede bir yabani ot bitmiş. Otu tanıyacak, yerine bir çiçek ekeceğiz.",
  kilitli: "Bu köşeye sırası gelince gideceğiz. Önce açık olan köşeye bakalım.",
  tohum: "Tohumu ekiyoruz! Bu hafta hangi bakım görevini yapacağız? Birini seçin.",
  gorevSecildi: "Güzel seçim! Bir hafta boyunca bu görevle çiçeğimizi sulayacağız.",
  bakimGiris: "Bakım sohbeti zamanı! Herkes bu haftadan bir an anlatsın.",
  acti: "Maşallah! Çiçeğimiz açtı. Ot söküldü, yerine güzel bir haslet büyüdü.",
  birHafta: "Bazı tohumlar geç filizlenir. Bahçıvan sabırlıdır; bir hafta daha sulayalım. Ot geri büyümez, çiçek bizi bekler.",
  muhasebe: "Önce bir büyük cevaplasın. Cevaplar yazılmaz; kimse yorum yapmaz. Dinleyenler yalnızca “Allah kolaylık versin” desin.",
  finalGecis: "Bahçenin yedi köşesinde de çiçek açtı! Gelin, bahçemizi birlikte dolaşalım.",
  ayna: "Havuzun suyu ayna gibi parlıyor. Büyüklerimiz kalbi bir aynaya benzetir: kötü huylar aynayı bulandırır; iyilik, dua ve Allah'ı anmak onu parlatır. Parlak ayna güzeli gösterir.",
  havuzaBak: "Şimdi sırayla havuza bakalım. Söyleyin bakalım: bu kalpte en çok hangi çiçek açtı?",
  kapanis: "Bahçıvanın işi bitmez. Otlar yine biter, biz de yine bakarız. Asıl güzellik, kalbimizi Allah'ın sevdiği şekilde tutmaya çalışmaktır. Asıl karşılığı ise Allah katındadır.",
  belge: "Kalp Bahçesi belgeniz hazır! Allah kalplerimizi güzelliklerle doldursun.",
  son: "Bahçenizi istediğiniz zaman ziyaret edebilir, bir köşeyi yeniden sulayabilirsiniz. Allah hepinizden razı olsun!"
};

const KALP_FINAL_AYET = { text: "O gün ne mal fayda verir ne de evlat. Ancak Allah'a selîm bir kalple gelen (kurtulur).", ref: "Şuarâ Suresi, 88-89" };
const KALP_FINAL_HADIS = { text: "Dikkat edin! Bedende bir et parçası vardır. O düzgün olursa bütün beden düzgün olur; o bozulursa bütün beden bozulur. Dikkat edin, o kalptir.", ref: "Buhârî, Îmân 39; Müslim, Müsâkât 107" };
const KALP_FINAL_DUA = { text: "Rabbimiz! Bizi doğru yola ilettikten sonra kalplerimizi kaydırma. Bize katından rahmet bağışla.", ref: "Âl-i İmrân Suresi, 8" };

/* Köşe içerikleri. giris: Hüdhüd'ün otu tanıttığı hikâye; gorevler: haftalık bakım görevleri;
   bakim: bir sonraki gecenin bakım sohbeti; senolsan ve hizli: o köşenin gecesinde çıkan kartlar. */
const KALP_ICERIK = {
  kibir: {
    kaynak: "merhamet", color: "--cini", desc: "Kibirden tevazuya",
    giris: [
      "Bahçemizin bu köşesinde bir diken bitmiş. Bakın, ne kadar dik duruyor! Kimseyi yanına yaklaştırmıyor.",
      "Ormanda bir kuş vardı. Herkesten hızlı uçtuğunu düşünürdü. Yavaş uçan kuşları beklemez, onlarla oyun oynamazdı. “Ben sizden iyiyim” derdi. Bir gün kanadı incindi… Ona yemek getiren, yuvasını ısıtan kimdi dersiniz? Hep yavaş diye beğenmediği kuşlar.",
      "Bu dikenin adı kibir: kendini başkalarından üstün görmek. Kalbimizde diken bittiğinde insanlar bize yaklaşamaz. Ama bu otun da bir ilacı var: menekşe, yani tevazu."
    ],
    ayet: { text: "İnsanlara yüz çevirme, yeryüzünde böbürlenerek yürüme. Allah kendini beğenip övünen hiç kimseyi sevmez.", ref: "Lokmân Suresi, 18" },
    hadis: { text: "Allah için tevazu göstereni Allah yüceltir.", ref: "Müslim, Birr 69" },
    ebeveyn: "Gazâlî kibrin ilacı olarak, sahip olduklarımızın Allah'ın bir ikramı olduğunu düşünmeyi ve tevazu gerektiren işleri bilerek, alışana kadar yapmayı önerir. Peygamberimiz (s.a.v.) evde ailesinin işlerine yardım ederdi (Buhârî, Ezân 44).",
    muhasebe: "Bugün birine yol verdin mi, sıranı verdin mi, birine yardım ettin mi? Menekşen biraz büyüdü mü?",
    gorevler: ["Her gün evde birine sorulmadan bir hizmet etmek", "Evden çıkarken ve eve girerken selamı ilk veren olmak", "Kazandığın her oyunda rakibine “Güzel oynadın” demek"],
    dua: "Allah'ım, kalplerimizi tevazu ile süsle. Bize verdiğin her güzelliğin senden olduğunu unutturma.",
    bakim: "Diken köşesine bir bakalım… Ne görüyorum! Dikenin yerinde mor bir menekşe açmış. Yere yakın ama kokusu bütün bahçeye yayılmış. Haydi anlatın: bu hafta menekşeyi kim, nasıl suladı?",
    senolsan: [
      { e: "⚽", s: "Maçta en çok golü sen attın. Takım arkadaşların “Sen olmasan kaybederdik” diyor. Ne dersin?", i: "“Hep birlikte kazandık” demek tevazudur. Allah için tevazu göstereni Allah yüceltir (Müslim, Birr 69)." },
      { e: "🏫", s: "Sınıfa yeni gelen bir öğrenci Türkçeyi iyi konuşamıyor. Bazıları onunla dalga geçiyor. Ne yaparsın?", i: "Kimseyi küçük görmemek ve yeni arkadaşa yardım etmek kalpteki dikeni söker." },
      { e: "🚪", s: "Kapıdan çıkarken arkandan dedeniz geliyor. Ne yaparsın?", i: "Büyüğe kapıyı açıp yol vermek küçük ama çok güzel bir tevazu işaretidir." }
    ],
    hizli: [{ p: "Evde birine yapabileceğimiz yardımları sayın!", t: 8 }, { p: "Ailemizde herkesin bizden iyi yaptığı bir şeyi sayın!", t: 6 }]
  },
  dil: {
    kaynak: "dogruluk", color: "--nar", desc: "Kırıcı sözden güzel söze",
    giris: [
      "Bu köşede pıtraklar bitmiş. Pıtrak küçük, dikenli bir toptur; çorabınıza, kazağınıza yapışır, çıkarılması çok zordur.",
      "Bir gün küçük bir tavşan, arkadaşı sincap için “O hep beceriksiz zaten” dedi. Söz ağzından çıktı ve ormanda dolaşmaya başladı. Kirpiye, kuşa, kurbağaya yapıştı… Sonunda sincabın kulağına geldi. Tavşan çok pişman oldu ama sözünü geri toplayamadı.",
      "Bu otun adı dilin âfetleri: yalan söylemek, kırıcı konuşmak, alay etmek ve bir arkadaşımızın arkasından hoşlanmayacağı şekilde konuşmak. Pıtrağın ilacı ise gül: güzel söz."
    ],
    ayet: { text: "Ey iman edenler! Allah'a saygısızlıktan sakının ve doğru söz söyleyin.", ref: "Ahzâb Suresi, 70" },
    hadis: { text: "Allah'a ve ahiret gününe iman eden ya hayır söylesin ya da sussun.", ref: "Buhârî, Edeb 31; Müslim, Îmân 74" },
    ebeveyn: "Gazâlî, İhyâ'nın dil kitabında dilin âfetlerini tek tek sayar ve ilk ilaç olarak gereksiz yere konuşmamayı önerir. Çocuklara “sus” yerine “Konuşmadan önce düşün: Doğru mu? Güzel mi? Faydalı mı?” soruları öğretilir. “Güzel söz sadakadır” (Buhârî, Cihâd 128; Müslim, Zekât 56).",
    muhasebe: "Bugün kimin kalbini güzel bir sözle sevindirdin? Ağzından bir pıtrak kaçtı mı?",
    gorevler: ["Her akşam her aile üyesine bir güzel söz söylemek", "Arkasından konuşulan birini duyunca onu iyilikle anmak", "Konuşmadan önce üç soruyu sormak: Doğru mu? Güzel mi? Faydalı mı?"],
    dua: "Allah'ım, dilimizi doğru ve güzel sözle süsle. Sözlerimizle kimsenin kalbini kırmayalım.",
    bakim: "Pıtrak köşesine bakalım… Pıtrakların yerinde bir gül açmış! Güzel söz de gül gibidir, kokusu kalpte kalır. Bu hafta size söylenen en güzel söz hangisiydi?",
    senolsan: [
      { e: "🗣️", s: "Arkadaşların, o gün okula gelmeyen bir çocuk hakkında gülerek konuşuyor. Ne yaparsın?", i: "Konuyu değiştirmek ya da o arkadaşın güzel bir huyunu söylemek, pıtrağı daha yapışmadan söker." },
      { e: "🏺", s: "Vazoyu yanlışlıkla kırdın, kimse görmedi. Annen “Kim kırdı?” diye soruyor. Ne dersin?", i: "Doğruyu söylemek cesaret ister. Doğru söyleyenin kalbi rahat eder." },
      { e: "🖍️", s: "Kardeşin çok heyecanla bir resim yaptı ama pek güzel olmamış. Ne söylersin?", i: "Resmin güzel bir yerini bulup söylemek hem doğrudur hem de kalbi sevindirir." }
    ],
    hizli: [{ p: "Birini sevindiren güzel sözleri sayın!", t: 10 }, { p: "Teşekkür etmenin farklı yollarını sayın!", t: 6 }]
  },
  ofke: {
    kaynak: "sabir", color: "--lale", desc: "Öfkeden sabra",
    giris: [
      "Dikkat, bu köşede ısırgan bitmiş! Isırgana dokunanın eli yanar, kızarır. Ama ısırganın kendisi de kimseyle oynayamaz.",
      "Bir yuvada iki yavru kuş vardı. Biri yanlışlıkla ötekinin tüyüne bastı. Öteki hemen öfkelendi, kanatlarını çırptı, bağırdı, yuvanın dallarını döktü. Öfkesi geçince baktı: yuva dağılmış, kardeşi ağlıyordu. Oysa her şey küçük bir tüy yüzünden başlamıştı.",
      "Bu otun adı öfke. Kızmak hepimizin başına gelir; önemli olan, öfkenin bizi yönetmesine izin vermemek. Isırganın ilacı lavanta: sakin ve yumuşak olmak, yani sabır."
    ],
    ayet: { text: "…öfkelerini yutarlar ve insanları affederler. Allah iyilik yapanları sever.", ref: "Âl-i İmrân Suresi, 134" },
    hadis: { text: "Güçlü kişi güreşte yenen değil, öfkelendiğinde kendine hâkim olan kimsedir.", ref: "Buhârî, Edeb 76; Müslim, Birr 107" },
    ebeveyn: "Gazâlî öfkenin tamamen yok edilmesini istemez; hastalık, öfkenin aklın ve dinin sınırını aşmasıdır. Çocuğa “Asla kızma” denmez, “Kızgınlığını fark et ve dizginle” denir. Peygamberimiz (s.a.v.) öfkelenenin “Eûzü billâhi mine'ş-şeytâni'r-racîm” demesini (Buhârî, Edeb 76; Müslim, Birr 109), ayaktaysa oturmasını tavsiye etmiştir (Ebû Dâvûd, Edeb 4).",
    muhasebe: "Bugün kızdığın bir an oldu mu? Ocağın altını kısabildin mi?",
    gorevler: ["Kızgınlık gelince üç adım: dur, nefes al, sonra konuş", "Evde bir “sakinleşme köşesi” belirlemek", "Gün bitmeden küstüğün ya da kızdığın biriyle barışmak"],
    dua: "Allah'ım, bize sabır ve yumuşaklık ver. Kızdığımızda affetmeyi kolaylaştır.",
    bakim: "Isırgan köşesinde ne var bakalım… Mor mor lavantalar! Kokusu insanı sakinleştiriyor. Bu hafta kim öfkesini tam zamanında dizginledi? Anlatın bakalım.",
    senolsan: [
      { e: "🧱", s: "Kardeşin, saatlerce yaptığın lego kuleni yanlışlıkla yıktı. Ne yaparsın?", i: "Önce durup nefes almak, sonra “Üzüldüm ama birlikte yeniden yapalım” demek. Güçlü kişi öfkelendiğinde kendine hâkim olandır." },
      { e: "🎲", s: "Oyunda üst üste kaybediyorsun ve arkadaşın gülüyor. Ne yaparsın?", i: "Sakin kalıp “Bir dahaki sefere” demek ısırganı büyütmez, lavantayı sular." },
      { e: "🍲", s: "Annen tam oyunun en heyecanlı yerinde “Yemek hazır” diyor. Ne yaparsın?", i: "Söylenmeden oyunu bırakıp sofraya gelmek hem sabır hem de anne babaya iyiliktir." }
    ],
    hizli: [{ p: "Sakinleşmek için yapabileceğimiz şeyleri sayın!", t: 8 }, { p: "Bizi gülümseten şeyleri sayın!", t: 10 }]
  },
  haset: {
    kaynak: "merhamet", color: "--kandil", desc: "Hasetten sevinmeye",
    giris: [
      "Bu köşede bir sarmaşık büyümüş. Sarmaşık yanındaki bitkiye dolanır, onun üstüne çıkmak ister. Sonunda ne yanındaki bitki güneş görebilir ne de sarmaşık çiçek açabilir.",
      "Yan yana iki bahçe vardı. Bir bahar sabahı birinci bahçede güller açtı. İkinci bahçenin sahibi bunu görünce içi sıkıldı: “Neden onun gülleri açtı da benimkiler açmadı?” Bütün gününü komşu bahçeye bakarak geçirdi, kendi bahçesini sulamayı unuttu. Gözü komşu bahçede olan, kendi bahçesini unutur.",
      "Bu otun adı haset: başkasındaki güzelliği görünce üzülmek, hatta onda olmasın istemek. Sarmaşığın ilacı papatya: kardeşinin sevincine sevinmek ve onun için dua etmek."
    ],
    ayet: { text: "Allah'ın kiminizi kiminize üstün kıldığı şeyleri arzulamayın… Allah'tan O'nun lütfunu isteyin.", ref: "Nisâ Suresi, 32" },
    hadis: { text: "Sizden biriniz, kendisi için istediğini kardeşi için de istemedikçe (tam) iman etmiş olmaz.", ref: "Buhârî, Îmân 7; Müslim, Îmân 71" },
    ebeveyn: "Başkasındaki iyiliği görüp “Bende de olsun” demek gıptadır ve güzeldir (Buhârî, İlim 15); “Onda olmasın” demek hasettir. Gazâlî hasedin ilacı olarak kıskanılan kişiyi bilerek övmeyi, ona iyilik etmeyi ve dua etmeyi önerir. Kardeşler arası kıskançlık doğaldır; ebeveynlerin çocukları kıyaslamaması bu köşenin ebeveyn görevidir.",
    muhasebe: "Bugün kimin sevincine ortak oldun? Kim için dua ettin?",
    gorevler: ["Ailede birinin sevincine yüksek sesle sevinmek: “Maşallah, hayırlı olsun!”", "Her gece bir aile üyesinin adını çekip onun için içinden dua etmek", "Ebeveynler için: Bir hafta boyunca çocukları kimseyle kıyaslamamak"],
    dua: "Allah'ım, kardeşlerimizin sevincine sevinen, onlar için dua eden bir kalp ver. Kalbimizde kimseye karşı kırgınlık bırakma.",
    bakim: "Sarmaşık köşesine bakalım… Sarmaşık gitmiş, yerine küme küme papatyalar açmış! Bu hafta kimin sevincine ortak oldunuz? Sizin için kim dua etti, biliyor musunuz?",
    senolsan: [
      { e: "🎁", s: "Kardeşine doğum gününde, senin de çok istediğin bir oyuncak hediye edildi. Ne yaparsın?", i: "“Güle güle kullan” demek ve onun sevincine ortak olmak. Kişi kendisi için istediğini kardeşi için de istemelidir (Buhârî, Îmân 7)." },
      { e: "🏅", s: "Arkadaşın resim yarışmasında birinci oldu, sen derece alamadın. Ona ne söylersin?", i: "“Tebrik ederim!” demek ve “Ben de onun gibi çalışayım” diye imrenmek güzeldir." },
      { e: "👏", s: "Öğretmen sınıfta herkesin önünde arkadaşını övdü. İçinden ne geçer, ne yaparsın?", i: "Arkadaşını tebrik etmek ve onun için dua etmek kalbi genişletir." }
    ],
    hizli: [{ p: "Ailemizdeki herkesin güzel bir yönünü sayın!", t: 6 }, { p: "Birini tebrik ederken söylenebilecek sözleri sayın!", t: 6 }]
  },
  cimrilik: {
    kaynak: "paylasmak", color: "--zumrut", desc: "Cimrilikten cömertliğe",
    giris: [
      "Bu köşede yaprak yok, çiçek yok; yalnızca kuru bir dal duruyor. Kuru dal kimseye gölge vermez, meyve vermez. Kuşlar bile üstüne konmaz.",
      "Bir sincap kış için çuval çuval fındık topladı. Yuvası tepeleme doldu. Bir gün kapısına üşümüş bir kuş geldi: “Bir tane fındık verir misin?” Sincap “Yok, hepsi benim!” dedi ve kapıyı kapattı. Bahar geldiğinde fındıkların yarısı bozulmuştu. Hem bozuldu hem de kimseyi sevindirmedi.",
      "Bu otun adı cimrilik: elindekini kimseyle paylaşmamak. Kuru dalın ilacı nar fidanı: cömertlik."
    ],
    ayet: { text: "Sevdiğiniz şeylerden (Allah yolunda) harcamadıkça iyiliğe ulaşamazsınız.", ref: "Âl-i İmrân Suresi, 92" },
    hadis: { text: "Sadaka malı eksiltmez.", ref: "Müslim, Birr 69" },
    ebeveyn: "Cömertlik israf değildir: “Elini boynuna bağlı tutma, büsbütün de açıp saçma” (İsrâ, 29). Gazâlî cimriliğin ilacı olarak malın geçici olduğunu düşünmeyi ve içimiz istemese bile vermeyi önerir. Cömertlik yalnızca eşya değildir: “Kardeşinin yüzüne gülümsemen sadakadır” (Tirmizî, Birr 36). Vakit de paylaşılır.",
    muhasebe: "Bugün neyini paylaştın: eşyanı, vaktini ya da gülümsemeni?",
    gorevler: ["Sevdiğin bir şeyi (oyuncak, atıştırmalık, vakit) biriyle paylaşmak", "Ailece bir iyilik kutusu hazırlayıp ihtiyaç sahibine ulaştırmak", "Her gün bir aile üyesine telefonsuz, ekransız 15 dakika ayırmak"],
    dua: "Allah'ım, bize verdiklerini paylaşmayı sevdir. Elimizi açık, kalbimizi geniş eyle.",
    bakim: "Kuru dalın yerinde ne var bakalım… Minik bir nar fidanı filizlenmiş, üstünde ilk çiçekleri! Bu hafta neler paylaştınız?",
    senolsan: [
      { e: "🥪", s: "Arkadaşın beslenmesini unutmuş, senin çantanda iki sandviç var. Ne yaparsın?", i: "Birini seve seve vermek. Sadaka malı eksiltmez (Müslim, Birr 69)." },
      { e: "🧸", s: "Misafirliğe gelen küçük bir çocuk, en sevdiğin oyuncağınla oynamak istiyor. Ne yaparsın?", i: "Sevdiğinden paylaşmak gerçek cömertliktir; birlikte oynamak daha da güzeldir." },
      { e: "🌻", s: "Dedenin bahçedeki işe yardıma ihtiyacı var, sen de tam çizgi film izliyorsun. Ne yaparsın?", i: "Vaktini paylaşmak da cömertliktir. Dedeye yardım etmek kuru dalı nar fidanına çevirir." }
    ],
    hizli: [{ p: "Bir arkadaşımızla paylaşabileceğimiz şeyleri sayın!", t: 10 }, { p: "Para harcamadan yapılabilecek iyilikleri sayın!", t: 8 }]
  },
  hirs: {
    kaynak: "sukur", color: "--firuze", desc: "Hırstan kanaate",
    giris: [
      "Bu köşeyi ayrık otu sarmış. Ayrık otu hiç doymaz: köklerini her yere uzatır, bütün toprağı kendine almak ister. Başka hiçbir bitkiye yer bırakmaz.",
      "Bir karga parlak bir boncuk buldu, çok sevindi. Sonra bir tane daha istedi. Sonra bir tane daha… Yuvası boncukla doldu ama karga hiç mutlu olamadı, çünkü hep bir sonrakini düşünüyordu. Bir gün yuvası ağırlıktan dalın üstünde eğildi; karga o zaman anladı: elindekilerin tadına hiç varamamıştı.",
      "Bu otun adı hırs: hep daha fazlasını istemek, elindekiyle hiç yetinmemek. Ayrık otunun ilacı kekik: kanaat ve şükür."
    ],
    ayet: { text: "Eğer şükrederseniz elbette size (nimetimi) artırırım.", ref: "İbrâhîm Suresi, 7" },
    hadis: { text: "Zenginlik malın çokluğu değildir; asıl zenginlik gönül zenginliğidir.", ref: "Buhârî, Rikâk 15; Müslim, Zekât 120" },
    ebeveyn: "Kanaat tembellik değildir: çalışmak ve daha iyisini istemek güzeldir; kanaat, çalışıp sonucu Allah'a bırakmak ve elindekine şükretmektir. Peygamberimiz (s.a.v.) “Sizden aşağıda olana bakın, yukarıda olana bakmayın” buyurmuştur (Müslim, Zühd 9). Bu hafta reklamlara ve alışveriş isteklerine birlikte bakıp “Buna gerçekten ihtiyacımız var mı?” diye sormak iyi bir adımdır.",
    muhasebe: "Bugün hangi üç nimet için elhamdülillah dedin?",
    gorevler: ["Her akşam herkesin elindeki üç nimeti sayması", "“Bunu da istiyorum” yerine “Elhamdülillah, bende şu var” demek", "Bir hafta yeni bir şey almadan eldekilerle yetinmek; bozuk bir şeyi ailece onarmak"],
    dua: "Allah'ım, verdiğin nimetleri gören ve onlara şükreden bir kalp ver. Gönlümüzü zengin eyle.",
    bakim: "Ayrık otu çekilmiş, yerinde kekikler büyümüş! Kekik, taşların arasında, az bir toprakta bile mis gibi kokar. Bu hafta en çok hangi nimete şükrettiniz?",
    senolsan: [
      { e: "📱", s: "Arkadaşının tableti seninkinden yeni. Seninki gayet iyi çalışıyor ama sen de yenisini istiyorsun. Ne yaparsın?", i: "Kendi tabletinin çalıştığına şükretmek. Asıl zenginlik gönül zenginliğidir (Buhârî, Rikâk 15)." },
      { e: "🛒", s: "Markette her raftan bir şey istemeye başladın, annen “Bugün yalnızca bir tane” dedi. Ne yaparsın?", i: "Bir taneyi seçip “Elhamdülillah” demek. Az da olsa şükredilen nimet bereketlenir." },
      { e: "🥦", s: "Akşam yemeğinde sevmediğin bir yemek var. Ne yaparsın, ne dersin?", i: "Peygamberimiz (s.a.v.) hiçbir yemeği ayıplamazdı; hoşuna giderse yer, gitmezse bırakırdı (Buhârî, Et'ime 21)." }
    ],
    hizli: [{ p: "Bugün sahip olduğumuz nimetleri sayın!", t: 12 }, { p: "Evdeki eski ama hâlâ sevdiğimiz eşyaları sayın!", t: 8 }]
  },
  riya: {
    kaynak: "dogruluk", color: "--cini", desc: "Gösterişten ihlasa", sessiz: true,
    giris: [
      "Bu köşede çok parlak bir çiçek var. Yaldızlı, pırıl pırıl! Ama yaklaşın, koklayın… Hiç kokusu yok. Bu bir yapma çiçek. Arılar da ona hiç konmuyor, çünkü içinde bal yok.",
      "Bir tavus kuşu, ormandaki yaşlı kaplumbağanın yuvasına su taşıdı. Ama yalnızca herkes bakarken taşıdı; kimse yokken hiç uğramadı. Her seferinde de tüylerini açıp “Gördünüz mü ne kadar iyiyim?” diye sordu. Bir gün ormanda kimse kalmadığında kaplumbağa susuz kaldı.",
      "Bu otun adı riya: iyiliği Allah için değil, insanlar görsün, övsün diye yapmak. Yapma çiçeğin ilacı yasemin: ihlas, yani iyiliği yalnızca Allah rızası için yapmak."
    ],
    ayet: { text: "Biz sizi yalnızca Allah rızası için doyuruyoruz; sizden ne bir karşılık ne de bir teşekkür bekliyoruz.", ref: "İnsân Suresi, 9" },
    hadis: { text: "Allah sizin suretlerinize ve mallarınıza bakmaz; kalplerinize ve amellerinize bakar.", ref: "Müslim, Birr 34" },
    ebeveyn: "İyiliğin görülmesi her zaman riya değildir: “Sadakaları açıktan verirseniz ne güzel! Gizleyip yoksullara verirseniz bu sizin için daha hayırlıdır” (Bakara, 271). Gazâlî de “riya olur” korkusuyla iyiliği bırakmayı bir tuzak olarak görür. Çocuğa “Kimse görmese de yapar mıydın?” sorusu öğretilir. Bu köşe Gizli İyilik Haftası ile birlikte oynanır.",
    muhasebe: "Bu gece cevapları kimseye söylemiyoruz. Herkes gözlerini kapatsın ve yalnızca kalbinden geçirsin: Bugün yalnızca Allah görsün diye yaptığın bir iyilik oldu mu? Olduysa içinden “Elhamdülillah” de. Olmadıysa yarın için niyet et.",
    gorevler: ["Kimseye söylemeden her gün bir gizli iyilik yapmak", "Her iyilikten önce içinden “Allah rızası için” diye niyet etmek", "Evde gizli bir iyilik fark edince, kimin yaptığını sormadan “Allah razı olsun” demek"],
    dua: "Allah'ım, yaptığımız her iyiliği yalnızca senin rızan için yapmayı nasip et. Kalbimizi yasemin gibi güzel kokulu eyle.",
    bakim: "Yapma çiçek gitmiş… Ama yerinde bir şey göremiyorum. Durun, koklayın! Yasemin bu gece, kimse bakmazken açmış. Bu hafta yaptığınız iyilikleri anlatmayın; yaseminin kokusu yeter. Yalnızca şunu söyleyin: Evde kim bilmediğiniz bir iyilik fark ettiniz?",
    senolsan: [
      { e: "🧹", s: "Öğretmen sınıftan çıktı. Yerde çöpler var ve kimse görmüyor. Ne yaparsın?", i: "Kimse görmese de toplamak. Allah kalplerimize ve amellerimize bakar (Müslim, Birr 34)." },
      { e: "🛏️", s: "Gizlice kardeşinin yatağını topladın. Annen “Kim topladı?” diye soruyor. Ne dersin?", i: "Gülümseyip “Allah razı olsun ondan” demek yeter; yasemin sessizce açar." },
      { e: "🙏", s: "Bir iyilik yaptın ve kimse teşekkür etmedi. İçinden ne geçer?", i: "Allah için yapılan iyilik teşekkür beklemez. Allah her şeyi görür." }
    ],
    hizli: [{ p: "Kimse görmeden yapılabilecek iyilikleri sayın!", t: 8 }, { p: "Allah rızası için yapılabilecek güzel işleri sayın!", t: 10 }]
  }
};

/* Köşe gecelerinin Sen Olsan ve Hızlı Tur kartları */
Object.entries(KALP_ICERIK).forEach(([id, c]) => { SENOLSAN["k-" + id] = c.senolsan; HIZLI["k-" + id] = c.hizli; });

ROZETLER.push(
  { id: "bahcivan", e: "🌱", ad: "Bahçıvan Aile", nasil: "Kalp Bahçesi'nde üç köşede çiçek açtırın.", olcut: "s3cicek", hedef: 3 },
  { id: "kalb-i-selim", e: "💐", ad: "Kalp Bahçesi", nasil: "Kalp Bahçesi'nin yedi köşesinde de çiçek açtırın.", olcut: "s3final", hedef: 1 }
);

const S3 = (() => {
  const st = () => (P.s3 ||= { koseler: {}, gorev: {}, finalDone: 0 });
  const KID = k => (typeof k === "string" && k.startsWith("k-")) ? k.slice(2) : null;
  const kose = id => KALP_KOSELER.find(x => x.id === id);
  const ic = id => KALP_ICERIK[id];
  const kIndex = id => KALP_KOSELER.findIndex(x => x.id === id);
  const isKose = k => !!KID(k) && !!ic(KID(k)) && !!kose(KID(k));
  const koseOf = k => isKose(k) ? KID(k) : null;
  const unlocked = () => landsDone() === DURAKLAR.length || P.freeAll;
  const durum = id => st().koseler[id] || null;
  const ekili = id => !!durum(id);
  const acik = id => !!(durum(id) && durum(id).acti);
  const SERBEST = ["haset", "cimrilik", "hirs"];
  /* Sıra: Tevazu, Güzel söz, Sabır sabit; sonra üçü serbest; İhlas her zaman en son. */
  const koseOpen = id => {
    if (P.freeAll || id === "kibir") return true;
    if (id === "dil") return ekili("kibir");
    if (id === "ofke") return ekili("dil");
    if (SERBEST.includes(id)) return ekili("ofke");
    if (id === "riya") return ["kibir", "dil", "ofke", ...SERBEST].every(ekili);
    return false;
  };
  const bekleyen = () => KALP_KOSELER.find(k => ekili(k.id) && !acik(k.id)) || null;
  const acikSay = () => KALP_KOSELER.filter(k => acik(k.id)).length;
  const siradaki = () => KALP_KOSELER.find(k => !ekili(k.id) && koseOpen(k.id)) || null;
  const asama = id => { const d = durum(id); if (!d) return 0; if (d.acti) return 4; const g = (Date.now() - d.ekildi) / DAY; return g < 2 ? 1 : g < 4 ? 2 : 3; };
  const ASAMA = [null, ["🫘", "Tohum"], ["🌱", "Filiz"], ["🪴", "Tomurcuk"]];
  const simge = k => { const a = asama(k.id); return a === 4 ? k.cicekE : a ? ASAMA[a][0] : k.otE; };
  const gorevOf = id => ic(id).gorevler[st().gorev[id] || 0];
  const lc = s => s.toLocaleLowerCase("tr");
  const havuz = () => { const n = acikSay(); return n === 7 ? "Havuz ayna gibi parlıyor" : n >= 4 ? "Havuzun suyu berraklaşıyor" : n ? "Havuz yavaş yavaş duruluyor" : "Havuzun suyu bulanık"; };

  /* ---------- index.html'in kullandığı bağlantılar ---------- */
  const theme = k => { const id = koseOf(k); if (!id) return undefined; const c = kose(id); return { name: `${c.ot} Köşesi`, ico: c.otE, color: ic(id).color, desc: ic(id).desc, kose: true }; };
  const pool = k => k;
  const kaynak = k => { const id = koseOf(k); return id ? ic(id).kaynak : null; };
  const intro = k => ic(koseOf(k)).giris[0];
  const label = k => { const id = koseOf(k); if (!id) return ""; const c = kose(id); return `Kalp Bahçesi · Köşe ${kIndex(id) + 1} · ${c.cicekE} ${c.cicek}${durum(id) ? " · " + "★".repeat(durum(id).stars) : ""}`; };
  const badgeValue = olcut => olcut === "s3final" ? st().finalDone : olcut === "s3cicek" ? acikSay() : undefined;

  /* Köşe gecesi: bir grup turu Kalp Doktoru, bir oyuncu turu o köşenin hikmetli hikâyesi olur. */
  function planla(G) {
    const id = koseOf(G.theme); if (!id) return;
    const grup = G.plan.find(t => t.group); if (grup) grup.type = "kalpdoktoru";
    const oyuncu = G.plan.filter(t => t.player)[1] || G.plan.find(t => t.player);
    if (oyuncu) { oyuncu.type = "hikaye"; G.koseHikaye = id; }
  }

  function reward(k, stars) {
    const id = koseOf(k), d = durum(id), before = d ? d.stars : 0;
    const acikOnce = KALP_KOSELER.filter(x => koseOpen(x.id)).map(x => x.id);
    if (d) d.stars = Math.max(d.stars, stars);
    else st().koseler[id] = { stars, ekildi: Date.now(), acti: 0 };
    saveP();
    const yeni = KALP_KOSELER.filter(x => koseOpen(x.id) && !acikOnce.includes(x.id));
    const c = kose(id);
    return { stars, improved: stars > before, harita: "k3-bahce",
      extra: d ? [] : [{ i: "🫘", b: `${c.cicek} tohumu ekildi`, s: "Bu hafta bakım göreviyle sulayın; sonraki gece çiçek açsın" }],
      unlocked: yeni.length ? { ad: yeni.map(x => `${x.ot} köşesi`).join(", "), ico: yeni[0].otE, etiket: yeni.length > 1 ? "Yeni köşeler açıldı" : "Yeni köşe açıldı" } : null,
      finalOpen: false };
  }

  function slides(k) {
    const id = koseOf(k), c = kose(id), x = ic(id), secili = st().gorev[id] || 0;
    return [
      { ico: c.otE, title: `${c.ot}: ${lc(c.hastalik)}`, body: `<div class="story">${x.giris.map(p => `<p>${esc(p)}</p>`).join("")}</div>
          <details class="tip" style="text-align:left"><summary><b>Ebeveyn notu</b></summary><p class="small" style="margin:6px 0 0">${esc(x.ebeveyn)}</p></details>`, say: x.giris },
      { ico: "📖", title: "Kur'an'dan", body: `<blockquote>“${esc(x.ayet.text)}”<cite>${esc(x.ayet.ref)}</cite></blockquote>`, say: x.ayet.text },
      { ico: "🌙", title: "Peygamberimiz (s.a.v.) buyurdu", body: `<blockquote>“${esc(x.hadis.text)}”<cite>${esc(x.hadis.ref)}</cite></blockquote>`, say: "Peygamberimiz s.a.v. buyurdu: " + x.hadis.text },
      { ico: "💭", title: "Kalp muhasebesi", body: `<p class="q-text">${esc(x.muhasebe)}</p>${x.sessiz ? "" : `<p class="small muted bold">${esc(KALP_SOZ.muhasebe)}</p>`}`, say: x.sessiz ? x.muhasebe : [x.muhasebe, KALP_SOZ.muhasebe] },
      { ico: "🫘", title: `Tohum: ${c.cicek}`, body: `<p class="small bold muted" style="margin:0">Bu haftanın bakım görevini seçin:</p>
          <div class="ak-options" id="k3-gorevler">${x.gorevler.map((g, i) => `<button class="ak-option" data-act="k3-gorev" data-arg="${id}:${i}" aria-pressed="${i === secili}"><span class="ak-option__key">${i + 1}</span>${esc(g)}</button>`).join("")}</div>
          <blockquote style="margin-top:6px">“${esc(x.dua)}”<cite>Kapanış duası</cite></blockquote>`, say: [KALP_SOZ.tohum, x.dua] }
    ];
  }
  function gorevSec(a) {
    const [id, i] = a.split(":"); st().gorev[id] = +i; saveP(); sfx.pop();
    document.querySelectorAll("#k3-gorevler .ak-option").forEach((b, j) => b.setAttribute("aria-pressed", String(j === +i)));
    say(KALP_SOZ.gorevSecildi);
  }

  /* ---------- Ana sayfa kartı ve belge düğmesi ---------- */
  function homeCard() {
    if (!unlocked()) return "";
    const n = acikSay(), b = bekleyen(), sira = siradaki(), basladi = Object.keys(st().koseler).length;
    if (!basladi) return `
      <section class="week kb-week">
        <span class="eyebrow">Yeni sezon açıldı</span>
        <h2 style="font:700 26px/1.15 var(--font-display)">🌱 Kalp Bahçesi</h2>
        <p class="bold" style="opacity:.9">Kalbimiz bir bahçedir. Yedi köşedeki yabani otları tanıyın, yerlerine çiçek ekin.</p>
        <button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="k3-bahce">Bahçeye Gir</button>
      </section>`;
    const baslik = n === 7 ? (st().finalDone ? "💐 Bahçeniz çiçek açtı" : "💐 Final sizi bekliyor!")
      : b ? `${ASAMA[asama(b.id)][0]} ${b.cicek} büyüyor` : sira ? `Sıradaki köşe: ${sira.otE} ${sira.ot}` : "Bahçeniz sizi bekliyor";
    return `
      <section class="week kb-week">
        <div class="stack" style="gap:6px"><span class="eyebrow">Kalp Bahçesi · ${n}/7 çiçek</span><h2 style="font:700 24px/1.1 var(--font-display)">${baslik}</h2></div>
        <div class="kb-mini">${KALP_KOSELER.map(k => `<span title="${esc(k.ot)}" class="${acik(k.id) ? "on" : ""}">${simge(k)}</span>`).join("")}</div>
        <div class="btn-row">
          ${b ? `<button class="ak-btn ak-btn--night" data-act="k3-bakim" data-arg="${b.id}">Bakım Sohbeti</button>` : ""}
          <button class="ak-btn ak-btn--kandil" data-act="k3-bahce">Bahçeye Gir</button>
        </div>
      </section>`;
  }
  /* Ana sayfadaki tek satırlık özet */
  function homeRow() {
    if (!unlocked()) return "";
    const n = acikSay(), b = bekleyen(), sira = siradaki();
    const baslik = n === 7 ? (st().finalDone ? "Bahçeniz çiçek açtı" : "Final sizi bekliyor!") : b ? `${b.cicek} büyüyor, bakım sohbeti hazır` : sira ? `Sıradaki köşe: ${sira.ot}` : "Bahçeniz sizi bekliyor";
    return yolSatiri({ act: b ? "k3-bakim" : "k3-bahce", arg: b ? b.id : "", ikon: b ? ASAMA[asama(b.id)][0] : n === 7 ? "💐" : "🌱", renk: "--zumrut",
      etiket: Object.keys(st().koseler).length ? `Kalp Bahçesi · ${n}/7 çiçek` : "Yeni sezon · Kalp Bahçesi", baslik,
      noktalar: KALP_KOSELER.map(k => acik(k.id) ? "on" : ekili(k.id) ? "now" : "") });
  }
  const certButton = () => `<button class="ak-btn ak-btn--night ak-btn--lg" data-act="k3-bahce">🌱 Kalp Bahçesi'ne gir</button>`;

  /* ---------- Bahçe ekranı ---------- */
  function bahce() {
    closeSheet(); G = null; checkBadges();
    const b = bekleyen(), n = acikSay();
    const kartlar = KALP_KOSELER.map((k, i) => {
      const open = koseOpen(k.id), a = asama(k.id), d = durum(k.id);
      const durumYazi = a === 4 ? `${k.cicek} açtı ${"★".repeat(d.stars)}` : a ? `${ASAMA[a][1]} · ${k.cicek}` : open ? "Yeni!" : "Kilitli";
      return `<button class="kb-kose ${a === 4 ? "is-acik" : ""} ${!open ? "is-locked" : ""} ${siradaki() && siradaki().id === k.id ? "is-current" : ""}" data-act="k3-kose" data-arg="${k.id}" aria-label="${esc(k.ot)} köşesi${open ? "" : " (kilitli)"}">
        <span class="kb-kose__ico">${open || a ? simge(k) : "🔒"}</span>
        <b>${i + 1}. ${esc(a === 4 ? k.cicek : k.ot)}</b>
        <small>${esc(a === 4 ? k.ilac.split(":")[0] : k.hastalik)}</small>
        <span class="kb-kose__durum">${esc(durumYazi)}</span>
      </button>`;
    }).join("");
    render(`
      ${guide(KALP_SOZ.bahce)}
      <section class="ak-card kb-bahce">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span class="ak-label">Kalp Bahçesi · ${n}/7 çiçek</span><span class="small bold muted">${family.map(p => p.av).join("")}</span></div>
        <div class="kb-havuz" style="--berrak:${n / 7}"><span>💧</span><b>${havuz()}</b></div>
        <div class="kb-grid">${kartlar}
          <button class="kb-kose kb-kose--final ${n === 7 ? "" : "is-locked"}" data-act="k3-final" data-arg="0:0"><span class="kb-kose__ico">${n === 7 ? "💐" : "🔒"}</span><b>Kalb-i selîm</b><small>Final</small><span class="kb-kose__durum">${st().finalDone ? "Tamamlandı ✓" : n === 7 ? "Açıldı!" : "Yedi çiçek açınca"}</span></button>
        </div>
        ${b ? `<button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="k3-bakim" data-arg="${b.id}">${b.cicekE} Bakım sohbeti: ${esc(b.cicek)}</button>` : ""}
      </section>`, KALP_SOZ.bahce);
  }
  function openKose(id) {
    if (!koseOpen(id)) { say(KALP_SOZ.kilitli); toast("🔒", "Kilitli köşe", id === "riya" ? "İhlas köşesi en son açılır" : "Önce açık köşelere bakın"); return; }
    const b = bekleyen();
    if (b && b.id !== id) return bakim(b.id, id);
    if (b && b.id === id) return bakim(id);
    startGame("k-" + id);
  }

  /* ---------- Bakım sohbeti ve çiçeğin açması ---------- */
  function bakim(id, sonra = "") {
    closeSheet(); G = null;
    const c = kose(id), x = ic(id), gun = Math.floor((Date.now() - durum(id).ekildi) / DAY);
    render(`
      <section class="ak-card ak-card--game center" style="--c:var(${x.color})">
        <header class="ak-card__head"><span class="ak-card__title"><span class="ak-card__ico">${c.cicekE}</span>Bakım Sohbeti</span></header>
        <div style="display:flex;align-items:center;gap:14px;justify-content:center"><span class="mega" style="font-size:44px;opacity:.55">${c.otE}</span><span style="font-size:26px">➜</span><span class="mega bounce" style="font-size:56px">${ASAMA[asama(id)][0]}</span></div>
        <span class="ak-label">${esc(c.ot)} köşesi · ekileli ${gun ? gun + " gün" : "bugün"}</span>
        <p class="small bold" style="margin:0">Bakım görevi: ${esc(gorevOf(id))}</p>
        ${guide(x.bakim)}
        ${x.sessiz ? `<p class="small muted bold" style="margin:0">Bu köşede kimse kendi iyiliğini anlatmaz.</p>` : `<div class="ak-chips">${family.map((p, i) => `<button class="ak-chip ak-chip--select" data-act="k3-anlatti" data-arg="${i}">${p.av} ${esc(p.name)}</button>`).join("")}</div><p class="small muted bold" style="margin:0">Anlatan kişiye dokunun (isteğe bağlı).</p>`}
        <button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="k3-ac" data-arg="${id}:${sonra}">${c.cicekE} Çiçeği aç</button>
        <button class="link muted" data-act="k3-bekle" data-arg="${sonra}">Bir hafta daha sulayalım</button>
      </section>`, x.bakim);
  }
  function anlatti(i, el) { if (el) el.setAttribute("aria-pressed", "true"); sfx.pop(); }
  function bekle(sonra) {
    say(KALP_SOZ.birHafta); toast("🪴", "Kalp Bahçesi", "Bir hafta daha sulayın");
    if (sonra && koseOpen(sonra)) { const d = durum(sonra); if (!d || !d.acti) return later(() => startGame("k-" + sonra), 1200); }
    bahce();
  }
  function ac(a) {
    const [id, sonra] = a.split(":"), c = kose(id), d = durum(id); if (!d) return bahce();
    if (!d.acti) { d.acti = Date.now(); saveP(); grow(2); }
    checkBadges(); confetti(36); sfx.win();
    const hepsi = acikSay() === 7;
    render(`
      <section class="ak-deed">
        <span class="ak-deed__eyebrow">Kalp Bahçesi</span>
        <span class="mega bounce" style="font-size:96px">${c.cicekE}</span>
        <h2 style="font:700 30px/34px var(--font-display);margin:0">${esc(c.cicek)} açtı!</h2>
        <p class="ak-deed__text">${esc(KALP_SOZ.acti)}</p>
        <span class="ak-stamp" style="--c:var(--yildiz)">${esc(c.hastalik)} ➜ ${esc(c.ilac.split(":")[0])}</span>
        ${hepsi ? `<button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="k3-final" data-arg="0:0">💐 Final: Kalb-i selîm</button>`
          : sonra && koseOpen(sonra) ? `<button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="k3-basla" data-arg="${sonra}">${kose(sonra).otE} ${esc(kose(sonra).ot)} köşesine geç</button>` : ""}
        <button class="ak-btn ak-btn--lg ${hepsi || sonra ? "ak-btn--night" : "ak-btn--kandil"}" data-act="k3-bahce">Bahçeye dön</button>
      </section>`, KALP_SOZ.acti);
  }

  /* ---------- Final: Kalb-i selîm ---------- */
  function final(step, m = 0) {
    closeSheet(); G = null;
    if (acikSay() < 7 && !P.freeAll) { const b = bekleyen(); if (b) return bakim(b.id); toast("🔒", "Final", "Önce yedi köşede çiçek açsın"); return bahce(); }
    const next = (lbl, s, mm = 0) => `<button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="k3-final" data-arg="${s}:${mm}">${lbl}</button>`;
    const cicekler = `<div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap;font-size:38px">${KALP_KOSELER.map(k => `<span style="animation:hover 2.4s ease-in-out ${Math.random() * -2}s infinite;display:inline-block">${k.cicekE}</span>`).join("")}</div>`;
    const frame = (eyebrow, inner, sayObj) => render(`<section class="ak-deed"><span class="ak-deed__eyebrow">${eyebrow}</span>${inner}</section>`, sayObj);
    if (step === 0) frame("Kalb-i selîm", `${cicekler}<div class="ak-on-night" style="width:100%">${guide(KALP_SOZ.finalGecis, { noSpeak: true })}</div>${next("Bahçeyi dolaş", 1)}`, KALP_SOZ.finalGecis);
    else if (step === 1) frame("Bahçe turu", `<ul class="checks" style="text-align:left;width:100%">${KALP_KOSELER.map(k => `<li><span>${k.cicekE}</span><span><b>${esc(k.cicek)}</b> · ${esc(gorevOf(k.id))}</span></li>`).join("")}</ul>${next("Havuza bak", 2)}`, "Her köşede, o hafta yaptığımız bakım görevi bir çiçeğe dönüştü.");
    else if (step === 2) frame("Havuz", `<div class="lake">✨</div><p class="ak-deed__text" style="font-size:19px">${esc(KALP_SOZ.ayna)}</p>${next("Sırayla bakalım", 3, 0)}`, KALP_SOZ.ayna);
    else if (step === 3) {
      const p = family[m]; if (!p) return final(4);
      frame(`${esc(p.name)} havuza bakıyor · ${m + 1}/${family.length}`, `
        <div class="lake" style="font-size:52px">${p.av}</div>
        <span class="ak-deed__name">${esc(p.name)}</span>
        <p class="ak-deed__text">${esc(m === 0 ? KALP_SOZ.havuzaBak : `${p.name} için söyleyin: bu kalpte en çok hangi çiçek açtı?`)}</p>
        <div class="feel">${KALP_KOSELER.map(k => `<button data-act="k3-final" data-arg="${m + 1 < family.length ? 3 : 4}:${m + 1}"><span>${k.cicekE}</span>${esc(k.cicek)}</button>`).join("")}</div>`,
        m === 0 ? KALP_SOZ.havuzaBak : { text: `${p.name} için söyleyin: bu kalpte en çok hangi çiçek açtı?`, ai: [] });
    }
    else if (step === 4) frame("Kur'an'dan", `${cicekler}<blockquote style="color:inherit">“${esc(KALP_FINAL_AYET.text)}”<cite>${esc(KALP_FINAL_AYET.ref)}</cite></blockquote>
        <p class="ak-deed__quote">Peygamberimiz (s.a.v.) buyurdu: “${esc(KALP_FINAL_HADIS.text)}” (${esc(KALP_FINAL_HADIS.ref)})</p>${next("Devam", 5)}`,
        [KALP_FINAL_AYET.text, "Peygamberimiz s.a.v. buyurdu: " + KALP_FINAL_HADIS.text]);
    else if (step === 5) frame("Bahçıvanın sözü", `<span class="mega hover" style="font-size:64px">🌿</span><p class="ak-deed__text" style="font-size:19px">${esc(KALP_SOZ.kapanis)}</p>${next("Hep birlikte dua edelim", 6)}`, KALP_SOZ.kapanis);
    else if (step === 6) frame("Dua", `<span class="mega" style="font-size:64px">🤲</span><blockquote style="color:inherit">“${esc(KALP_FINAL_DUA.text)}”<cite>${esc(KALP_FINAL_DUA.ref)}</cite></blockquote>${next("Âmin", 7)}`, KALP_FINAL_DUA.text);
    else if (step === 7) {
      st().finalDone = 1; saveP(); checkBadges();
      const yildiz = KALP_KOSELER.reduce((a, k) => a + ((durum(k.id) || {}).stars || 0), 0);
      render(`
        <section class="cert">
          <span class="ak-deed__eyebrow">Kalb-i selîm</span>
          ${cicekler}
          <h2>Kalp Bahçesi</h2>
          <p class="names">${family.map(p => `${p.av} ${esc(p.name)}`).join("<br>")}</p>
          <p class="ak-deed__text" style="font-size:18px">Kalbin yedi köşesinde otları söküp çiçek ektiniz.</p>
          <div class="ak-chips"><span class="ak-chip" style="background:var(--surface-200)">⭐ ${yildiz}/21 yıldız</span><span class="ak-chip" style="background:var(--surface-200)">💐 7 çiçek</span></div>
          <p class="ak-deed__quote">${new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })} · İmam Gazâlî'nin İhyâ ve Kimyâ-yı Saâdet eserlerinden esinlenmiştir</p>
          ${next("Devam", 8)}
        </section>`, KALP_SOZ.belge);
      confetti(40); sfx.win();
    }
    else frame("Bahçe tamam", `<span class="mega bounce" style="font-size:72px">🌷</span><div class="ak-on-night" style="width:100%">${guide(KALP_SOZ.son, { noSpeak: true })}</div><button class="ak-btn ak-btn--kandil ak-btn--lg" data-act="home">Ana sayfa</button><button class="link" style="color:var(--on-gece)" data-act="k3-bahce">Bahçeye dön</button>`, KALP_SOZ.son);
  }

  /* ---------- Yapay zekâ sesi için sabit cümleler ---------- */
  function lines() {
    const L = [], add = (...ts) => ts.flat(Infinity).forEach(t => t && L.push(t));
    add(Object.values(KALP_SOZ), KALP_FINAL_AYET.text, "Peygamberimiz s.a.v. buyurdu: " + KALP_FINAL_HADIS.text, KALP_FINAL_DUA.text, "Her köşede, o hafta yaptığımız bakım görevi bir çiçeğe dönüştü.");
    Object.values(KALP_ICERIK).forEach(x => add(x.giris, x.ayet.text, "Peygamberimiz s.a.v. buyurdu: " + x.hadis.text, x.muhasebe, x.dua, x.bakim, x.senolsan.map(s => [s.s, s.i]), x.hizli.map(h => h.p)));
    return L;
  }

  const actions = {
    "k3-bahce": bahce, "k3-kose": openKose, "k3-basla": id => startGame("k-" + id), "k3-bakim": id => bakim(id),
    "k3-anlatti": (a, el) => anlatti(+a, el), "k3-ac": ac, "k3-bekle": bekle, "k3-gorev": gorevSec,
    "k3-final": a => { const [s, m] = a.split(":"); final(+s, +m); }
  };

  return { isKose, koseOf, kaynak, theme, pool, intro, label, reward, slides, planla, homeCard, homeRow, certButton, badgeValue, lines, actions, unlocked, st };
})();
