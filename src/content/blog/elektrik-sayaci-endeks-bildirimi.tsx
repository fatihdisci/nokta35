import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "elektrik-sayaci-endeks-bildirimi",
  title: "Elektrik Sayacı Endeks Bildirimi: İzmir'de GEAŞ'a Nasıl Yapılır?",
  description:
    "Elektrik sayacı endeks bildirimi nedir, neden yapılır? İzmir'de Gediz Elektrik (GEAŞ) için SMS, uygulama ve web üzerinden endeks bildirimi adım adım rehber.",
  date: "2026-05-25",
  category: "Resmi İşlemler",
  summary:
    "Endeks bildirimi, sayaç okuyucusunun gelemediği durumlarda aylık elektrik tüketiminizi kendiniz bildirmenizi sağlar. İzmir'de Gediz Elektrik (GEAŞ) için bildirimi mobil uygulama, web sitesi, SMS veya 186 çağrı merkezi üzerinden yapılabilir. Zamanında bildirim yapılmadığında faturanız tahminî hesaplanır.",
  readTime: 4,
  faq: [
    {
      question: "Endeks bildirimi neden yapılır?",
      answer:
        "Dağıtım şirketleri her ay her aboneye ulaşamayabilir. Sayaç okunamazsa fatura tahmini (ort. tüketim) üzerinden kesilir; gerçek tüketimden fazla veya az çıkabilir. Endeks bildirimi yapıldığında fatura gerçek tüketime göre hesaplanır; hem sizi aşırı faturalanmadan hem de sonraki dönem toplu borç çıkmasından korur.",
    },
    {
      question: "Endeks bildirimi ne zaman yapılır?",
      answer:
        "GEAŞ her abone için aylık okuma penceresi belirler. Bu pencere genellikle fatura kesiş tarihinden 1–3 gün öncedir. Uygulamaya veya SMS bildirimlerine abone olursanız okuma döneminde hatırlatma alırsınız. Pencere dışında yapılan bildirimler işleme alınmayabilir.",
    },
    {
      question: "Sayaç okuma değerini nasıl bulurum?",
      answer:
        "Elektrik sayacınız genellikle elektrik panosu içinde veya binada ortak alanlardadır. Dijital sayaçlarda ekranda gösterilen kWh değeri esas alınır; bazı sayaçlarda birden fazla tarife (gündüz/gece) görüntülenir. Hangi değeri gireceğinizi bilmiyorsanız GEAŞ çağrı merkezini (186) arayarak öğrenebilirsiniz.",
    },
    {
      question: "Endeks bildirmezsen ne olur?",
      answer:
        "Bildirmezseni dağıtım şirketi tahmini fatura keser (geçmiş ortalama tüketime göre). Tahmin fazla çıkarsa fazla ödersiniz, az çıkarsa bir sonraki gerçek okumada fark faturaya yansır. Uzun süre okunmayan sayaçlarda toplu borç birikebilir.",
    },
    {
      question: "İzmir'de GEAŞ dışında başka elektrik dağıtım şirketi var mı?",
      answer:
        "İzmir'de elektrik dağıtımını GEAŞ (Gediz Elektrik Dağıtım A.Ş.) yapmaktadır. Bazı sınır ilçelerde (örn. Aliağa'nın bazı mahalleleri) farklı şirket yetkili olabilir; faturanızın üzerinde şirket adını ve müşteri hizmetleri numarasını kontrol edin.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Elektrik faturanız tahminî değil, gerçek tüketimden kesilsin
        istiyorsanız <strong>endeks bildirimi</strong> yapmanız gerekir.
        İzmir'de elektrik dağıtımını yürüten{" "}
        <strong>GEAŞ (Gediz Elektrik Dağıtım A.Ş.)</strong> birkaç
        farklı kanaldan endeks bildirimi imkânı sunmaktadır.
      </p>

      <h2>Endeks Bildirimi Nedir?</h2>
      <p>
        Sayaç okuyucusu her ay her aboneye ulaşamayabilir. Bu durumda
        dağıtım şirketi <em>tahmini tüketim</em> üzerinden fatura keser.
        Aboneler istediklerinde aylık okuma döneminde sayaçlarını
        kendileri okuyarak bildirimi yapabilir; böylece fatura
        <strong> gerçek tüketim</strong> üzerinden hesaplanır.
      </p>

      <h2>İzmir'de GEAŞ'a Endeks Bildirimi Kanalları</h2>

      <h3>1 — GEAŞ Mobil Uygulaması</h3>
      <p>
        iOS ve Android için indirilebilen GEAŞ uygulaması en pratik
        yöntemdir. Uygulama üzerinden:
      </p>
      <ul>
        <li>Sayaç endeksini girebilir,</li>
        <li>Fatura durumunu takip edebilir,</li>
        <li>Arıza ve kesinti bildiriminde bulunabilirsiniz.</li>
      </ul>
      <p>
        Sisteme giriş için T.C. kimlik numarası ve tesis/sözleşme
        numaranız gerekir (faturanızın üzerinde yazmaktadır).
      </p>

      <h3>2 — Web Sitesi</h3>
      <p>
        <strong>geaş.com.tr</strong> üzerindeki "Müşteri İşlemleri"
        veya "Endeks Bildirimi" bölümünden online bildirim yapılabilir.
      </p>

      <h3>3 — 186 Çağrı Merkezi</h3>
      <p>
        <strong>186</strong> numaralı GEAŞ müşteri hizmetleri hattını
        arayarak endeks bildiriminizi telefonla yapabilirsiniz. Sesli
        yönlendirme sistemi üzerinden endeks girişi mümkündür.
      </p>

      <h3>4 — SMS</h3>
      <p>
        GEAŞ, kısa mesajla endeks bildirimine izin vermektedir.
        Güncel SMS numarası ve format için GEAŞ resmi sitesi veya
        faturanızın arka yüzündeki talimatları kontrol edin; bu
        bilgi dönemsel olarak değişebilir.
      </p>

      <h2>Sayacı Nasıl Okursunuz?</h2>
      <p>
        Elektrik sayacınız genellikle elektrik panosunda veya ortak
        alanda bulunur. Dijital sayaçlarda ekrandaki{" "}
        <strong>kWh (kilowatt-saat)</strong> değerini girin.
        Bazı sayaçlarda birden fazla tarife (T1 gündüz, T2 gece)
        gösterilir; hangi değerin girileceğini önceki faturanızdaki
        tarife bilgisiyle karşılaştırarak ya da 186'yı arayarak
        teyit edin.
      </p>

      <h2>Bildirimi Ne Zaman Yapmalısınız?</h2>
      <p>
        Her abone için aylık bir <strong>okuma penceresi</strong>{" "}
        belirlenmiştir. Bu pencerenin dışında yapılan bildirimler
        işleme alınmayabilir. GEAŞ uygulamasından veya web
        hesabınızdan bildirimin hangi tarihler arasında kabul
        edildiğini görebilirsiniz. Bildirim yaptığınızda sistem
        size onay numarası verir; bunu saklayın.
      </p>

      <h2>Tahmini Fatura Sonraki Döneme Nasıl Yansır?</h2>
      <p>
        Bir dönem tahmini fatura kestiyse ve gerçek tüketiminiz
        tahmin edilen değerden farklıysa, fark{" "}
        <strong>sonraki gerçek okuma döneminde</strong> faturaya
        eklenir ya da düşülür. Uzun süre okunmayan sayaçlarda
        toplu borç birikebileceğinden düzenli bildirim önerilir.
      </p>

      <p>
        Gediz Elektrik kesinti sorgulama için:{" "}
        <a href="/blog/gediz-elektrik-kesintisi-sorgulama">
          Gediz Elektrik Kesintisi Sorgulama: SMS, Uygulama, 186
        </a>
      </p>
    </>
  )
}
