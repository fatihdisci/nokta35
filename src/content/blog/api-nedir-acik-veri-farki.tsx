import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "api-nedir-acik-veri-farki",
  title: "API Nedir? Açık Veri ile Farkı Ne?",
  description:
    "API nedir, nasıl çalışır? Açık veri ile API arasındaki temel fark nedir? REST API, endpoint, JSON yanıtı — teknik olmayan bir dille tam açıklama.",
  date: "2026-05-24",
  category: "Açık Veri",
  summary:
    "API (Uygulama Programlama Arayüzü), iki yazılımın birbirine veri aktarmasını sağlayan yapıdır. Açık veri ise herkesin özgürce indirebileceği ham veri dosyasıdır. Her ikisi de şeffaflığı artırır; ancak API canlı ve dinamik, açık veri genellikle anlık veya periyodik snapshot niteliğindedir.",
  readTime: 5,
  faq: [
    {
      question: "API nedir?",
      answer:
        "API (Application Programming Interface — Uygulama Programlama Arayüzü), iki farklı yazılımın birbirine veri veya işlevsellik sunmasını sağlayan standarttır. Bir yazılım, API üzerinden istek gönderir; karşı taraf yanıt döner. Hava durumu uygulamanızın anlık sıcaklığı göstermesi, bir havayolu şirketinin API'sinden veri çekmesiyle mümkün olur.",
    },
    {
      question: "Açık veri ile API farkı nedir?",
      answer:
        "Açık veri, herkesin özgürce indirebileceği bir CSV, JSON veya Excel dosyasıdır — belirli bir andaki verinin fotoğrafıdır. API ise canlı bir veri bağlantısıdır; uygulama her sorgusunda güncel veriyi çeker. Açık veri portal üzerinden tek seferlik indirilebilirken, API entegrasyon gerektirir.",
    },
    {
      question: "REST API nedir?",
      answer:
        "REST (Representational State Transfer), web tabanlı API'lerde en yaygın mimari yaklaşımdır. HTTP protokolü üzerinden çalışır; GET (veri çekme), POST (veri gönderme), PUT/PATCH (güncelleme) ve DELETE gibi metodlar kullanır. Çoğu belediye ve kamu API'si REST mimarisindedir.",
    },
    {
      question: "Endpoint nedir?",
      answer:
        "Endpoint, bir API'de belirli bir veri veya işlevi temsil eden URL adresidir. Örneğin bir belediyenin nöbetçi eczane endpoint'i, o güne ait tüm eczaneleri döner. Her endpoint farklı bir veri konusuna karşılık gelir.",
    },
    {
      question: "Belediyeler neden API sunar?",
      answer:
        "Kamu kurumları API sunarak geliştiricilerin, gazetecilerin ve vatandaşların verileri yeniden kullanmasına imkân tanır. Bu sayede belediye kendi uygulama geliştirmeden, üçüncü taraflar otobüs takip, nöbetçi eczane veya su kesintisi uygulamaları üretebilir. Şeffaflık ve hesap verebilirlik de artmış olur.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        "API" kelimesini yazılımcıların dışında pek çok kişi duymuştur ama
        ne anlama geldiğini tam bilmeyebilir. <strong>API</strong>, kısaca
        iki yazılımın birbirine veri aktarmasını sağlayan köprüdür. Açık
        veri ise bundan farklıdır: herkesin indirebileceği ham veri
        dosyasıdır. Bu yazıda ikisi arasındaki farkı, örneklerle
        açıklıyoruz.
      </p>
      <p>
        Açık verinin genel çerçevesi için:{" "}
        <a href="/blog/acik-veri-nedir-sehirler-icin-neden-onemli">
          Açık Veri Nedir? Şehirler İçin Neden Önemli?
        </a>
      </p>

      <h2>API Nasıl Çalışır?</h2>
      <p>
        Bir uygulama API'yi kullanmak istediğinde şu adımları izler:
      </p>
      <ol>
        <li><strong>İstek (Request):</strong> Uygulama, belirli bir URL'e (endpoint) HTTP isteği gönderir.</li>
        <li><strong>İşleme:</strong> API sunucusu isteği alır, ilgili veriyi veritabanından veya sistemden çeker.</li>
        <li><strong>Yanıt (Response):</strong> Sunucu veriyi genellikle JSON formatında geri gönderir.</li>
        <li><strong>Kullanım:</strong> Uygulama gelen veriyi işler ve kullanıcıya gösterir.</li>
      </ol>
      <p>
        Tüm bu döngü genellikle milisaniyeler içinde tamamlanır. Bir hava
        durumu uygulaması, akıllı şehir dashboard'u veya ulaşım takip
        ekranı bu şekilde çalışır.
      </p>

      <h2>Açık Veri ile API Karşılaştırması</h2>
      <p>
        İkisi de veriyi kamuyla paylaşır; ancak biçim ve kullanım
        farklıdır:
      </p>
      <ul>
        <li>
          <strong>Açık veri:</strong> Belirli bir tarihe ait sabit dosya
          (CSV, Excel, JSON). Portal üzerinden indirip analiz edilir.
          Kod bilgisi gerekmeyebilir.
        </li>
        <li>
          <strong>API:</strong> Canlı bağlantı. Her sorgu anında güncel
          veriyi döner. Entegrasyon için temel programlama bilgisi gerekir.
        </li>
      </ul>
      <p>
        Örnek: Bir belediye, geçmiş yıllara ait baraj doluluk verilerini
        CSV olarak açık veri portali üzerinden paylaşabilir. Aynı barajın
        anlık doluluk oranını ise API üzerinden sunar.
      </p>

      <h2>REST API Nedir?</h2>
      <p>
        REST, günümüzde en yaygın API mimarisidir. Web tarayıcısının
        sunuculara sayfa istediği HTTP protokolünü kullanır. REST API'de
        her kaynak bir URL ile temsil edilir ve standart HTTP metodlarıyla
        işlem yapılır:
      </p>
      <ul>
        <li><strong>GET:</strong> Veri okuma — en sık kullanılan</li>
        <li><strong>POST:</strong> Yeni veri oluşturma</li>
        <li><strong>PUT / PATCH:</strong> Mevcut veriyi güncelleme</li>
        <li><strong>DELETE:</strong> Silme</li>
      </ul>
      <p>
        Kamu API'lerinin büyük çoğunluğu yalnızca GET metoduna izin verir;
        veri okunabilir, değiştirilemez.
      </p>

      <h2>JSON Yanıtı Nasıl Görünür?</h2>
      <p>
        API'ler çoğunlukla JSON (JavaScript Object Notation) formatında
        yanıt döner. Anahtar-değer çiftlerinden oluşan bu format hem
        insanlar hem makineler tarafından kolayca okunur. Sayılar,
        metinler, listeler ve iç içe nesneler JSON'da ifade edilebilir.
      </p>
      <p>
        Veri formatları hakkında daha fazlası için:{" "}
        <a href="/blog/json-csv-xml-veri-formatlari-farki">
          JSON, CSV, XML: Veri Formatları Arasındaki Fark
        </a>
      </p>

      <h2>Kamu API'leri: Şehir Verisi</h2>
      <p>
        Türkiye'de birçok büyükşehir belediyesi kamu API'si sunar. Bu
        API'ler aracılığıyla; anlık otobüs konumları, nöbetçi eczaneler,
        su kesintileri, baraj doluluk oranları ve park yeri bilgilerine
        erişilebilir. Geliştiriciler bu verileri kullanarak bağımsız
        uygulamalar ve şehir platformları oluşturabilir.
      </p>
      <p>
        Bu verilerle ne yapılabileceğini görmek için:{" "}
        <a href="/blog/akilli-sehir-smart-city-nedir">
          Akıllı Şehir (Smart City) Nedir? İzmir Örnekleri
        </a>
      </p>
    </>
  )
}
