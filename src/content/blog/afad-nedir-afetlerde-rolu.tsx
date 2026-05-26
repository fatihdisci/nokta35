import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "afad-nedir-afetlerde-rolu",
  title: "AFAD Nedir? Afetlerde Rolü, Görevleri ve İletişim Bilgileri",
  description:
    "AFAD (Afet ve Acil Durum Yönetimi Başkanlığı) nedir, ne iş yapar? Deprem, sel ve diğer afetlerde AFAD'ın rolü, 122 acil hattı, toplanma alanları ve gönüllülük.",
  date: "2026-05-24",
  category: "Afet & Hazırlık",
  summary:
    "AFAD, Türkiye'de afet yönetiminin merkezi kurumudur. Deprem, sel, yangın ve diğer afetlerde koordinasyonu sağlar; arama-kurtarma, barınma ve rehabilitasyon hizmetlerini yürütür. Acil hat: 122.",
  readTime: 5,
  faq: [
    {
      question: "AFAD nedir?",
      answer:
        "AFAD (Afet ve Acil Durum Yönetimi Başkanlığı), doğal ve insan kaynaklı afetlerde önleme, hazırlık, müdahale ve iyileştirme faaliyetlerini koordine eden Türkiye'nin merkezi afet yönetimi kurumudur. Cumhurbaşkanlığına bağlı olarak faaliyet gösterir.",
    },
    {
      question: "AFAD'ın acil telefon numarası nedir?",
      answer:
        "AFAD acil yardım ve ihbar hattı 122'dir. Deprem, sel, toprak kayması gibi afetlerde veya arama-kurtarma gerektiren durumlarda 122 aranabilir. Hat 7/24 hizmet verir ve ücretsizdir.",
    },
    {
      question: "AFAD toplanma alanlarını kim belirler?",
      answer:
        "Toplanma alanları, AFAD koordinasyonuyla belediyeler tarafından belirlenir ve işaretlenir. Genellikle park, meydan, spor sahası ve açık alanlar kullanılır. Bulunduğunuz mahallenin toplanma alanını e-Devlet üzerinden veya muhtarlık aracılığıyla öğrenebilirsiniz.",
    },
    {
      question: "AFAD gönüllüsü nasıl olunur?",
      answer:
        "AFAD, afetlerde destek verecek gönüllüleri Türkiye Afet Müdahale Planı (TAMP) kapsamında kayıt altına alır. AFAD Gönüllüsü olmak için AFAD'ın resmi web sitesindeki başvuru formunu doldurmak ve zorunlu eğitimi tamamlamak gerekir.",
    },
    {
      question: "AFAD ile 112 arasındaki fark nedir?",
      answer:
        "112, sağlık (ambulans), itfaiye ve polis dahil tüm acil hizmetlere ulaşan entegre acil numaradır. 122 ise AFAD'a özgü afet ihbar hattıdır; arama-kurtarma, enkaz altında kalan kişiler ve afet koordinasyonu için kullanılır. İkisi birbirini tamamlar; acil sağlık için 112, afet müdahalesi için 122 tercih edilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Türkiye, dünyada en fazla doğal afetle karşılaşan ülkeler arasında
        yer alır. Depremlerin yanı sıra sel, heyelan, orman yangını ve
        kuraklık gibi afetler her yıl can ve mal kaybına neden olmaktadır.
        Bu afetlerle mücadelede merkezi koordinasyon görevi <strong>AFAD</strong>'a
        aittir. Bu yazıda AFAD'ın ne olduğunu, nasıl çalıştığını ve bir afet
        durumunda vatandaşın AFAD'dan nasıl yararlanabileceğini açıklıyoruz.
      </p>
      <p>
        Depreme hazırlık hakkında kapsamlı rehber için:{" "}
        <a href="/blog/depreme-hazirlik-rehberi">
          Depreme Hazırlık: Ev, Çanta, Tahliye Planı
        </a>
      </p>

      <h2>AFAD Nedir?</h2>
      <p>
        <strong>AFAD (Afet ve Acil Durum Yönetimi Başkanlığı)</strong>,
        2009 yılında çıkarılan 5902 sayılı Kanun ile kurulmuştur. Önceden
        farklı bakanlıklara dağılmış olan afet yönetimi işlevlerini tek
        çatı altında toplamıştır.
      </p>
      <p>AFAD'ın temel görev alanları:</p>
      <ul>
        <li><strong>Önleme ve azaltma:</strong> Risk haritalaması, yapı standartları, deprem tehlike haritaları</li>
        <li><strong>Hazırlık:</strong> Tatbikatlar, toplanma alanı belirleme, gönüllü eğitimi</li>
        <li><strong>Müdahale:</strong> Arama-kurtarma, tahliye, barınma, yiyecek ve sağlık desteği</li>
        <li><strong>İyileştirme:</strong> Hasar tespiti, kalıcı konut inşaatı, psikolojik destek</li>
      </ul>

      <h2>AFAD'ın Acil Hattı: 122</h2>
      <p>
        <strong>122</strong>, AFAD'ın 7/24 ücretsiz acil hattıdır. Aşağıdaki
        durumlarda 122 aranmalıdır:
      </p>
      <ul>
        <li>Deprem sonrası enkaz altında kalan veya kalan kişi ihbarı</li>
        <li>Sel, heyelan, çığ gibi doğal afet ihbarı</li>
        <li>Arama-kurtarma ekibine ihtiyaç duyulan durumlar</li>
        <li>Afet yardım talebi ve barınma ihtiyacı</li>
      </ul>
      <p>
        Acil tıbbi yardım için 112, yangın için 110, güvenlik için 155/156
        geçerliliğini korur. 122, afetin boyutu ve koordinasyonuna yönelik
        ihbarlar için özelleşmiştir.
      </p>

      <h2>Türkiye Afet Müdahale Planı (TAMP)</h2>
      <p>
        AFAD, büyük afetlerde tüm kamu kurumlarını, sivil toplum kuruluşlarını
        ve özel sektörü koordine eden <strong>Türkiye Afet Müdahale Planı
        (TAMP)</strong> çerçevesinde hareket eder. Plan; sorumluluk dağılımını,
        kaynak paylaşımını ve iletişim protokollerini belirler. Büyük depremlerde
        farklı bakanlıklardan arama-kurtarma ekiplerinin ortak hareket etmesini
        bu koordinasyon sağlar.
      </p>

      <h2>Toplanma Alanları</h2>
      <p>
        Toplanma alanları, deprem veya başka bir afet durumunda binaları terk
        eden vatandaşların güvenle bir araya gelebileceği açık alanlardır.
        AFAD koordinasyonuyla belediyeler tarafından belirlenir ve tabelayla
        işaretlenir.
      </p>
      <p>Toplanma alanınızı öğrenmenin yolları:</p>
      <ul>
        <li>e-Devlet → "Afet Toplanma Alanı Sorgulama"</li>
        <li>Mahalle muhtarlığına başvurma</li>
        <li>AFAD İl Müdürlükleri</li>
        <li><a href="/">nokta35.com</a> haritasında toplanma alanı katmanı</li>
      </ul>
      <p>
        <strong>Önemli:</strong> Toplanma alanınızı afet öncesinde öğrenin;
        afet anında internet veya telefon erişimi kısıtlanabilir.
      </p>

      <h2>AFAD Gönüllülüğü</h2>
      <p>
        AFAD, afet müdahalesinde destek verebilecek gönüllüleri eğiterek
        kayıt altına alır. Gönüllüler; arama-kurtarma, lojistik, psikolojik
        ilk yardım ve yönetim alanlarında destek sağlayabilir.
      </p>
      <ul>
        <li>AFAD'ın resmi web sitesinden online başvuru yapılabilir</li>
        <li>Zorunlu temel eğitim tamamlanması gerekir</li>
        <li>Tıp, mühendislik, psikoloji gibi mesleki alanlarda uzman gönüllüler ayrıca değerlendirilir</li>
      </ul>

      <h2>AFAD Deprem Tehlike Haritası</h2>
      <p>
        AFAD, Türkiye genelindeki deprem tehlikesini bilimsel verilerle
        modelleyerek <strong>Türkiye Deprem Tehlike Haritası</strong>'nı
        hazırlar. En son harita 2018'de yayımlanmış; bölgesel ivme değerlerini
        ve fay hatlarını göstermektedir. Mühendislik yapıları için hesaplama
        zorunluluğu olan bu harita, AFAD'ın web sitesinden erişilebilir.
      </p>
      <p>
        İzmir'in deprem riski ve tarihsel depremler için:{" "}
        <a href="/blog/izmir-deprem-riski-fay-hatlari">
          İzmir'de Deprem Riski: Fay Hatları ve Hazırlık
        </a>
      </p>
    </>
  )
}
