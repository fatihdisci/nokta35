import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-ucretsiz-etkinlik-alanlari",
  title: "İzmir Ücretsiz Etkinlik Alanları: Nerede, Ne Bulunur?",
  description:
    "İzmir'de ücretsiz konser, festival, açık hava etkinliği nerede yapılır? Kültürpark, Konak Meydanı, sahiller ve İBB kültür merkezleri için kapsamlı rehber.",
  date: "2026-05-24",
  category: "İzmir Genel",
  summary:
    "İzmir'de ücretsiz etkinliklerin büyük bölümü Kültürpark, Konak Meydanı, sahiller (Bostanlı, Kordon, Karşıyaka), İBB kültür merkezleri ve ilçe belediyelerinin açık alan organizasyonlarında yapılır. Etkinlik takvimi belediye kanallarından izlenmelidir.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de en çok ücretsiz etkinlik nerede yapılır?",
      answer:
        "Kültürpark (Konak/Alsancak), Konak Meydanı, Bostanlı Sahili, Kordon, Karşıyaka Sahili ve İBB'ye bağlı çok sayıda kültür merkezi, açık ve ücretsiz etkinliklerin en sık düzenlendiği mekânlardır. Yaz aylarında sahillerde, kış aylarında ise kapalı kültür merkezlerinde yoğunlaşır.",
    },
    {
      question: "İzmir Enternasyonal Fuarı ücretsiz mi?",
      answer:
        "Eylül aylarında Kültürpark'ta düzenlenen İzmir Enternasyonal Fuarı (İEF), tarihsel olarak ücretsiz girişle kamuya açıktır. Fuar süresince konser, gösteri ve serbest gezinti olanağı sunulur. Konser kontenjanlarına yönelik değişiklikler dönemsel olarak belediye tarafından duyurulur.",
    },
    {
      question: "Ücretsiz etkinlik takvimine nereden bakılır?",
      answer:
        "İzmir Büyükşehir Belediyesi'nin kültür sanat portali (kultursanat.izmir.bel.tr), resmi sosyal medya hesapları ve ilçe belediyelerinin etkinlik takvimleri en güncel kaynaklardır. Açık veri portalı üzerinden de etkinlik bilgileri zaman zaman paylaşılır.",
    },
    {
      question: "Sahil ve meydan konserleri ne zaman yapılır?",
      answer:
        "Yaz aylarında — özellikle Haziran-Eylül arasında — Bostanlı, Karşıyaka ve Kordon sahillerinde açık hava konserleri yoğunlaşır. 9 Eylül İzmir'in Kurtuluşu kutlamaları kapsamında büyük açık konserler düzenlenir; bunların büyük çoğunluğu ücretsizdir.",
    },
    {
      question: "Çocuklara yönelik ücretsiz etkinlik var mı?",
      answer:
        "Evet. Kültürpark Lunapark dışındaki gezinti alanları, semt parklarındaki oyun alanları, ilçe belediyelerinin yaz ayında düzenlediği çocuk şenlikleri ve İBB çocuk kütüphaneleri ücretsizdir. Etkinlik takvimi yine belediye kanallarından izlenmelidir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir, açık hava kültürünün güçlü olduğu bir kenttir. Sahil
        boyunca uzanan yürüyüş yolları, tarihi Kültürpark, geniş meydanlar
        ve mahalle ölçeğindeki kültür merkezleri sayesinde kentin
        farklı noktalarında <strong>ücretsiz etkinlikler</strong> yıl
        boyunca düzenlenir. Bu rehberde başlıca etkinlik alanlarını,
        ne tür organizasyonların yapıldığını ve güncel takvime nasıl
        ulaşabileceğinizi anlatıyoruz.
      </p>

      <h2>Kültürpark — Şehrin Açık Etkinlik Merkezi</h2>
      <p>
        Konak ile Alsancak arasında yer alan <strong>Kültürpark</strong>,
        İzmir'in en köklü açık alan etkinlik merkezidir. 360 dönümü
        aşkın alanıyla yıl boyunca pek çok ücretsiz organizasyona ev
        sahipliği yapar:
      </p>
      <ul>
        <li>Eylül aylarında <strong>İzmir Enternasyonal Fuarı (İEF)</strong> konserleri</li>
        <li>Yıl boyunca açık hava konserleri ve festivaller</li>
        <li>Tasarım, kitap, müzik fuarları</li>
        <li>Spor şenlikleri ve halk koşuları</li>
        <li>Ücretsiz erişilebilen bahçeler, gezinti alanları, su öğeleri</li>
      </ul>

      <h2>Sahil Etkinlikleri</h2>

      <h3>Bostanlı ve Karşıyaka Sahili</h3>
      <p>
        Karşıyaka tarafının uzun sahil şeridi yaz aylarında açık hava
        konserleri ve film gösterimleri için sıkça kullanılır. Sahil
        boyu yürüyüş, koşu ve bisiklet alanları da ayrıca ücretsizdir.
      </p>

      <h3>Kordon</h3>
      <p>
        Konak-Alsancak hattındaki Kordon, hem günlük gezi alanı hem de
        ulusal bayram kutlamaları ve büyük halk konserlerinin sahnesidir.
        29 Ekim Cumhuriyet Bayramı ve 9 Eylül İzmir'in Kurtuluşu
        kutlamalarının ana mekânlarından biridir.
      </p>

      <h2>İBB Kültür Merkezleri</h2>
      <p>
        İzmir Büyükşehir Belediyesi'ne bağlı kültür merkezleri (AASSM
        Ahmed Adnan Saygun Sanat Merkezi, Ahmet Piriştina Kent Arşivi
        ve Müzesi gibi mekânlar), yıl boyunca konser, konferans,
        sergi ve atölye etkinlikleri düzenler. Etkinliklerin büyük
        bölümü ücretsizdir; bazıları için önceden kayıt veya bilet
        rezervasyonu gerekebilir.
      </p>

      <h2>İlçe Belediyelerinin Açık Etkinlikleri</h2>
      <p>
        Konak, Karşıyaka, Bornova, Buca, Karabağlar başta olmak üzere
        pek çok ilçe belediyesi kendi mahalle sınırları içinde:
      </p>
      <ul>
        <li>Yaz sahne konserleri</li>
        <li>Çocuk şenlikleri</li>
        <li>Festival ve panayırlar</li>
        <li>Mahalle dolaşımları, açık hava film gösterimleri</li>
      </ul>
      <p>
        düzenler. İlçe belediyelerinin sosyal medya hesapları ve
        web sitelerinde etkinlik takvimi yayımlanır.
      </p>

      <h2>9 Eylül İzmir'in Kurtuluşu Kutlamaları</h2>
      <p>
        Her yıl 9 Eylül, İzmir'in en büyük açık etkinlik dönemidir.
        Kordon ve Konak Meydanı'nda ulusal sanatçıların katıldığı
        ücretsiz konserler düzenlenir; sokak gösterileri, askeri
        bando geçişleri ve havai fişek gösterileri yapılır.
      </p>

      <h2>Etkinlik Takvimini Nereden Takip Etmeli?</h2>
      <ul>
        <li>
          <strong>kultursanat.izmir.bel.tr</strong> — İBB'nin resmi
          kültür sanat portali
        </li>
        <li>İBB ve ilçe belediyelerinin Instagram, X ve Facebook hesapları</li>
        <li>ALO 153 vatandaş iletişim merkezi</li>
        <li>
          <a href="/etkinlikler">nokta35 etkinlik sayfası</a> —
          belediyelerin paylaştığı açık veri etkinlik akışını
          listeler
        </li>
      </ul>
      <p>
        Şehirde ücretsiz yararlanılabilecek diğer hizmetler için:{" "}
        <a href="/blog/izmir-rehberi-cografya-iklim-ilceler">
          İzmir Rehberi: Coğrafya, İklim, İlçeler, Ulaşım
        </a>
      </p>
    </>
  )
}
