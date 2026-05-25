import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "azot-dioksit-no2-trafik-kirliligi",
  title: "Azot Dioksit (NO₂) Nedir? Trafik Kaynaklı Kirlilik ve Sağlık Etkileri",
  description:
    "Azot dioksit (NO₂) nedir, nereden gelir? Dizel araçlar ve trafik sıkışıklığının hava kirliliğine katkısı, solunum sistemi etkileri ve şehirlerde NO₂ seviyeleri.",
  date: "2026-05-25",
  category: "Hava Kalitesi",
  summary:
    "Azot dioksit (NO₂), başta dizel araçlar ve sanayi tesisleri olmak üzere yüksek sıcaklıklı yanma süreçlerinde oluşan keskin kokulu bir gazdır. Solunum yollarını tahriş eder; uzun süreli maruziyet astım ve kronik bronşit riskini artırır. Trafik yoğunluğu yüksek şehirlerde önemli bir hava kalitesi göstergesidir.",
  readTime: 6,
  faq: [
    {
      question: "NO₂ neden özellikle trafik ile ilişkilendirilir?",
      answer:
        "Azot dioksit, yüksek sıcaklıklı yanma sırasında atmosferdeki azot ve oksijenin birleşmesiyle oluşur. Dizel motorlar bu reaksiyon için ideal sıcaklığa ulaşır; bu nedenle dizel araçlar, otobüsler ve kamyonlar önemli NO₂ kaynaklarıdır. Benzinli araçlar da NOₓ üretir ancak dizel motorlara kıyasla daha az. Trafik sıkışıklığı ve rölantide bekleme emisyonu artırır.",
    },
    {
      question: "NO₂'nin sağlığa etkileri nelerdir?",
      answer:
        "Kısa süreli yüksek maruziyet göz, burun ve boğazda tahrişe, öksürük ve nefes darlığına yol açar. Uzun süreli maruziyet astım riskini artırır; çocuklarda akciğer gelişimini olumsuz etkiler. Astım hastalarında semptomları şiddetlendirebilir. Dünya Sağlık Örgütü NO₂ için yıllık ortalama 10 µg/m³ kılavuz değerini tavsiye etmektedir.",
    },
    {
      question: "NO₂ ile ozon arasındaki bağlantı nedir?",
      answer:
        "NO₂, güneş ışığı altında kimyasal reaksiyon zinciriyle yüzey ozonu (O₃) oluşumuna katkı sağlar. Bu nedenle yüksek NO₂ bölgelerinde öğleden sonra ozon seviyeleri de yükselebilir. İkisi birbirini besleyen iki farklı kirleticidir; kentsel hava kalitesi yönetiminde ikisi birlikte değerlendirilir.",
    },
    {
      question: "Şehirlerde NO₂'yi azaltmak için ne yapılıyor?",
      answer:
        "Dünya genelinde başvurulan başlıca önlemler: Düşük Emisyon Bölgeleri (DEZ) oluşturarak kirli araçların şehir merkezine girişini kısıtlamak, toplu taşıma filosunu elektrikli araçlara dönüştürmek, bisiklet ve yaya altyapısını güçlendirmek ve Euro 6 gibi sıkı araç emisyon standartları uygulamaktır.",
    },
    {
      question: "Evde NO₂ kaynakları olabilir mi?",
      answer:
        "Evet. Doğal gaz ocakları, şofbenler ve kömür sobası gibi yakma araçları iç mekânda NO₂ üretebilir. İyi havalandırılmamış mutfak ve banyolarda NO₂ konsantrasyonu yükselebilir. Bu nedenle gaz ocağı kullanırken havalandırma açık tutulmalı, şofbenler dışarıya baca bağlantısıyla kullanılmalıdır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Hava kalitesi raporlarında sıkça görünen{" "}
        <strong>NO₂ (azot dioksit)</strong>, özellikle trafik yoğun
        şehirlerde önemli bir hava kirleticisidir. Yalnızca dışarıda
        değil, iç mekânlarda da kaynak bulunabilir. Bu yazıda
        NO₂'nin ne olduğunu, nasıl oluştuğunu ve sağlık etkilerini
        ele alıyoruz.
      </p>

      <h2>Azot Dioksit (NO₂) Nedir?</h2>
      <p>
        Azot dioksit, iki azot oksidin en bilinenidir (NOₓ grubundan).
        Keskin, boğucu kokulu kırmızımsı-kahverengi renkli bir gazdır.
        Yüksek sıcaklıklı yanma süreçlerinde, atmosferdeki azot (N₂)
        ve oksijenin (O₂) birleşmesiyle oluşur.
      </p>
      <p>
        Kaynakları:
      </p>
      <ul>
        <li>Dizel motorlu araçlar (başta otobüs, kamyon, eski araçlar)</li>
        <li>Benzinli araçlar (daha az)</li>
        <li>Enerji santralları ve sanayi tesisleri</li>
        <li>Isınma amaçlı yakma (kömür, fuel-oil)</li>
        <li>İç mekânda: gaz ocağı, şofben, soba</li>
      </ul>

      <h2>Trafik ve NO₂ Bağlantısı</h2>
      <p>
        Motorlu taşıtlar, özellikle <strong>dizel araçlar</strong>,
        şehirlerdeki NO₂ kirliliğinin başlıca kaynağıdır. Dizel
        motorun yüksek yanma sıcaklığı NOₓ üretimi için elverişlidir.
        Durağan trafik ve rölantide bekleme emisyonu artırır; bu
        yüzden kavşak ve tünel çevrelerinde NO₂ seviyeleri daha
        yüksek ölçülür.
      </p>
      <p>
        Avrupa'da dizel araçların şehir içi NO₂ kirliliğine katkısı
        iyi belgelenmiştir. Paris, Londra ve Amsterdam gibi şehirler
        bu nedenle dizel araçları kısıtlayan{" "}
        <strong>Düşük Emisyon Bölgeleri (DEZ)</strong> uygulamaktadır.
      </p>

      <h2>NO₂ ve Ozon: İkili Sorun</h2>
      <p>
        NO₂ ve yüzey ozonu birbirini besler. NO₂, güneş ışığı altında
        parçalanarak ozon oluşumunu tetikler. Sabah saatlerinde trafik
        emisyonuyla yükselen NO₂, öğleden sonra ozona dönüşebilir.
        Bu nedenle kentsel hava kalitesi değerlendirmesinde her ikisi
        birlikte izlenir.
      </p>

      <h2>Sağlık Etkileri</h2>

      <h3>Kısa Süreli Maruziyet</h3>
      <ul>
        <li>Burun, boğaz ve göz tahrişi</li>
        <li>Öksürük ve hırıltılı nefes</li>
        <li>Nefes darlığı, özellikle egzersiz sırasında</li>
        <li>Yüksek konsantrasyonda akciğer ödemi riski</li>
      </ul>

      <h3>Uzun Süreli Maruziyet</h3>
      <ul>
        <li>Astım riskinin artması ve mevcut astımın kötüleşmesi</li>
        <li>Kronik bronşit gelişimi</li>
        <li>Çocuklarda akciğer gelişiminin yavaşlaması</li>
        <li>Solunum yolu enfeksiyonlarına karşı direncin azalması</li>
      </ul>

      <h3>DSÖ Kılavuz Değerleri</h3>
      <p>
        Dünya Sağlık Örgütü 2021 yılında yayımladığı güncellenmiş
        rehberde NO₂ için:
      </p>
      <ul>
        <li><strong>Yıllık ortalama:</strong> 10 µg/m³</li>
        <li><strong>24 saatlik ortalama:</strong> 25 µg/m³</li>
      </ul>
      <p>
        kılavuz değerini tavsiye etmektedir. Bu değerler 2005
        kılavuzuna göre belirgin biçimde düşürülmüştür;
        araştırmalar daha düşük konsantrasyonlarda da sağlık
        etkisi olduğunu ortaya koymuştur.
      </p>

      <h2>İç Mekân NO₂ Kaynakları</h2>
      <p>
        Hava kirliliği yalnızca dışarıda değildir. Kapalı mekânlarda
        NO₂ kaynaklayan cihazlar:
      </p>
      <ul>
        <li>
          <strong>Gaz ocağı ve fırın:</strong> Kullanım sırasında
          NO₂ üretir. Mutfak davlumbazını veya pencereyi açın.
        </li>
        <li>
          <strong>Şofben:</strong> Bacasız veya yetersiz baca
          bağlantılı şofben iç mekânda NO₂ ve CO biriktirebilir.
          Her şofbenin dışarıya baca bağlantısı olmalıdır.
        </li>
        <li>
          <strong>Kömür ve odun sobası:</strong> Baca bağlantısı
          olmadan kullanılırsa ciddi risk oluşturur.
        </li>
      </ul>

      <h2>Şehirlerde NO₂'yi Azaltmak</h2>
      <p>
        Kentsel ölçekte başvurulan yöntemler:
      </p>
      <ul>
        <li>
          <strong>Elektrikli toplu taşıma:</strong> Otobüs ve metro
          filosunun elektriklenmesi trafik kökenli emisyonları
          doğrudan keser.
        </li>
        <li>
          <strong>Düşük Emisyon Bölgeleri:</strong> Kirlilik eşiğini
          aşan araçların şehir merkezine girişini kısıtlar.
        </li>
        <li>
          <strong>Aktif ulaşım altyapısı:</strong> Bisiklet yolu ve
          yaya öncelikli sokak genişletmek araç kullanımını azaltır.
        </li>
        <li>
          <strong>Araç emisyon standartları:</strong> Euro 6 ve
          sonrası standartlar NOₓ sınırını önemli ölçüde düşürmüştür.
        </li>
      </ul>
      <p>
        Bireysel olarak şehir içinde toplu taşıma, bisiklet veya
        yürüyüş tercih etmek en doğrudan katkıdır.
      </p>

      <h2>İzmir'de Takip</h2>
      <p>
        Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın
        Hava Kalitesi İzleme Ağı (HKIO), İzmir'deki istasyonlarda
        NO₂ değerlerini anlık olarak yayımlar. Yüksek trafik
        yoğunluğundaki bölgelerde ölçüm değerleri daha yüksek
        seyreder.
      </p>
      <p>
        Hava kalitesi göstergeleri ve AKİ hakkında:{" "}
        <a href="/blog/hava-kalitesi-rehberi">
          Hava Kalitesi Nedir? AKİ, PM2.5, NO₂ — Eksiksiz Rehber
        </a>
      </p>
      <p>
        Ozon kirliliği ile NO₂ arasındaki ilişki için:{" "}
        <a href="/blog/ozon-kirliligi-nedir-saglik-etkileri">
          Ozon (O₃) Kirliliği Nedir? Yüzey Ozonu ve Sağlık Etkileri
        </a>
      </p>
    </>
  )
}
