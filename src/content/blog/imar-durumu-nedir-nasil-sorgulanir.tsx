import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "imar-durumu-nedir-nasil-sorgulanir",
  title: "İmar Durumu Nedir? Nasıl Sorgulanır ve Yorumlanır?",
  description:
    "İmar durumu nedir, nasıl öğrenilir? TAKS, KAKS, emsal, kat adedi kavramları. Arsa alırken veya bina inşa ederken imar durumunu doğru okuma rehberi.",
  date: "2026-05-24",
  category: "Şehir",
  summary:
    "İmar durumu, bir parselin nasıl yapılaşabileceğini belirleyen resmi belgedir. TAKS (taban alan katsayısı), KAKS/emsal (kat alanı katsayısı), kat adedi ve çekme mesafeleri imar durumunun temel parametreleridir. İlçe belediyesinden ya da e-Devlet üzerinden sorgulanabilir.",
  readTime: 5,
  faq: [
    {
      question: "İmar durumu nedir?",
      answer:
        "İmar durumu (imar çapı), bir taşınmazın bulunduğu parselde ne tür, ne büyüklükte ve kaç katlı yapı inşa edilebileceğini düzenleyen resmi belgedir. Uygulama imar planı hükümleri doğrultusunda hazırlanır; ilçe belediyesi tarafından düzenlenir.",
    },
    {
      question: "TAKS ve KAKS (emsal) nedir?",
      answer:
        "TAKS (Taban Alanı Katsayısı), yapının zemin ayak izinin parsel alanına oranıdır. TAKS: 0,40 ise parselin en fazla yüzde 40'ı bina tabanıyla kaplanabilir. KAKS (Kat Alanı Katsayısı) ya da emsal ise toplam inşaat alanının parsel alanına oranıdır. KAKS: 2,00 olan 500 m² bir parselde toplam 1000 m² inşaat alanı kullanılabilir.",
    },
    {
      question: "İmar durumu nasıl sorgulanır?",
      answer:
        "İlçe belediyesine ada ve parsel numarasıyla başvurarak imar durumu belgesi alınabilir. e-Devlet (turkiye.gov.tr) üzerinden de tapu bilgileriyle imar durumu sorgulanabilir. Ayrıca Coğrafi Bilgi Sistemi (CBS) portalları üzerinden imar planı görüntülenebilir; ancak resmi belge için belediyeye başvuru gerekir.",
    },
    {
      question: "İmar planına itiraz edilebilir mi?",
      answer:
        "Evet. Yeni yapılan veya değiştirilen imar planları askı sürecine çıkar; bu süre içinde (genellikle 30 gün) vatandaşlar yazılı itiraz hakkına sahiptir. İtiraz ilgili belediye meclisince değerlendirilir. Karara karşı idare mahkemesinde iptal davası da açılabilir.",
    },
    {
      question: "Farklı imar kullanım türleri nelerdir?",
      answer:
        "Konut alanı (K, A, B, C gibi yoğunluk dereceleri), ticaret alanı, konut+ticaret karma alan, sanayi, turizm tesis alanı, kamusal alan (okul, hastane, park rezervi) ve tarım alanı (yapılaşma kısıtlı) temel imar kullanım türleridir. Her tür farklı yapılaşma koşullarını kapsar.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Bir arsa alırken, ev satın almadan önce ya da bina izni isterken
        en kritik belge <strong>imar durumu</strong>dur. Parselin kaç
        katlı bina kabul ettiğini, ne kadar alan inşa edilebileceğini
        ve hangi işleve izin verildiğini belirler. Bu yazıda imar
        durumunu nasıl okuyacağınızı adım adım açıklıyoruz.
      </p>
      <p>
        Şehir planlaması ve imar sistemi hakkında genel bilgi için:{" "}
        <a href="/blog/sehir-planlamasi-nedir-imar-rant">
          Şehir Planlaması Nedir? İmar, Kentsel Rant ve Dönüşüm
        </a>
      </p>

      <h2>İmar Durumu Belgesi Nedir?</h2>
      <p>
        İmar durumu belgesi (imar çapı), belirli bir parselde geçerli
        uygulama imar planı hükümlerini özetleyen resmi belgedir. İçerdiği
        temel bilgiler:
      </p>
      <ul>
        <li>Parselin ada ve parsel numarası, yüzölçümü</li>
        <li>Yapı kullanım amacı (konut, ticaret, karma, sanayi vb.)</li>
        <li>TAKS (Taban Alanı Katsayısı)</li>
        <li>KAKS / Emsal (Kat Alanı Katsayısı)</li>
        <li>İzin verilen maksimum kat sayısı</li>
        <li>Çekme mesafeleri (komşu, ön, arka cepheler)</li>
        <li>Plan notu referansları (özel koşullar)</li>
      </ul>

      <h2>Temel Parametreler</h2>

      <h3>TAKS: Taban Alanı Katsayısı</h3>
      <p>
        Yapının zemin katının parsel alanına oranıdır.
        <strong> TAKS: 0,40</strong> yazıyorsa, 1000 m² parselde
        bina tabanı en fazla 400 m² olabilir. Kalan alan bahçe, otopark
        veya yeşil alan olarak kalır.
      </p>

      <h3>KAKS / Emsal</h3>
      <p>
        Toplam inşaat alanının (kat alanları toplamı) parsel alanına
        oranıdır. <strong>KAKS: 1,50</strong> olan 1000 m² parselde
        toplam inşaat alanı 1500 m²'yi geçemez. Kat sayısı ile TAKS
        birlikte uygulanır; ikisi de kısıtlayıcıdır.
      </p>

      <h3>Kat Adedi</h3>
      <p>
        Bazı planlarda sabit kat adedi belirtilir (örn. "en fazla 5 kat"),
        bazılarında yalnızca KAKS sınırı uygulanır. KAKS ve kat adedi
        birlikte değerlendirilmelidir.
      </p>

      <h3>Çekme Mesafeleri</h3>
      <p>
        Bina cephesinin komşu parsel sınırına, yola ve arka bahçeye olan
        minimum uzaklığını belirler. Yangın güvenliği, havalandırma ve
        gün ışığından yararlanma gibi kentsel kalite hedefleri için
        uygulanır.
      </p>

      <h2>İmar Kullanım Türleri</h2>
      <ul>
        <li><strong>Konut alanı (A, B, C grubu vb.):</strong> Yoğunluk kademesine göre ayrılır; A en düşük, C en yüksek yoğunluktur</li>
        <li><strong>Ticaret alanı:</strong> Zemin katta ticari kullanım zorunlu veya serbest</li>
        <li><strong>Karma konut+ticaret:</strong> Alt katlarda ticaret, üst katlarda konut</li>
        <li><strong>Sanayi alanı:</strong> Konut ve ticaret yasaktır</li>
        <li><strong>Kamusal alan:</strong> Okul, sağlık, park, dini tesis rezervleri — özel yapılaşmaya kapalı</li>
        <li><strong>Tarım dışı kullanım kısıtlı alan:</strong> Yapılaşma koşulları oldukça sınırlı</li>
      </ul>

      <h2>İmar Durumu Nasıl Sorgulanır?</h2>
      <p>
        İki temel yol vardır:
      </p>
      <ul>
        <li>
          <strong>İlçe belediyesi imar müdürlüğü:</strong> Ada ve parsel
          numarasıyla yazılı başvuru yapılarak resmi imar durumu belgesi
          alınır. Bazı belediyeler bu hizmeti çevrimiçi sunmaktadır.
        </li>
        <li>
          <strong>e-Devlet (turkiye.gov.tr):</strong> "İmar Durumu
          Sorgulama" servisi üzerinden tapu bilgileriyle sorgulama
          yapılabilir.
        </li>
      </ul>
      <p>
        Haritalı imar planını görüntülemek için belediyenin CBS
        (Coğrafi Bilgi Sistemi) portali kullanılabilir; ancak
        resmi başvuru için belge almak gerekir.
      </p>

      <h2>İmar Planına İtiraz</h2>
      <p>
        Yeni imar planı veya plan değişikliği askıya çıktığında,
        askı süresi (genellikle 30 gün) boyunca ilgili belediye
        müdürlüğüne yazılı itiraz yapılabilir. İtiraz belediye
        meclisince değerlendirilir. Meclis kararına karşı idare
        mahkemesinde iptal davası açılması da mümkündür.
      </p>
      <p>
        Kentsel dönüşüm ve yapı güvenliği süreçleri için:{" "}
        <a href="/blog/kentsel-donusum-nedir-hak-yukumlulukler">
          Kentsel Dönüşüm Nedir? Hak ve Yükümlülükler
        </a>
      </p>
    </>
  )
}
