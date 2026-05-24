import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-rehberi-cografya-iklim-ilceler",
  title: "İzmir Rehberi: Coğrafya, İklim, İlçeler ve Toplu Taşıma",
  description:
    "İzmir hakkında her şey: Ege'nin en büyük şehri, körfez coğrafyası, Akdeniz iklimi, 30 ilçe, toplu taşıma sistemi ve şehri takip etmek için kullanışlı kaynaklar.",
  date: "2026-05-24",
  category: "İzmir",
  summary:
    "İzmir, Ege kıyısında konumlanan ve Türkiye'nin üçüncü büyük şehri olarak bilinen bir metropoldür. Körfez çevresi coğrafyası, sıcak-kuru yazlar, ılık kışlar ve gelişmiş toplu taşıma ağıyla öne çıkar.",
  readTime: 7,
  faq: [
    {
      question: "İzmir kaç ilçeden oluşur?",
      answer:
        "İzmir, 2013 yılında yürürlüğe giren büyükşehir belediyesi düzenlemesiyle birlikte 30 ilçeli bir büyükşehir statüsüne kavuşmuştur. İlçeler; merkezi (Konak, Bornova, Karşıyaka, Buca, Gaziemir gibi) ve çevre (Aliağa, Bergama, Çeşme, Selçuk, Urla gibi) olmak üzere geniş bir coğrafyaya yayılır.",
    },
    {
      question: "İzmir'in iklimi nasıl?",
      answer:
        "İzmir, tipik Akdeniz iklimine sahiptir: yazlar sıcak ve kuru, kışlar ılık ve yağışlı geçer. Yağışların büyük bölümü ekim–nisan döneminde düşer; yaz ayları (haziran–eylül) büyük ölçüde yağışsızdır. Bu iklim özelliği, şehrin su teminini tamamen kış yağışlarına ve baraj rezervuarlarına bağımlı kılar.",
    },
    {
      question: "İzmir nerede, nasıl gidilir?",
      answer:
        "İzmir, Türkiye'nin batısında, Ege kıyısında yer alır. Havayolu ile Adnan Menderes Havalimanı (ADB) üzerinden; karayolu ile İstanbul'dan ve Ankara'dan otoyol bağlantısıyla; demiryolu ile de İzmir Gar (Basmane) üzerinden ulaşılabilir. İzmir ayrıca İstanbul ve Bodrum başta olmak üzere çeşitli limanlarla deniz seferiyle bağlantılıdır.",
    },
    {
      question: "İzmir'deki en kalabalık ilçeler hangileri?",
      answer:
        "Konak, Bornova, Buca ve Karşıyaka, İzmir'in şehir merkezine yakın ve en yoğun nüfuslu ilçeleri arasında sayılır. Kesin nüfus verileri için Türkiye İstatistik Kurumu'nun (TÜİK) güncel adrese dayalı nüfus kayıt sistemi sonuçlarına başvurulması önerilir.",
    },
    {
      question: "İzmir'de toplu taşıma nasıl kullanılır?",
      answer:
        "İzmir'de ESHOT otobüsleri, İZBAN banliyö treni, metro, tramvay ve vapur seferleri tek bir akıllı kartla — İZMİRKART — kullanılabilir. Aktarma indirimleri otomatik uygulanır. Canlı otobüs konumu ve İZBAN ücret hesaplayıcısı için nokta35.com'u kullanabilirsiniz.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir, Ege kıyısında, kendi adını taşıyan körfezin çevresine
        kurulmuş Türkiye'nin üçüncü büyük şehridir. Akdeniz iklimiyle
        şekillenen yaşam biçimi, geniş sahil şeridi, gelişmiş ulaşım ağı
        ve tarihsel katmanlarıyla öne çıkan İzmir'i bu rehberde coğrafya,
        iklim, ilçeler ve şehri takip etmek için kullanışlı kaynaklarla
        tanıtıyoruz.
      </p>

      <h2>Coğrafi Konum</h2>
      <p>
        İzmir, Türkiye'nin batısında, Ege Denizi kıyısında yer alır.
        Şehrin çekirdeği İzmir Körfezi'nin iç kesiminde konumlanmıştır.
        Körfezi çevreleyen yayla ve dağlar; kuzeyde Yamanlar Dağı,
        güneyde ise Kadifekale çevresidir. Körfezin batısına doğru açılan
        Ege, İzmir'i hem bir liman kenti hem de önemli bir turistik merkez
        konumuna getirir.
      </p>
      <p>
        İzmir il sınırları içinde Çeşme yarımadası, Foça kıyıları,
        Karaburun yarımadası ve Urla koyu gibi çeşitli sahil bölgeleri
        yer alır. Güney ilçelerden Selçuk ise UNESCO Dünya Mirası listesindeki
        Efes Antik Kenti'ne ev sahipliği yapar.
      </p>

      <h2>İklim Özellikleri</h2>
      <p>
        İzmir'de tipik <strong>Akdeniz iklimi</strong> hüküm sürer:
      </p>
      <ul>
        <li>
          <strong>Yazlar (Haziran–Eylül):</strong> Sıcak ve kuru. Yağış
          oldukça nadir. Günlük sıcaklıklar zaman zaman 35–40 °C'yi aşabilir;
          özellikle temmuz-ağustos döneminde sıcak hava dalgaları görülebilir.
        </li>
        <li>
          <strong>Kışlar (Aralık–Şubat):</strong> Ilık ve yağışlı. Kar yağışı
          enderdir; dondurucu soğuklar yaşanmaz. Ortalama kış sıcaklıkları
          diğer Türkiye şehirlerine kıyasla yüksek seyreder.
        </li>
        <li>
          <strong>İlkbahar ve sonbahar:</strong> Geçiş mevsimleri ılıman
          ve yağışlıdır; İzmir'in en yaşanabilir dönemleri olarak bilinir.
        </li>
      </ul>
      <p>
        Bu iklim yapısı nedeniyle şehrin su kaynakları (barajlar) yalnızca
        kış-ilkbahar yağışlarıyla beslenir. Uzayan kurak yazlar baraj
        doluluk oranlarını doğrudan etkiler. Daha fazlası için:{" "}
        <a href="/blog/izmir-barajlari-tahtatli-gordes-balcova">
          İzmir'in Barajları: Tahtalı, Gördes, Balçova
        </a>
      </p>

      <h2>İlçeler</h2>
      <p>
        İzmir, 2013 sonrasında 30 ilçeli büyükşehir statüsüne kavuşmuştur.
        İlçeler işlev ve konumlarına göre birkaç gruba ayrılabilir:
      </p>
      <h3>Merkezi ilçeler</h3>
      <ul>
        <li><strong>Konak:</strong> Tarihi kent merkezi, saat kulesi ve Kemeraltı çarşısı</li>
        <li><strong>Bornova:</strong> Üniversite kampüsleri ve yoğun yerleşim</li>
        <li><strong>Buca:</strong> Geniş konut alanları ve çarşı dokusu</li>
        <li><strong>Karşıyaka:</strong> Körfezin kuzey yakası, sahil boyu yaşam</li>
        <li><strong>Gaziemir:</strong> Havalimanı ve sanayi bölgesi</li>
        <li><strong>Balçova:</strong> Kaplıcaları ve üniversite hastanesiyle tanınan ilçe</li>
      </ul>
      <h3>Çevre ve sahil ilçeleri</h3>
      <ul>
        <li><strong>Çeşme:</strong> Turizm ve marina</li>
        <li><strong>Urla:</strong> Bağcılık ve gastronomi</li>
        <li><strong>Foça:</strong> Doğal sit alanları ve tarihi liman</li>
        <li><strong>Seferihisar:</strong> Cittaslow hareketi ve Tahtalı Barajı</li>
        <li><strong>Selçuk:</strong> Efes Antik Kenti yakını, kültürel turizm</li>
        <li><strong>Aliağa:</strong> Petrokimya sanayi ve liman</li>
        <li><strong>Bergama:</strong> Pergamon Antik Kenti, UNESCO listesinde</li>
      </ul>

      <h2>Ulaşım Ağı</h2>
      <p>
        İzmir, Türkiye'nin en gelişmiş toplu taşıma ağlarından birine
        sahiptir. ESHOT otobüsleri, İZBAN banliyö treni, metro, tramvay
        ve vapur seferleri tek bir kart (İZMİRKART) ile kullanılabilir.
      </p>
      <p>
        Tüm sistem hakkında ayrıntılı bilgi için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi: ESHOT, İZBAN, Metro, Vapur
        </a>
      </p>
      <ul>
        <li>Havalimanı: Adnan Menderes Havalimanı (Gaziemir) — şehir merkezine İZBAN ve metro ile bağlantı</li>
        <li>Otoyol: İstanbul–İzmir Otoyolu (kuzey bağlantısı) ve Ankara–İzmir güzergahı</li>
        <li>Liman: Alsancak Limanı (yük ve yolcu); feribot bağlantıları mevcuttur</li>
      </ul>

      <h2>Hava Kalitesi ve Çevre</h2>
      <p>
        İzmir'de hava kalitesi; trafik, sanayi ve mevsimsel koşullara göre
        değişkenlik gösterir. Özellikle kış aylarında ısınma kaynaklı
        kirlilik artabilir. Anlık AKİ (Hava Kalitesi İndeksi) verisi
        nokta35.com üzerinden takip edilebilir.
      </p>
      <p>
        Hava kalitesi hakkında kapsamlı bilgi:{" "}
        <a href="/blog/hava-kalitesi-rehberi">
          Hava Kalitesi Nedir? AKİ, PM2.5, NO₂ — Eksiksiz Rehber
        </a>
      </p>

      <h2>İzmir'i Gerçek Zamanlı Takip Edin</h2>
      <p>
        İzmir'in canlı verisini tek sayfadan takip etmek için{" "}
        <a href="/">nokta35.com</a> şu bilgileri sunmaktadır:
      </p>
      <ul>
        <li>Baraj doluluk oranları (İZSU verisi)</li>
        <li>Aktif su kesintileri</li>
        <li>Nöbetçi eczaneler</li>
        <li>Anlık hava kalitesi (AKİ)</li>
        <li>ESHOT anlık otobüs konumu</li>
        <li>İZBAN ücret hesaplayıcı</li>
        <li>Hal fiyatları (günlük güncelleme)</li>
      </ul>
    </>
  )
}
