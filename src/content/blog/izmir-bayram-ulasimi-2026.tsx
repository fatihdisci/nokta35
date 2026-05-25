import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-bayram-ulasimi-2026",
  title: "İzmir Bayram Ulaşımı 2026: İZBAN, ESHOT ve İZDENİZ Sefer Bilgileri",
  description:
    "Kurban Bayramı 2026'da İzmir'de toplu ulaşım nasıl çalışır? İZBAN seferleri, ESHOT otobüsleri, metro ve İZDENİZ feribot bilgileri.",
  date: "2026-05-25",
  category: "Ulaşım",
  summary:
    "Kurban Bayramı (27–30 Mayıs 2026) boyunca İzmir'de İZBAN, ESHOT, metro ve İZDENİZ hizmet vermektedir. Resmi tatil günlerinde toplu ulaşımda indirim veya ücretsiz sefer uygulanıp uygulanmadığını güncel olarak İZTEK, ESHOT ve İZDENİZ resmi kanallarından teyit edin.",
  readTime: 4,
  faq: [
    {
      question: "Kurban Bayramı'nda İZBAN çalışıyor mu?",
      answer:
        "İZBAN (İzmir Banliyö Tren Sistemi) resmi tatil günlerinde sefer düzenine devam etmektedir. Ancak sefer sıklığı hafta içi normal programından farklı olabilir; bayram günü için özel tarifede değişiklik olup olmadığını TCDD Taşımacılık veya İZBAN resmi kanallarından kontrol edin.",
    },
    {
      question: "ESHOT bayram günlerinde ücretsiz mi?",
      answer:
        "Önceki yıllarda Kurban ve Ramazan Bayramı'nın birinci günü ESHOT otobüslerinde ücretsiz ya da indirimli seyahat uygulandığı görülmüştür. Ancak bu uygulama belediye kararına göre yıldan yıla değişebilir. 2026 Kurban Bayramı için güncel kararı ESHOT resmi sitesinden veya 179 (İzmir Ulaşım Hattı) üzerinden öğrenin.",
    },
    {
      question: "İZDENİZ feribot seferleri bayramda yapılıyor mu?",
      answer:
        "İZDENİZ deniz ulaşımı bayram günlerinde tatil programıyla çalışır; bazı hatlar sefer sayısını azaltabilir. Özellikle Urla, Foça, Mordoğan ve Karşıyaka gibi hatlarda bayram tarifesi farklı olabilir. Güncel tarifeler için İZDENİZ resmi sitesini kontrol edin.",
    },
    {
      question: "Bayramda metro ve tramvay çalışıyor mu?",
      answer:
        "İzmir Metrosu ve Konak–Alsancak tramvayı resmi tatil günlerinde hizmet vermeye devam eder. Sefer aralığı tatil programına göre düzenlenebilir. Güncel saat bilgisi için İZTEK veya metro resmi kanallarına başvurun.",
    },
    {
      question: "Bayram günü ulaşımda İzmirkart çalışır mı?",
      answer:
        "İzmirkart toplu ulaşımda her gün geçerlidir; bayramlarda da kullanılabilir. Ancak ücret değişikliği veya ücretsiz sefer uygulaması varsa İzmirkart'a da yansıyabilir. Bakiye kontrolü için İzmirkart uygulamasını kullanabilirsiniz.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Kurban Bayramı (27–30 Mayıs 2026) süresince İzmir'de toplu ulaşım
        seçenekleri çalışmaya devam etmektedir. Aşağıda başlıca ulaşım
        hatları için bayram dönemine özel bilgiler ve resmi kaynaklar
        derlenmiştir.
      </p>

      <h2>İZBAN</h2>
      <p>
        İzmir Banliyö Tren Sistemi (İZBAN), Aliağa–Selçuk arasını 40
        istasyonla birbirine bağlar. Resmi tatil günlerinde sefer düzeni
        devam etmekle birlikte bayram tarifesiyle çalışabilir.
      </p>
      <ul>
        <li>
          <strong>Sefer sıklığı:</strong> Normal hafta içi programından farklı
          olabilir; erken saatlerde veya gece geç saatlerde sefer sıklığı
          azalabilir.
        </li>
        <li>
          <strong>Ücret:</strong> Güncel tarife için{" "}
          <a href="/blog/izban-nedir-istasyonlar-guzergah">İZBAN hakkında</a>{" "}
          yazımıza ve İZBAN resmi kanallarına bakın.
        </li>
      </ul>

      <h2>ESHOT Otobüsleri</h2>
      <p>
        ESHOT, İzmir Büyükşehir Belediyesi'ne bağlı otobüs işletmecisidir.
        Bayram döneminde:
      </p>
      <ul>
        <li>
          Pek çok hat yoğun güzergâhlarda sefer vermeyi sürdürür.
        </li>
        <li>
          Önceki yıllarda bayramın birinci günü ücretsiz veya indirimli sefer
          uygulaması yapıldığı görülmüştür; ancak bu uygulama her yıl
          yeniden karara bağlanır.
        </li>
        <li>
          Güncel karar için: <strong>ESHOT resmi sitesi</strong> veya{" "}
          <strong>179 İzmir Ulaşım Hattı</strong>.
        </li>
      </ul>

      <h2>İzmir Metrosu ve Tramvay</h2>
      <p>
        İzmir Metrosu (Fahrettin Altay–Evka 3) ve Konak–Alsancak tramvayı
        bayram günlerinde hizmet verir. Sefer aralıkları gün içinde farklılık
        gösterebilir.
      </p>

      <h2>İZDENİZ Deniz Ulaşımı</h2>
      <p>
        İzmir körfezini ve çevresini birbirine bağlayan İZDENİZ feribotları
        bayram tatilinde tatil tarifesiyle çalışır. Başlıca hatlar:
      </p>
      <ul>
        <li>Konak – Karşıyaka</li>
        <li>Konak – Alsancak – Bostanlı</li>
        <li>Konak – Foça</li>
        <li>Urla – Mordoğan</li>
      </ul>
      <p>
        Sefer saatleri için İZDENİZ resmi web sitesini veya{" "}
        <strong>179 hattını</strong> arayın.
      </p>

      <h2>Resmi Kaynaklar</h2>
      <ul>
        <li>
          <strong>179</strong> — İzmir Büyükşehir Belediyesi ulaşım danışma hattı
        </li>
        <li>
          <strong>İZTEK</strong> resmi sitesi — metro, tramvay, İZBAN entegre
          bilgi
        </li>
        <li>
          <strong>ESHOT.gov.tr</strong> — otobüs tarife ve güzergâh bilgisi
        </li>
        <li>
          <strong>İZDENİZ resmi sitesi</strong> — deniz ulaşımı tarife
        </li>
      </ul>

      <h2>Araç Kiralama ve Taksi</h2>
      <p>
        Bayramda şehir içi trafiği sabah saatlerinde kurban kesimhanelerine
        yönelik yoğunlaşabilir. Özellikle mezbaha çevrelerinde trafik
        sıkışıklığı oluşabilir; alternatif güzergâh planlaması yapılması
        önerilir.
      </p>

      <p>
        İzmir ulaşım rehberi için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi
        </a>
      </p>
      <p>
        İzmirkart hakkında:{" "}
        <a href="/blog/izmirkart-nedir-nasil-kullanilir">
          İzmirkart Nedir, Nasıl Kullanılır?
        </a>
      </p>
    </>
  )
}
