import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "icme-suyu-aritma-yontemleri",
  title: "İçme Suyu Arıtma Yöntemleri: Hangisi Sizin İçin Doğru?",
  description:
    "Aktif karbon filtre, ters osmoz (RO), UV arıtma ve damıtma yöntemleri karşılaştırması. Hangi arıtma ne sağlar, ne sağlamaz? Ev arıtma cihazı rehberi.",
  date: "2026-05-25",
  category: "Su & Baraj",
  summary:
    "Ev tipi su arıtma yöntemlerinin başında aktif karbon filtre, ters osmoz (RO), UV sterilizasyon ve damıtma gelir. Her yöntemin farklı kirleticilere karşı etkinliği ve kullanım maliyeti farklıdır. Şehir suyu standartları karşılıyorsa ilave arıtma zorunlu değil, tercih meselesidir.",
  readTime: 5,
  faq: [
    {
      question: "Türkiye'de şebeke suyu güvenli mi?",
      answer:
        "Türkiye'de şehirlerdeki içme suyu, Sağlık Bakanlığı'nın İnsani Tüketim Amaçlı Sular Hakkında Yönetmeliği kapsamında düzenli analiz ve denetimden geçirilmektedir. İzmir'de İZSU, düzenli kalite raporu yayımlar. Şebeke suyu standartları karşılıyorsa içilebilir; ancak boru yaşı ve bina içi tesisat kalitenin düşmesine yol açabilir.",
    },
    {
      question: "Ters osmoz (RO) sistemi ne kadar etkili?",
      answer:
        "Ters osmoz, 0,001 mikron büyüklüğündeki gözenekli membrandan su geçirerek kirleticilerin büyük bölümünü uzaklaştırır. Ağır metaller, nitrat, flor, klorür ve birçok organik bileşiği etkili biçimde giderir. Ancak mineralleri de uzaklaştırdığından çıkan su 'demineralize' hale gelir; bazı sistemlerde mineral geri kazanım filtresi eklenir.",
    },
    {
      question: "Aktif karbon filtre ne işe yarar?",
      answer:
        "Aktif karbon filtreler koku, renk ve klor tadını giderme konusunda etkilidir. Çoğu organik bileşiği ve bazı pestisitleri tutar. Ancak nitrat, flor, ağır metaller (kurşun hariç bazı özel karbon filtrelerde) ve mikrobiyolojik kirleticilere karşı sınırlı etkinlik gösterir. Sürahi (pitcher) filtrelerin çoğu aktif karbon içerir.",
    },
    {
      question: "UV arıtma ne sağlar?",
      answer:
        "UV (ultraviyole ışık) arıtma, bakteri, virüs ve protozoa gibi mikrobiyolojik kirleticileri etkisiz hale getirir. Kimyasal bırakmaz ve mineralleri etkilemez. Ancak kimyasal kirleticiler, kireç veya ağır metallere karşı etkisi yoktur; genellikle diğer filtrelerle birlikte kullanılır.",
    },
    {
      question: "Filtre bakımı ne kadar önemli?",
      answer:
        "Çok önemlidir. Süresi dolmuş veya dolu filtre kirletici tutmayı bırakır; hatta bakteri üremesine zemin hazırlayabilir. Üretici talimatlarına göre düzenli filtre değişimi (genellikle 6–12 aylık karbon, 2–3 yıllık RO membranı) hem performansı hem hijyeni korur. Filtre değişim tarihi mutlaka takip edilmelidir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Musluğun suyu doğrudan içmek yerine filtre veya arıtma cihazı
        kullananların sayısı giderek artıyor. Ancak her yöntem farklı
        kirleticilere karşı etkilidir; ihtiyacınıza uygun arıtmayı seçmek
        için önce neleri gidermek istediğinizi belirlemeniz gerekir.
      </p>

      <h2>Neden Su Arıtma Düşünülür?</h2>
      <p>
        Şehir suyu standartlara uygun olsa da bazı nedenlerle arıtma
        tercih edilebilir:
      </p>
      <ul>
        <li>Klordan kaynaklanan koku ve tat</li>
        <li>Eski bina borularından kaynaklanan bulanıklık veya renk</li>
        <li>Yüksek su sertliği (kireç birikintisi)</li>
        <li>Tarım bölgelerinde yeraltı suyundaki nitrat artışı</li>
        <li>Genel güven tercihi</li>
      </ul>

      <h2>Yöntem Karşılaştırması</h2>

      <h3>1 — Aktif Karbon Filtre</h3>
      <p>
        En yaygın ve ekonomik yöntemdir. Sürahi (pitcher) tipler ile
        musluk altı tipler mevcuttur.
      </p>
      <ul>
        <li><strong>Giderir:</strong> Klor, koku, tat, bazı organik bileşikler</li>
        <li><strong>Gidermez:</strong> Nitrat, flor, ağır metaller (çoğu), bakteri</li>
        <li><strong>Bakım:</strong> 1–3 ayda bir filtre değişimi (kullanıma göre)</li>
      </ul>

      <h3>2 — Ters Osmoz (RO)</h3>
      <p>
        En kapsamlı ev tipi arıtma yöntemidir; genellikle mutfak tezgahı
        altına monte edilir.
      </p>
      <ul>
        <li>
          <strong>Giderir:</strong> Ağır metaller (kurşun, arsenik), nitrat,
          flor, klorür, çoğu organik bileşik, bazı bakteriler
        </li>
        <li>
          <strong>Gidermez / Sınırlı:</strong> Bazı uçucu organik bileşikler
          (ön karbon filtre gerektirir)
        </li>
        <li>
          <strong>Dezavantajlar:</strong> Mineralleri de uzaklaştırır;
          üretilen suya oranla 2–4 kat atık su çıkarır; yavaş üretim
        </li>
        <li>
          <strong>Bakım:</strong> Ön filtreler 6–12 ayda bir, membran
          2–3 yılda bir değişir
        </li>
      </ul>
      <p>
        Demineralize su içmekten rahatsızlık duyanlar için bazı RO
        sistemleri <strong>mineral geri kazanım filtresi</strong> içerir;
        bu filtre kalsiyum ve magnezyumu geri ekler.
      </p>

      <h3>3 — UV Sterilizasyon</h3>
      <p>
        Mikrobiyolojik kirliliğin ön planda olduğu durumlarda etkilidir.
      </p>
      <ul>
        <li>
          <strong>Giderir:</strong> Bakteri, virüs, protozoa (Giardia, Cryptosporidium)
        </li>
        <li>
          <strong>Gidermez:</strong> Kimyasal kirleticiler, kireç,
          ağır metaller
        </li>
        <li>
          Şebeke suyunda genellikle yeterli klor bulunduğundan UV
          şehir suyu kullanıcıları için tek başına nadiren tercih edilir;
          çoğunlukla diğer filtrelerle kombinlenir.
        </li>
      </ul>

      <h3>4 — Damıtma</h3>
      <p>
        Suyun buharlaştırılıp yoğuşturulmasıyla elde edilir.
        Tüm mineral ve kirleticileri neredeyse tamamen uzaklaştırır.
        Ev kullanımında yavaş ve yüksek enerji tüketen bir yöntemdir;
        özel amaçlar (örn. deiyonize su gerektiren cihazlar) dışında
        tercih edilmez.
      </p>

      <h2>Hangi Yöntemi Seçmeli?</h2>
      <ul>
        <li>
          <strong>Sadece koku ve tat sorunu:</strong> Aktif karbon
          filtre (sürahi tipi) yeterlidir.
        </li>
        <li>
          <strong>Sert su + genel kalite:</strong> Musluk altı karbon
          filtreli sistem veya RO.
        </li>
        <li>
          <strong>Ağır metal veya nitrat kaygısı:</strong> Ters osmoz.
        </li>
        <li>
          <strong>Mikrobiyolojik kaygı (sağlıklı şebeke suyunda
          nadiren gerekir):</strong> UV + karbon kombinasyonu.
        </li>
      </ul>

      <h2>Önemli Uyarı: Filtre Bakımı</h2>
      <p>
        Zamanı geçmiş filtre, kirletici tutmayı bırakır ve içinde
        bakteri üretebilir. Tüm arıtma sistemleri için üretici
        talimatlarına göre düzenli bakım ve filtre değişimi zorunludur.
      </p>

      <p>
        Su sertliği ve kireç hakkında:{" "}
        <a href="/blog/su-sertligi-nedir-sagliga-zarari">
          Su Sertliği Nedir? Sert Su Sağlığa Zararlı mı?
        </a>
      </p>
      <p>
        İzmir barajları ve içme suyu kaynakları:{" "}
        <a href="/blog/izmir-barajlari-tahtatli-gordes-balcova">
          İzmir'in Barajları: Tahtalı, Gördes, Balçova
        </a>
      </p>
    </>
  )
}
