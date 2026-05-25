import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "ikametgah-belgesi-nasil-alinir",
  title: "İkametgah (Adres Teyit) Belgesi Nasıl Alınır? e-Devlet Rehberi",
  description:
    "İkametgah belgesi (adres teyit belgesi) e-Devlet üzerinden ücretsiz ve anında alınır. Adım adım açıklama, nüfus müdürlüğü alternatifi ve hangi durumlarda kullanılır.",
  date: "2026-05-25",
  category: "Resmi İşlemler",
  summary:
    "İkametgah belgesi, resmi adınızı ve ikamet adresinizi belgeleyen bir kamu belgesidir. turkiye.gov.tr (e-Devlet) üzerinden 'Adres Teyit Belgesi' adıyla ücretsiz ve anında alınabilir. QR kodlu PDF formatındadır; çoğu kurum noter onaysız kabul eder.",
  readTime: 4,
  faq: [
    {
      question: "İkametgah belgesi ile adres teyit belgesi aynı şey mi?",
      answer:
        "Evet. Günümüzde e-Devlet sisteminde 'Adres Teyit Belgesi' adıyla sunulan belge, eski adıyla 'İkametgah Belgesi' veya 'İkametgah İlmuhaberi' ile aynı işlevi görür. Resmi yazışmalarda genellikle 'Adres Teyit Belgesi' ifadesi kullanılmaktadır.",
    },
    {
      question: "Adres teyit belgesini e-Devlet'ten nasıl alırım?",
      answer:
        "turkiye.gov.tr'ye e-Devlet şifrenizle giriş yapın, arama çubuğuna 'adres teyit belgesi' yazın ve ilgili hizmeti açın. T.C. kimlik numaranızı doğruladıktan sonra belgenizi PDF olarak indirin veya doğrudan yazdırın. Belge QR kod içerir; kurumlar tarafından anlık doğrulanabilir.",
    },
    {
      question: "e-Devlet şifrem yoksa ne yapmalıyım?",
      answer:
        "e-Devlet şifresi PTT şubelerinden kimlik ibrazıyla ücretsiz alınır. Alternatif olarak nüfus müdürlüğüne giderek (ücret uygulanabilir) veya mobil imza ya da e-imzanız varsa bunları kullanarak e-Devlet'e giriş yapabilirsiniz.",
    },
    {
      question: "Adresim değişti ama belgede eski adres gösteriyor. Ne yapmalıyım?",
      answer:
        "Adres teyit belgesi, Türkiye Adres Kayıt Sistemi'nde (UAVT) kayıtlı adresinizi yansıtır. Gerçek adresiniz farklıysa önce nüfus müdürlüğüne veya e-Devlet üzerinden adres değişikliği bildirimi yapmanız gerekir; bundan sonra doğru adresli belge alınabilir.",
    },
    {
      question: "Adres teyit belgesi ne kadar süre geçerli?",
      answer:
        "Belgenin yasal geçerlilik süresi yoktur; ancak belgeyi talep eden kurumlar genellikle son 1–3 ay içinde alınmış olmayı şart koşar. Kullanacağınız kuruma güncellik şartını önceden sormak güvenlidir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İş başvurusu, banka hesabı açma, okul kaydı, devlet kurumu
        işlemleri — bunların hepsinde istenen belgelerden biri
        <strong> ikametgah belgesidir.</strong> Günümüzde bu belge
        e-Devlet portalı üzerinden dakikalar içinde, ücretsiz
        alınabilmektedir.
      </p>

      <h2>e-Devlet'ten Adım Adım</h2>
      <ol>
        <li>
          <strong>turkiye.gov.tr</strong> adresine gidin.
        </li>
        <li>
          Sağ üstten <strong>Giriş Yap</strong>'a tıklayın;
          e-Devlet şifresi, mobil imza veya e-imzayla giriş yapın.
        </li>
        <li>
          Arama çubuğuna <strong>"adres teyit belgesi"</strong> yazın
          ve çıkan hizmeti seçin.
        </li>
        <li>
          Açılan sayfada kimlik bilgileriniz otomatik dolar;
          kontrol edip onaylayın.
        </li>
        <li>
          Belge <strong>PDF formatında</strong> oluşur; indirin
          veya doğrudan yazdırın.
        </li>
      </ol>
      <p>
        Tüm işlem 2–3 dakika alır. İnternet bağlantısı olan her
        cihazdan yapılabilir; mobil uygulama da destekler.
      </p>

      <h2>Belgenin İçeriği</h2>
      <p>
        Adres teyit belgesi şu bilgileri içerir:
      </p>
      <ul>
        <li>Ad, soyad ve T.C. kimlik numarası</li>
        <li>Türkiye Adres Kayıt Sistemi'ne (UAVT) kayıtlı ikamet adresi</li>
        <li>Belgenin alındığı tarih ve saat</li>
        <li>Doğrulama QR kodu (kurumlar okutarak teyit eder)</li>
        <li>e-Devlet elektronik imzası</li>
      </ul>

      <h2>Nüfus Müdürlüğünden Alma</h2>
      <p>
        e-Devlet şifreniz yoksa veya internete erişiminiz kısıtlıysa
        ilçe <strong>Nüfus Müdürlüğü</strong>'ne bizzat giderek
        kimliğinizi ibraz ederek de belge alabilirsiniz. Bu durumda
        harç ücreti uygulanabilir; güncel tarife için ilçe nüfus
        müdürlüğünü arayın.
      </p>

      <h2>Adresiniz Yanlışsa</h2>
      <p>
        Belge, sistemdeki kayıtlı adresinizi yansıtır. Kayıtlı
        adresiniz gerçek ikamet adresinizden farklıysa önce adres
        güncellemesi yapmanız gerekir:
      </p>
      <ul>
        <li>
          e-Devlet'ten <strong>"Adres Değişikliği Bildirimi"</strong>{" "}
          ile online güncelleme yapılabilir (ev sahibinin sisteme
          kayıtlı olması şarttır).
        </li>
        <li>
          Alternatif olarak ilçe nüfus müdürlüğüne bizzat giderek
          güncelleme yapılır.
        </li>
      </ul>

      <h2>Hangi Durumlarda İstenir?</h2>
      <ul>
        <li>Banka hesabı ve kredi başvurusu</li>
        <li>Devlet kurumlarına yapılan başvurular (SGK, vergi dairesi vb.)</li>
        <li>Okul ve üniversite kayıt işlemleri</li>
        <li>İkametgahı kanıtlama gerektiren her resmi işlem</li>
        <li>Yurt dışı pasaport başvurusu (bazı konsolosluklarda)</li>
      </ul>

      <p>
        e-Devlet ile yapılabilecek diğer işlemler için:{" "}
        <a href="/blog/e-devlet-ne-yapilir-rehber">
          e-Devlet ile Neler Yapılabilir? Eksiksiz Rehber
        </a>
      </p>
    </>
  )
}
