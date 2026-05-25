import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-kurban-kesim-yerleri-2026",
  title: "İzmir Kurban Kesim Yerleri 2026: Mezbaha ve Geçici Alanlar",
  description:
    "İzmir'de 2026 Kurban Bayramı'nda kurban nereden kesilir? Belediye mezbahaları, geçici kesim alanları, kayıt süreci ve dikkat edilmesi gerekenler.",
  date: "2026-05-25",
  category: "İzmir Rehberi",
  summary:
    "Kurban Bayramı'nda İzmir'de kurban kesmek için belediye mezbahaları ve İBB'nin geçici kesim alanlarını kullanmak hem yasal zorunluluk hem hijyen açısından en doğru seçenektir. Kesin liste ve kayıt bilgisi için İBB'nin resmi duyurularını ve 444 0 542 hattını takip edin.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de sokakta kurban kesmek yasak mı?",
      answer:
        "Evet. Türkiye genelinde ve İzmir'de kurbanın cadde, sokak, park ve konut bahçesi gibi kamuya açık alanlar ile konut içlerinde kesilmesi yasaklanmıştır. Kurbanlar yalnızca veteriner denetimi altındaki belediye mezbahaları ve belediyenin belirlediği geçici kesim alanlarında kesilebilir. Bu kural hem sanitasyon hem de hayvan refahı açısından uygulanmaktadır.",
    },
    {
      question: "İzmir'de kurban kesmek için nereye başvurulur?",
      answer:
        "İzmir Büyükşehir Belediyesi ve ilçe belediyeleri her yıl bayram öncesinde resmi kesim alanlarını ve kayıt prosedürünü ilan eder. Güncel bilgiye ibb.gov.tr, ilçe belediyesi web siteleri veya 444 0 542 (İBB çağrı merkezi) aracılığıyla ulaşılabilir. Bazı mezbahalar için ön kayıt zorunlu olabilir; bayramdan en az birkaç gün önce başvurunun tamamlanması önerilir.",
    },
    {
      question: "Kurban bayramında mezbaha kapasitesi yeterli mi?",
      answer:
        "İzmir Büyükşehir Belediyesi, talebe göre belediye mezbahaları yanı sıra ilçelerde geçici mobil kesim üniteleri ve çadır alanlar kurmaktadır. Yoğun talep nedeniyle özellikle bayramın ilk günü bekleme süreleri uzayabilir; erken kayıt yaptıranlar öncelik kazanır.",
    },
    {
      question: "Kesimhane ücreti ne kadar?",
      answer:
        "Belediye mezbahaları kurban kesim hizmetini genellikle ücretli sunar; tarife yıldan yıla değişir. 2026 tarifeleri için bağlı bulunduğunuz ilçe belediyesine veya İBB'ye danışın. Ücretsiz hizmet sunan vakıf veya dernek organizasyonları da bulunabilir.",
    },
    {
      question: "Küçükbaş ve büyükbaş için aynı kesim yerleri mi kullanılır?",
      answer:
        "Büyük mezbahalar hem küçükbaş (koyun, keçi) hem büyükbaş (sığır) kabulü yapar. Küçük kapasiteli geçici alanlarda yalnızca küçükbaş kabulü olabilir. Büyükbaş kesmeden önce ilgili alanın kapasitesini doğrulayın.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Kurban Bayramı'nda hayvan kesmek; Türk mevzuatına göre yalnızca
        veteriner denetimindeki{" "}
        <strong>belediye mezbahaları</strong> ve belediyenin ilan ettiği{" "}
        <strong>geçici kesim alanlarında</strong> yapılabilir. İzmir
        Büyükşehir Belediyesi her yıl bayram öncesinde aktif noktaları
        resmi kanallardan duyurur.
      </p>

      <h2>Neden Belediye Mezbahası?</h2>
      <p>
        Ruhsatlı kesim yerlerinde:
      </p>
      <ul>
        <li>Veteriner hekim denetimi bulunur; hayvanın sağlıklı olduğu onaylanır.</li>
        <li>Atık su ve kan bertarafı çevre mevzuatına uygun yapılır.</li>
        <li>Kesilen hayvanın eti için gerekirse sağlık sertifikası düzenlenir.</li>
        <li>Deri bağış teslimatı organize edilir.</li>
      </ul>
      <p>
        Sokak, park veya konut bahçesinde kesim yapıldığında idari para
        cezası uygulanabilir.
      </p>

      <h2>İzmir'de Genel Kurban Altyapısı</h2>
      <p>
        İzmir Büyükşehir Belediyesi, Kurban Bayramı öncesinde şu yapıyı
        devreye alır:
      </p>
      <ul>
        <li>
          <strong>Belediye mezbahaları:</strong> Büyük kapasiteli, veteriner
          sürekli görevde. Bergama, Beydağ, Kiraz, Menemen, Tire ve Urla
          başta olmak üzere çeşitli ilçelerde ruhsatlı mezbahalar
          bulunmaktadır. Kesin aktif liste yıldan yıla güncellenebilir.
        </li>
        <li>
          <strong>Mobil kesim üniteleri:</strong> Nüfus yoğun ilçelerde
          (Bornova, Gaziemir, Karabağlar gibi) geçici mobil üniteler
          kurulur.
        </li>
        <li>
          <strong>Geçici çadır alanlar:</strong> Uygun alanlarda çadır
          altında organize kesim. Özellikle bayramın ilk günü yüksek
          kapasitede çalışır.
        </li>
      </ul>
      <p>
        <strong>Önemli:</strong> 2026 yılına ait kesin nokta listesi, kapasite
        ve çalışma saatleri için İBB'nin resmi duyurusunu takip edin:{" "}
        <strong>ibb.gov.tr</strong> veya <strong>444 0 542</strong>.
      </p>

      <h2>Kayıt ve Hazırlık</h2>
      <ol>
        <li>
          <strong>Bayramdan en az 3–5 gün önce</strong> tercih ettiğiniz
          kesim yerine başvurun. Bazı alanlar ön kayıt zorunlu tutar.
        </li>
        <li>
          Hayvanınızı <strong>kayıt belgesi</strong> ile getirin (çiftlikten
          alınan sağlık belgesi veya satıcı faturası önerilir).
        </li>
        <li>
          Büyükbaş hayvanlar için kurban ortaklığı (7 kişiye kadar)
          mezbaha organizasyonunda kolayca yönetilebilir.
        </li>
        <li>
          Et, deri ve sakatat ayrımını önceden planlayın; deri bağışı için
          <a href="/blog/kurban-derisi-nereye-verilir-izmir-2026">
            {" "}Kurban Derisi Nereye Verilir?{" "}
          </a>
          yazımıza bakın.
        </li>
      </ol>

      <h2>Kesim Saatleri</h2>
      <p>
        Kurban kesimi İslam geleneğine göre bayram namazının ardından başlar.
        İzmir'de bayram namazı saati için Diyanet İşleri Başkanlığı'nın
        resmi vakti esas alınır (diyanet.gov.tr). Mezbahalar genellikle
        bayramın ilk üç günü, sabah erken saatlerden akşama kadar çalışır.
      </p>
      <p>
        Bayram namazı saati için:{" "}
        <a href="/blog/bayram-namazi-saati-izmir-2026">
          Bayram Namazı Saat Kaçta — İzmir 27 Mayıs 2026
        </a>
      </p>

      <h2>Dikkat Edilmesi Gerekenler</h2>
      <ul>
        <li>
          <strong>Hastalıklı hayvan:</strong> Kesim öncesi veteriner muayenesinde
          sorun çıkarsa hayvan kabul edilmez; sağlıklı hayvan alın.
        </li>
        <li>
          <strong>Yaş ve ağırlık şartı:</strong> Koyun ve keçi için 1 yaş,
          sığır için 2 yaş dolmuş olmalıdır.
        </li>
        <li>
          <strong>Yoğunluk:</strong> Bayramın ilk günü sabah saatleri en
          kalabalık dönemdir. İkinci veya üçüncü gün gidenler daha az
          bekleme süreleriyle karşılaşır.
        </li>
      </ul>
    </>
  )
}
