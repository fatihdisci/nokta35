import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "ozon-kirliligi-nedir-saglik-etkileri",
  title: "Ozon (O₃) Kirliliği Nedir? Sağlığa Etkileri ve Yüzey Ozonu",
  description:
    "Yüzey ozonu nedir, stratosferik ozondan farkı nedir? Güneş ışığı ve egzoz gazlarından oluşan fotokimyasal sis, solunum sistemi etkileri ve hassas gruplar.",
  date: "2026-05-25",
  category: "Hava Kalitesi",
  summary:
    "Ozon (O₃) hem atmosferde koruyucu bir tabaka hem de yeryüzünde zararlı bir hava kirleticidir. Yüzey ozonu; azot oksitler ve uçucu organik bileşiklerin güneş ışığıyla reaksiyona girmesiyle oluşur. Solunum yollarını tahriş eder; çocuklar, yaşlılar ve astım hastaları en risk altındaki gruplardır.",
  readTime: 6,
  faq: [
    {
      question: "Stratosferik ozon ile yüzey ozonu arasındaki fark nedir?",
      answer:
        "Stratosferik ozon (ozon tabakası) yaklaşık 15–35 km yükseklikte bulunur ve Güneş'in zararlı UV-B ışınlarını filtreler; bu ozon koruyucudur. Yüzey ozonu (troposferik ozon) ise soluduğumuz hava katmanında, kirlilik kaynakları olan egzoz ve sanayi gazlarının güneş ışığıyla reaksiyona girmesiyle oluşur; bu ozon zararlıdır. 'Ozon deliği' stratosferik tabakayı, hava kalitesi uyarıları ise yüzey ozonunu kapsar.",
    },
    {
      question: "Yüzey ozonu nasıl oluşur?",
      answer:
        "Yüzey ozonu doğrudan egzozdan çıkmaz; ikincil bir kirleticidir. Araçlardan ve endüstriden salınan azot oksitler (NOₓ) ile uçucu organik bileşikler (VOC), güneş ışığının tetiklediği fotokimyasal reaksiyonla ozon üretir. Bu nedenle ozon seviyeleri güneşli ve sıcak günlerde, özellikle öğleden sonra en yüksek düzeye ulaşır.",
    },
    {
      question: "Ozon kirliliği sağlığı nasıl etkiler?",
      answer:
        "Yüzey ozonu solunduğunda akciğer dokusunu oksitleyerek tahriş eder. Belirtiler arasında öksürük, nefes darlığı, göğüs ağrısı ve gözlerde yanma sayılabilir. Uzun süreli maruziyette akciğer kapasitesi düşebilir. Astım, KOAH gibi kronik solunum hastalıklarını tetikleyebilir. Çocuklar, yaşlılar ve dışarıda çalışanlar en yüksek risk grubundadır.",
    },
    {
      question: "Yüksek ozon günlerinde ne yapılmalı?",
      answer:
        "Yüksek ozon uyarısı olan günlerde öğleden sonra dışarıda yoğun fiziksel aktiviteden kaçınmak temel önlemdir; ozon bu saatlerde en yüksek düzeye ulaşır. Sabah erken saatler daha güvenlidir. Astım veya solunum hastalarının ilaçlarını yanında taşıması ve semptom gelişirse iç mekâna girmesi önerilir.",
    },
    {
      question: "İzmir'de ozon seviyeleri nerede takip edilir?",
      answer:
        "Türkiye'de hava kalitesi verileri Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın Hava Kalitesi İzleme Ağı (HKIO) tarafından yayımlanır. İzmir'deki istasyonlara ait güncel PM10, PM2.5 ve ozon verileri bakanlığın Hava Kalitesi İzleme sistemi üzerinden sorgulanabilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        "Ozon" sözcüğü hem "ozon tabakasını" hem de şehirlerdeki
        hava kirliliğini akla getirir. Ancak bu ikisi birbirinin
        tam tersidir: biri bizi koruyan, diğeri bizi etkileyen
        farklı katmanlardaki aynı moleküldür. Bu yazıda{" "}
        <strong>yüzey ozonu</strong> — yani hava kalitesi bağlamındaki
        ozon kirliliği — ele alınmaktadır.
      </p>

      <h2>İki Farklı Ozon: Koruyucu ve Zararlı</h2>

      <h3>Stratosferik Ozon (İyi Ozon)</h3>
      <p>
        Yerden yaklaşık 15–35 km yüksekte, stratosfer katmanında yer
        alır. Güneş'ten gelen zararlı <strong>UV-B ışınlarını</strong>{" "}
        filtreleyen doğal bir kalkan işlevi görür. Kloroflorokarbon
        (CFC) gibi suni kimyasallar bu tabakayı incelterek "ozon
        deliğine" yol açar. Montreal Protokolü ile bu maddeler
        yasaklanmış; ozon tabakası kademeli olarak iyileşmektedir.
      </p>

      <h3>Yüzey Ozonu / Troposferik Ozon (Kötü Ozon)</h3>
      <p>
        Soluduğumuz hava katmanında, yani yeryüzüne yakın troposferde
        oluşur. Doğal kaynaklı değil,{" "}
        <strong>insan faaliyetlerinin bir yan ürünüdür.</strong>{" "}
        Hava kalitesi uyarıları ve AKİ değerlerindeki ozon, bu
        troposferik ozondur.
      </p>

      <h2>Yüzey Ozonu Nasıl Oluşur?</h2>
      <p>
        Yüzey ozonu <strong>ikincil bir kirleticidir</strong> — yani
        doğrudan bir kaynaktan çıkmaz. Şu süreçle oluşur:
      </p>
      <ol>
        <li>
          Araç egzozları ve sanayi tesisleri <strong>azot oksitler
          (NOₓ)</strong> ve <strong>uçucu organik bileşikler
          (VOC)</strong> salar.
        </li>
        <li>
          Bu gazlar güneş ışığıyla fotokimyasal reaksiyona girerek
          ozon (O₃) üretir.
        </li>
        <li>
          Reaksiyon sıcaklık ve güneş ışığına bağlı olduğundan ozon
          seviyeleri <strong>sıcak, güneşli günlerde öğleden sonra
          zirveye ulaşır.</strong>
        </li>
      </ol>
      <p>
        Bu nedenle ozon kirliliği yaz aylarında, güneşli ve durgun
        havalarda en yüksek seviyelere çıkar. Sabah erken saatler
        genellikle daha düşük ozon içerir.
      </p>

      <h2>Fotokimyasal Sis</h2>
      <p>
        Büyük şehirlerde güneşli havalarda oluşan sarımsı-kahverengi
        sis, büyük ölçüde <strong>fotokimyasal sis</strong> olarak
        adlandırılır. Bu sisin bileşenleri arasında ozon, nitrojen
        dioksit ve partikül maddeler yer alır. Görüş mesafesini
        düşürür ve solunum yollarını tahriş eder.
      </p>

      <h2>Sağlık Etkileri</h2>
      <p>
        Ozon güçlü bir oksitleyicidir; akciğer dokusuna temas ettiğinde
        hücresel hasar oluşturur. Etkileri maruz kalma düzeyine ve
        süresine göre değişir:
      </p>

      <h3>Kısa Süreli Maruziyet</h3>
      <ul>
        <li>Öksürük, boğaz tahrişi</li>
        <li>Göğüs ağrısı ve sıkışma hissi</li>
        <li>Nefes darlığı, özellikle egzersiz sırasında</li>
        <li>Gözlerde yanma ve sulanma</li>
      </ul>

      <h3>Uzun Süreli Maruziyet</h3>
      <ul>
        <li>Akciğer kapasitesinde kalıcı düşüş</li>
        <li>Kronik solunum yolu iltihabı</li>
        <li>Astım ataklarının sıklaşması</li>
        <li>Kardiyovasküler sistem üzerindeki dolaylı etkiler</li>
      </ul>

      <h3>Hassas Gruplar</h3>
      <ul>
        <li><strong>Çocuklar:</strong> Gelişmekte olan akciğerler daha savunmasızdır</li>
        <li><strong>Yaşlılar:</strong> Solunum kapasitesi azalmış bireyler</li>
        <li><strong>Astım ve KOAH hastaları:</strong> Mevcut hastalık ozon ile şiddetlenir</li>
        <li><strong>Dışarıda yoğun spor yapanlar:</strong> Soluma hızı yüksek olduğundan daha fazla maruziyet</li>
      </ul>

      <h2>Bitkiler Üzerindeki Etkisi</h2>
      <p>
        Ozon yalnızca insanları değil, bitkileri de etkiler. Yaprak
        dokusuna zarar verir; fotosentezi ve ürün verimini düşürür.
        Özellikle buğday, soya ve patates gibi tarım ürünleri yüksek
        ozon konsantrasyonlarından olumsuz etkilenir. Bu durum gıda
        güvenliği tartışmalarında göz ardı edilen bir faktördür.
      </p>

      <h2>Yüksek Ozon Günlerinde Öneriler</h2>
      <ul>
        <li>
          <strong>Öğleden sonra yoğun egzersizden kaçının:</strong>
          Ozon seviyeleri 13:00–19:00 arasında en yüksektir.
          Koşu veya bisiklet için sabah erken saatler tercih edin.
        </li>
        <li>
          <strong>Hava kalitesi uygulamasını takip edin:</strong>
          AKİ değerleri sağlıksız düzeye ulaştığında risk grubundakilerin
          iç mekânda kalması önerilir.
        </li>
        <li>
          <strong>Solunum hastaları ilaç ve inhalatörünü yanında
          taşısın:</strong> Ozon atakları astım semptomlarını hızla
          tetikleyebilir.
        </li>
        <li>
          <strong>Araç kullanımını azaltın:</strong> Sıcak ve güneşli
          günlerde toplu taşıma tercihi NOₓ salımını azaltarak ozon
          oluşumunu yavaşlatır.
        </li>
      </ul>

      <h2>İzmir'de Ozon Takibi</h2>
      <p>
        Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın
        Hava Kalitesi İzleme Ağı (HKIO), İzmir dahil tüm büyük
        şehirlerde ozon, PM10, PM2.5 ve diğer parametreleri
        anlık olarak yayımlar. Bu veriler Bakanlığın resmi
        portalından ve mobil uygulamadan takip edilebilir.
      </p>
      <p>
        Hava kalitesi göstergeleri hakkında kapsamlı rehber için:{" "}
        <a href="/blog/hava-kalitesi-rehberi">
          Hava Kalitesi Nedir? AKİ, PM2.5, NO₂ — Eksiksiz Rehber
        </a>
      </p>
      <p>
        Partikül madde kirliliği hakkında:{" "}
        <a href="/blog/pm10-pm25-nedir-saglik-etkileri">
          PM10 ve PM2.5 Nedir? Sağlığa Etkileri ve Korunma Yolları
        </a>
      </p>
    </>
  )
}
