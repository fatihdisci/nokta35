import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "buyuksehir-ilce-belediyesi-farki",
  title: "Büyükşehir Belediyesi ile İlçe Belediyesi Farkı Nedir?",
  description:
    "Büyükşehir belediyesi mi, ilçe belediyesi mi? Kim hangi hizmeti sunar? Görev ve yetki farkları, İzmir örneği ile birlikte açık ve net anlatım.",
  date: "2026-05-24",
  category: "Şehir",
  summary:
    "Büyükşehir belediyesi, il genelinde stratejik hizmetleri (metro, su-kanalizasyon, toplu taşıma, ana yollar) üstlenir. İlçe belediyeleri ise mahalle ölçeğinde gündelik hizmetleri (park, temizlik, ruhsat) yürütür. Türkiye'de 30 büyükşehir bulunmakta; İzmir de bu kapsamdadır.",
  readTime: 5,
  faq: [
    {
      question: "Büyükşehir belediyesi nedir?",
      answer:
        "Büyükşehir belediyesi, nüfus ve alan koşullarını karşılayan illerde kurulan ve il genelinde belirli hizmetleri yürüten üst ölçekli belediyedir. Türkiye'de 5216 sayılı Büyükşehir Belediyesi Kanunu ile düzenlenir. Belediye başkanı ve meclisi doğrudan seçimle belirlenir.",
    },
    {
      question: "İlçe belediyesi nedir?",
      answer:
        "İlçe belediyesi, büyükşehir sınırları içindeki her ilçede kurulan ve o ilçenin gündelik yerel hizmetlerini yürüten belediyedir. Büyükşehir belediyesiyle hiyerarşik bir ilişki içindedir; bazı görevler paylaşılır, bazıları büyükşehire devredilmiştir.",
    },
    {
      question: "Büyükşehir ve ilçe belediyesi arasındaki görev farkı nedir?",
      answer:
        "Büyükşehir: metro, tramvay, su-kanalizasyon (İZSU gibi), ana arterlerin bakımı, itfaiye, toplu taşıma koordinasyonu ve imar planlaması. İlçe belediyesi: mahalle parklarının bakımı, çevre temizliği (katı atık toplama büyükşehirde), bina ruhsatları, nikah, mezarlık ve yerel kültürel etkinlikler.",
    },
    {
      question: "İzmir'de kaç ilçe belediyesi var?",
      answer:
        "İzmir Büyükşehir Belediyesi çatısı altında 30 ilçe belediyesi bulunmaktadır. Her ilçenin kendi belediye başkanı ve meclisi seçimle belirlenir. Büyükşehir belediyesi ise il genelinde ortak hizmetleri koordine eder.",
    },
    {
      question: "Hangi sorunu hangi belediyeye bildirmeliyim?",
      answer:
        "Su kesintisi veya arıza için İZSU (büyükşehir iştiraki); otobüs şikâyeti için ESHOT (büyükşehir iştiraki); bozuk kaldırım veya park için ilçe belediyesi; yapı ruhsatı için ilçe belediyesi; metro veya tramvay için İZULAŞ (büyükşehir iştiraki). Emin değilseniz büyükşehir ALO hattından yönlendirme alabilirsiniz.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Mahalle parkındaki bozuk bank için mi aramak gerek, yoksa büyükşehir
        mi? Su faturasını kim kesiyor? Otobüs şikâyetini nereye iletmeli?
        Türkiye'de iki kademeli belediye sistemi pek çok vatandaş için
        kafa karışıklığına yol açar. <strong>Büyükşehir belediyesi
        ile ilçe belediyesinin görev sınırlarını</strong> net biçimde
        anlatıyoruz.
      </p>

      <h2>Türkiye'de Büyükşehir Sistemi</h2>
      <p>
        Türkiye'de 2013 yılında yürürlüğe giren 6360 sayılı Kanun ile
        büyükşehir sayısı 30'a yükseltildi. Bu düzenlemeyle birlikte
        büyükşehir olan illerin tüm il alanı belediye sınırına dahil
        edildi; köy ve belde belediyeleri lağvedildi.
      </p>
      <p>
        İzmir, 30 büyükşehirden biridir. Büyükşehir belediyesinin altında
        30 ilçe belediyesi bulunur.
      </p>

      <h2>Görev Dağılımı</h2>

      <h3>Büyükşehir Belediyesinin Görevleri</h3>
      <ul>
        <li>
          <strong>Su ve kanalizasyon:</strong> İSKİ, İZSU gibi su idareleri
          büyükşehir bünyesinde çalışır. Su faturası büyükşehire gider.
        </li>
        <li>
          <strong>Toplu taşıma koordinasyonu:</strong> ESHOT, İZBAN
          koordinasyonu, İZMİRKART sistemi ve metro/tramvay işletimi
          büyükşehir ya da büyükşehir iştirakleri tarafından yürütülür.
        </li>
        <li>
          <strong>Ana yollar:</strong> Büyükşehir sınırları içindeki
          çevre yolları, viyadükler ve ana arterlerin yapım ve bakımı.
        </li>
        <li>
          <strong>İtfaiye:</strong> Büyükşehir belediyeleri merkezi
          itfaiye teşkilatı kurar.
        </li>
        <li>
          <strong>Nazım imar planı:</strong> İl genelinde genel arazi
          kullanım kararlarını büyükşehir meclisi alır.
        </li>
        <li>
          <strong>Katı atık yönetimi:</strong> Çöp toplama ve bertaraf
          büyükşehre devredilmiştir; ilçe belediyesi sahada hizmet
          verebilir.
        </li>
      </ul>

      <h3>İlçe Belediyesinin Görevleri</h3>
      <ul>
        <li>
          <strong>Park ve yeşil alanlar:</strong> Mahalle ölçeğindeki
          parkların bakım ve yapımı.
        </li>
        <li>
          <strong>Yapı ruhsatları:</strong> Bina yapım, tadilat ve
          iskan izinleri ilçe belediyesinden alınır.
        </li>
        <li>
          <strong>Zabıta:</strong> Pazar yerleri, işyeri denetimi,
          seyyar satıcı düzenlemesi.
        </li>
        <li>
          <strong>Sosyal hizmetler:</strong> Yaşlı ve engelli desteği,
          sosyal market, nikah salonu.
        </li>
        <li>
          <strong>Mezarlık:</strong> Mahalle mezarlıklarının bakımı.
        </li>
        <li>
          <strong>Yerel kültür etkinlikleri:</strong> İlçe ölçeğindeki
          konser, festival, kültür merkezi.
        </li>
      </ul>

      <h2>Hangi Sorunu Nereye Bildirmeli?</h2>
      <ul>
        <li><strong>Su kesintisi, arıza, fatura:</strong> İZSU (büyükşehir)</li>
        <li><strong>Otobüs gecikmesi, hat sorunları:</strong> ESHOT (büyükşehir)</li>
        <li><strong>Metro, tramvay:</strong> İZULAŞ / büyükşehir</li>
        <li><strong>Bozuk kaldırım, park bakımı:</strong> İlçe belediyesi</li>
        <li><strong>Bina ruhsatı, iskan:</strong> İlçe belediyesi</li>
        <li><strong>Çöp toplama düzensizliği:</strong> İlçe belediyesi (bazı ilçelerde büyükşehir)</li>
        <li><strong>İmar planı sorusu:</strong> Nazım plan için büyükşehir, uygulama planı için ilçe belediyesi</li>
      </ul>

      <h2>İzmir Özelinde</h2>
      <p>
        İzmir Büyükşehir Belediyesi; ESHOT (otobüs), İZBAN (banliyö
        treni), İZULAŞ (metro-tramvay), İZSU (su), ESHOT ve Kültürpark
        gibi kurumların koordinasyonunu üstlenmektedir. 30 ilçenin her
        birinde ayrıca seçilmiş ilçe belediye başkanlıkları yerel
        hizmetleri yürütür.
      </p>
      <p>
        İzmir toplu taşıma sistemlerinin tamamı için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi: ESHOT, İZBAN, Metro, Vapur
        </a>
      </p>
      <p>
        Şehir planlaması ve imar süreçleri için:{" "}
        <a href="/blog/sehir-planlamasi-nedir-imar-rant">
          Şehir Planlaması Nedir? İmar, Kentsel Rant ve Dönüşüm
        </a>
      </p>
    </>
  )
}
