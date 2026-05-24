import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmirkart-nedir-nasil-kullanilir",
  title: "İZMİRKART Nedir? Nasıl Alınır, Yüklenir ve Kullanılır?",
  description:
    "İZMİRKART İzmir'deki tüm toplu taşıma araçlarında geçerli akıllı karttır. Nasıl alınır, bakiye nasıl yüklenir, aktarma indirimi nasıl çalışır? Eksiksiz rehber.",
  date: "2026-05-24",
  category: "Ulaşım",
  summary:
    "İZMİRKART, İzmir'de ESHOT, İZBAN, metro, tramvay ve vaporu tek kartla kullanmayı sağlayan akıllı ulaşım kartıdır. Aktarma indirimleri otomatik uygulanır; bakiye otomat, yetkili bayi veya mobil uygulama ile yüklenir.",
  readTime: 5,
  faq: [
    {
      question: "İZMİRKART nedir?",
      answer:
        "İZMİRKART, İzmir'deki tüm toplu taşıma sistemlerinde — ESHOT otobüsleri, İZBAN banliyö treni, metro, tramvay ve İZDENİZ vapurlarında — kullanılan akıllı ulaşım kartıdır. Nakit yerine kart kullanımını teşvik eder; aktarma indirimleri otomatik olarak uygulanır.",
    },
    {
      question: "İZMİRKART nasıl alınır?",
      answer:
        "İZMİRKART; İZBAN istasyonlarındaki otomat makinelerinden, yetkili satış noktalarından (kiosk, market, eczane) ve İZMİRKART servis merkezlerinden temin edilebilir. Kart için küçük bir depozito alınır. Öğrenci kartı için öğrenci belgesi ile başvuru gerekir.",
    },
    {
      question: "İZMİRKART'a bakiye nasıl yüklenir?",
      answer:
        "Bakiye yükleme yöntemleri: İZBAN istasyonlarındaki otomat makineleri, yetkili satış noktaları, İZMİRKART mobil uygulaması (online) ve İZMİRKART web sitesi. Bazı ESHOT duraklarındaki yükleme noktaları da mevcuttur.",
    },
    {
      question: "Aktarma indirimi nasıl çalışır?",
      answer:
        "İZMİRKART ile yapılan ilk binişten belirli bir süre içinde farklı bir araca binildiğinde aktarma indirimi otomatik uygulanır. İndirim oranı ve süre zaman zaman güncellenebilir; güncel tarife için İzmir Büyükşehir Belediyesi'nin resmi kanalları takip edilmelidir.",
    },
    {
      question: "İZMİRKART türleri nelerdir?",
      answer:
        "Tam bilet (standart), öğrenci, 60 yaş üstü ve engelli olmak üzere farklı İZMİRKART türleri mevcuttur. Her tür farklı tarife uygular. Öğrenci ve indirimli kartlar için ilgili belgelerin ibraz edilmesi gerekir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'de otobüse, metroya, İZBAN'a, tramvaya ya da vapura her
        binişte cüzdan aramak yerine tek bir kart kullanmak mümkün:
        <strong> İZMİRKART</strong>. Şehrin tüm toplu taşıma sistemlerini
        birbirine bağlayan bu akıllı kart; hem kolaylık hem de aktarma
        indirimi sayesinde maliyet avantajı sağlar. Bu rehberde kartı
        nereden alacağınızı, nasıl yükleyeceğinizi ve sistemin nasıl
        çalıştığını anlatıyoruz.
      </p>
      <p>
        İzmir toplu taşımasına genel bakış için:{" "}
        <a href="/blog/izmir-toplu-tasima-rehberi">
          İzmir Toplu Taşıma Rehberi: ESHOT, İZBAN, Metro, Vapur
        </a>
      </p>

      <h2>İZMİRKART Hangi Araçlarda Geçerli?</h2>
      <p>
        İZMİRKART aşağıdaki tüm İzmir toplu taşıma sistemlerinde
        kabul edilir:
      </p>
      <ul>
        <li><strong>ESHOT:</strong> Kentin tüm otobüs hatları</li>
        <li><strong>İZBAN:</strong> Aliağa–Selçuk banliyö treni</li>
        <li><strong>Metro (M1):</strong> Fahrettin Altay–Bornova hattı</li>
        <li><strong>Tramvay:</strong> Konak ve Karşıyaka hatları</li>
        <li><strong>İZDENİZ:</strong> Körfez vapur seferleri</li>
      </ul>
      <p>
        İZBAN'da ayrıca TCDD biletleri de geçerlidir; ancak diğer
        sistemlerle aktarma indirimi yalnızca İZMİRKART üzerinden uygulanır.
      </p>

      <h2>İZMİRKART Nasıl Alınır?</h2>
      <p>
        Karta birkaç farklı noktadan ulaşılabilir:
      </p>
      <ul>
        <li>
          <strong>İZBAN istasyon otomatları:</strong> 7/24 erişilebilir;
          kart alma ve bakiye yükleme işlemlerini destekler.
        </li>
        <li>
          <strong>Yetkili satış noktaları:</strong> Kiosk, market, eczane
          ve çeşitli küçük işletmeler; şehrin her noktasına yayılmıştır.
        </li>
        <li>
          <strong>İZMİRKART servis merkezleri:</strong> Öğrenci, engelli
          ve 60 yaş üstü indirimli kart başvuruları için resmi servis
          merkezlerine başvurulması gerekir.
        </li>
      </ul>
      <p>
        Standart kart için küçük miktarda depozito ödenir; kart iade
        edildiğinde bu tutar geri alınır.
      </p>

      <h2>Bakiye Nasıl Yüklenir?</h2>
      <ul>
        <li>
          <strong>Otomat makineleri:</strong> İZBAN istasyonlarında
          nakit ve kart ile yükleme yapılabilir.
        </li>
        <li>
          <strong>Yetkili satış noktaları:</strong> Karta fiziksel
          dokunma ile yükleme yapılır; işlem anında aktif olur.
        </li>
        <li>
          <strong>Mobil uygulama ve web sitesi:</strong> Online yükleme
          yapıldıktan sonra yüklemenin karta aktarılması için araç
          okuyucusuna temas etmek gerekebilir; süre ve aktarma yöntemi
          güncellenebilir.
        </li>
      </ul>

      <h2>Aktarma İndirimi</h2>
      <p>
        İZMİRKART'ın en önemli avantajlarından biri <strong>aktarma
        indirimi</strong>dir. İlk binişten belirli bir süre içinde farklı
        bir araca binildiğinde tam ücret yerine indirimli tarife uygulanır.
        Bu özellik; metro + İZBAN + otobüs gibi çok aktarmalı yolculuklarda
        toplam maliyeti belirgin biçimde azaltır.
      </p>
      <p>
        Aktarma süresi ve indirim oranı zaman zaman güncellenebildiğinden
        güncel bilgi için İzmir Büyükşehir Belediyesi'nin resmi kanalları
        takip edilmelidir.
      </p>

      <h2>Kart Türleri ve Tarife</h2>
      <ul>
        <li><strong>Tam kart:</strong> Standart ücret; herkes kullanabilir</li>
        <li><strong>Öğrenci kartı:</strong> İndirimli; öğrenci belgesiyle başvuru gerekir</li>
        <li><strong>60 yaş üstü:</strong> İndirimli; nüfus cüzdanı yeterlidir</li>
        <li><strong>Engelli kartı:</strong> İndirimli veya ücretsiz; sağlık kurulu raporu ile başvuru</li>
      </ul>
      <p>
        Güncel fiyatlar için İzmir Büyükşehir Belediyesi tarifelerini
        inceleyiniz; ücretler mevzuat değişikliğiyle güncellenebilir.
      </p>

      <h2>Kartı Kaybederseniz</h2>
      <p>
        İZMİRKART kaybolduğunda, kart üzerine kayıtlı bakiye korunabilir.
        Bunun için kartın daha önceden online hesaba tanımlanmış olması
        gerekir. Kayıp durumunda İZMİRKART servis merkezine başvurup kartı
        bloke ettirmek ve yeni kart talebi oluşturmak önerilir.
      </p>

      <h2>Metro ve İZBAN ile Birlikte Kullanım</h2>
      <p>
        Metro ve İZBAN güzergahları hakkında ayrıntılı bilgi için:
      </p>
      <ul>
        <li>
          <a href="/blog/izmir-metrosu-guzergahlar-istasyonlar">
            İzmir Metrosu: Güzergah, İstasyonlar ve Kullanım Rehberi
          </a>
        </li>
        <li>
          <a href="/blog/izban-nedir-istasyonlar-guzergah">
            İZBAN Nedir? Güzergah, İstasyonlar ve Kullanım Rehberi
          </a>
        </li>
      </ul>
    </>
  )
}
