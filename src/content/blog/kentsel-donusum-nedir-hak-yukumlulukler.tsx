import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "kentsel-donusum-nedir-hak-yukumlulukler",
  title: "Kentsel Dönüşüm Nedir? Hak ve Yükümlülükler",
  description:
    "Kentsel dönüşüm nedir, nasıl başlar? Riskli yapı tespiti, yıkım süreci, kira yardımı, hak sahipliği ve itiraz hakkı. Ev sahibi ve kiracılar için tam rehber.",
  date: "2026-05-24",
  category: "Şehir",
  summary:
    "Kentsel dönüşüm, deprem başta olmak üzere doğal afet riski taşıyan yapıların yenilenmesini sağlayan yasal süreçtir. Türkiye'de 6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun çerçevesinde yürütülür. Riskli yapı tespiti, anlaşma veya kamulaştırma, kira yardımı ve yeni yapılaşma temel aşamalarıdır.",
  readTime: 6,
  faq: [
    {
      question: "Kentsel dönüşüm nedir?",
      answer:
        "Kentsel dönüşüm, fiziksel açıdan eskimiş, deprem gibi doğal afetlere karşı yetersiz veya altyapısı çökmüş kentsel alanların yenilenmesi sürecidir. Türkiye'de 6306 sayılı Kanun kapsamında uygulanan dönüşüm, riskli yapıların tespiti ve yıkılarak yeniden inşa edilmesine dayanır.",
    },
    {
      question: "Riskli yapı tespiti nasıl yapılır?",
      answer:
        "Yapı sahipleri veya kiracılar, Çevre ve Şehircilik Bakanlığı'nın yetkilendirdiği lisanslı kurumlardan riskli yapı tespiti talep edebilir. Tespit sonucu riskli bulunan yapı için bakanlık veya belediye tarafından yıkım kararı alınabilir. Tespit kararına karşı Teknik Heyete 15 gün içinde itiraz hakkı mevcuttur.",
    },
    {
      question: "Kentsel dönüşümde ev sahibinin hakları nelerdir?",
      answer:
        "Ev sahipleri; riskli yapı tespitine itiraz hakkı, anlaşma sürecinde müzakere hakkı, dönüşüm süresince kira yardımı ve faiz desteği ile yeniden inşa edilen yapıya öncelikli hak sahibi olmak gibi temel haklara sahiptir. Anlaşma sağlanamaması durumunda kamulaştırma veya acele kamulaştırma yoluna başvurulabilir.",
    },
    {
      question: "Kira yardımı kimler alabilir?",
      answer:
        "Riskli yapı kararı sonrası tahliye olan hem ev sahipleri hem de kiracılar, yeni yapı tamamlanana kadar aylık kira yardımından yararlanabilir. Yardım miktarı ve süresi Bakanlık genelgeleriyle belirlenir ve zaman içinde güncellenir. Başvuru için ikamet belgesi ve tahliye belgeleri gerekir.",
    },
    {
      question: "Kiracılar kentsel dönüşümden nasıl etkilenir?",
      answer:
        "Kiracılar; tahliye sürecinde kira yardımından yararlanabilir, ancak yeniden inşa edilen yapıya hak sahibi değildir. Mevcut kira sözleşmesi, resmi yıkım kararıyla sona erer. Kiracılar tahliyeye itiraz edemez; ancak kira yardımı ve taşınma desteği gibi telafi haklarını kullanabilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Oturduğunuz bina riskli yapı ilan edilirse ne olur? Yıkım
        kararına itiraz edebilir misiniz? Kira yardımı alabilir misiniz?
        <strong> Kentsel dönüşüm</strong> sürecindeki haklar ve
        yükümlülükler, pek çok vatandaş için belirsizliğini korumaktadır.
        Bu yazıda süreci adım adım açıklıyoruz.
      </p>
      <p>
        Deprem hazırlığı ve bina güvenliği için:{" "}
        <a href="/blog/depreme-hazirlik-rehberi">
          Depreme Hazırlık: Ev, Çanta, Tahliye Planı
        </a>
      </p>

      <h2>Yasal Çerçeve: 6306 Sayılı Kanun</h2>
      <p>
        Türkiye'de kentsel dönüşüm, 2012 yılında yürürlüğe giren
        <strong> 6306 sayılı Afet Riski Altındaki Alanların
        Dönüştürülmesi Hakkında Kanun</strong> çerçevesinde yürütülür.
        Kanun iki ana kapsamı düzenler:
      </p>
      <ul>
        <li>
          <strong>Riskli yapı:</strong> Deprem başta olmak üzere afet
          riskine karşı yetersiz olduğu belirlenen tek yapı
        </li>
        <li>
          <strong>Riskli alan:</strong> Toplu risklilik taşıyan kentsel
          bölge; Bakanlar Kurulu kararıyla ilan edilir
        </li>
      </ul>

      <h2>Süreç Adım Adım</h2>

      <h3>1. Riskli Yapı Tespiti</h3>
      <p>
        Yapı sahibi veya kat maliklerinin üçte biri, Çevre ve Şehircilik
        Bakanlığı lisanslı kurumlarına başvurarak riskli yapı tespiti
        talebinde bulunabilir. Belediye veya bakanlık da re'sen tespit
        yaptırabilir. Tespit raporunda yapının risk derecesi belirlenir.
      </p>

      <h3>2. İtiraz Süreci</h3>
      <p>
        Riskli yapı tescili yapıya işlendikten sonra malikler
        <strong> 15 gün içinde</strong> Teknik Heyete itiraz
        hakkına sahiptir. İtiraz üzerine farklı bir lisanslı kuruluş
        tarafından ikinci tespit yapılır. Heyet kararı kesindir.
      </p>

      <h3>3. Anlaşma ve Yıkım</h3>
      <p>
        Riskli yapı kesinleşince kat malikleri, yıkım ve yeniden inşa
        için karar alır. Kanun, <strong>maliklerin üçte iki
        çoğunluğu</strong> ile dönüşüm projesi karara bağlanabileceğini
        hükmeder. Çoğunluk sağlanırsa anlaşmayan maliklerin hissesi
        rızaları aranmaksızın satışa çıkarılabilir. Anlaşma
        sağlanamayan yapılar belediye veya idare tarafından yıkılır.
      </p>

      <h3>4. Kira Yardımı ve Destekler</h3>
      <p>
        Tahliye edilen malikler ve kiracılar, yeni yapı tamamlanana
        kadar aylık kira yardımından yararlanabilir. Buna ek olarak
        faiz destekli kredi, taşınma yardımı ve kimi durumlarda
        vergi muafiyeti de sağlanır.
      </p>

      <h3>5. Yeniden Yapılaşma</h3>
      <p>
        Onaylı avan veya uygulama projesiyle yeni bina inşa edilir.
        Malikler, yeni yapıdaki bağımsız bölümlere arsa paylarıyla
        orantılı biçimde hak sahibi olur.
      </p>

      <h2>Kiracıların Durumu</h2>
      <p>
        Kiracılar, kentsel dönüşüm sürecinde en kırılgan taraftır.
        Yıkım kararıyla kira sözleşmesi sona erer; yeni yapıda kiracı
        olarak hak sahibi değildirler. Ancak:
      </p>
      <ul>
        <li>Tahliye süresince kira yardımından yararlanabilirler</li>
        <li>Taşınma desteği talep edebilirler</li>
        <li>Uygulamaya itiraz etme hakları yoktur</li>
      </ul>

      <h2>Dikkat Edilmesi Gereken Noktalar</h2>
      <ul>
        <li>
          Riskli yapı tespitini talep etmeden önce lisanslı kuruluşların
          bakanlık listesinde yer aldığını doğrulayın.
        </li>
        <li>
          Çoğunluk kararı alındıktan sonra itiraz hakları daraldığından,
          ilk aşamalarda aktif katılım önem taşır.
        </li>
        <li>
          Kira yardımı miktarları ve süreleri mevzuatla güncellenebilir;
          güncel bilgi için Çevre ve Şehircilik İl Müdürlükleri'ne
          başvurun.
        </li>
      </ul>
      <p>
        Şehir planlaması ve imar süreçleri için:{" "}
        <a href="/blog/sehir-planlamasi-nedir-imar-rant">
          Şehir Planlaması Nedir? İmar, Kentsel Rant ve Dönüşüm
        </a>
      </p>
    </>
  )
}
