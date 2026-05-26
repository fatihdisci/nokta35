import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "recetesiz-otc-ilaclar-nedir",
  title: "Reçetesiz (OTC) İlaçlar: Eczanede Neler Alınabilir?",
  description:
    "Reçetesiz ilaç (OTC) nedir, hangi ilaçlar eczaneden reçetesiz alınabilir? Ağrı kesiciler, soğuk algınlığı, antihistaminikler ve güvenli kullanım rehberi.",
  date: "2026-05-25",
  category: "Sağlık",
  summary:
    "Reçetesiz (OTC — over-the-counter) ilaçlar, TİTCK onayıyla doktor reçetesi gerekmeksizin eczaneden alınabilen preparatlardır. Ağrı kesiciler, soğuk algınlığı ilaçları, bazı antihistaminikler ve antasitler bu kapsamdadır. OTC ilaçlarda da dozaj, ilaç etkileşimleri ve kontraendikasyonlar önem taşır; eczacıya danışmak iyi bir uygulamadır.",
  readTime: 4,
  faq: [
    {
      question: "Reçetesiz (OTC) ilaç nedir?",
      answer:
        "OTC (over-the-counter), Türkiye'de TİTCK (Türkiye İlaç ve Tıbbi Cihaz Kurumu) tarafından reçete zorunluluğu kaldırılmış ilaçları ifade eder. Bu ilaçlar eczanede doktor reçetesi sunmadan satın alınabilir. Güvenlik profili yüksek, bağımlılık ve yanlış kullanım riski düşük preparatlar bu statüye alınır.",
    },
    {
      question: "Hangi ilaçlar eczaneden reçetesiz alınabilir?",
      answer:
        "Belirli dozajdaki parasetamol ve ibuprofen gibi ağrı kesici/ateş düşürücüler; bazı antihistaminikler (örn. loratadin, setirizin); antasitler ve hazımsızlık preparatları; nazal dekonjestanlar; topikal antiseptikler; birtakım vitamin ve mineral takviyeleri OTC kapsamında olabilir. Kesin liste için eczanenize danışın veya TİTCK'ın güncel OTC ilaç listesini inceleyin.",
    },
    {
      question: "OTC ilaçlar tamamen güvenli mi?",
      answer:
        "OTC statüsü ilaçların güvenlik profilinin yüksek olduğunu gösterir; ancak bu tamamen risksiz olduğu anlamına gelmez. Önerilen dozun üstüne çıkmak, başka ilaçlarla etkileşim, hamilelik, emzirme, karaciğer/böbrek hastalığı gibi durumlarda OTC ilaçlar bile zarar verebilir. Her durumda eczacınıza veya hekiminize danışmak en doğru yaklaşımdır.",
    },
    {
      question: "Reçetesiz ilaçları SGK karşılar mı?",
      answer:
        "Hayır, OTC ilaçlar genellikle SGK tarafından karşılanmaz. SGK, yalnızca hekim tarafından reçete edilen ve ödeme kapsamındaki ilaçların bedelini karşılar. OTC ilaçların bedeli tamamen hasta tarafından ödenir.",
    },
    {
      question: "Çocuklar için OTC ilaç kullanımında dikkat edilmesi gerekenler nelerdir?",
      answer:
        "Çocuklarda OTC ilaç kullanımında yaş ve kilo bazlı dozaj kritik önem taşır. Yetişkin formülasyonlar çocuklara uygun olmayabilir; özel çocuk formülasyonları tercih edilmelidir. 2 yaş altı bebeklerde her türlü ilaç öncesi mutlaka doktor veya eczacı onayı alınmalıdır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Hafif bir baş ağrısı, mevsim geçişinin getirdiği soğuk algınlığı
        ya da mide ekşimesi için her seferinde doktora gitmenize gerek
        yoktur. Eczaneden reçetesiz alınabilen{" "}
        <strong>OTC (over-the-counter) ilaçlar</strong>, bu tür günlük
        sağlık sorunlarında ilk başvuru seçeneği olabilir.
      </p>

      <h2>OTC İlaç Nedir?</h2>
      <p>
        Türkiye'de ilaçlar, TİTCK (Türkiye İlaç ve Tıbbi Cihaz Kurumu)
        tarafından iki ana statüde sınıflandırılır:
      </p>
      <ul>
        <li>
          <strong>Reçeteli ilaçlar:</strong> Hekimin değerlendirmesi ve
          reçetesi olmadan satılamaz. Güvenlik riski daha yüksek veya
          kötüye kullanım potansiyeli olan preparatlar bu kapsamdadır.
        </li>
        <li>
          <strong>Reçetesiz (OTC) ilaçlar:</strong> Belirlenmiş doz
          aralıklarında, kendi kendine kullanım için yeterince güvenli
          bulunan preparatlar. Eczaneden doğrudan alınabilir.
        </li>
      </ul>

      <h2>Yaygın OTC İlaç Kategorileri</h2>

      <h3>Ağrı Kesici ve Ateş Düşürücüler</h3>
      <p>
        Belirli dozajdaki parasetamol (asetaminofen) ve ibuprofen
        en yaygın OTC ağrı kesicilerdir. Baş ağrısı, hafif ateş,
        diş ağrısı ve kas ağrısında kullanılır. Önerilen günlük
        maksimum dozu aşmamak kritik önem taşır; özellikle
        parasetamolde doz aşımı karaciğer hasarına yol açabilir.
      </p>

      <h3>Soğuk Algınlığı ve Grip</h3>
      <p>
        Nazal dekonjestanlar (burun tıkanıklığı için), öksürük
        şurupları ve bazı kombinasyon preparatları OTC kapsamında
        olabilir. Uzun süreli burun spreyi kullanımı (dekonjestan)
        rinofit (ilaç bağımlı burun tıkanıklığı) riskini
        beraberinde getirdiğinden 3–5 günden uzun kullanımdan
        kaçınılmalıdır.
      </p>

      <h3>Antihistaminikler (Alerji İlaçları)</h3>
      <p>
        Loratadin ve setirizin gibi 2. kuşak antihistaminikler
        mevsimsel alerjik rinit (saman nezlesi), cilt alerjisi
        ve ürtiker belirtilerini hafifletir. Eski kuşak
        antihistaminikler uyku yapıcı etkisiyle bilinir; araç
        kullanımı ve dikkat gerektiren işler öncesinde dikkatli
        olunmalıdır.
      </p>

      <h3>Sindirim Sistemi</h3>
      <ul>
        <li>
          <strong>Antasitler:</strong> Mide ekşimesi ve hazımsızlıkta.
          Magnezyum veya kalsiyum bazlı olanlar kısa süreli kullanım
          için uygundur.
        </li>
        <li>
          <strong>Loperamid:</strong> Akut ishal kontrolünde; ancak
          ateşli veya kanlı ishal gibi durumlarda kullanılmamalıdır.
        </li>
        <li>
          <strong>Probiyotikler:</strong> Bağırsak florasını destekler;
          antibiyotik kullanımı sırasında ve sonrasında önerilebilir.
        </li>
      </ul>

      <h3>Dış Kullanım ve Yara Bakımı</h3>
      <p>
        Antiseptik losyon ve kremler, küçük yaraların temizlenmesi ve
        kapanması için eczaneden alınabilir. Yanık kremleri, mantar
        karşıtı topikal preparatlar ve bazı kortikosteroid içermeyen
        kaşıntı kremleri de OTC kapsamındadır.
      </p>

      <h2>Dikkat Edilmesi Gereken Durumlar</h2>
      <ul>
        <li>
          <strong>Hamilelik ve emzirme:</strong> Herhangi bir OTC ilaç
          almadan önce mutlaka hekim veya eczacıya danışın.
        </li>
        <li>
          <strong>Kronik hastalıklar:</strong> Böbrek, karaciğer
          hastalığı veya kalp yetmezliği olanlar bazı OTC ilaçları
          kullanamaz (örn. ibuprofen gibi NSAİİ'ler).
        </li>
        <li>
          <strong>İlaç etkileşimleri:</strong> Reçeteli ilaç
          kullananlar yeni bir OTC ürün almadan önce eczacılarına
          sormalıdır.
        </li>
        <li>
          <strong>Alkol:</strong> Parasetamol ve alkol kombinasyonu
          karaciğeri olumsuz etkiler; uyarıları dikkate alın.
        </li>
        <li>
          <strong>Belirtiler düzelmiyorsa:</strong> 3–5 gün içinde
          iyileşme yoksa veya belirtiler ağırlaşıyorsa doktora başvurun.
        </li>
      </ul>

      <h2>OTC Listesine Nasıl Ulaşılır?</h2>
      <p>
        TİTCK (titck.gov.tr) adresinde güncel OTC ilaç listesi
        yayımlanmaktadır. Eczacınız da herhangi bir preparatın
        reçete gerektirip gerektirmediğini anında sorgulayabilir.
      </p>

      <p>
        SGK ilaç katkı payı ve muafiyet grupları için:{" "}
        <a href="/blog/sgk-ilac-katki-payi-rehberi">
          SGK İlaç Katkı Payı: Kimler Muaf, Oran Nasıl Hesaplanır?
        </a>
      </p>
      <p>
        Nöbetçi eczane bulmak için:{" "}
        <a href="/blog/nobetci-eczane-sistemi-nasil-isler">
          Nöbetçi Eczane Nasıl Bulunur?
        </a>
      </p>
    </>
  )
}
