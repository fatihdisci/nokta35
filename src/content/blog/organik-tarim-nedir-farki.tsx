import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "organik-tarim-nedir-farki",
  title: "Organik Tarım Nedir? Konvansiyonel Tarımdan Farkı ve Sertifikasyon",
  description:
    "Organik tarım nedir, hangi standartlar geçerlidir? Türkiye'de organik ürün sertifikasyonu, fiyat farkının nedenleri ve tüketici olarak nasıl doğru seçim yapılır.",
  date: "2026-05-25",
  category: "Sürdürülebilir Yaşam",
  summary:
    "Organik tarım; sentetik pestisit, kimyasal gübre ve genetiği değiştirilmiş organizma (GDO) kullanmaksızın yapılan üretim sistemidir. Türkiye'de organik ürünler Tarım ve Orman Bakanlığı denetimiyle sertifikalandırılır. 'Doğal' ibaresi organik anlamına gelmez; güvenilir tek gösterge sertifika numarasıdır.",
  readTime: 6,
  faq: [
    {
      question: "Organik ürünler gerçekten daha sağlıklı mı?",
      answer:
        "Bilimsel literatür bu konuda hâlâ tartışmalıdır. Bazı çalışmalar organik ürünlerde daha yüksek antioksidan ve omega-3 düzeyi bulmuştur; ancak sonuçlar tutarsızdır. Kesin olan şu: organik üretimde sentetik pestisit kalıntısı riski çok daha düşüktür. Sağlıktan bağımsız olarak çevre üzerindeki etki (toprak biyoçeşitliliği, su kirliliği, karbon döngüsü) bakımından organik tarım belirgin biçimde daha az zararlıdır.",
    },
    {
      question: "Türkiye'de organik ürünü nasıl anlarsınız?",
      answer:
        "Türkiye'de organik ürünlerin ambalajında 'Organik Tarım Ürünü' veya yeşil Organik logosu ve bir sertifika numarası bulunmalıdır. Bu sertifika, T.C. Tarım ve Orman Bakanlığı'nın yetkilendirdiği bağımsız kuruluşlar tarafından verilir. Numarayı e-Devlet veya Bakanlık sorgu sisteminden doğrulamak mümkündür.",
    },
    {
      question: "'Doğal', 'çevre dostu' veya 'ev yapımı' organik midir?",
      answer:
        "Hayır. Bu ifadelerin organik sertifikasyonla hiçbir yasal bağlantısı yoktur; herhangi bir üretici belgesiz olarak kullanabilir. Organik güvencesi yalnızca bağımsız sertifika kuruluşunun denetim numarasıyla belgelenen ürünlerde geçerlidir.",
    },
    {
      question: "Organik tarım neden daha pahalı?",
      answer:
        "Organik üretimde verim konvansiyonele kıyasla genellikle %20–25 daha düşüktür. Yabancı ot ve haşere kontrolü daha fazla emek gerektirir. Sertifikasyon ve denetim maliyeti üreticiye yansır. Bunlara ek olarak ölçek ekonomisi daha küçük çiftliklerde zayıftır. Tüm bu faktörler fiyatı yükseltir.",
    },
    {
      question: "Yerel pazardan alınan sertifikasız ürün güvenli mi?",
      answer:
        "Sertifikasız ürün organik değildir; ancak küçük çiftçinin kimyasal kullanmaması mümkündür. Üreticiyle doğrudan konuşup üretim yöntemini sormak, sertifikalı olmayan küçük üreticiler için pratik bir yoldur. Risk değerlendirmesi kişisel tercihe bırakılmalıdır; yasal güvence yalnızca sertifikalı ürünlerde mevcuttur.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Markette "organik", "doğal", "ev yapımı" gibi pek çok etiket
        var. Bunların hepsi aynı şey mi? Hayır. Bu yazıda{" "}
        <strong>organik tarımın ne olduğunu</strong>, konvansiyonel
        tarımdan farkını ve Türkiye'de organik ürünü nasıl
        doğrulayacağınızı ele alıyoruz.
      </p>

      <h2>Organik Tarım Nedir?</h2>
      <p>
        Organik tarım; <strong>sentetik pestisit, yapay kimyasal gübre
        ve genetiği değiştirilmiş organizma (GDO)</strong> kullanmaksızın
        gerçekleştirilen tarım sistemidir. Temel ilkeleri:
      </p>
      <ul>
        <li>Toprak sağlığını ve biyoçeşitliliği korumak</li>
        <li>Doğal döngülere (kompost, ekim nöbeti) dayanmak</li>
        <li>Antibiyotik ve büyüme hormonu kullanmaksızın hayvan yetiştirmek</li>
        <li>Ekosisteme en az zarar verecek yöntemleri tercih etmek</li>
      </ul>
      <p>
        Organik tarım bir "eski yöntemlere dönüş" değildir; bilimsel
        temelli, denetimli ve belgelenmiş bir üretim sistemidir.
      </p>

      <h2>Konvansiyonel Tarımdan Farkı</h2>

      <h3>Pestisit Kullanımı</h3>
      <p>
        Konvansiyonel tarımda sentetik pestisitler böcek, mantar ve
        yabancı ot kontrolü için yaygın kullanılır. Organik tarımda
        yalnızca onaylı doğal kökenli pestisitler kullanılabilir
        (örn. bakır bazlı fungisitler, pirethrin). Kimyasal kalıntı
        riski organik ürünlerde belirgin biçimde düşüktür.
      </p>

      <h3>Gübre</h3>
      <p>
        Konvansiyonel tarımda azot, fosfor ve potasyum (NPK) yapay
        gübreler hızlı büyüme sağlar. Organik tarımda bu ihtiyaç
        kompost, hayvan gübresi ve ekim nöbetiyle karşılanır. Yapay
        gübre kullanımı toprak mikrobiyal yaşamını olumsuz etkileyebilir;
        organik yöntem toprak yapısını uzun vadede daha sağlıklı tutar.
      </p>

      <h3>GDO</h3>
      <p>
        Organik standartlar genetiği değiştirilmiş tohum kullanımını
        yasaklar. Türkiye'de GDO içeren gıdaların üretimi zaten
        kısıtlıdır; ancak organik sertifika bu güvenceyi ek bir
        katmanla belgeler.
      </p>

      <h3>Verim</h3>
      <p>
        Organik tarımda verim, konvansiyonele göre ortalama
        %20–25 daha düşüktür. Bu fark dünyanın organik tarıma
        tam geçişinin önündeki en önemli engellerden biridir; artan
        nüfusa yeterli gıda sağlamak için verim tartışması sürmektedir.
      </p>

      <h2>Türkiye'de Organik Sertifikasyon</h2>
      <p>
        Türkiye'de organik ürünler{" "}
        <strong>T.C. Tarım ve Orman Bakanlığı</strong>'nın yetkilendirdiği
        bağımsız sertifikasyon kuruluşları tarafından denetlenir. Yasal
        dayanak: Organik Tarımın Esasları ve Uygulanmasına İlişkin
        Yönetmelik.
      </p>
      <p>
        Sertifikalı organik ürünün ambalajında şunlar bulunmalıdır:
      </p>
      <ul>
        <li>
          <strong>"Organik Tarım Ürünü"</strong> ifadesi veya Organik
          logosu
        </li>
        <li>
          Sertifikasyon kuruluşunun adı ve sertifika numarası
        </li>
        <li>
          Üretici veya işleyicinin bilgileri
        </li>
      </ul>
      <p>
        Bu numarayı Bakanlık'ın organik tarım veritabanı üzerinden
        sorgulamak mümkündür. Sertifika numarası olmayan ürün
        organik değildir.
      </p>

      <h2>"Doğal", "Ev Yapımı", "Çevre Dostu" Organik mi?</h2>
      <p>
        <strong>Hayır.</strong> Bu ifadelerin hiçbirinin yasal bir
        tanımı veya denetim mekanizması yoktur; herhangi bir üretici
        istediği ürüne bu etiketleri yapıştırabilir.
      </p>
      <p>
        Gerçek organik güvence yalnızca sertifika numarasıyla
        sağlanır. Pazardan, köy dükkanından veya yerel üreticiden
        alınan sertifikasız ürünler hakkında üreticiyle doğrudan
        konuşmak en pratik bilgi kaynağıdır.
      </p>

      <h2>Organik Neden Pahalı?</h2>
      <p>
        Yüksek fiyatın nedenleri:
      </p>
      <ul>
        <li>Daha düşük verim → birim başına daha yüksek üretim maliyeti</li>
        <li>Yabancı ot ve haşere kontrolü için daha fazla emek</li>
        <li>Sertifikasyon ve yıllık denetim ücreti</li>
        <li>Organik girdilerin (kompost, onaylı pestisit) maliyeti</li>
        <li>Küçük çiftliklerde ölçek ekonomisinin zayıf olması</li>
      </ul>

      <h2>Neyi, Ne Zaman Organik Almak Mantıklı?</h2>
      <p>
        Her ürünü organik almak büyük çoğunluk için ekonomik değildir.
        Pratik bir öneri:
      </p>
      <ul>
        <li>
          <strong>Kabuğuyla tüketilen ürünler</strong> (çilek, üzüm,
          elma, domates, salatalık): Pestisit kalıntısı riski
          yüksektir — burada organik tercih daha anlamlıdır.
        </li>
        <li>
          <strong>Kalın kabuklu veya soyulan ürünler</strong> (avokado,
          mango, mısır, soğan, ananas): Kalıntı riski daha düşüktür.
        </li>
        <li>
          <strong>Çocuklar için ürünler:</strong> Pestisit etkisine
          daha duyarlı olduklarından çocuklara verilen gıdalarda
          öncelikli tercih edilebilir.
        </li>
      </ul>

      <h2>Çevresel Etki</h2>
      <p>
        Organik tarımın sağlık etkisi tartışmalı olsa da çevresel
        etkileri daha net görünmektedir:
      </p>
      <ul>
        <li>Toprak biyoçeşitliliği (bakteri, solucan) daha zengin</li>
        <li>Yer altı suyu nitrat kirliliği daha düşük</li>
        <li>Polinatör (arı) popülasyonu üzerindeki baskı daha az</li>
        <li>
          Ancak birim gıda başına arazi kullanımı daha yüksek olabilir —
          bu, toprak kullanımı üzerindeki toplam baskının hesaplanmasını
          karmaşıklaştırır
        </li>
      </ul>
      <p>
        Sıfır atık ve sürdürülebilir tüketim için:{" "}
        <a href="/blog/sifir-atik-yasam-baslangic">
          Sıfır Atık Yaşam: Başlamak İçin 10 Pratik Adım
        </a>
      </p>
      <p>
        Karbon ayak izini azaltmak için:{" "}
        <a href="/blog/karbon-ayak-izi-nedir-hesaplanir">
          Karbon Ayak İzi Nedir? Nasıl Hesaplanır ve Azaltılır?
        </a>
      </p>
    </>
  )
}
