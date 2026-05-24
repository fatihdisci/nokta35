import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-otobus-hatlari-nasil-numaralandirilir",
  title: "İzmir Otobüs Hatları Nasıl Numaralandırılır? ESHOT Sisteminin Mantığı",
  description:
    "İzmir'de toplu taşımadan sorumlu ESHOT'un hat numaralandırma mantığı: anahat / besleyici hat, harf takıları, gece hatları ve akıllı kart sistemi.",
  date: "2026-05-22",
  category: "Ulaşım",
  summary:
    "İzmir'in otobüs hat numaraları rastgele değildir; anahat–besleyici hat ayrımı, harf takıları ve özel servis hatları belli bir mantığa göre kodlanır.",
  readTime: 5,
}

export function Body() {
  return (
    <>
      <p>
        İzmir'de büyükşehir otobüs hizmeti <strong>ESHOT</strong> tarafından
        yürütülür. ESHOT adı tarihsel olarak <em>Elektrik, Su, Havagazı,
        Otobüs ve Troleybüs İşletmesi</em> kısaltmasından gelir; bugün
        yalnızca otobüs ve toplu taşıma alanında faaliyet gösteren İzmir
        Büyükşehir Belediyesi'ne bağlı bir kuruluştur.
      </p>

      <h2>Şehir otobüs sistemleri genel olarak nasıl yapılandırılır?</h2>
      <p>
        Türkiye'deki büyükşehirlerin neredeyse tamamı, otobüs hatlarını
        belirli bir hiyerarşi içinde planlar. Bu hiyerarşi tipik olarak şu
        katmanlardan oluşur:
      </p>
      <ul>
        <li>
          <strong>Anahat (omurga hatlar):</strong> Yüksek yolcu yoğunluğunun
          olduğu, şehir merkezini önemli aktarma noktalarına bağlayan ana
          güzergahlar.
        </li>
        <li>
          <strong>Besleyici hat:</strong> Anahattan inen yolcuyu mahallelere
          taşıyan, daha kısa ve düşük frekanslı hatlar.
        </li>
        <li>
          <strong>Express / hızlı hat:</strong> Az duraklı, uzun mesafe
          hatlar; sabah-akşam zirve saatlerinde işler.
        </li>
        <li>
          <strong>Gece hatları:</strong> Gece servisinin sürdüğü, genellikle
          sınırlı sayıdaki güzergah.
        </li>
        <li>
          <strong>Aktarma hatları:</strong> Metro, tramvay, vapur ya da İZBAN
          istasyonlarıyla bütünleşik çalışan kısa mesafeli hatlar.
        </li>
      </ul>

      <h2>Numaralandırmadaki harf takılarının anlamı</h2>
      <p>
        Bir hat numarasının yanında harf görüyorsanız bu çoğunlukla ana
        hattan ayrılan bir varyasyonu temsil eder:
      </p>
      <ul>
        <li>
          <strong>"A" / "B":</strong> Ana hattın farklı bir ucunu kullanan
          alt varyasyonlar (genelde aynı güzergahın yarısı).
        </li>
        <li>
          <strong>"E":</strong> "Express" kısaltması olarak az duraklı,
          hızlı sefer.
        </li>
        <li>
          <strong>"G":</strong> "Gece" hattı (her şehirde standart değildir).
        </li>
        <li>
          <strong>"H":</strong> Hastane bağlantılı, sağlık tesisine giden hat.
        </li>
      </ul>
      <p>
        Bu harflerin tam anlamı her belediyenin kendi kodlama tercihine bağlı
        olarak değişir; standart bir ülke geneli kural yoktur.
      </p>

      <h2>Halk otobüsü ile ESHOT otobüsü farkı</h2>
      <p>
        İzmir'de ESHOT'a ait belediye otobüslerinin yanında <strong>halk
        otobüsleri</strong> de hizmet verir. Halk otobüsleri özel
        işletmecilere ait olup belediyenin denetimi ve tarifesi çerçevesinde
        çalışır. Görsel olarak farklı renkte olabilirler ama aynı akıllı kart
        sistemiyle ücretlendirilirler.
      </p>

      <h2>Akıllı kart: Kentkart</h2>
      <p>
        İzmir'de toplu taşımada kullanılan resmi akıllı kart{" "}
        <strong>Kentkart</strong>'tır. Kentkart ile ESHOT otobüsleri, halk
        otobüsleri, metro, tramvay, İZBAN ve İzdeniz vapur seferlerinde
        ödeme yapılabilir; ayrıca kart, sistem genelinde aktarma indirimi
        sağlar.
      </p>

      <h2>Bir hattı planlarken yapmanız gerekenler</h2>
      <ol>
        <li>
          Başlangıç ve varış noktanızı resmi ESHOT planlama aracına ya da
          haritalı toplu taşıma uygulamalarına yazın.
        </li>
        <li>
          Sefer saatleri saatlere göre değişebilir; özellikle gece, hafta
          sonu ve resmi tatil günlerini ayrıca kontrol edin.
        </li>
        <li>
          Mümkünse aktarmalı planınızı, aynı bölgedeki birden fazla hat
          arasından seçim yaparak kurgulayın; bu sayede beklenmedik
          gecikmelere karşı yedeğiniz olur.
        </li>
      </ol>

      <h2>Sonuç</h2>
      <p>
        İzmir otobüs hatlarının numaralarındaki harfler, son rakamlar veya
        renk farklılıkları aslında bir sistemin parçasıdır. Bu sistemin
        mantığını bilmek; aktarma yaparken hangi numaranın gerçek bir
        alternatif olduğunu, hangi hattın sadece varyasyon olduğunu hızlıca
        anlamayı kolaylaştırır.
      </p>
    </>
  )
}
