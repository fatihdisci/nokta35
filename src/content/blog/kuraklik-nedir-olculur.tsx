import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "kuraklik-nedir-nasil-olculur-siniflandirilir",
  title: "Kuraklık Nedir? Nasıl Ölçülür ve Sınıflandırılır?",
  description:
    "Kuraklık türleri (meteorolojik, hidrolojik, tarımsal, sosyoekonomik), kuraklık indeksleri (SPI, PDSI), kuraklığın insan ve çevre üzerindeki etkileri.",
  date: "2026-05-19",
  category: "Su & Baraj",
  summary:
    "Kuraklık; uzun bir dönem boyunca normalden az yağış sonucu su kaynaklarının yetersiz hale gelmesidir. Tek bir kuraklık değil, dört farklı türü ve birden fazla ölçüm yöntemi vardır.",
  readTime: 6,
  faq: [
    {
      question: "Kuraklık kaç türe ayrılır?",
      answer:
        "Kuraklık dört ana türe ayrılır: meteorolojik kuraklık (yağışın azalması), tarımsal kuraklık (toprak neminin düşmesi), hidrolojik kuraklık (akarsu ve baraj seviyelerinin azalması) ve sosyoekonomik kuraklık (su, gıda ve enerji arzının talebi karşılayamaması). Bu türler genellikle sıralı olarak ortaya çıkar.",
    },
    {
      question: "SPI nedir?",
      answer:
        "SPI (Standartlaştırılmış Yağış İndeksi), belirli bir zaman aralığındaki yağışı bölgenin uzun yıllar ortalamasıyla karşılaştırıp standart sapma değeri üreten bir kuraklık indeksidir. Dünya Meteoroloji Örgütü (WMO) tarafından önerilen temel kuraklık göstergesidir.",
    },
    {
      question: "Kuraklık ile çölleşme aynı şey mi?",
      answer:
        "Hayır. Kuraklık geçici (yıllar sürebilse de) bir hidrolojik dengesizliktir ve yağışlarla geri dönebilir. Çölleşme ise toprak yapısının kalıcı olarak bozulmasıdır; geri dönüşü çok zordur ve genelde kuraklığın uzun vadeli sonucu olabilir.",
    },
    {
      question: "Türkiye kuraklığa karşı neden kırılgan?",
      answer:
        "Türkiye Akdeniz iklim kuşağındadır; yağışlar yıl içinde eşit dağılmaz, yaz ayları yağışsız geçer. Su kaynakları kışın yağan yağmur ve karla beslenir. IPCC raporlarına göre Akdeniz havzası iklim değişikliği kaynaklı kuraklık riskinin en yüksek olduğu bölgelerden biridir.",
    },
    {
      question: "Hidrolojik kuraklık ile meteorolojik kuraklık arasındaki fark nedir?",
      answer:
        "Meteorolojik kuraklık yağışın azalmasıyla başlar; ilk işarettir. Hidrolojik kuraklık ise meteorolojik kuraklığın aylar veya yıllar sonra akarsu, baraj ve yeraltı suyu seviyelerinde görülen sonucudur. Hidrolojik kuraklık şehir su teminini ve hidroelektrik üretimini doğrudan etkiler.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>Kuraklık</strong>; bir bölgede normal yağış miktarının
        uzun bir süre boyunca anlamlı şekilde altında kalması ve bu nedenle
        su kaynaklarının (yağmur, akarsu, baraj, yeraltı suyu) yetersiz hale
        gelmesi durumudur. Çölleşmeyle karıştırılmamalıdır: çölleşme kalıcı
        bir arazi degradasyonu iken kuraklık geçici (yıllar süreli olabilse
        de) bir hidrolojik dengesizliktir.
      </p>

      <h2>Kuraklığın dört türü</h2>
      <p>
        Bilimsel literatürde kuraklık, etkilediği sisteme göre dört ana türe
        ayrılır. Bu türler birbirinin sonucu olarak ortaya çıkar:
      </p>

      <h3>1. Meteorolojik kuraklık</h3>
      <p>
        Bir bölgenin uzun yıllar ortalamasına göre yağışın belirgin biçimde
        azalmasıdır. Bu türün ölçütü yağış miktarıdır. Genellikle kuraklığın
        ilk işareti bu olur.
      </p>

      <h3>2. Tarımsal kuraklık</h3>
      <p>
        Toprak nem içeriğinin bitki büyümesini engelleyecek seviyeye
        düşmesidir. Meteorolojik kuraklığın birkaç hafta sürmesi tarımsal
        kuraklığa yol açar. Ekin verimini ve hayvan yemini doğrudan etkiler.
      </p>

      <h3>3. Hidrolojik kuraklık</h3>
      <p>
        Akarsu, baraj, göl ve yeraltı suyu seviyelerinin tarihsel
        ortalamanın altına düşmesidir. Meteorolojik kuraklıktan birkaç ay
        ila yıl sonra ortaya çıkar; içme suyu temininde ve hidroelektrik
        üretiminde aksaklıklara neden olur.
      </p>

      <h3>4. Sosyoekonomik kuraklık</h3>
      <p>
        Su, gıda ve enerji arzı talebi karşılayamadığı noktada başlar.
        Önceki üç tür kuraklığın yaşamı ekonomik ve sosyal olarak etkileyen
        boyutudur: tarım gelirlerinde düşüş, gıda fiyatlarında artış,
        zorunlu su kesintileri, göç hareketleri.
      </p>

      <h2>Kuraklık nasıl ölçülür?</h2>
      <p>
        Tek bir "kuraklık" değeri yoktur; bilimsel olarak farklı{" "}
        <em>kuraklık indeksleri</em> kullanılır. En yaygınları şunlardır:
      </p>

      <h3>SPI — Standartlaştırılmış Yağış İndeksi</h3>
      <p>
        Belirli bir zaman aralığındaki yağışı, o bölgenin uzun yıllar
        ortalamasıyla karşılaştırır ve bir standart sapma değeri üretir.
        Dünya Meteoroloji Örgütü (WMO) tarafından önerilen temel kuraklık
        indeksidir. Avantajı; sadece yağış verisi gerektirmesi ve farklı
        süre ölçeklerinde (1 ay, 3 ay, 6 ay, 12 ay) hesaplanabilmesidir.
      </p>
      <p>SPI skalası:</p>
      <ul>
        <li>0 ile -0.99: hafif kuraklık</li>
        <li>-1.00 ile -1.49: orta kuraklık</li>
        <li>-1.50 ile -1.99: şiddetli kuraklık</li>
        <li>-2.00 ve altı: olağanüstü kuraklık</li>
      </ul>

      <h3>PDSI — Palmer Kuraklık Şiddet İndeksi</h3>
      <p>
        Hem yağışı hem sıcaklığa bağlı potansiyel buharlaşmayı dikkate
        alan, daha kapsamlı bir indekstir. Toprak nemini de modeller. Uzun
        süreli (aylar ve yıllar) kuraklıkları izlemekte etkilidir.
      </p>

      <h3>SPEI — Standartlaştırılmış Yağış-Buharlaşma İndeksi</h3>
      <p>
        SPI'ye benzer ancak buharlaşma faktörünü de hesaba katar. İklim
        değişikliği bağlamında giderek tercih edilen bir göstergedir, çünkü
        ısınma artıkça aynı yağışla bile kuraklık riski artmaktadır.
      </p>

      <h2>Türkiye ve kuraklık</h2>
      <p>
        Türkiye, Akdeniz iklim kuşağında yer aldığı için doğal olarak yıl
        içinde yağışın eşit dağılmadığı bir ülkedir. Yaz ayları yağışsız
        geçer, su kaynakları kışın yağan yağmur ve karla beslenir. Bu yapı
        ülkenin kuraklığa karşı kırılganlığını artıran faktörlerden biridir.
      </p>
      <p>
        Türkiye Meteoroloji Genel Müdürlüğü, ülke genelinde kuraklık
        izlemesini SPI yöntemi ile düzenli olarak yapar ve sonuçlarını
        kamuya açık olarak yayınlar.
      </p>

      <h2>İklim değişikliğinin etkisi</h2>
      <p>
        IPCC (Hükümetlerarası İklim Değişikliği Paneli) raporlarına göre,
        küresel sıcaklık arttıkça Akdeniz havzası kuraklık riski en yüksek
        bölgelerden biri olarak öne çıkmaktadır. Bu durum şu somut etkilere
        yol açıyor:
      </p>
      <ul>
        <li>Daha uzun ve sık kurak dönemler</li>
        <li>Kar yağışında azalma; barajların yaz dolumunun zayıflaması</li>
        <li>Yeraltı suyu rezervlerinin yenilenememesi</li>
        <li>Orman yangınlarının sıklığında artış</li>
      </ul>

      <h2>Kuraklığa karşı ne yapılabilir?</h2>
      <p>Bireysel ve toplumsal düzeyde:</p>
      <ul>
        <li>Evde su tasarrufu önlemleri (sızıntı onarımı, kısa duş)</li>
        <li>Bahçede damla sulama, yağmur suyu toplama</li>
        <li>Mevsimine uygun, az su isteyen bitki seçimi</li>
      </ul>
      <p>Kurumsal düzeyde:</p>
      <ul>
        <li>Şebeke kayıp-kaçak oranlarının düşürülmesi</li>
        <li>Atık su geri kazanım tesisleri</li>
        <li>Verimli tarım sulama yöntemlerinin yaygınlaştırılması</li>
        <li>İklime uyumlu şehir planlaması</li>
      </ul>
    </>
  )
}
