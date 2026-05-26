import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "turkiyenin-onemli-barajlari-ve-islevleri",
  title: "Türkiye'nin Önemli Barajları ve İşlevleri",
  description:
    "Türkiye'nin en büyük ve stratejik barajları: hangi nehir üzerinde, hangi bölgede, ne işe yarar? GAP, Keban, Hirfanlı ve daha fazlasının kısa rehberi.",
  date: "2026-05-17",
  category: "Su & Baraj",
  summary:
    "Türkiye, içme suyu, sulama ve hidroelektrik üretimi için onlarca büyük baraja sahiptir. Bu yazıda en bilinen ve stratejik öneme sahip barajlarını kısa kısa tanıtıyoruz.",
  readTime: 6,
  faq: [
    {
      question: "Türkiye'nin en büyük barajı hangisi?",
      answer:
        "Türkiye'nin en büyük barajı Atatürk Barajı'dır. Fırat Nehri üzerinde, Şanlıurfa ile Adıyaman sınırında yer alır. Güneydoğu Anadolu Projesi'nin (GAP) bel kemiği olan baraj, hem hidroelektrik üretir hem de geniş tarım alanlarının sulanmasını sağlar.",
    },
    {
      question: "GAP nedir?",
      answer:
        "GAP (Güneydoğu Anadolu Projesi), Fırat ve Dicle nehirleri üzerine kurulan barajlar, hidroelektrik santraller ve sulama tesislerini içeren entegre bir bölgesel kalkınma projesidir. Atatürk Barajı projenin omurgasıdır. Tarım, enerji ve sosyal kalkınmayı hedefler.",
    },
    {
      question: "Bir baraj ne işe yarar?",
      answer:
        "Barajlar çoklu amaçlara hizmet eder: içme suyu temini (büyükşehirlerin su kaynağı), tarımsal sulama, hidroelektrik üretimi, aşırı yağışlarda taşkın kontrolü ve bazen balıkçılık ile rekreasyon. Çoğu baraj birden fazla amaca hizmet eder.",
    },
    {
      question: "DSİ ne yapar?",
      answer:
        "Devlet Su İşleri (DSİ) Genel Müdürlüğü, Türkiye'de barajların, sulama tesislerinin ve içme suyu altyapısının planlama, inşa ve işletme görevini yürüten kamu kuruluşudur. Tarım ve Orman Bakanlığı'na bağlıdır. Barajların güncel verilerini de DSİ yayınlar.",
    },
    {
      question: "Türkiye'de hidroelektrik üretiminin payı nedir?",
      answer:
        "Türkiye, yenilenebilir enerji üretiminin önemli bir bölümünü hidroelektrik santrallerden elde eder. Atatürk, Karakaya ve Keban gibi büyük tesisler yıllık üretimde ciddi paya sahiptir. Güncel paylar Türkiye Elektrik İletim A.Ş. (TEİAŞ) ve EPDK verilerinden takip edilebilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Türkiye, coğrafi yapısı ve hidrolojik potansiyeli nedeniyle çok
        sayıda büyük baraja sahip bir ülkedir. Barajlar; içme suyu temini,
        tarımsal sulama, hidroelektrik üretimi ve taşkın kontrolü gibi
        farklı amaçlarla işletilir. Aşağıda Türkiye'nin en bilinen ve
        stratejik önem taşıyan barajlarını <strong>bölge ve işlev</strong>{" "}
        odaklı olarak özetliyoruz.
      </p>

      <p>
        <em>
          Not: "Türkiye'nin en büyük barajı" sıralaması; ölçüt olarak
          rezervuar hacmi, göl yüzölçümü veya kurulu güç alınmasına göre
          değişebilir. Bu yazıda kesin rakamlar yerine her barajın işlevi
          ve coğrafi konumu üzerinden bir genel bakış sunulmaktadır. Güncel
          ve resmi rakamlar için Devlet Su İşleri (DSİ) yayınlarına
          bakılması önerilir.
        </em>
      </p>

      <h2>Fırat Havzası</h2>
      <p>
        Fırat Nehri üzerindeki barajlar; Türkiye'nin hem hidroelektrik
        üretiminin hem de GAP (Güneydoğu Anadolu Projesi) çerçevesindeki
        sulama altyapısının omurgasını oluşturur.
      </p>
      <h3>Atatürk Barajı (Şanlıurfa / Adıyaman)</h3>
      <p>
        GAP'ın bel kemiği olan ve <strong>Türkiye'nin en büyük barajı</strong>{" "}
        olarak bilinen tesistir. Hem hidroelektrik üretir hem de
        Şanlıurfa Tüneli aracılığıyla geniş tarım arazilerinin
        sulanmasını sağlar. 1990'larda hizmete girmiştir.
      </p>
      <h3>Karakaya Barajı (Malatya / Diyarbakır)</h3>
      <p>
        Atatürk Barajı'nın hemen kuzeyinde yer alan, ağırlıklı olarak
        hidroelektrik üretimi amacıyla işletilen büyük bir tesistir.
      </p>
      <h3>Keban Barajı (Elazığ)</h3>
      <p>
        Türkiye'nin ilk büyük ölçekli barajlarından biridir. 1970'lerde
        tamamlanan tesis, devreye girdiğinde dönemin en büyük
        hidroelektrik santralleri arasında yer alıyordu.
      </p>

      <h2>Dicle Havzası</h2>
      <h3>İlısu Barajı (Mardin / Şırnak)</h3>
      <p>
        Dicle Nehri üzerine inşa edilen büyük ölçekli baraj, GAP
        kapsamında hayata geçirilen yeni nesil tesislerden biridir.
        Devreye alındığı dönemde hem hidroelektrik üretimi hem bölgesel
        kalkınma açısından gündeme gelmiştir.
      </p>

      <h2>Kızılırmak Havzası</h2>
      <h3>Hirfanlı Barajı (Kırşehir)</h3>
      <p>
        1959 yılında işletmeye alınan Hirfanlı; Türkiye'nin ilk büyük
        hidroelektrik barajlarından biridir. Türkiye'nin enerji
        modernleşmesinin sembollerinden sayılır.
      </p>
      <h3>Altınkaya Barajı (Samsun)</h3>
      <p>
        Kızılırmak'ın denize döküldüğü kesime yakın konumlanan baraj;
        hem enerji üretimi hem taşkın kontrolü amacıyla işletilir.
      </p>

      <h2>Sakarya Havzası</h2>
      <h3>Sarıyar Barajı (Ankara)</h3>
      <p>
        Sakarya Nehri üzerinde, başkent yakınlarında yer alan bir
        hidroelektrik barajıdır. 1950'lerin sonunda hizmete girmiş erken
        dönem tesislerinden biridir.
      </p>
      <h3>Gökçekaya Barajı (Eskişehir)</h3>
      <p>
        Sarıyar'ın hemen güneyinde, yine Sakarya Nehri üzerinde
        hidroelektrik üretim odaklı bir tesistir.
      </p>

      <h2>Manavgat ve Akdeniz Havzaları</h2>
      <h3>Oymapınar Barajı (Antalya)</h3>
      <p>
        Manavgat Çayı üzerinde inşa edilmiş, hem turistik bir görünüme
        sahip hem de bölge enerji üretiminde rol üstlenen bir hidroelektrik
        barajıdır.
      </p>

      <h2>Çoruh Havzası</h2>
      <h3>Deriner Barajı (Artvin)</h3>
      <p>
        Çoruh Nehri üzerine inşa edilen yüksek gövdeli bir hidroelektrik
        barajıdır. İnşa edildiği dönemde Türkiye'nin en yüksek baraj
        gövdelerinden biri olarak kayıtlara geçmiştir.
      </p>

      <h2>İçme suyu odaklı önemli barajlar</h2>
      <p>
        Büyükşehirlerin içme suyu güvenliği, kendi havzalarındaki
        barajlardan sağlanır. Birkaç örnek:
      </p>
      <ul>
        <li>
          <strong>Ömerli Barajı (İstanbul):</strong> İstanbul'un Anadolu
          yakası içme suyunda kritik rol oynayan barajdır.
        </li>
        <li>
          <strong>Tahtalı Barajı (İzmir):</strong> İzmir kentinin içme
          suyunun önemli bir bölümünü karşılar.
        </li>
        <li>
          <strong>Doğancı Barajı (Bursa):</strong> Bursa'nın içme suyu
          temininde önemli bir tesistir.
        </li>
      </ul>

      <h2>Barajların farklı işlevleri</h2>
      <p>
        Bir barajın işlevi planlanışına bağlıdır; aynı tesis birden fazla
        amaca hizmet edebilir:
      </p>
      <ul>
        <li>
          <strong>İçme suyu:</strong> Büyükşehirlerin musluk suyu
          temininin başlıca kaynağıdır.
        </li>
        <li>
          <strong>Sulama:</strong> Kuraklık riskine karşı tarımsal üretimi
          dengeler.
        </li>
        <li>
          <strong>Hidroelektrik:</strong> Türkiye'nin yenilenebilir enerji
          üretiminin omurgasını oluşturur.
        </li>
        <li>
          <strong>Taşkın kontrolü:</strong> Aşırı yağışlarda akarsu
          debilerini düzenleyerek alt havzayı korur.
        </li>
        <li>
          <strong>Balıkçılık ve rekreasyon:</strong> Bazı barajlar yöre
          ekonomisine bu yönlerden de katkı sağlar.
        </li>
      </ul>

      <h2>Güncel ve doğrulanabilir veriye nereden ulaşılır?</h2>
      <p>
        Türkiye'deki barajların güncel doluluk oranları, kurulu güç,
        rezervuar hacmi gibi resmi verileri{" "}
        <strong>Devlet Su İşleri (DSİ)</strong> Genel Müdürlüğü tarafından
        yayınlanır. Şehir içme suyu barajlarının doluluk verileri ise
        ilgili büyükşehir su idaresince (İSKİ, İZSU, BUSKİ vb.) düzenli
        olarak paylaşılır.
      </p>
    </>
  )
}
