import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "adres-degisikligi-bildirimi",
  title: "Adres Değişikliği Bildirimi: Taşınınca Ne Yapmalısınız?",
  description:
    "Taşındıktan sonra adres değişikliği bildirimi nasıl yapılır? Muhtarlık ve e-Devlet üzerinden ikametgah adresi güncelleme, yasal süre ve gerekli belgeler.",
  date: "2026-05-25",
  category: "Resmi İşlemler",
  summary:
    "Türkiye'de taşınan kişiler yasal olarak 20 iş günü içinde yeni adreslerini bildirmekle yükümlüdür. Bildirim muhtarlık üzerinden veya e-Devlet (turkiye.gov.tr) adres değişikliği hizmetiyle yapılabilir. İkametgah adresi; SGK, vergi, seçim kütüğü ve resmi yazışmalar açısından önemli bir kayıttır.",
  readTime: 4,
  faq: [
    {
      question: "Adres değişikliği bildirimi zorunlu mu?",
      answer:
        "Evet. Türkiye'de Adrese Dayalı Nüfus Kayıt Sistemi (ADNKS) kapsamında kişiler yeni adreslerine taşındıklarında 20 iş günü içinde bildirim yapmakla yükümlüdür. Bu yükümlülük Nüfus Hizmetleri Kanunu'nda düzenlenmiştir. Bildirim yapılmaması çeşitli idari sorunlara yol açabilir.",
    },
    {
      question: "Adres değişikliği nereden yapılır?",
      answer:
        "İki temel yöntem mevcuttur: 1) Yeni adresin bağlı olduğu muhtarlığa şahsen başvurmak. 2) e-Devlet (turkiye.gov.tr) üzerinden online adres değişikliği hizmetini kullanmak. Online yöntemde e-Devlet şifresi veya mobil imza/e-imza ile kimlik doğrulama yapılması gerekmektedir.",
    },
    {
      question: "e-Devlet'te adres değişikliği nasıl yapılır?",
      answer:
        "turkiye.gov.tr adresine giriş yapıp arama bölümüne 'adres değişikliği' veya 'ikametgah' yazın. İçişleri Bakanlığı Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü'nün 'Adres Değişikliği Bildirimi' hizmetine girin. İl, ilçe, mahalle, cadde ve kapı numarası bilgilerini girerek işlemi tamamlayın. İşlem sonunda kayıt numarası alırsınız.",
    },
    {
      question: "Adres değişikliği için hangi belgeler gerekli?",
      answer:
        "Muhtarlığa başvurularda genellikle nüfus cüzdanı (TC kimlik kartı) yeterlidir. Kiracıysanız kira sözleşmesi, ev sahibiyseniz tapu fotokopisi istenebilir. e-Devlet üzerinden yapılan işlemlerde belge yüklemeye gerek yoktur; sistem NVI kayıtlarıyla doğrulama yapar.",
    },
    {
      question: "Adres değişikliği hangi kurumları etkiler?",
      answer:
        "İkametgah adresi güncellenmesi; SGK prim yazışmaları, vergi dairesi iletişim, seçmen kütüğü kaydı, araç tescil adresi (özellikle il değişikliğinde), pasaport ve sürücü belgesi yenileme başvuruları ile banka ve kurum bildirimlerini etkiler. Bu kurumların bir kısmı ADNKS'den otomatik beslenir; bir kısmına ayrıca bildirim yapılması gerekebilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Yeni bir eve veya şehre taşınmak heyecanlıdır; ancak beraberinde
        resmi bir yükümlülük getirir:{" "}
        <strong>adres değişikliği bildirimi.</strong> Bu işlemi
        zamanında yapmak, pek çok resmi yazışmanın doğru adrese
        ulaşmasını ve kayıtların güncel kalmasını sağlar.
      </p>

      <h2>Yasal Yükümlülük</h2>
      <p>
        5490 sayılı Nüfus Hizmetleri Kanunu'na göre Türkiye'de
        yerleşim yeri adresi değişen kişiler{" "}
        <strong>20 iş günü içinde</strong> yeni adreslerini
        bildirmekle yükümlüdür. Bu yükümlülük Adrese Dayalı Nüfus
        Kayıt Sistemi'nin (ADNKS) doğru tutulması için kritik önem
        taşır.
      </p>

      <h2>Yöntem 1 — Muhtarlık Başvurusu</h2>
      <p>
        Geleneksel yöntemde yeni adresinizin bağlı olduğu{" "}
        <strong>muhtarlığa</strong> şahsen gidilir. Gereken belgeler:
      </p>
      <ul>
        <li>TC kimlik kartı (nüfus cüzdanı)</li>
        <li>
          Kiracıysanız kira sözleşmesi; ev sahibiyseniz tapu belgesi
          (muhtara göre talep edilebilir)
        </li>
      </ul>
      <p>
        Muhtar, bildiriminizi ADNKS'ye işler. Aynı bina veya aynı
        mahalle içinde taşınmalarda da bildirim yapılması gerekmektedir.
      </p>

      <h2>Yöntem 2 — e-Devlet Üzerinden Online</h2>
      <ol>
        <li>
          <strong>turkiye.gov.tr</strong> adresine e-Devlet şifresi,
          mobil imza veya e-imza ile giriş yapın.
        </li>
        <li>
          Arama kutusuna <em>adres değişikliği bildirimi</em> yazın.
        </li>
        <li>
          <strong>İçişleri Bakanlığı / NVİ — Adres Değişikliği
          Bildirimi</strong> hizmetini açın.
        </li>
        <li>
          İl, ilçe, mahalle/köy, cadde/sokak ve kapı numarası
          bilgilerini girin.
        </li>
        <li>
          Formu onaylayın; sistem işlem numarası verir.
        </li>
      </ol>
      <p>
        Online yöntemde ek belge yüklemek gerekmez; sistem adres
        kaydını NVI veritabanına otomatik olarak işler.
      </p>

      <h2>Etkilenen Kurumlar ve Ek Bildirimler</h2>
      <p>
        ADNKS kaydının güncellenmesi bazı kurumları otomatik
        besler; ancak bazı kurumlar için ayrı bildirim gerekebilir:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kurum</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SGK (e-Devlet kaydı)</td>
            <td>ADNKS ile otomatik güncellenir</td>
          </tr>
          <tr>
            <td>Seçmen kütüğü (YSK)</td>
            <td>ADNKS ile otomatik güncellenir</td>
          </tr>
          <tr>
            <td>Vergi dairesi iletişim adresi</td>
            <td>Ayrıca beyan gerekebilir</td>
          </tr>
          <tr>
            <td>Araç tescil (farklı ile taşınma)</td>
            <td>Ayrıca trafik tescil işlemi gerekir</td>
          </tr>
          <tr>
            <td>Bankalar</td>
            <td>Her banka ayrı bildirim ister</td>
          </tr>
          <tr>
            <td>Sigorta poliçeleri</td>
            <td>Sigorta şirketine bildirilmeli</td>
          </tr>
        </tbody>
      </table>

      <h2>Sık Yapılan Hatalar</h2>
      <ul>
        <li>
          <strong>Taşındıktan çok sonra bildirim:</strong> 20 iş
          günlük yasal süre aşılmamalıdır.
        </li>
        <li>
          <strong>Eski adresin sorgulanmaması:</strong> Önceki
          adrese gelen tebligat geçerli sayılabilir; gerekirse
          eski adresteki muhtarlıkla da iletişime geçin.
        </li>
        <li>
          <strong>Aile bireylerini unutmak:</strong> Her aile
          üyesinin kaydı ayrı güncellenir; eşinizin ve reşit
          olmayan çocukların kaydı da güncellenmelidir.
        </li>
        <li>
          <strong>Araç tescilini ihmal:</strong> Farklı ile
          taşınıldığında araç tescil adresi güncellenmezse
          ceza tebligatları eski adrese gidebilir.
        </li>
      </ul>

      <p>
        e-Devlet üzerinden yapılabilecek diğer işlemler için:{" "}
        <a href="/blog/e-devlet-ne-yapilir-rehber">
          e-Devlet Şifresi Nasıl Alınır? Adım Adım Kılavuz
        </a>
      </p>
      <p>
        İkametgah belgesi almak için:{" "}
        <a href="/blog/ikametgah-belgesi-nasil-alinir">
          İkametgah Belgesi Nasıl Alınır? (e-Devlet + PTT)
        </a>
      </p>
    </>
  )
}
