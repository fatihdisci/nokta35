import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "sgk-hizmet-dokumu-e-devlet",
  title: "SGK Hizmet Dökümü e-Devlet'ten Nasıl Alınır?",
  description:
    "SGK Tescil ve Hizmet Dökümü e-Devlet'ten nasıl sorgulanır? Sigortalılık sürenizi, prim günlerinizi ve işyeri geçmişinizi adım adım nasıl görürsünüz?",
  date: "2026-05-25",
  category: "Resmi İşlemler",
  summary:
    "SGK Tescil ve Hizmet Dökümü; tüm sigortalı çalışma geçmişinizi, prim gün sayılarını ve işyeri bilgilerini içerir. e-Devlet (turkiye.gov.tr) üzerinden ücretsiz ve anında alınabilir. Emeklilik hesabı, iş başvurusu ve kredi süreçlerinde kullanılır.",
  readTime: 4,
  faq: [
    {
      question: "SGK hizmet dökümü nedir, ne işe yarar?",
      answer:
        "SGK Tescil ve Hizmet Dökümü, T.C. kimlik numaranıza bağlı tüm sigortalı çalışma geçmişinizi gösteren resmi belgedir. Her işyeri, çalışma başlangıç ve bitiş tarihleri, prim ödeme günleri ve sigortalılık türü (4a/4b) bu belgede yer alır. Emeklilik sürenizi hesaplamak, kredi başvurusu yapmak veya hizmet geçmişinizi belgelemek için kullanılır.",
    },
    {
      question: "SGK hizmet dökümünü e-Devlet'ten nasıl alırım?",
      answer:
        "turkiye.gov.tr'ye giriş yapın, arama çubuğuna 'SGK Tescil ve Hizmet Dökümü' yazın. Hizmet sayfasında T.C. kimlik numaranızı girin, dönemi seçin ve belgeyi PDF olarak indirin. Belge QR kod içerir ve kurumlar tarafından doğrulanabilir.",
    },
    {
      question: "Hizmet dökümümde eksik prim görünüyor. Ne yapmalıyım?",
      answer:
        "İşvereninizin primleri SGK'ya bildirip bildirmediğini kontrol edin. Prim bildirimi yapılmamışsa önce işvereninize başvurun; çözüm olmazsa SGK'ya şikâyet edebilirsiniz (alo.sgk.gov.tr veya 170 SGK hattı). Kayıt dışı çalışma varsa hizmet tespiti davası için avukat desteği alınması önerilir.",
    },
    {
      question: "SGK hizmet dökümünde 4a ve 4b ne anlama gelir?",
      answer:
        "4a, ücretli/maaşlı çalışanları (SSK) kapsar; işveren ve çalışan birlikte prim öder. 4b, kendi adına çalışanları (Bağ-Kur) kapsar; esnaf, serbest meslek ve çiftçiler bu kapsamdadır. 4c ise kamu görevlilerini (memurlar) kapsar. Emeklilik hesabı yapılırken bu türlerin toplam gün sayısı dikkate alınır.",
    },
    {
      question: "SGK hizmet dökümü ne kadar süre geçerli?",
      answer:
        "Belgenin yasal geçerlilik süresi bulunmamakla birlikte talep eden kurumlar genellikle son 1–3 ay içinde alınmış belge ister. Emeklilik, kredi veya başka bir başvuru için kullanacaksanız belgeyi ilgili işlemden hemen önce alın.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>SGK Tescil ve Hizmet Dökümü</strong>, sigortalı olarak
        çalıştığınız tüm dönemleri ve prim gün sayılarınızı içeren
        resmi belgedir. Emeklilik hesabı, iş başvurusu veya kredi
        işlemlerinde sıklıkla talep edilir. e-Devlet üzerinden
        dakikalar içinde, ücretsiz alınabilir.
      </p>

      <h2>e-Devlet'ten Adım Adım</h2>
      <ol>
        <li>
          <strong>turkiye.gov.tr</strong> adresine gidin ve e-Devlet
          şifrenizle giriş yapın.
        </li>
        <li>
          Arama çubuğuna{" "}
          <strong>"SGK Tescil ve Hizmet Dökümü"</strong> yazın.
        </li>
        <li>
          SGK'nın hizmet sayfasında T.C. kimlik numaranızı onaylayın.
        </li>
        <li>
          Dönem seçeneği sunulursa "Tüm Hizmetler" veya ilgili
          yıl aralığını seçin.
        </li>
        <li>
          Belge <strong>PDF olarak</strong> oluşur; indirin veya
          yazdırın. QR kod içerdiğinden elektronik doğrulama yapılabilir.
        </li>
      </ol>

      <h2>Belgede Neler Yazar?</h2>
      <p>
        Hizmet dökümünde her sigortalı çalışma dönemi için:
      </p>
      <ul>
        <li>İşyeri adı ve sicil numarası</li>
        <li>İşe giriş ve çıkış tarihleri</li>
        <li>Sigortalılık türü (4a, 4b, 4c)</li>
        <li>Prim ödeme gün sayısı</li>
        <li>Çalışmanın aralıklı/sürekli olup olmadığı</li>
      </ul>
      <p>
        Sayfanın alt kısmında <strong>toplam prim gün sayısı</strong>{" "}
        özetlenir. Bu sayı emeklilik hesaplarında doğrudan kullanılır.
      </p>

      <h2>Sigortalılık Türleri</h2>
      <ul>
        <li>
          <strong>4a (SSK):</strong> Bir işverene bağlı ücretli
          çalışanlar. İşveren ve çalışan birlikte prim öder.
        </li>
        <li>
          <strong>4b (Bağ-Kur):</strong> Kendi adına çalışanlar,
          esnaf, serbest meslek mensupları, çiftçiler.
        </li>
        <li>
          <strong>4c:</strong> Kamu görevlileri (memurlar).
        </li>
      </ul>
      <p>
        Farklı türlerde çalışma süreleriniz varsa hepsinin toplam
        gün sayısı emeklilik hesabında bir arada değerlendirilebilir.
      </p>

      <h2>Eksik Prim Görünüyorsa</h2>
      <p>
        Çalıştığınız hâlde bazı dönemler belgede görünmüyorsa
        birkaç olasılık söz konusudur:
      </p>
      <ul>
        <li>
          İşvereniniz primleri SGK'ya zamanında bildirmemiş olabilir.
          Önce işverenle görüşün.
        </li>
        <li>
          Kayıt dışı çalışma söz konusuysa SGK'ya şikâyet dilekçesi
          verilebilir; gerekirse <strong>hizmet tespiti davası</strong>{" "}
          açılabilir (iş mahkemesi, avukat desteği önerilir).
        </li>
        <li>
          SGK danışma hattı: <strong>170</strong>
        </li>
      </ul>

      <h2>Hangi İşlemlerde Kullanılır?</h2>
      <ul>
        <li>Emeklilik başvurusu ve süre hesabı</li>
        <li>Banka kredisi ve mortgage başvurusu</li>
        <li>İş başvurusunda deneyim kanıtı</li>
        <li>Mahkeme ve idari süreçlerde iş geçmişi belgesi</li>
        <li>Yurt dışı çalışma veya vize süreçleri</li>
      </ul>

      <p>
        e-Devlet'teki diğer SGK hizmetleri için:{" "}
        <a href="/blog/e-devlet-ne-yapilir-rehber">
          e-Devlet ile Neler Yapılabilir? Eksiksiz Rehber
        </a>
      </p>
      <p>
        Türkiye sağlık sistemi için:{" "}
        <a href="/blog/turkiye-saglik-sistemi-basamaklar">
          Türkiye'de Sağlık Sistemi: Birinci, İkinci, Üçüncü Basamak
        </a>
      </p>
    </>
  )
}
