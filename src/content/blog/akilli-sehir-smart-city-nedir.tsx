import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "akilli-sehir-smart-city-nedir",
  title: "Akıllı Şehir (Smart City) Nedir? Temel Kavramlar ve Örnekler",
  description:
    "Akıllı şehir nedir, nasıl çalışır? IoT, açık veri, sensör ağları ve yapay zeka ile kentsel yaşamı dönüştüren akıllı şehir kavramını örneklerle açıklıyoruz.",
  date: "2026-05-24",
  category: "Açık Veri",
  summary:
    "Akıllı şehir; ulaşım, enerji, su ve kamu hizmetlerini dijital teknoloji, sensör ağları ve veri analiziyle optimize eden kent yönetimi anlayışıdır. Temel bileşenler: IoT sensörleri, açık veri portalları, entegre komuta merkezleri ve vatandaş uygulamaları.",
  readTime: 6,
  faq: [
    {
      question: "Akıllı şehir nedir?",
      answer:
        "Akıllı şehir (Smart City); ulaşım, enerji, su, atık ve kamu güvenliği gibi kentsel hizmetleri dijital teknoloji ve veri analiziyle daha verimli, sürdürülebilir ve yaşanabilir hale getirmeyi hedefleyen yönetim anlayışıdır. Sensörler, internet bağlantılı cihazlar (IoT) ve açık veri altyapısı bu modelin temel araçlarıdır.",
    },
    {
      question: "Akıllı şehirde hangi teknolojiler kullanılır?",
      answer:
        "IoT (Nesnelerin İnterneti) sensörleri, gerçek zamanlı veri toplayan kameralar ve dedektörler, büyük veri analiz platformları, coğrafi bilgi sistemleri (CBS/GIS), yapay zeka tabanlı trafik yönetimi ve vatandaş mobil uygulamaları akıllı şehrin temel teknolojileridir.",
    },
    {
      question: "Akıllı şehir vatandaşa ne kazandırır?",
      answer:
        "Daha hızlı ve güvenilir toplu taşıma, anlık nöbetçi eczane ve park yeri bilgisi, hızlı acil servis müdahalesi, düşük enerji ve su tüketimi, şeffaf belediye hizmetleri ve vatandaş katılım kanalları akıllı şehrin vatandaşa sağladığı faydaların başında gelir.",
    },
    {
      question: "Akıllı şehir ile dijital şehir arasındaki fark nedir?",
      answer:
        "Dijital şehir, belediye hizmetlerini çevrimiçi ortama taşımak anlamına gelir: e-belediye, dijital ödeme, online başvuru. Akıllı şehir ise bir adım öteye geçer; gerçek zamanlı veri toplayarak sistemi aktif olarak optimize eder. Dijital olmak akıllı olmak için ön koşuldur ancak yeterli değildir.",
    },
    {
      question: "Akıllı şehrin riskleri var mı?",
      answer:
        "Siber güvenlik açıkları, veri gizliliği ihlalleri, altyapı bağımlılığı ve dijital eşitsizlik (teknolojiye erişimi olmayan vatandaşların dışlanması) başlıca risklerdir. Başarılı akıllı şehir projeleri bu riskleri şeffaf veri yönetişimi ve kapsayıcı tasarım anlayışıyla ele alır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Otobüsün ne zaman geleceğini anlık görmek, boş otopark bulabilmek,
        su kesintisini önceden öğrenmek — bunlar artık yalnızca büyük
        metropollerin değil, akıllı şehir altyapısına yatırım yapan
        herhangi bir kentin sunabileceği hizmetlerdir. Peki{" "}
        <strong>akıllı şehir</strong> tam olarak nedir, hangi teknolojilere
        dayanır ve vatandaşa ne gibi faydalar sağlar?
      </p>
      <p>
        Açık veri altyapısı hakkında:{" "}
        <a href="/blog/acik-veri-nedir-sehirler-icin-neden-onemli">
          Açık Veri Nedir? Şehirler İçin Neden Önemli?
        </a>
      </p>

      <h2>Akıllı Şehrin Temel Bileşenleri</h2>
      <p>
        Akıllı şehir projelerinin alt yapısında birkaç kritik katman bulunur:
      </p>
      <ul>
        <li>
          <strong>Veri toplama (IoT sensörleri):</strong> Trafik yoğunluğu
          sensörleri, hava kalitesi istasyonları, su sayaçları, çöp kutusu
          doluluk sensörleri gerçek zamanlı veri üretir.
        </li>
        <li>
          <strong>Bağlantı altyapısı:</strong> Fiber optik, 4G/5G ve dar
          bantlı IoT ağları (LoRaWAN gibi) toplanan veriyi merkeze iletir.
        </li>
        <li>
          <strong>Veri işleme ve analiz:</strong> Toplanan ham veri,
          bulut platformlarında işlenerek anlamlı bilgiye dönüştürülür.
        </li>
        <li>
          <strong>Uygulama ve servisler:</strong> Vatandaş uygulamaları,
          belediye dashboard'ları ve açık veri portalları işlenmiş veriyi
          kullanıcıya sunar.
        </li>
      </ul>

      <h2>Akıllı Şehrin Uygulama Alanları</h2>

      <h3>Ulaşım</h3>
      <p>
        Gerçek zamanlı otobüs ve metro takibi; adaptif trafik ışığı kontrolü
        (yoğunluğa göre süre ayarlama); akıllı otopark sistemleri (boş
        yer sayısını gösteren ekranlar ve uygulamalar); bisiklet ve
        scooter paylaşım platformları.
      </p>

      <h3>Enerji</h3>
      <p>
        Akıllı elektrik sayaçları, talebe göre dinamik fiyatlandırma,
        yenilenebilir enerji entegrasyonu ve bina enerji yönetim sistemleri.
        Aydınlatmada hareket sensörü tabanlı kısma, gereksiz tüketimi
        azaltır.
      </p>

      <h3>Su Yönetimi</h3>
      <p>
        Uzaktan okunan su sayaçları şebeke kayıplarını tespit eder. Baraj
        doluluk ve günlük su üretim verileri anlık izlenerek dağıtım
        optimize edilir. Arıza kaynaklı su kesintileri daha hızlı tespitle
        kısa tutulur.
      </p>

      <h3>Atık ve Çevre</h3>
      <p>
        Doluluk sensörlü çöp kutuları toplanma güzergahlarını optimize
        eder; boşaltılmaya ihtiyaç duymayan konteynerlere araç göndermez.
        Hava kalitesi sensörleri şehrin farklı noktalarında PM2.5, NO₂ ve
        ozon seviyelerini anlık izler.
      </p>
      <p>
        Hava kalitesi ölçümü ve İzmir'deki değerler için:{" "}
        <a href="/blog/hava-kalitesi-rehberi">
          Hava Kalitesi Nedir? AKİ, PM2.5, NO₂ — Eksiksiz Rehber
        </a>
      </p>

      <h2>Açık Veri ve Akıllı Şehir İlişkisi</h2>
      <p>
        Akıllı şehirlerin ürettiği veri yalnızca belediye içinde kalmaz;
        açık veri portalleri aracılığıyla geliştiricilere, araştırmacılara
        ve vatandaşlara sunulur. Bu sayede:
      </p>
      <ul>
        <li>Bağımsız geliştiriciler belediyenin yapmadığı uygulamaları üretebilir</li>
        <li>Araştırmacılar kentsel sorunlara veri odaklı çözümler geliştirebilir</li>
        <li>Gazeteciler şehir yönetimini verilerle denetleyebilir</li>
        <li>Vatandaşlar kendi mahallelerinin verilerine erişebilir</li>
      </ul>

      <h2>Akıllı Şehrin Riskleri</h2>
      <p>
        Teknoloji yoğun altyapının beraberinde getirdiği riskler de göz
        ardı edilmemelidir:
      </p>
      <ul>
        <li>
          <strong>Siber güvenlik:</strong> Bağlı sistemler, saldırı
          yüzeyini genişletir. Kritik altyapı (su, enerji) için siber
          güvenlik hayati önem taşır.
        </li>
        <li>
          <strong>Veri gizliliği:</strong> Kamera ağları ve konum verileri,
          vatandaş mahremiyetini tehdit edebilir. Avrupa'da GDPR, veri
          toplama ve saklama sınırlarını belirler.
        </li>
        <li>
          <strong>Dijital eşitsizlik:</strong> Akıllı hizmetlere erişim
          için akıllı telefon veya internet bağlantısı gerektiren sistemler,
          yaşlı ve dezavantajlı grupları dışlayabilir.
        </li>
      </ul>

      <h2>Dijital Şehir ile Akıllı Şehir Farkı</h2>
      <p>
        Dijital şehir; hizmetleri çevrimiçi ortama taşımak demektir:
        e-belediye, online ödeme, dijital başvuru. Akıllı şehir ise
        bunun ötesinde, gerçek zamanlı veri akışıyla sistemi aktif olarak
        optimize eder. Dijitalleşme, akıllı şehir yolculuğunun başlangıç
        noktasıdır; son noktası değil.
      </p>
      <p>
        Coğrafi veri sistemleri hakkında:{" "}
        <a href="/blog/cografi-bilgi-sistemi-cbs-gis-nedir">
          Coğrafi Bilgi Sistemi (CBS/GIS) Nedir?
        </a>
      </p>
    </>
  )
}
