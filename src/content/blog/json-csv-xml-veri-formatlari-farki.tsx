import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "json-csv-xml-veri-formatlari-farki",
  title: "JSON, CSV, XML: Veri Formatları Arasındaki Fark",
  description:
    "JSON, CSV ve XML nedir? Hangi veri formatı ne zaman kullanılır? Açık veri, API ve veri analizi bağlamında üç temel formatın karşılaştırması.",
  date: "2026-05-24",
  category: "Açık Veri",
  summary:
    "JSON hiyerarşik yapıyı, CSV tablo verisini, XML belge tabanlı yapıyı temsil eder. API yanıtlarında JSON; veri analizinde CSV; eski kurumsal sistemlerde XML yaygındır. Açık veri portalları üçünü de kullanır.",
  readTime: 5,
  faq: [
    {
      question: "JSON nedir?",
      answer:
        "JSON (JavaScript Object Notation), anahtar-değer çiftleri ve listelerden oluşan hafif bir veri formatıdır. Web API'lerinde standart haline gelmiştir. İnsanlar tarafından okunabilir, makineler tarafından kolayca işlenir. İç içe nesneler ve diziler barındırabilir; bu da onu hiyerarşik veri için uygun kılar.",
    },
    {
      question: "CSV nedir?",
      answer:
        "CSV (Comma-Separated Values — Virgülle Ayrılmış Değerler), satır ve sütunlardan oluşan tablo verisini düz metin olarak saklar. Her satır bir kayıt, her virgülle ayrılmış alan bir sütundur. Excel ve Google Sheets ile doğrudan açılabilir; veri analizi araçlarının tamamı CSV destekler.",
    },
    {
      question: "XML nedir?",
      answer:
        "XML (Extensible Markup Language), HTML'e benzer etiket tabanlı bir veri formatıdır. Ağır ve ayrıntılı yapısıyla bilinir; 2000'li ve 2010'lu yıllarda kurumsal sistemlerde standart olarak kullanılmıştır. Günümüzde web API'lerinde yerini büyük ölçüde JSON'a bırakmıştır; ancak bazı belediye ve kamu sistemleri hâlâ XML kullanır.",
    },
    {
      question: "Hangi format ne zaman kullanılır?",
      answer:
        "API yanıtı ve uygulama verisi için JSON; tablo/istatistik verisi ve veri analizi için CSV; kurumsal entegrasyon ve eski sistemlerle uyumluluk için XML tercih edilir. Açık veri portalları genellikle CSV ve JSON seçeneği sunar; kullanıcı kendi ihtiyacına göre seçim yapabilir.",
    },
    {
      question: "Açık veri portallarında hangi format tercih edilmeli?",
      answer:
        "Veriyi Excel veya Google Sheets'te analiz edecekseniz CSV en pratik seçimdir. Programlama yapacak veya uygulamaya entegre edecekseniz JSON daha uygundur. XML ise yalnızca eski sistem entegrasyonu gerektirdiğinde tercih edilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Bir açık veri portalında dosya indirirken veya bir API yanıtı
        okurken karşınıza çıkan <strong>JSON</strong>, <strong>CSV</strong>{" "}
        ve <strong>XML</strong> — üçü de veriyi saklamak ve aktarmak için
        kullanılan formatlardır; ancak yapıları, güçlü ve zayıf yönleri
        birbirinden farklıdır.
      </p>
      <p>
        Açık veri ve API kavramları için:{" "}
        <a href="/blog/acik-veri-nedir-sehirler-icin-neden-onemli">
          Açık Veri Nedir? Şehirler İçin Neden Önemli?
        </a>
      </p>

      <h2>CSV: Tablo Verisi</h2>
      <p>
        CSV, en basit ve en yaygın veri formatıdır. Her satır bir kayıtı,
        virgüller ise sütunları ayırır. İlk satır genellikle sütun
        başlıklarını içerir.
      </p>
      <p>
        <strong>Güçlü yönleri:</strong>
      </p>
      <ul>
        <li>Excel ve Google Sheets ile doğrudan açılır</li>
        <li>Neredeyse her veri analizi aracı destekler</li>
        <li>Dosya boyutu küçüktür</li>
        <li>Kod bilgisi gerektirmeden kullanılabilir</li>
      </ul>
      <p>
        <strong>Sınırlamaları:</strong>
      </p>
      <ul>
        <li>Yalnızca düz tablo yapısını destekler; iç içe veri tutulamaz</li>
        <li>Veri tipi bilgisi yoktur (sayı mı, metin mi?)</li>
      </ul>
      <p>
        <strong>Kullanım alanı:</strong> Belediye hal fiyatları, baraj
        doluluk tarihi, demografik istatistikler gibi tablo tabanlı kamu
        verileri.
      </p>

      <h2>JSON: API Standardı</h2>
      <p>
        JSON, günümüz web API'lerinin standart formatıdır. Anahtar-değer
        çiftleri ve listelerden oluşur; iç içe nesneler barındırabilir.
      </p>
      <p>
        <strong>Güçlü yönleri:</strong>
      </p>
      <ul>
        <li>Hiyerarşik yapıyı doğal olarak temsil eder</li>
        <li>JavaScript, Python, Java başta tüm dillerde doğrudan işlenir</li>
        <li>İnsanlar tarafından okunabilir; makine işlemi de verimlidir</li>
        <li>Web API'lerinin fiili standardı</li>
      </ul>
      <p>
        <strong>Sınırlamaları:</strong>
      </p>
      <ul>
        <li>Excel ile doğrudan açılamaz; ek adım gerektirir</li>
        <li>Büyük JSON dosyaları CSV'ye kıyasla daha ağır olabilir</li>
      </ul>
      <p>
        <strong>Kullanım alanı:</strong> Anlık otobüs konumları, nöbetçi
        eczane listesi, otopark doluluk bilgisi gibi canlı API yanıtları.
      </p>

      <h2>XML: Kurumsal Miras</h2>
      <p>
        XML, etiket tabanlı yapısıyla HTML'e benzer. 2000'lerin kurumsal
        dünyasında egemen formattı; SOA (Service-Oriented Architecture)
        ve SOAP web servisleriyle birlikte kullanıldı.
      </p>
      <p>
        <strong>Güçlü yönleri:</strong>
      </p>
      <ul>
        <li>Şema (XSD) ile katı veri doğrulama mümkündür</li>
        <li>Belge ve metadata'yı birlikte tutabilir</li>
        <li>Kurumsal sistemlerde geniş entegrasyon desteği</li>
      </ul>
      <p>
        <strong>Sınırlamaları:</strong>
      </p>
      <ul>
        <li>Aynı veri için JSON'a kıyasla çok daha fazla karakter kullanır</li>
        <li>Okunması ve yazılması daha zahmetlidir</li>
        <li>Modern web geliştirmede büyük ölçüde devre dışı kalmıştır</li>
      </ul>

      <h2>Hangi Formatı Seçmeli?</h2>
      <ul>
        <li>
          <strong>Veri analizi, raporlama, Excel:</strong> CSV
        </li>
        <li>
          <strong>Web uygulaması, mobil uygulama, API entegrasyonu:</strong> JSON
        </li>
        <li>
          <strong>Kurumsal sistem entegrasyonu, eski altyapı:</strong> XML
        </li>
      </ul>
      <p>
        Açık veri portalları genellikle hem CSV hem JSON seçeneği sunar.
        Programlama yapılmadan analiz için CSV; uygulama geliştirme için
        JSON tercih edilmelidir.
      </p>
      <p>
        API'nin nasıl çalıştığını öğrenmek için:{" "}
        <a href="/blog/api-nedir-acik-veri-farki">
          API Nedir? Açık Veri ile Farkı Ne?
        </a>
      </p>
    </>
  )
}
