import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "mayis-2026-kira-artis-orani",
  title: "Mayıs 2026 Kira Artış Oranı: Yasal Tavan ve Hesaplama",
  description:
    "Mayıs 2026 kira artış tavan oranı nedir? TÜİK 12 aylık TÜFE ortalaması nasıl hesaplanır, kiracı ve ev sahibi hakları nelerdir?",
  date: "2026-05-25",
  category: "İzmir Rehberi",
  summary:
    "Türkiye'de konut kira artışı yasal olarak TÜİK tarafından açıklanan 12 aylık tüketici fiyat endeksi (TÜFE) artış ortalamasıyla sınırlandırılmaktadır. Mayıs 2026 için geçerli oran TÜİK'in resmi açıklamasından teyit edilmelidir. Kiracı ve ev sahibi anlaşmazlıklarında Sulh Hukuk Mahkemesi yetkilidir.",
  readTime: 5,
  faq: [
    {
      question: "Mayıs 2026 kira artış tavan oranı nedir?",
      answer:
        "Kira artış tavan oranı, TÜİK'in her ay açıkladığı 12 aylık TÜFE (Tüketici Fiyat Endeksi) değişim oranıdır. Mayıs 2026 için geçerli oranı TÜİK'in resmi sitesinden (tuik.gov.tr) öğrenebilirsiniz. Güncel araştırmalara göre Mayıs 2026 için bu oran yaklaşık %32,43 düzeyinde olduğu belirtilmekle birlikte kesin rakam için resmi TÜİK açıklaması esas alınmalıdır.",
    },
    {
      question: "Kira artış tavan oranını kim belirler?",
      answer:
        "Kira artış tavan oranını Türkiye İstatistik Kurumu (TÜİK) her ay açıkladığı TÜFE verileriyle belirler. Bu oran 6313 sayılı Türk Borçlar Kanunu'nun 344. maddesi kapsamında konut kiralarının artış üst sınırı olarak uygulanır. TÜİK 12 aylık ortalaması yeni kira artışlarında baz alınır.",
    },
    {
      question: "Ev sahibi kira artış tavanını aşarsa ne olur?",
      answer:
        "Ev sahibi yasal tavanı aşan kira artışı talep edemez. Bu durumda kiracı artışı kabul etmek zorunda değildir. Anlaşmazlık halinde kiracı Sulh Hukuk Mahkemesi'ne başvurabilir; hâkim, kira tespit davasında yasal tavan oranını esas alarak karar verir.",
    },
    {
      question: "Kira artış oranı nasıl hesaplanır?",
      answer:
        "Mevcut kira × (1 + TÜFE 12 aylık artış oranı / 100) formülüyle hesaplanır. Örnek: 10.000 TL kira ve %32,43 oran için maksimum yeni kira = 10.000 × 1,3243 = 13.243 TL. Bu hesaplamayı kolaylaştıran çevrimiçi araçlar mevcuttur.",
    },
    {
      question: "Kira artışı ne zaman uygulanır?",
      answer:
        "Kira artışı, kira sözleşmesinde belirtilen yıllık yenileme tarihinde uygulanır. Sözleşmede tarih yoksa sözleşme imza tarihi baz alınır. Ev sahibinin artış talebini önceden yazılı bildirmesi en güvenli yoldur; kiracı da artış oranını peşinen araştırabilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Türkiye'de konut kira artışları{" "}
        <strong>Türk Borçlar Kanunu'nun 344. maddesi</strong> ile sınırlandırılmıştır.
        Her ay TÜİK'in açıkladığı 12 aylık TÜFE (Tüketici Fiyat Endeksi)
        artış ortalaması, konut kiralarının artabileceği yasal üst sınırı
        belirler.
      </p>

      <h2>Mayıs 2026 Kira Artış Tavan Oranı</h2>
      <p>
        Kira artış oranı TÜİK'in her ay sonu yayımladığı TÜFE verisiyle
        güncellenir. <strong>Mayıs 2026 için geçerli yasal tavan</strong>{" "}
        araştırma raporlarında yaklaşık <strong>%32,43</strong> olarak
        belirtilmekle birlikte kesin oran için{" "}
        <strong>tuik.gov.tr</strong> adresinden resmi açıklamayı teyit edin.
      </p>
      <p>
        TÜİK, her ayın yaklaşık 3.–5. günleri bir önceki aya ait TÜFE
        verisini yayımlar; Mayıs 2026 verisi Haziran 2026 başında
        kamuoyuyla paylaşılacaktır.
      </p>

      <h2>Hesaplama Formülü</h2>
      <p>
        Yasal tavan oranı kullanılarak maksimum yeni kira şu şekilde
        hesaplanır:
      </p>
      <p>
        <strong>Yeni Kira = Mevcut Kira × (1 + Oran / 100)</strong>
      </p>
      <p>
        <em>Örnek:</em> Mevcut kira 12.000 TL, oran %32,43 ise:
        <br />
        12.000 × 1,3243 ≈ 15.892 TL maksimum yeni kira
      </p>
      <p>
        Bu hesaplama kiracının ödeyebileceği <em>üst sınırı</em> gösterir;
        ev sahibi bu oranın altında artış talep edebilir, üstünde talep edemez.
      </p>

      <h2>Yasal Çerçeve</h2>
      <p>
        Türk Borçlar Kanunu 344. madde:
      </p>
      <ul>
        <li>
          Konut kiralarında artış, <strong>12 aylık TÜFE ortalamasını</strong>{" "}
          geçemez.
        </li>
        <li>
          Bu kural; hem mevcut sözleşmelerin yenilenmesinde hem de
          kira tespit davalarında uygulanır.
        </li>
        <li>
          5 yıldan uzun sözleşmelerde hâkim, hakkaniyete uygun kira
          tespiti yapabilir.
        </li>
      </ul>

      <h2>Geçici Kira Artış Tavanı Uygulamaları</h2>
      <p>
        Türkiye, 2022–2024 döneminde yüksek enflasyon sürecinde konut
        kiralarını geçici olarak <strong>%25</strong> ile sınırlayan
        yasal düzenleme uyguladı. Bu düzenleme dönemi sona ermiş olup
        2025 ve 2026 yıllarında tekrar TÜFE tabanlı hesaplama geçerlidir.
        Güncel mevzuat için resmi Resmî Gazete ilanlarını takip edin.
      </p>

      <h2>Kiracı Hakları</h2>
      <ul>
        <li>
          <strong>Tavanı aşan artışı reddedin:</strong> Yasal tavan
          üzerinde artış talep edilirse kabul etmek zorunda değilsiniz.
          Yazılı olarak itiraz edin.
        </li>
        <li>
          <strong>Kira tespit davası:</strong> Anlaşmazlık çözülemezse
          Sulh Hukuk Mahkemesi'nde dava açılabilir.
        </li>
        <li>
          <strong>Tahliye tehdidi:</strong> Kira artışını reddettiği için
          kiracıyı tahliye etmek hukuka aykırıdır; ancak diğer sözleşme
          koşullarına uyun.
        </li>
      </ul>

      <h2>Ev Sahibi Hakları</h2>
      <ul>
        <li>
          Yasal tavan içinde kalmak kaydıyla kira artışı talep edebilir.
        </li>
        <li>
          Kira artışı talebini yıllık yenileme tarihinden önce
          (tercihen yazılı olarak) bildirmesi önerilir.
        </li>
        <li>
          Piyasa kiraları yasal tavanın çok üzerindeyse 5 yıl sonra
          mahkemeden kira tespiti talep edebilir.
        </li>
      </ul>

      <h2>Kaynaklar</h2>
      <ul>
        <li>
          <strong>TÜİK (tuik.gov.tr)</strong> — TÜFE aylık veri tablosu
        </li>
        <li>
          <strong>Türk Borçlar Kanunu md. 344</strong> — mevzuat.gov.tr
        </li>
        <li>
          İzmir Barosu ve Kiracı Dernekleri — hukuki danışmanlık
        </li>
      </ul>

      <p>
        İzmir'de kira araştırması için:{" "}
        <a href="/blog/izmir-kira-fiyatlari-nasil-arastirilir">
          İzmir Kira Fiyatları Nasıl Araştırılır?
        </a>
      </p>
    </>
  )
}
