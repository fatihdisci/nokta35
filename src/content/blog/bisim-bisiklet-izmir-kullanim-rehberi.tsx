import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "bisim-bisiklet-izmir-kullanim-rehberi",
  title: "BİSİM Bisiklet İzmir: Nasıl Kullanılır, Üyelik ve İstasyonlar",
  description:
    "İzmir'de BİSİM bisiklet paylaşım sistemi nasıl kullanılır? İstasyonlar, üyelik, İzmirkart entegrasyonu ve sahil koridorundaki güzergahlar hakkında rehber.",
  date: "2026-05-24",
  category: "Ulaşım",
  summary:
    "BİSİM (Bisiklet İzmir), İzmir Büyükşehir Belediyesi'nin sahil koridoru boyunca kurduğu istasyon bazlı bisiklet paylaşım sistemidir. İzmirkart ile entegre çalışır. Üyelik ve tarife için güncel bilgiye BİSİM'in resmi mobil uygulaması veya İZELMAN kanalları üzerinden ulaşılmalıdır.",
  readTime: 5,
  faq: [
    {
      question: "BİSİM nedir, kim işletir?",
      answer:
        "BİSİM (Bisiklet İzmir), İzmir Büyükşehir Belediyesi'nin oluşturduğu ve İZELMAN A.Ş.'nin işlettiği istasyon bazlı bisiklet paylaşım sistemidir. Sahil koridoru başta olmak üzere şehrin çeşitli noktalarında kiralama istasyonları bulunur.",
    },
    {
      question: "BİSİM'e üye olmak için ne gerekir?",
      answer:
        "BİSİM üyeliği için İzmirkart veya resmi mobil uygulama üzerinden kayıt yaptırılabilir. Güncel üyelik koşulları ve belgeler için BİSİM'in resmi uygulaması veya İZELMAN web sitesi incelenmelidir. Ücret ve üyelik planları dönemsel olarak değiştiğinden resmi kaynak esas alınmalıdır.",
    },
    {
      question: "BİSİM istasyonları nerede?",
      answer:
        "BİSİM istasyonları ağırlıklı olarak Karşıyaka–Bostanlı–Mavişehir ve Konak–Alsancak sahil koridoru boyunca, ayrıca metro istasyonları, otobüs terminalleri ve yoğun kullanım noktaları yakınında konumlandırılmıştır. Güncel istasyon haritası için BİSİM uygulaması kullanılabilir.",
    },
    {
      question: "Bisiklet ne kadar süre kullanılabilir, ücret nasıl hesaplanır?",
      answer:
        "BİSİM'de ücretsiz kullanım süresi ve sonrasındaki ücretlendirme sistemi dönemsel olarak güncellenebilmektedir. Kısa mesafe kullanım genellikle belirli bir süre ücretsiz ya da düşük ücretlidir; uzun süreli kullanımda ek ücret uygulanır. Güncel tarife için BİSİM'in resmi uygulaması veya İZELMAN kanalları esas alınmalıdır.",
    },
    {
      question: "Bisiklet hasarlı iade edilirse ne olur?",
      answer:
        "Hasarlı veya arızalı bisiklet kiralama öncesinde fark edilirse başka istasyondan bisiklet alınmalı ve durum uygulama üzerinden bildirilmelidir. Kullanım sırasında oluşan hasar için kiralayan kullanıcı sorumlu tutulabilir. Kural ve sorumluluk detayları için üyelik sözleşmesi incelenmelidir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'in uzun sahil koridoru, bisiklet kullanımına son derece
        elverişlidir. <strong>BİSİM (Bisiklet İzmir)</strong>, bu
        koridoru ve şehrin çeşitli noktalarını kapsayan istasyon
        bazlı bisiklet paylaşım sistemidir. Bu yazıda BİSİM'in
        nasıl çalıştığını, istasyon konumlarını ve kullanım
        sürecini ele alıyoruz.
      </p>

      <h2>BİSİM Nedir?</h2>
      <p>
        BİSİM, <strong>İzmir Büyükşehir Belediyesi</strong> öncülüğünde
        kurulan ve <strong>İZELMAN A.Ş.</strong> tarafından işletilen
        bisiklet paylaşım sistemidir. Sistem, sabit istasyonlar arasında
        bisiklet alıp bırakmaya dayanır; istasyonlar elektronik kilit
        sistemiyle donatılmıştır.
      </p>
      <p>
        BİSİM, İzmir'in kentiçi aktif ulaşım altyapısının bir parçasıdır;
        İzmirkart sistemiyle entegre çalışır.
      </p>

      <h2>İstasyon Konumları</h2>
      <p>
        BİSİM istasyonları yoğun olarak şu güzergahlarda yer alır:
      </p>
      <ul>
        <li>
          <strong>Karşıyaka–Bostanlı–Mavişehir sahil koridoru:</strong>{" "}
          İzmir'in en uzun kesintisiz bisiklet yolu boyunca birden fazla
          istasyon mevcuttur.
        </li>
        <li>
          <strong>Konak–Alsancak Kordon:</strong> Şehir merkezi sahilindeki
          bu hat, sık aralıklı istasyonlara sahiptir.
        </li>
        <li>
          <strong>Metro ve aktarma noktaları:</strong> Bazı metro
          istasyonları ve otobüs terminalleri yakınında BİSİM
          istasyonu bulunur; bu sayede çok modlu ulaşım kolaylaşır.
        </li>
      </ul>
      <p>
        Güncel istasyon haritası ve boş bisiklet sayısı için{" "}
        <strong>BİSİM resmi uygulaması</strong> en doğru kaynaktır;
        konum değişiklikleri ve yeni istasyonlar uygulama üzerinden
        yansıtılır.
      </p>

      <h2>Üyelik ve Başlangıç</h2>
      <p>
        BİSİM'e üye olmak için iki temel yol mevcuttur:
      </p>
      <ul>
        <li>
          <strong>İzmirkart entegrasyonu:</strong> Mevcut İzmirkart'ınız
          varsa BİSİM hesabınıza bağlanabilir; tek kart ile hem toplu
          taşıma hem bisiklet kullanılabilir.
        </li>
        <li>
          <strong>BİSİM mobil uygulaması:</strong> Uygulama üzerinden
          hesap oluşturularak bisiklet kiralanabilir. iOS ve Android
          platformlarında mevcuttur.
        </li>
      </ul>
      <p>
        Üyelik ücretleri ve planları periyodik olarak güncellenebilir.
        Güncel bilgi için{" "}
        <strong>resmi BİSİM uygulaması veya İZELMAN web sitesi</strong>{" "}
        esas alınmalıdır.
      </p>

      <h2>Bisiklet Nasıl Kiralanır?</h2>
      <ol>
        <li>
          Uygulamayı açın veya İzmirkart'ınızı istasyon okuyucusuna
          okutun.
        </li>
        <li>
          En yakın istasyondaki boş bisiklet yuvasını seçin.
        </li>
        <li>
          Uygulama veya kart üzerinden işlemi onaylayın; kilit
          açılır.
        </li>
        <li>
          Bisikleti kullanın; tamamlandığında en yakın istasyona iade edin.
        </li>
        <li>
          İstasyona kilitlendiğinde sistem otomatik teslim alır;
          ücret hesaplanır.
        </li>
      </ol>
      <p>
        İstasyonda boş yer yoksa yakın mesafedeki başka bir istasyon
        seçilmelidir; uygulama en yakın boş istasyonu gösterir.
      </p>

      <h2>Tarife Hakkında Not</h2>
      <p>
        BİSİM tarifesi; günlük, aylık ve yıllık üyelik planları içerebilir.
        İlk 30 dakika bazı planlarda ücretsiz ya da indirimlidir.
        Uzun süreli kullanımda ek dakika ücreti uygulanır.
      </p>
      <p>
        <strong>Önemli:</strong> Tarife bilgileri bu yazı yayımlandıktan
        sonra güncellenmiş olabilir. En güncel bilgi için BİSİM uygulamasını
        veya İZELMAN'ın resmi kanallarını takip edin.
      </p>

      <h2>Bisiklet Güvenliği</h2>
      <ul>
        <li>
          İzmir sahil koridorunda trafikten ayrık bisiklet yolu mevcuttur;
          bu güzergahlarda kask olmasa da dikkatli sürüş şarttır.
        </li>
        <li>
          Şehir içi yollarda kask takmak yasal zorunluluk değildir
          (bisiklet için); ancak güvenlik açısından kesinlikle önerilir.
        </li>
        <li>
          BİSİM bisikletleri teslim almadan önce fren, tekerlek ve
          koltuk ayarını kontrol edin.
        </li>
        <li>
          Arızalı bisiklet tespit edilirse uygulamadan bildirim yapılmalı
          ve başka bir bisiklet seçilmelidir.
        </li>
      </ul>

      <h2>Alternatif Mikro-Mobilite Seçenekleri</h2>
      <p>
        BİSİM'e ek olarak İzmir'de paylaşımlı scooter (Marti,
        BinBin gibi platformlar) da sahil ve merkez bölgelerinde
        yaygındır. Bu platformlar mobil uygulama üzerinden çalışır
        ve kendi ücretlendirme sistemine sahiptir.
      </p>
      <p>
        İzmir'deki yürüyüş ve bisiklet güzergahları için:{" "}
        <a href="/blog/izmir-ucretsiz-spor-tesisleri-parkurlar">
          İzmir Ücretsiz Spor Tesisleri ve Doğal Yürüyüş Parkurları
        </a>
      </p>
      <p>
        İzmirkart hakkında detaylı bilgi için:{" "}
        <a href="/blog/izmirkart-nedir-nasil-kullanilir">
          İzmirkart Nedir? Nasıl Alınır, Doldurulur ve Kullanılır?
        </a>
      </p>
    </>
  )
}
