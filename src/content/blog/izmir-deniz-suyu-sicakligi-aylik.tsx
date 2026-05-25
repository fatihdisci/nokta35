import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-deniz-suyu-sicakligi-aylik",
  title: "İzmir Deniz Suyu Sıcaklığı: Aylık Ortalama ve Yüzme Takvimi",
  description:
    "İzmir'de Ege Denizi'nin aylık ortalama su sıcaklığı kaç derece? Hangi ayda denize girilir, hangi bölgeler daha sıcak? Yüzme mevsimi rehberi.",
  date: "2026-05-25",
  category: "İzmir Rehberi",
  summary:
    "İzmir kıyılarında Ege Denizi'nin su sıcaklığı yazın 25–28 °C'ye çıkar, kışın 13–16 °C'ye iner. En konforlu yüzme dönemi haziran ortasından ekim başına kadar sürer. Çeşme ve Alaçatı gibi korunaklı koylar açık kıyılara göre birkaç derece daha sıcak olabilir.",
  readTime: 4,
  faq: [
    {
      question: "İzmir'de deniz suyu en sıcak hangi ayda olur?",
      answer:
        "İzmir kıyılarında deniz suyu en yüksek sıcaklığa temmuz sonu – ağustos ortasında ulaşır; açık kıyılarda ortalama 25–27 °C, korunaklı koylarda (Çeşme, Alaçatı, Foça) 27–29 °C'ye kadar çıkabilir. Eylül de yüzme için oldukça elverişlidir ve kalabalık azdır.",
    },
    {
      question: "İzmir'de denize hangi aydan itibaren girilebilir?",
      answer:
        "Ege kıyılarında su sıcaklığı mayıs başında 18–19 °C düzeyindedir; büyük çoğunluk için konforlu yüzme haziran ortasından itibaren başlar (22–23 °C). Bahardan denize giren kesimlerse nisan sonunda 16–17 °C'deki suya da girmektedir. Ekim başına kadar konforlu yüzme sürer; ekim ortasından sonra su 20 °C'nin altına iner.",
    },
    {
      question: "Çeşme ile Foça arasında su sıcaklığı farkı var mı?",
      answer:
        "Evet. Çeşme yarımadasının korunaklı koyları, açık Ege'den ve körfez girişindeki Foça'dan birkaç derece daha sıcak olabilir. Alaçatı koyunun sığ ve kapalı yapısı yazın ısınmayı kolaylaştırır. Körfez içi kıyılar (Karşıyaka, Bayraklı, Bostanlı) ise açık kıyılara kıyasla daha ılıktır ancak yüzme kalitesi tartışmalıdır.",
    },
    {
      question: "Anlık deniz suyu sıcaklığını nereden öğrenirim?",
      answer:
        "Güvenilir güncel deniz suyu sıcaklığı kaynakları: Türkiye Meteoroloji Genel Müdürlüğü (mgm.gov.tr), Copernicus Marine Service (marine.copernicus.eu) ve seatemperature.org gibi uluslararası deniz sıcaklığı izleme platformlarıdır. Hava durumu uygulamaları da deniz sıcaklığı gösterir ancak doğruluğu kaynağa göre değişir.",
    },
    {
      question: "Deniz suyu sıcaklığı neden her yıl değişiyor?",
      answer:
        "Deniz suyu sıcaklığı; yıllık hava sıcaklığı ortalaması, rüzgar yoğunluğu, yağış miktarı ve Ege'deki genel akıntı koşullarına bağlı olarak değişir. Özellikle kuzeyden esen kuvvetli poyraz rüzgarları yüzey suyunu karıştırarak ani serinlemelere yol açabilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir kıyılarında denize ne zaman gireceğinizi planlamak için en
        önemli veri, <strong>Ege Denizi'nin aylık ortalama su sıcaklığıdır</strong>.
        Açık kıyılarda ve korunaklı koylar arasında birkaç derecelik
        fark bulunur; bu da destinasyon seçimini etkiler.
      </p>

      <h2>Aylık Ortalama Su Sıcaklığı Takvimi</h2>
      <p>
        Aşağıdaki değerler İzmir kıyılarına ait uzun yıllık gözlem
        ortalamasından türetilmiş yaklaşık aralıklardır. Yıla göre
        ±2 °C sapma olağandır; güncel değerler için meteoroloji
        kaynaklarını kontrol edin.
      </p>

      <table>
        <thead>
          <tr>
            <th>Ay</th>
            <th>Ortalama Su Sıcaklığı</th>
            <th>Yüzme Konforu</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Ocak</td><td>13–15 °C</td><td>Soğuk, tavsiye edilmez</td></tr>
          <tr><td>Şubat</td><td>13–15 °C</td><td>Soğuk, tavsiye edilmez</td></tr>
          <tr><td>Mart</td><td>14–16 °C</td><td>Soğuk, tavsiye edilmez</td></tr>
          <tr><td>Nisan</td><td>16–18 °C</td><td>Serin, yalnızca alışkın olanlar için</td></tr>
          <tr><td>Mayıs</td><td>19–22 °C</td><td>Kabul edilebilir, yavaş ısınma</td></tr>
          <tr><td>Haziran</td><td>22–24 °C</td><td>İyi, çoğu kişi için konforlu</td></tr>
          <tr><td>Temmuz</td><td>24–27 °C</td><td>Çok iyi, sezon zirvesi</td></tr>
          <tr><td>Ağustos</td><td>25–28 °C</td><td>En sıcak ay</td></tr>
          <tr><td>Eylül</td><td>23–26 °C</td><td>Mükemmel, kalabalık azalır</td></tr>
          <tr><td>Ekim</td><td>20–23 °C</td><td>Sonbahar dönemi, hâlâ girilebilir</td></tr>
          <tr><td>Kasım</td><td>17–20 °C</td><td>Serin, deneyime göre</td></tr>
          <tr><td>Aralık</td><td>14–17 °C</td><td>Soğuk, tavsiye edilmez</td></tr>
        </tbody>
      </table>

      <h2>Yüzme Mevsimi</h2>
      <p>
        Batı standartlarında (20 °C ve üzeri){" "}
        <strong>konforlu yüzme mevsimi mayıs ortasından kasım başına</strong>{" "}
        kadar sürer. Çoğu İzmirlinin denize aktif girdiği dönem ise
        haziran – ekim aralığıdır.
      </p>
      <ul>
        <li>
          <strong>Haziran:</strong> Su ısınmıştır; hafta sonları kalabalık
          olmakla birlikte temmuz-ağustosa göre daha sakin.
        </li>
        <li>
          <strong>Temmuz – Ağustos:</strong> Sezon zirvesi. Plajlar en
          kalabalık, su en sıcaktır.
        </li>
        <li>
          <strong>Eylül:</strong> Deniz yıl boyunca en ılık dönemindedir;
          hava biraz serinler, kalabalık azalır. Pek çok yerel için
          en tercih edilen ay.
        </li>
        <li>
          <strong>Ekim:</strong> Kalabalık minimuma iner; su hâlâ
          18–22 °C arasındadır. Sezonu uzatmak isteyenler için ideal.
        </li>
      </ul>

      <h2>Bölgeye Göre Farklar</h2>
      <p>
        Tüm İzmir kıyıları aynı sıcaklıkta değildir:
      </p>
      <ul>
        <li>
          <strong>Çeşme ve Alaçatı koyları:</strong> Sığ ve korunaklı
          yapıları nedeniyle ağustos zirvesinde 27–29 °C'ye kadar
          ulaşabilir. Rüzgar da yoğun (rüzgar sörfü popüleri).
        </li>
        <li>
          <strong>Açık Ege kıyıları (Karaburun, Mordoğan):</strong>{" "}
          Kuzeyden gelen poyraz suyu karıştırabilir; ani ve geçici
          serinlemeler yaşanabilir.
        </li>
        <li>
          <strong>Foça ve Dikili:</strong> İzmir körfezi girişinde yer
          alan bu noktalar ortalama kıyı sıcaklıklarına yakındır.
        </li>
        <li>
          <strong>İzmir Körfezi iç kıyıları (Karşıyaka, Bostanlı,
          Bayraklı):</strong> Su görece ılıktır ancak körfez içi su
          kalitesi açık deniz kıyılarından farklıdır.
        </li>
      </ul>

      <h2>Anlık Sıcaklık Nerede Görülür?</h2>
      <p>
        Gidilecek gün için güncel deniz suyu sıcaklığı:
      </p>
      <ul>
        <li>
          <strong>Meteoroloji Genel Müdürlüğü (mgm.gov.tr)</strong>{" "}
          — Türkiye kıyı istasyonları için resmi deniz yüzeyi
          sıcaklık ölçümleri
        </li>
        <li>
          <strong>Copernicus Marine Service (marine.copernicus.eu)</strong>{" "}
          — Avrupa deniz gözlem sistemi, Ege dahil
        </li>
        <li>
          Hava durumu uygulamaları (AccuWeather, Windy, Yr.no) da
          deniz sıcaklığı gösterir; ölçüm noktasına göre ±1–2 °C
          sapma olabilir.
        </li>
      </ul>

      <p>
        İzmir'in nitelikli plajları için:{" "}
        <a href="/blog/izmir-plajlari-mavi-bayrak-2026">
          İzmir Mavi Bayrak Plajları 2026: İlçe İlçe Rehber
        </a>
      </p>
      <p>
        İzmir'in iklim özellikleri hakkında:{" "}
        <a href="/blog/izmir-rehberi-cografya-iklim-ilceler">
          İzmir Rehberi: Coğrafya, İklim, İlçeler
        </a>
      </p>
    </>
  )
}
