import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "cografi-bilgi-sistemi-cbs-gis-nedir",
  title: "Coğrafi Bilgi Sistemi (CBS/GIS) Nedir?",
  description:
    "CBS (Coğrafi Bilgi Sistemi) ya da GIS nedir, ne işe yarar? Harita ile farkı, katman mantığı, belediye CBS kullanımı ve açık coğrafi veriler hakkında.",
  date: "2026-05-24",
  category: "Açık Veri",
  summary:
    "CBS (Coğrafi Bilgi Sistemi / GIS), mekânsal verileri coğrafi koordinatlarla ilişkilendirerek analiz etmeyi sağlayan sistemdir. Yalnızca görsel harita değil; veriye dayalı mekânsal analiz, planlama ve karar destek aracıdır. Belediyeler, imar, altyapı ve afet yönetiminde CBS kullanır.",
  readTime: 5,
  faq: [
    {
      question: "CBS (GIS) nedir?",
      answer:
        "Coğrafi Bilgi Sistemi (CBS) ya da İngilizce adıyla Geographic Information System (GIS), coğrafi koordinatlarla ilişkilendirilmiş verileri toplamak, depolamak, analiz etmek ve görselleştirmek için kullanılan sistemdir. Klasik haritanın aksine, CBS'de her nesnenin (yol, bina, park) arka planında öznitelik verileri bulunur ve bu veriler üzerinde sorgulama ve analiz yapılabilir.",
    },
    {
      question: "CBS ile dijital harita arasındaki fark nedir?",
      answer:
        "Dijital harita yalnızca görsel sunumdur: sokakları, binaları ve arazi örtüsünü gösterir. CBS ise mekânsal analizin aracıdır: hangi mahallelerde sağlık tesisi yetersizliği var, deprem fay hatlarına 500 metre içindeki binalar hangileri, su borularının geçtiği güzergahlar nerede — bunlar CBS ile yanıtlanabilecek sorulardır.",
    },
    {
      question: "Belediyeler CBS'yi nasıl kullanır?",
      answer:
        "İmar planı hazırlama ve güncelleme, altyapı (su, elektrik, kanalizasyon) envanter yönetimi, afet risk haritalaması, park ve yeşil alan planlaması, kentsel dönüşüm proje takibi ve ulaşım ağı analizi başlıca kullanım alanlarıdır. Büyükşehir belediyeleri bu verilerin bir bölümünü açık CBS katmanları olarak kamuyla paylaşır.",
    },
    {
      question: "Açık CBS verilerine nasıl erişilir?",
      answer:
        "Türkiye'de bazı büyükşehir belediyeleri pazar yerleri, hastaneler, müzeler, spor salonları, acil toplanma alanları gibi katman verilerini API aracılığıyla paylaşır. Dünya genelinde OpenStreetMap, açık katkıyla oluşturulan en kapsamlı coğrafi veri tabanıdır. Avrupa'da INSPIRE direktifi, kamu kurumlarının CBS verilerini açması için yasal çerçeve sunar.",
    },
    {
      question: "CBS yazılımları nelerdir?",
      answer:
        "ESRI ArcGIS, ticari alanda en yaygın CBS yazılımıdır. QGIS ise tamamen ücretsiz ve açık kaynaklı alternatifidir; aynı analiz yeteneklerini sunar. Web tabanlı harita görselleştirme için Leaflet, MapLibre GL JS ve Mapbox yaygın olarak kullanılır. PostGIS, PostgreSQL veritabanına mekânsal sorgu yetenekleri katar.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Bir şehrin imar planını incelerken, afet toplanma alanlarını
        haritada gösterirken ya da otobüs duraklarının hangi mahallelere
        yakın olduğunu analiz ederken ortak bir altyapıya ihtiyaç vardır:{" "}
        <strong>Coğrafi Bilgi Sistemi (CBS)</strong>. Klasik haritadan
        çok daha fazlası olan CBS, mekânsal veriyi analiz ve karar
        destek aracına dönüştürür.
      </p>
      <p>
        Açık veri ve dijital şehir altyapısı için:{" "}
        <a href="/blog/acik-veri-nedir-sehirler-icin-neden-onemli">
          Açık Veri Nedir? Şehirler İçin Neden Önemli?
        </a>
      </p>

      <h2>CBS'nin Temel Kavramları</h2>

      <h3>Katman (Layer) Mantığı</h3>
      <p>
        CBS'nin en güçlü özelliği <strong>katmanlı yapısıdır</strong>.
        Her tematik veri kümesi ayrı bir katmanda tutulur: binalar bir
        katmanda, yollar başka bir katmanda, su boruları ayrı bir katmanda.
        Katmanlar birbirinin üzerine bindirilerek analiz yapılır: "deprem
        fay hattına 300 metre yakın olan okullar hangileri?" sorusu, fay
        hattı katmanı ile okul katmanının üst üste çakıştırılmasıyla
        yanıtlanır.
      </p>

      <h3>Vektör ve Raster Veri</h3>
      <p>
        CBS'de iki temel veri tipi vardır:
      </p>
      <ul>
        <li>
          <strong>Vektör:</strong> Nokta (eczane konumu), çizgi (yol,
          nehir) ve çokgen (bina, parsel, ilçe sınırı) geometrilerinden
          oluşur. Her geometriye öznitelik tablosu eklenir.
        </li>
        <li>
          <strong>Raster:</strong> Piksel ızgarasından oluşur. Uydu
          görüntüleri, yükseklik modelleri (DEM) ve hava kalitesi dağılım
          haritaları raster formatında saklanır.
        </li>
      </ul>

      <h3>Projeksiyon ve Koordinat Sistemi</h3>
      <p>
        Küresel yeryüzü, düz haritaya aktarılırken projeksiyon kullanılır.
        Türkiye'de resmi koordinat sistemi ITRF96 / TM30'dur. Web
        haritacılığında ise WGS84 (GPS koordinatları) ve Web Mercator
        yaygındır. Farklı sistemlerdeki verileri birleştirmek için
        dönüşüm gerekir.
      </p>

      <h2>Belediye ve Kamu CBS Kullanımı</h2>
      <p>
        Büyükşehir belediyeleri CBS'yi şu alanlarda yoğun biçimde kullanır:
      </p>
      <ul>
        <li>
          <strong>İmar planlaması:</strong> Mevcut arazi kullanımını,
          imar sınırlarını ve yapılaşma koşullarını CBS katmanlarıyla
          yönetir.
        </li>
        <li>
          <strong>Altyapı envanteri:</strong> Su, elektrik, doğalgaz,
          kanalizasyon hatları CBS'de konumlandırılarak bakım ve onarım
          planlanır.
        </li>
        <li>
          <strong>Afet yönetimi:</strong> Fay hatları, taşkın alanları,
          yapı envanterleri ve toplanma noktaları bir arada analiz edilir.
        </li>
        <li>
          <strong>Ulaşım planlaması:</strong> Otobüs güzergahları,
          durak yoğunlukları ve yaya erişim analizleri yapılır.
        </li>
      </ul>
      <p>
        İzmir'de afet toplanma alanlarının konumları için:{" "}
        <a href="/blog/toplanma-alani-nedir-nasil-bulunur">
          Toplanma Alanı Nedir? Nasıl Bulunur?
        </a>
      </p>

      <h2>Açık CBS Verileri</h2>
      <p>
        Türkiye'de bazı belediyeler, pazar yerleri, hastaneler, müzeler,
        spor salonları, WiFi noktaları, eczaneler ve afet toplanma
        alanları gibi katman verilerini açık veri API'leri aracılığıyla
        paylaşır. Bu veriler enlem-boylam koordinatlarıyla gelir ve
        harita uygulamalarına kolayca entegre edilebilir.
      </p>
      <p>
        Küresel ölçekte <strong>OpenStreetMap (OSM)</strong>, gönüllü
        katkılarla oluşturulan açık coğrafi veri tabanıdır. Dünyanın
        en kapsamlı açık harita altyapısıdır; pek çok navigasyon ve
        şehir uygulaması OSM verisine dayanır.
      </p>

      <h2>CBS Yazılımları</h2>
      <ul>
        <li>
          <strong>QGIS:</strong> Ücretsiz, açık kaynaklı masaüstü CBS
          yazılımı. ArcGIS ile karşılaştırılabilir analizler yapabilir;
          geniş eklenti ekosistemi vardır.
        </li>
        <li>
          <strong>ESRI ArcGIS:</strong> Kurumsal düzeyde ticari CBS
          platformu; belediyeler ve devlet kurumlarında yaygın.
        </li>
        <li>
          <strong>MapLibre GL JS / Leaflet:</strong> Web uygulamalarında
          interaktif harita görselleştirme için kullanılan açık kaynaklı
          JavaScript kütüphaneleri.
        </li>
        <li>
          <strong>PostGIS:</strong> PostgreSQL veritabanına mekânsal
          sorgu ve analiz yetenekleri ekler; büyük veri kümelerinde tercih
          edilir.
        </li>
      </ul>
      <p>
        Akıllı şehir teknolojileri ve kent dijitalleşmesi için:{" "}
        <a href="/blog/akilli-sehir-smart-city-nedir">
          Akıllı Şehir (Smart City) Nedir? Temel Kavramlar ve Örnekler
        </a>
      </p>
    </>
  )
}
