import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "sgk-ilac-katki-payi-rehberi",
  title: "SGK İlaç Katkı Payı: Kimler Muaf, Oran Nasıl Hesaplanır?",
  description:
    "SGK ilaç katkı payı nedir, oranları nelerdir? Katkı payından muaf olan gruplar, kronik hastalık istisnası, üst sınır ve reçete türleri rehberi.",
  date: "2026-05-25",
  category: "Sağlık",
  summary:
    "SGK ilaç katkı payı, sigortalının reçeteli ilaç bedelinin belirli bir yüzdesini kendisi ödemesini ifade eder. Kronik hastalıklar, 18 yaş altı, çalışmayan 65 yaş üstü ve bazı özel durumlar katkı payından tamamen ya da kısmen muaf tutulabilir. Güncel oranlar SGK tarafından belirlenerek Sosyal Güvenlik Kurumu resmi kanallarında yayımlanır.",
  readTime: 5,
  faq: [
    {
      question: "SGK ilaç katkı payı nedir?",
      answer:
        "SGK ilaç katkı payı, SGK kapsamında reçete edilen ilaçların bedelinin sigortalı tarafından ödenen payıdır. SGK, ilaç faturasının büyük bölümünü karşılar; katkı payı, sigortanın karşılamadığı kısımdır. Oran ilaç türüne ve hasta grubuna göre değişir; güncel oranlar SGK.gov.tr'de yayımlanır.",
    },
    {
      question: "Kimler ilaç katkı payından muaftır?",
      answer:
        "18 yaşından küçük çocuklar, malul çocuğu olan anneler, iş kazası veya meslek hastalığı nedeniyle tedavi görenler, savaş malulleri ve bazı kronik hastalık grupları katkı payından tam muaf tutulabilir. Gelir testi uygulandığında çalışmayan 65 yaş üstü bireyler de muafiyet kapsamına girebilir. Muafiyet listesi SGK yönetmeliğiyle belirlenir.",
    },
    {
      question: "Kronik hastalıklarda katkı payı farklı mı?",
      answer:
        "Evet. SGK'nın belirlediği kronik hastalık gruplarında (örneğin hipertansiyon, diyabet, astım, kalp yetmezliği gibi tanılar) katkı payı oranı genel oran yerine daha düşük bir oran uygulanabilir veya tamamen muafiyet tanınabilir. Hastalığınızın hangi kapsamda değerlendirildiğini aile hekiminize veya SGK e-Nabız üzerinden teyit edebilirsiniz.",
    },
    {
      question: "Aylık katkı payı üst sınırı var mı?",
      answer:
        "SGK, ilaç katkı payına aylık ve/veya yıllık üst sınır (tavan) uygulamaktadır. Bu tavan aşıldıktan sonra o dönem için ek katkı payı alınmaz. Üst sınır miktarı asgari ücret baz alınarak belirlenir ve her yıl güncellenebilir. Güncel tavan değeri için SGK'nın resmi genelgelerini veya e-Nabız'ı kontrol edin.",
    },
    {
      question: "Reçete türleri katkı payını etkiler mi?",
      answer:
        "Evet. Kırmızı reçete (narkotik/psikotrop), mor reçete ve normal reçete gibi reçete türlerine göre hem ilaç sınıflandırması hem de katkı payı uygulaması farklılık gösterebilir. Ayrıca eşdeğer ilaç (jenerik) veya referans ilaç tercihine göre ek ücret doğabilir. Eczacınız bu konuda bilgi verebilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Eczanede reçetenizi kullandırdığınızda ödediğiniz tutar, SGK'nın
        belirlediği <strong>ilaç katkı payı</strong> sistemine göre
        hesaplanır. Aynı reçete için bazı hastalar hiç ödeme yapmazken
        bazı hastalar farklı miktarlar öder — bunun birkaç temel nedeni
        vardır.
      </p>

      <h2>İlaç Katkı Payı Nasıl Çalışır?</h2>
      <p>
        SGK'nın belirlediği fiyat listesine (Türkiye İlaç ve Tıbbi Cihaz
        Kurumu — TİTCK referans fiyatı) göre ilaç bedeli iki parçaya
        ayrılır:
      </p>
      <ul>
        <li>
          <strong>SGK'nın karşıladığı pay:</strong> Faturanın büyük
          bölümü, doğrudan SGK tarafından ödenir.
        </li>
        <li>
          <strong>Katkı payı:</strong> Kalan yüzde, hasta tarafından
          eczanede nakit veya kart ile ödenir.
        </li>
      </ul>
      <p>
        Oranlar ilaç grubuna, hasta statüsüne ve reçete türüne göre
        farklılaşır. Güncel oranlar <strong>SGK.gov.tr</strong> adresinde
        yayımlanan sağlık uygulama tebliğinde (SUT) yer alır.
      </p>

      <h2>Muafiyet Grupları</h2>
      <p>
        Aşağıdaki gruplara tam veya kısmi muafiyet uygulanabilir;
        güncel kapsam için SGK SUT'unu esas alın:
      </p>
      <ul>
        <li>
          <strong>18 yaş altı çocuklar:</strong> Tüm reçeteli ilaçlarda
          katkı payından muaf tutulur.
        </li>
        <li>
          <strong>İş kazası / meslek hastalığı:</strong> Bu nedenle
          yapılan tedavilerde katkı payı alınmaz.
        </li>
        <li>
          <strong>Savaş malulleri ve gaziler:</strong> İlgili mevzuat
          kapsamında tam muafiyet tanınır.
        </li>
        <li>
          <strong>Malul çocuğu olan anneler:</strong> Belirli tanı
          kodlarında muafiyet uygulanabilir.
        </li>
        <li>
          <strong>Gelir testi sonucu yoksul sayılanlar:</strong>
          Sosyal yardım kapsamındaki bireyler muaf tutulabilir.
        </li>
      </ul>

      <h2>Kronik Hastalık İstisnası</h2>
      <p>
        SGK'nın belirlediği kronik hastalık listesindeki tanılar
        (hipertansiyon, diyabet, kalp yetmezliği, astım/KOAH ve
        benzeri) için uygulanan katkı payı oranı genel oranın
        altında olabilir ya da tamamen kaldırılmış olabilir.
      </p>
      <p>
        Kronik hastalık muafiyetinden yararlanmak için genellikle:
      </p>
      <ol>
        <li>Hekimin tanıya özel ilaç reçete etmesi</li>
        <li>Tanının SGK kronik hastalık tanım kodlarıyla örtüşmesi</li>
        <li>Sisteme kayıtlı güncel kronik hastalık kaydı</li>
      </ol>
      <p>
        Durumunuzun sisteme kayıtlı olup olmadığını{" "}
        <strong>e-Nabız (enabiz.gov.tr)</strong> üzerinden
        ve aile hekiminize danışarak teyit edebilirsiniz.
      </p>

      <h2>Aylık Üst Sınır (Tavan)</h2>
      <p>
        SGK ilaç katkı payına aylık ve/veya yıllık bir üst sınır
        uygulanmaktadır. Bu tavan aşıldıktan sonra aynı dönem için
        ek katkı payı alınmaz. Tavan tutarı asgari ücretle bağlantılı
        olarak her yıl güncellenebilir; kesin rakam için{" "}
        <strong>SGK.gov.tr</strong> güncel SUT eklerini inceleyin.
      </p>

      <h2>Eşdeğer İlaç (Jenerik) Tercihi</h2>
      <p>
        Eczacınız reçetedeki ilaç için eşdeğer (jenerik) seçenek
        önerirse; SGK referans fiyatı eşdeğer ilaç üzerinden
        hesaplanır. Daha pahalı orijinal ilacı tercih ederseniz
        aradaki fark katkı payına ek olarak sizden alınabilir.
        Bu nedenle eczacınıza eşdeğer seçenekleri sormanızı
        öneririz.
      </p>

      <h2>Güncel Bilgiye Nereden Ulaşılır?</h2>
      <ul>
        <li>
          <strong>SGK.gov.tr</strong> → Sağlık Hizmetleri → Sağlık
          Uygulama Tebliği (SUT) — katkı payı oranları ve muafiyet
          listesi
        </li>
        <li>
          <strong>e-Nabız (enabiz.gov.tr)</strong> → Kayıtlı
          kronik hastalıklarınızı ve muafiyet durumunuzu görüntüleyin
        </li>
        <li>
          <strong>SGK ALO 170</strong> — telefon hattı ile bilgi
        </li>
        <li>
          Eczanenizde sisteme bağlı sorgu yapılabilir; eczacınız
          reçete girişinde katkı payı bilgisini görebilir.
        </li>
      </ul>

      <p>
        Reçetesiz ilaçlar ve eczane hizmetleri için:{" "}
        <a href="/blog/recetesiz-otc-ilaclar-nedir">
          Reçetesiz (OTC) İlaçlar: Eczanede Neler Alınabilir?
        </a>
      </p>
      <p>
        Nöbetçi eczane bulmak için:{" "}
        <a href="/blog/nobetci-eczane-sistemi-nasil-isler">
          Nöbetçi Eczane Nasıl Bulunur?
        </a>
      </p>
    </>
  )
}
