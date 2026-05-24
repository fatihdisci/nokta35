import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-toplu-tasima-rehberi",
  title: "İzmir Toplu Taşıma Rehberi: ESHOT, İZBAN, Metro, Vapur",
  description:
    "İzmir'in toplu taşıma sistemi: ESHOT otobüsleri, İZBAN banliyö treni, metro, tramvay, vapur güzergahları ve İZMİRKART kullanımı hakkında kapsamlı kılavuz.",
  date: "2026-05-24",
  category: "Ulaşım",
  summary:
    "İzmir, birbirini tamamlayan ESHOT otobüs ağı, İZBAN banliyö treni, metro, tramvay ve vapur gibi farklı toplu taşıma sistemlerine sahiptir. Tüm sistemler İZMİRKART ile entegre şekilde kullanılabilir.",
  readTime: 8,
  faq: [
    {
      question: "İzmir'de toplu taşıma kaç sistemden oluşur?",
      answer:
        "İzmir'in toplu taşıma ağı başlıca beş bileşenden oluşur: ESHOT otobüsleri (kentteki en geniş ağ), İZBAN banliyö treni (Aliağa'dan Selçuk'a uzanan kuzey-güney hattı), metro, tramvay (Konak ve Karşıyaka hatları) ve İzmir Büyükşehir Belediyesi'ne bağlı vapur seferleri. Bu sistemlerin tamamı İZMİRKART ile kullanılabilir.",
    },
    {
      question: "İZMİRKART nedir ve nasıl yüklenir?",
      answer:
        "İZMİRKART, İzmir'in tüm toplu taşıma sistemlerinde kullanılan akıllı kartır. Otobüs, metro, İZBAN, tramvay ve vapurlarda geçerlidir. Kartı İZMİRKART satış noktalarından, İZBAN istasyonlarındaki otomat makinelerinden veya mobil uygulama üzerinden yükleyebilirsiniz. Aktarma indirimleri de kart üzerinden otomatik uygulanır.",
    },
    {
      question: "İZBAN nedir, ESHOT'tan farkı nedir?",
      answer:
        "İZBAN (İzmir Banliyö Taşımacılığı A.Ş.), Aliağa'dan Selçuk'a uzanan raylı banliyö hattıdır; TCDD altyapısı üzerinde çalışır. ESHOT ise İzmir Büyükşehir Belediyesi'ne bağlı otobüs işletmecisidir ve şehrin her noktasına dağılan bir ağ sunar. İZBAN hızlı ve düzenli aralıklıdır; ESHOT daha yaygın coğrafi kapsam sağlar.",
    },
    {
      question: "İzmir metrosu hangi güzergahta çalışıyor?",
      answer:
        "İzmir Metrosu, Fahrettin Altay ile Bornova arasında işletmektedir. Hat; Üçyol, Basmane, Halkapınar, Stadyum ve Evka-3 gibi merkezi noktaları birbirine bağlar. Metro ağı zaman içinde genişleme çalışmalarıyla yeni istasyonlar kazanmıştır; güncel hat ve istasyon bilgileri için İzmir Büyükşehir Belediyesi'nin resmi kaynakları takip edilmelidir.",
    },
    {
      question: "İzmir'de vapur seferleri var mı?",
      answer:
        "Evet. İzmir Körfezi'nde Alsancak ve Konak iskeleleri başta olmak üzere çeşitli iskele noktaları arasında vapur seferleri düzenlenmektedir. Seferler İZDENİZ tarafından işletilir ve İZMİRKART ile kullanılabilir. Özellikle Konak–Karşıyaka ve çevre iskele hatları yerel halk için pratik bir alternatif sunar.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir, Türkiye'nin üçüncü büyük kenti olarak çok katmanlı bir
        toplu taşıma sistemine sahiptir. Otobüs, raylı sistem, tramvay ve
        deniz ulaşımından oluşan bu ağ; İZMİRKART adlı ortak bilet
        sistemiyle entegre biçimde işler. Şehre ilk kez geliyorsanız ya
        da sistemi daha verimli kullanmak istiyorsanız bu rehber ihtiyaç
        duyduğunuz genel çerçeveyi sunmaktadır.
      </p>
      <p>
        <em>
          Not: Güzergah, sefer saati ve ücret bilgileri değişkenlik
          gösterebilir. Güncel ve kesin bilgi için İzmir Büyükşehir
          Belediyesi'nin resmi kanallarını takip ediniz.
        </em>
      </p>

      <h2>İZMİRKART: Ortak Bilet Sistemi</h2>
      <p>
        İzmir'deki tüm toplu taşıma sistemleri tek bir akıllı kartla —
        <strong>İZMİRKART</strong> — kullanılabilir. ESHOT, İZBAN, metro,
        tramvay ve vapurlarda geçerli olan kart; aktarma indirimleri de
        dahil olmak üzere ücreti otomatik hesaplar.
      </p>
      <ul>
        <li>İZBAN istasyonlarındaki otomat makinelerinden yüklenebilir</li>
        <li>İZMİRKART yetkili satış noktaları (bakkal, market, kiosk)</li>
        <li>Mobil uygulama üzerinden bakiye yükleme imkânı</li>
        <li>Tam, öğrenci ve 60 yaş üstü gibi farklı bilet tipleri mevcuttur</li>
      </ul>

      <h2>ESHOT: Otobüs Ağı</h2>
      <p>
        <strong>ESHOT (Elektrik, Su, Havagazı, Otobüs Tramvay İşletmesi)</strong>,
        İzmir Büyükşehir Belediyesi'ne bağlı otobüs işletmecisidir. Kentsel
        ağın omurgasını oluşturur; ilçeler arası ve mahalle içi bağlantıları
        sağlayan yüzlerce hattıyla şehrin en yaygın ulaşım seçeneğidir.
      </p>
      <p>
        Hat numaralandırma sistemini anlamak için:{" "}
        <a href="/blog/izmir-otobus-hatlari-nasil-numaralandirilir">
          İzmir Otobüs Hatları Nasıl Numaralandırılır?
        </a>
      </p>
      <ul>
        <li>Hat numaraları hizmet bölgesine ve türüne göre gruplanır</li>
        <li>Durak bilgisi ve canlı konum için İZMİRKART uygulaması kullanılabilir</li>
        <li>Bazı hatlarda gece servisi mevcuttur</li>
      </ul>

      <h2>İZBAN: Banliyö Treni</h2>
      <p>
        <strong>İZBAN (İzmir Banliyö Taşımacılığı A.Ş.)</strong>,
        Aliağa'dan Selçuk'a uzanan kuzey-güney ekseninde hizmet veren
        raylı banliyö sistemidir. TCDD'nin mevcut demiryolu altyapısı
        üzerinde çalışır ve merkezi istasyonlar arasında hızlı bağlantı
        sağlar. Halkapınar, Basmane, Alsancak, Hilal ve Gaziemir gibi
        istasyonlar metro ve ESHOT ile aktarma noktaları oluşturur.
      </p>
      <ul>
        <li>Gün içinde sık aralıklı sefer düzeni</li>
        <li>Şehir merkezini kuzeydeki Aliağa ve güneydeki Selçuk'a bağlar</li>
        <li>İZMİRKART ve Türkiye genelinde geçerli TCDD bileti ile kullanılabilir</li>
        <li>Ücretler mesafeye göre değişir; hesaplama{" "}
          <a href="/">nokta35.com</a>'daki İZBAN Ücret Hesaplayıcı ile yapılabilir</li>
      </ul>

      <h2>Metro</h2>
      <p>
        İzmir Metrosu, güneydeki Fahrettin Altay'dan kuzeydoğudaki
        Bornova'ya uzanan yeraltı ve yerüstü raylı sistemdir. Üçyol,
        Basmane, Halkapınar ve Stadyum gibi yoğun nüfuslu bölgeleri
        kapsar. Şehir merkezindeki yoğun trafiği atlayarak hızlı ulaşım
        imkânı sunar.
      </p>
      <ul>
        <li>Sabah erken saatlerden gece geç saatlere kadar işler</li>
        <li>İZMİRKART ile kullanılır</li>
        <li>Halkapınar İstasyonu İZBAN ile aktarma noktasıdır</li>
      </ul>

      <h2>Tramvay</h2>
      <p>
        İzmir'de iki ayrı tramvay hattı bulunmaktadır:
      </p>
      <ul>
        <li>
          <strong>Konak Tramvayı:</strong> Tarihi yarımada ekseninde,
          kısa güzergahta hizmet verir; turizm açısından da önem taşır.
        </li>
        <li>
          <strong>Karşıyaka Tramvayı:</strong> İzmir Körfezi'nin karşı
          yakasında, Karşıyaka ilçesi içinde modern tramvay hizmeti sunar.
        </li>
      </ul>
      <p>
        Her iki hat da İZMİRKART ile kullanılabilir ve kısa mesafeli
        bölgesel ulaşımda pratik bir seçenek sunar.
      </p>

      <h2>Vapur ve Deniz Ulaşımı</h2>
      <p>
        <strong>İZDENİZ</strong> tarafından işletilen vapur seferleri,
        İzmir Körfezi boyunca Alsancak, Konak, Karşıyaka, Bostanlı ve
        çevre iskeleler arasında düzenlenir. İZMİRKART ile kullanılabilen
        vapurlar; özellikle Konak–Karşıyaka bağlantısında karayolu
        trafiğine pratik bir alternatif oluşturur.
      </p>
      <ul>
        <li>Sefer saatleri mevsime göre değişebilir</li>
        <li>Güncel tarifeler için İZDENİZ'in resmi kaynakları takip edilmelidir</li>
      </ul>

      <h2>Aktarma ve Sistem Entegrasyonu</h2>
      <p>
        İzmir'in toplu taşıma sistemleri belirli aktarma noktalarında
        birbirine bağlanır. Önemli aktarma istasyonları:
      </p>
      <ul>
        <li><strong>Halkapınar:</strong> İZBAN ↔ Metro bağlantısı</li>
        <li><strong>Basmane:</strong> Metro ↔ ESHOT ↔ İZBAN</li>
        <li><strong>Konak:</strong> ESHOT ↔ Tramvay ↔ Vapur</li>
        <li><strong>Alsancak:</strong> İZBAN ↔ Vapur ↔ ESHOT</li>
      </ul>
      <p>
        Aktarmalarda İZMİRKART belirli bir süre içinde ikinci biniş için
        indirim uygular; bu süre zaman zaman güncellenebildiğinden güncel
        tarifeler için belediyenin resmi kaynakları kontrol edilmelidir.
      </p>

      <h2>Güncel bilgiye nereden ulaşılır?</h2>
      <p>
        Sefer saatleri, hat değişiklikleri ve ücret güncellemeleri için
        resmi kaynaklar:
      </p>
      <ul>
        <li>İzmir Büyükşehir Belediyesi resmi web sitesi</li>
        <li>İZMİRKART mobil uygulaması (canlı konum ve sefer bilgisi)</li>
        <li>İZBAN için TCDD ve İZBAN'ın resmi kanalları</li>
        <li>
          <a href="/">nokta35.com</a> — anlık otobüs konumu ve İZBAN
          ücret hesaplayıcı
        </li>
      </ul>
    </>
  )
}
