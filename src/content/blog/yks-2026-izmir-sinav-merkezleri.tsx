import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "yks-2026-izmir-sinav-merkezleri",
  title: "YKS 2026 İzmir: Sınav Tarihi, Merkezi Bulma ve Ulaşım Rehberi",
  description:
    "YKS 2026 İzmir'de ne zaman? 20–21 Haziran 2026 tarihli üniversite sınavında sınav yerinizi nasıl öğrenirsiniz, sınav günü ulaşım nasıl planlanır?",
  date: "2026-05-25",
  category: "İzmir Rehberi",
  summary:
    "2026 Yükseköğretim Kurumları Sınavı (YKS), TYT ve AYT olmak üzere 20–21 Haziran 2026 tarihlerinde yapılacaktır. Adaylar sınav merkezlerini ÖSYM'nin aday işlemleri sistemi üzerinden öğrenir. Sınav günü İzmir'de toplu taşıma kullanımı önerilir; erken çıkış kritiktir.",
  readTime: 5,
  faq: [
    {
      question: "YKS 2026 ne zaman yapılıyor?",
      answer:
        "2026 Yükseköğretim Kurumları Sınavı (YKS); TYT (Temel Yeterlilik Testi) 20 Haziran 2026 Cumartesi, AYT (Alan Yeterlilik Testi) ve YDT (Yabancı Dil Testi) ise 21 Haziran 2026 Pazar günü yapılacaktır. Kesin tarih ve saat bilgisi için ÖSYM'nin resmi kılavuzunu esas alın.",
    },
    {
      question: "YKS sınav yerim nerede, nasıl öğrenirim?",
      answer:
        "Sınav merkezinizi ÖSYM'nin Aday İşlemleri Sistemi üzerinden (ais.osym.gov.tr) T.C. kimlik numaranız ve şifreyle sorgulayabilirsiniz. Sınav yeri bilgisi sınav tarihinden yaklaşık 10–14 gün önce sisteme yüklenir. Giriş belgenizi mutlaka çıkarın ve sınav merkezi adresini doğrulayın.",
    },
    {
      question: "Sınav sabahı İzmir'de ulaşım nasıl olur?",
      answer:
        "Cumartesi–Pazar sabahları ESHOT, metro ve İZBAN hizmet verir. Hafta sonu tarifeleriyle çalışırlar; sefer sıklığı hafta içine göre düşük olabilir. Erken kalkıp en az 45–60 dakika önceden sınav merkezinde olmak hedeflenmelidir. Araçla gelenlere merkez çevresinde park yeri bulmak güçleşebilir.",
    },
    {
      question: "TYT ve AYT sınav saatleri ne zaman başlar?",
      answer:
        "ÖSYM her yıl sınav uygulama kılavuzunda kesin saatleri yayımlar; bu saatler yıldan yıla değişebilir. Genel uygulama olarak TYT sabah (saat 10:00–10:15 bandı), AYT de ertesi gün sabah benzer saatte başlar; ancak 2026 için kesin saat giriş belgenizde yazar. ÖSYM kılavuzunu ve giriş belgesini esas alın.",
    },
    {
      question: "YKS'ye girerken yanımda ne bulundurmam gerekiyor?",
      answer:
        "Zorunlu belgeler: T.C. kimlik kartı veya nüfus cüzdanı (fotoğraflı, geçerli) ve ÖSYM sınav giriş belgesi. Malzeme: kurşun kalem (en az 2), silgi, kalemtıraş. Cep telefonu, akıllı saat, hesap makinesi ve her türlü elektronik cihaz kesinlikle yasaktır. Cihaz tespitinde sınav geçersiz sayılır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Üniversiteye giriş sürecinin en kritik adımı olan{" "}
        <strong>Yükseköğretim Kurumları Sınavı (YKS) 2026</strong>,
        iki gün boyunca yapılacaktır:{" "}
        <strong>20 Haziran 2026 Cumartesi (TYT)</strong> ve{" "}
        <strong>21 Haziran 2026 Pazar (AYT / YDT)</strong>.
        Sınav günü ulaşımı ve hazırlığı iyi planlamak, gereksiz
        stresi önler.
      </p>

      <h2>Sınav Tarihleri</h2>
      <ul>
        <li>
          <strong>TYT — Temel Yeterlilik Testi:</strong>{" "}
          20 Haziran 2026, Cumartesi
        </li>
        <li>
          <strong>AYT — Alan Yeterlilik Testi:</strong>{" "}
          21 Haziran 2026, Pazar
        </li>
        <li>
          <strong>YDT — Yabancı Dil Testi:</strong>{" "}
          21 Haziran 2026, Pazar (AYT ile aynı gün, farklı oturum)
        </li>
      </ul>
      <p>
        Sınav saatleri için ÖSYM'nin yayımladığı{" "}
        <strong>YKS Kılavuzu</strong>'nu ve giriş belgenizi inceleyin.
        Giriş belgesinde yazan saatten geç gelenlere kapı açılmaz.
      </p>

      <h2>Sınav Merkezinizi Nasıl Öğrenirsiniz?</h2>
      <p>
        ÖSYM, sınav merkezlerini sınav tarihinden yaklaşık{" "}
        <strong>10–14 gün önce</strong> sisteme yükler.
      </p>
      <ol>
        <li>
          <strong>ais.osym.gov.tr</strong> adresine gidin (ÖSYM Aday
          İşlemleri Sistemi).
        </li>
        <li>
          T.C. kimlik numaranız ve ÖSYM şifrenizle giriş yapın.
        </li>
        <li>
          "Sınav Giriş Belgesi" bölümünden belgenizi çıkarın ve
          sınav merkezi adresini not edin.
        </li>
        <li>
          Adresi haritada arayın; güzergahı önceden planlayın.
        </li>
      </ol>

      <h2>İzmir'de Sınav Günü Ulaşım</h2>

      <h3>Toplu Taşıma (Önerilen)</h3>
      <p>
        İzmir'de YKS günü tüm toplu taşıma hatları çalışmaktadır:
      </p>
      <ul>
        <li>
          <strong>ESHOT:</strong> Hafta sonu tarifesiyle tüm ilçelere
          sefer yapar. Sınav saatinden en az 60–75 dakika önce
          binmeniz önerilir.
        </li>
        <li>
          <strong>İzmir Metrosu:</strong> Fahrettin Altay–Evka 3
          hattı hafta sonu programıyla işler.
        </li>
        <li>
          <strong>İZBAN:</strong> Aliağa–Selçuk hattında istasyona
          yakın merkezler için uygun seçenek.
        </li>
        <li>
          <strong>İZDENİZ:</strong> Karşıyaka, Bostanlı, Foça
          güzergahlarına ulaşmak için vapur da kullanılabilir.
        </li>
      </ul>

      <h3>Özel Araçla Gelen Adaylar</h3>
      <p>
        Cumartesi–Pazar sabahları sınav merkezi çevreleri yoğunlaşır.
        Park sorunu yaşamamak için sınav merkezine uzak bir noktaya
        araç bırakıp oradan yürümek veya toplu taşımaya geçmek pratik
        olabilir. <strong>En az 45–60 dakika erken</strong> yola çıkın.
      </p>

      <h2>Sınava Girerken Yanınızda Bulundurmanız Gerekenler</h2>
      <p>
        <strong>Zorunlu belgeler:</strong>
      </p>
      <ul>
        <li>
          T.C. kimlik kartı veya nüfus cüzdanı (fotoğraflı, geçerli)
        </li>
        <li>
          ÖSYM sınav giriş belgesi (çıktı veya dijital kabul durumunu
          ÖSYM kılavuzundan kontrol edin)
        </li>
      </ul>
      <p>
        <strong>Malzemeler:</strong>
      </p>
      <ul>
        <li>Kurşun kalem — en az 2 adet, ucu sivri</li>
        <li>Silgi — iz bırakmayan</li>
        <li>Kalemtıraş</li>
        <li>Tükenmez kalem (yedek)</li>
      </ul>
      <p>
        <strong>Kesinlikle yasak:</strong> Cep telefonu, akıllı saat,
        kablosuz kulaklık, hesap makinesi ve tüm elektronik cihazlar.
        Tespit durumunda sınav geçersiz sayılır.
      </p>

      <h2>İki Gün Sınavda Dikkat Edilecekler</h2>
      <ul>
        <li>
          <strong>TYT ve AYT arasında 1 gün var:</strong> Cumartesi
          akşamı yoğun tekrar yerine dinlenmeyi önceliklendirin.
        </li>
        <li>
          <strong>Sınav merkezleri farklı olabilir:</strong> Bazı
          adayların TYT ve AYT merkezleri aynı yer olmayabilir;
          her iki giriş belgesini ayrı ayrı kontrol edin.
        </li>
        <li>
          <strong>Hava sıcaklığı:</strong> Haziran sonu İzmir'de
          25–35 °C'ye ulaşabilir. Bol su için, salonlar klimalı
          olsa da ince giysi tercih edin.
        </li>
        <li>
          <strong>Sabah kahvaltısı:</strong> Her iki sabah da hafif
          ve dengeli beslenin; sınav boyunca enerji sürekliliği önemlidir.
        </li>
      </ul>

      <h2>Resmi Kaynaklar</h2>
      <ul>
        <li>
          <strong>ÖSYM resmi sitesi (osym.gov.tr)</strong> — YKS
          kılavuzu, sınav takvimleri
        </li>
        <li>
          <strong>ais.osym.gov.tr</strong> — Aday İşlemleri Sistemi,
          giriş belgesi
        </li>
        <li>
          <strong>179</strong> — İzmir ulaşım bilgi hattı
        </li>
      </ul>

      <p>
        LGS 2026 rehberi için:{" "}
        <a href="/blog/lgs-2026-izmir-sinav-ulasim-rehberi">
          LGS 2026 İzmir: Sınav Günü Ulaşım ve Hazırlık Rehberi
        </a>
      </p>
      <p>
        İzmir toplu taşıma için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi
        </a>
      </p>
    </>
  )
}
