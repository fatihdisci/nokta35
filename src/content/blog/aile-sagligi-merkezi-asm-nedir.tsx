import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "aile-sagligi-merkezi-asm-nedir",
  title: "Aile Sağlığı Merkezi (ASM) Nedir? Nasıl Kayıt Olunur?",
  description:
    "ASM (Aile Sağlığı Merkezi) nedir, hangi hizmetleri ücretsiz sunar? Aile hekimine nasıl kayıt olunur, randevu nasıl alınır ve ASM ile hastane acil servisi arasındaki fark.",
  date: "2026-05-24",
  category: "Sağlık",
  summary:
    "Aile Sağlığı Merkezi (ASM), Türkiye'nin birinci basamak sağlık hizmetlerinin sunulduğu kuruluştur. Rutin muayene, aşı, kronik hastalık takibi ve sevk işlemleri ASM'de yürütülür; pek çok hizmet SGK kapsamında ücretsizdir.",
  readTime: 5,
  faq: [
    {
      question: "ASM nedir?",
      answer:
        "ASM (Aile Sağlığı Merkezi), Türkiye'de birinci basamak sağlık hizmetlerinin verildiği kuruluştur. Her ASM'de bir veya daha fazla aile hekimi ve aile sağlığı çalışanı görev yapar. Rutin muayene, aşılama, kronik hastalık takibi, bebek-çocuk izlemi, gebelik takibi ve üst basamak hastanelere sevk işlemleri burada gerçekleştirilir.",
    },
    {
      question: "Aile hekimine nasıl kayıt olunur?",
      answer:
        "Aile hekimine kayıt, e-Devlet (turkiye.gov.tr) üzerinden veya doğrudan seçmek istediğiniz ASM'ye başvurarak yapılabilir. Kayıt için TC kimlik numarası yeterlidir. Her vatandaş ikamet adresine yakın bir aile hekimi seçer; uygun sebeple değiştirme hakkı da bulunmaktadır.",
    },
    {
      question: "ASM'de hangi hizmetler ücretsizdir?",
      answer:
        "SGK kapsamındaki bireyler için; rutin muayene, aşılama (ulusal aşı takvimindeki tüm aşılar), bebek-çocuk izlem muayeneleri, gebelik takibi ve temel tahliller büyük ölçüde ücretsizdir. Katkı payı uygulaması belirli muayeneler için geçerli olabilir; güncel muafiyet koşulları için SGK'nın resmi kaynakları takip edilmelidir.",
    },
    {
      question: "ASM randevusu nasıl alınır?",
      answer:
        "ASM randevusu; e-Nabız uygulaması (enabiz.gov.tr), ALO 182 hattı veya doğrudan ASM'yi arayarak alınabilir. Bazı ASM'lerde ek olarak çevrimiçi randevu sistemleri de kullanılmaktadır. Acil olmayan rutin başvurularda randevu almak bekleme süresini kısaltır.",
    },
    {
      question: "ASM ile hastane acil servisi arasındaki fark nedir?",
      answer:
        "ASM, rutin ve kronik sağlık sorunları için ilk başvuru noktasıdır. Acil servis ise yaşamı tehdit eden durumlar (kalp krizi, inme, ciddi kaza, bilinç kaybı) için tasarlanmıştır. Acil olmayan sorunlar için ASM'ye gitmek hem bekleme süresini azaltır hem de hastane acil servislerinin gerçek acil vakalar için uygun kalmasını sağlar.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>Aile Sağlığı Merkezi (ASM)</strong>, Türkiye'nin birinci
        basamak sağlık altyapısının temel taşıdır. Ülke genelinde her
        vatandaşın kayıtlı olduğu bir aile hekimi bulunmakta ve bu hekimler
        ASM bünyesinde hizmet vermektedir. Sistemi tanımak; doğru zamanda
        doğru yere başvurarak hem zaman hem de gereksiz harcama tasarrufu
        sağlar.
      </p>
      <p>
        Türkiye sağlık sisteminin tüm basamakları hakkında:{" "}
        <a href="/blog/turkiye-saglik-sistemi-basamaklar">
          Türkiye'de Sağlık Sistemi: ASM, Hastane ve Acil Servis Rehberi
        </a>
      </p>

      <h2>ASM'de Hangi Hizmetler Sunulur?</h2>
      <p>
        Aile Sağlığı Merkezi'nde sunulan başlıca hizmetler:
      </p>
      <ul>
        <li>
          <strong>Genel muayene:</strong> Ateş, öksürük, nezle, karın ağrısı
          gibi günlük şikayetler için başvurulacak ilk noktadır
        </li>
        <li>
          <strong>Kronik hastalık takibi:</strong> Diyabet, hipertansiyon,
          astım gibi kronik hastalıkların periyodik kontrolü
        </li>
        <li>
          <strong>Aşılama:</strong> Ulusal aşı takvimindeki tüm çocukluk
          çağı aşıları ve erişkin hatırlatma aşıları
        </li>
        <li>
          <strong>Bebek ve çocuk izlemi:</strong> Büyüme, gelişme ve
          beslenme takibi
        </li>
        <li>
          <strong>Gebelik izlemi:</strong> Prenatal (doğum öncesi) periyodik
          kontroller
        </li>
        <li>
          <strong>Sağlık raporu:</strong> Sürücü belgesi, spor, işe giriş
          gibi rutin sağlık raporları
        </li>
        <li>
          <strong>Sevk:</strong> Uzman muayenesi gerektiren durumlarda
          ikinci ve üçüncü basamak hastanelere yönlendirme
        </li>
        <li>
          <strong>Temel tahlil ve ölçümler:</strong> Kan basıncı ölçümü,
          kan şekeri takibi gibi basit değerlendirmeler
        </li>
      </ul>

      <h2>Aile Hekimine Nasıl Kayıt Olunur?</h2>
      <p>
        Türkiye'de her vatandaş bir aile hekimine kayıtlı olmak zorundadır
        ve bu hizmet SGK kapsamında sunulmaktadır. Kayıt yöntemleri:
      </p>
      <ul>
        <li>
          <strong>e-Devlet (turkiye.gov.tr):</strong> "Aile hekimi sorgulama
          ve seçimi" bölümünden bölgenizdeki aile hekimlerini görebilir ve
          kayıt yaptırabilirsiniz
        </li>
        <li>
          <strong>Doğrudan ASM'ye başvuru:</strong> İstediğiniz ASM'ye
          TC kimlik numaranızla giderek kayıt yaptırabilirsiniz
        </li>
        <li>
          <strong>ALO 182:</strong> Sağlık Bakanlığı'nın hasta hizmetleri
          hattı üzerinden bilgi alabilirsiniz
        </li>
      </ul>
      <p>
        Aile hekiminizi uygun gerekçeyle değiştirme hakkınız bulunmaktadır.
        Değiştirme koşulları ve sıklığı mevzuata göre düzenlenmektedir;
        güncel bilgi için e-Devlet veya Sağlık Bakanlığı kaynakları
        kontrol edilmelidir.
      </p>

      <h2>Randevu Nasıl Alınır?</h2>
      <p>
        ASM randevusu için birkaç yöntem mevcuttur:
      </p>
      <ul>
        <li>
          <strong>e-Nabız uygulaması</strong> (enabiz.gov.tr veya mobil
          uygulama): Kayıtlı olduğunuz aile hekiminden çevrimiçi randevu
        </li>
        <li>
          <strong>ALO 182:</strong> Telefon üzerinden randevu
        </li>
        <li>
          <strong>Doğrudan ASM'yi aramak:</strong> Çoğu ASM telefonla da
          randevu vermektedir
        </li>
      </ul>
      <p>
        Acil olmayan rutin kontroller için randevu almak, muayene bekleme
        süresini önemli ölçüde azaltır.
      </p>

      <h2>ASM Ücretsiz mi?</h2>
      <p>
        SGK kapsamındaki bireyler için ASM hizmetlerinin büyük bölümü
        ücretsiz ya da çok düşük katkı payıyla sunulmaktadır. Temel
        aşılar, bebek izlemi ve gebelik takibi genellikle katkı payı
        gerektirmez. Belirli muayene türleri için katkı payı alınabilir;
        muafiyet koşulları (65 yaş üstü, kronik hastalar, yeşil kart
        sahipleri vb.) için SGK'nın güncel mevzuatına bakılması önerilir.
      </p>

      <h2>ASM ve Acil Servis: Hangisi Ne Zaman?</h2>
      <p>
        Bu soruya net bir yanıt vermek gereksiz acil servis başvurularını
        önler:
      </p>
      <ul>
        <li>
          <strong>ASM'ye gidin:</strong> Ateş, soğuk algınlığı, kronik
          hastalık kontrolü, aşı, reçete yenileme, sağlık raporu
        </li>
        <li>
          <strong>Acil servise veya 112'ye gidin:</strong> Göğüs ağrısı,
          bilinç kaybı, felç belirtisi, ciddi kaza, nefes alamama,
          şiddetli alerjik reaksiyon
        </li>
      </ul>
      <p>
        Nöbetçi eczane bilgisine ulaşmak için:{" "}
        <a href="/blog/nobetci-eczane-sistemi-nasil-isler">
          Nöbetçi Eczane Sistemi Nasıl İşler?
        </a>
      </p>
    </>
  )
}
