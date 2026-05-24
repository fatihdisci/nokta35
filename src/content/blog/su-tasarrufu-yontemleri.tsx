import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "evde-su-tasarrufu-12-pratik-yontem",
  title: "Evde Su Tasarrufu: 12 Pratik Yöntem",
  description:
    "Mutfak, banyo ve bahçede uygulanabilen 12 basit su tasarrufu yöntemi. Sızıntıdan duş süresine, klozet rezervuarından bulaşık makinesine ipuçları.",
  date: "2026-05-15",
  category: "Su",
  summary:
    "Kuraklık dönemlerinde her damla önemli. Günlük rutininizde küçük değişikliklerle aylık su kullanımınızı önemli ölçüde azaltabilirsiniz.",
  readTime: 6,
}

export function Body() {
  return (
    <>
      <p>
        Türkiye, dünya su zengini ülkeler listesinde yer almaz; aksine, kişi
        başına düşen yıllık su miktarı bakımından <em>su stresi</em>{" "}
        çekmektedir. Hem kuraklık dönemlerinde hem de günlük hayatta su
        tasarrufu yapmak; hem doğa hem de fatura için önemlidir.
      </p>

      <h2>Banyoda</h2>
      <p>
        <strong>1. Sızıntıları onarın.</strong> Damlayan bir musluk günde 30
        litreye kadar su kaybına neden olabilir. Yıllık olarak bu, küçük bir
        havuzu doldurmaya yeter.
      </p>
      <p>
        <strong>2. Daha kısa duş alın.</strong> 10 dakikalık bir duş 100–150
        litre su tüketir. Süreyi yarıya indirmek bile büyük fark yaratır.
      </p>
      <p>
        <strong>3. Diş fırçalarken musluğu kapatın.</strong> Açık bırakılan
        musluk dakikada 6–8 litre su akıtır. Bardak kullanmak çok daha
        verimlidir.
      </p>
      <p>
        <strong>4. Klozet rezervuarını ayarlayın.</strong> Eski klozetlerde
        rezervuara su dolu küçük bir pet şişe yerleştirmek, her sifon
        çekişinde ~0.5 litre tasarruf sağlar.
      </p>
      <p>
        <strong>5. Tıraşı küvet veya lavabo dolusu suda yapın.</strong>{" "}
        Akan suyun altında tıraş çok daha fazla su tüketir.
      </p>

      <h2>Mutfakta</h2>
      <p>
        <strong>6. Bulaşık makinesini tam doldurmadan çalıştırmayın.</strong>{" "}
        Modern makineler yarı doluyken bile aynı miktarda su kullanır. Tam
        kapasite kullanmak su verimliliğini ikiye katlar.
      </p>
      <p>
        <strong>7. Sebze yıkarken kase kullanın.</strong> Akan suyun altında
        yıkamak yerine geniş bir kasede yıkayıp, kalan suyu çiçek sulamak için
        kullanabilirsiniz.
      </p>
      <p>
        <strong>8. Donmuş yiyecekleri buzdolabında çözün.</strong> Akan su
        altında çözmek hem zaman hem su israfıdır.
      </p>

      <h2>Bahçe ve dışarıda</h2>
      <p>
        <strong>9. Sulamayı sabah erken veya akşam geç saatte yapın.</strong>{" "}
        Öğlen saatleri yüksek buharlaşma nedeniyle suyun büyük bölümünü
        boşa harcar.
      </p>
      <p>
        <strong>10. Damla sulama sistemine geçin.</strong> Hortumla sulamaya
        göre %30–50 daha az su tüketir.
      </p>
      <p>
        <strong>11. Aracınızı kova ile yıkayın.</strong> Hortumla araba
        yıkamak 300+ litre su gerektirebilirken kova ile 30–50 litre yeterli
        olur.
      </p>
      <p>
        <strong>12. Yağmur suyu toplayın.</strong> Çatıya kurulan bir oluk +
        varil sistemi bahçe sulaması için ücretsiz su sağlar.
      </p>

      <h2>Sonuç</h2>
      <p>
        Bu 12 küçük değişiklik birlikte uygulandığında bir hanenin aylık su
        tüketimini önemli ölçüde azaltabilir. Kuraklık dönemlerinde ise
        bireysel tasarrufun toplamı, şehir su altyapısı üzerindeki yükü
        gerçekten azaltır.
      </p>
    </>
  )
}
