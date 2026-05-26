import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "pm10-pm25-nedir-saglik-etkileri",
  title: "PM10 ve PM2.5 Nedir? Partikül Madde Sağlığa Nasıl Etki Eder?",
  description:
    "PM10 ve PM2.5 partikül maddeleri nedir, nereden gelir, sağlığa etkileri nelerdir? Dünya Sağlık Örgütü'nün önerdiği üst sınır değerler.",
  date: "2026-05-18",
  category: "Hava Kalitesi",
  summary:
    "Partikül madde havada askıda kalan mikroskopik parçacıklardır. Çapına göre PM10 ve PM2.5 olarak sınıflandırılır; ikincisi solunum yoluyla kana karışabildiği için daha tehlikelidir.",
  readTime: 4,
  faq: [
    {
      question: "PM10 ve PM2.5 arasındaki fark nedir?",
      answer:
        "PM10 çapı 10 mikrometre ve altındaki kaba partikülleri kapsar; PM2.5 ise çapı 2.5 mikrometre ve altındaki ince partikülleri. PM2.5 çok daha küçük olduğu için akciğerin en derin bölümüne (alveollere) iner ve kan dolaşımına karışabilir, bu yüzden daha tehlikelidir.",
    },
    {
      question: "Sağlığa en zararlı partikül hangisi?",
      answer:
        "PM2.5 sağlığa daha zararlıdır. Boyutu küçük olduğu için akciğerin derinine ulaşır ve kana karışabilir. Uzun süreli maruziyet kalp-damar hastalıkları, astım atakları, KOAH ve inme riskini artırır.",
    },
    {
      question: "WHO'nun önerdiği PM2.5 üst sınır değerleri nedir?",
      answer:
        "Dünya Sağlık Örgütü 2021 yılında yenilediği kılavuzda PM2.5 için yıllık ortalama 5 µg/m³, günlük ortalama 15 µg/m³ önermektedir. PM10 için ise yıllık 15 µg/m³, günlük 45 µg/m³ sınırı belirlenmiştir.",
    },
    {
      question: "Partikül madde nereden gelir?",
      answer:
        "Başlıca kaynaklar trafik (özellikle dizel motorlar, fren ve lastik aşınması), sanayi, kömür ve odun yakımıyla ısınma, inşaat çalışmaları, orman yangınları ve tarımsal yakmadır. Rüzgârla taşınan toz gibi doğal kaynaklar da katkı sağlar.",
    },
    {
      question: "HEPA filtreli hava temizleyici PM2.5 yakalar mı?",
      answer:
        "Evet. HEPA (High-Efficiency Particulate Air) filtreler, 0.3 mikrometre ve üstü parçacıkların en az %99.97'sini yakalar. Bu da PM2.5'i de büyük ölçüde filtrelediği anlamına gelir. Kapalı ortamda hava kalitesini iyileştirmek için etkili bir yöntemdir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>Partikül madde (PM)</strong>; havada askıda bulunan, çapı
        mikrometre cinsinden ölçülen katı ve sıvı parçacıkların genel adıdır.
        Bu parçacıklar çapına göre iki ana grupta incelenir: <strong>PM10</strong>{" "}
        ve <strong>PM2.5</strong>.
      </p>

      <h2>PM10 ve PM2.5 arasındaki fark</h2>
      <p>
        <strong>PM10:</strong> Çapı 10 mikrometre (μm) ve daha küçük olan
        parçacıklar. Toz, polen, küf sporları gibi kaba parçacıkları kapsar.
        Bir saç telinin yedide biri kalınlığındadır.
      </p>
      <p>
        <strong>PM2.5:</strong> Çapı 2.5 mikrometre ve daha küçük olan ince
        parçacıklar. Bu parçacıklar o kadar küçüktür ki, akciğerlerin en derin
        bölümlerine (alveollere) kadar inebilir ve kan dolaşımına karışabilir.
        Bir saç telinin otuzda birinden daha incedir.
      </p>

      <h2>Partikül madde nereden gelir?</h2>
      <p>Başlıca kaynaklar:</p>
      <ul>
        <li>Trafik (özellikle dizel motorlar, fren ve lastik aşınması)</li>
        <li>Sanayi tesisleri ve enerji üretimi</li>
        <li>Kömür, odun ve diğer fosil yakıtların yakılması (ısınma)</li>
        <li>İnşaat ve yol çalışmaları</li>
        <li>Orman yangınları ve tarımsal yakma</li>
        <li>Doğal kaynaklar: rüzgârla taşınan toz, deniz tuzu</li>
      </ul>

      <h2>Sağlık etkileri</h2>
      <p>
        Partikül madde solunum yoluyla vücuda girer. PM10 üst solunum
        yollarında durdurulabilirken, PM2.5 akciğerin en derin kısımlarına
        kadar nüfuz edebilir. Uzun süreli maruz kalma şu sağlık sorunlarıyla
        ilişkilendirilmiştir:
      </p>
      <ul>
        <li>Astım ve KOAH ataklarında artış</li>
        <li>Bronşit ve diğer solunum yolu enfeksiyonları</li>
        <li>Kalp ve damar hastalıkları</li>
        <li>İnme riskinde artış</li>
        <li>Akciğer fonksiyonlarında düşüş</li>
        <li>Çocuklarda akciğer gelişiminde gerileme</li>
      </ul>

      <h2>Dünya Sağlık Örgütü'nün önerdiği üst sınır</h2>
      <p>
        Dünya Sağlık Örgütü (WHO) 2021 yılında yenilediği hava kalitesi
        kılavuzunda şu sınır değerleri önermektedir:
      </p>
      <ul>
        <li>PM2.5 — yıllık ortalama 5 µg/m³, günlük ortalama 15 µg/m³</li>
        <li>PM10 — yıllık ortalama 15 µg/m³, günlük ortalama 45 µg/m³</li>
      </ul>
      <p>
        Bu değerler küresel öneri sınırlarıdır; ülkelerin ulusal mevzuatları
        zaman içinde bu hedeflere yaklaşacak şekilde güncellenir.
      </p>

      <h2>Hassas gruplar</h2>
      <p>
        Aşağıdaki gruplar partikül madde maruziyetine karşı daha duyarlıdır:
      </p>
      <ul>
        <li>Çocuklar (akciğerleri hâlâ gelişmektedir)</li>
        <li>65 yaş üstü bireyler</li>
        <li>Hamileler</li>
        <li>Astım, KOAH, kalp hastalığı olanlar</li>
      </ul>

      <h2>Maruziyeti azaltmak için</h2>
      <ul>
        <li>Hava kalitesi yüksek günlerde dış mekan egzersizini sabaha veya akşama planlayın</li>
        <li>Trafiğin yoğun olduğu yerlerde uzun süre durmaktan kaçının</li>
        <li>Evde sigara içmeyin, doğru yakıtla ısının</li>
        <li>İç mekanlarda iyi havalandırma sağlayın; gerekirse HEPA filtreli hava temizleyici kullanın</li>
        <li>Toz fırtınası veya yangın günlerinde pencereleri kapatın</li>
      </ul>
    </>
  )
}
