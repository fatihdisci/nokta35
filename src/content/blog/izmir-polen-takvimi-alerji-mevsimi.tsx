import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-polen-takvimi-alerji-mevsimi",
  title: "İzmir Polen Takvimi: Hangi Ay, Hangi Bitki Poleni Uçuyor?",
  description:
    "İzmir'de yıl boyunca hangi ayda hangi bitki poleni uçuyor? Zeytin, çınar, çim ve ot poleni mevsimleri, alerjik rinit rehberi ve takip kaynakları.",
  date: "2026-05-25",
  category: "Hava Kalitesi",
  summary:
    "İzmir'de Akdeniz ikliminin etkisiyle pollen mevsimi kışın servi poleniyle başlar, ilkbaharda ağaç polenleri (özellikle zeytin) zirveye çıkar, yaz ve sonbaharın başında ot ve çim polenleri devreye girer. Alerjisi olanlar için MGM ve uluslararası pollen izleme servislerini takip etmek önemlidir.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de en yoğun pollen mevsimi ne zaman?",
      answer:
        "İzmir'de pollen yoğunluğu Mart–Mayıs arasında, özellikle zeytin ve çınar polenleriyle zirveye çıkar. Bu dönemde alerjik rinit ve astım semptomları belirgin biçimde artar. Servi poleni ise Ocak–Mart arasında önemli bir kaynak oluştururken çim polenleri Nisan–Temmuz dönemine yayılır.",
    },
    {
      question: "Zeytin poleni neden İzmir'de bu kadar önemli?",
      answer:
        "İzmir ve çevresi Türkiye'nin en büyük zeytin üretim bölgelerinden biridir. Nisan–Haziran arası çiçeklenen zeytin ağaçları son derece yoğun pollen üretir. Zeytine karşı duyarlılık İzmir'de yaygın bir alerjen kaynağıdır; zeytine karşı alerjisi olanlar bu dönemde dış mekânda zaman geçirmeyi sınırlandırmalıdır.",
    },
    {
      question: "Günlük pollen seviyesi nerede takip edilir?",
      answer:
        "Türkiye'de pollen tahmini için Meteoroloji Genel Müdürlüğü (mgm.gov.tr) ve Türkiye Allerji ve İmmünoloji Derneği kanalları izlenebilir. Uluslararası platformlardan polleninfo.org, iqair.com ve Copernicus Atmosphere Monitoring Service (CAMS) de günlük pollen tahmini sunar. Hava durumu uygulamalarının bir kısmı da pollen endeksi gösterir.",
    },
    {
      question: "Polen alerjisi ile soğuk algınlığı nasıl ayırt edilir?",
      answer:
        "Polen alerjisinin belirgin özellikleri: ateş olmaması, şeffaf ve sulu burun akıntısı, sürekli hapşırma, göz kaşıntısı ve sulanma. Soğuk algınlığında ateş, ağrı ve sarımsı/yeşilimsi akıntı görülür, semptomlar 7–10 günde geçer. Polen alerjisi pollen mevsimiyle örtüşür; aynı dönemde her yıl tekrarlanıyorsa alerji testi önerilir.",
    },
    {
      question: "Pollen yoğun günlerde ne yapmalı?",
      answer:
        "Yüksek pollen günlerinde özellikle sabah 06:00–10:00 saatlerinde (pollen konsantrasyonunun en yüksek olduğu dönem) dış mekânda aktiviteyi azaltın. Pencereyi kapalı tutun; eve girince elbise değiştirip yüzünüzü yıkayın. Antihistaminikler ve burun spreyleri semptomları yönetmede etkilidir; tedavi için doktora danışın.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'de pollen mevsimi kışın bitmez — servi ağaçları ocak ayında
        bile pollen üretir. Akdeniz ikliminin erken baharı, ağaç polenlerinin
        çok erken başlamasına yol açar. Alerjisi olanlar için yıllık{" "}
        <strong>pollen takvimini</strong> bilmek önemli bir hazırlık aracıdır.
      </p>

      <h2>İzmir'de Yıllık Polen Takvimi</h2>
      <p>
        Aşağıdaki takvim, İzmir'in Akdeniz iklimine özgü tipik pollen
        sezonlarını göstermektedir. Yıllık hava koşullarına bağlı olarak
        başlangıç ve bitiş tarihleri birkaç hafta kayabilir.
      </p>

      <h3>Ocak – Mart: Ağaç Polenleri — İlk Dalga</h3>
      <ul>
        <li>
          <strong>Servi (Cupressus):</strong> Türkiye'de önemli kış poleni
          kaynağıdır; İzmir'de Ocak ortasından Mart sonuna kadar aktiftir.
          Alerjik burun tıkanıklığına yol açan yaygın bir tetikleyicidir.
        </li>
        <li>
          <strong>Fındık ve kavak:</strong> Şubat–Mart döneminde başlar.
        </li>
      </ul>

      <h3>Mart – Haziran: Ağaç Polenleri — Zirve</h3>
      <ul>
        <li>
          <strong>Çınar (Platanus):</strong> İzmir sokaklarındaki çınar
          ağaçları Mart–Nisan arası yoğun pollen üretir. Tüylü polenleri
          gözlere ve solunum yoluna ulaşır.
        </li>
        <li>
          <strong>Zeytin (Olea europaea):</strong> İzmir ve çevresinin
          en önemli pollen kaynağı. Nisan sonu – Haziran başı zirve
          dönemine denk gelir. Bölgedeki yoğun zeytin bahçeleri nedeniyle
          konsantrasyonu yüksektir.
        </li>
        <li>
          <strong>Meşe ve dişbudak:</strong> Mart–Mayıs arası aktiftir.
        </li>
      </ul>

      <h3>Nisan – Temmuz: Çim (Grass) Polenleri</h3>
      <ul>
        <li>
          Buğdaygiller familyasından (Poaceae) çim polenleri çiçek ve park
          alanlarında yoğunlaşır. İzmir'de Nisan ortasından Temmuz başına
          kadar sürer. Park, bahçe ve ova kıyısı alanlarda konsantrasyon
          daha yüksektir.
        </li>
      </ul>

      <h3>Temmuz – Ekim: Ot (Weed) Polenleri</h3>
      <ul>
        <li>
          <strong>Pelin otu (Artemisia):</strong> Temmuz–Eylül arası aktif.
          Sonbahar alerjilerinin önemli kaynağıdır.
        </li>
        <li>
          <strong>Kazayağı (Chenopodium) ve kochia:</strong> Yaz sonu –
          erken sonbahar döneminde aktif.
        </li>
        <li>
          <strong>Yabani papatya ve diğer otlar:</strong> Ekim'e kadar
          sürebilir.
        </li>
      </ul>

      <h2>Günlük Pollen Takibi</h2>
      <p>
        Günlük pollen seviyesi için başvurulabilecek kaynaklar:
      </p>
      <ul>
        <li>
          <strong>Meteoroloji Genel Müdürlüğü (mgm.gov.tr)</strong> —
          Türkiye'nin resmi hava kalitesi ve bazı pollen verileri
        </li>
        <li>
          <strong>Copernicus Atmosphere Monitoring Service (CAMS)</strong> —
          Avrupa çapında günlük pollen tahmini (atmosphere.copernicus.eu)
        </li>
        <li>
          <strong>IQAir (iqair.com)</strong> ve benzeri hava kalitesi
          uygulamaları — pollen endeksi içerir
        </li>
        <li>
          <strong>Türkiye Allerji ve İmmünoloji Derneği (TAID)</strong>
          kanalları — alerji takip bilgisi
        </li>
      </ul>

      <h2>Yoğun Polen Günlerinde Öneriler</h2>
      <ul>
        <li>
          <strong>Sabah 06:00–10:00 saatlerini sınırlayın:</strong> Pollen
          konsantrasyonu genellikle bu saatlerde en yüksektir.
        </li>
        <li>
          <strong>Rüzgarlı günlerde dikkat:</strong> Kuru ve rüzgarlı hava
          poleni daha geniş alana taşır; yağmur sonrası hava genellikle
          daha temizdir.
        </li>
        <li>
          <strong>Pencere ve araç camı:</strong> Pollen yoğun dönemde
          pencereyi kapalı tutun; klimalı araçlarda klima filtresini
          düzenli değiştirin.
        </li>
        <li>
          <strong>Ev girişi:</strong> Dışarıdan gelince elbise değiştirip
          yüzünüzü yıkayın; dışarıda asılı çamaşır bırakmayın.
        </li>
        <li>
          <strong>Medikal tedavi:</strong> Antihistaminik ve burun
          spreyleri semptomları yönetir; tedavi için alerjist veya
          kulak-burun-boğaz hekimine başvurun.
        </li>
      </ul>

      <p>
        Hava kalitesi rehberi için:{" "}
        <a href="/blog/hava-kalitesi-rehberi">
          Hava Kalitesi Nedir? AKİ, PM2.5, NO₂ — Eksiksiz Rehber
        </a>
      </p>
      <p>
        İzmir iklimi hakkında:{" "}
        <a href="/blog/izmir-hava-iklim-ozellikleri">
          İzmir'de Hava Nasıl? İklim Özellikleri ve Mevsimler
        </a>
      </p>
    </>
  )
}
