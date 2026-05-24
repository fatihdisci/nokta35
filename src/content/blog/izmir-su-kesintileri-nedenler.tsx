import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-su-kesintileri-nedenler",
  title: "İzmir'de Su Kesintileri: Nedenler, Süreler ve Ne Yapmalı?",
  description:
    "İzmir'de su kesintileri neden yaşanır? Arıza kaynaklı ve planlı kesintiler arasındaki fark, İZSU'nun duyuru kanalları ve kesinti sırasında yapılması gerekenler.",
  date: "2026-05-24",
  category: "Su & Baraj",
  summary:
    "İzmir'de su kesintileri arıza (ani boru patlaması) veya planlı bakım nedeniyle gerçekleşir. İZSU kesintileri önceden duyurur; anlık bilgiye nokta35.com üzerinden de ulaşılabilir.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de su kesintileri neden olur?",
      answer:
        "İzmir'deki su kesintilerinin başlıca iki nedeni vardır: boru hattı arızaları (ani patlama, sızıntı) ve planlı bakım-onarım çalışmaları. Eski şebeke altyapısı, yüksek basınç değişimleri ve zemin hareketleri boru arızalarının temel nedenleri arasındadır. Kuraklık dönemlerinde su kaynağı yetersizliği nedeniyle zaman zaman rotasyonlu kesintiler de uygulanabilir.",
    },
    {
      question: "Su kesintisi ne zaman sona erer, nasıl öğrenilir?",
      answer:
        "Arıza kaynaklı kesintilerin tahmini bitiş saati genellikle İZSU'nun resmi web sitesi, sosyal medya hesapları ve ALO 185 hattı üzerinden duyurulur. nokta35.com'un su kesintileri bölümü de aktif kesintileri anlık olarak göstermektedir. Planlı kesintiler ise çalışmadan birkaç gün önce ilçe ve mahalle bazında ilan edilir.",
    },
    {
      question: "Su kesintisi sırasında ne yapılmalı?",
      answer:
        "Su kesintisi öncesinde veya sırasında yapılabilecekler: içme suyu ve temel ihtiyaçlar için yeterli su stoku oluşturmak, termal şişe veya büyük bidonlara su doldurmak, kesinti süresince gereksiz su tüketimini kısmak. Uzun süren arızalarda İZSU su tankerleri konut bölgelerine destek sağlayabilir.",
    },
    {
      question: "İZSU ALO hattı kaç numara?",
      answer:
        "İZSU'nun 7/24 müşteri hizmetleri hattı ALO 185'tir. Su kesintisi ihbarı, arıza bildirimi, fatura sorunu ve abonelik işlemleri için aranabilir. Hat ücretsizdir.",
    },
    {
      question: "Planlı su kesintisi ile arıza kesintisi arasındaki fark nedir?",
      answer:
        "Planlı kesintiler; şebeke yenileme, boru hattı bağlantısı veya sayaç değişimi gibi önceden programlanmış çalışmalar için uygulanır ve birkaç gün önceden duyurulur. Arıza kesintileri ise ani boru patlaması veya sızıntı gibi öngörülemeyen durumlarda gerçekleşir; bitiş saati başlangıçta belli olmayabilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Su kesintisi, özellikle beklenmedik bir anda yaşandığında günlük
        hayatı ciddi biçimde aksatır. İzmir'in geniş şehir altyapısında
        her yıl yüzlerce arıza meydana gelir; bunlara ek olarak planlı
        bakım çalışmaları da kısa süreli kesintilere yol açar. Bu yazıda
        kesintilerin nedenlerini, İZSU'nun duyuru kanallarını ve kesinti
        sırasında yapılması gerekenleri açıklıyoruz.
      </p>
      <p>
        İzmir'deki barajların doluluk durumu ve su kaynakları için:{" "}
        <a href="/blog/izmir-barajlari-tahtatli-gordes-balcova">
          İzmir'in Barajları: Tahtalı, Gördes, Balçova, Kemer
        </a>
      </p>

      <h2>Su Kesintilerinin Nedenleri</h2>
      <p>İzmir'de yaşanan su kesintileri genel olarak iki gruba ayrılır:</p>

      <h3>1. Arıza Kaynaklı Kesintiler</h3>
      <p>
        Boru hattı patlaması, vana arızası veya şebeke sızıntısı gibi
        öngörülemeyen durumlarda ani kesintiler yaşanır. Bu kesintiler;
      </p>
      <ul>
        <li>Eski ve yıpranmış boru altyapısı</li>
        <li>Yüksek basınç dalgalanmaları</li>
        <li>Zemin hareketleri ve deprem sonrası hasar</li>
        <li>Kazı çalışmaları sırasında boru hasarı</li>
      </ul>
      <p>
        gibi nedenlerden kaynaklanır. Bitiş süresi, arızanın büyüklüğüne
        ve erişim koşullarına bağlı olarak değişir; başlangıçta kesin bir
        süre verilmeyebilir.
      </p>

      <h3>2. Planlı Kesintiler</h3>
      <p>
        İZSU; şebeke yenileme, boru hattı bağlantısı, pompa ve vana
        değişimi ile sayaç montajı gibi bakım çalışmaları için önceden
        planlı kesintiler uygular. Planlı kesintiler genellikle birkaç
        gün önceden ilçe ve mahalle bazında duyurulur.
      </p>

      <h3>3. Kuraklık Dönemlerinde Rotasyonlu Kesintiler</h3>
      <p>
        Baraj doluluk oranlarının kritik seviyelere düştüğü kuraklık
        dönemlerinde İZSU, belirli mahallelerde dönüşümlü kesinti
        uygulayabilir. Bu uygulama öncesinde belediye basın açıklaması
        yapar ve takvim belirlenir.
      </p>
      <p>
        İzmir barajlarının anlık doluluk durumunu{" "}
        <a href="/su-baraj">nokta35.com/su-baraj</a> sayfasından
        takip edebilirsiniz.
      </p>

      <h2>Kesinti Bilgisine Nereden Ulaşılır?</h2>
      <ul>
        <li>
          <strong>nokta35.com:</strong> Aktif su kesintilerini İZSU
          verilerinden anlık olarak gösterir; ilçe ve mahalle bazında
          filtrelenebilir.
        </li>
        <li>
          <strong>ALO 185:</strong> İZSU'nun 7/24 ücretsiz müşteri
          hizmetleri hattı. Arıza ihbarı ve durum sorgulama için aranabilir.
        </li>
        <li>
          <strong>İZSU resmi web sitesi ve sosyal medya:</strong> Planlı
          kesintiler birkaç gün öncesinden, arıza güncellemeleri ise
          gün içinde paylaşılır.
        </li>
        <li>
          <strong>Apartman yönetimi / muhtar:</strong> Mahalleye özgü
          duyurular zaman zaman bu kanallar üzerinden iletilir.
        </li>
      </ul>

      <h2>Kesinti Sırasında Ne Yapmalı?</h2>
      <ul>
        <li>
          <strong>Su stoğu oluşturun:</strong> Uzun sürecek kesintiler
          için büyük bidon veya termal şişelere içme suyu doldurun.
          Banyo ve tuvalet için kovaya su alabilirsiniz.
        </li>
        <li>
          <strong>Tüketimi kısın:</strong> Kesinti devam ederken
          çamaşır makinesi, bulaşık makinesi gibi cihazları çalıştırmayın.
        </li>
        <li>
          <strong>Boileri kapatın:</strong> Güneş enerjili veya elektrikli
          su ısıtıcıları; su yokken çalışmaya devam ederse hasar görebilir.
          Kesinti süresince cihazı kapalı tutun.
        </li>
        <li>
          <strong>İZSU'yu haberdar edin:</strong> Arızanın bildirilmemiş
          olduğunu düşünüyorsanız ALO 185'i arayarak ihbar edin;
          bu müdahale süresini kısaltır.
        </li>
      </ul>

      <h2>Su Tasarrufu: Uzun Vadeli Önlem</h2>
      <p>
        Kesintiler anlık bir sorun olsa da kuraklık dönemlerinde su tasarrufu
        yapmak hem bireysel hem toplumsal açıdan önem taşır. Günlük
        alışkanlıklarda küçük değişiklikler su tüketimini önemli ölçüde
        azaltabilir.
      </p>
      <p>
        Pratik yöntemler için:{" "}
        <a href="/blog/evde-su-tasarrufu-12-pratik-yontem">
          Evde Su Tasarrufu: 12 Pratik Yöntem
        </a>
      </p>
    </>
  )
}
