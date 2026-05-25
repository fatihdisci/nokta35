import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "kompost-nedir-evde-nasil-yapilir",
  title: "Kompost Nedir? Evde Kompost Nasıl Yapılır? Adım Adım Rehber",
  description:
    "Kompost nedir, hangi atıklar kullanılır, evde veya balkondan nasıl başlanır? Yeşil-kahverengi denge, nem kontrolü ve olgunluk testi ile organik atık dönüşüm rehberi.",
  date: "2026-05-25",
  category: "Sürdürülebilir Yaşam",
  summary:
    "Kompost; organik atıkların mikroorganizmalar aracılığıyla ayrışarak toprağı zenginleştiren humus kıvamına gelmesi sürecidir. Evde başlamak için kompost kabı, uygun yeşil-kahverengi oran ve temel nem-hava dengesi yeterlidir. 2–4 ayda kullanıma hazır kompost elde edilebilir.",
  readTime: 7,
  faq: [
    {
      question: "Kompost kötü kokabilir mi?",
      answer:
        "Doğru yapılmış kompost koku üretmez; toprak benzeri hafif bir koku olması normaldir. Kötü koku genellikle üç nedenden kaynaklanır: çok fazla yeşil (azot) malzeme, yetersiz havalandırma veya et/süt ürünü eklenmesi. Kahverengi (karbon) malzeme ekleyip karıştırmak kokunun büyük çoğunluğunu ortadan kaldırır.",
    },
    {
      question: "Kompost yapımı ne kadar sürer?",
      answer:
        "Aktif karıştırma ve doğru nem-sıcaklık koşullarında 6–8 haftada olgunlaşabilir. Pasif yöntemle (nadiren karıştırarak) 4–6 ay gerekebilir. Olgunlaşmış kompost koyu kahverengi, kırıntılı yapıda ve toprak benzeri kokuludur; orijinal atıklar artık tanınmaz.",
    },
    {
      question: "Balkon veya apartman dairesi için kompost uygun mu?",
      answer:
        "Evet. Kapalı kompost kabı veya solucan kompostu (vermikompost) sistemi balkon ve daire için uygundur. Kapalı kaplar kokuyu hapseder, haşere riskini azaltır. Solucan kompostu daha küçük ölçekte çalışır ve mutfak tezgâhında bile tutulabilir.",
    },
    {
      question: "Kompostu nerede kullanabilirim?",
      answer:
        "Olgunlaşmış kompost saksı toprağına karıştırılarak balkon bitkileri için mükemmel besin kaynağı oluşturur. Bahçe varsa toprak düzenleyici olarak serilerek kazılabilir. Kompost; azot, fosfor ve potasyum bakımından zengindir — hazır saksı toprağına oranla çok daha canlı bir yapı sağlar.",
    },
    {
      question: "Kompostu olmayan organik atıklar için ne yapılabilir?",
      answer:
        "Kompost sistemi kurmak istemeyenler için belediyenin organik atık toplama hizmeti (varsa) veya topluluk kompostlama noktaları alternatiftir. İzmir'de bazı ilçe belediyelerinin organik atık kampanyaları ve kompostlama uygulamaları mevcuttur; güncel bilgi için ilçe belediyesi çevre birimiyle iletişime geçilebilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Mutfaktan çıkan meyve kabuğu, sebze artığı, yumurta kabuğu ve
        kahve telvesi çöpe gitmek zorunda değil. <strong>Kompost</strong>,
        bu organik atıkları mikroorganizmalar aracılığıyla toprak
        iyileştirici bir maddeye dönüştürür. Sonuç: saksılarınız için
        ücretsiz, doğal gübre ve daha az çöp.
      </p>

      <h2>Kompost Nedir?</h2>
      <p>
        Kompost, organik maddelerin bakteri, mantar ve diğer
        mikroorganizmalar tarafından ayrıştırılmasıyla oluşan koyu
        renkli, humus benzeri bir toprak düzenleyicisidir. Bu süreç
        doğada sürekli gerçekleşir; evin bahçesinde veya balkonunda
        ise <strong>hızlandırılmış ve kontrollü biçimde</strong> yürütülür.
      </p>
      <p>
        Kompostun sağladığı faydalar:
      </p>
      <ul>
        <li>Organik atığı evden çıkmadan değerlendirmek</li>
        <li>Toprak yapısını iyileştiren doğal gübre elde etmek</li>
        <li>Çöp miktarını ve çöp torba kullanımını azaltmak</li>
        <li>Atık depolama alanlarındaki metan salımını azaltmak</li>
      </ul>

      <h2>Yeşil ve Kahverengi Malzeme Dengesi</h2>
      <p>
        Kompostun en temel prensibi, <strong>yeşil (azot) ve kahverengi
        (karbon)</strong> malzemelerin dengelidir. Kaba kural:
        <strong> hacimce 1 yeşil : 2–3 kahverengi.</strong>
      </p>

      <h3>Yeşil Malzemeler (Azot kaynağı)</h3>
      <ul>
        <li>Meyve ve sebze kabukları, artıkları</li>
        <li>Kahve telvesi ve filtre kâğıdı</li>
        <li>Çay torbası ve yaprak çayı</li>
        <li>Taze çim kesimleri</li>
        <li>Yumurta kabuğu (azot değil ama faydalı mineral)</li>
      </ul>

      <h3>Kahverengi Malzemeler (Karbon kaynağı)</h3>
      <ul>
        <li>Kuru yaprak</li>
        <li>Yırtık karton ve gazete (boyasız)</li>
        <li>Tahta talaşı ve dal parçaları</li>
        <li>Kâğıt mendil ve peçeteler (boyasız)</li>
        <li>Tahıl sapları</li>
      </ul>

      <h3>Kesinlikle Kompost Kabına Girmeyecekler</h3>
      <ul>
        <li>Et, balık, kemik, deniz ürünleri</li>
        <li>Süt ürünleri (peynir, yoğurt, tereyağı)</li>
        <li>Pişmiş yemek artıkları (haşere çeker)</li>
        <li>Hasta bitki artıkları</li>
        <li>Yağ ve yağlı atıklar</li>
        <li>Evcil hayvan dışkısı</li>
        <li>Parlak/plastik kaplı kâğıt</li>
      </ul>

      <h2>Kompost Kurulum Adımları</h2>

      <h3>1. Kompost Kabı Seçin</h3>
      <p>
        Dışarıda bahçeniz varsa delikli plastik kompost kabı veya
        tel örgü silindir kullanılabilir. Balkon veya kapalı alan
        için <strong>hava delikli, kapağı olan plastik kompost
        kutusu</strong> haşere ve koku sorununu engeller.
        Solucan kompostu (vermikompost) için ise solucanlarla
        çalışan özel bir sistem tercih edilebilir.
      </p>

      <h3>2. Altlık Oluşturun</h3>
      <p>
        Kabın tabanına önce bir kat kahverengi malzeme (kuru yaprak,
        kırık karton) ekleyin. Bu hem havalanmayı sağlar hem de
        sızıntıyı emebilir.
      </p>

      <h3>3. Katman Katman Doldurun</h3>
      <p>
        Mutfaktan her gün eklenen yeşil atığın üzerine bir kat
        kahverengi malzeme ekleyin. Her eklemenin ardından hafifçe
        karıştırın; bu havalanmayı artırır ve süreci hızlandırır.
      </p>

      <h3>4. Nem ve Hava Dengesini Koruyun</h3>
      <p>
        Kompost, sıkıca sıkıldığında birkaç damla su damlatan
        ıslak sünger kıvamında olmalıdır. Çok kuru ise su serpin;
        çok ıslaksa kahverengi malzeme ekleyip karıştırın. Haftada
        bir karıştırmak hem havalanmayı sağlar hem de süreci belirgin
        ölçüde hızlandırır.
      </p>

      <h3>5. Olgunluk Testi</h3>
      <p>
        Kompost hazır olduğunda:
      </p>
      <ul>
        <li>Orijinal malzemeler artık tanınmaz</li>
        <li>Renk koyu kahverengi veya siyaha yakın</li>
        <li>Koku toprak gibi, hoş</li>
        <li>Yapı ufalanan, kırıntılı</li>
      </ul>
      <p>
        Bu noktadan itibaren saksı toprağına ya da bahçeye karıştırılabilir.
      </p>

      <h2>Balkon için Solucan Kompostu (Vermikompost)</h2>
      <p>
        Solucan kompostu, <em>Eisenia fetida</em> (kırmızı California
        solucanı) türünün organik atıkları sindirerek ayrıştırmasına
        dayanır. Koku minimumdur; küçük kaplar mutfak tezgâhında
        bile tutulabilir. Solucan gübresi (vermikompost), olağan
        komposttan besin değeri bakımından çoğunlukla üstündür.
      </p>
      <p>
        Solucan kompostu için Türkiye'de çeşitli platformlarda
        hazır sistem ve solucan teminı mümkündür.
      </p>

      <h2>Sık Sorunlar ve Çözümleri</h2>
      <ul>
        <li>
          <strong>Kötü koku:</strong> Çok fazla yeşil veya yetersiz
          hava. → Kahverengi ekle, karıştır.
        </li>
        <li>
          <strong>Çok yavaş ayrışıyor:</strong> Çok fazla kahverengi,
          nem düşük veya parçalar büyük. → Yeşil ekle, su serp,
          büyük parçaları küçült.
        </li>
        <li>
          <strong>Sinekler:</strong> Yüzeyde yeşil malzeme açıkta. →
          Her eklemenin üstünü kahverengi malzemeyle kapat.
        </li>
        <li>
          <strong>Haşereler (kemirgen):</strong> Et/süt/pişmiş yemek
          eklenmiş olabilir. → Bu malzemeleri kesinlikle eklemeyin;
          kapalı kap kullanın.
        </li>
      </ul>
      <p>
        Gıda israfını genel olarak azaltmak için:{" "}
        <a href="/blog/gida-israfi-onlemek-pratik-yontemler">
          Gıda İsrafını Önlemek: 12 Pratik Yöntem
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
