import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "nobetci-eczane-sistemi-nasil-isler",
  title: "Nöbetçi Eczane Sistemi Nasıl İşler? Tarihçesi ve İşleyişi",
  description:
    "Nöbetçi eczane nedir, nasıl belirlenir, hangi saatlerde açıktır? Türkiye'de nöbetçi eczane sisteminin işleyişi ve nöbetçi eczane bulma yöntemleri.",
  date: "2026-05-12",
  category: "Sağlık",
  summary:
    "Nöbetçi eczaneler; eczanelerin kapalı olduğu gece ve resmi tatil saatlerinde halkın ilaç ihtiyacını karşılamak için sıralı olarak görevlendirilen eczanelerdir.",
  readTime: 4,
  faq: [
    {
      question: "Nöbetçi eczane saatleri kaçtan kaça?",
      answer:
        "Hafta içi nöbetçi eczaneler genellikle akşam 19:00'dan ertesi sabah 08:30'a kadar açıktır. Hafta sonu ve resmi tatillerde ise tam gün (24 saat) hizmet verirler. Saatler il ve mevsime göre küçük farklılıklar gösterebilir.",
    },
    {
      question: "Nöbetçi eczaneyi nereden öğrenebilirim?",
      answer:
        "Birkaç kaynaktan: e-Nabız uygulaması, Sağlık Bakanlığı resmi web sitesi, ALO 184 SABİM hattı, il eczacı odasının web sitesi ve büyükşehir belediyelerinin açık veri uygulamaları. Birçok büyükşehir belediyesi nöbetçi eczane verisini kamuya açık olarak yayınlar.",
    },
    {
      question: "Nöbetçi eczanede her ilaç satılır mı?",
      answer:
        "Hayır. Reçetesiz alınabilen ilaçlar (OTC — Over-the-Counter) gece nöbetçi eczanede de satılabilir. Antibiyotik, reçete gerektiren ilaçlar ve kontrole tabi ilaçlar ancak geçerli bir reçete ile temin edilebilir.",
    },
    {
      question: "Nöbetçi eczane sistemi nasıl belirlenir?",
      answer:
        "İllerdeki Eczacı Odaları, Türk Eczacıları Birliği'nin (TEB) genel ilkeleri çerçevesinde nöbet düzenini hazırlar. Bir bölgedeki eczaneler önceden belirlenmiş bir sıra ile nöbete girer; nöbet listesi genellikle yıllık olarak yayınlanır.",
    },
    {
      question: "Nöbetçi eczane sistemi hangi kanun ile düzenlenir?",
      answer:
        "Türkiye'de eczacılık mesleğinin yasal çerçevesi 1953 yılında çıkarılan 6197 sayılı Eczacılar ve Eczaneler Hakkında Kanun ile düzenlenmiştir. Nöbet sistemi de bu kanuna bağlı olarak çıkarılan yönetmeliklerin gereğidir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>Nöbetçi eczane</strong>; diğer eczanelerin kapalı olduğu
        akşam, gece, hafta sonu ve resmi tatil saatlerinde halkın acil ilaç
        ihtiyacını karşılayabilmesi için görevlendirilen eczanedir. Sistem,
        eczacıların eşit yük paylaşımı ilkesine göre rotasyonla işler.
      </p>

      <h2>Nöbetçi eczane sistemi nasıl belirlenir?</h2>
      <p>
        Türkiye'de nöbetçi eczane düzeni, illerdeki <strong>Eczacı Odaları</strong>{" "}
        tarafından, Türk Eczacıları Birliği'nin (TEB) genel ilkeleri
        çerçevesinde hazırlanır. Bir bölgedeki tüm eczaneler önceden
        belirlenmiş bir sıra ile nöbete girer. Nöbet listesi genellikle yıllık
        olarak yayınlanır.
      </p>
      <p>
        Büyük şehirlerde nüfus yoğunluğuna göre <em>bölgeler</em> oluşturulur
        ve her bölge için ayrı bir nöbetçi eczane atanır. Böylece her semt,
        gece bile bir nöbetçi eczaneye yakın mesafede kalır.
      </p>

      <h2>Nöbetçi eczane saatleri</h2>
      <p>
        Nöbetçi eczaneler genel olarak 24 saat hizmet verirler. Standart
        nöbet süresi şöyledir:
      </p>
      <ul>
        <li>Hafta içi: 19:00'dan ertesi sabah 08:30'a kadar</li>
        <li>Hafta sonu ve resmi tatiller: tam gün (24 saat)</li>
      </ul>
      <p>
        Saatler il ve mevsime göre farklılık gösterebilir; bazı bölgelerde
        nöbet başlama saati 18:30 veya 20:00 olabilir.
      </p>

      <h2>Nöbetçi eczane nasıl bulunur?</h2>
      <p>Birden fazla resmi ve gayri resmi kaynak vardır:</p>
      <ul>
        <li>
          <strong>e-Nabız uygulaması</strong> ve{" "}
          <strong>Sağlık Bakanlığı resmi web sitesi</strong>
        </li>
        <li><strong>ALO 184 (SABİM — Sağlık Bakanlığı İletişim Merkezi)</strong></li>
        <li>İl eczacı odasının web sitesi</li>
        <li>11880 ve benzeri telefon rehberi servisleri</li>
        <li>Belediyelerin açık veri uygulamaları</li>
      </ul>
      <p>
        Birçok büyükşehir belediyesi (İzmir dahil) nöbetçi eczane bilgisini
        kamuya açık veri olarak yayınlar; bu sayede nokta35 gibi platformlar
        canlı liste sunabilir.
      </p>

      <h2>Reçetesiz alınabilecek ilaçlar</h2>
      <p>
        Gece nöbetçi eczaneye gittiğinizde her ilacı reçetesiz almanız mümkün
        değildir. Yalnızca <em>OTC (Over-the-Counter)</em> olarak adlandırılan
        sınıftaki ilaçlar reçetesiz satılabilir: bazı ağrı kesiciler,
        antiseptikler, vitamin takviyeleri, soğuk algınlığı ilaçları gibi.
        Antibiyotik, reçete gerektiren ilaçlar ve kontrole tabi ilaçlar
        mutlaka reçeteyle alınabilir.
      </p>

      <h2>Tarihçe</h2>
      <p>
        Türkiye'de eczacılık mesleğinin yasal çerçevesi <strong>1953 yılında
        çıkarılan 6197 sayılı Eczacılar ve Eczaneler Hakkında Kanun</strong>{" "}
        ile düzenlenmiştir. Nöbet sistemi de bu kanunun ve buna bağlı çıkarılan
        yönetmeliklerin bir gereği olarak uzun yıllardır uygulanmaktadır.
      </p>

      <h2>Önemli hatırlatma</h2>
      <p>
        Nöbetçi eczane bilgisi planlanmış olsa da bazı durumlarda (eczacının
        rahatsızlanması, mücbir sebep) son dakika değişiklikleri olabilir.
        Yola çıkmadan önce eczanenin adresini ve numarasını yeniden teyit
        etmek faydalı olacaktır.
      </p>
    </>
  )
}
