import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "hava-kalitesi-indeksi-aki-nedir",
  title: "Hava Kalitesi İndeksi (AKİ) Nedir? Renk Skalası ve Anlamları",
  description:
    "Hava Kalitesi İndeksi (AKİ) nedir, hangi kirleticileri ölçer, renk skalası ne anlama gelir? 0–500 arası AKİ değerlerinin sağlık üzerindeki etkileri.",
  date: "2026-05-20",
  category: "Hava Kalitesi",
  summary:
    "AKİ, havadaki kirlilik seviyesini tek bir sayıya indirgeyen küresel bir ölçektir. 0–500 arası bir değer ve renk skalasıyla halka iletilir.",
  readTime: 5,
  faq: [
    {
      question: "Hava Kalitesi İndeksi (AKİ) nedir?",
      answer:
        "AKİ, havadaki kirleticilerin (PM10, PM2.5, NO₂, O₃, SO₂, CO) ölçüm değerlerini tek bir sayıya indirgeyerek günlük hava kalitesini sınıflandıran küresel bir ölçektir. 0 ile 500 arası bir değer ve standart renk skalası ile gösterilir.",
    },
    {
      question: "AKİ değeri 100 ne anlama gelir?",
      answer:
        "100 değeri, hava kalitesinin 'Orta' kategorisinin üst sınırıdır ve sarı ile temsil edilir. Genel nüfus için kabul edilebilir seviyededir; ancak çok hassas bireyler (astım hastaları, çocuklar, yaşlılar) hafif rahatsızlık hissedebilir.",
    },
    {
      question: "AKİ kaç kategoriye ayrılır?",
      answer:
        "AKİ 6 kategoriye ayrılır: 0–50 İyi (yeşil), 51–100 Orta (sarı), 101–150 Hassas Gruplar İçin Sağlıksız (turuncu), 151–200 Sağlıksız (kırmızı), 201–300 Çok Sağlıksız (mor), 301 ve üzeri Tehlikeli (bordo).",
    },
    {
      question: "AKİ değerini en çok hangi kirletici belirler?",
      answer:
        "Tek bir kirletici değil; o noktada en yüksek alt-indekse sahip kirletici belirler. Yani PM2.5, NO₂, O₃ gibi kirleticilerin her birinin alt-indeksi ayrıca hesaplanır ve en kötü olan AKİ'nin nihai değeri olur.",
    },
    {
      question: "AKİ verisi Türkiye'de nereden alınır?",
      answer:
        "Türkiye'de hava kalitesi ölçümleri T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'na bağlı sürekli hava kalitesi izleme istasyonlarında yapılır. Ölçüm verileri kamuya açık olarak gerçek zamanlı yayınlanır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>Hava Kalitesi İndeksi (AKİ)</strong>, havadaki kirletici
        miktarlarını tek bir sayıya indirgeyerek günlük hava kalitesini
        sınıflandıran bir ölçektir. Amerika Birleşik Devletleri Çevre Koruma
        Ajansı (EPA) tarafından geliştirilen bu sistem; Türkiye dahil pek çok
        ülke tarafından benimsenmiş ve T.C. Çevre, Şehircilik ve İklim
        Değişikliği Bakanlığı tarafından da kullanılmaktadır.
      </p>

      <h2>AKİ hangi kirleticileri ölçer?</h2>
      <p>
        AKİ; havadaki şu kirleticilerin ölçüm değerlerini birleştirerek
        hesaplanır:
      </p>
      <ul>
        <li>PM10 (10 mikrometre ve altı partikül madde)</li>
        <li>PM2.5 (2.5 mikrometre ve altı ince partikül madde)</li>
        <li>Ozon (O₃)</li>
        <li>Azot dioksit (NO₂)</li>
        <li>Kükürt dioksit (SO₂)</li>
        <li>Karbon monoksit (CO)</li>
      </ul>
      <p>
        Bir noktada bu kirleticilerden hangisi en yüksek alt-indekse sahipse,
        toplam AKİ değeri de o değere eşit kabul edilir. Yani AKİ tek bir
        kirleticinin değil, en kötü durumdaki kirleticinin temsilidir.
      </p>

      <h2>AKİ skalası ve renkleri</h2>
      <p>
        Tüm dünyada genel kabul gören AKİ skalası 6 kategoriden oluşur:
      </p>
      <table>
        <thead>
          <tr>
            <th>AKİ değeri</th>
            <th>Kategori</th>
            <th>Renk</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>0–50</td><td>İyi</td><td>Yeşil</td></tr>
          <tr><td>51–100</td><td>Orta</td><td>Sarı</td></tr>
          <tr><td>101–150</td><td>Hassas gruplar için sağlıksız</td><td>Turuncu</td></tr>
          <tr><td>151–200</td><td>Sağlıksız</td><td>Kırmızı</td></tr>
          <tr><td>201–300</td><td>Çok sağlıksız</td><td>Mor</td></tr>
          <tr><td>301+</td><td>Tehlikeli</td><td>Bordo</td></tr>
        </tbody>
      </table>

      <h2>Sağlık etkileri</h2>
      <p>
        <strong>0–50 (İyi):</strong> Hava kalitesi normaldir, halk için risk
        yok denecek kadar düşüktür.
      </p>
      <p>
        <strong>51–100 (Orta):</strong> Genel nüfus için kabul edilebilir
        seviyededir; çok hassas bireyler hafif rahatsızlık yaşayabilir.
      </p>
      <p>
        <strong>101–150 (Hassas gruplar):</strong> Astım, kalp ve akciğer
        hastaları, çocuklar ve yaşlılar uzun süreli açık hava aktivitelerini
        azaltmalıdır.
      </p>
      <p>
        <strong>151–200 (Sağlıksız):</strong> Herkes için sağlık riskleri
        artmaya başlar. Hassas gruplar dış mekanda yoğun aktiviteden
        kaçınmalıdır.
      </p>
      <p>
        <strong>201–300 (Çok sağlıksız):</strong> Sağlık uyarısı seviyesi.
        Herkes dış mekan aktivitelerini sınırlamalıdır.
      </p>
      <p>
        <strong>301 ve üzeri (Tehlikeli):</strong> Acil sağlık uyarısı; herkes
        kapalı alanda kalmalı, gerekirse maske kullanmalıdır.
      </p>

      <h2>Hava kalitesi nasıl ölçülür?</h2>
      <p>
        Türkiye'de hava kalitesi ölçümleri, Çevre Bakanlığı'na bağlı
        sürekli hava kalitesi izleme istasyonlarında gerçek zamanlı olarak
        yapılır. Veriler kamuya açık olarak yayınlanır ve nokta35 gibi
        platformlar bu verileri vatandaşa daha sade bir arayüzle sunar.
      </p>

      <h2>Sonuç</h2>
      <p>
        AKİ; havayı solunması güvenli olup olmadığını anlamak için pratik
        bir araçtır. Özellikle hassas gruplar (çocuklar, yaşlılar, astım veya
        kalp hastaları) günlük plan yaparken AKİ değerini ve rengini takip
        etmelidir.
      </p>
    </>
  )
}
