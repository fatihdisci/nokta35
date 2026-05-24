import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-zemin-sivilasma-riski",
  title: "İzmir Zemin Sıvılaşma Riski: Hangi İlçeler Tehlike Altında?",
  description:
    "Zemin sıvılaşması nedir, İzmir'de hangi bölgeler risk altındadır? 2020 depreminde yaşananlar, Bayraklı ve körfez düzlükleri, AFAD zemin haritası sorgulama rehberi.",
  date: "2026-05-24",
  category: "Deprem & Afet",
  summary:
    "Zemin sıvılaşması, deprem sırasında suya doygun kumlu zeminlerin geçici olarak akışkan hale gelmesidir. 2020 İzmir depremi bu riski somut biçimde ortaya koymuştur. Körfez çevresi alüvyal düzlükler, Bayraklı ve Bornova ovaları yüksek risk bölgeleri olarak araştırmalarda öne çıkmaktadır. AFAD zemin haritası resmi sorgulama kaynağıdır.",
  readTime: 6,
  faq: [
    {
      question: "Zemin sıvılaşması nedir?",
      answer:
        "Zemin sıvılaşması, deprem sırasında suya doygun, gevşek kumlu ya da siltli zeminlerde katı granüllerin bağlantısını yitirerek zemin kütlesinin kısa süreliğine sıvı gibi davranmasıdır. Bu süreçte zemin taşıma kapasitesini yitirir; üstündeki yapılar batabilir, devrilebilir ya da hasar görebilir.",
    },
    {
      question: "2020 İzmir depremi sıvılaşmayı nasıl etkiledi?",
      answer:
        "30 Ekim 2020'de meydana gelen Mw 6.6 büyüklüğündeki İzmir-Seferihisar depremi, Bayraklı başta olmak üzere körfez çevresi ilçelerde ciddi yapısal hasara yol açtı. Araştırmacılar ve AFAD raporları, bölgedeki dolgu ve alüvyal zeminlerin sıvılaşmaya katkıda bulunduğunu belgeledi. 2020 depremi sonrası akademik çalışmalar İzmir'deki zemin riskini daha ayrıntılı haritalandırdı.",
    },
    {
      question: "İzmir'de en riskli ilçeler hangileri?",
      answer:
        "Akademik literatür ve AFAD çalışmaları İzmir'de sıvılaşma açısından en dikkat çeken bölgeler olarak körfez kıyısı boyunca uzanan alüvyal düzlükleri (özellikle Bayraklı, Bornova ovasının düşük kesitleri, Çiğli kıyı şeridi), tarihi dolgu alanlarını ve akarsu taşkın ovalarını işaret etmektedir. Kesin ve güncel bölge tespiti için AFAD'ın resmi haritaları esas alınmalıdır.",
    },
    {
      question: "Zemin sıvılaşma riskini nasıl sorgularım?",
      answer:
        "AFAD'ın (Afet ve Acil Durum Yönetimi Başkanlığı) Türkiye Deprem Tehlike Haritaları ve zemin bilgisi platformları üzerinden adres bazlı sorgulama yapılabilir. Ayrıca yerel belediyelerin imar ve planlama müdürlükleri zemin etüt raporlarına erişim imkânı sunabilir. Herhangi bir yapı için kapsamlı zemin etüdü jeoteknik mühendisi tarafından yapılmalıdır.",
    },
    {
      question: "Zemin sıvılaşmasına karşı bina güçlendirmesi mümkün mü?",
      answer:
        "Evet. Zemin iyileştirme teknikleri (kompaksiyon, jet grouting, derin kazık temeller) zemin sıvılaşma riskini azaltabilir. Mevcut binalarda kapsamlı güçlendirme gerekebilir. Her bina için uygun yöntemi belirlemek üzere lisanslı jeoteknik mühendisi veya inşaat mühendisinden görüş alınması şarttır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Deprem hazırlığında bina yapısı kadar <strong>zeminin ne tür
        malzemeden oluştuğu</strong> da belirleyicidir. Zemin sıvılaşması,
        İzmir gibi körfez kenarında alüvyal düzlüklerde kurulu bir
        şehir için özellikle kritik bir risktir. 2020 depreminin
        ardından bu konu kamuoyunda çok daha geniş yer bulmaya başladı.
      </p>

      <h2>Zemin Sıvılaşması Nedir?</h2>
      <p>
        <strong>Zemin sıvılaşması (liquefaction)</strong>, deprem
        sırasında titreşime maruz kalan suya doygun, gevşek kumlu
        ya da siltli zeminlerde meydana gelir. Titreşim, zemin
        granülleri arasındaki boşluk suyunda aşırı basınç oluşturur;
        zemin granülleri birbirinden ayrılarak zemin kütlesi geçici
        olarak sıvı gibi davranır.
      </p>
      <p>
        Bu süreçte:
      </p>
      <ul>
        <li>Zemin taşıma kapasitesini yitirir</li>
        <li>Üstündeki yapılar batar, devrilir veya yanal hareket eder</li>
        <li>Yollar, borular ve alt yapı ciddi hasar görebilir</li>
        <li>Zemin yüzeyinde çamur fışkırması gözlenebilir</li>
      </ul>
      <p>
        Sıvılaşma riski; <strong>yüksek yer altı suyu seviyesi,
        gevşek granüler zemin ve deprem büyüklüğü</strong> bir arada
        bulunduğunda artar.
      </p>

      <h2>İzmir'de Sıvılaşma Riski: Neden Yüksek?</h2>
      <p>
        İzmir, fiziksel coğrafyası nedeniyle zemin sıvılaşmasına
        yatkın bölgeler barındırmaktadır:
      </p>
      <ul>
        <li>
          <strong>Alüvyal dolgu zeminler:</strong> İzmir Körfezi
          çevresindeki düzlükler, Gediz ve Meles nehirlerinin
          taşıdığı malzemenin birikmesiyle oluşmuş genç, gevşek
          alüvyal zemin üzerindedir.
        </li>
        <li>
          <strong>Tarihi dolgu alanlar:</strong> Körfez kıyısında
          deniz doldurularak elde edilmiş yapılaşma alanları, doğal
          kayaya oturan yapılara kıyasla daha yüksek sıvılaşma
          riskine sahiptir.
        </li>
        <li>
          <strong>Yüksek yer altı suyu seviyesi:</strong> Kıyı
          yakınında ve nehir ovalarında yer altı suyu yüzeye yakın
          olduğundan sıvılaşma koşulları kolayca oluşabilir.
        </li>
        <li>
          <strong>Aktif fay hatları:</strong> Körfez içi faylar
          ve yakın bölgedeki Seferihisar fayı gibi aktif yapılar,
          güçlü deprem üretme kapasitesi taşır.
        </li>
      </ul>

      <h2>2020 İzmir Depremi ve Sıvılaşma</h2>
      <p>
        30 Ekim 2020'de gerçekleşen <strong>Mw 6.6 büyüklüğündeki
        İzmir depremi</strong> (merkez üssü Seferihisar açıkları),
        başta Bayraklı ilçesi olmak üzere körfez kıyısında ağır yapısal
        hasara yol açtı. Yüksek katlı binaların göçmesinde zemin
        koşullarının belirleyici rol oynadığı akademik çalışmalar
        ve resmi raporlarla ortaya konuldu.
      </p>
      <p>
        Deprem sonrası yürütülen saha çalışmalarında:
      </p>
      <ul>
        <li>Bazı bölgelerde zemin çökmesi ve yatay kayma</li>
        <li>Yol yüzeyinde çatlaklar ve yer yer çamur fışkırması</li>
        <li>Yer altı altyapısında (boru hatları) hasar</li>
      </ul>
      <p>
        sıvılaşmaya bağlı belirtiler olarak belgelendi. İzmir Katip
        Çelebi Üniversitesi, Dokuz Eylül Üniversitesi ve AFAD
        bünyesindeki araştırmacılar bölgeyi çeşitli yöntemlerle
        haritalandırdı.
      </p>

      <h2>Öne Çıkan Riskli Bölgeler</h2>
      <p>
        Araştırma literatürü, İzmir'de zemin sıvılaşması açısından
        özellikle dikkat gerektiren bölgeler olarak şunları ortaya
        koymaktadır:
      </p>
      <ul>
        <li>
          <strong>Bayraklı:</strong> 2020 depreminde en fazla yapısal
          hasar yaşanan ilçe olup alüvyal dolgu zemin baskındır.
        </li>
        <li>
          <strong>Bornova ovası (alt kotlar):</strong> Meles Çayı
          taşkın ovası üzerindeki kesimlerde zemin koşulları dikkat
          gerektirmektedir.
        </li>
        <li>
          <strong>Çiğli kıyı şeridi:</strong> Körfez dolgusu üzerinde
          kurulu kesimlerde yüksek risk tespit edilmiştir.
        </li>
        <li>
          <strong>Karşıyaka kıyı düzlükleri:</strong> Kısmen dolgu
          zemin niteliğindedir.
        </li>
      </ul>
      <p>
        <strong>Önemli not:</strong> Bu liste araştırma literatürüne
        dayalı genel bir değerlendirmedir. Parsel bazında kesin
        zemin sınıflandırması için AFAD'ın güncel haritaları ve
        bağımsız zemin etüdü esas alınmalıdır.
      </p>

      <h2>Zemin Riskini Nasıl Sorgularsınız?</h2>
      <p>
        Oturduğunuz ya da satın almayı düşündüğünüz bölgenin zemin
        riskini öğrenmek için:
      </p>
      <ul>
        <li>
          <strong>AFAD Türkiye Deprem Tehlike Haritaları</strong>
          (deprem.afad.gov.tr) — adres bazlı sorgulama imkânı sunar.
        </li>
        <li>
          <strong>İzmir Büyükşehir Belediyesi CBS/imar verileri</strong>
          — bazı ilçelerde zemin sınıflandırma haritaları mevcuttur.
        </li>
        <li>
          <strong>Yapı ruhsatı zemin etüt raporu</strong> — herhangi
          bir yapı için yapı izni verilirken düzenlenen zemin etüdü
          raporuna belediye arşivinden ulaşılabilir.
        </li>
        <li>
          <strong>Bağımsız jeoteknik etüt</strong> — taşınmaz alım
          veya güçlendirme kararı öncesinde mühendislik firmasından
          alınacak rapor en kapsamlı bilgiyi sağlar.
        </li>
      </ul>

      <h2>Zemine Karşı Alınabilecek Önlemler</h2>
      <p>
        Zemin sıvılaşma riskini tamamen ortadan kaldırmak mümkün
        olmasa da şu önlemler riski önemli ölçüde azaltır:
      </p>
      <ul>
        <li>
          <strong>Yeni yapılarda zemin iyileştirmesi:</strong> Kazık
          temel, kompaksiyon grouting, jet grouting gibi yöntemler
          zemin sıkıştırarak taşıma kapasitesini artırır.
        </li>
        <li>
          <strong>Mevcut binalar için güçlendirme:</strong> Zemin
          iyileştirme her binada uygulanamayabilir; yapısal güçlendirme
          ve zemin etüdü kombinasyonu değerlendirilmelidir.
        </li>
        <li>
          <strong>Kentsel dönüşüm:</strong> Riskli yapı stokunun
          dönüşümü, zemin etüdü zorunluluğuyla birlikte en köklü
          çözümdür.
        </li>
      </ul>
      <p>
        Depreme hazırlık hakkında geniş kapsamlı rehber için:{" "}
        <a href="/blog/depreme-hazirlik-rehberi">
          Depreme Hazırlık Rehberi: Evde, İşyerinde, Dışarıda
        </a>
      </p>
      <p>
        İzmir'deki fay hatları ve deprem riski hakkında:{" "}
        <a href="/blog/izmir-deprem-riski-fay-hatlari">
          İzmir Deprem Riski ve Fay Hatları
        </a>
      </p>
    </>
  )
}
