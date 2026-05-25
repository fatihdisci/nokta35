import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-ilceleri-kac-ilce-var",
  title: "İzmir'in İlçeleri: 30 İlçe, Bölgeler ve Temel Bilgiler",
  description:
    "İzmir'de kaç ilçe var? 30 ilçenin tam listesi, coğrafi konumları, körfez içi ve dışı ilçeler ile İzmir Büyükşehir Belediyesi yönetim yapısı.",
  date: "2026-05-25",
  category: "İzmir Rehberi",
  summary:
    "İzmir, 30 ilçesiyle Türkiye'nin üçüncü büyük şehridir. 2012 yılında yürürlüğe giren Büyükşehir Belediyesi kanunuyla tüm köy ve beldeler mahalle statüsüne alındı; ilçe belediyeleri İBB çatısı altında yeniden yapılandı. Konak şehrin merkezi ve en yoğun ilçesidir.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de kaç ilçe var?",
      answer:
        "İzmir'de 30 ilçe bulunmaktadır. Bunlar: Aliağa, Balçova, Bayındır, Bayraklı, Bergama, Beydağ, Bornova, Buca, Çeşme, Çiğli, Dikili, Foça, Gaziemir, Güzelbahçe, Karabağlar, Karaburun, Karşıyaka, Kemalpaşa, Kınık, Kiraz, Konak, Menderes, Menemen, Narlıdere, Ödemiş, Seferihisar, Selçuk, Tire, Torbalı, Urla.",
    },
    {
      question: "İzmir'in en kalabalık ilçesi hangisi?",
      answer:
        "Nüfus büyüklüğü açısından Buca, Bornova, Karabağlar ve Konak öne çıkan ilçelerdir. Konak idari merkez olup şehrin tarihi ve ticari kalbini oluşturur. Buca ve Bornova ise üniversitelerin de etkisiyle kalabalık nüfuslu ve genç demografili ilçelerdir.",
    },
    {
      question: "İzmir Büyükşehir Belediyesi ile ilçe belediyeleri arasındaki fark nedir?",
      answer:
        "İzmir Büyükşehir Belediyesi (İBB) tüm ilin yönetiminden sorumludur: ulaşım (ESHOT, İZBAN, metro), su (İZSU), imar planları ve büyük altyapı projeleri gibi hizmetleri yürütür. Her ilçenin kendi belediyesi ise daha yerel hizmetleri (park, yol, temizlik, ruhsat) sağlar.",
    },
    {
      question: "İzmir'in yüzölçümü ne kadar?",
      answer:
        "İzmir ili yaklaşık 11.891 km² yüzölçümüyle Türkiye'nin büyük illeri arasındadır. En geniş ilçeler Bergama, Ödemiş ve Kiraz gibi iç kesimlerde yer alırken körfez kıyısındaki ilçeler genellikle daha küçük yüzölçümlüdür.",
    },
    {
      question: "İzmir'e sonradan katılan ilçeler var mı?",
      answer:
        "2012'de yürürlüğe giren 6360 sayılı Kanun, İzmir başta olmak üzere büyükşehirlerde tüm bucak ve köyleri mahalleye dönüştürdü; bu süreçle bazı bucaklar ilçe statüsüne geçti. Bayraklı, 2008 yılında Konak'tan ayrılarak ayrı bir ilçe oldu. Güncel idari yapı için Türkiye İstatistik Kurumu ve İçişleri Bakanlığı kaynakları esas alınmalıdır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir, <strong>30 ilçesi</strong> ve yaklaşık 4,4 milyonu aşan
        nüfusuyla Türkiye'nin İstanbul ve Ankara'dan sonra üçüncü büyük
        şehridir. Ege kıyısında uzanan ilçelerden Gediz havzasındaki iç
        kesimlere kadar geniş bir coğrafyayı kapsar.
      </p>

      <h2>30 İlçenin Tam Listesi</h2>

      <h3>Körfez ve Sahil İlçeleri</h3>
      <p>
        İzmir Körfezi çevresinde, şehrin kentsel dokusunu oluşturan
        yoğun nüfuslu ilçeler:
      </p>
      <ul>
        <li><strong>Konak</strong> — Şehrin idari ve tarihi merkezi; Kemeraltı Çarşısı, Saat Kulesi</li>
        <li><strong>Karşıyaka</strong> — Körfezin kuzey yakası; kentsel, modern</li>
        <li><strong>Bornova</strong> — Ege Üniversitesi merkezi; genç ve kalabalık</li>
        <li><strong>Buca</strong> — Dokuz Eylül Üniversitesi; hızlı gelişen ilçe</li>
        <li><strong>Karabağlar</strong> — Konak'ın güneyinde; en kalabalık ilçelerden</li>
        <li><strong>Bayraklı</strong> — Körfez kuzeyinde; İzmir'in yeni iş merkezi</li>
        <li><strong>Çiğli</strong> — Sanayi bölgesi; havalimanına komşu</li>
        <li><strong>Gaziemir</strong> — Adnan Menderes Havalimanı'nın bulunduğu ilçe</li>
        <li><strong>Balçova</strong> — Termal tesisleri ve kaplıcalarıyla tanınan</li>
        <li><strong>Narlıdere</strong> — Körfez batısında; sakin ve yeşil</li>
        <li><strong>Güzelbahçe</strong> — Körfez girişinde; plaj ve marinasıyla bilinen</li>
        <li><strong>Menderes</strong> — Körfez güneyinde; tarımsal ve sakin</li>
      </ul>

      <h3>Batı Kıyısı ve Yarımaday İlçeleri</h3>
      <ul>
        <li><strong>Çeşme</strong> — Kıyı turizmi; Ege'nin ünlü tatil merkezi</li>
        <li><strong>Urla</strong> — Bağcılık ve sahil; İzmir yakını yaşam alanı</li>
        <li><strong>Karaburun</strong> — Yarımada ucu; doğa koruma alanları</li>
        <li><strong>Foça</strong> — Antik kent; akdeniz foku habitatı</li>
        <li><strong>Seferihisar</strong> — Türkiye'nin ilk Cittaslow (Sakin Şehir) üyesi</li>
      </ul>

      <h3>Kuzey İlçeler</h3>
      <ul>
        <li><strong>Aliağa</strong> — Petrokimya ve sanayi tesisleri; Türkiye'nin önemli petrokimya merkezi</li>
        <li><strong>Menemen</strong> — Gediz deltası yakını; tarım</li>
        <li><strong>Kınık</strong> — Soma sınırına komşu; tarımsal</li>
        <li><strong>Dikili</strong> — Antandros antik kenti; tatil kıyısı</li>
        <li><strong>Bergama</strong> — UNESCO Dünya Mirası Pergamon antik kenti</li>
      </ul>

      <h3>İç Kesimler</h3>
      <ul>
        <li><strong>Kemalpaşa</strong> — Kiraz ve tarım ürünleriyle bilinen</li>
        <li><strong>Torbalı</strong> — Sanayi organize bölgesi; lojistik</li>
        <li><strong>Bayındır</strong> — Tütün ve zeytin tarımı</li>
        <li><strong>Tire</strong> — Tarihi çarşısı ve Tire-Ödemiş tarımsal dokusu</li>
        <li><strong>Ödemiş</strong> — Bozdağ kayak merkezi; Küçük Menderes vadisi</li>
        <li><strong>Beydağ</strong> — Baraj rezervuarı; ormanlık</li>
        <li><strong>Kiraz</strong> — Bozdağ etekleri; bağ ve meyve bahçeleri</li>
        <li><strong>Selçuk</strong> — Efes antik kenti; Meryemana; turizm</li>
      </ul>

      <h2>Yönetim Yapısı</h2>
      <p>
        2012 yılında yürürlüğe giren 6360 sayılı Kanun, İzmir'i
        gerçek anlamda bir <strong>büyükşehir sistemi</strong>ne dönüştürdü:
      </p>
      <ul>
        <li>
          Tüm köyler ve beldeler mahalle statüsüne alındı.
        </li>
        <li>
          30 ilçenin tamamında ayrı <strong>ilçe belediyesi</strong> kuruldu
          veya mevcut olanlar yeniden yapılandırıldı.
        </li>
        <li>
          Ulaşım, su, imar ve büyük altyapı hizmetleri{" "}
          <strong>İzmir Büyükşehir Belediyesi (İBB)</strong> tarafından
          yürütülmektedir.
        </li>
      </ul>

      <h2>Coğrafi Boyut</h2>
      <p>
        İzmir ili yaklaşık <strong>11.891 km²</strong> yüzölçümüne sahiptir.
        Batıda Ege kıyısından doğuda Bozdağ eteklerine kadar uzanır.
        Bergama, Ödemiş ve Kiraz en geniş yüzölçümlü ilçeler arasındayken
        Balçova ve Güzelbahçe en küçük ilçeler arasındadır.
      </p>

      <p>
        İzmir genel rehberi için:{" "}
        <a href="/blog/izmir-rehberi-cografya-iklim-ilceler">
          İzmir Rehberi: Coğrafya, İklim, İlçeler
        </a>
      </p>
      <p>
        İzmir iklimi için:{" "}
        <a href="/blog/izmir-hava-iklim-ozellikleri">
          İzmir'de Hava Nasıl? İklim Özellikleri ve Mevsimler
        </a>
      </p>
    </>
  )
}
