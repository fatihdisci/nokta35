import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "kep-adresi-nedir-nasil-alinir",
  title: "KEP Adresi Nedir? Kayıtlı Elektronik Posta Nasıl Alınır?",
  description:
    "KEP (Kayıtlı Elektronik Posta) nedir, kim almalı, nasıl başvurulur? PTT KEP ve diğer hizmet sağlayıcıları, yasal geçerlilik ve kullanım alanları.",
  date: "2026-05-25",
  category: "Resmi İşlemler",
  summary:
    "KEP (Kayıtlı Elektronik Posta), yasal olarak iadeli taahhütlü mektupla eşdeğer tutulan dijital iletişim sistemidir. Şirketler, avukatlar ve serbest meslek mensupları için bazı resmi yazışmalarda zorunludur. Türkiye'de PTT KEP ve diğer BTK onaylı sağlayıcılardan başvurulabilir.",
  readTime: 5,
  faq: [
    {
      question: "KEP adresi zorunlu mu? Kim almalı?",
      answer:
        "KEP, bazı kesimlere yasal olarak zorunludur: anonim şirketler (A.Ş.), limited şirketler (Ltd. Şti.) ve e-tebligat kapsamındaki tüm ticaret şirketi türleri; avukatlar ve noter gibi meslek mensupları. Bireyler için zorunlu değildir ancak resmi yazışmalarda yasal güvence sağladığından isteğe bağlı olarak alınabilir.",
    },
    {
      question: "KEP ile normal e-posta arasındaki fark nedir?",
      answer:
        "Normal e-posta gönderildiğinin, alındığının ve içeriğinin yasal kanıtı değildir. KEP'te ise gönderim zamanı, alım zamanı ve mesaj içeriği zaman damgalı olarak kayıt altına alınır; bu kayıtlar mahkemede delil olarak kullanılabilir. Hukuki anlamda iadeli taahhütlü postanın dijital karşılığıdır.",
    },
    {
      question: "KEP başvurusu nasıl yapılır?",
      answer:
        "PTT KEP için en yakın PTT şubesine T.C. kimlik kartı ve ilgili belgelerle (şirket için ticaret sicil, vergi levhası) başvurulur. Online başvuru da kısmi olarak mümkündür; ancak son doğrulama genellikle şubede yapılır. Diğer BTK onaylı sağlayıcılar için kendi kanalları kullanılır.",
    },
    {
      question: "KEP hizmeti ücretli mi?",
      answer:
        "Evet, KEP hizmeti yıllık abonelik ücretine tabidir. Ücretler sağlayıcıya göre farklılaşır; güncel tarife için ilgili sağlayıcının web sitesini inceleyin. PTT KEP için ptt.gov.tr adresinden bilgi alınabilir.",
    },
    {
      question: "KEP adresim olmadan mahkemeye e-tebligat gelirse ne olur?",
      answer:
        "Zorunlu tutulduğu hâlde KEP adresi edinmeyen ticaret şirketi veya meslek mensuplarına e-tebligat gönderildiğinde, tebligatın ulaşıp ulaşmamasından bağımsız olarak tebliğ yapılmış sayılabilir. Bu durum hak kaybına yol açabileceğinden yükümlüler için KEP edinimi kritik önem taşır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>KEP (Kayıtlı Elektronik Posta)</strong>, Türkiye'de
        7201 sayılı Tebligat Kanunu ve ilgili yönetmelikler kapsamında
        yasal geçerliliği olan dijital posta sistemidir. Gönderilen
        mesajın içeriği, gönderim ve alım zamanı zaman damgasıyla
        kayıt altına alındığından <strong>iadeli taahhütlü mektupla
        eşdeğer</strong> hukuki değer taşır.
      </p>

      <h2>KEP ile Normal E-posta Arasındaki Temel Fark</h2>
      <p>
        Normal e-posta, gönderildiğinin yasal kanıtı değildir. Karşı
        taraf "almadım" diyebilir. KEP'te ise:
      </p>
      <ul>
        <li>Mesajın <strong>gönderildiği zaman</strong> kayıt altına alınır</li>
        <li>Karşı tarafın <strong>aldığı zaman</strong> kayıt altına alınır</li>
        <li>Mesaj <strong>içeriği değiştirilemez</strong> biçimde saklanır</li>
        <li>Tüm bu kayıtlar <strong>mahkemede delil</strong> olarak kullanılabilir</li>
      </ul>

      <h2>Kimler KEP Almak Zorunda?</h2>
      <p>
        Türk mevzuatı gereği aşağıdaki kişi ve kuruluşlar
        e-tebligat/KEP adresi edinmekle yükümlüdür:
      </p>
      <ul>
        <li>
          <strong>Ticaret şirketleri:</strong> Anonim şirket (A.Ş.),
          limited şirket (Ltd. Şti.), kolektif, komandit ve kooperatifler
        </li>
        <li>
          <strong>Serbest meslek mensupları:</strong> Avukatlar, noterler,
          arabulucular ve icra müdürlükleriyle etkileşimde olan gerçek kişiler
          (bazı yükümlülükler meslek birliğine göre farklılaşır)
        </li>
        <li>
          <strong>Kamu kurumları:</strong> Bazı kurum ve daireler KEP
          üzerinden yazışma yapmaktadır
        </li>
      </ul>
      <p>
        Bireyler için zorunluluk bulunmamakla birlikte; kiraya verenler,
        kiracılar veya ticari yazışma yoğunluğu olanlar isteğe bağlı
        olarak alabilir.
      </p>

      <h2>Türkiye'de KEP Hizmet Sağlayıcıları</h2>
      <p>
        Bilgi Teknolojileri ve İletişim Kurumu (BTK) tarafından
        yetkilendirilmiş sağlayıcılar arasında başlıcaları şunlardır:
      </p>
      <ul>
        <li>
          <strong>PTT KEP (ptt.gov.tr/kep):</strong> Devlet güvenceli,
          en yaygın kullanılan sağlayıcı. PTT şubelerinden veya online
          başvuru yapılabilir.
        </li>
        <li>
          <strong>TNB KEP (Türk Noterler Birliği):</strong> Avukat
          ve noter ağırlıklı kullanım.
        </li>
        <li>
          Diğer BTK onaylı özel sağlayıcılar.
        </li>
      </ul>
      <p>
        Güncel yetkili sağlayıcı listesi için BTK'nın resmi sitesi
        (btk.gov.tr) kontrol edilebilir.
      </p>

      <h2>PTT KEP Başvuru Süreci</h2>
      <ol>
        <li>
          En yakın <strong>PTT şubesine</strong> gidin (bazı şubeler
          KEP hizmeti sunmayabilir; önceden arayarak teyit edin).
        </li>
        <li>
          Bireysel başvuru için: T.C. kimlik kartı veya pasaport.
        </li>
        <li>
          Şirket başvurusu için: Şirket yetkilisinin imza sirküleri,
          ticaret sicil belgesi, vergi levhası.
        </li>
        <li>
          Başvuru formunu doldurun ve abonelik sözleşmesini imzalayın.
        </li>
        <li>
          KEP adresiniz genellikle kısa süre içinde aktive edilir.
        </li>
      </ol>

      <h2>KEP Adresi Formatı</h2>
      <p>
        PTT KEP adresleri genellikle{" "}
        <strong>ad.soyad@hs01.kep.tr</strong> veya şirketler için
        <strong> sirketadi@hs01.kep.tr</strong> biçimindedir.
        Sağlayıcıya göre alan adı değişebilir.
      </p>

      <h2>E-tebligat Aldığımda Ne Yapmalıyım?</h2>
      <p>
        KEP kutunuza gelen e-tebligatı açtığınızda tebliğ
        gerçekleşmiş sayılır; yasal süre bu andan itibaren
        işlemeye başlar. Kutunuzu düzenli kontrol etmek
        hak kaybını önler. Zorunlu olduğu hâlde KEP almayan
        şirket veya meslek mensubuna yapılan tebligat,
        karşı taraf okumasa bile tebliğ edilmiş sayılabilir.
      </p>

      <p>
        e-Devlet hizmetleri için kapsamlı rehber:{" "}
        <a href="/blog/e-devlet-ne-yapilir-rehber">
          e-Devlet ile Neler Yapılabilir? Eksiksiz Rehber
        </a>
      </p>
    </>
  )
}
