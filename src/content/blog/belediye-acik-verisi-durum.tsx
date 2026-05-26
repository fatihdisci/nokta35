import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "belediye-acik-verisi-durum",
  title: "Belediye Açık Verisi: Türkiye'de ve Dünyada Durum",
  description:
    "Hangi belediyeler açık veri sunar? Türkiye'de belediye açık veri portalları neler? Dünyada öncü şehirler, açık veri standartları ve vatandaşın bu.",
  date: "2026-05-24",
  category: "Açık Veri",
  summary:
    "Belediye açık verisi; ulaşım, su, sağlık, imar ve bütçe gibi kamu verilerinin herkes tarafından erişilebilir biçimde yayımlanmasıdır. Türkiye'de büyükşehirler açık veri portalı ve API altyapısı kurmaya devam etmektedir. Dünyada öncü şehirler arasında Londra, New York ve Amsterdam sayılabilir.",
  readTime: 5,
  faq: [
    {
      question: "Belediye açık verisi nedir?",
      answer:
        "Belediye açık verisi; yerel yönetimlerin toplu taşıma güzergahları, su kesintileri, imar planları, bütçe harcamaları, sağlık tesisi konumları gibi kamu niteliğindeki verileri, herkesin özgürce erişip kullanabileceği formatlarda yayımlamasıdır. Açık veri lisansı altında sunulan bu veriler yeniden kullanılabilir, dağıtılabilir ve ticari amaçla da değerlendirilebilir.",
    },
    {
      question: "Türkiye'de belediye açık verisi nasıl durumda?",
      answer:
        "İstanbul, Ankara ve İzmir başta olmak üzere büyükşehir belediyeleri açık veri portali ve API altyapıları kurmuştur. Toplu taşıma, coğrafi bilgi sistemi (CBS) katmanları, su ve baraj verileri bu portaller üzerinden erişilebilir durumdadır. Küçük ölçekli belediyelerde açık veri altyapısı henüz gelişmektedir.",
    },
    {
      question: "Açık veri portalı nedir?",
      answer:
        "Açık veri portalı, bir kurumun yayımladığı veri setlerini kataloglayan ve indirilebilir hale getiren web platformudur. Genellikle CSV, JSON ve API gibi makine tarafından okunabilir formatlarda veri sunar. Verinin güncellenme sıklığı, kaynağı ve lisans bilgisi de portalde yer alır.",
    },
    {
      question: "Açık veri standardı GTFS nedir?",
      answer:
        "GTFS (General Transit Feed Specification), toplu taşıma güzergah, durak ve sefer verilerinin standart biçimde yayımlanması için kullanılan açık format standardıdır. Google, Apple Maps ve birçok navigasyon uygulaması GTFS verilerini doğrudan kullanır. Bir şehrin GTFS verisi yayımlaması, toplu taşımayı tüm navigasyon uygulamalarına entegre eder.",
    },
    {
      question: "Vatandaş açık veriden nasıl yararlanır?",
      answer:
        "Doğrudan yararlanma: nöbetçi eczane, su kesintisi, otobüs saatleri gibi bilgilere üçüncü taraf uygulamalar aracılığıyla erişmek. Dolaylı yararlanma: araştırmacıların ve gazetecilerin açık veriyi analiz ederek belediye hizmetlerini denetlemesi ve karar alıcıları bilgilendirmesi. Geliştirici yararlanma: API üzerinden kendi uygulamasını inşa etmek.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Belediye hangi mahalleye ne kadar yatırım yaptı? Toplu taşıma
        güzergahları nasıl planlandı? Su kesintileri en çok hangi ilçeyi
        etkiliyor? Bu soruların yanıtlarına, veriler kamuya açıksa
        ulaşmak mümkündür. <strong>Belediye açık verisi</strong>;
        şeffaflığı artırmanın, katılımcı yönetimi güçlendirmenin ve
        şehir sorunlarına veri odaklı çözümler geliştirmenin temel
        aracıdır.
      </p>
      <p>
        Açık veri kavramının genel çerçevesi için:{" "}
        <a href="/blog/acik-veri-nedir-sehirler-icin-neden-onemli">
          Açık Veri Nedir? Şehirler İçin Neden Önemli?
        </a>
      </p>

      <h2>Açık Verinin Temel Koşulları</h2>
      <p>
        Bir verinin gerçek anlamda "açık" sayılabilmesi için üç koşul
        aranır:
      </p>
      <ul>
        <li>
          <strong>Erişilebilirlik:</strong> Herkesin kayıt olmadan,
          ücret ödemeden ve kısıtsız biçimde indirebileceği formatta
          sunulmalıdır.
        </li>
        <li>
          <strong>Makine okunabilirlik:</strong> PDF veya taranmış görsel
          değil; CSV, JSON ya da API gibi işlenebilir formatlarda yayımlanmalıdır.
        </li>
        <li>
          <strong>Açık lisans:</strong> Yeniden kullanıma, dağıtıma ve
          türev ürün geliştirmeye izin veren bir lisans (Creative Commons,
          ODbL gibi) altında olmalıdır.
        </li>
      </ul>

      <h2>Türkiye'de Belediye Açık Verisi</h2>
      <p>
        Türkiye'de büyükşehir belediyelerinin açık veri girişimleri son
        yıllarda hız kazanmıştır:
      </p>
      <ul>
        <li>
          <strong>İstanbul:</strong> Toplu taşıma GTFS verileri, CBS
          katmanları ve İBB açık veri portali üzerinden çeşitli veri
          setleri sunulmaktadır.
        </li>
        <li>
          <strong>İzmir:</strong> Baraj doluluk, su kesintisi, nöbetçi
          eczane, otobüs konumu, pazar yerleri ve pek çok CBS katmanı
          API üzerinden erişilebilir durumdadır.
        </li>
        <li>
          <strong>Ankara:</strong> EGO toplu taşıma verileri ve CBS
          katmanlarını kapsayan açık veri altyapısı mevcuttur.
        </li>
      </ul>
      <p>
        Küçük ölçekli belediyeler için açık veri altyapısı henüz
        gelişmekte; veri teknik formatlarda değil yalnızca web sitesinde
        tablo halinde sunulmaktadır. Bu durum makine işlenebilirliği
        engeller.
      </p>

      <h2>Dünyada Öncü Şehirler</h2>
      <p>
        Dünya genelinde açık veri liderliği yapan belediyeler şu
        pratiklerle öne çıkar:
      </p>
      <ul>
        <li>
          <strong>Londra (TfL):</strong> Tüm toplu taşıma verisini GTFS
          ve API olarak açmıştır; 600'den fazla bağımsız uygulama bu
          veriyi kullanmaktadır.
        </li>
        <li>
          <strong>New York:</strong> NYC Open Data platformunda binlerce
          veri seti kataloglıdır; bütçe, suç istatistikleri, ağaç envanteri
          gibi geniş bir kapsam sunar.
        </li>
        <li>
          <strong>Amsterdam:</strong> Akıllı şehir açık veri portalı
          üzerinden sensör verileri ve CBS katmanlarını paylaşır.
        </li>
        <li>
          <strong>Helsinki:</strong> Toplu taşıma, bina enerjisi ve
          hava kalitesi verilerini gerçek zamanlı API ile yayımlar.
        </li>
      </ul>

      <h2>GTFS: Toplu Taşıma Açık Veri Standardı</h2>
      <p>
        <strong>GTFS (General Transit Feed Specification)</strong>,
        toplu taşıma güzergah, durak ve sefer verilerinin standart
        biçimde yayımlanması için Google öncülüğünde geliştirilen açık
        formattır. Bir şehir GTFS verisi yayımladığında, Google Maps,
        Apple Maps ve diğer navigasyon uygulamaları bu veriyi otomatik
        olarak entegre edebilir.
      </p>
      <p>
        GTFS-Realtime uzantısı ise anlık araç konumu ve gecikme
        bilgilerini gerçek zamanlı olarak sunar.
      </p>

      <h2>Vatandaş Açık Veriden Nasıl Yararlanır?</h2>
      <p>
        Kod bilgisi olsun ya da olmasın, açık veri herkese fayda sağlar:
      </p>
      <ul>
        <li>
          <strong>Günlük kullanıcı:</strong> Nöbetçi eczane, otobüs
          saatleri veya su kesintisi bilgisine, açık API'yi kullanan
          üçüncü taraf uygulamalardan ulaşır.
        </li>
        <li>
          <strong>Gazeteci / araştırmacı:</strong> Bütçe harcamalarını,
          altyapı yatırımlarını veya çevre verilerini analiz ederek
          belediyeyi denetler.
        </li>
        <li>
          <strong>Geliştirici:</strong> API üzerinden veri çekerek
          bağımsız uygulama, harita veya veri görselleştirmesi üretir.
        </li>
      </ul>
      <p>
        API ve açık veri formatları hakkında:{" "}
        <a href="/blog/api-nedir-acik-veri-farki">
          API Nedir? Açık Veri ile Farkı Ne?
        </a>
      </p>
    </>
  )
}
