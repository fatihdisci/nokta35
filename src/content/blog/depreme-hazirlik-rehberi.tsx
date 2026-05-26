import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "depreme-hazirlik-rehberi",
  title: "Depreme Hazırlık: Ev Güvenliği, Çanta ve Tahliye Planı",
  description:
    "Depreme hazırlık için ev içi güvenlik önlemleri, deprem çantasında bulunması gerekenler, tahliye planı oluşturma ve deprem sırasında-sonrasında yapılması.",
  date: "2026-05-24",
  category: "Afet & Hazırlık",
  summary:
    "Deprem hazırlığı; ev içi güvenlik düzenlemeleri, yeterli malzeme içeren bir deprem çantası ve önceden yapılmış bir tahliye planından oluşur. AFAD bu konuda ücretsiz rehber ve eğitim kaynakları sunmaktadır.",
  readTime: 8,
  faq: [
    {
      question: "Deprem çantasında neler bulunmalı?",
      answer:
        "AFAD'ın önerilerine göre deprem çantasında şunlar bulunmalıdır: içme suyu (kişi başı en az 3 günlük), uzun ömürlü gıda, ilk yardım malzemeleri, el feneri ve yedek pil, düdük, ıslak mendil ve hijyen malzemeleri, önemli belgelerin fotokopileri, yedek ilaçlar, battaniye veya termal örtü, şarj edilmiş powerbank ve nakit para. Çanta düzenli aralıklarla (yılda en az bir kez) kontrol edilmelidir.",
    },
    {
      question: "Deprem sırasında ne yapmalı?",
      answer:
        "İçerideyseniz: çök-kapan-tutun (ÇKT) pozisyonunu alın — diz çökün, başınızı kollarınızla koruyun, sağlam bir masa veya mobilyanın yanına geçin. Sarsıntı geçene kadar hareket etmeyin. Dışarıdaysanız açık alana geçin, binaların, elektrik direklerinin ve ağaçların uzağında durun. Asansör kullanmayın, merdivenlere koşmayın.",
    },
    {
      question: "Toplanma alanı nedir ve nasıl bulunur?",
      answer:
        "Toplanma alanları, deprem sonrasında hasar görmüş binalardan tahliye edilen kişilerin güvenle bir araya geleceği, önceden belirlenen açık alanlardır. Genellikle park, okul bahçesi veya geniş meydanlar olarak belirlenir. Bölgenizdeki toplanma alanını AFAD'ın resmi web sitesinden veya yaşadığınız ilin AFAD il müdürlüğünden öğrenebilirsiniz.",
    },
    {
      question: "Deprem sonrasında ne yapılmamalı?",
      answer:
        "Deprem sonrasında hasar görmüş binalara kesinlikle girilmemeli; artçı sarsıntılara karşı açık alanda kalınmalı; gaz kokusu varsa elektrik anahtarına dokunulmamalı ve açık alev yakılmamalıdır. Cep telefonu hatları meşgul olabileceğinden kısa mesajları tercih edin; acil aramalar için 112'yi arayın.",
    },
    {
      question: "İzmir neden deprem açısından riskli bir şehir?",
      answer:
        "İzmir, Ege'nin tektonik açıdan aktif bölgesinde yer alır. Kuzey Anadolu Fay Hattı'na ek olarak Ege içinde de aktif fay sistemleri bulunmaktadır. Ekim 2020'de yaşanan deprem, Seferihisar açıklarında gelişmiş ve şehirde ciddi hasar ile can kayıplarına yol açmıştır. Fay hatlarının güncel haritası için Maden Tetkik ve Arama Genel Müdürlüğü (MTA) kaynakları takip edilebilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Türkiye, dünyanın en aktif deprem kuşaklarından birinde yer almaktadır.
        Özellikle Ege ve Marmara bölgelerinde, tarihsel ve güncel veriler
        yüksek sismik aktiviteye işaret etmektedir. Bu gerçek göz önüne
        alındığında <strong>depreme hazırlık</strong> bir seçenek değil,
        zorunluluktur. Bu rehber; ev içi güvenlik önlemlerini, deprem
        çantası içeriğini, tahliye planını ve deprem anında-sonrasında
        yapılacakları AFAD kaynaklarına dayalı olarak özetlemektedir.
      </p>
      <p>
        <em>
          Bu rehber genel hazırlık bilgisi sunmaktadır. Güncel ve yetkili
          bilgi için AFAD'ın (afad.gov.tr) resmi yayınlarını takip ediniz.
        </em>
      </p>

      <h2>Türkiye'de Deprem Riski</h2>
      <p>
        Türkiye'nin tektonik yapısı, kuzeyden Kuzey Anadolu Fay Hattı,
        doğudan Doğu Anadolu Fay Hattı ve batıdan Ege genişleme zonuyla
        şekillenmiştir. Bu durum Türkiye'nin büyük bölümünü, özellikle de
        Marmara, Ege, Doğu Anadolu ve Akdeniz kuşaklarını deprem açısından
        yüksek riskli kılmaktadır.
      </p>
      <p>
        İzmir, Ege'nin aktif tektonik ortamında yer alır. Ekim 2020'deki
        deprem; Seferihisar açıklarında gelişmiş, şehirde ciddi yapısal
        hasara ve can kayıplarına neden olmuştur. Güncel fay hattı
        haritaları için MTA Genel Müdürlüğü (mta.gov.tr) kaynakları
        incelenmelidir.
      </p>

      <h2>Ev İçi Güvenlik Önlemleri</h2>
      <p>
        Deprem sırasında yaralanmaların büyük bölümü düşen eşyalardan
        kaynaklanır. Ev içinde alınabilecek basit önlemler:
      </p>
      <ul>
        <li>Kitaplık, dolap ve büyük mobilyaları duvara sabitleyin</li>
        <li>Ağır dekoratif eşyaları yüksek raflardan kaldırın</li>
        <li>Su ısıtıcısını ve doğalgaz tesisatını periyodik olarak kontrol ettirin</li>
        <li>Elektrik ve gaz panosunun yerini öğrenin; kapama yöntemini bilin</li>
        <li>Yangın söndürücünün bakımını yaptırın ve erişilebilir yerde tutun</li>
        <li>
          Yatak odanızda el feneri, terlik ve küçük bir ilk yardım kiti
          bulundurun (çoğu yaralanma deprem sonrası hareket sırasında olur)
        </li>
      </ul>

      <h2>Deprem Çantası</h2>
      <p>
        AFAD, acil durumlarda en az 72 saatlik (3 günlük) bağımsız
        yaşamı destekleyecek bir çanta hazırlanmasını önermektedir.
        Temel içerik:
      </p>
      <ul>
        <li><strong>Su:</strong> Kişi başı günlük en az 2 litre (3 gün)</li>
        <li><strong>Gıda:</strong> Pişirme gerektirmeyen, uzun ömürlü (konserve, enerji barı, kuru meyve)</li>
        <li><strong>İlk yardım:</strong> Yara bandı, steril gazlı bez, antiseptik, makas, eldiven</li>
        <li><strong>El feneri + yedek pil</strong> (ya da krank/solar feneri)</li>
        <li><strong>Düdük:</strong> Enkaz altında ses çıkarmak için</li>
        <li><strong>Powerbank</strong> ve şarj kablosu</li>
        <li><strong>Nakit para</strong> (ödeme sistemleri çalışmayabilir)</li>
        <li><strong>Önemli belgeler:</strong> Nüfus cüzdanı fotokopisi, sigorta, tapu, sağlık bilgileri</li>
        <li><strong>Kişisel ilaçlar</strong> (en az 7 günlük stok)</li>
        <li><strong>Battaniye veya termal folyo:</strong> Isı kaybını önler</li>
        <li><strong>Hijyen malzemeleri:</strong> Islak mendil, el dezenfektanı, maske</li>
      </ul>
      <p>
        Çantayı kolayca ulaşılabilecek bir yerde tutun ve yılda en az
        bir kez içeriği kontrol edin; su ve ilaçların son kullanma
        tarihlerini güncelleyin.
      </p>

      <h2>Tahliye Planı</h2>
      <p>
        Acil durum planı, sarsıntı sırasında değil öncesinde yapılır.
        Temel adımlar:
      </p>
      <ul>
        <li>Evinizin en güvenli noktalarını belirleyin (sağlam masa altı, iç duvar köşeleri)</li>
        <li>Toplanma noktasını aile bireyleriyle paylaşın; hem mahalle içi hem uzak buluşma noktası belirleyin</li>
        <li>Bölgenizdeki resmi toplanma alanını AFAD'dan öğrenin ve kaydedin</li>
        <li>Aile üyelerinin iletişim bilgilerini ve bir yakınızın telefon numarasını kâğıda yazın</li>
        <li>Engelli veya yaşlı aile bireyleri için özel tahliye ihtiyaçlarını planlayın</li>
      </ul>

      <h2>Deprem Sırasında: ÇKT (Çök-Kapan-Tutun)</h2>
      <p>
        AFAD'ın önerdiği temel pozisyon <strong>ÇKT</strong>'dir:
      </p>
      <ul>
        <li><strong>Çök:</strong> Ellerin ve dizlerin üzerine çömel</li>
        <li><strong>Kapan:</strong> Başını ve boynunu kollarınla koru; mümkünse sağlam bir masanın veya mobilyanın yanına geç</li>
        <li><strong>Tutun:</strong> Sarsıntı bitene kadar yerinizde kalın, hareket etmeyin</li>
      </ul>
      <p>Yapılmaması gerekenler:</p>
      <ul>
        <li>Sarsıntı sırasında koşmak veya merdivenlere çıkmak</li>
        <li>Asansörü kullanmak</li>
        <li>Pencere veya balkon yakınında durmak</li>
        <li>"Hayat üçgeni" arayışıyla büyük mobilyaların yanına yönelmek (ÇKT daha güvenlidir)</li>
      </ul>

      <h2>Deprem Sonrasında</h2>
      <p>Sarsıntı durduktan sonra:</p>
      <ul>
        <li>Artçı sarsıntılara karşı binanızı kontrol etmeden dışarı çıkın</li>
        <li>Gaz kokusu varsa elektrik anahtarına ve açık aleve dokunmayın; pencere açın ve binayı terk edin</li>
        <li>Hasar görmüş binalara girmeyin</li>
        <li>112 veya 122'yi arayın; hatlar meşgulse kısa mesaj atın</li>
        <li>Bölgenizdeki resmi toplanma alanına gidin ve yetkililerin yönlendirmelerini bekleyin</li>
      </ul>

      <h2>AFAD Kaynakları</h2>
      <p>
        <strong>AFAD (Afet ve Acil Durum Yönetimi Başkanlığı)</strong>,
        Türkiye'de afet hazırlık ve müdahale koordinasyonunu yürüten
        kamu kurumudur. Ücretsiz olarak sunulan kaynaklar:
      </p>
      <ul>
        <li>afad.gov.tr — deprem hazırlık broşürleri, eğitim videoları</li>
        <li>İl bazında toplanma alanı listesi</li>
        <li>Deprem tatbikatı takvimi ve katılım bilgileri</li>
        <li><strong>122</strong> — AFAD acil hattı</li>
        <li><strong>112</strong> — Sağlık, itfaiye ve güvenlik entegre acil hattı</li>
      </ul>
      <p>
        İzmir için deprem riski ve fay hatları hakkında ek bilgi için:{" "}
        <a href="/blog/izmir-rehberi-cografya-iklim-ilceler">
          İzmir Rehberi: Coğrafya, İklim ve İlçeler
        </a>
      </p>
    </>
  )
}
