import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-metrosu-guzergahlar-istasyonlar",
  title: "İzmir Metrosu: Güzergah, İstasyonlar ve Kullanım Rehberi",
  description:
    "İzmir Metrosu güzergahı, istasyonları, sefer saatleri ve İZMİRKART kullanımı. Fahrettin Altay'dan Bornova'ya uzanan M1 hattı ve aktarma noktaları rehberi.",
  date: "2026-05-24",
  category: "Ulaşım",
  summary:
    "İzmir Metrosu (M1), Fahrettin Altay ile Bornova arasında çalışan raylı sistemdir. Halkapınar'da İZBAN, Üçyol ve Basmane'de ESHOT ile entegre olur; İZMİRKART ile kullanılır.",
  readTime: 5,
  faq: [
    {
      question: "İzmir Metrosu hangi güzergahta çalışıyor?",
      answer:
        "İzmir Metrosu M1 hattı, güneybatıda Fahrettin Altay ile kuzeydoğuda Bornova arasında uzanır. Hat; Üçyol, Konak, Çankaya, Basmane, Mimar Kemalettin, Halkapınar, Stadyum, Bolge, Bornova ve Evka-3 gibi önemli istasyonları kapsar. Güzergah hem yeraltı hem yerüstü kesimler içerir.",
    },
    {
      question: "İzmir Metrosu kaç istasyondan oluşuyor?",
      answer:
        "M1 hattında toplam 16 istasyon bulunmaktadır. İstasyon sayısı ve güzergah hakkında en güncel bilgi için İzmir Büyükşehir Belediyesi'nin resmi kanalları takip edilmelidir; hat, yapılan eklentilerle zaman içinde genişleyebilir.",
    },
    {
      question: "Metrodan İZBAN'a nasıl aktarma yapılır?",
      answer:
        "Metro ile İZBAN arasındaki aktarma noktası Halkapınar İstasyonu'dur. Her iki sistemde de İZMİRKART kullanılır ve aktarma süresi içinde ikinci biniş için indirimli tarife uygulanır. Halkapınar, şehir merkezinden kuzey-güney yönüne geçiş için kritik bir kavşaktır.",
    },
    {
      question: "İzmir Metrosu hangi saatlerde çalışıyor?",
      answer:
        "Metro sabah erken saatlerden gece geç saatlere kadar hizmet verir. Kesin sefer saatleri gün içi ve hafta sonu farklılık gösterebilir. Güncel tarifeler için İzmir Büyükşehir Belediyesi'nin resmi web sitesi veya İZMİRKART uygulaması kontrol edilmelidir.",
    },
    {
      question: "İzmir Metrosu'nda nasıl ödeme yapılır?",
      answer:
        "Metro, İzmir'in tüm toplu taşıma sistemleriyle ortak kullanılan İZMİRKART ile kullanılır. Kart, istasyonlardaki otomat makinelerinden veya yetkili satış noktalarından yüklenebilir. Tam, öğrenci ve 60 yaş üstü tarifeleri farklıdır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'in trafik yoğunluğunu atlayarak hızlı ve düzenli ulaşım
        sağlayan <strong>metro</strong>, şehir merkezini güneybatı ve
        kuzeydoğuyla birbirine bağlar. ESHOT otobüsleri ve İZBAN ile
        entegre çalışan metro; İZMİRKART ile kullanılabilen, sık seferli
        bir raylı sistemdir. Bu rehberde güzergahı, istasyonları ve
        sistemi verimli kullanmanın yollarını ele alıyoruz.
      </p>
      <p>
        <em>
          Güzergah, istasyon ve sefer bilgileri değişkenlik gösterebilir.
          Güncel bilgi için İzmir Büyükşehir Belediyesi'nin resmi kanallarını
          takip ediniz.
        </em>
      </p>
      <p>
        İzmir'in tüm toplu taşıma sistemlerine genel bakış için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi: ESHOT, İZBAN, Metro, Vapur
        </a>
      </p>

      <h2>M1 Hattı: Güzergah ve Önemli İstasyonlar</h2>
      <p>
        İzmir Metrosu'nun işletmedeki hattı <strong>M1</strong> olarak
        adlandırılır. Hat; güneybatıda <strong>Fahrettin Altay</strong>'dan
        başlayarak kuzeydoğuda <strong>Bornova</strong>'ya ulaşır.
        Güzergah, hem yeraltı tünel hem yerüstü viadukt kesimlerini kapsar.
      </p>
      <p>Hattın öne çıkan istasyonları:</p>
      <ul>
        <li>
          <strong>Fahrettin Altay:</strong> Batı terminal noktası;
          Balçova ve Narlıdere yönüne otobüs bağlantısı.
        </li>
        <li>
          <strong>Üçyol:</strong> Merkezi aktarma kavşağı; birçok ESHOT
          hattıyla bağlantı.
        </li>
        <li>
          <strong>Konak:</strong> Tarihi merkez; tramvay ve vapur iskelesine
          yürüme mesafesi.
        </li>
        <li>
          <strong>Basmane:</strong> Tarihî gar binası yakını; ESHOT ve
          İZBAN bağlantısı.
        </li>
        <li>
          <strong>Halkapınar:</strong> İZBAN ile tek aktarma noktası;
          kuzey-güney hattına geçiş.
        </li>
        <li>
          <strong>Stadyum:</strong> İzmir Atatürk Stadyumu yakını.
        </li>
        <li>
          <strong>Bornova / Evka-3:</strong> Doğu terminal noktaları;
          üniversite kampüsleri yakını.
        </li>
      </ul>

      <h2>Aktarma Noktaları</h2>
      <p>
        Metro, diğer İzmir ulaşım sistemleriyle birkaç kritik noktada
        kesişir:
      </p>
      <ul>
        <li>
          <strong>Halkapınar → İZBAN:</strong> Aliağa–Selçuk hattıyla
          aktarma; tren veya metro ile geniş coğrafi erişim.
        </li>
        <li>
          <strong>Konak → Tramvay &amp; Vapur:</strong> Konak tramvayı ve
          İZDENİZ vapur iskelesine yürüme mesafesi.
        </li>
        <li>
          <strong>Üçyol, Basmane → ESHOT:</strong> Şehrin farklı mahallerine
          dağılan çok sayıda otobüs hattı.
        </li>
      </ul>
      <p>
        İZBAN güzergahı ve aktarma sistemi hakkında:{" "}
        <a href="/blog/izban-nedir-istasyonlar-guzergah">
          İZBAN Nedir? Güzergah, İstasyonlar ve Kullanım Rehberi
        </a>
      </p>

      <h2>İZMİRKART ile Kullanım</h2>
      <p>
        Metro, İzmir'in ortak bilet sistemi <strong>İZMİRKART</strong> ile
        kullanılır. Kart;
      </p>
      <ul>
        <li>İstasyon girişlerindeki turnike okuyucularına dokundurularak geçiş sağlar</li>
        <li>İZBAN, ESHOT, tramvay ve vapura aktarmada indirimli ücret uygular</li>
        <li>İstasyon otomat makinelerinden, yetkili bayilerden veya mobil uygulama üzerinden yüklenebilir</li>
        <li>Tam, öğrenci, 60 yaş üstü tarifeleri farklıdır</li>
      </ul>

      <h2>Sefer Sıklığı</h2>
      <p>
        Metro, sabah erken saatlerden gece geç saatlere kadar çalışır.
        Gün içi yoğun saatlerde sefer aralığı kısalır; hafta sonu ve gece
        geç saatlerde aralık uzayabilir. Kesin sefer takvimi için İzmir
        Büyükşehir Belediyesi'nin resmi web sitesi takip edilmelidir.
      </p>

      <h2>Metro ile Erişilen Başlıca Noktalar</h2>
      <ul>
        <li>Konak Meydanı ve tarihi çarşı bölgesi</li>
        <li>Basmane gar çevresi</li>
        <li>Ege Üniversitesi ve Dokuz Eylül Üniversitesi kampüsleri (Bornova yönü)</li>
        <li>Büyük alışveriş merkezleri (Optimum, Forum gibi)</li>
        <li>İzmir Fuar Alanı (Kültürpark yakını)</li>
      </ul>

      <h2>Güncel Bilgiye Nereden Ulaşılır?</h2>
      <ul>
        <li>İzmir Büyükşehir Belediyesi resmi web sitesi</li>
        <li>İZMİRKART mobil uygulaması (canlı konum ve sefer takibi)</li>
        <li><a href="/">nokta35.com</a> — İZBAN ücret hesaplayıcı ve toplu taşıma bilgileri</li>
      </ul>
    </>
  )
}
