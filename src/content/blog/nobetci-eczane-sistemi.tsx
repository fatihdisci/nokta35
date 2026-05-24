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
