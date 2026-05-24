import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-kira-fiyatlari-nasil-arastirilir",
  title: "İzmir Kira Fiyatları İlçelere Göre Nasıl Araştırılır?",
  description:
    "İzmir'de kira fiyatları neden farklı platformlarda farklı gösterir? TÜİK, Endeksa, Sahibinden verilerini doğru okuma rehberi ve ilçelere göre karşılaştırma yöntemi.",
  date: "2026-05-24",
  category: "İzmir Genel",
  summary:
    "İzmir kira fiyatları; ilçe, konum, yapı yaşı ve oda sayısına göre geniş bir aralıkta değişir. Güvenilir veri için TÜİK Konut Kira Endeksi, Endeksa ve piyasa platformları birlikte değerlendirilmelidir. Tek bir kaynağa ya da anlık ilan fiyatlarına dayanmak yanıltıcı olabilir.",
  readTime: 6,
  faq: [
    {
      question: "İzmir'de ortalama kira ne kadar? (Güncel bilgi)",
      answer:
        "Kira fiyatları hızlı değiştiğinden bu yazıda belirli rakam verilmemektedir. Güncel ortalamaları öğrenmek için TÜİK Konut Fiyat Endeksi, Endeksa.com ve Sahibinden.com'un ilçe bazlı istatistik sayfaları aylık olarak güncellenmektedir. Bu kaynaklar hem kira hem satış fiyatı trendlerini ilçe bazında sunar.",
    },
    {
      question: "TÜİK ile ilan siteleri neden farklı rakam gösterir?",
      answer:
        "TÜİK, gerçekleşen işlem bedellerini veya resmi anket verilerini esas alır; ilan siteleri ise kiralanmamış listelenmiş fiyatları gösterir. İlan fiyatı her zaman piyasa değerini yansıtmaz; pazarlık payı içerebilir. Ayrıca TÜİK verisi dönemsel örneklem bazlı olduğundan anlık piyasa hareketlerini gecikmeli yansıtır.",
    },
    {
      question: "İzmir'de en pahalı ve en uygun fiyatlı ilçeler hangileri?",
      answer:
        "İzmir'de kira fiyatları ilçe ve mahalleye göre çok büyük farklılık gösterir. Genel eğilim olarak körfeze yakın merkezi ilçeler (Konak/Alsancak, Karşıyaka, Narlıdere, Balçova kıyı kesimleri) daha yüksek kiralar barındırırken şehir çeperi ilçeleri (Buca, Karabağlar iç mahalleleri, Gaziemir) daha uygun seyreder. Ancak bu tablo hızlı değiştiğinden güncel ilan analizleri yapılmalıdır.",
    },
    {
      question: "Kira artışı yasal limiti nedir?",
      answer:
        "Türkiye'de kira artış oranına yasal üst sınır uygulanmaktadır; 2024 yılı itibarıyla konut kira artışları 12 aylık TÜFE ortalamasıyla sınırlandırılmıştır. Mevcut yasal çerçeve ve güncel oran için Hazine ve Maliye Bakanlığı ile Türk Ticaret Kanunu/Borçlar Kanunu güncel hükümlerine bakılmalıdır; düzenleme değişebilir.",
    },
    {
      question: "Kiracı olarak haklarımı nereden öğrenebilirim?",
      answer:
        "Kira sözleşmesi, tahliye, depozito ve artış sınırlarına ilişkin kiracı haklarının tamamı Türk Borçlar Kanunu'nda düzenlenmiştir. Adalet Bakanlığı hukuki yardım büroları, barolar bünyesindeki ücretsiz hukuki danışmanlık hizmetleri ve İzmir Barosu'nun vatandaş danışma birimleri bilgi kaynağı olarak kullanılabilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir'de kira araştırmak isteyenler çoğu zaman karşıt rakamlarla
        karşılaşır: bir platform bir rakam söyler, başka bir site farklı
        bir şey gösterir, komşu "o fiyata olmaz" der. Bu rehberde{" "}
        <strong>kira verilerini nerede, nasıl okumalı</strong> ve hangi
        kaynakların ne kadar güvenilir olduğunu açıklıyoruz.
        Belirli fiyat rakamları sunmuyoruz; çünkü kira piyasası
        sürekli değişir ve tek bir verinin ömrü çok kısadır.
      </p>

      <h2>Kira Fiyatını Etkileyen Faktörler</h2>
      <p>
        İzmir'de kira ne kadar sorusunun tek bir yanıtı yoktur.
        Fiyatı belirleyen başlıca faktörler:
      </p>
      <ul>
        <li>
          <strong>İlçe ve mahalle:</strong> Merkeze, denize ve
          ulaşım akslarına yakınlık en belirleyici faktördür.
        </li>
        <li>
          <strong>Yapı yaşı ve durumu:</strong> Yeni yapı, asansör,
          otopark, güvenlik gibi özellikler kira üzerinde önemli
          etki yapar.
        </li>
        <li>
          <strong>Daire büyüklüğü ve tipi:</strong> 1+1, 2+1, 3+1
          arasındaki metrekare farkı kira aralıklarını belirler.
        </li>
        <li>
          <strong>Isınma sistemi:</strong> Doğalgaz merkezi ısıtma,
          bireysel kat kaloriferi veya kombili daire farkı kira ve
          aidatı etkiler.
        </li>
        <li>
          <strong>Okul, hastane, toplu taşıma yakınlığı:</strong>
          Aileler için erişilebilirlik kirayı yukarı iter.
        </li>
      </ul>

      <h2>Güvenilir Veri Kaynakları</h2>

      <h3>TÜİK — Konut Fiyat Endeksi</h3>
      <p>
        Türkiye İstatistik Kurumu (TÜİK), aylık bazda Konut Fiyat
        Endeksi ve Kira Fiyat Endeksi yayımlar. Bu veriler resmi
        kayıt ve anket bilgilerine dayandığından piyasa gerçeğini
        en sistematik biçimde yansıtır. Öte yandan:
      </p>
      <ul>
        <li>Şehir geneli ortalama sunar; mahalle bazı yoktur</li>
        <li>1–2 aylık gecikmeyle yayımlanır; anlık değişimi yansıtmaz</li>
        <li>Makro trend analizi için güçlüdür</li>
      </ul>

      <h3>Endeksa</h3>
      <p>
        Endeksa.com, Türkiye genelinde ilçe ve hatta mahalle bazında
        konut kira ve satış fiyat endeksleri sunar. Tapu işlemleri
        ve ilan verilerini harmanlayan platform, ilçe bazlı karşılaştırma
        için kullanışlıdır. Metodolojisi TÜİK'ten farklı olduğundan
        rakamlar farklılaşabilir; ancak trend için faydalıdır.
      </p>

      <h3>İlan Platformları — Sahibinden, Hepsiemlak vb.</h3>
      <p>
        Sahibinden.com, Hepsiemlak ve benzeri platformlardaki ilanlar
        <strong>teklif fiyatını</strong> gösterir; gerçekleşen kira
        bedelini değil. İlan fiyatı;
      </p>
      <ul>
        <li>Pazarlık payı içerebilir</li>
        <li>Uzun süre kiralanamayan pahalı ilanları içerebilir</li>
        <li>Gerçek kira piyasasını abartılı yansıtabilir</li>
      </ul>
      <p>
        Bununla birlikte bu platformlar anlık piyasa nabzını tutmak
        ve ilçe–mahalle karşılaştırması yapmak için yararlıdır.
        Filtreleme özelliklerini kullanarak ilçe, oda sayısı ve
        metrekare aralığı bazında analiz yapılabilir.
      </p>

      <h2>İzmir'de Genel Kira Coğrafyası</h2>
      <p>
        Belirli rakam vermeksizin İzmir'in genel kira coğrafyasını
        şöyle özetleyebiliriz:
      </p>
      <ul>
        <li>
          <strong>Merkezi kıyı ilçeleri</strong> (Konak/Alsancak,
          Karşıyaka): Şehrin en yüksek kira bölgeleridir; deniz
          manzarası ve merkezi konum primlenir.
        </li>
        <li>
          <strong>Köprü konumundaki ilçeler</strong> (Bornova,
          Balçova, Gaziemir): Merkeze yakın ama biraz daha uygun;
          Metro ve ESHOT erişimi güçlü.
        </li>
        <li>
          <strong>Gelişen ilçeler</strong> (Mavişehir/Çiğli, Torbalı,
          Menemen): Ulaşım akslara yakın yeni konut stoğunda kira
          artışı hızlıdır; ancak hâlâ merkezden uygun.
        </li>
        <li>
          <strong>Çevre ilçeler</strong> (Kemalpaşa, Tire, Ödemiş):
          İzmir merkezi iş yerlerine uzaklık kirayı düşürür; köy
          konutu veya küçük kentli yaşam profili.
        </li>
      </ul>

      <h2>Doğru Araştırma Yöntemi</h2>
      <ol>
        <li>
          Hedef ilçenizi belirleyin; ardından ilçe içinde mahalle bazında
          ilan sitelerinden örnek tarama yapın.
        </li>
        <li>
          Benzer büyüklük ve tipteki (örn. 2+1, 80 m², kombili) en az
          5–10 aktif ilanın ortalamasını alın.
        </li>
        <li>
          Endeksa'dan aynı ilçenin son 6 ay kira endeksini karşılaştırın.
        </li>
        <li>
          Taşınmadan önce birkaç dairede ev sahibiyle bizzat görüşün;
          piyasa pratiğini anlamak için en sağlıklı yoldur.
        </li>
        <li>
          Kira sözleşmesini imzalamadan yasal artış sınırını (güncel
          TÜFE kira sınırını) öğrenin.
        </li>
      </ol>

      <h2>Kiracı Hakları</h2>
      <p>
        Türkiye'de konut kiraları Türk Borçlar Kanunu çerçevesinde
        düzenlenir. Temel haklarınız:
      </p>
      <ul>
        <li>
          <strong>Kira artış sınırı:</strong> Bir yıldan kısa süre
          içinde belirli yasal üst sınırın üzerinde artış yapılamaz.
          Güncel oran için Borçlar Kanunu'nun ilgili maddesi esas
          alınmalıdır.
        </li>
        <li>
          <strong>Depozito:</strong> Yasal üst sınır 3 aylık kira
          bedelidir; fazlası alınamaz.
        </li>
        <li>
          <strong>Tahliye bildirimi:</strong> Ev sahibi keyfi tahliye
          yapamaz; yasal süreler ve gerekçeler Borçlar Kanunu'nda
          tanımlanmıştır.
        </li>
      </ul>
      <p>
        Hukuki danışmanlık için İzmir Barosu'nun ücretsiz danışma
        birimlerinden ya da adliye bünyesindeki hukuk yardım
        bürolarından yararlanılabilir.
      </p>
      <p>
        İzmir ilçeleri hakkında genel rehber için:{" "}
        <a href="/blog/izmir-rehberi-cografya-iklim-ilceler">
          İzmir Rehberi: Coğrafya, İklim, İlçeler, Ulaşım
        </a>
      </p>
    </>
  )
}
