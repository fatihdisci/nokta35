import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "toplanma-alani-nedir-nasil-bulunur",
  title: "Toplanma Alanı Nedir? Nasıl Bulunur? (İzmir Rehberi)",
  description:
    "Deprem toplanma alanı nedir, nasıl belirlenir ve nasıl bulunur? İzmir için e-Devlet, muhtar ve nokta35.com haritasıyla toplanma alanınızı öğrenin.",
  date: "2026-05-24",
  category: "Afet & Hazırlık",
  summary:
    "Toplanma alanları, deprem gibi afetlerde binadan tahliye edilen vatandaşların güvenle bir araya gelebileceği açık alanlardır. Alanınızı afet olmadan önce öğrenmek kritik önem taşır.",
  readTime: 4,
  faq: [
    {
      question: "Toplanma alanı nedir?",
      answer:
        "Toplanma alanı, deprem veya başka bir afet durumunda binaları terk eden vatandaşların güvenle bir araya gelebileceği, AFAD ve belediyeler tarafından önceden belirlenmiş açık alanlardır. Genellikle park, meydan, spor sahası ve okul bahçesi gibi yapılardan uzak, geniş açık alanlar bu amaçla seçilir.",
    },
    {
      question: "Toplanma alanımı nasıl öğrenebilirim?",
      answer:
        "Toplanma alanınızı öğrenmek için: e-Devlet'te 'Afet Toplanma Alanı Sorgulama' hizmetini kullanabilir, mahalle muhtarlığına başvurabilir, AFAD İl Müdürlüğü'nü arayabilir veya nokta35.com haritasında toplanma alanı katmanını açabilirsiniz.",
    },
    {
      question: "İzmir'de toplanma alanları nerede?",
      answer:
        "İzmir'deki toplanma alanları, park ve meydanlar başta olmak üzere 30 ilçeye yayılmış çok sayıda açık alanda belirlemiştir. Kesin konumlar AFAD ve İzmir Büyükşehir Belediyesi tarafından belirlenir. Mahallenize en yakın toplanma alanı için e-Devlet veya nokta35.com haritası kullanılabilir.",
    },
    {
      question: "Toplanma alanına ne zaman gidilir?",
      answer:
        "Deprem sırasında bina sallanmayı bırakıncaya kadar içeride kalınır (masa altı, köşe gibi güvenli noktalarda korunulur). Sarsıntı durduğunda ve güvenli çıkış mümkünse bina terk edilerek en yakın toplanma alanına gidilir. Artçı sarsıntılar beklendiğinden toplanma alanında kalmak önerilir.",
    },
    {
      question: "Toplanma alanında ne kadar beklenir?",
      answer:
        "Toplanma alanında kalış süresi hasarın büyüklüğüne bağlıdır. Hasar tespiti tamamlanana kadar binalara girmemek gerekir. Aile ve komşularla önceden iletişim planı oluşturmak, toplanma alanında buluşma noktasını belirlemek olası karışıklığı azaltır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Deprem anında doğru davranmak kadar, <strong>deprem sonrasında
        nereye gidileceğini bilmek</strong> de hayat kurtarır. Toplanma
        alanları tam da bu ihtiyaç için önceden belirlenir; ancak pek çok
        vatandaş mahallesindeki toplanma alanının nerede olduğunu bilmez.
        Bu yazıda toplanma alanının ne olduğunu, nasıl belirlendiğini ve
        İzmir için nasıl sorgulanabileceğini açıklıyoruz.
      </p>
      <p>
        AFAD'ın afet müdahale sistemi hakkında:{" "}
        <a href="/blog/afad-nedir-afetlerde-rolu">
          AFAD Nedir? Afetlerde Rolü ve İletişim Bilgileri
        </a>
      </p>

      <h2>Toplanma Alanı Nedir?</h2>
      <p>
        <strong>Toplanma alanı</strong>; deprem, yangın veya başka bir afet
        nedeniyle binaları terk etmek zorunda kalan vatandaşların güvenle
        bir araya gelebileceği, AFAD ve belediyeler tarafından önceden
        belirlenip işaretlenmiş açık alanlardır.
      </p>
      <p>Toplanma alanı olarak seçilen yerler:</p>
      <ul>
        <li>Park ve yeşil alanlar</li>
        <li>Meydanlar ve yaya bölgeleri</li>
        <li>Okul bahçeleri (bina dışı açık kısımlar)</li>
        <li>Spor sahaları ve atletizm pistleri</li>
      </ul>
      <p>
        Seçilen alanların ortak özellikleri: çöküntü riski taşıyan binalardan
        uzak olması, geniş ve açık olması, araç yolu ile erişilebilir olması
        ve yeterli kapasiteye sahip olmasıdır.
      </p>

      <h2>Toplanma Alanını Nasıl Bulursunuz?</h2>
      <p>
        Toplanma alanınızı <strong>afet olmadan önce</strong> öğrenmeniz
        kritik önem taşır. Seçenekler:
      </p>
      <ul>
        <li>
          <strong>e-Devlet:</strong> "Afet Toplanma Alanı Sorgulama" hizmeti
          üzerinden adres girerek en yakın toplanma alanını görüntüleyebilirsiniz.
        </li>
        <li>
          <strong>nokta35.com haritası:</strong> İzmir'deki toplanma alanları
          harita katmanında görüntülenebilir; konumunuza en yakın alanı
          kolayca bulabilirsiniz.
        </li>
        <li>
          <strong>Mahalle muhtarlığı:</strong> Muhtarlıklar, bölgedeki
          toplanma alanı hakkında en güncel bilgiye sahiptir.
        </li>
        <li>
          <strong>AFAD İl Müdürlükleri:</strong> İzmir AFAD İl Müdürlüğü'nden
          ilçe bazında toplanma alanı listesi talep edilebilir.
        </li>
      </ul>

      <h2>Deprem Anında Ne Yapılmalı?</h2>
      <p>
        Toplanma alanına gitmek, sarsıntı <em>durduğunda</em> yapılacak
        bir eylemdir. Deprem anında öncelik korunmaktır:
      </p>
      <ul>
        <li>
          <strong>Sarsıntı sırasında:</strong> Sağlam bir masa veya tezgâhın
          altına girin, başınızı ve boynunuzu koruyun. Pencere, dış duvar
          ve ağır eşyalardan uzak durun.
        </li>
        <li>
          <strong>Sarsıntı durduğunda:</strong> Kademeli olarak yangın, gaz
          kaçağı ve yapısal hasar kontrol edilir. Çıkış güvenli görünüyorsa
          bina terk edilir.
        </li>
        <li>
          <strong>Toplanma alanına gidin:</strong> Artçı sarsıntılar
          beklendiğinden, hasar tespiti tamamlanana kadar binaya dönmeyin.
        </li>
      </ul>

      <h2>Aile Toplanma Planı Oluşturun</h2>
      <p>
        Aile üyeleri farklı yerlerdeyken deprem yaşanabilir; çocuklar
        okulda, ebeveynler işte olabilir. Önceden şunları belirleyin:
      </p>
      <ul>
        <li>Her aile üyesinin toplanma alanı nerede?</li>
        <li>Toplanma noktasında buluşma yeri ve saati</li>
        <li>İletişim kesilebileceği için acil durum iletişim kişisi (şehir dışında bir akraba)</li>
        <li>Çocukların okulunun afet prosedürü ve teslim alma noktası</li>
      </ul>
      <p>
        Bu bilgileri ev içinde görünür bir yere asın ve tüm aile üyelerinin
        ezberlediğinden emin olun.
      </p>

      <h2>Deprem Çantasını Toplanma Alanı İçin Hazırlayın</h2>
      <p>
        Toplanma alanında saatler, hatta günler geçirmek zorunda
        kalabilirsiniz. Deprem çantanızda bulunması gerekenler için:
      </p>
      <p>
        <a href="/blog/deprem-cantasi-icinde-ne-olmali">
          Deprem Çantası: İçinde Ne Olmalı? (Güncel Liste)
        </a>
      </p>
      <p>
        Kapsamlı depreme hazırlık rehberi için:{" "}
        <a href="/blog/depreme-hazirlik-rehberi">
          Depreme Hazırlık: Ev, Çanta, Tahliye Planı
        </a>
      </p>
    </>
  )
}
