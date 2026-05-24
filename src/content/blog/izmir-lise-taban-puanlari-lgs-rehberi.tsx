import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-lise-taban-puanlari-lgs-rehberi",
  title: "İzmir Lise Taban Puanları: LGS Sistemi ve Resmi Sorgulama Rehberi",
  description:
    "İzmir liseleri taban puanları nasıl öğrenilir? LGS nedir, puan nasıl hesaplanır, fen lisesi ve Anadolu lisesi farkı, MEB e-Okul üzerinden resmi sorgulama adımları.",
  date: "2026-05-24",
  category: "İzmir Genel",
  summary:
    "İzmir'de liselere yerleşme Liselere Geçiş Sistemi (LGS) ile yapılır. Taban puanlar her yıl başvuru sayısına göre değişir; kesin ve güncel verilere MEB'in e-Okul sistemi ve tercih kılavuzlarından ulaşılabilir. Bu rehber sistemi ve sorgulama yollarını açıklar, belirli puan değerleri sunmaz.",
  readTime: 6,
  faq: [
    {
      question: "LGS nedir, kim girer?",
      answer:
        "LGS (Liselere Geçiş Sistemi), Türkiye'de 8. sınıf öğrencilerinin liselere yerleşmesini düzenleyen sistemdir. Her yıl Haziran ayında yapılan merkezi sınav; Türkçe, matematik, fen bilimleri, inkılap tarihi ve din eğitimi gibi derslerden oluşur. Sınav sonucuna göre oluşan puan, öğrencinin lise tercihlerini belirler.",
    },
    {
      question: "Taban puan nedir, neden her yıl değişir?",
      answer:
        "Taban puan, belirli bir okula son olarak yerleşen öğrencinin puanıdır. Bir okula o yıl kaç kişinin tercih ettiğine, kontenjanına ve genel puan dağılımına göre her yıl farklılaşır. Bu nedenle geçmiş yıl taban puanları yalnızca kaba bir referans sunar; kesin hedef için birden fazla yılın ortalamasına ve güncel kılavuza bakılmalıdır.",
    },
    {
      question: "İzmir lise taban puanlarına nereden ulaşılır?",
      answer:
        "MEB'in yayımladığı resmi tercih kılavuzu, taban puanlar için tek güvenilir kaynaktır. Tercih dönemi öncesinde e-Okul sistemi üzerinden veya MEB'in liselere geçiş sayfasından kılavuz indirilebilir. Bunun dışında tanıtım amaçlı paylasılan geçmiş yıl verileri referans alınabilir ancak kesin tercih için mutlaka resmi kılavuz kullanılmalıdır.",
    },
    {
      question: "İzmir Fen Lisesi ile Anadolu Lisesi farkı nedir?",
      answer:
        "İzmir Fen Lisesi (İFL), fen ve matematik ağırlıklı müfredatıyla İzmir'deki en yüksek puanlı devlet liseleri arasındadır; kontenjanı sınırlı ve taban puanı yüksektir. Anadolu liseleri ise İzmir'de çok sayıda bulunur, yabancı dil ağırlıklı müfredatları olup taban puanları okula göre geniş bir aralıkta değişir. Sosyal bilimler lisesi, güzel sanatlar lisesi ve mesleki liseler gibi farklı türler de tercih seçenekleri arasındadır.",
    },
    {
      question: "e-Okul üzerinden tercih nasıl yapılır?",
      answer:
        "Tercih işlemleri e-Okul sistemine (eokul.meb.gov.tr) öğrenci T.C. kimlik numarası ve şifresiyle giriş yapılarak gerçekleştirilir. Tercih dönemi genellikle LGS sınavından sonra, sonuçların açıklanmasının ardından başlar ve birkaç günlük pencere sunar. Tercih süreci, sıralama ve diğer detaylar için okul rehber öğretmeninden destek alınabilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Her yıl lise tercihi döneminde "İzmir lise taban puanları" araması
        büyük hacimli bir arama trafiği oluşturur. Bu rehberde{" "}
        <strong>LGS sisteminin nasıl çalıştığını</strong>, taban puanlara
        nereden ulaşılacağını ve okul türleri arasındaki farkları ele
        alıyoruz. Burada belirli puan değerleri sunulmamaktadır; çünkü
        taban puanlar her yıl değişir ve yalnızca MEB'in güncel kılavuzu
        kesin referanstır.
      </p>

      <h2>LGS Nedir?</h2>
      <p>
        <strong>LGS (Liselere Geçiş Sistemi)</strong>, Türkiye'de 8. sınıf
        öğrencilerinin liselere yerleşmesini düzenleyen merkezi sınavdır.
        Her yıl Haziran ayında uygulanır. Sınav şu derslerden oluşur:
      </p>
      <ul>
        <li>Türkçe</li>
        <li>Matematik</li>
        <li>Fen Bilimleri</li>
        <li>T.C. İnkılap Tarihi ve Atatürkçülük</li>
        <li>Din Kültürü ve Ahlak Bilgisi (veya Yabancı Dil — seçmeli)</li>
      </ul>
      <p>
        Sınav sonucu <strong>100 üzerinden puan</strong> şeklinde açıklanır.
        Bu puan, öğrencinin tercih listesine göre okula yerleşiminde
        kullanılır.
      </p>

      <h2>Taban Puan Nedir?</h2>
      <p>
        Taban puan, bir okula o yıl son sırada yerleşen öğrencinin puanıdır.
        Yani: "Bu okula girebilmek için en az kaç almak gerekiyor?" sorusunun
        yanıtıdır. Taban puan;
      </p>
      <ul>
        <li>Okula o yıl yapılan tercih sayısına,</li>
        <li>Okulun kontenjanına,</li>
        <li>Sınavın genel güçlük düzeyine,</li>
        <li>Sınıf geçme ve bölgesel faktörlere</li>
      </ul>
      <p>
        göre her yıl değişir. Bu nedenle geçen yıl 480 olan taban puan,
        bu yıl 492 veya 465 olabilir. Geçmiş yıl verileri yalnızca
        kaba bir fikir verir.
      </p>

      <h2>Güncel Taban Puanlara Nereden Ulaşılır?</h2>
      <p>
        Kesin ve güncel taban puanlar için tek resmi kaynak MEB'dir:
      </p>
      <ul>
        <li>
          <strong>MEB e-Okul Sistemi:</strong>{" "}
          <code>eokul.meb.gov.tr</code> — tercih kılavuzu, yerleşme
          sonuçları ve okul bilgileri bu platform üzerinden yayımlanır.
        </li>
        <li>
          <strong>MEB Liselere Geçiş Sayfası:</strong> Sınav takvimi,
          kılavuz ve başvuru bilgileri için MEB'in resmi sınav sayfası
          düzenli takip edilmelidir.
        </li>
        <li>
          <strong>Okul Rehber Öğretmeni:</strong> Tercih sürecinde
          okul danışmanından alınan destek en güvenilir
          yönlendirmeyi sağlar.
        </li>
      </ul>
      <p>
        Sosyal medyada veya üçüncü taraf sitelerde paylaşılan puan
        listeleri güncel olmayabilir ya da yanlış olabilir. Tercih
        kararı her zaman resmi kılavuza dayandırılmalıdır.
      </p>

      <h2>İzmir'deki Lise Türleri</h2>

      <h3>Fen Liseleri</h3>
      <p>
        İzmir Fen Lisesi (İFL) başta olmak üzere fen liseleri, fen ve
        matematik ağırlıklı müfredatlarıyla öne çıkar. Kontenjanları
        sınırlı, taban puanları İzmir okulları arasında en yüksek
        seviyededir. Yerleşmek için son derece yüksek puan gerekmektedir.
      </p>

      <h3>Anadolu Liseleri</h3>
      <p>
        İzmir'de çok sayıda devlet Anadolu lisesi bulunur. Yabancı dil
        ağırlıklı eğitim sunarlar. Taban puanlar okulun bulunduğu
        ilçeye, kademesine ve bilinirliğine göre geniş bir aralıkta
        değişir.
      </p>

      <h3>Sosyal Bilimler Liseleri</h3>
      <p>
        Edebiyat, dil ve sosyal bilimler odaklıdır. İzmir'de bir veya
        birkaç şubesi mevcuttur. Taban puanları fen lisesinden düşük,
        standart Anadolu liselerinin üzerinde seyreder.
      </p>

      <h3>Güzel Sanatlar ve Spor Liseleri</h3>
      <p>
        Sanat ve müzik eğitimi almak isteyenler için Güzel Sanatlar
        Lisesi, sportif kariyer hedefleyenler için Spor Lisesi seçeneği
        vardır. Bu okullara yerleşmede LGS puanına ek olarak yetenek
        sınavı da belirleyici olabilir.
      </p>

      <h3>Mesleki ve Teknik Anadolu Liseleri</h3>
      <p>
        İzmir'de çeşitli meslek alanlarında Mesleki ve Teknik Anadolu
        Liseleri (endüstri meslek, sağlık, ticaret, turizm vb.) mevcuttur.
        Kontenjanları geniş, taban puanları genellikle daha düşüktür.
      </p>

      <h2>Tercih Süreci: Adım Adım</h2>
      <ol>
        <li>
          <strong>LGS sınav sonucunu öğrenin:</strong> Sonuçlar MEB
          e-Okul üzerinden açıklanır.
        </li>
        <li>
          <strong>Tercih kılavuzunu indirin:</strong> Resmi kılavuzda
          okul listesi, kontenjanlar ve geçmiş yıl taban puanları yer alır.
        </li>
        <li>
          <strong>Ziyaret ve araştırma:</strong> Mümkünse tercih edilecek
          okullara açık kapı günlerinde gidin, öğretmen ve öğrencilerle
          konuşun.
        </li>
        <li>
          <strong>e-Okul üzerinden tercih girin:</strong> Tercih dönemi
          açıldığında sisteme giriş yaparak okul listesini öncelik sırasına
          göre kaydedin.
        </li>
        <li>
          <strong>Yerleşme sonucunu takip edin:</strong> Tercih dönemi
          kapandıktan sonra yerleşme sonuçları e-Okul'dan duyurulur.
        </li>
      </ol>

      <h2>Sık Yapılan Hatalar</h2>
      <ul>
        <li>
          Geçmiş yıl taban puanlarını kesin hedef olarak belirlemek —
          her yıl değişebilir.
        </li>
        <li>
          Yalnızca yüksek puanlı okulları listelemek — yerleşilemeyen
          durumlarda öğrenci merkezli atamaya düşülebilir.
        </li>
        <li>
          Ulaşım ve bölgeyi göz ardı etmek — okul kalitesi kadar
          günlük yolculuk süresi de önemlidir.
        </li>
        <li>
          Üçüncü taraf kaynaklardaki güncel olmayan puan listelerine
          güvenmek.
        </li>
      </ul>
      <p>
        İzmir ulaşım seçenekleri için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi: ESHOT, İZBAN, Metro, Vapur
        </a>
      </p>
    </>
  )
}
