import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "bayramda-bankalar-ptt-avm-izmir-2026",
  title: "Bayramda Bankalar, PTT ve AVM'ler Açık mı? İzmir 2026",
  description:
    "Kurban Bayramı 2026'da (27–30 Mayıs) İzmir'de bankalar, PTT, AVM'ler ve marketler açık mı? Resmi tatil kapsamındaki kurumlar ve ATM bilgisi.",
  date: "2026-05-25",
  category: "İzmir Rehberi",
  summary:
    "Kurban Bayramı (27–30 Mayıs 2026) süresince bankalar ve PTT şubeleri resmi tatil kapsamında kapalıdır; ATM'ler 24 saat hizmet vermeye devam eder. AVM'ler ve büyük marketler özel tatil saatleriyle açık olabilir; güncel saatler için ilgili kurumların duyurularını takip edin.",
  readTime: 4,
  faq: [
    {
      question: "Kurban Bayramı'nda bankalar açık mı?",
      answer:
        "Hayır. Bankalar Türkiye'de resmi tatil günlerinde kapalıdır. Kurban Bayramı (27–30 Mayıs 2026) 4 günlük resmi tatildir; bu süre boyunca tüm banka şubeleri kapalı olacaktır. ATM ve dijital bankacılık hizmetleri ise 7/24 hizmet verir.",
    },
    {
      question: "ATM'ler bayramda çalışıyor mu?",
      answer:
        "Evet. ATM'ler bayram günleri dahil 7/24 hizmet vermeye devam eder. Nakit ihtiyacınız varsa bayramdan önce temin etmeniz veya ATM'yi kullanmanız önerilir. Büyük AVM ve alışveriş noktalarındaki ATM'ler genellikle erişilebilirdir.",
    },
    {
      question: "PTT şubeleri bayramda açık mı?",
      answer:
        "Hayır. PTT şubeleri resmi tatil günlerinde kapalıdır. Kargo ve posta teslimini bayramdan önce veya sonra planlayın. PTT ATM'leri ve Posta Güvercini dijital hizmetleri erişilebilir olmaya devam edebilir.",
    },
    {
      question: "AVM'ler ve büyük marketler bayramda açık mı?",
      answer:
        "AVM'ler ve marketler özel sektör işletmesi olduğundan bayram günlerinde açılıp açılmama kararını kendileri verir. Büyük alışveriş merkezleri (Forum Bornova, Optimum, Agora, İzmir Park vb.) genellikle bayramda açık olur ancak saatlerini kısaltabilir. Güncel bilgi için AVM'nin sosyal medya veya web sitesini kontrol edin.",
    },
    {
      question: "Kurban Bayramı kaç gün? Hangi günler resmi tatil?",
      answer:
        "2026 Kurban Bayramı arefe günü 26 Mayıs Salı, resmi tatil ise 27–30 Mayıs 2026 (Çarşamba–Cumartesi) 4 gündür. Hükümet kararıyla köprü günler eklenerek tatil uzatılabilir; güncel bilgi için Cumhurbaşkanlığı resmi tatil takvimini kontrol edin.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Kurban Bayramı (27–30 Mayıs 2026) resmi tatil günlerini kapsadığından
        pek çok kurum ve işletmenin çalışma saatleri değişmektedir. Aşağıda
        en çok merak edilen kategoriler için özet bilgi verilmektedir.
      </p>

      <h2>Bankalar</h2>
      <p>
        Tüm banka şubeleri resmi tatil kapsamında{" "}
        <strong>27–30 Mayıs boyunca kapalı</strong> olacaktır.
      </p>
      <ul>
        <li>
          <strong>ATM:</strong> 7/24 hizmet verir, tüm bankacılık
          işlemleri (para çekme, yatırma, EFT) mümkündür.
        </li>
        <li>
          <strong>Mobil/İnternet bankacılığı:</strong> Kesintisiz erişilebilir.
          Havale, EFT ve fatura ödemesi yapılabilir.
        </li>
        <li>
          <strong>Acil durum:</strong> Kart iptali veya acil işlem için bankanın
          7/24 çağrı merkezini arayın.
        </li>
      </ul>
      <p>
        Nakit ihtiyacınız varsa bayramdan (26 Mayıs arefe günü akşamına
        kadar) temin etmeniz veya ATM kullanmanız önerilir.
      </p>

      <h2>PTT</h2>
      <p>
        PTT şubeleri resmi tatilde{" "}
        <strong>kapalıdır.</strong> Kargo teslimatı ve kabul işlemleri
        yapılamaz.
      </p>
      <ul>
        <li>
          Bayram döneminde kargo göndermek veya teslim almak isteyenler
          bu işlemleri 26 Mayıs öncesine almalı ya da 31 Mayıs (Pazar
          günü iş yeri durumuna göre) veya 1 Haziran'a ertelemeli.
        </li>
        <li>
          PTT ATM'leri açık kalmaya devam edebilir; bilgi için ptt.gov.tr.
        </li>
      </ul>

      <h2>AVM'ler ve Alışveriş Merkezleri</h2>
      <p>
        AVM'ler özel sektör işletmeleri olduğundan kendi kararlarıyla
        bayramda açık olabilir. İzmir'deki büyük AVM'lerin bayram döneminde
        çalışma eğilimi:
      </p>
      <ul>
        <li>
          <strong>Genellikle açık:</strong> Forum Bornova, Optimum İzmir,
          Agora İzmir, İzmir Park, BalçovaTermal AVM, Folkart Time vb.
        </li>
        <li>
          <strong>Saatler:</strong> Normal saatlerden daha kısa, örneğin
          10:00–20:00 gibi kısaltılmış çalışma saati uygulanabilir.
        </li>
        <li>
          <strong>Bayramın 1. günü:</strong> Bazı AVM'ler sabah saat 12:00
          veya 13:00'a kadar kapalı kalabilir.
        </li>
      </ul>
      <p>
        Kesin saat için ilgili AVM'nin sosyal medya hesabı veya web sitesi
        en güncel kaynaktır.
      </p>

      <h2>Büyük Marketler (Zincir Süpermarketler)</h2>
      <p>
        Büyük zincir marketlerin (Migros, CarrefourSA, BİM, A101, Şok) bayram
        saatleri şubeden şubeye farklılık gösterebilir. Genel eğilim:
      </p>
      <ul>
        <li>
          <strong>Bayramın 1. günü:</strong> Birçok şube ya tamamen kapalı
          ya da öğleden sonra açık olur.
        </li>
        <li>
          <strong>2–4. gün:</strong> Kısaltılmış saatlerle açık olabilir.
        </li>
        <li>
          Bayram alışverişi için 26 Mayıs arefe günü sabahı alışveriş
          yapmanız önerilir; kalabalık yoğundur ancak marketler açıktır.
        </li>
      </ul>

      <h2>Restoranlar ve Kafeler</h2>
      <p>
        Çoğu restoran ve kafe bayramda hizmet verir; ancak saatler
        değişebilir. Özellikle kurban eti için özel menüler ve "bayram
        mangalı" etkinlikleri bu dönemde yoğunlaşır.
      </p>

      <h2>Devlet Kurumları</h2>
      <ul>
        <li>
          <strong>Nüfus müdürlükleri, vergi daireleri, belediye hizmet binaları:</strong>{" "}
          Kapalı (resmi tatil).
        </li>
        <li>
          <strong>Hastaneler ve sağlık kuruluşları:</strong> Acil servisler 7/24
          açık; poliklinikler kapalı. Randevuyu bayramdan önce alın.
        </li>
        <li>
          <strong>112, 110, 155:</strong> Her zaman aktif.
        </li>
      </ul>

      <p>
        Nöbetçi eczane için:{" "}
        <a href="/blog/izmir-bayram-nobetci-eczane-2026">
          İzmir Bayram Nöbetçi Eczane 2026
        </a>
      </p>
      <p>
        Bayram ulaşımı için:{" "}
        <a href="/blog/izmir-bayram-ulasimi-2026">
          İzmir Bayram Ulaşımı 2026
        </a>
      </p>
    </>
  )
}
