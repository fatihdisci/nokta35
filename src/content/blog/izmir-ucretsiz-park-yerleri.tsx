import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-ucretsiz-park-yerleri",
  title: "İzmir'de Ücretsiz Park Yerleri: Hat Sistemi ve Pratik Rehber",
  description:
    "İzmir'de ücretli ve ücretsiz park alanları nasıl ayrılır? Mavi hat, beyaz hat ve serbest bölgeleri anlamak, AVM otoparkları ve toplu taşıma alternatifi.",
  date: "2026-05-25",
  category: "Ulaşım",
  summary:
    "İzmir'de cadde parkı üç renk sistemiyle yönetilir: turuncu zemin ücretsiz süreli (beyaz hat), mavi zemin ücretli İZELMAN alanı, işaretsiz sokaklar serbesttir. Şehir merkezinde park alanı kısıtlı; çevre mahallelerden toplu taşımayla geliş hem stresten hem masraftan kurtarır.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de ücretsiz park için en iyi yol nedir?",
      answer:
        "Şehir merkezine (Konak, Alsancak, Bornova merkez) araçla gelmek yerine yakın bir metrobüs, İZBAN veya metro istasyonu yakınında ücretsiz sokak parkı bularak oradan toplu taşımaya geçmek en pratik yöntemdir. Bu sayede hem ücretli otopark masrafından hem trafik stresinden kurtulursunuz.",
    },
    {
      question: "Mavi hat nedir, ne kadar ücretlidir?",
      answer:
        "Mavi hat, İZELMAN (İzmir Büyükşehir Belediyesi'ne bağlı otopark işletmecisi) tarafından yönetilen ücretli cadde parkı alanlarıdır. Saatlik ücret uygulanır; güncel tarife İZELMAN resmi kanallarından öğrenilmelidir. Ödeme İzmirkart veya para üstüyle yapılabilir.",
    },
    {
      question: "Beyaz hat (ücretsiz süreli park) nasıl çalışır?",
      answer:
        "Bazı noktalarda belirlenen süreyle ücretsiz park yapılabilir (örn. 30 dakika veya 1 saat). Bu alanlarda süreyi aşan park ihlal sayılır; araç çekici veya ceza riskiyle karşılaşılabilir. Süre levhalarda belirtilir; kaldırım taşı veya yol çizgileri sarı/beyaz renktedir.",
    },
    {
      question: "AVM otoparkları ücretsiz mi?",
      answer:
        "Büyük AVM'lerin büyük çoğunluğu belirli süreye kadar (genellikle 1–2 saat) ücretsiz otopark sunar; bu süreyi aşan park ücretlidir. Koşullar AVM'ye göre değişir. AVM'nin kendi mağazalarından alışveriş yapanlara ek ücretsiz süre tanınabilir; giriş çıkışta otopark kasiyerine sorun.",
    },
    {
      question: "İzmir'de araçsız şehir merkezini gezmek mümkün mü?",
      answer:
        "Evet. İzmir'de metro, İZBAN, tramvay, ESHOT ve İZDENİZ feribotuyla merkeze ulaşmak hem hızlı hem pratiktir. Karşıyaka ve Bostanlı'dan Konak'a feribot, Bornova veya Üçyol'dan metroya binerek Konak'a 15–20 dakikada ulaşılabilir. Park sorununu tamamen ortadan kaldırır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'de araba sürmek ve park yeri bulmak, özellikle Konak,
        Alsancak ve Bornova merkez gibi yoğun noktalarda ciddi
        bir stres kaynağıdır. Sistemin nasıl işlediğini anlamak
        hem para tasarrufu hem de çekici cezasından korunmanızı
        sağlar.
      </p>

      <h2>İzmir'de Cadde Park Sistemi</h2>
      <p>
        İzmir Büyükşehir Belediyesi cadde park alanlarını renk
        kodlu çizgilerle düzenler:
      </p>

      <h3>Mavi Hat — Ücretli</h3>
      <p>
        Yol kenarında <strong>mavi çizgi</strong> olan alanlarda
        İZELMAN'ın ücretli cadde park sistemi geçerlidir. Park
        için İzmirkart veya nakit ödeme yapılır. Ödeme yapmadan
        park edilirse araç çekici veya ceza kesilebilir. Aktif
        saatler genellikle hafta içi mesai saatleridir; gece ve
        hafta sonu ücretsiz olabilir — levhaları kontrol edin.
      </p>

      <h3>Sarı Hat — Yasak</h3>
      <p>
        Sarı veya kırmızı çizgiler park yasağı bölgelerini işaret
        eder. Burada durmak veya park etmek her zaman yasaktır.
      </p>

      <h3>Çizgisiz Sokaklar — Serbest</h3>
      <p>
        Merkez dışındaki mahallelerde pek çok sokakta çizgi
        bulunmaz; bu alanlarda zaman kısıtlamasız ücretsiz park
        yapılabilir. Ancak kaldırıma, köşeye ve yaya geçidine
        park etmek her durumda yasaktır.
      </p>

      <h2>AVM ve Kapalı Otoparklar</h2>
      <p>
        Büyük alışveriş merkezleri kendi otoparkını sunar:
      </p>
      <ul>
        <li>
          <strong>İlk 1–2 saat:</strong> Büyük çoğunlukta ücretsiz
          veya düşük ücretli (AVM'ye göre değişir).
        </li>
        <li>
          <strong>Alışveriş onayı:</strong> Kasada fiş gösterip
          ek ücretsiz süre alınabilir.
        </li>
        <li>
          <strong>Günlük maksimum:</strong> Çoğu AVM günlük tavan
          belirler; güncel bilgi AVM'nin kendi kanallarından.
        </li>
      </ul>

      <h2>İZELMAN Kapalı Otopark Tesisleri</h2>
      <p>
        İZELMAN, İzmir genelinde çok katlı ve yer altı kapalı
        otopark tesisleri işletmektedir. Cadde parkına kıyasla
        daha güvenlidir; araç güvencesi için tercih edilebilir.
        Güncel yer listesi ve tarife için İZELMAN'ın resmi
        kanallarına başvurun.
      </p>

      <h2>En Pratik Strateji: Park ve Bin</h2>
      <p>
        Şehir merkezine araçla girmek yerine "park et ve toplu
        taşı" yöntemi hem ücretsiz park hem trafik stresini çözer:
      </p>
      <ul>
        <li>
          <strong>Metro hattı yakını:</strong> Üçyol, Basmane,
          Bornova istasyonları çevresinde ücretsiz sokak parkı
          bulunabiliyor; metroya geçerek Konak'a 10–20 dakikada
          ulaşılır.
        </li>
        <li>
          <strong>İZBAN hattı yakını:</strong> Cumaovası,
          Belkahve, Gaziemir gibi dış istasyonlarda araç bırakıp
          İZBAN'la merkeze gelinebilir.
        </li>
        <li>
          <strong>Karşıyaka veya Bostanlı:</strong> Araç bırakıp
          İZDENİZ vapuruyla Konak'a keyifli ve hızlı geçiş mümkün.
        </li>
      </ul>

      <h2>Çekici Riskini Azaltmak</h2>
      <ul>
        <li>
          Park etmeden önce trafik işaret levhalarını okuyun;
          "Park Yasaktır" ve "Araç Çekilir" ibareleri kritiktir.
        </li>
        <li>
          Mavi hat bölgelerinde ücret ödemeyi atlamamayın.
        </li>
        <li>
          Pazar günleri bazı çarşı içi sokaklarda araç girişi
          ve park yasağı uygulanabilir.
        </li>
      </ul>

      <p>
        İzmir otopark tesisleri için:{" "}
        <a href="/blog/izmir-otopark-izelaman-rehberi">
          İzmir Otopark: İZELMAN Tesisleri Rehberi
        </a>
      </p>
      <p>
        Toplu taşıma alternatifleri için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi: ESHOT, İZBAN, Metro, Vapur
        </a>
      </p>
    </>
  )
}
