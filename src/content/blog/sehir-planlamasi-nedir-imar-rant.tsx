import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "sehir-planlamasi-nedir-imar-rant",
  title: "Şehir Planlaması Nedir? İmar, Kentsel Rant ve Dönüşüm",
  description:
    "Şehir planlaması nedir, kim yapar? İmar planı, kentsel rant ve kentsel dönüşüm kavramları. Şehirlerin nasıl büyüdüğünü ve planlandığını anlatan kapsamlı rehber.",
  date: "2026-05-24",
  category: "Şehir",
  summary:
    "Şehir planlaması; arazi kullanımını, yapılaşma koşullarını, ulaşım ağını ve kamusal alanları bütüncül biçimde yönetme disiplinidir. İmar planları bu kararları hukuki belgeler olarak somutlaştırır. Kentsel rant ise planlama kararlarıyla ortaya çıkan değer artışıdır.",
  readTime: 7,
  faq: [
    {
      question: "Şehir planlaması nedir?",
      answer:
        "Şehir planlaması (kentsel planlama), bir yerleşim alanının fiziksel, sosyal, ekonomik ve çevresel boyutlarını uzun vadeli perspektifle yönetmeyi amaçlayan disiplindir. Arazi kullanım kararları, yapılaşma yoğunluğu, ulaşım ağı, yeşil alan sistemi ve kamusal altyapı; şehir planlamasının kapsamına girer.",
    },
    {
      question: "İmar planı nedir?",
      answer:
        "İmar planı, bir alanın nasıl kullanılacağını ve yapılaşacağını belirleyen resmi belgedir. Nazım imar planı genel arazi kullanım kararlarını, uygulama imar planı ise parsel ölçeğinde yapılaşma koşullarını (kat adedi, taban alanı, çekme mesafeleri) belirler. İmar planları belediye meclisi tarafından onaylanır ve kanun hükmündedir.",
    },
    {
      question: "Kentsel rant nedir?",
      answer:
        "Kentsel rant, planlama kararları, altyapı yatırımları veya nüfus artışı nedeniyle arazi ve gayrimenkul değerlerinde oluşan artıştır. Toplu taşıma hattının geçtiği, imar değişikliğiyle yoğunluğu artan veya yeni kamu hizmetine kavuşan bölgelerde kentsel rant yükselir. Bu rantın kamu yararına nasıl yönlendirileceği, şehir planlamasının tartışmalı konularından biridir.",
    },
    {
      question: "Vatandaşlar imar planı süreçlerine katılabilir mi?",
      answer:
        "Evet. Türk imar mevzuatı, hazırlanan veya değiştirilen imar planlarının askıya çıkarılmasını ve 30 gün boyunca itiraz açık tutulmasını zorunlu kılar. Vatandaşlar bu süre içinde yazılı itiraz hakkına sahiptir. Ayrıca büyük ölçekli projeler için çevresel etki değerlendirmesi (ÇED) süreçlerinde kamuoyu toplantıları düzenlenir.",
    },
    {
      question: "Şehir planlamasının en temel sorunları nelerdir?",
      answer:
        "Plansız kentleşme ve kaçak yapılaşma, yeşil alan azlığı, merkezkaç büyüme ve ulaşım maliyetleri, afet riskine karşı yetersiz hazırlık, rant baskısıyla artan konut maliyetleri ve katılımcı planlama süreçlerinin zayıflığı, dünyada ortak şehir planlama sorunlarıdır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Bir şehrin nasıl büyüdüğü, nerede yoğunlaştığı, hangi mahallelere
        park ve yeşil alan açıldığı, hangi güzergahlara toplu taşıma
        planlandığı — bunların tümü rastlantı değildir. <strong>Şehir
        planlaması</strong>, bu kararların bir disiplin çerçevesinde
        alınmasını sağlar. İmar planları, kentsel rant ve dönüşüm
        kavramlarını birlikte ele alıyoruz.
      </p>

      <h2>Şehir Planlaması Nedir?</h2>
      <p>
        Şehir planlaması (kentsel planlama), bir yerleşim alanının
        fiziksel, sosyal, ekonomik ve çevresel boyutlarını uzun vadeli
        perspektifle yönetmeyi amaçlayan disiplindir. Yalnızca bina
        yapmayı düzenlemez; hangi işlev nerede yer alacak, trafiğin
        akışı nasıl sağlanacak, yeşil alan sistemi nasıl korunacak,
        kamusal altyapı yatırımları nasıl önceliklendirilecek gibi
        kapsamlı kararları içerir.
      </p>
      <p>
        Modern şehir planlaması birkaç temel ilke üzerine kuruludur:
      </p>
      <ul>
        <li><strong>İşlev ayrımı (zoning):</strong> Konut, ticaret, sanayi ve yeşil alanların birbirinden ayrılması</li>
        <li><strong>Yoğunluk kontrolü:</strong> Altyapının kaldırabileceği yapılaşma miktarının sınırlandırılması</li>
        <li><strong>Entegre ulaşım:</strong> Konutun işe, okula ve kamusal hizmetlere erişiminin planlanması</li>
        <li><strong>Kamusal alan sistemi:</strong> Park, meydan ve yeşil koridorların korunması</li>
      </ul>

      <h2>İmar Planı Türleri</h2>
      <p>
        Türkiye'de imar planlama sistemi kademeli yapıdadır:
      </p>
      <ul>
        <li>
          <strong>Mekânsal Strateji Planı:</strong> Ülke ve bölge
          ölçeğinde genel yönelimler. Bakanlık tarafından hazırlanır.
        </li>
        <li>
          <strong>Çevre Düzeni Planı:</strong> İl veya havza ölçeği.
          Büyük arazi kullanım kararları belirlenir.
        </li>
        <li>
          <strong>Nazım İmar Planı:</strong> Mahalle ve semt ölçeği.
          Genel arazi kullanımı, ana ulaşım aksları ve yoğunluk kararları.
          Büyükşehir belediyesi onaylar.
        </li>
        <li>
          <strong>Uygulama İmar Planı:</strong> Parsel ölçeği. Yapılaşma
          koşulları (TAKS, KAKS, kat adedi, çekme mesafeleri) belirlenir.
          İlçe belediyesi onaylar.
        </li>
      </ul>

      <h2>Kentsel Rant</h2>
      <p>
        Kentsel rant, arazi ve gayrimenkul değerlerinde planlama veya
        altyapı kararlarıyla oluşan artıştır. Kaynakları:
      </p>
      <ul>
        <li>
          <strong>İmar değişikliği:</strong> Tarım arazisinden konut
          alanına, düşük kattan yüksek kata geçiş; arsa değerini çarpıcı
          biçimde artırır.
        </li>
        <li>
          <strong>Altyapı yatırımı:</strong> Metro, hızlı yol, hastane
          veya üniversite yapımı çevre arazi değerlerini yükseltir.
        </li>
        <li>
          <strong>Nüfus ve talep artışı:</strong> Şehirleşme hızının
          konut arzını aşması, özellikle merkezi konumlarda değer artışı
          yaratır.
        </li>
      </ul>
      <p>
        Rantın kamu yararına döndürülmesi için "değer artış payı",
        "kentsel dönüşüm katkısı" gibi mekanizmalar kullanılır; ancak
        uygulamada etkinlik ülkeden ülkeye değişir.
      </p>

      <h2>Şehir Planlaması ile Afet İlişkisi</h2>
      <p>
        Deprem, sel ve heyelan gibi doğal afetlere karşı hazırlık,
        şehir planlamasının ayrılmaz bir boyutudur. Fay hatları, taşkın
        alanları ve zemin riski bölgeleri; imar planlarına yansıtılarak
        riskli alanlarda yapılaşma kısıtlanır. Yanlış imar kararları
        ise afet riskini doğrudan artırır.
      </p>
      <p>
        İzmir'deki deprem riski ve fay hatları için:{" "}
        <a href="/blog/izmir-deprem-riski-fay-hatlari">
          İzmir'de Deprem Riski: Fay Hatları ve Hazırlık
        </a>
      </p>

      <h2>Vatandaş Katılımı</h2>
      <p>
        İmar planları, onaylanmadan önce askıya çıkarılır. Bu süre
        içinde vatandaşlar itiraz hakkına sahiptir. Büyük ölçekli
        projelerde çevresel etki değerlendirmesi (ÇED) kapsamında
        kamuoyu toplantıları zorunludur. Katılımın etkin olabilmesi
        için planların anlaşılır biçimde duyurulması kritik önem taşır.
      </p>
      <p>
        Kentsel dönüşüm hak ve süreçleri için:{" "}
        <a href="/blog/kentsel-donusum-nedir-hak-yukumlulukler">
          Kentsel Dönüşüm Nedir? Hak ve Yükümlülükler
        </a>
      </p>

      <h2>Şehir Planlamasının Güncel Zorlukları</h2>
      <ul>
        <li>
          <strong>İklim uyumu:</strong> Isı adası etkisini azaltmak,
          sel riskini yönetmek ve yeşil altyapıyı artırmak zorunlu hale
          geliyor.
        </li>
        <li>
          <strong>Konut erişilebilirliği:</strong> Merkeze yakın
          alanların aşırı pahalanması, düşük ve orta gelirli grupları
          şehir çeperlerine iterek eşitsizliği derinleştiriyor.
        </li>
        <li>
          <strong>Ulaşım dönüşümü:</strong> Araç merkezli şehirden
          yaya, bisiklet ve toplu taşıma odaklı yapıya geçiş; hem arazi
          kullanımını hem altyapı yatırımlarını yeniden tanımlıyor.
        </li>
        <li>
          <strong>Veri odaklı planlama:</strong> CBS, sensör verileri
          ve gerçek zamanlı analiz; planlama kararlarını daha nesnel
          temele oturtmayı sağlıyor.
        </li>
      </ul>
    </>
  )
}
