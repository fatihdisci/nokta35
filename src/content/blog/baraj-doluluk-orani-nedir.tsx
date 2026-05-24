import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "baraj-doluluk-orani-nedir-neden-onemli",
  title: "Baraj Doluluk Oranı Nedir? Neden Takip Edilir?",
  description:
    "Baraj doluluk oranı nasıl hesaplanır, ölü hacim nedir, doluluk neden mevsimsel değişir? İçme suyu güvenliği için bilinmesi gerekenler.",
  date: "2026-05-10",
  category: "Su",
  summary:
    "Baraj doluluk oranı; bir barajda anlık olarak biriken su hacminin maksimum kapasiteye oranıdır. İçme suyu güvenliği, tarım ve enerji üretimi için kritik bir göstergedir.",
  readTime: 5,
}

export function Body() {
  return (
    <>
      <p>
        <strong>Baraj doluluk oranı</strong>; bir barajda o anda biriken su
        hacminin, barajın taşıyabileceği maksimum hacme yüzdesidir. Basit
        formülü şudur:
      </p>
      <blockquote>
        Doluluk Oranı (%) = (Mevcut Su Hacmi ÷ Maksimum Kapasite) × 100
      </blockquote>
      <p>
        Bir baraj %80 doluysa, tasarım kapasitesinin beşte dördüne kadar su
        birikmiş demektir. %20'nin altına düşmesi ise içme suyu kaynağı olan
        barajlarda <em>kritik seviye</em> olarak değerlendirilir.
      </p>

      <h2>Ölü hacim nedir?</h2>
      <p>
        Bir barajın toplam su hacminin tamamı kullanılamaz. Baraj gövdesi
        ile suyu alan boru sistemi (savak) belirli bir yükseklikten geçer; bu
        seviyenin altında kalan suya <strong>ölü hacim</strong> denir. Ölü
        hacim:
      </p>
      <ul>
        <li>Çökeltilerin ve tortuların biriktiği alt katmandır</li>
        <li>Pompa ile çekilemez veya çekildiğinde su kalitesi düşer</li>
        <li>Bu yüzden “kullanılabilir su hacmi” mevcut toplam su hacminden ölü hacim çıkarılarak hesaplanır</li>
      </ul>
      <p>
        Bir baraj %10 doluluğa düşse bile, bunun büyük bölümü ölü hacim
        olabilir; yani gerçekte kullanılabilir su miktarı çok daha düşüktür.
        Bu nedenle uzmanlar “aktif doluluk” oranını da takip eder.
      </p>

      <h2>Doluluk oranı neden mevsimsel değişir?</h2>
      <p>
        Türkiye iklim kuşağı, yağışın yıl içinde eşit dağılmadığı bir
        yapıdadır. Bu nedenle baraj doluluğu mevsimsel bir döngü izler:
      </p>
      <ul>
        <li>
          <strong>Kış (Aralık–Şubat):</strong> Yağış mevsimi. Yağmur ve kar
          birikimi başlar. Doluluk yavaş yavaş artar.
        </li>
        <li>
          <strong>İlkbahar (Mart–Mayıs):</strong> Karların erimesiyle akarsu
          debileri yükselir. Barajların doluluğu yıl içinde en yüksek
          seviyeye ulaşır.
        </li>
        <li>
          <strong>Yaz (Haziran–Ağustos):</strong> Yüksek sıcaklık + yüksek
          buharlaşma + artan su tüketimi nedeniyle doluluk hızla düşer.
        </li>
        <li>
          <strong>Sonbahar (Eylül–Kasım):</strong> Doluluk yılın en düşük
          seviyesindedir. İlk yağışlarla toparlanma başlar.
        </li>
      </ul>

      <h2>Barajlar niçin önemlidir?</h2>
      <p>Bir baraj birden fazla işlevi yerine getirir:</p>
      <ul>
        <li><strong>İçme suyu:</strong> Büyükşehirlerin önemli bir bölümü içme suyunu barajlardan karşılar.</li>
        <li><strong>Sulama:</strong> Tarım için kontrollü su sağlar.</li>
        <li><strong>Elektrik üretimi:</strong> Hidroelektrik santraller barajların gücünden faydalanır.</li>
        <li><strong>Taşkın kontrolü:</strong> Aşırı yağışlarda barajlar suyu tutarak alt havzayı korur.</li>
      </ul>

      <h2>Kuraklık ve iklim değişikliği</h2>
      <p>
        Son yıllarda yağış rejimi değişmekte, kar yağışı azalmakta ve sıcaklar
        uzamaktadır. Bu durum baraj doluluklarının özellikle yaz sonu
        düşüşünü daha belirgin hale getirmiştir. Bu nedenle:
      </p>
      <ul>
        <li>Şehirlerde su tasarrufu kampanyaları sıklaşıyor</li>
        <li>Kayıp-kaçak oranlarını düşürmek için altyapı yenileniyor</li>
        <li>Atık su geri kazanım projeleri yaygınlaşıyor</li>
      </ul>

      <h2>Vatandaş olarak ne yapabiliriz?</h2>
      <p>
        Baraj doluluk verisini düzenli takip etmek; özellikle kritik seviyelere
        yaklaşıldığında bireysel su tasarrufu uygulamak, kuraklık riskini
        toplum genelinde azaltmanın en pratik yoludur. Sızıntıları onarmak,
        bahçeyi akşam saatlerinde sulamak ve duş süresini kısaltmak gibi
        basit alışkanlıklar büyük fark yaratır.
      </p>
    </>
  )
}
