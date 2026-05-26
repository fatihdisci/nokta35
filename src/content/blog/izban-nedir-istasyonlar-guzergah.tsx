import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izban-nedir-istasyonlar-guzergah",
  title: "İZBAN Nedir? Güzergah, İstasyonlar ve Kullanım Rehberi",
  description:
    "İZBAN (İzmir Banliyö Taşımacılığı) nedir, hangi güzergahta çalışır, istasyonlar nelerdir? Aliağa'dan Selçuk'a uzanan banliyö treni, İZMİRKART kullanımı ve.",
  date: "2026-05-24",
  category: "Ulaşım",
  summary:
    "İZBAN, TCDD altyapısı üzerinde Aliağa ile Selçuk arasında hizmet veren İzmir banliyö tren sistemidir. İZMİRKART ile kullanılabilir ve birçok noktada metro, vapur ile aktarma imkânı sunar.",
  readTime: 6,
  faq: [
    {
      question: "İZBAN nedir ve nasıl çalışır?",
      answer:
        "İZBAN (İzmir Banliyö Taşımacılığı A.Ş.), TCDD ve İzmir Büyükşehir Belediyesi'nin ortak şirketidir. TCDD'nin mevcut demiryolu altyapısını kullanarak Aliağa'dan Selçuk'a uzanan kuzey-güney ekseninde banliyö treni işletir. İzmir kentinin en hızlı toplu taşıma araçlarından biridir.",
    },
    {
      question: "İZBAN hangi güzergahta çalışıyor?",
      answer:
        "İZBAN, kuzeyde Aliağa ile güneyde Selçuk arasındaki hatta çalışır. Bu hat, İzmir kenti merkezinden geçerek Halkapınar, Basmane, Alsancak, Hilal, Gaziemir ve Torbalı gibi önemli noktaları birbirine bağlar. Toplam hat uzunluğu yaklaşık 76 km'dir.",
    },
    {
      question: "İZBAN'a nasıl binilir, hangi bilet kullanılır?",
      answer:
        "İZBAN'da iki farklı bilet geçerlidir: İZMİRKART (İzmir'in akıllı ulaşım kartı) ve TCDD tarafından düzenlenen ulusal demiryolu biletleri. İZMİRKART, aktarma indirimleri dahil diğer İzmir toplu taşıma sistemleriyle entegre çalışır.",
    },
    {
      question: "İZBAN ücreti nasıl hesaplanır?",
      answer:
        "İZBAN ücreti, biniş ve iniş istasyonları arasındaki mesafeye göre değişir. Tam ücret, öğrenci ve 60 yaş üstü için farklı tarifeler uygulanır. Güncel ücretler için İZBAN'ın resmi kanalları veya nokta35.com'daki İZBAN Ücret Hesaplayıcı kullanılabilir.",
    },
    {
      question: "İZBAN'dan metro ve vapura aktarma nasıl yapılır?",
      answer:
        "İZBAN'ın metro ile aktarma noktası Halkapınar İstasyonu'dur. Vapur aktarması için Alsancak İstasyonu'ndan iskeledeki yürüme mesafesi oldukça kısadır. Basmane İstasyonu ise ESHOT otobüsleriyle bağlantı sağlar. Tüm aktarmalarda İZMİRKART indirimli ücret uygular.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'in dört bir yanına uzanan toplu taşıma ağının önemli bir
        halkası olan <strong>İZBAN</strong>, banliyö treni ile şehrin
        kuzeyini güneyine bağlar. Hafif raylı sistemler ve otobüslerle
        entegre çalışan bu hat; hem işe gidip gelen günlük yolcular hem
        de şehre ilk kez gelenler için hızlı ve güvenilir bir seçenektir.
        Bu yazıda İZBAN'ın güzergahını, aktarma noktalarını ve bilet
        sistemini açıklıyoruz.
      </p>
      <p>
        <em>
          Sefer saatleri ve ücret bilgileri değişkenlik gösterebilir.
          Güncel bilgi için İZBAN'ın resmi kanalları takip edilmelidir.
        </em>
      </p>
      <p>
        İzmir'in toplu taşıma sistemine genel bakış için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi: ESHOT, İZBAN, Metro, Vapur
        </a>
      </p>

      <h2>İZBAN Nedir?</h2>
      <p>
        <strong>İZBAN (İzmir Banliyö Taşımacılığı A.Ş.)</strong>, TCDD
        (Türkiye Cumhuriyeti Devlet Demiryolları) ve İzmir Büyükşehir
        Belediyesi'nin ortaklığıyla kurulan bir banliyö tren işletmecisidir.
        Mevcut demiryolu altyapısını kullanarak şehir içi ve çevre ilçeler
        arasında yolcu taşımacılığı yapar. İzmir'in en hızlı toplu ulaşım
        araçlarından biri olma özelliğini taşır.
      </p>

      <h2>İZBAN Güzergahı: Aliağa'dan Selçuk'a</h2>
      <p>
        İZBAN hattı, kuzeyde <strong>Aliağa</strong>'dan başlayarak
        güneyde <strong>Selçuk</strong>'a kadar uzanır. Hat, İzmir'in
        kuzey ilçelerini (Çiğli, Karşıyaka), şehir merkezini
        (Basmane, Alsancak) ve güney ilçelerini (Gaziemir, Torbalı,
        Selçuk) birbirini izleyen istasyonlarla bağlar. Toplam hat
        uzunluğu yaklaşık 76 km'dir.
      </p>
      <p>Hattın önemli istasyonlarından bazıları:</p>
      <ul>
        <li><strong>Aliağa</strong> — kuzey terminal noktası</li>
        <li><strong>Halkapınar</strong> — metro (M1) ile aktarma noktası</li>
        <li><strong>Basmane</strong> — tarihî merkez; ESHOT ile bağlantı</li>
        <li><strong>Alsancak</strong> — vapur iskelesi yakını</li>
        <li><strong>Hilal</strong> — güney yönüne geçiş</li>
        <li><strong>Gaziemir</strong> — havalimanı çevresi</li>
        <li><strong>Torbalı</strong> — güney ilçe merkezi</li>
        <li><strong>Selçuk</strong> — güney terminal noktası; Efes antik kenti yakını</li>
      </ul>

      <h2>Bilet ve Ücret Sistemi</h2>
      <p>
        İZBAN'da iki farklı geçerli bilet türü bulunmaktadır:
      </p>
      <ul>
        <li>
          <strong>İZMİRKART:</strong> İzmir'in tüm toplu taşıma sistemlerinde
          ortak kullanılan akıllı kart. Aktarma indirimleri otomatik uygulanır.
          İZBAN istasyonlarındaki otomat makinelerinden veya yetkili satış
          noktalarından yüklenebilir.
        </li>
        <li>
          <strong>TCDD bileti:</strong> TCDD'nin demiryolu altyapısını
          kullandığından ulusal demiryolu biletleri de geçerlidir. Uzak
          mesafe yolculuğu yapanlar için uygun olabilir.
        </li>
      </ul>
      <p>
        Ücret, binilen ve inilen istasyonlar arasındaki mesafeye göre
        hesaplanır; tam, öğrenci ve 60 yaş üstü tarifeleri farklıdır.
        Güncel tarifeyi doğrulamak için nokta35.com'daki İZBAN Ücret
        Hesaplayıcı kullanılabilir.
      </p>

      <h2>Aktarma Noktaları</h2>
      <p>
        İZBAN, birkaç kritik noktada diğer İzmir ulaşım sistemleriyle
        kesişir:
      </p>
      <ul>
        <li>
          <strong>Halkapınar:</strong> İZBAN ↔ Metro (M1) aktarması.
          İzmir metrosunun en işlek aktarma noktasıdır; her iki sistem
          de aynı İZMİRKART ile kullanılır.
        </li>
        <li>
          <strong>Basmane:</strong> İZBAN ↔ ESHOT (otobüs) bağlantısı.
          Şehir merkezine yürüme mesafesindedir.
        </li>
        <li>
          <strong>Alsancak:</strong> İZBAN ↔ Vapur (İZDENİZ) aktarması.
          İskeleye olan kısa yürüyüş mesafesiyle körfez geçişi mümkündür.
        </li>
      </ul>

      <h2>İZBAN ile Şehir Dışına Çıkmak</h2>
      <p>
        İZBAN güzergahının güney ucu olan Selçuk, Efes Antik Kenti ve
        Şirince gibi turistik yerlere yakındır. Kuzey ucu Aliağa ise sanayi
        bölgesine hizmet verir. Bu özelliğiyle İZBAN; hem günlük yolcuların
        işe-eve trafiğine hem de şehir dışı gezilerine uyum sağlar.
      </p>

      <h2>Sefer Saatleri ve Güncel Bilgi</h2>
      <p>
        İZBAN sefer saatleri gün içinde ve hafta sonları farklılık gösterir.
        Yoğun saatlerde daha sık sefer düzenlenir. Güncel sefer saatleri,
        hat değişiklikleri ve ücret bilgileri için:
      </p>
      <ul>
        <li>İZBAN'ın resmi web sitesi</li>
        <li>İZMİRKART mobil uygulaması</li>
        <li>TCDD'nin resmi kanalları</li>
        <li>
          <a href="/">nokta35.com</a> — İZBAN Ücret Hesaplayıcı
        </li>
      </ul>
    </>
  )
}
