import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "asansor-bakimi-kim-sorumlu",
  title: "Asansör Bakımı: Kim Sorumlu, Periyodik Kontrol ve Şikâyet",
  description:
    "Asansör bakımından kim sorumludur? Türk mevzuatına göre bina yönetimi yükümlülükleri, periyodik kontrol zorunluluğu ve arıza durumunda nasıl şikâyet edilir.",
  date: "2026-05-25",
  category: "Resmi İşlemler",
  summary:
    "Türk mevzuatı gereği asansör bakım ve işletme sorumluluğu bina yönetimine (kat maliklerine) aittir. Bakım firmasıyla aylık/yıllık sözleşme yapılması ve yılda bir kez A tipi muayene kuruluşu tarafından periyodik kontrol yaptırılması zorunludur. Arızalı veya tehlikeli asansörleri önce bina yönetimine, çözüm alınamazsa ilçe belediyesine bildirin.",
  readTime: 5,
  faq: [
    {
      question: "Asansör bakımından kim sorumludur?",
      answer:
        "Türk mevzuatına (Asansör Bakım ve İşletme Yönetmeliği) göre asansörün bulunduğu binanın kat malikleri, ortak alan olarak asansörün bakım ve işletiminden sorumludur. Bu sorumluluk pratik olarak bina yöneticisi veya site yönetim kurulu aracılığıyla yerine getirilir. Kiracılar değil, mülk sahipleri bu yükümlülüğü taşır.",
    },
    {
      question: "Periyodik kontrol zorunlu mu, ne sıklıkla yapılır?",
      answer:
        "Evet. Asansörlerin yılda en az bir kez BTK tarafından yetkilendirilmiş 'A Tipi Muayene Kuruluşu' tarafından periyodik kontrolden geçirilmesi zorunludur. Kontrolde asansörün güvenlik standartlarına uyumu denetlenir; eksik varsa bina yönetimine bildirilir ve süre verilir. Periyodik kontrol belgesi olmayan asansörün hizmete kapalı tutulması gerekir.",
    },
    {
      question: "Asansör bakım sözleşmesi zorunlu mu?",
      answer:
        "Evet. Asansör Bakım ve İşletme Yönetmeliği gereği bina yönetimi, yetkili (TSE veya ilgili standarta uygun) bir bakım firmasıyla yazılı bakım sözleşmesi yapmak zorundadır. Bakım sözleşmesi olmadan asansör işletilmesi yönetmeliğe aykırıdır.",
    },
    {
      question: "Asansör arızalandığında veya tehlikeli hâle geldiğinde ne yapmalıyım?",
      answer:
        "Önce bina yöneticisine veya site güvenlik görevlisine bildirin. Bina yönetimi önlem almazsa ilçe belediyesinin yapı kontrol veya zabıta birimine yazılı şikâyette bulunabilirsiniz. Belediye asansörü denetleyip tehlikeli gördüğünde mühürleme yapabilir. Kişisel zarar durumunda hukuki yol için avukat desteği alınması önerilir.",
    },
    {
      question: "Asansörde sıkışırsam ne yapmalıyım?",
      answer:
        "Panik yapmayın; asansör kabini yeterince havalandırılmıştır. Kabin içindeki acil çağrı butonuna basın; bina güvenliğini veya bakım firmasını arar. Telefonunuz varsa bina yöneticisini veya 112'yi arayın. Kapıyı zorla açmaya çalışmayın; kurtarma işlemi yetkili teknik eleman tarafından yapılmalıdır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Çok katlı binalarda günlük yaşamın vazgeçilmez parçası olan
        asansörler; bakım ihmalinden kaynaklanan kazalara sahne
        olabilir. Türk mevzuatı bu nedenle asansör sahiplerine ve
        yöneticilerine net yükümlülükler getirmiştir.
      </p>

      <h2>Yasal Çerçeve</h2>
      <p>
        Asansör bakım ve işletimini düzenleyen başlıca mevzuat:
      </p>
      <ul>
        <li>
          <strong>Asansör Bakım ve İşletme Yönetmeliği</strong>{" "}
          (Sanayi ve Teknoloji Bakanlığı — Resmî Gazete'de yayımlanan
          güncel yönetmelik esas alınır)
        </li>
        <li>
          <strong>TS EN 81 serisi standartlar</strong> — Avrupa
          asansör güvenlik standartları; Türkiye'de de esas alınır
        </li>
        <li>
          <strong>Kat Mülkiyeti Kanunu md. 19:</strong> Ortak alan
          bakım yükümlülüğü
        </li>
      </ul>

      <h2>Sorumluluk Kime Ait?</h2>
      <p>
        Asansör <strong>ortak alan</strong> olarak kabul edildiğinden
        sorumluluk <strong>kat maliklerine</strong> (bina sahiplerine)
        aittir. Pratikte bu sorumluluk:
      </p>
      <ul>
        <li>
          <strong>Bina yöneticisi</strong> (apartman yöneticisi)
        </li>
        <li>
          <strong>Site yönetim kurulu</strong> (sitelerde)
        </li>
        <li>
          <strong>Kooperatif yönetimi</strong> (konut kooperatiflerinde)
        </li>
      </ul>
      <p>
        aracılığıyla kullanılır. Kiracılar bu yükümlülüğü taşımaz
        ancak arızayı bina yönetimine bildirme hakları ve sorumluluğu
        vardır.
      </p>

      <h2>Bakım Sözleşmesi Zorunluluğu</h2>
      <p>
        Bina yönetiminin, <strong>yetkili bakım firmasıyla</strong>{" "}
        yazılı sözleşme yapması zorunludur. Bu sözleşme kapsamında:
      </p>
      <ul>
        <li>Aylık rutin bakım (yağlama, ayar, güvenlik testleri)</li>
        <li>Arıza müdahalesi</li>
        <li>Yedek parça değişimi (sözleşme kapsamına göre)</li>
      </ul>
      <p>
        Yetkili bakım firması seçiminde TSE belgeli ve sigortalı firma
        tercih edilmesi önerilir. Sözleşme olmaksızın asansör işletmek
        yönetmeliğe aykırıdır.
      </p>

      <h2>Periyodik Kontrol Zorunluluğu</h2>
      <p>
        Yılda en az <strong>bir kez</strong>, Sanayi ve Teknoloji
        Bakanlığı tarafından yetkilendirilmiş{" "}
        <strong>A Tipi Muayene Kuruluşu</strong> tarafından periyodik
        kontrol yaptırılması zorunludur. Bu kontrol:
      </p>
      <ul>
        <li>Elektrik ve mekanik güvenlik bileşenlerini test eder</li>
        <li>Taşıma kapasitesi ve hız denetimi yapar</li>
        <li>Kapı kilitleri ve emniyet freni kontrol eder</li>
        <li>Sonuçları resmi rapor olarak belgelendirir</li>
      </ul>
      <p>
        Kontrolü başarılı geçen asansöre uygunluk etiketi yapıştırılır.
        Eksik bulunursa bina yönetimine süre verilir; düzeltilmezse
        asansörün hizmete kapatılması talep edilir.
      </p>

      <h2>Arıza ve Tehlike Durumunda Ne Yapmalı?</h2>
      <p>
        Asansörün tehlikeli işaret vermesi (anormal ses, titreme, kapı
        açılmaması, gecikmeli durma) veya hasar görmesi durumunda:
      </p>
      <ol>
        <li>
          <strong>Bina yöneticisine bildirin:</strong> Yönetici,
          bakım firmasını ivediyle çağırmakla yükümlüdür.
        </li>
        <li>
          <strong>Asansörü kullanmayı bırakın:</strong> Kapıya
          "Bakımda" veya "Kullanılmaz" notu bırakmak diğer sakinleri
          uyarır.
        </li>
        <li>
          <strong>Bina yönetimi harekete geçmezse:</strong> İlçe
          belediyesinin yapı kontrol, zabıta veya şikâyet birimine
          yazılı başvuru yapın.
        </li>
        <li>
          <strong>Yaralanma veya maddi zarar durumunda:</strong>{" "}
          Hukuki sorumluluk için avukat desteği alın; bina yöneticisi
          ve bakım firması davalı olabilir.
        </li>
      </ol>

      <h2>Asansörde Sıkışırsanız</h2>
      <ul>
        <li>
          <strong>Sakin olun:</strong> Kabin yeterince havalandırılmıştır.
        </li>
        <li>
          <strong>Acil çağrı butonuna basın:</strong> Bakım firmasına
          veya bina güvenliğine ulaşır.
        </li>
        <li>
          <strong>Telefonunuz varsa:</strong> Bina yöneticisini veya
          112'yi arayın.
        </li>
        <li>
          <strong>Kapıyı zorlamayın:</strong> Kurtarma işlemi yetkili
          teknik eleman tarafından yapılmalıdır.
        </li>
      </ul>

      <p>
        Kentsel dönüşüm ve bina hakları için:{" "}
        <a href="/blog/kentsel-donusum-nedir-hak-yukumlulukler">
          Kentsel Dönüşüm Nedir? Hak ve Yükümlülükler
        </a>
      </p>
      <p>
        e-Devlet üzerinden belediye şikâyeti dahil diğer işlemler:{" "}
        <a href="/blog/e-devlet-ne-yapilir-rehber">
          e-Devlet ile Neler Yapılabilir? Eksiksiz Rehber
        </a>
      </p>
    </>
  )
}
