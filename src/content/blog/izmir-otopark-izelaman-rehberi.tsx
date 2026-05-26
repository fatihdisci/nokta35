import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-otopark-izelaman-rehberi",
  title: "İzmir Otopark: İZELMAN Tesisleri, Konumlar ve Tarife Bilgisi",
  description:
    "İzmir'de kapalı ve açık otopark nerede bulunur? İZELMAN A.Ş. otopark tesisleri, akıllı otopark, ücret ve İzmirkart entegrasyonu hakkında rehber.",
  date: "2026-05-24",
  category: "İzmir Rehberi",
  summary:
    "İzmir'de büyükşehir belediyesine ait otoparklar İZELMAN A.Ş. tarafından işletilir. Şehir merkezinde yeraltı ve çok katlı otoparklar ile parkmetreye bağlı açık park alanları mevcuttur. İzmirkart ile ödeme desteklenir. Güncel tarife için izelaman.com.tr resmi kaynaktır.",
  readTime: 5,
  faq: [
    {
      question: "İZELMAN nedir?",
      answer:
        "İZELMAN A.Ş., İzmir Büyükşehir Belediyesi'ne bağlı bir şirkettir; kapalı ve açık otopark tesislerinin işletmeciliğini yürütür. Şirketin güncel hizmet kapsamı ve diğer faaliyet alanları için kurumun resmi web sitesi izelaman.com.tr esas alınmalıdır.",
    },
    {
      question: "İZELMAN otoparkları nerede?",
      answer:
        "İZELMAN'ın kapalı ve açık otopark tesisleri ağırlıklı olarak İzmir şehir merkezinde (Konak, Alsancak, Basmane çevresi) ve yoğun nüfuslu ilçelerde yer alır. Güncel tesis listesi ve konumlar için izelaman.com.tr veya İzmir Büyükşehir Belediyesi harita uygulaması kullanılabilir.",
    },
    {
      question: "İzmirkart ile otopark ödenebilir mi?",
      answer:
        "Evet. İZELMAN işlettiği otoparkların büyük bölümünde İzmirkart ile ödeme imkânı sunar. İzmirkart bakiyesi yeterliyse ödeme geçişte veya çıkışta kart okuyucuya okutularak yapılır. Nakit ve banka kartı seçenekleri de mevcuttur.",
    },
    {
      question: "Akıllı otopark sistemi nedir?",
      answer:
        "İzmir'de bazı bölgelerde 'akıllı otopark' uygulaması kapsamında park sensörlü yol kenarı alanları ve dijital gösterge panoları mevcuttur. Bu sistem; dolu/boş park alanlarını gerçek zamanlı göstererek araç sürücüsünü en yakın boş alana yönlendirir. Sistem kademeli olarak genişletilmektedir.",
    },
    {
      question: "İzmir'de park cezası nasıl ödenir?",
      answer:
        "Park cezaları (trafik idari para cezası) e-Devlet üzerinden, PTT şubeleri aracılığıyla veya ilgili trafik müdürlüğüne başvurarak ödenebilir. İtiraz hakkı için tebliğden itibaren 15 gün içinde Trafik İdari Para Cezasına İtiraz dilekçesi Sulh Ceza Mahkemesi'ne verilebilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'in yoğun şehir merkezinde otopark bulmak, özellikle
        hafta sonları ve etkinlik saatlerinde güçleşebilir. Bu yazıda
        İzmir Büyükşehir Belediyesi'ne bağlı{" "}
        <strong>İZELMAN A.Ş.'nin otopark tesislerini</strong>, ödeme
        seçeneklerini ve park sürecini ele alıyoruz.
      </p>

      <h2>İZELMAN Nedir?</h2>
      <p>
        <strong>İZELMAN A.Ş.</strong>, İzmir Büyükşehir Belediyesi'ne
        bağlı bir kuruluştur. Otopark işletmeciliği başlıca faaliyet
        alanıdır:
      </p>
      <ul>
        <li>Kapalı ve açık otopark işletmeciliği</li>
        <li>Parkmetre ve yol kenarı park alanı yönetimi</li>
        <li>Akıllı otopark altyapısı</li>
      </ul>
      <p>
        İZELMAN'ın resmi web sitesi güncel tesis listesi, ücret tarifesi
        ve hizmet saatlerini yayımlar. Kurumun tüm faaliyet alanları ve
        bağlı hizmetler için resmi kanalı esas alınmalıdır.
      </p>

      <h2>Otopark Tipleri</h2>

      <h3>Kapalı ve Çok Katlı Otoparklar</h3>
      <p>
        Şehir merkezinde, özellikle Konak ve Alsancak bölgesinde
        yeraltı ve çok katlı kapalı otopark tesisleri bulunur. Bu
        tesisler:
      </p>
      <ul>
        <li>Güvenlik kameralı ve görevli</li>
        <li>Giriş/çıkış bariyer sistemi</li>
        <li>İzmirkart, nakit ve banka kartı ile ödeme</li>
        <li>Engelli araç alanları</li>
      </ul>
      <p>
        gibi özellikleri genellikle barındırır. Hafta içi ve hafta
        sonu tarifeleri farklılaşabilir; ilk yarım saat veya ilk
        saat ücretsiz olabilir. <strong>Güncel tarife için
        İZELMAN'ın resmi kanalları esas alınmalıdır</strong>; ücretler
        periyodik olarak güncellenir.
      </p>

      <h3>Parkmetreli Yol Kenarı Park Alanları</h3>
      <p>
        Şehir merkezi ve yoğun ticari caddelerde yol kenarı park
        alanları parkmetreyle ücretlendirilir. İşleyiş:
      </p>
      <ul>
        <li>Araç park edilir, en yakın parkmetreye gidilir</li>
        <li>Plaka ve park süresi girilir, ödeme yapılır</li>
        <li>Ekrana çıkan fiş aracın ön camına bırakılır</li>
      </ul>
      <p>
        Bazı bölgelerde dijital parkmetreler İzmirkart ile ödeme
        kabul eder. Öğle arası, pazar ve resmi tatil gibi ücretsiz
        saatler uygulanıp uygulanmadığı bölgeden bölgeye farklılık
        gösterebilir; levhalar dikkate alınmalıdır.
      </p>

      <h3>Akıllı Otopark Sistemi</h3>
      <p>
        İzmir, kademeli olarak yaygınlaşan akıllı otopark
        altyapısına sahiptir. Sensör tabanlı bu sistemde:
      </p>
      <ul>
        <li>Yol kenarındaki sensörler dolu/boş durumu algılar</li>
        <li>Dijital pano ve navigasyon uygulamaları sürücüyü yönlendirir</li>
        <li>Park yönetimi daha verimli hale gelir</li>
      </ul>
      <p>
        Akıllı otopark kapsama alanı hakkında güncel bilgi için
        İBB'nin uygulama ve harita hizmetleri incelenebilir.
      </p>

      <h2>İzmirkart ile Otopark Ödemesi</h2>
      <p>
        İZELMAN tesislerinde <strong>İzmirkart</strong> ile ödeme
        desteklenir. İzmirkart; toplu taşıma, otopark ve diğer
        belediye hizmetlerinde ortak kullanılabilen entegre bir
        kart sistemidir. Kart bakiyesi yeterliyse otopark çıkışında
        okutularak ödeme tamamlanır.
      </p>
      <p>
        İzmirkart hakkında detaylı bilgi için:{" "}
        <a href="/blog/izmirkart-nedir-nasil-kullanilir">
          İzmirkart Nedir? Nasıl Alınır, Doldurulur ve Kullanılır?
        </a>
      </p>

      <h2>Otopark Konumu Nasıl Bulunur?</h2>
      <p>
        İzmir'de otopark bulmak için:
      </p>
      <ul>
        <li>
          <strong>İZELMAN web sitesi:</strong> Güncel tesis haritası
          ve bilgileri için resmi kaynak.
        </li>
        <li>
          <strong>Google Maps / Apple Maps:</strong> "İzmir otopark"
          aramasıyla yakın tesisler, çalışma saati ve doluluk bilgisi
          görülebilir.
        </li>
        <li>
          <strong>İzmir Büyükşehir Belediyesi uygulaması:</strong>
          Bazı sürümlerde anlık otopark doluluk bilgisi mevcuttur.
        </li>
      </ul>

      <h2>Park Cezası ve İtiraz</h2>
      <p>
        Yetkisiz park, parkmetresiz park veya engelli alanı ihlali
        durumunda trafik ekipleri idari para cezası uygular. Ceza ödeme
        seçenekleri:
      </p>
      <ul>
        <li>e-Devlet üzerinden online ödeme</li>
        <li>PTT şubeleri</li>
        <li>Trafik tescil ve denetleme büroları</li>
      </ul>
      <p>
        İtiraz için tebliğ tarihinden itibaren 15 gün içinde
        bulunduğunuz yerdeki Sulh Ceza Mahkemesi'ne dilekçe
        ile başvurabilirsiniz.
      </p>
    </>
  )
}
