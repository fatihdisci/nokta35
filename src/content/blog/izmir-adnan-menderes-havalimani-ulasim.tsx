import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-adnan-menderes-havalimani-ulasim",
  title: "İzmir Adnan Menderes Havalimanı'ndan Şehir Merkezine Ulaşım",
  description:
    "İzmir Adnan Menderes Havalimanı'ndan (ADB) şehir merkezine nasıl gidilir? İZBAN, Havaş, taksi ve ESHOT seçenekleri, süre ve pratik öneriler.",
  date: "2026-05-25",
  category: "Ulaşım",
  summary:
    "İzmir Adnan Menderes Havalimanı (ADB), şehir merkezine yaklaşık 18 km uzaklıktaki Gaziemir ilçesinde yer alır. En hızlı ve ekonomik seçenek İZBAN tren hattıdır; havalimanı içinde doğrudan İZBAN bağlantısı mevcuttur. Ayrıca Havaş servis, taksi ve ESHOT da kullanılabilir.",
  readTime: 5,
  faq: [
    {
      question: "Havalimanından şehir merkezine en ucuz nasıl gidilir?",
      answer:
        "En ucuz seçenek İZBAN trenidir. Havalimanı terminali içindeki İZBAN istasyonundan İzmirkart ile binilir; Alsancak (Basmane yakını) veya Hilal istasyonuna yaklaşık 20–25 dakikada ulaşılır. Ücret İzmirkart tarife üzerinden uygulanır. Saat 06:00'dan gece geç saatlere kadar sefer mevcuttur.",
    },
    {
      question: "Havalimanından taksiyle ne kadar sürer, ne kadar tutar?",
      answer:
        "Trafik koşullarına bağlı olarak Konak'a yaklaşık 20–35 dakika sürer. Taksi taksimetreyle çalışır; güncel tarife Bilgi Taksi veya İzmir Taksi uygulamalarından ya da taksimetre üzerinden öğrenilir. Havalimanı taksisi resmi olarak terminalde beklediği için taksi seçiminde terminal çıkışındaki resmi taksi durağı kullanılmalıdır.",
    },
    {
      question: "Havaş servisi İzmir'de havalimanından nereye gidiyor?",
      answer:
        "Havaş, İzmir Adnan Menderes Havalimanı ile şehir içi belirli noktalar arasında servis işletmektedir. Güzergah ve seferler değişebileceğinden güncel bilgi için Havaş'ın resmi sitesi veya terminal danışma görevlisi esas alınmalıdır.",
    },
    {
      question: "İZBAN hangi saatlerde sefer yapıyor?",
      answer:
        "İZBAN sabah erken saatlerden gece geç saatlere kadar düzenli sefer yapar; saat aralığı tarifeye göre değişir. Seyahat saatinizden önce izban.com.tr üzerinden sefer saatini kontrol etmeniz önerilir. Gece uçuşlarında İZBAN son seferi kaçırmamak için saat takibi kritiktir.",
    },
    {
      question: "Havalimanında araç kiralamak mümkün mü?",
      answer:
        "Evet. Terminal içinde ve yakınında birden fazla araç kiralama şirketi (ulusal ve uluslararası markalar) kontruar bulundurur. Rezervasyonu önceden yapmak; özellikle yaz sezonu ve bayram dönemlerinde araç bulunabilirliğini ve fiyatı olumlu etkiler.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>İzmir Adnan Menderes Havalimanı (IATA: ADB)</strong>,
        Gaziemir ilçesinde, İzmir şehir merkezine yaklaşık 18 km
        güneyde konumlanır. Şehir merkezine ulaşmak için dört
        temel seçenek mevcuttur.
      </p>

      <h2>1 — İZBAN (En Ekonomik ve Hızlı)</h2>
      <p>
        Terminal binasından doğrudan bağlantılı{" "}
        <strong>İZBAN istasyonu</strong>, havalimanını İzmir'in
        banliyö tren hattına bağlar. Aliağa–Selçuk arasında
        çalışan İZBAN, havalimanından şehir merkezindeki
        <strong> Alsancak</strong> ve çevresine 20–25 dakikada ulaşır.
      </p>
      <ul>
        <li>
          <strong>Ücret:</strong> İzmirkart geçerlidir; aktarma
          imkânıyla metro, tramvay ve ESHOT'a geçiş sağlanır.
        </li>
        <li>
          <strong>Bagaj:</strong> Büyük valiz ile İZBAN'a binmek
          pratiktir; vagon içinde alan mevcuttur.
        </li>
        <li>
          <strong>Sıklık:</strong> Tarife saatleri izban.com.tr'den
          sorgulanabilir; sabah erken–gece geç arası sefer vardır.
        </li>
      </ul>
      <p>
        İZBAN'dan Basmane veya Alsancak'a indikten sonra metro,
        ESHOT veya taksiyle hedef noktaya kolayca devam edilebilir.
      </p>

      <h2>2 — Havaş Servis</h2>
      <p>
        Havaş, havalimanı ile şehir içi noktalar arasında özel
        servis çalıştırır. Güzergah ve seferleri düzenli
        güncellendiğinden <strong>Havaş resmi kanallarından</strong>{" "}
        güncel bilgi alınması önerilir. Büyük bagajlı yolcular
        için konforu yüksektir.
      </p>

      <h2>3 — Taksi</h2>
      <p>
        Terminal çıkışında resmi taksi durağı bulunur. Taksimetre
        ile çalışır; şehir merkezine (Konak) trafik koşullarına
        göre <strong>yaklaşık 20–35 dakika</strong> sürer. Gece
        seyahatlerinde veya çok bagajlı gruplar için pratik bir
        seçenektir.
      </p>
      <ul>
        <li>
          Resmi taksi durağını kullanın; terminal dışında
          "servis" teklif eden kişilerden uzak durun.
        </li>
        <li>
          Taksimetre açık olduğundan emin olun; gece tarifesi
          gündüzden yüksektir.
        </li>
      </ul>

      <h2>4 — ESHOT Otobüsü</h2>
      <p>
        ESHOT otobüsleri havalimanı çevresine sefer yapar. En
        yavaş seçenektir; bagajlı yolculuk için elverişli değildir,
        ancak en ekonomik seçeneklerden biridir. Güncel hat bilgisi
        için ESHOT resmi sitesi veya 179 hattını arayın.
      </p>

      <h2>Araç Kiralama</h2>
      <p>
        Terminal içinde ve yakınında birden fazla araç kiralama
        şirketinin kontruarı bulunur. Yaz sezonu ve bayram
        dönemlerinde önceden rezervasyon önerilir.
      </p>

      <h2>Pratik Bilgiler</h2>
      <ul>
        <li>
          <strong>İZBAN bağlantısı için yol:</strong> Terminal
          çıkışından "İZBAN / Tren" yönlendirmelerini takip edin;
          yürüme süresi 5–10 dakikadır.
        </li>
        <li>
          <strong>İzmirkart yoksa:</strong> İZBAN istasyonundaki
          otomatlardan kart alınabilir veya bilet kesilebilir.
        </li>
        <li>
          <strong>Yoğun saatler:</strong> Sabah 07:00–09:00 ve
          akşam 17:00–19:30 arası trafikte taksi süresi uzayabilir;
          bu saatlerde İZBAN tercih edin.
        </li>
        <li>
          <strong>Gece geç iniş:</strong> İZBAN son seferini
          kaçırırsanız taksi tek seçenektir; terminalde 7/24
          taksi mevcuttur.
        </li>
      </ul>

      <p>
        İZBAN güzergahları ve istasyonları için:{" "}
        <a href="/blog/izban-nedir-istasyonlar-guzergah">
          İZBAN Nedir? İstasyonlar ve Güzergah Haritası
        </a>
      </p>
      <p>
        İzmir toplu taşıma sistemi için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi: ESHOT, İZBAN, Metro, Vapur
        </a>
      </p>
    </>
  )
}
