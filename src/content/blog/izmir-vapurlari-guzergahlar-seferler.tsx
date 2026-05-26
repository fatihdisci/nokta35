import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-vapurlari-guzergahlar-seferler",
  title: "İzmir Vapurları: İZDENİZ Güzergahları ve Sefer Saatleri",
  description:
    "İzmir'de deniz ulaşımı: İZDENİZ vapurları, Konak-Karşıyaka ve diğer körfez hatları, sefer saatleri, İZMİRKART kullanımı ve bilet rehberi.",
  date: "2026-05-25",
  category: "Ulaşım",
  summary:
    "İzmir körfezinde deniz ulaşımını İZDENİZ (İzmir Deniz İşletmesi) yürütür. Konak ile körfezin kuzey yakası arasındaki vapurlar, toplu taşımacılık ağının önemli bir parçasını oluşturur. Güncel sefer saatleri ve güzergahlar İZDENİZ resmi kanallarından takip edilmelidir.",
  readTime: 4,
  faq: [
    {
      question: "İzmir'de deniz ulaşımını hangi kurum yönetiyor?",
      answer:
        "İzmir körfezindeki deniz ulaşımını İZDENİZ (İzmir Deniz İşletmesi) yürütür. İZDENİZ, İzmir Büyükşehir Belediyesi'ne bağlı bir kuruluştur ve şehir içi deniz toplu taşıma hizmetlerini ESHOT, İZBAN ve Metro gibi diğer ulaşım sistemleriyle entegre biçimde sunar.",
    },
    {
      question: "İZDENİZ'in başlıca güzergahları hangileridir?",
      answer:
        "İZDENİZ'in temel hatları İzmir Körfezi'ni kuzey ve güney yakalar arasında bağlar; Konak ve Karşıyaka/Bostanlı arasındaki hatlar en yoğun kullanılan güzergahlardır. Pasaport, Alsancak, Karşıyaka ve Bostanlı iskeleleri önemli aktarma noktalarıdır. Güncel tüm aktif hatlar için İZDENİZ resmi sitesini inceleyiniz.",
    },
    {
      question: "İZDENİZ vapurlarında İZMİRKART geçerli mi?",
      answer:
        "Evet. İzmir'in entegre toplu taşıma kartı olan İZMİRKART, İZDENİZ vapurlarında geçerlidir. Aktarma indirimi de uygulanmaktadır; belirli süre içinde yapılan aktarmalarda indirimli ücret uygulanır. Güncel ücret tarifeleri ve aktarma koşulları İZMİRKART resmi kanallarından öğrenilmelidir.",
    },
    {
      question: "Vapur seferlerini nereden anlık olarak takip edebilirim?",
      answer:
        "İZDENİZ'in resmi web sitesi ve mobil uygulaması güncel sefer saatlerini ve iskele bilgisini sunar. İZMİR ulaşım uygulamaları (İZMİR Ulaşım veya İzmir BB uygulaması) da deniz hatları dahil entegre rota planlaması yapar. Seferlerde değişiklik olabileceğinden güncel bilgi için resmi kanallar esas alınmalıdır.",
    },
    {
      question: "Vapur bileti nasıl alınır?",
      answer:
        "Vapurlarda İZMİRKART kullanımı en yaygın ödeme yöntemidir. İZMİRKART olmayan yolcular iskele gişelerinden veya otomasyon makinelerinden bilet alabilir. Bazı iskelelerde kredi kartıyla ödeme kabul edilmektedir; gişe saatleri ve seçenekler iskeleden iskeleyeğişebilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir körfezi, şehrin iki yakasını birbirine bağlayan doğal
        bir ulaşım koridorudur. Trafiği aşmak, manzaralı bir yolculuk
        yapmak ve körfezin karşı yakasına pratik biçimde geçmek
        isteyenler için{" "}
        <strong>İZDENİZ vapurları</strong> köklü ve ekonomik bir
        tercih olmaya devam etmektedir.
      </p>

      <h2>İZDENİZ Nedir?</h2>
      <p>
        <strong>İZDENİZ (İzmir Deniz İşletmesi)</strong>, İzmir
        Büyükşehir Belediyesi'ne bağlı olarak körfezdeki tüm
        deniz ulaşımını yürüten kuruluştur. ESHOT (otobüs),
        İZBAN (banliyö treni) ve Metro ile birlikte İzmir'in
        entegre ulaşım sisteminin bir parçasını oluşturur.
      </p>

      <h2>Başlıca İskeleler</h2>
      <p>
        İzmir körfezinde yolcu trafiğinin yoğunlaştığı başlıca
        iskeleler şunlardır:
      </p>
      <ul>
        <li>
          <strong>Konak İskelesi:</strong> Şehrin merkezi; Kemeraltı
          ve Konak Meydanı'na yürüme mesafesinde, ESHOT ve metro
          aktarma noktası.
        </li>
        <li>
          <strong>Pasaport İskelesi:</strong> Konak ile Alsancak
          arasında konumlanmış, merkezi iskele.
        </li>
        <li>
          <strong>Alsancak İskelesi:</strong> Körfezin güney-orta
          kesimi; Alsancak çevresine hizmet verir.
        </li>
        <li>
          <strong>Karşıyaka İskelesi:</strong> Körfezin kuzey
          yakasının merkezi; Karşıyaka çarşısına yürüme
          mesafesinde.
        </li>
        <li>
          <strong>Bostanlı İskelesi:</strong> Karşıyaka'nın batısında,
          İZBAN Bostanlı istasyonuyla entegre.
        </li>
      </ul>
      <p>
        Aktif güzergah ve iskele listesi İZDENİZ'in güncel
        operasyonuna göre değişebilir; resmi kanallardan teyit edin.
      </p>

      <h2>Güzergah ve Sefer Saatleri</h2>
      <p>
        Sabah erken saatlerden gece geç saatlere kadar belirli
        aralıklarla sefer düzenlenir; hafta içi ve hafta sonu
        saatleri farklılık gösterebilir. Bayram tatillerinde
        özel sefer takvimi uygulanabilir.
      </p>
      <p>
        <strong>Güncel sefer saatlerini bulmak için:</strong>
      </p>
      <ul>
        <li>
          <strong>İZDENİZ resmi sitesi</strong> — hat bazlı sefer
          çizelgeleri
        </li>
        <li>
          <strong>İzmir BB mobil uygulaması</strong> — anlık
          rota planlama ve sefer takibi
        </li>
        <li>
          <strong>İskele panoları</strong> — her iskelede güncel
          sefer saati listesi asılıdır
        </li>
      </ul>

      <h2>Ücret ve İZMİRKART</h2>
      <p>
        İzmir'in tüm toplu taşıma sistemlerinde geçerli olan{" "}
        <strong>İZMİRKART</strong>, vapurlarda da kullanılabilir.
        İZMİRKART ile aktarma indirimi uygulanır: belirli süre
        içinde yapılan aktarmalarda tam ücret yerine indirimli
        aktarma bedeli ödenir.
      </p>
      <p>
        İZMİRKART olmayan yolcular, iskele gişelerinden veya
        otomatik bilet makinelerinden yolculuk bileti satın
        alabilir. Güncel ücret tarifeleri için İZDENİZ veya
        İZMİRKART resmi kanallarını inceleyin.
      </p>

      <h2>Pratik Bilgiler</h2>
      <ul>
        <li>
          <strong>Bisiklet:</strong> Bazı vapurlarda bisiklet
          taşımacılığına izin verilmektedir; saatleri ve
          koşulları önceden teyit edin.
        </li>
        <li>
          <strong>Engelli erişimi:</strong> İskelelerin büyük
          bölümünde rampa ve engelli erişim düzenlemeleri
          mevcuttur.
        </li>
        <li>
          <strong>Kötü hava koşulları:</strong> Şiddetli rüzgar
          veya fırtına durumunda seferler iptal edilebilir;
          güçlü poyraz döneminde anlık durum takibi önerilir.
        </li>
        <li>
          <strong>Yoğun saatler:</strong> Sabah 07:00–09:00 ve
          akşam 17:00–19:30 arası iskeleler ve vapurlar kalabalık
          olur; önceden iskeleye gitmek önerilir.
        </li>
      </ul>

      <p>
        İzmir'de diğer toplu taşıma seçenekleri için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Ulaşım Rehberi: ESHOT, İZBAN, Metro ve Tramvay
        </a>
      </p>
      <p>
        İZBAN güzergahları ve ücretleri için:{" "}
        <a href="/blog/izban-nedir-istasyonlar-guzergah">
          İZBAN: Hatlar, İstasyonlar ve Ücret Hesaplama
        </a>
      </p>
    </>
  )
}
