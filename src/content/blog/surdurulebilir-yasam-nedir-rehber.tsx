import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "surdurulebilir-yasam-nedir-rehber",
  title: "Sürdürülebilir Yaşam Nedir? Evden Başlamak İçin Kılavuz",
  description:
    "Sürdürülebilir yaşam nedir, neden önemlidir? Su tasarrufu, enerji verimliliği, sıfır atık, gıda israfını azaltma ve bilinçli tüketim için evden.",
  date: "2026-05-24",
  category: "Çevre",
  summary:
    "Sürdürülebilir yaşam; kaynakları koruyarak ve atığı azaltarak hem bugünün hem gelecek nesillerin ihtiyaçlarını karşılayabilecek alışkanlıklar bütünüdür. Büyük değişimler küçük ev alışkanlıklarıyla başlar.",
  readTime: 8,
  faq: [
    {
      question: "Sürdürülebilir yaşam nedir?",
      answer:
        "Sürdürülebilir yaşam; doğal kaynakları tüketmeden veya minimum düzeyde tüketerek, atığı azaltarak ve çevresel etkiyi düşürerek yaşamayı ifade eder. Birleşmiş Milletler'in 1987 tarihli Brundtland Raporu sürdürülebilirliği şöyle tanımlar: 'Bugünün ihtiyaçlarını karşılarken gelecek nesillerin kendi ihtiyaçlarını karşılama kapasitesini tehlikeye atmamak.'",
    },
    {
      question: "Evde enerji tasarrufu nasıl sağlanır?",
      answer:
        "En etkili yöntemler arasında LED aydınlatmaya geçiş, kullanılmayan cihazları bekleme modunda değil tamamen kapatma, düşük enerji sınıfında beyaz eşya tercihi ve sıcak mevsimlerde klimanın 24-26°C'de kullanılması sayılabilir. Uluslararası Enerji Ajansı (IEA) verilerine göre yalıtım iyileştirmeleri ve verimli cihazlar konut enerji tüketimini önemli ölçüde azaltabilir.",
    },
    {
      question: "Sıfır atık yaşam nedir?",
      answer:
        "Sıfır atık; çöpe gidecek malzeme miktarını en aza indirmeyi hedefleyen bir yaklaşımdır. Bu; önce tüketimi azaltmayı (azalt), sonra yeniden kullanmayı (yeniden kullan), geri dönüştürmeyi ve kompost yapmayı içerir. Tam anlamıyla sıfır atık zor olsa da bu alışkanlıklar hanehalkı atığını kayda değer ölçüde düşürebilir.",
    },
    {
      question: "Gıda israfını azaltmak için ne yapılabilir?",
      answer:
        "BM Gıda ve Tarım Örgütü (FAO) verilerine göre tüm gıdanın yaklaşık üçte biri çöpe gitmektedir. Bireysel düzeyde: haftalık yemek planı yapmak, alışverişe liste ile gitmek, buzdolabını FIFO (ilk giren ilk çıkar) düzeninde tutmak, kalan yiyecekleri dondurucuya atmak ve kabukları kompost etmek israfı belirgin biçimde azaltır.",
    },
    {
      question: "Sürdürülebilir tüketim ne demek?",
      answer:
        "Sürdürülebilir tüketim; satın alma kararlarını çevresel ve sosyal etkiyi göz önünde bulundurarak vermek demektir. Pratikte: az ama kaliteli ürün almak, ikinci el alışverişi tercih etmek, yerel ve mevsiminde gıda satın almak, tek kullanımlık plastikten kaçınmak ve onarılabilir ürünleri tercih etmek bu kapsamda değerlendirilebilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>Sürdürülebilir yaşam</strong>; doğal kaynakları koruyarak,
        atık üretimini azaltarak ve çevresel etkiyi minimize ederek bugün
        ihtiyaçlarımızı karşılarken gelecek nesillere yaşanabilir bir dünya
        bırakmayı hedefleyen bir yaklaşımdır. Bu kavram yalnızca büyük
        ölçekli politikalara değil, ev içindeki günlük kararlara da işaret
        eder. Elektrik faturasını azaltmaktan gıda israfını önlemeye, su
        tasarrufundan bilinçli satın almaya kadar uzanan bu alışkanlıklar
        hem çevreye hem cüzdana fayda sağlar.
      </p>

      <h2>Sürdürülebilirlik neden şimdi daha önemli?</h2>
      <p>
        IPCC (Hükümetlerarası İklim Değişikliği Paneli) raporlarına göre
        küresel sıcaklık artışını 1,5 °C ile sınırlamak için sera gazı
        emisyonlarının hızla azaltılması gerekmektedir. Bu hedefin bireysel
        tüketim kalıplarıyla doğrudan bağlantısı vardır:
      </p>
      <ul>
        <li>Konut ısıtma ve soğutma, küresel enerji tüketiminin önemli bir bölümünü oluşturur</li>
        <li>Gıda sistemleri küresel sera gazı emisyonlarının kayda değer bir payına katkıda bulunur</li>
        <li>Tekstil sektörü, küresel su kirliliğinin başlıca kaynaklarından biridir</li>
        <li>Plastik atık, sucul ekosistemleri tehdit etmeye devam etmektedir</li>
      </ul>
      <p>
        Bireysel davranış değişikliği tek başına yeterli değildir; ancak
        toplamda önemli bir fark yaratır ve sistemsel dönüşüm için talep
        oluşturur.
      </p>

      <h2>Su Tasarrufu</h2>
      <p>
        Tatlı su kaynakları sınırlıdır ve iklim değişikliğiyle birlikte
        kuraklık riski artmaktadır. Evde su tasarrufunun en etkili yolları:
      </p>
      <ul>
        <li>Akan musluk ile diş fırçalama yerine bardak kullanmak</li>
        <li>Duş süresini kısaltmak (her dakika tasarruf önemlidir)</li>
        <li>Sızıntıları hızla onartmak — damlayan bir musluk günde onlarca litre su israf eder</li>
        <li>Bulaşık makinesini ve çamaşır makinesini tam dolu çalıştırmak</li>
        <li>Bahçe sulamayı sabah erken veya akşam üstü yapmak (buharlaşmayı azaltır)</li>
      </ul>
      <p>
        Daha kapsamlı su tasarrufu yöntemleri için:{" "}
        <a href="/blog/evde-su-tasarrufu-12-pratik-yontem">
          Evde Su Tasarrufu: 12 Pratik Yöntem
        </a>
      </p>

      <h2>Enerji Verimliliği</h2>
      <p>
        Evdeki enerji tüketimini azaltmak hem faturayı düşürür hem
        karbon ayak izini küçültür:
      </p>
      <ul>
        <li>
          <strong>Aydınlatma:</strong> LED ampuller, aynı aydınlatmayı
          geleneksel ampullere kıyasla çok daha az enerji ile sağlar
        </li>
        <li>
          <strong>Bekleme modu:</strong> Televizyon, bilgisayar ve şarj
          adaptörleri bekleme modunda enerji tüketir; fişten çekmek veya
          anahtarlı priz kullanmak tasarruf sağlar
        </li>
        <li>
          <strong>Beyaz eşya:</strong> Enerji verimlilik sınıfı yüksek
          (A sınıfı ve üzeri) cihazlar uzun vadede önemli tasarruf sağlar
        </li>
        <li>
          <strong>Isıtma-soğutma:</strong> Oda sıcaklığını 1 °C düşürmek
          ısıtma enerjisini azaltabilir; kapı ve pencere yalıtımı bu
          etkiyi kalıcı kılar
        </li>
      </ul>

      <h2>Gıda İsrafını Azaltma</h2>
      <p>
        BM Gıda ve Tarım Örgütü (FAO) verilerine göre dünya genelinde
        üretilen gıdanın yaklaşık üçte biri tüketilmeden çöpe gitmektedir.
        Bu israfın önlenmesi hem ekonomik hem de çevresel açıdan kritiktir.
        Pratik adımlar:
      </p>
      <ul>
        <li>Haftalık yemek planı yapın; alışverişe listeyle gidin</li>
        <li>Buzdolabını FIFO düzeninde düzenleyin: eski ürünler öne, yeniler arkaya</li>
        <li>Sebze ve meyve kabuklarını çorba ya da kompost için değerlendirin</li>
        <li>Tüketilemeyen yiyecekleri dondurucu torbasına alın</li>
        <li>Son kullanma tarihi yaklaşan ürünler için basit tarifler hazırlayın</li>
      </ul>

      <h2>Sıfır Atık Yaşama Geçiş</h2>
      <p>
        Sıfır atık; tam anlamıyla sıfır değil, mümkün olan en az atığı
        hedefleyen bir yaşam felsefesidir. Başlangıç için öncelikli adımlar:
      </p>
      <ul>
        <li>
          <strong>Tek kullanımlık plastiği azalt:</strong> Yeniden kullanılabilir
          alışveriş çantası, su matarası ve kahve termosu ile başlayın
        </li>
        <li>
          <strong>Geri dönüşüm alışkanlığı:</strong> Kâğıt, cam, metal ve
          plastik için ayrı kutu bulundurun
        </li>
        <li>
          <strong>Kompost:</strong> Meyve-sebze atıklarını kompostlamak çöp
          hacmini ve metan emisyonunu azaltır; toprak iyileştiricisi üretir
        </li>
        <li>
          <strong>Doldurulabilir ürünler:</strong> Deterjan, şampuan gibi
          ürünlerde doldurma istasyonlarını veya konsantre formları tercih edin
        </li>
      </ul>

      <h2>Sürdürülebilir Tüketim</h2>
      <p>
        Satın alma kararları doğrudan çevresel etkiye dönüşür:
      </p>
      <ul>
        <li>
          <strong>Az ama kaliteli:</strong> Ucuz, kısa ömürlü ürünler yerine
          onarılabilir ve uzun ömürlü alternatifleri tercih edin
        </li>
        <li>
          <strong>İkinci el:</strong> Giyim, mobilya ve elektronik için
          ikinci el pazarları hem ekonomik hem çevre dostudur
        </li>
        <li>
          <strong>Yerel ve mevsiminde gıda:</strong> Uzak nakliye gerektirmeyen
          yerel üreticiden alınan mevsim ürünleri karbon ayak izini azaltır
        </li>
        <li>
          <strong>Onar, at değil:</strong> Kırılan bir ürünü onartmak, yenisini
          üretmek için harcanan enerji ve kaynağı korur
        </li>
      </ul>

      <h2>Küçük Adımlarla Başlamak</h2>
      <p>
        Sürdürülebilir yaşam bir anda dönüşüm gerektirmez. Başlangıç için
        şu üç alışkanlık iyi bir temel oluşturur:
      </p>
      <ul>
        <li>Bu hafta tek kullanımlık bir plastik alışkanlığını değiştirin</li>
        <li>Bu ay bir gıda israfı önleme rutini edinin (liste ile alışveriş)</li>
        <li>Bu yıl evinizdeki en yüksek enerji tüketim kaynağını (ısıtma, eski beyaz eşya) iyileştirin</li>
      </ul>
      <p>
        Su tüketimini azaltmak istiyorsanız:{" "}
        <a href="/blog/kuraklik-nedir-nasil-olculur-siniflandirilir">
          Kuraklık Nedir? Nasıl Ölçülür?
        </a>{" "}
        yazısı kuraklıkla bireysel bağlantıyı açıklıyor.
      </p>
    </>
  )
}
