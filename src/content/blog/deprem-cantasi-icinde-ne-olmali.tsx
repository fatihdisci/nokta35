import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "deprem-cantasi-icinde-ne-olmali",
  title: "Deprem Çantası İçinde Ne Olmalı? Güncel ve Kapsamlı Liste",
  description:
    "Deprem çantasında bulunması gereken malzemelerin AFAD önerilerine dayalı kapsamlı listesi: su, gıda, ilk yardım, belgeler, ilaçlar ve özel ihtiyaçlar için pratik rehber.",
  date: "2026-05-24",
  category: "Afet & Hazırlık",
  summary:
    "Deprem çantası; sarsıntı sonrası ilk 72 saatte bağımsız yaşamı destekleyecek malzemeleri içermelidir. AFAD, su, gıda, ilk yardım malzemeleri, belgeler ve kişisel ihtiyaçları kapsayan bir temel liste önermektedir.",
  readTime: 5,
  faq: [
    {
      question: "Deprem çantası kaç günlük olmalı?",
      answer:
        "AFAD, deprem çantasının en az 72 saatlik (3 günlük) temel ihtiyaçları karşılayacak düzeyde hazırlanmasını önermektedir. Büyük bir deprem sonrasında ilk yardım ekipleri, altyapı hasarı nedeniyle herkese aynı anda ulaşamayabilir; bu nedenle bireysel hazırlık kritik önem taşır.",
    },
    {
      question: "Deprem çantasında kaç litre su bulundurulmalı?",
      answer:
        "AFAD'ın önerisine göre kişi başı günde en az 2 litre içme suyu hesaplanmalıdır. 3 günlük hazırlık için kişi başı en az 6 litre su çantada bulunmalıdır. Hijyen ihtiyaçları için bu miktarın üzerinde ek su bulundurmak önerilir.",
    },
    {
      question: "Deprem çantasını nerede saklamalıyım?",
      answer:
        "Çanta kolayca erişilebilecek, bilinen ve karanlıkta bile bulunabilecek bir yerde durmalıdır. Yaygın tercihler: ön kapı girişi, yatak odası dolabı ve araç bagajı. Deprem genellikle uyku saatlerinde de gerçekleşebileceğinden yatak odanıza yakın tutmak iyi bir uygulamadır.",
    },
    {
      question: "Deprem çantasını ne zaman yenilemeliyim?",
      answer:
        "Çantayı yılda en az bir kez kontrol etmek ve güncellemeniz önerilir. Özellikle su ve gıdaların son kullanma tarihleri, ilaçların geçerlilik süresi ve pilin doluluk durumu düzenli olarak gözden geçirilmelidir. Ocak veya Ekim (Afet Farkındalık Ayı) gibi belirli bir ayı rutin kontrol zamanı olarak belirlemek hatırlamayı kolaylaştırır.",
    },
    {
      question: "Çocuklu aileler için deprem çantasına ekstra ne konulmalı?",
      answer:
        "Bebek ve küçük çocuklar için: ek mama ve biberonu veya katı gıda, bezi, ıslak mendil, değiştirlik kıyafetler ve sevdikleri küçük bir oyuncak. Çocukların olağandışı durumlara tepkilerini yönetmek için tanıdık bir nesne bulundurması stres azaltmaya yardımcı olabilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Deprem, önceden haber vermeden gerçekleşen ve altyapıyı hızla
        etkileyen bir doğal afettir. Büyük bir sarsıntının ardından su,
        elektrik ve iletişim hizmetleri saatler hatta günler boyunca
        aksayabilir. <strong>Deprem çantası</strong>; bu ilk 72 saatte
        dışarıdan yardım gelmeden bağımsız yaşamı sürdürebilmeyi
        sağlayacak malzemeleri önceden hazır tutmak anlamına gelir. Bu
        liste AFAD'ın önerileri temel alınarak hazırlanmıştır.
      </p>
      <p>
        Depreme hazırlığın tüm boyutları için:{" "}
        <a href="/blog/depreme-hazirlik-rehberi">
          Depreme Hazırlık: Ev Güvenliği, Çanta ve Tahliye Planı
        </a>
      </p>

      <h2>Temel Deprem Çantası Listesi</h2>

      <h3>Su ve Gıda</h3>
      <ul>
        <li>
          <strong>Su:</strong> Kişi başı günlük en az 2 litre — 3 günlük
          hesapla kişi başı en az 6 litre. Küçük, taşıması kolay
          şişeler tercih edilmeli
        </li>
        <li>
          <strong>Uzun ömürlü gıda:</strong> Pişirme gerektirmeyen gıdalar
          — konserve (et, ton balığı, fasulye), bisküvi, kuru meyve,
          kuruyemiş, enerji barı
        </li>
        <li>
          <strong>Manuel konserve açacağı</strong> (elektrikli değil)
        </li>
      </ul>

      <h3>İlk Yardım</h3>
      <ul>
        <li>Steril gazlı bez (farklı boyutlarda)</li>
        <li>Yara bandı (çeşitli boyutlarda)</li>
        <li>Antiseptik solüsyon veya ped</li>
        <li>Elastik bandaj</li>
        <li>Steril tek kullanımlık eldiven</li>
        <li>Penset ve küçük makas</li>
        <li>Termal folyo (ısı kaybını önler)</li>
        <li>Ağrı kesici ve ateş düşürücü (kişisel sağlık durumuna göre)</li>
      </ul>

      <h3>Kişisel İlaçlar ve Sağlık</h3>
      <ul>
        <li>
          <strong>Reçeteli ilaçlar:</strong> Düzenli kullandığınız tüm
          ilaçlardan en az 7 günlük yedek; depolama koşullarını etiketinden
          kontrol edin
        </li>
        <li>Gözlük veya yedek kontakt lens solüsyonu (kullananlar için)</li>
        <li>İşitme cihazı pili (kullananlar için)</li>
      </ul>

      <h3>Araç-Gereç ve İletişim</h3>
      <ul>
        <li>
          <strong>El feneri + yedek pil</strong> — ya da krank ile şarj
          olan model (daha güvenilir)
        </li>
        <li>
          <strong>Düdük:</strong> Enkaz altında ses çıkarmak için temel
          kurtarma aracıdır; bağırmak enerji tüketir, düdük tüketmez
        </li>
        <li>
          <strong>Powerbank</strong> (tam şarjlı) ve USB şarj kablosu</li>
        <li>
          <strong>Nakit para:</strong> Ödeme sistemleri ve ATM'ler
          çalışmayabilir; küçük banknotlar tercih edilmeli
        </li>
        <li>Çok amaçlı çakı veya alet seti</li>
        <li>Kalın iş eldiveni (cam veya enkaz kalıntılarına karşı)</li>
      </ul>

      <h3>Önemli Belgeler</h3>
      <ul>
        <li>Nüfus cüzdanı ve pasaport fotokopisi (su geçirmez poşette)</li>
        <li>Tapu, kira sözleşmesi veya mülkiyet belgesi fotokopisi</li>
        <li>Sağlık sigortası kartı ve poliçe bilgileri</li>
        <li>Banka hesap bilgileri ve acil iletişim numaraları (kâğıda yazılı)</li>
        <li>Önemli ilaçların ve kronik hastalık tanılarının kısa özeti</li>
      </ul>

      <h3>Kıyafet ve Barınak</h3>
      <ul>
        <li>Mevsime uygun yedek kıyafet (en az 1 takım)</li>
        <li>Sağlam, kapalı burun ayakkabı (cam kırıklarına karşı)</li>
        <li>Battaniye veya uyku tulumu</li>
        <li>Yağmurluk veya su geçirmez mont</li>
      </ul>

      <h3>Hijyen</h3>
      <ul>
        <li>Islak mendil (birden fazla paket)</li>
        <li>El dezenfektanı</li>
        <li>Tuvalet kâğıdı</li>
        <li>Diş fırçası ve küçük diş macunu</li>
        <li>Kadınlar için hijyen malzemeleri</li>
        <li>N95 veya FFP2 maske (enkaz tozu için)</li>
      </ul>

      <h2>Özel Gruplar İçin Eklemeler</h2>

      <h3>Bebekli ve Küçük Çocuklu Aileler</h3>
      <ul>
        <li>Yeterli miktarda bez</li>
        <li>Hazır mama veya formül süt</li>
        <li>Biberonu veya emzirme desteği</li>
        <li>Çocuğun sevdiği küçük bir oyuncak (stres azaltır)</li>
        <li>Çocuk ateş düşürücü (uygun yaş ve doza göre)</li>
      </ul>

      <h3>Yaşlılar ve Engelliler</h3>
      <ul>
        <li>Yürüteç, baston veya tekerlekli sandalye paketleme planı</li>
        <li>İşitme cihazı ve yedek pil</li>
        <li>Ekstra ilaç stoku</li>
        <li>Acil iletişim için büyük punto yazılı kağıt</li>
      </ul>

      <h3>Evcil Hayvan Sahipleri</h3>
      <ul>
        <li>3 günlük mama ve su kabı</li>
        <li>Tasmayı ve kafesi hazır tutun</li>
        <li>Aşı karnesi ve mikro çip bilgileri</li>
      </ul>

      <h2>Çantayı Saklama ve Güncelleme</h2>
      <p>
        Çantanın konumu aile bireyleri tarafından bilinmelidir. Önerilen
        yerler: ön kapı girişi, yatak odası dolabı, araç bagajı. Yılda en
        az bir kez şunları kontrol edin:
      </p>
      <ul>
        <li>Su ve gıdaların son kullanma tarihi</li>
        <li>İlaçların son kullanma tarihi ve güncel reçeteyle uyumu</li>
        <li>Pil ve powerbank'ın doluluk durumu</li>
        <li>Kıyafetlerin mevsime ve çocukların büyümesine uygunluğu</li>
      </ul>
      <p>
        AFAD'ın güncel rehber ve eğitim materyalleri için afad.gov.tr
        adresini ziyaret edebilirsiniz.
      </p>
    </>
  )
}
