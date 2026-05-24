import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "gediz-elektrik-kesintisi-sorgulama",
  title: "Gediz Elektrik Kesintisi Sorgulama: SMS Bildirimi, Uygulama ve Arıza Hattı",
  description:
    "İzmir'de Gediz Elektrik kesintisi nasıl sorgulanır? Planlı kesinti takvimi, SMS bildirimi nasıl alınır, arıza hattı 186, mobil uygulama ve online sorgulama rehberi.",
  date: "2026-05-24",
  category: "İzmir Genel",
  summary:
    "İzmir'de elektrik dağıtımını Gediz Elektrik Dağıtım A.Ş. (GEAŞ) yürütür. Planlı ve arıza kaynaklı kesintiler için SMS bildirimi, mobil uygulama, 7/24 arıza hattı (186) ve çevrimiçi sorgulama kanalları mevcuttur. Planlı kesintiler belediye web sitesi ve GEAŞ duyurularında önceden yayımlanır.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de elektrik kesintisini kim yönetir?",
      answer:
        "İzmir'de elektrik dağıtımından Gediz Elektrik Dağıtım A.Ş. (GEAŞ) sorumludur. GEAŞ, Ege Bölgesi'nin büyük bölümünde lisanslı dağıtım şirketidir. Üretim ve iletim EÜAŞ / TEİAŞ sorumluluğundadır; ancak son tüketiciye ulaşan dağıtım altyapısı GEAŞ tarafından işletilir.",
    },
    {
      question: "Gediz elektrik arıza hattı numarası nedir?",
      answer:
        "Türkiye'de elektrik dağıtım şirketleri için ortak arıza bildirim hattı 186'dır. İzmir'de GEAŞ aboneleri arıza, kesinti ve acil durumlarda 186'yı arayarak bildirimde bulunabilir veya mevcut kesintileri sorgulayabilir. Hat 7/24 hizmet verir.",
    },
    {
      question: "Planlı kesintiden nasıl haberdar olurum?",
      answer:
        "GEAŞ planlı kesintileri kendi web sitesi ve sosyal medya kanallarından duyurur. Bunun yanı sıra, abonelik numaranıza kayıtlı telefona SMS bildirimi gelir; bu sistem için GEAŞ müşteri hizmetleriyle iletişime geçerek telefon numaranızın kayıtlı olduğunu teyit edin. İzmir Büyükşehir Belediyesi'nin resmi sosyal medya hesapları da büyük planlı kesintileri paylaşır.",
    },
    {
      question: "Mobil uygulama ile kesinti sorgulanabilir mi?",
      answer:
        "GEAŞ'ın resmi mobil uygulaması üzerinden planlı kesinti sorgulama, fatura ödeme ve arıza bildirimi yapılabilir. Uygulama hem iOS hem Android platformlarında mevcuttur; GEAŞ veya Gediz Elektrik anahtar kelimesiyle uygulama mağazalarında aranabilir. Güncel uygulama adı ve özellikleri için GEAŞ resmi web sitesi esas alınmalıdır.",
    },
    {
      question: "Komşuların elektriği varken benimki neden yok?",
      answer:
        "Bu durum genellikle bina içi sigorta, trafo grubu farkı veya kademeli kesintiden kaynaklanır. Önce binanızdaki elektrik panosunu ve sigortu kontrol edin. Sorun devam ediyorsa 186'yı arayın; adres bazında arıza kaydı açılır ve ekip yönlendirilir. Aynı apartmanda bazı daireler etkilenip bazıları etkilenmiyorsa bina elektrik tesisatı incelenmeli, yetkili elektrik ustası çağrılmalıdır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'de elektrik kesintisi yaşandığında ilk soru şudur: "Bu planlı mı,
        arıza mı, ne zaman gelir?" Bu soruların yanıtını bulmak için
        kullanılabilecek tüm kanalları ve süreci bu rehberde topluyoruz.
      </p>

      <h2>İzmir'de Elektrik Dağıtımı: GEAŞ</h2>
      <p>
        İzmir ili ve Ege Bölgesi'nin büyük bölümünde elektrik dağıtımından{" "}
        <strong>Gediz Elektrik Dağıtım A.Ş. (GEAŞ)</strong> sorumludur.
        GEAŞ, Enerji Piyasası Düzenleme Kurumu'nun (EPDK) lisansıyla
        bölgesel dağıtım faaliyeti yürütür. Arıza bildirimi, planlı kesinti
        duyurusu ve abone hizmetleri bu şirket üzerinden yönetilir.
      </p>

      <h2>Kesinti Türleri</h2>
      <h3>Planlı Kesintiler</h3>
      <p>
        Bakım, yeni bağlantı veya altyapı yenileme nedeniyle yapılan
        kesintilerdir. GEAŞ bu kesintileri önceden ilan eder. İlan kanalları:
      </p>
      <ul>
        <li>GEAŞ resmi web sitesi (kesinti takvimi bölümü)</li>
        <li>GEAŞ resmi sosyal medya hesapları</li>
        <li>Abonelik numarasına kayıtlı telefona SMS</li>
        <li>İzmir Büyükşehir Belediyesi duyuru kanalları (büyük çaplı kesintiler)</li>
      </ul>
      <p>
        Planlı kesintilerde genellikle saatler öncesinden ya da bir gün öncesinden
        bildirim yapılır. Kesinti takvimi genellikle mahalle ve cadde bazında
        yayımlanır.
      </p>

      <h3>Arıza Kaynaklı Kesintiler</h3>
      <p>
        Fırtına, kablo arızası, trafo patlaması gibi beklenmedik durumlardan
        kaynaklanır. Bu durumlarda önce{" "}
        <strong>binanızdaki sigortaları</strong> kontrol edin. Sorun bina
        içinden kaynaklanmıyorsa arıza bildirimi yapmanız gerekir.
      </p>

      <h2>Arıza Bildirimi ve Sorgulama Kanalları</h2>

      <h3>186 — Elektrik Arıza Hattı</h3>
      <p>
        <strong>186</strong>, Türkiye genelinde tüm elektrik dağıtım şirketleri
        için ortak arıza bildirim numarasıdır. İzmir'de de GEAŞ için geçerlidir.
        Hat 7/24 hizmet verir; adres bilgileri alınarak arıza kaydı açılır
        ve teknik ekip yönlendirilir. Beklenen giriş süresi hakkında bilgi
        alınabilir.
      </p>

      <h3>GEAŞ Resmi Web Sitesi</h3>
      <p>
        GEAŞ'ın çevrimiçi müşteri portalı üzerinden:
      </p>
      <ul>
        <li>Planlı kesinti sorgulama (ilçe/mahalle bazında)</li>
        <li>Anlık arıza durumu bilgisi</li>
        <li>Arıza bildirimi oluşturma</li>
        <li>Fatura görüntüleme ve ödeme</li>
      </ul>
      <p>
        gibi işlemler yapılabilir. Güncel URL için arama motorunda "GEAŞ müşteri
        portalı" araması yapılması önerilir; adres güncellenmiş olabilir.
      </p>

      <h3>Mobil Uygulama</h3>
      <p>
        GEAŞ'ın resmi mobil uygulaması iOS ve Android platformlarında mevcuttur.
        Uygulama üzerinden:
      </p>
      <ul>
        <li>Kesinti sorgulama ve anlık durum takibi</li>
        <li>Arıza bildirimi</li>
        <li>Fatura ödeme</li>
        <li>Tüketim analizi</li>
      </ul>
      <p>
        yapılabilir. Uygulama mağazasında "Gediz Elektrik" veya "GEAŞ" ile arama
        yaparak güncel uygulamayı bulabilirsiniz.
      </p>

      <h2>SMS Bildirimi Nasıl Alınır?</h2>
      <p>
        GEAŞ, planlı kesintilerden önce abonelik kaydındaki telefon numarasına
        SMS bildirim gönderir. Bu sistemin çalışması için:
      </p>
      <ul>
        <li>
          Abonelik kaydınızdaki telefon numarasının güncel olduğunu teyit edin.
        </li>
        <li>
          Numara güncellemesi için GEAŞ müşteri hizmetleri (186) veya web
          portalı üzerinden işlem yapılabilir.
        </li>
        <li>
          Kiracıysanız abonelik ev sahibi adına olabilir; bu durumda evinizi
          kendi adınıza tescil ettirmeniz ya da ev sahibiyle koordinasyon
          kurmanız gerekebilir.
        </li>
      </ul>

      <h2>Komşuların Işığı Varken Benimki Yoksa</h2>
      <p>
        Bu durumda önce <strong>bina elektrik panosunu</strong> kontrol edin;
        sigortanızın atmış olması mümkündür. Aynı bölgede yalnızca sizin
        daireniz veya binanız etkileniyorsa sorun genellikle bina içi
        tesisattadır ve yetkili bir elektrik ustası çağrılmalıdır.
      </p>
      <p>
        Tüm apartmanı kapsıyor ama sokağın öteki tarafı normalse, trafo grubu
        farkı söz konusu olabilir; 186'yı arayarak adres bazlı arıza kaydı
        açtırın.
      </p>

      <h2>Kesinti Ne Kadar Sürer?</h2>
      <p>
        Planlı kesintilerde süre ilan edilir; genellikle 2–8 saat arasında
        değişir. Arıza kaynaklı kesintilerde süre arızanın türüne göre
        farklılaşır:
      </p>
      <ul>
        <li>Sigorta/kesici arızası: 1–2 saat</li>
        <li>Kablo kopması: 4–12 saat</li>
        <li>Trafo arızası: 6–24 saat veya daha uzun</li>
        <li>Fırtına sonrası yaygın hasar: günler sürebilir</li>
      </ul>
      <p>
        186'yı aradığınızda operatör, tahmini giriş süresini bildirmeye çalışır.
      </p>

      <h2>İtiraz ve Tazminat</h2>
      <p>
        Kesinti süresi EPDK tarafından belirlenen standartları aşarsa aboneler
        tazminat talep edebilir. Bu hak için GEAŞ'ın resmi başvuru kanalları
        veya EPDK tüketici şikâyet mekanizması kullanılmalıdır. Güncel yönetmelik
        ve prosedür için EPDK'nın resmi web sitesi incelenmelidir.
      </p>
      <p>
        Su kesintileri hakkında da bilgi almak istiyorsanız:{" "}
        <a href="/blog/izmir-su-kesintileri-nedenler">
          İzmir Su Kesintileri: Nedenler, Sorgulama ve İZSU İletişim
        </a>
      </p>
    </>
  )
}
