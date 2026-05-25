import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "gida-israfi-onlemek-pratik-yontemler",
  title: "Gıda İsrafını Önlemek: Evde Uygulanabilir 12 Pratik Yöntem",
  description:
    "Gıda israfı neden önemli, evde nasıl önlenir? Alışveriş planlaması, doğru saklama, son kullanma tarihi mantığı ve buzdolabı düzeni ile israfı azaltma rehberi.",
  date: "2026-05-25",
  category: "Sürdürülebilir Yaşam",
  summary:
    "Dünya genelinde üretilen gıdanın yaklaşık üçte biri tüketilmeden atılmaktadır. Ev düzeyinde gıda israfını önlemenin en etkili yolları; planlı alışveriş, doğru saklama koşulları ve son kullanma tarihi ile tüketim tarihi arasındaki farkı bilmektir. Bu önlemler hem bütçeyi hem de çevresel yükü azaltır.",
  readTime: 6,
  faq: [
    {
      question: "Son kullanma tarihi ile tüketim tarihi arasındaki fark nedir?",
      answer:
        "Son kullanma tarihi (SKT / 'use by'), özellikle et, süt ve hazır yemek gibi ürünlerde güvenlik sınırını gösterir; bu tarihten sonra sağlık riski doğabilir. Tüketim tarihi ('best before' / tavsiye tarihi) ise kalite sınırını gösterir; ürün bu tarihten sonra beğeni düzeyinde bozulabilir ama tehlikeli değildir. Konserve, kuru baklagil veya dondurulmuş gıdalarda 'best before' geçtikten sonra da ürün çoğunlukla güvenle tüketilebilir.",
    },
    {
      question: "Sebze ve meyveleri nasıl sakladığımızda daha uzun dayanır?",
      answer:
        "Domates, patates, soğan, sarımsak ve muz oda sıcaklığında daha iyi muhafaza edilir; buzdolabı bazı ürünlerin tadını ve dokusunu bozar. Yapraklı sebzeler nemli kâğıt havluya sarılarak buzdolabı çekmecesine koyulursa 3–5 gün daha taze kalır. Meyveler etilen gazı salarsa (elma, muz) diğer ürünleri hızlandırır; ayrı tutulmalıdır.",
    },
    {
      question: "Artanları değerlendirmenin en pratik yolları neler?",
      answer:
        "Pişmiş artanlar dondurulabilir; bu hem yeni bir öğün hazırlama zahmetini hem de israfı önler. Sebze artıkları (sap, kabuk, kök uçları) çorba suyu için kaynatılabilir. Bayat ekmek kızartılarak kruton yapılabilir, rendelenip dondurulabilir veya sütlü tatlılarda kullanılabilir. Meyve artıkları smoothie'ye veya ev reçeline dönüşebilir.",
    },
    {
      question: "Haftalık alışveriş planlaması gıda israfını gerçekten azaltır mı?",
      answer:
        "Araştırmalar, plansız alışveriş yapan hanelerin ortalama %30–40 daha fazla gıda israf ettiğini göstermektedir. Haftalık menü planı yapılması, liste dışına çıkılmaması ve buzdolabını açık bırakarak alışveriş yapılmaması en etkili üç adımdır. Market açlık hissedilirken gezmek dürtüsel alımları tetikler.",
    },
    {
      question: "Gıda israfını azaltmak karbon ayak izini nasıl etkiler?",
      answer:
        "Gıdanın üretimi, işlenmesi ve taşınması önemli miktarda enerji ve su tüketir. Atılan gıda bu tüketimi 'boşa' çıkarır. Ayrıca çöpe giden organik atık düzenli depolarda metan gazı (güçlü bir sera gazı) üretir. FAO verilerine göre gıda israfı, küresel sera gazı salımlarının yaklaşık %8–10'undan sorumludur.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Her yıl dünyada üretilen gıdanın yaklaşık üçte biri —{" "}
        <strong>1,3 milyar ton</strong> — tüketilmeden atılmaktadır (FAO
        verileri). Bu hem muazzam bir ekonomik kayıp hem de iklim
        üzerinde ağır bir yük. İyi haber şu: ev düzeyinde alınan
        birkaç basit önlem bu oranı ciddi ölçüde düşürür.
      </p>

      <h2>1. Haftalık Menü Planlayın</h2>
      <p>
        En etkili önlem, alışverişe çıkmadan önce <strong>o hafta
        ne pişireceğinizi</strong> kabaca belirlemektir. Haftanın 4–5
        öğününü listelemek; neye ne kadar ihtiyacınız olduğunu
        netleştirir, dürtüsel alımları engeller.
      </p>

      <h2>2. Liste Olmadan Markete Girmeyin</h2>
      <p>
        Yazılı veya dijital alışveriş listesi, listede olmayan ürünleri
        sepete koyma isteğini zayıflatır. İdeal olanı, alışverişe
        gitmeden önce <strong>buzdolabı ve dolap stoğunu kontrol
        etmek</strong>, eksiği listeye eklemek, fazlayı almamaktır.
      </p>

      <h2>3. "İlk Giren İlk Çıkar" Buzdolabı Düzeni</h2>
      <p>
        Yeni alınan ürünleri arkaya, eski ürünleri öne koyun. Bu
        basit düzen, arkada unutulan ve çürüyen ürün sayısını
        dramatik biçimde azaltır. Haftada bir "rafları tarama"
        alışkanlığı da eski ürünleri önce tüketmenizi sağlar.
      </p>

      <h2>4. Son Kullanma Tarihi ile Tüketim Tarihini Ayırt Edin</h2>
      <p>
        İki kavram farklıdır:
      </p>
      <ul>
        <li>
          <strong>Son kullanma tarihi (SKT / "use by"):</strong> Güvenlik
          sınırı. Özellikle et, süt ve hazır yemek gibi çabuk bozulan
          ürünlerde geçerlidir. Bu tarihten sonra sağlık riski oluşabilir.
        </li>
        <li>
          <strong>Tavsiye tarihi ("best before"):</strong> Kalite sınırı.
          Konserve, kuru bakliyat, dondurulmuş gıda gibi ürünlerde bu
          tarih geçtikten sonra lezzet biraz değişebilir ama genellikle
          güvenle tüketilebilir.
        </li>
      </ul>
      <p>
        Türkiye'de pek çok tüketici ikisini karıştırarak tavsiye tarihi
        geçmiş konserveleri çöpe atmaktadır; bu büyük bir israftır.
      </p>

      <h2>5. Doğru Saklama Koşulları</h2>
      <p>
        Her gıda buzdolabına girmez. Doğru saklama ömrü uzatır:
      </p>
      <ul>
        <li>
          <strong>Oda sıcaklığında saklananlar:</strong> Domates,
          patates, soğan, sarımsak, muz, ekmek. Buzdolabı bunların
          tadını ve dokusunu bozar.
        </li>
        <li>
          <strong>Buzdolabında saklananlar:</strong> Yapraklı sebzeler,
          kesik meyveler, et, süt ürünleri. Yapraklı sebzeleri nemli
          kâğıt havluya sararak saklarsanız 3–5 gün daha dayanır.
        </li>
        <li>
          <strong>Etilen gazına dikkat:</strong> Elma, muz, armut
          etilen gazı salar; bu gaz yakındaki ürünleri hızlandırır.
          Ayrı tutun.
        </li>
      </ul>

      <h2>6. Küçük Porsiyonlarda Pişirin, Fazlasını Dondurun</h2>
      <p>
        Pişmiş yemeğin artanını soğuduktan sonra hava geçirmez
        kaplarda dondurabilirsiniz. Çorba, sebze yemekleri ve
        kuru baklagilerin büyük çoğunluğu 3 aya kadar dondurucuda
        kalır. Sonraki gün öğle yemeği olarak çözülmesi yeterlidir.
      </p>

      <h2>7. Sebze Artıklarından Çorba Suyu</h2>
      <p>
        Soğan kabuğu, havuç ucu, kereviz sapı, maydanoz kökü gibi
        atık kısımları bir poşette biriktiribip dondurabilirsiniz.
        Yeterince birikiğinde suya atıp 45 dakika kaynatın —
        mükemmel bir <strong>sebze suyu</strong> elde edersiniz.
        Et kalıntıları için de aynı yöntem geçerlidir.
      </p>

      <h2>8. Bayat Ekmeği Değerlendirin</h2>
      <p>
        Bayatlamış ekmek çöpe gitmez:
      </p>
      <ul>
        <li>Küp doğranıp fırınlanarak <strong>kruton</strong></li>
        <li>Rendelenip dondurularak <strong>galeta unu</strong></li>
        <li>Sütlü tatlılarda (ekmek tatlısı, muhallebi tabanı)</li>
        <li>Sarımsak-zeytinyağıyla kavrularak çorba üzeri</li>
      </ul>
      <p>
        olarak kullanılabilir.
      </p>

      <h2>9. Aşırı Miktarda Alışveriş Yapmayın</h2>
      <p>
        "İndirimde" veya "3 al 2 öde" kampanyaları cazip gelir; ancak
        tüketemeyeceğiniz miktarda alınan ürün isrâfa dönüşürse
        tasarruf ortadan kalkar. Raf ömrü uzun ürünlerde (konserve,
        pirinç, makarna) stok yapmak mantıklıdır; taze ürünlerde değil.
      </p>

      <h2>10. Meyve Artıklarını Kullanın</h2>
      <p>
        Çok olgunlaşmış muz dondurularak <strong>smoothie veya
        muzlu kek</strong> için biriktirilir. Kurtarmak istediğiniz
        çilek, üzüm veya şeftali; şekerle kısa süre pişirilerek
        ev reçeline ya da meyve sosuna dönüşür.
      </p>

      <h2>11. Porsiyon Ölçülerini Kişi Sayısına Göre Ayarlayın</h2>
      <p>
        Tarifler çoğunlukla 4–6 kişi içindir. İki kişilik hanede
        tam tarif uygulandığında yarısı çöpe gidebilir. Tarifleri
        yarıya indirme alışkanlığı edinmek veya kalan kısmı bilinçli
        olarak dondurmak bu döngüyü kırar.
      </p>

      <h2>12. Kompost ile Kaçınılmaz Artıkları Değerlendirin</h2>
      <p>
        Meyve kabuğu, sebze artığı, yumurta kabuğu gibi kaçınılmaz
        organik atıklar kompostlanabilir. Kompost hem gıda israfını
        azaltır hem de toprağı zenginleştirir.
      </p>
      <p>
        Kompost nasıl yapılır?{" "}
        <a href="/blog/kompost-nedir-evde-nasil-yapilir">
          Kompost Nedir? Evde Kompost Nasıl Yapılır?
        </a>
      </p>
      <p>
        Sürdürülebilir yaşamın diğer boyutları için:{" "}
        <a href="/blog/surdurulebilir-yasam-nedir-rehber">
          Sürdürülebilir Yaşam Nedir? Evden Başlamak İçin Kılavuz
        </a>
      </p>
    </>
  )
}
