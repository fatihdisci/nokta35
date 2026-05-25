import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "yenilenebilir-enerji-turleri",
  title: "Yenilenebilir Enerji Türleri: Güneş, Rüzgar, Jeotermal, Hidrolik",
  description:
    "Yenilenebilir enerji türleri nelerdir? Güneş, rüzgar, jeotermal, hidrolik ve biyokütle enerjisinin nasıl çalıştığı, avantajları, dezavantajları ve Türkiye'deki durumu.",
  date: "2026-05-25",
  category: "Sürdürülebilir Yaşam",
  summary:
    "Yenilenebilir enerji kaynakları; güneş, rüzgar, jeotermal, hidrolik ve biyokütle olarak sınıflandırılır. Türkiye bu kaynaklar açısından zengin bir coğrafyaya sahiptir: güneş kuşağında yer alır, Ege'de güçlü rüzgar potansiyeli ve dünyada sayılı ülkeler arasında jeotermal rezervler barındırır.",
  readTime: 7,
  faq: [
    {
      question: "Yenilenebilir enerji gerçekten karbonsuz mudur?",
      answer:
        "Üretim aşamasında (operasyonda) sera gazı salımı ya sıfır ya da çok düşüktür. Ancak panel, türbin ve baraj üretiminde malzeme ve inşaat süreçleri belirli miktarda karbon salımına yol açar. Bu nedenle 'karbonsuz' yerine 'yaşam döngüsü boyunca düşük karbonlu' ifadesi daha doğrudur. Yine de fosil yakıtlarla karşılaştırıldığında fark çok büyüktür.",
    },
    {
      question: "Türkiye'nin en güçlü yenilenebilir enerji kaynağı nedir?",
      answer:
        "Türkiye birden fazla kaynakta güçlü potansiyele sahiptir. Güneş enerjisinde yıllık ortalama güneşlenme süresi (özellikle Güneydoğu ve Ege'de 2.700–3.000 saat/yıl), rüzgarda Ege ve Trakya'nın elverişli rüzgar koridorları, jeotermal enerjide ise dünya sıralamasında ilk beşte yer alma potansiyeli öne çıkar. Hidrolik kapasite büyük ölçüde kurulmuşken güneş ve rüzgar hızla büyümektedir.",
    },
    {
      question: "Jeotermal enerji nasıl çalışır?",
      answer:
        "Yer kabuğunun derinliklerindeki ısı, sıcak su ve buhar formunda yüzeye yakın rezervlerde birikmektedir. Bu sıcak akışkan kuyular aracılığıyla çıkarılarak türbin döndürülüp elektrik üretilebilir ya da doğrudan ısıtmada kullanılabilir. Türkiye, dünyanın en büyük jeotermal rezervlerinden bazılarına sahiptir; başta Aydın-Denizli-İzmir üçgeni olmak üzere Ege Bölgesi öne çıkar.",
    },
    {
      question: "Rüzgar ve güneş enerjisinin en büyük dezavantajı nedir?",
      answer:
        "En temel dezavantaj süreksizliktir: güneş geceleri üretim yapmaz, rüzgar her zaman esmez. Bu durum 'şebeke dengelemesi' sorununa yol açar. Çözüm büyük ölçekli enerji depolama (batarya, pompalı hidrolik depolama) veya geniş şebeke entegrasyonudur. Teknoloji geliştikçe ve depolama maliyetleri düştükçe bu dezavantaj azalmaktadır.",
    },
    {
      question: "Evde yenilenebilir enerji kullanmak mümkün mü?",
      answer:
        "Evet. Çatı veya balkon güneş panelleri ev ölçeğinde en yaygın seçenektir. Türkiye'de lisanssız üretim mevzuatı kapsamında bireyler şebekeye enerji satabilir. Rüzgar enerjisi genellikle şehir içinde uygulanabilir değildir. Jeotermal ısıtma ise belirli coğrafyalarda konutlara sağlanabilmektedir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Fosil yakıtlar tükenebilir ve sera gazı salar; yenilenebilir
        kaynaklar ise doğal döngüler aracılığıyla sürekli yenilenir.
        Bu yazıda başlıca <strong>yenilenebilir enerji türlerini</strong>,
        nasıl çalıştıklarını ve Türkiye'deki potansiyelini ele alıyoruz.
      </p>

      <h2>1. Güneş Enerjisi</h2>
      <p>
        Fotovoltaik (PV) güneş panelleri, güneş ışığını doğrudan
        elektriğe çevirir. Yoğunlaştırılmış güneş enerjisi (CSP)
        sistemleri ise güneş ısısını buhar üretmek için kullanır.
        Ev ve işyeri çatılarındaki küçük sistemlerden çöllerdeki
        büyük santrallere kadar geniş bir ölçekte uygulanır.
      </p>
      <p>
        <strong>Türkiye'deki durum:</strong> Türkiye, yılda ortalama
        2.600–2.900 saat güneş ışığı alır; Güneydoğu Anadolu,
        İç Anadolu ve Ege bu açıdan en verimli bölgelerdir. Güneş
        enerjisi kurulu kapasitesi son yıllarda hızla büyümekte,
        hem büyük YEKA (Yenilenebilir Enerji Kaynak Alanları)
        projeleri hem de konut ölçeği kurulumları artmaktadır.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> Sıfır operasyonel emisyon, düşen panel maliyetleri, geniş uygulama alanı</li>
        <li><strong>Dezavantajlar:</strong> Gece ve bulutlu havada üretim yok, depolama gerektirir</li>
      </ul>

      <h2>2. Rüzgar Enerjisi</h2>
      <p>
        Rüzgar türbinleri kinetik enerjiyi mekanik, oradan elektrik
        enerjisine çevirir. Kara türbinleri (onshore) ve deniz üstü
        türbinleri (offshore) olmak üzere iki ana kategori vardır.
      </p>
      <p>
        <strong>Türkiye'deki durum:</strong> Ege kıyıları, Trakya ve
        İç Anadolu platolarında güçlü rüzgar koridorları mevcuttur.
        Türkiye kurulu rüzgar kapasitesinde Avrupa'nın önemli
        ülkeleri arasındadır. Ege'de potansiyel özellikle yüksektir.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> Geniş arazi paylaşımı mümkün (tarım arazisiyle), hızla kurulabilir</li>
        <li><strong>Dezavantajlar:</strong> Sürekli rüzgar gerektiren konum bağımlılığı, görsel etki, kuş/yarasa riski</li>
      </ul>

      <h2>3. Jeotermal Enerji</h2>
      <p>
        Yer kabuğunun derinliklerindeki ısı, volkanik aktivite veya
        tektonik fay hatları yakınında yüzeye yakın sıcak su ve buhar
        birikintileri oluşturur. Bu enerji hem <strong>elektrik
        üretiminde</strong> hem de <strong>doğrudan ısıtmada</strong>
        (sera, konut, kaplıca) kullanılır.
      </p>
      <p>
        <strong>Türkiye'deki durum:</strong> Türkiye dünya jeotermal
        enerjisi kullanımında ilk beşe giren ülkeler arasındadır.
        Başta <strong>Aydın-Denizli-İzmir üçgeni</strong> olmak üzere
        Ege Bölgesi, yoğun aktif fay sistemi nedeniyle büyük jeotermal
        rezervlere ev sahipliği yapar. Jeotermal seracılık da bu
        bölgede yaygındır.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> 7/24 üretim (süreklililik), küçük arazi izi, sera ısıtmasında çok yönlülük</li>
        <li><strong>Dezavantajlar:</strong> Konum bağımlı (her yerde rezerv yok), sıvıdaki mineraller boru aşınmasına neden olabilir</li>
      </ul>

      <h2>4. Hidrolik Enerji</h2>
      <p>
        Su akışının kinetik enerjisini türbin aracılığıyla elektriğe
        çevirir. Büyük barajlar ve rezervuarların yanı sıra küçük
        nehir tipi santraller de mevcuttur.
      </p>
      <p>
        <strong>Türkiye'deki durum:</strong> Türkiye'nin büyük akarsu
        potansiyeli büyük ölçüde kurulmuştur. Hidrolik enerji, toplam
        elektrik üretiminde önemli bir pay tutar; ancak kuraklık dönemlerinde
        üretim düşebilir.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> Şebeke dengeleme için ideal (barajlar enerji depolar), olgun teknoloji</li>
        <li><strong>Dezavantajlar:</strong> Büyük barajlar ekolojik ve sosyal etkilere yol açar, kuraklığa duyarlı</li>
      </ul>

      <h2>5. Biyokütle ve Biyogaz</h2>
      <p>
        Organik malzemelerin (tarımsal atık, orman artıkları, belediye
        atıkları, hayvan gübresi) yakılması veya biyolojik ayrışmasıyla
        enerji üretilir. Biyogaz; metan içerikli gaz olup elektrik
        üretiminde veya ısıtmada kullanılabilir.
      </p>
      <ul>
        <li><strong>Avantajlar:</strong> Atık yönetimiyle entegrasyon, 7/24 kullanılabilir</li>
        <li><strong>Dezavantajlar:</strong> Net karbon dengesi tartışmalı, büyük arazi gerektiren enerji ormancılığı sorunlu olabilir</li>
      </ul>

      <h2>Türkiye'nin Yenilenebilir Enerji Hedefleri</h2>
      <p>
        Türkiye, enerji bağımsızlığı ve iklim taahhütleri kapsamında
        yenilenebilir enerji kurulu kapasitesini artırmayı hedeflemektedir.
        YEKA ihaleleri, lisanssız üretim mevzuatı ve büyük ölçekli
        GES/RES projeleri bu politikanın araçlarıdır. Güncel hedefler
        ve kapasite verileri için Enerji ve Tabii Kaynaklar Bakanlığı
        ve EPDK'nın yıllık raporları esas alınmalıdır.
      </p>

      <h2>Evde Yenilenebilir Enerji</h2>
      <p>
        Bireysel düzeyde en erişilebilir seçenek <strong>çatı veya
        balkon güneş panelidir.</strong> Türkiye'deki lisanssız üretim
        mevzuatı, konutların şebekeye fazla enerji satmasına imkân
        tanır. Kurulum ve mevcut teşvikler hakkında detaylı bilgi için:
      </p>
      <p>
        <a href="/blog/evde-solar-panel-kurulum-maliyet">
          Evde Solar Panel: Kurulum Süreci, Maliyet ve Geri Dönüş
        </a>
      </p>
      <p>
        Sürdürülebilir yaşam için daha fazla adım:{" "}
        <a href="/blog/surdurulebilir-yasam-nedir-rehber">
          Sürdürülebilir Yaşam Nedir? Evden Başlamak İçin Kılavuz
        </a>
      </p>
    </>
  )
}
