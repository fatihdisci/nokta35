import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-pazar-yerleri-rehberi",
  title: "İzmir'de Semt Pazarları: Hangi Gün, Hangi İlçede?",
  description:
    "İzmir'deki semt pazarlarının rehberi: her ilçede hangi gün pazar kurulur, taze sebze ve meyve nerede bulunur, pazar yeri geleneği nasıl işler? Harita ve.",
  date: "2026-05-24",
  category: "İzmir Rehberi",
  summary:
    "İzmir'de 30 ilçeye yayılan yüzlerce semt pazarı haftalık döngüyle kurulur. Her mahallede en az bir pazar günü bulunur; taze, mevsimlik ve yerel ürünler için en ekonomik alışveriş noktalarıdır.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de semt pazarları hangi günlerde kurulur?",
      answer:
        "İzmir'deki semt pazarları haftanın her günü farklı mahallelerde kurulur. Her mahallede genellikle haftada bir gün pazar vardır; bazı büyük ilçelerde ise birden fazla mahallede aynı gün pazar kurulabilir. Hangi günde hangi ilçede pazar olduğunu öğrenmek için İzmir Büyükşehir Belediyesi'nin resmi kaynakları veya nokta35.com'daki pazar haritası kullanılabilir.",
    },
    {
      question: "Semt pazarlarında neler satılır?",
      answer:
        "İzmir semt pazarlarında başta taze sebze ve meyveler olmak üzere peynir, zeytin, kuruyemiş, ev yapımı ürünler, giyim, tekstil ve ev eşyası satılır. Her pazar yeri biraz farklıdır; bazıları yalnızca gıda ürünlerine odaklanırken bazılarında geniş yelpazeye rastlanır.",
    },
    {
      question: "Semt pazarı ile süpermarket arasındaki fark nedir?",
      answer:
        "Semt pazarlarında ürünler çoğunlukla doğrudan üreticiden veya toptancıdan gelir; bu da hem tazelik hem fiyat avantajı sağlayabilir. Mevsiminde ve yerel üretim ürünler için pazar, süpermarkete göre daha iyi bir seçenek olabilir. Fiyatlar satıcıya ve mevsime göre değişir.",
    },
    {
      question: "İzmir pazar yerleri nereden öğrenilir?",
      answer:
        "İzmir Büyükşehir Belediyesi'nin açık veri portalında tüm kayıtlı pazar yerlerinin konumları ve çalışma günleri yayımlanmaktadır. nokta35.com'daki harita görünümünde de pazar yerleri işaretlidir; ilçe veya güne göre filtre uygulanabilir.",
    },
    {
      question: "Semt pazarları kaçta açılır, kaçta kapanır?",
      answer:
        "İzmir semt pazarları genellikle sabah 07.00–08.00 arasında kurulmaya başlar ve öğleden sonra 14.00–16.00 saatlerine kadar açık kalır. Saatler pazara, mevsime ve satıcı yoğunluğuna göre değişkenlik gösterebilir; sabah saatlerinde ürün çeşitliliği en geniş olur.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'in en köklü alışveriş geleneği olan <strong>semt pazarları</strong>,
        30 ilçeye yayılan yüzlerce kurulum noktasıyla şehrin sosyal dokusunun
        ayrılmaz bir parçasıdır. Taze sebze, meyve, peynir ve ev ürünleri için
        ekonomik ve yerel bir alternatif sunan pazar geleneği, Osmanlı döneminden
        günümüze kesintisiz sürmektedir. Bu rehberde İzmir pazar sisteminin nasıl
        çalıştığını, haritada nasıl bulunacağını ve alışveriş yaparken neye dikkat
        edilmesi gerektiğini açıklıyoruz.
      </p>
      <p>
        İzmir'e genel bakış için:{" "}
        <a href="/blog/izmir-rehberi-cografya-iklim-ilceler">
          İzmir Rehberi: Coğrafya, İklim, İlçeler
        </a>
      </p>

      <h2>İzmir'de Pazar Sistemi Nasıl İşler?</h2>
      <p>
        İzmir Büyükşehir Belediyesi, semt pazarlarını kayıt altına alır ve
        koordinat bilgileriyle birlikte açık veri olarak yayımlar. Her pazar
        yeri, belirlenmiş bir mahalle ve güne bağlıdır; bu döngü haftalık
        olarak tekrar eder. Bazı büyük ilçelerde birden fazla mahallede ve
        farklı günlerde pazar kurulur.
      </p>
      <p>
        Pazarların kurulum ve kaldırım süreci belediye denetimiyle yürütülür.
        Seyyar satıcıların aksine kayıtlı pazar satıcıları belirli standartlara
        uymak zorundadır.
      </p>

      <h2>Pazar Yeri Nerede ve Hangi Gün?</h2>
      <p>
        İzmir genelinde hangi ilçede, hangi mahallede ve hangi gün pazar
        kurulduğunu öğrenmenin en güvenilir yolları:
      </p>
      <ul>
        <li>
          <strong>nokta35.com haritası:</strong> Belediyenin açık verilerinden
          derlenen pazar yerleri, günlerine ve konumlarına göre haritada
          görüntülenebilir.
        </li>
        <li>
          <strong>İzmir Büyükşehir Belediyesi resmi web sitesi:</strong> Kayıtlı
          pazar yeri listesi ve günleri yayımlanmaktadır.
        </li>
        <li>
          <strong>Muhtarlıklar:</strong> Mahalle muhtarlıkları, bölgedeki pazar
          günleri hakkında en güncel bilgiye sahiptir.
        </li>
      </ul>

      <h2>Pazarlarda Ne Bulunur?</h2>
      <p>
        İzmir semt pazarları ürün yelpazesi bakımından farklılık gösterir.
        Genel olarak:
      </p>
      <ul>
        <li>
          <strong>Taze sebze ve meyve:</strong> Ege bölgesinin verimli
          tarım arazilerinden gelen mevsimlik ürünler. Özellikle zeytinyağı,
          incir, üzüm ve narenciye gibi yöresel ürünler dikkat çeker.
        </li>
        <li>
          <strong>Süt ürünleri:</strong> Peynir, yoğurt ve tereyağı çeşitleri;
          zaman zaman köy üretimi ürünler.
        </li>
        <li>
          <strong>Kuruyemiş ve baharatlar:</strong> Çeşit ve fiyat açısından
          zincir marketlere kıyasla avantajlı olabilir.
        </li>
        <li>
          <strong>Giyim ve tekstil:</strong> Birçok pazarda giyim standları da
          bulunur; fiyatlar geniş aralıkta değişir.
        </li>
        <li>
          <strong>Ev eşyası:</strong> Plastik, alüminyum ve çeşitli mutfak
          gereçleri satan tezgâhlar.
        </li>
      </ul>

      <h2>Pazar Alışverişinde Dikkat Edilecekler</h2>
      <ul>
        <li>
          <strong>Sabah saatleri:</strong> Ürün çeşitliliği ve tazeliği
          en yüksek sabah 08.00–11.00 arasındadır. Öğleden sonra seçenek
          daralır, ancak fiyatlar düşebilir.
        </li>
        <li>
          <strong>Nakit para:</strong> Pek çok pazar tezgâhı hâlâ yalnızca
          nakit kabul eder; yanınızda bozuk para bulundurmak pratik olur.
        </li>
        <li>
          <strong>Bez çanta:</strong> Plastik poşet yerine bez çanta getirmek
          hem çevre dostudur hem de pratik.
        </li>
        <li>
          <strong>Fiyat karşılaştırması:</strong> Aynı üründe farklı
          satıcılar arasında belirgin fiyat farkı olabilir; ilk tezgâhta
          karar vermeden birkaç tezgâhı gezmek avantajlı olabilir.
        </li>
        <li>
          <strong>Mevsim ürünleri:</strong> Mevsiminde alınan ürünler hem
          daha taze hem daha uygun fiyatlıdır; zorla yetiştirilen ithal
          ürünlerin aksine.
        </li>
      </ul>

      <h2>Sürdürülebilir Alışveriş ve Pazar Geleneği</h2>
      <p>
        Semt pazarları, sürdürülebilir tüketim açısından da değerlidir.
        Mevsiminde yerel ürün almak; uzun nakliye gerektirmeyen, daha az
        ambalajlı ve düşük karbon ayak izli bir alışveriş anlamına gelir.
        Küçük üreticileri de destekler.
      </p>
      <p>
        Sürdürülebilir alışveriş için daha fazla ipucu:{" "}
        <a href="/blog/surdurulebilir-yasam-nedir-rehber">
          Sürdürülebilir Yaşam Nedir? Evden Başlamak İçin Kılavuz
        </a>
      </p>

      <h2>Pazar Yeri Konumlarını Haritada Görüntüleyin</h2>
      <p>
        İzmir'deki pazar yerlerini haritada görmek, adresinize en yakın
        pazarı bulmak ve hangi gün kurulduğunu öğrenmek için{" "}
        <a href="/">nokta35.com</a>'un harita görünümünü kullanabilirsiniz.
        Veriler İzmir Büyükşehir Belediyesi'nin açık veri kaynağından
        düzenli olarak güncellenmektedir.
      </p>
    </>
  )
}
