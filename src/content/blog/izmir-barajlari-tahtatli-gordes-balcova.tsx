import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-barajlari-tahtatli-gordes-balcova",
  title: "İzmir'in Barajları: Tahtalı, Gördes, Balçova ve İçme Suyu Sistemi",
  description:
    "İzmir'in içme suyunu sağlayan barajlar: Tahtalı, Gördes, Balçova, Kemer ve Düzce barajlarının konumu, işlevi, doluluk takibi ve kuraklıkla ilişkisi.",
  date: "2026-05-24",
  category: "Su",
  summary:
    "İzmir'in içme suyu, İZSU tarafından işletilen birden fazla baraj sisteminden sağlanır. Bu barajların en büyüğü olarak bilinen Tahtalı Barajı, şehrin Avrupa yakasına hizmet eder. Güncel doluluk oranları İZSU ve nokta35.com üzerinden takip edilebilir.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'in içme suyunu hangi barajlar sağlar?",
      answer:
        "İzmir'in içme suyu, İZSU (İzmir Su ve Kanalizasyon İdaresi) tarafından işletilen birden fazla barajdan karşılanır. Bunların başında Seferihisar ilçesindeki Tahtalı Barajı, Gördes Barajı, Balçova Barajı, Kemer Barajı ve Düzce Barajı gelir. Her baraj farklı ilçelere ve bölgelere hizmet eder.",
    },
    {
      question: "İzmir barajlarının doluluk oranlarını nereden öğrenebilirim?",
      answer:
        "İzmir barajlarının güncel doluluk oranları İZSU (izsu.gov.tr) tarafından düzenli olarak yayınlanmaktadır. nokta35.com'un ana sayfasında ve baraj detay sayfalarında da İZSU API'sinden alınan anlık doluluk verileri gösterilmektedir.",
    },
    {
      question: "İzmir'in en büyük barajı hangisi?",
      answer:
        "Tahtalı Barajı, Seferihisar ilçesinde Tahtalı Çayı üzerinde yer alan ve İzmir için en büyük içme suyu kaynağı olarak bilinen tesistir. Şehrin önemli bir bölümünün içme suyunu karşılar. Kesin kapasite verileri için İZSU'nun resmi yayınlarına başvurulması önerilir.",
    },
    {
      question: "Kuraklık İzmir'in barajlarını nasıl etkiler?",
      answer:
        "İzmir barajları ağırlıklı olarak kış-ilkbahar yağışlarıyla beslenir. Uzun kurak dönemler rezervuar doluluk oranlarını düşürür ve zorunlu su tasarrufu önlemlerini gündeme getirir. IPCC raporlarına göre Akdeniz havzası, iklim değişikliği kaynaklı kuraklık riskinin en yüksek olduğu bölgeler arasında yer almaktadır.",
    },
    {
      question: "İzmir'de su kesintileri neden yaşanır?",
      answer:
        "Su kesintileri başlıca iki nedenden kaynaklanır: arıza kaynaklı kesintiler (boru patlağı, onarım çalışmaları) ve planlı bakım çalışmaları. İZSU aktif su kesintisi bilgilerini kendi sistemi üzerinden duyurmaktadır; nokta35.com da bu verileri anlık olarak göstermektedir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir, büyük nüfusu ve geniş coğrafi yapısı nedeniyle içme suyunu
        tek bir kaynaktan değil, farklı havzalardaki birden fazla barajdan
        sağlar. Bu sistemin yönetimi <strong>İZSU</strong> (İzmir Su ve
        Kanalizasyon İdaresi Genel Müdürlüğü) tarafından yürütülmektedir.
        Aşağıda İzmir'in içme suyu sisteminin bel kemiğini oluşturan
        başlıca barajları tanıtıyoruz.
      </p>
      <p>
        <em>
          Not: Baraj kapasiteleri ve kesin doluluk rakamları yılın dönemine
          ve yağış koşullarına göre değişir. Güncel veriler için{" "}
          <a href="/su-baraj">nokta35.com Baraj Sayfası</a>'nı veya İZSU'nun
          resmi yayınlarını takip ediniz.
        </em>
      </p>

      <h2>İzmir'in İçme Suyu Barajları</h2>

      <h3>Tahtalı Barajı</h3>
      <p>
        Seferihisar ilçesinde, Tahtalı Çayı üzerinde yer alan Tahtalı Barajı;
        İzmir'in en büyük içme suyu kaynağı olarak bilinir. Şehrin batı ve
        güneybatı kesimlerinin içme suyu temininde kritik rol oynar. Baraj
        rezervuarı aynı zamanda bölgenin doğal yaşam alanlarıyla çevrilmiş
        bir su havzasıdır.
      </p>

      <h3>Gördes Barajı</h3>
      <p>
        Manisa il sınırları yakınında Gördes Çayı üzerinde bulunan Gördes
        Barajı, yapılan su transfer altyapısıyla İzmir'in önemli içme suyu
        kaynaklarından birini oluşturur. Kapasitesi sayesinde kuraklık
        dönemlerinde sisteme destek sağlar.
      </p>

      <h3>Balçova Barajı</h3>
      <p>
        İzmir'in Balçova ilçesi yakınında yer alan bu baraj; şehre yakınlığı
        nedeniyle hızlı müdahale imkânı sunan bir içme suyu tesisidir.
        Görece küçük kapasiteli olmakla birlikte yerel içme suyu sistemi
        içindeki yeri önemlidir.
      </p>

      <h3>Kemer Barajı</h3>
      <p>
        Torbalı ilçesi çevresinde konumlanan Kemer Barajı; Gediz ve Küçük
        Menderes havzaları arasındaki konumuyla İzmir'in güney ilçelerine
        hizmet eden bir tesistir. Hem içme suyu hem sulama amaçlı kullanılır.
      </p>

      <h3>Düzce Barajı</h3>
      <p>
        Menderes ilçesi yakınında, İzmir havzasında yer alan Düzce Barajı;
        İZSU sistemi içinde yedek kapasite ve destek işlevi gören bir
        tesistir.
      </p>

      <h2>İzmir Barajları Hangi İşleve Hizmet Eder?</h2>
      <p>
        İzmir'deki barajlar ağırlıklı olarak{" "}
        <strong>içme suyu teminine</strong> odaklanmıştır; bu yönüyle
        Türkiye'nin enerji odaklı büyük barajlarından (Atatürk, Keban gibi)
        işlev olarak ayrılır. Bununla birlikte bazı tesisler kısmi sulama
        desteği de sağlayabilir.
      </p>
      <p>
        Barajların temel işlevleri hakkında kapsamlı bilgi için:{" "}
        <a href="/blog/baraj-doluluk-orani-nedir-neden-onemli">
          Baraj Doluluk Oranı Nedir? Neden Önemli?
        </a>
      </p>

      <h2>Doluluk Takibi: İZSU ve nokta35</h2>
      <p>
        İzmir barajlarının güncel doluluk durumu İZSU tarafından düzenli
        aralıklarla yayınlanır. nokta35.com bu veriyi doğrudan İZSU API'sinden
        alarak ana sayfada ve baraj detay sayfalarında anlık olarak gösterir:
      </p>
      <ul>
        <li>Doluluk yüzdesi</li>
        <li>Güncel su yüksekliği (m)</li>
        <li>Toplam ve mevcut rezervuar hacmi</li>
      </ul>
      <p>
        Anlık veriye ulaşmak için:{" "}
        <a href="/su-baraj">nokta35.com → Su &amp; Baraj</a>
      </p>

      <h2>Kuraklık ve İzmir Barajları</h2>
      <p>
        İzmir barajları yağış rejiminin düzensiz olduğu Akdeniz iklim
        kuşağında yer alır. Rezervuarlar kış ve erken ilkbahar yağışlarıyla
        dolar; yaz aylarında yağış büyük ölçüde kesilir. Bu yapı, uzun
        kurak dönemlerde baraj seviyelerinin hızla düşmesine neden olabilir.
      </p>
      <p>
        IPCC'nin güncel raporlarına göre Akdeniz havzası, küresel ısınmanın
        kuraklık üzerindeki etkisinin en belirgin hissedileceği bölgeler
        arasındadır. Kuraklığın ne olduğunu ve nasıl ölçüldüğünü anlamak
        için:{" "}
        <a href="/blog/kuraklik-nedir-nasil-olculur-siniflandirilir">
          Kuraklık Nedir? Nasıl Ölçülür ve Sınıflandırılır?
        </a>
      </p>

      <h2>İzmir'de Su Kesintileri</h2>
      <p>
        Su kesintileri genellikle iki nedenden kaynaklanır:
      </p>
      <ul>
        <li>
          <strong>Arıza kaynaklı kesintiler:</strong> Boru patlağı, pompa
          arızası veya acil onarım çalışmaları
        </li>
        <li>
          <strong>Planlı bakım kesintileri:</strong> Şebeke bakımı için
          önceden duyurulan kesintiler
        </li>
      </ul>
      <p>
        İZSU, aktif kesintileri kendi sistemi üzerinden duyurmaktadır.
        nokta35.com'da da anlık kesinti bilgisi gösterilmektedir:{" "}
        <a href="/">Anasayfa → Su Kesintisi</a>
      </p>
    </>
  )
}
