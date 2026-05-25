import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-hava-iklim-ozellikleri",
  title: "İzmir'de Hava Nasıl? İklim Özellikleri, Mevsimler ve Ortalamalar",
  description:
    "İzmir'in Akdeniz iklimine özgü sıcaklık ve yağış ortalamaları, mevsimsel özellikler, poyraz ve meltem rüzgarları, en yağışlı ve en sıcak aylar.",
  date: "2026-05-25",
  category: "İzmir Rehberi",
  summary:
    "İzmir, tipik Akdeniz iklimine (Köppen Csa) sahiptir: yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır. Yıllık ortalama sıcaklık yaklaşık 17–18 °C, yıllık yağış 680–730 mm'dir. Poyraz ve meltem rüzgarları şehrin havasını etkileyen başlıca yerel unsurlardır.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de en sıcak ay hangisi?",
      answer:
        "İzmir'de en yüksek ortalama sıcaklıklar temmuz ve ağustos aylarında görülür. Bu dönemde gündüz ortalama sıcaklık 33–35 °C dolaylarında seyreder; 40 °C'yi aşan sıcaklıklar yaşanabilir. Gece sıcaklıkları 22–24 °C düzeyindedir.",
    },
    {
      question: "İzmir'de en çok yağış hangi aylarda düşer?",
      answer:
        "İzmir'de yağışın büyük bölümü kasım–mart arasında düşer; en yağışlı ay genellikle aralık veya ocaktır. Haziran–eylül döneminde yağış son derece azdır; bu dönem kuru yaz mevsimine karşılık gelir. Yıllık toplam yağış 680–730 mm civarındadır.",
    },
    {
      question: "Poyraz ve meltem nedir?",
      answer:
        "Poyraz, kuzeydoğudan esen serin bir yerel rüzgardır; özellikle Ege körfezini etkiler, sıcaklığı hafifletir ve deniz göçünü zorlaştırabilir. Meltem ise yaz aylarında esen batı veya kuzeybatı kökenli Ege rüzgarıdır; serinletici etkisi ve sörf/rüzgar sörf aktiviteleri için önemlidir. Alaçatı, kuvvetli meltemiyle ünlüdür.",
    },
    {
      question: "İzmir'de kar yağar mı?",
      answer:
        "İzmir şehir merkezinde kar yağışı son derece nadir ve kısa sürelidir; yılda bir kez bile görülmeyebilir. İzmir'in iç kesimlerinde (Ödemiş, Kiraz, Bergama) ve Bozdağ eteklerinde kış aylarında kar yağışı daha düzenli görülür. Bozdağ Kayak Merkezi bu nedenle İzmirlilerin kış destinasyonudur.",
    },
    {
      question: "İzmir'e hangi mevsimde gidilmeli?",
      answer:
        "Deniz tatili için haziran–ekim, kültürel gezi için nisan–mayıs veya eylül–ekim idealdir. Temmuz–ağustos en sıcak dönemdir; plajlar ve turistik mekânlar bu dönemde en kalabalıktır. Kış ayları ılık (10–15 °C) ama yağışlıdır; kalabalık olmadan şehri gezmek isteyenler için uygundur.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'in iklimi, klasik{" "}
        <strong>Akdeniz iklimi (Köppen: Csa)</strong> olarak
        sınıflandırılır: sıcak ve kurak yazlar, ılık ve yağışlı kışlar.
        Bu iklim tipi bölgeye bol güneş, uzun yaz sezonu ve tarihsel
        olarak zeytin, üzüm ve narenciye tarımına uygun koşullar sağlar.
      </p>

      <h2>Mevsimsel Özellikler</h2>

      <h3>İlkbahar (Mart – Mayıs)</h3>
      <p>
        İzmir'de ilkbahar erken gelir. Mart başında doğa uyanırken
        poyraz rüzgarı zaman zaman serinletir. Nisan ve mayıs en güzel
        aylar arasındadır: 18–25 °C arasında seyreden sıcaklık, yeşil
        tepeler ve çiçeklenmiş ağaçlarla İzmir en canlı görünümünü alır.
        Bu dönem pollen sezonunun da zirve yaptığı dönemdir.
      </p>

      <h3>Yaz (Haziran – Eylül)</h3>
      <p>
        Haziran'dan itibaren hava hızla ısınır. Temmuz ve ağustos
        gündüz ortalama sıcaklıkları <strong>33–35 °C</strong>
        düzeyine ulaşır; 40 °C'yi aşan sıcak dalgalar yaşanabilir.
        Yağış yok denecek kadar azdır. Ege'den esen meltem rüzgarı
        özellikle sahil kesimlerde bunaltıcı sıcaklığı hafifletir.
      </p>
      <p>
        Deniz suyu en sıcak değerine ağustos sonunda ulaşır; eylül
        de yüzme için mükemmel bir aydır.
      </p>

      <h3>Sonbahar (Ekim – Kasım)</h3>
      <p>
        Ekim başında hava yavaş yavaş serinler ve yağışlar başlar.
        Kasım, yılın en yağışlı dönemine geçişi işaret eder. Gündüz
        sıcaklıkları 18–22 °C, gece 12–15 °C civarındadır. Sonbahar,
        tatil kalabalığından arınan şehri keşfetmek için iyi bir dönemdir.
      </p>

      <h3>Kış (Aralık – Şubat)</h3>
      <p>
        İzmir kışları Türkiye'nin iç kesimleriyle kıyaslandığında
        çok ılıktır. Ortalama gündüz sıcaklıkları <strong>12–15 °C</strong>
        düzeyindedir; dondurucu soğuklar yaşanmaz. Yağmur, don ve
        sis zaman zaman görülür; kar şehir merkezinde nadirdir.
        İzmir iç kesimleri (Ödemiş, Bozdağ) daha soğuktur.
      </p>

      <h2>Ortalama Sıcaklık ve Yağış</h2>
      <p>
        Uzun yıllık gözlem verisine dayanan yaklaşık değerler:
      </p>
      <table>
        <thead>
          <tr>
            <th>Ay</th>
            <th>Ort. Maks. (°C)</th>
            <th>Ort. Min. (°C)</th>
            <th>Yağış (mm)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ocak</td><td>12</td><td>5</td><td>120</td></tr>
          <tr><td>Şubat</td><td>13</td><td>6</td><td>95</td></tr>
          <tr><td>Mart</td><td>17</td><td>8</td><td>70</td></tr>
          <tr><td>Nisan</td><td>22</td><td>12</td><td>40</td></tr>
          <tr><td>Mayıs</td><td>27</td><td>16</td><td>25</td></tr>
          <tr><td>Haziran</td><td>32</td><td>21</td><td>8</td></tr>
          <tr><td>Temmuz</td><td>35</td><td>24</td><td>3</td></tr>
          <tr><td>Ağustos</td><td>34</td><td>23</td><td>4</td></tr>
          <tr><td>Eylül</td><td>30</td><td>19</td><td>18</td></tr>
          <tr><td>Ekim</td><td>24</td><td>14</td><td>55</td></tr>
          <tr><td>Kasım</td><td>18</td><td>10</td><td>105</td></tr>
          <tr><td>Aralık</td><td>13</td><td>7</td><td>130</td></tr>
        </tbody>
      </table>
      <p>
        <em>Not: Değerler Meteoroloji Genel Müdürlüğü uzun dönem ortalamalarına
        dayanan yaklaşık aralıklardır; yıla göre sapma görülür.</em>
      </p>

      <h2>Rüzgarlar</h2>
      <p>
        İzmir ve çevresi iki önemli yerel rüzgarın etkisi altındadır:
      </p>
      <ul>
        <li>
          <strong>Poyraz:</strong> Kuzeydoğudan eser; özellikle sonbahar
          ve kışın görülür. Körfezi kışın dalgalı yapar, serinleticidir.
        </li>
        <li>
          <strong>Meltem:</strong> Yaz aylarında batı ve kuzeybatıdan
          eser; öğleden sonra güçlenir. Ege kıyılarında sıcakların
          bunaltıcı hissettirmemesinin önemli nedenlerinden biridir.
          Çeşme ve Alaçatı kuvvetli meltemleriyle sörf destinasyonu
          olarak öne çıkar.
        </li>
      </ul>

      <h2>Resmi Hava Verisi Kaynakları</h2>
      <ul>
        <li>
          <strong>Meteoroloji Genel Müdürlüğü (mgm.gov.tr)</strong> —
          Türkiye'nin resmi hava tahmin servisi; İzmir istasyonları dahil
        </li>
        <li>
          <strong>MGM mobil uygulaması</strong> — konum bazlı anlık tahmin
        </li>
        <li>
          Windy.com ve Yr.no — Ege kıyısı için detaylı rüzgar ve dalga
          tahminleri içeren platformlar
        </li>
      </ul>

      <p>
        İzmir ilçeleri ve coğrafyası için:{" "}
        <a href="/blog/izmir-ilceleri-kac-ilce-var">
          İzmir'in İlçeleri: 30 İlçe ve Temel Bilgiler
        </a>
      </p>
      <p>
        İzmir deniz sıcaklıkları için:{" "}
        <a href="/blog/izmir-deniz-suyu-sicakligi-aylik">
          İzmir Deniz Suyu Sıcaklığı: Aylık Ortalama Takvim
        </a>
      </p>
    </>
  )
}
