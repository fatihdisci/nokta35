import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "hava-kalitesi-rehberi",
  title: "Hava Kalitesi Nedir? AKİ, PM2.5, NO₂ — Eksiksiz Rehber",
  description:
    "Hava kirleticiler (PM2.5, PM10, NO₂, O₃, SO₂, CO), AKİ kategorileri, WHO 2021 sınır değerleri ve kötü hava günlerinde korunma yöntemleri hakkında kapsamlı rehber.",
  date: "2026-05-24",
  category: "Hava Kalitesi",
  summary:
    "Hava kalitesi; PM2.5, NO₂ ve ozon gibi kirleticilerin konsantrasyonuyla ölçülür. AKİ (Hava Kalitesi İndeksi) bu verileri 0–500 arası tek bir sayıya indirger. WHO 2021 yönergeleri ve Türkiye mevzuatı standartları farklıdır.",
  readTime: 9,
  faq: [
    {
      question: "AKİ (Hava Kalitesi İndeksi) nedir?",
      answer:
        "AKİ (Air Quality Index), PM2.5, PM10, NO₂, O₃, SO₂ ve CO gibi birden fazla kirleticiyi 0–500 arası tek bir sayıya indirgeyen standartlaştırılmış bir ölçüm sistemidir. 0–50 arası 'İyi', 51–100 arası 'Orta', 101 ve üzeri ise sağlık açısından giderek daha riskli kategorileri temsil eder. Türkiye'de bu sistem Çevre, Şehircilik ve İklim Değişikliği Bakanlığı tarafından uygulanmaktadır.",
    },
    {
      question: "PM2.5 ile PM10 arasındaki fark nedir?",
      answer:
        "PM10, çapı 10 mikrometre veya daha küçük parçacıkları; PM2.5 ise çapı 2,5 mikrometre veya daha küçük olanları ifade eder. PM2.5 daha ince olduğu için akciğer dokusuna ve kan dolaşımına daha derine işleyebilir; bu nedenle sağlık açısından daha tehlikeli kabul edilir. WHO 2021 yönergesinde PM2.5 için yıllık ortalama sınır 5 µg/m³ olarak belirlenmiştir.",
    },
    {
      question: "WHO'nun 2021 hava kalitesi sınır değerleri nelerdir?",
      answer:
        "WHO'nun 2021 Küresel Hava Kalitesi Yönergeleri şu yıllık ortalama sınırları öngörür: PM2.5 için 5 µg/m³, PM10 için 15 µg/m³, NO₂ için 10 µg/m³. Bu değerler 2005 yönergesine kıyasla önemli ölçüde düşürülmüştür. Türkiye'nin ulusal mevzuatındaki sınır değerleri WHO yönergelerinden farklılık gösterebilir; güncel değerler için Hava Kalitesi Yönetmeliği'ne başvurulmalıdır.",
    },
    {
      question: "Kötü hava kalitesinde kimler daha fazla etkilenir?",
      answer:
        "Çocuklar, yaşlılar, astım ve kronik akciğer hastalığı olanlar, kalp-damar hastaları ve hamileler hava kirliliğine karşı daha duyarlıdır. Bu gruplar AKİ 101 ve üzerinde dışarıda yoğun aktiviteden kaçınmalıdır. Sağlıklı yetişkinlerde belirgin etki genellikle AKİ 150 ve üzerinde başlar.",
    },
    {
      question: "İzmir'de hava kalitesini nereden takip edebilirim?",
      answer:
        "İzmir'de hava kalitesi verilerini Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın Ulusal Hava Kalitesi İzleme Ağı (havaizleme.gov.tr) üzerinden istasyon bazında takip edebilirsiniz. Ayrıca nokta35.com'un ana sayfasında AKİ verisi anlık olarak gösterilmektedir.",
    },
    {
      question: "Hava kirliliği hangi sağlık sorunlarına yol açar?",
      answer:
        "WHO verilerine göre hava kirliliği; kronik akciğer hastalığı, astım, kalp-damar hastalıkları, inme ve akciğer kanseri gibi uzun vadeli sağlık sorunlarıyla ilişkilendirilmektedir. Kısa vadede göz-boğaz tahrişi, öksürük, nefes darlığı ve baş ağrısı görülebilir. Etkinin şiddeti kirletici türüne, konsantrasyonuna ve maruziyet süresine bağlıdır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>Hava kalitesi</strong>; atmosferdeki kirletici maddelerin
        türüne ve konsantrasyonuna göre belirlenen bir ölçüdür. Temiz hava
        yaşamın temel koşullarından biri olmasına karşın hava kirliliği —
        trafik, sanayi, ısınma ve doğal kaynaklar başta olmak üzere çeşitli
        nedenlerle — hem sağlık hem de çevre üzerinde ciddi etkiler
        yaratmaktadır. Bu rehberde başlıca kirleticileri, ölçüm sistemlerini
        ve kötü hava günlerinde alınacak önlemleri açıklıyoruz.
      </p>

      <h2>Başlıca hava kirleticiler nelerdir?</h2>
      <p>
        Hava kalitesi tek bir maddeyle değil, birden fazla kirleticinin
        birlikteliğiyle değerlendirilir. En yaygın izlenen kirleticiler
        şunlardır:
      </p>
      <ul>
        <li>
          <strong>PM2.5:</strong> Çapı 2,5 mikrometre ve altındaki ince
          parçacıklar. Araç egzozları, sanayi emisyonları ve ikincil
          kimyasal reaksiyonlarla oluşur. Akciğer dokusuna ve kan
          dolaşımına derin şekilde işleyebilir; en tehlikeli kirletici
          olarak kabul edilir.
        </li>
        <li>
          <strong>PM10:</strong> Çapı 10 mikrometre ve altındaki parçacıklar.
          İnşaat tozu, yol tozu ve endüstriyel emisyonlar başlıca
          kaynaklardır. PM2.5'e göre daha büyük olduğundan solunum yollarında
          daha üst seviyelerde tutulur.
        </li>
        <li>
          <strong>NO₂ (Azot Dioksit):</strong> Motorlu taşıtların ve
          enerji santrallerinin yakıt yakması sırasında oluşur. Akciğer
          iltihabına ve astım krizlerine yol açabilir.
        </li>
        <li>
          <strong>O₃ (Ozon):</strong> Yeryüzü düzeyindeki ozon, NOₓ ve
          uçucu organik bileşiklerin güneş ışığıyla tepkimeye girmesiyle
          oluşur. Özellikle sıcak ve güneşli günlerde yoğunlaşır.
        </li>
        <li>
          <strong>SO₂ (Kükürt Dioksit):</strong> Kömür ve kükürt içerikli
          yakıtların yakılması sonucu ortaya çıkar. Solunum yollarını tahriş
          eder, asit yağmuruna katkıda bulunur.
        </li>
        <li>
          <strong>CO (Karbon Monoksit):</strong> Eksik yanma sonucu üretilir.
          Yüksek konsantrasyonlarda kan-oksijen dengesini bozar; kapalı
          alanlarda ölümcül olabilir.
        </li>
      </ul>
      <p>
        Ayrıntılı bilgi için:{" "}
        <a href="/blog/pm10-pm25-nedir-saglik-etkileri">
          PM10 ve PM2.5 Nedir? Sağlığa Etkileri
        </a>
      </p>

      <h2>AKİ (Hava Kalitesi İndeksi) nedir ve nasıl hesaplanır?</h2>
      <p>
        <strong>AKİ (Air Quality Index / Hava Kalitesi İndeksi)</strong>;
        farklı kirleticilerin ölçüm değerlerini halkın kolayca anlayabileceği
        tek bir sayıya indirgeyen standartlaştırılmış bir sistemdir.
        Hesaplama; her kirletici için ölçülen konsantrasyonun, o kirleticinin
        belirlenen eşik değerlerine göre oranlanmasıyla yapılır. Birden fazla
        kirleticinin AKİ değeri hesaplandığında en yüksek olan değer geçerli
        kabul edilir.
      </p>
      <p>Türkiye'de uygulanan AKİ kategorileri:</p>
      <ul>
        <li><strong>0–50 İyi:</strong> Hava kalitesi tatminkâr, sağlık riski çok düşük</li>
        <li><strong>51–100 Orta:</strong> Hassas bireyler için hafif risk olabilir</li>
        <li><strong>101–150 Hassas Gruplar İçin Sağlıksız:</strong> Çocuklar, yaşlılar ve kronik hastalar için risk artar</li>
        <li><strong>151–200 Sağlıksız:</strong> Herkes etkilenebilir; hassas gruplar ciddi etkilenebilir</li>
        <li><strong>201–300 Çok Sağlıksız:</strong> Sağlık üzerinde olumsuz etkiler belirgin hale gelir</li>
        <li><strong>301–500 Tehlikeli:</strong> Olağanüstü durum; dışarıda bulunmaktan kaçınılmalı</li>
      </ul>
      <p>
        AKİ değerini doğrudan takip etmek için:{" "}
        <a href="/blog/hava-kalitesi-indeksi-aki-nedir">
          AKİ Nedir? Nasıl Okunur?
        </a>
      </p>

      <h2>WHO 2021 sınır değerleri neden önemli?</h2>
      <p>
        Dünya Sağlık Örgütü (WHO), 2021 yılında yayımladığı güncel Küresel
        Hava Kalitesi Yönergeleri'nde hava kirletici sınır değerlerini
        önemli ölçüde düşürdü. Yıllık ortalama için önerilen değerler:
      </p>
      <ul>
        <li>PM2.5: <strong>5 µg/m³</strong> (2005 değeri: 10 µg/m³)</li>
        <li>PM10: <strong>15 µg/m³</strong> (2005 değeri: 20 µg/m³)</li>
        <li>NO₂: <strong>10 µg/m³</strong> (2005 değeri: 40 µg/m³)</li>
        <li>O₃: 8 saatlik pik ortalaması <strong>60 µg/m³</strong></li>
      </ul>
      <p>
        Bu değerler zorunlu yasal sınır değerleri değil, bilimsel önerilerdir.
        Ülkelerin kendi mevzuatındaki yasal sınır değerleri farklı olabilir.
        Türkiye'nin yasal hava kalitesi sınır değerleri için Çevre,
        Şehircilik ve İklim Değişikliği Bakanlığı'nın güncel Hava Kalitesi
        Değerlendirme ve Yönetimi Yönetmeliği'ne başvurulmalıdır.
      </p>

      <h2>Kim daha fazla etkilenir? Hassas gruplar</h2>
      <p>
        Hava kirliliğine karşı daha duyarlı olan gruplar şunlardır:
      </p>
      <ul>
        <li><strong>Çocuklar:</strong> Akciğerleri gelişme aşamasındadır; birim ağırlık başına daha fazla hava solurlar</li>
        <li><strong>Yaşlılar:</strong> Bağışıklık ve akciğer kapasitesi azalmıştır</li>
        <li><strong>Astım ve KOAH hastaları:</strong> Solunum yolu hassasiyeti nedeniyle düşük kirlilik düzeylerinde bile kriz riski taşır</li>
        <li><strong>Kalp-damar hastaları:</strong> PM2.5 ve NO₂ kardiyovasküler sistemi doğrudan etkiler</li>
        <li><strong>Hamileler:</strong> Yüksek maruziyetin düşük doğum ağırlığı ve erken doğumla ilişkili olduğunu gösteren çalışmalar mevcuttur (WHO, 2021)</li>
      </ul>

      <h2>Kötü hava günlerinde ne yapmalı?</h2>
      <p>AKİ 101 ve üzerinde olduğunda şu önlemler önerilir:</p>
      <ul>
        <li>Hassas gruplara dahil olanlar yoğun dışarıda aktiviteyi kısıtlamalı</li>
        <li>Yoğun trafiğe yakın caddelerde yürüyüş ve koşudan kaçınılmalı</li>
        <li>Pencereleri kapalı tutarak iç hava kalitesi korunabilir</li>
        <li>Yoğun egzersiz gerektiren aktiviteler için sabahın erken saatleri tercih edilmeli (özellikle ozon için; öğleden sonra tepe değerlere ulaşır)</li>
        <li>Solunum yolu rahatsızlığı yaşanıyorsa sağlık kuruluşuna başvurulmalı</li>
      </ul>
      <p>
        <em>
          Tıbbi tavsiye niteliği taşımaz. Sağlık durumunuza göre doktorunuza
          danışmanız önerilir.
        </em>
      </p>

      <h2>Hava kirliliği hangi kaynaklardan gelir?</h2>
      <p>
        Kentsel hava kirliliğinin başlıca kaynakları, kirletici türüne
        göre değişir:
      </p>
      <ul>
        <li>
          <strong>Trafik:</strong> NO₂ ve PM'nin en büyük kaynaklarından
          biridir; özellikle dizel motorlu araçlar.
        </li>
        <li>
          <strong>Isınma:</strong> Kömür, odun ve doğal gaz yakılması
          SO₂, PM ve CO üretir.
        </li>
        <li>
          <strong>Sanayi tesisleri:</strong> SO₂, NO₂ ve çeşitli parçacık
          emisyonları üretir.
        </li>
        <li>
          <strong>Tarım:</strong> Tarım alanlarından gelen amonyak (NH₃),
          ikincil parçacıkların oluşmasına katkıda bulunur.
        </li>
        <li>
          <strong>Doğal kaynaklar:</strong> Çöl tozu, orman yangını dumanı,
          volkanik emisyonlar gibi insan kaynaklı olmayan kirleticiler.
        </li>
      </ul>

      <h2>Hava kalitesini nereden takip edebilirim?</h2>
      <p>
        Türkiye'de hava kalitesi verilerini sunan resmi ve bağımsız kaynaklar:
      </p>
      <ul>
        <li>
          <strong>Çevre, Şehircilik ve İklim Değişikliği Bakanlığı</strong>{" "}
          — Ulusal Hava Kalitesi İzleme Ağı (havaizleme.gov.tr): Türkiye
          genelinde tüm ölçüm istasyonlarının saatlik verileri
        </li>
        <li>
          <strong>nokta35.com</strong> — İzmir geneli AKİ özeti, anlık güncelleme
        </li>
        <li>
          <strong>Dünya Meteoroloji Örgütü (WMO)</strong> — küresel hava
          kalitesi bültenleri ve yönergeler
        </li>
      </ul>
    </>
  )
}
