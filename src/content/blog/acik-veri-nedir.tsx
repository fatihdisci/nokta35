import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "acik-veri-nedir-sehirler-icin-neden-onemli",
  title: "Açık Veri Nedir? Şehirler İçin Neden Önemli?",
  description:
    "Açık veri kavramı, tarihsel arka planı ve şehirlere ekonomik, sosyal, akademik katkıları. Türkiye'de açık veri portalları ve yararlanma yolları.",
  date: "2026-05-21",
  category: "Veri",
  summary:
    "Açık veri; herkesin ücretsiz erişebileceği, kullanabileceği ve yeniden yayınlayabileceği yapılandırılmış kamu verisidir. Şehirleri daha şeffaf ve verimli yönetmek için temel bir araçtır.",
  readTime: 5,
  faq: [
    {
      question: "Açık veri nedir kısaca?",
      answer:
        "Açık veri (open data); herkesin ücretsiz erişebileceği, kullanabileceği, yeniden işleyebileceği ve yeniden yayınlayabileceği, lisans kısıtlamasından arınmış yapılandırılmış veridir. Genellikle kamu kurumları tarafından JSON, CSV, XML gibi makine okunabilir formatlarda paylaşılır.",
    },
    {
      question: "Açık veri ücretli midir?",
      answer:
        "Hayır. Açık verinin tanım gereği temel niteliklerinden biri ücretsiz erişilebilir olmasıdır. Bir veri ücretliyse veya lisans kısıtlaması içeriyorsa o veri açık veri değildir.",
    },
    {
      question: "Türkiye'de açık veri portalları var mı?",
      answer:
        "Evet. Türkiye'de Cumhurbaşkanlığı Dijital Dönüşüm Ofisi koordinasyonunda ulusal açık veri çalışmaları yürütülmektedir. Ayrıca İstanbul, Ankara, İzmir, Bursa gibi büyükşehir belediyeleri kendi açık veri portallarını işletmektedir.",
    },
    {
      question: "Açık veri ile kişisel veri arasındaki fark nedir?",
      answer:
        "Açık veri kamuya açıkça paylaşılan verilerdir, ancak her veri açık veri olarak yayınlanamaz. Kişisel veriler (kimlik, telefon, sağlık bilgileri), ulusal güvenlik verileri ve ticari sırlar açık veri kapsamında değildir. Açık veri çalışmalarında anonimleştirme ve toplulaştırma teknikleri yaygındır.",
    },
    {
      question: "Sivil teknoloji (civic tech) nedir?",
      answer:
        "Sivil teknoloji; vatandaşların ve gönüllü geliştiricilerin kamuya yararlı uygulamalar geliştirdiği harekettir. Çoğunlukla açık veriye dayanır. Trafik bildirim platformları, kayıp eşya servisleri, oy izleme araçları ve şehir veri panelleri bu hareketin örnekleridir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>Açık veri (open data)</strong>; herhangi bir kişinin
        ücretsiz olarak erişebileceği, kullanabileceği, yeniden işleyebileceği
        ve yeniden yayınlayabileceği, lisans kısıtlamasından arınmış
        yapılandırılmış veriye denir. Açık verinin temel ölçütleri Open
        Knowledge Foundation tarafından şöyle tanımlanır:
      </p>
      <ul>
        <li><strong>Erişilebilir:</strong> Tercihen internet üzerinden indirilebilir olmalı</li>
        <li><strong>Makine okunabilir:</strong> JSON, CSV, XML gibi yapılandırılmış formatlarda olmalı</li>
        <li><strong>Açık lisanslı:</strong> Yeniden kullanım engellenmemiş olmalı</li>
        <li><strong>Bütünleşik:</strong> Diğer veri setleriyle birleştirilebilir olmalı</li>
      </ul>

      <h2>Açık veri ile şeffaflık arasındaki ilişki</h2>
      <p>
        Bir kurumun (belediye, bakanlık, kamu iktisadi teşebbüsü) topladığı
        veriyi açık veri olarak yayınlaması, vatandaşa şu olanakları sağlar:
      </p>
      <ul>
        <li>Kararların hangi verilere dayanılarak alındığını incelemek</li>
        <li>Kamu kaynaklarının nasıl kullanıldığını izlemek</li>
        <li>Yanlış ya da eksik veri olup olmadığını sorgulamak</li>
        <li>Belediye uygulamaları ile bağımsız platformları karşılaştırmak</li>
      </ul>

      <h2>Şehirler için açık verinin somut faydaları</h2>
      <h3>1. Vatandaş hizmeti çeşitliliği</h3>
      <p>
        Bir belediye nöbetçi eczane verisini açık veri olarak yayınladığında,
        üçüncü taraf yazılımcılar bu veriyi kullanarak yeni uygulamalar ve
        web siteleri geliştirebilir. Vatandaş, tek bir resmi uygulamaya bağlı
        kalmadan birçok farklı arayüzden bilgiye ulaşır.
      </p>

      <h3>2. Akademik araştırma</h3>
      <p>
        Üniversite öğrencileri ve akademisyenler, trafik akışı, hava
        kalitesi, sağlık istatistikleri gibi açık verileri araştırmalarında
        kullanabilir. Bu, kentin sorunlarına dair veriye dayalı çözümler
        üretilmesine katkı sağlar.
      </p>

      <h3>3. Ekonomik değer</h3>
      <p>
        Avrupa Komisyonu tarafından yayınlanan raporlar, açık verinin AB
        genelinde milyarlarca avroluk ekonomik değer üretme potansiyeli
        olduğunu öne çıkarmaktadır. Bu değer, açık veri üzerine kurulan
        girişimler, daha verimli kamu hizmetleri ve azalan idari yüklerden
        elde edilir.
      </p>

      <h3>4. Acil durum yönetimi</h3>
      <p>
        Deprem, sel, salgın hastalık gibi durumlarda açık veri kritik rol
        oynar. Konum verileri, hastane kapasitesi, ulaşım kesintileri gibi
        bilgilerin gerçek zamanlı paylaşılması, hem resmi kurumlar hem
        gönüllüler için müdahaleyi hızlandırır.
      </p>

      <h2>Açık veri ne değildir?</h2>
      <p>
        Açık veri kavramı her veriyi paylaşmak anlamına gelmez. Şunlar açık
        veri olarak yayınlanmaz:
      </p>
      <ul>
        <li>Kişisel veriler (TC kimlik, telefon, sağlık bilgileri)</li>
        <li>Ulusal güvenliği ilgilendiren veriler</li>
        <li>Ticari sırlar veya rekabet açısından hassas veriler</li>
        <li>Telif hakkı korumalı içerikler (lisans gerektiriyorsa)</li>
      </ul>
      <p>
        Bu nedenle açık veri çalışmalarında <em>anonimleştirme</em> ve{" "}
        <em>toplulaştırma</em> teknikleri yaygın olarak kullanılır.
      </p>

      <h2>Türkiye'de açık veri</h2>
      <p>
        Türkiye'de açık veri ekosistemi son on yılda büyük gelişme
        göstermiştir. Önemli platformlardan bazıları:
      </p>
      <ul>
        <li>
          <strong>Cumhurbaşkanlığı Dijital Dönüşüm Ofisi</strong> tarafından
          yürütülen ulusal açık veri çalışmaları
        </li>
        <li>
          Büyükşehir belediyelerinin (İstanbul, Ankara, İzmir, Bursa)
          kendi açık veri portalları
        </li>
        <li>
          Üniversite ve sivil toplum kuruluşlarının veri katalogları
        </li>
      </ul>

      <h2>Sivil teknoloji (civic tech) hareketi</h2>
      <p>
        Açık veri ekosistemine paralel olarak, vatandaşların ve gönüllü
        geliştiricilerin kamuya yararlı uygulamalar geliştirdiği bir alan
        olan <strong>sivil teknoloji (civic tech)</strong> büyümektedir.
        Trafik bildirimleri, kayıp eşya platformları, oy izleme araçları,
        açık veriye dayalı şehir panelleri bu hareketin örnekleridir.
      </p>

      <h2>Sonuç</h2>
      <p>
        Açık veri, modern bir şehrin temel altyapılarından biri haline
        gelmiştir. Belediyelerin verileri paylaşması yalnızca şeffaflık değil,
        aynı zamanda ekonomik üretkenlik, akademik araştırma ve vatandaş
        memnuniyeti açısından somut faydalar sağlar. Bir veri ne kadar açıksa,
        o şehirde o kadar çok pencere açılır.
      </p>
    </>
  )
}
