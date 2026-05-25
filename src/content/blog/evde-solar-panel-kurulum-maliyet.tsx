import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "evde-solar-panel-kurulum-maliyet",
  title: "Evde Solar Panel: Kurulum Süreci, Maliyet ve Geri Dönüş Rehberi",
  description:
    "Evde solar panel nasıl kurulur? Türkiye'de lisanssız üretim, şebekeye satış, sistem bileşenleri, kurulum aşamaları ve geri dönüş süresini etkileyen faktörler.",
  date: "2026-05-25",
  category: "Sürdürülebilir Yaşam",
  summary:
    "Türkiye'de konutlar 10 kW'a kadar lisanssız güneş enerjisi sistemi kurabilir ve fazla enerjiyi şebekeye satabilir. Sistem; panel, inverter ve şebeke bağlantısından oluşur. Geri dönüş süresi konuma, tüketime ve sisteme göre değişir; güncel tarife ve teşvik için EPDK ve TEDAŞ resmi kaynakları esas alınmalıdır.",
  readTime: 7,
  faq: [
    {
      question: "Türkiye'de bireyler evlerine güneş paneli kurabilir mi?",
      answer:
        "Evet. Türkiye'de Elektrik Piyasası Lisans Yönetmeliği kapsamında 10 kW'a kadar çatı ve cephe uygulamaları için lisans gerekmiyor. Bu 'lisanssız üretim' mekanizması, konutların hem kendi tüketimlerini karşılamasına hem de fazla enerjiyi şebekeye satmasına imkân tanır. 10 kW üzeri sistemler lisansa tabidir.",
    },
    {
      question: "Sistemi kurmak için hangi adımlar izlenir?",
      answer:
        "Temel adımlar şunlardır: 1) Bağlı olunan dağıtım şirketine (örn. Gediz Elektrik) başvuru. 2) Teknik uygunluk incelemesi ve ön onay. 3) Kurulum ve bağlantı testi. 4) Sayaç değişimi ve ölçüm anlaşması. 5) Şebekeye bağlantı ve üretime başlama. Süreç dağıtım şirketine ve bölgeye göre değişir; güncel prosedür için dağıtım şirketi resmi kanalları esas alınmalıdır.",
    },
    {
      question: "Güneş enerjisi sistemi ne kadar sürede geri döner?",
      answer:
        "Geri dönüş süresi; coğrafi konuma (güneş saati), sistem büyüklüğüne, kurulum maliyetine, elektrik tarife fiyatına ve şebekeye satış fiyatına bağlıdır. Fiyatlar düzenli değiştiğinden kesin süre verilmesi yanıltıcı olur. Genel olarak iyi koşullardaki sistemlerde 6–10 yıl arası geri dönüş süresi söylenebilir; ancak güncel tarife hesaplamak için lisanslı proje firması veya EPDK kanalı kullanılmalıdır.",
    },
    {
      question: "Apartmanda kiracı olarak panel kurulabilir mi?",
      answer:
        "Kiracılar çatıya panel kuramaz; bu hak mülk sahibine aittir. Ancak balkon tipi küçük güneş panelleri (taşınabilir, şebekeye bağlanmayan) kiracılar tarafından kullanılabilir. Bunlar küçük cihazları besleyebilir ancak tam ev ihtiyacını karşılamaz. Büyük ölçekli kurulum için mülk sahibiyle anlaşma ve apartman kat malikleri kurulunun onayı gereklidir.",
    },
    {
      question: "Şebekeye sattığım enerji için ne kadar ödeme alırım?",
      answer:
        "Türkiye'de şebekeye verilen fazla enerji için ödeme yapılır; ancak tarife EPDK kararlarıyla belirlenir ve dönemsel olarak güncellenir. Garanti alım tarifesi (YEKDEM) kapsamındaki koşullar önem taşır. Güncel tarife için bağlı bulunduğunuz dağıtım şirketine veya EPDK'nın resmi yayınlarına başvurmanız gerekir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Elektrik faturalarını düşürmek ve karbon ayak izini azaltmak
        isteyen pek çok ev sahibi artık <strong>çatı güneş enerjisi
        sistemine</strong> yöneliyor. Türkiye'de bu alanda bireysel
        kurulum hem yasal hem de teknik olarak mümkündür. Bu yazıda
        sistemi nasıl kurulacağını, nelere dikkat edilmesi gerektiğini
        ve maliyet hesabını açıklıyoruz.
      </p>

      <h2>Türkiye'de Lisanssız Üretim Nedir?</h2>
      <p>
        Türkiye'de <strong>10 kW'a kadar</strong> çatı ve cephe güneş
        enerjisi sistemleri için üretim lisansı gerekmiyor. Bu durum
        "lisanssız üretim" olarak adlandırılır ve Elektrik Piyasası
        Kanunu kapsamındadır.
      </p>
      <p>
        Lisanssız üretim iki şekilde çalışır:
      </p>
      <ul>
        <li>
          <strong>Kendi tüketim:</strong> Üretilen enerji öncelikle
          evin ihtiyacını karşılar; sayaç geriye döner.
        </li>
        <li>
          <strong>Şebekeye satış:</strong> Tüketilemeyen fazla enerji
          şebekeye verilir ve ölçüm anlaşması kapsamında bedeli ödenir.
        </li>
      </ul>

      <h2>Sistem Bileşenleri</h2>

      <h3>Güneş Panelleri</h3>
      <p>
        Fotovoltaik (PV) paneller güneş ışığını doğru akıma (DC)
        çevirir. Evlerde en yaygın kullanılan monokristal silikon
        panellerdir; daha yüksek verimlilik sunar. Panel sayısı
        sisteme ve çatı alanına göre değişir.
      </p>

      <h3>İnverter (Çevirici)</h3>
      <p>
        Panellerin ürettiği DC elektriği evde kullanılan ve şebekeyle
        uyumlu AC elektriğe çevirir. Sistemin "beyni" sayılır; kalite
        ve ömür açısından yatırımın kritik bileşenidir.
      </p>

      <h3>Montaj Sistemi ve Kablaj</h3>
      <p>
        Panelleri çatıya sabitleyen alüminyum çerçeve sistemi. Çatı
        tipi (kiremit, beton, trapez çatı) montaj yöntemini etkiler.
        Kablaj ve koruma ekipmanları da bu kapsamdadır.
      </p>

      <h3>Sayaç</h3>
      <p>
        Şebekeye bağlı sistemlerde iki yönlü (üretim + tüketim)
        sayaç takılır. Bu sayaç dağıtım şirketi tarafından değiştirilir.
      </p>

      <h2>Kurulum Süreci (Adım Adım)</h2>
      <ol>
        <li>
          <strong>Ön fizibilite:</strong> Çatının yönü (ideali güneye
          bakan, 15–35° eğimli), gölgelenme durumu ve net kullanılabilir
          alan belirlenir. Aylık tüketim miktarı sistem kapasitesini
          belirler.
        </li>
        <li>
          <strong>Yetkili firma seçimi:</strong> Lisanslı elektrik
          tesisat firması veya GES proje firmasıyla teklif alınır.
          EPDK'ya kayıtlı firma listesi resmi kanaldan sorgulanabilir.
        </li>
        <li>
          <strong>Dağıtım şirketine başvuru:</strong> Bağlı olduğunuz
          dağıtım şirketine (İzmir için Gediz Elektrik / GEAŞ) başvuru
          yapılır. Teknik uygunluk incelemesi talep edilir.
        </li>
        <li>
          <strong>Teknik onay ve kurulum:</strong> Onay geldikten sonra
          panel montajı ve kablaj gerçekleştirilir.
        </li>
        <li>
          <strong>Sayaç değişimi:</strong> Dağıtım şirketi çift yönlü
          sayaç takar; ölçüm anlaşması imzalanır.
        </li>
        <li>
          <strong>Üretime başlama:</strong> Sistem devreye girer; hem
          kendi tüketiminizi karşılar hem de fazlasını şebekeye verir.
        </li>
      </ol>

      <h2>Maliyet ve Geri Dönüş</h2>
      <p>
        Sistem maliyeti panel fiyatları, inverter, montaj ve kablaj
        giderlerinin toplamıdır. Fiyatlar döviz kuruna bağlı olarak
        hızla değiştiğinden bu yazıda belirli rakam verilmemektedir.
      </p>
      <p>
        Geri dönüş süresini belirleyen faktörler:
      </p>
      <ul>
        <li>
          <strong>Konum ve güneş saati:</strong> İzmir gibi yıllık
          2.700–2.900 saat güneş alan bir şehirde sistem, İstanbul'a
          göre daha hızlı geri döner.
        </li>
        <li>
          <strong>Tüketim miktarı:</strong> Tüketimi yüksek hanelerde
          daha fazla tasarruf edilir.
        </li>
        <li>
          <strong>Elektrik tarifesi:</strong> Güncel tarife fiyatı
          hesabı doğrudan etkiler. EPDK kararlarıyla değişen tarife
          için en güncel bilgiye dağıtım şirketinden ulaşılmalıdır.
        </li>
        <li>
          <strong>Teşvik ve YEKDEM desteği:</strong> Dönemsel devlet
          destekleri geri dönüş süresini kısaltabilir. Güncel teşvik
          koşulları için EPDK ve Enerji Bakanlığı takip edilmelidir.
        </li>
      </ul>

      <h2>Bakım ve Ömür</h2>
      <p>
        Kaliteli güneş panellerinin ömrü 25–30 yıldır; üreticiler
        genellikle 25 yıl için verim garantisi verir. Bakım
        gereksinimleri minimumdur:
      </p>
      <ul>
        <li>
          Yılda 1–2 kez panellerin tozu ve kirine göre temizlenmesi
          (nem alır veya toz birikmesi varsa)
        </li>
        <li>
          İnverter ekranından üretim verilerinin izlenmesi
        </li>
        <li>
          Kablo bağlantılarının yıllık kontrolü
        </li>
      </ul>

      <h2>Apartman ve Kiracılar</h2>
      <p>
        Çatıya kurulum hakkı mülk sahibine aittir. Kat mülkiyetinde
        ortak çatıya panel kurmak için <strong>kat malikleri
        kurulunun kararı</strong> gerekir. Kiracılar taşınabilir
        balkon tipi küçük paneller kullanabilir; bunlar şebekeye
        bağlanmaz, yalnızca küçük cihazları besler.
      </p>
      <p>
        Yenilenebilir enerji türleri hakkında genel bakış için:{" "}
        <a href="/blog/yenilenebilir-enerji-turleri">
          Yenilenebilir Enerji Türleri: Güneş, Rüzgar, Jeotermal
        </a>
      </p>
      <p>
        Sürdürülebilir yaşam için daha fazlası:{" "}
        <a href="/blog/surdurulebilir-yasam-nedir-rehber">
          Sürdürülebilir Yaşam Nedir? Evden Başlamak İçin Kılavuz
        </a>
      </p>
    </>
  )
}
