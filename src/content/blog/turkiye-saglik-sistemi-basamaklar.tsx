import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "turkiye-saglik-sistemi-basamaklar",
  title: "Türkiye'de Sağlık Sistemi: ASM, Hastane ve Acil Servis Rehberi",
  description:
    "Türkiye'de sağlık sisteminin üç basamağı: ASM (aile hekimliği), devlet ve özel hastaneler, üniversite hastaneleri. SGK kapsamı, acil servis ve nöbetçi eczane kılavuzu.",
  date: "2026-05-24",
  category: "Sağlık",
  summary:
    "Türkiye'de sağlık hizmetleri üç basamakta sunulur: birinci basamak aile sağlığı merkezleri, ikinci basamak hastaneler ve üçüncü basamak eğitim/üniversite hastaneleridir. Sistemi doğru kullanmak hem zamanı hem katkı payını azaltır.",
  readTime: 7,
  faq: [
    {
      question: "Türkiye'de sağlık sistemi kaç basamaktan oluşur?",
      answer:
        "Türkiye sağlık sistemi üç basamaktan oluşur. Birinci basamak, aile hekimi ve aile sağlığı merkezlerini (ASM) kapsar; rutin muayene, aşı ve sevk buradan yapılır. İkinci basamak, devlet ve özel hastanelerdir. Üçüncü basamak ise eğitim ve araştırma hastaneleri ile üniversite hastaneleridir; kompleks vakalar buraya yönlendirilir.",
    },
    {
      question: "ASM nedir ve hangi durumlarda gidilir?",
      answer:
        "ASM (Aile Sağlığı Merkezi), aile hekiminin hizmet verdiği birinci basamak sağlık kuruluşudur. Ateş, nezle, kronik hastalık takibi, aşı, gebelik izlemi, sağlık raporu gibi rutin durumlar için ilk başvuru noktasıdır. Hastanenin acil servisine gitmeden önce ASM'ye başvurmak hem uygun hem daha hızlı çözüm sağlar.",
    },
    {
      question: "Acil servis mi yoksa ASM mi tercih edilmeli?",
      answer:
        "Hayatı tehdit eden durumlar (göğüs ağrısı, felç belirtisi, ciddi kaza, bilinç kaybı) için doğrudan acil servis veya 112 uygundur. Ateş, grip, kronik hastalık kontrolü gibi acil olmayan durumlar için ASM tercih edilmelidir. Acil servislerin gereksiz kullanımı hem hasta için bekleme süresini uzatır hem de sistemi zorlar.",
    },
    {
      question: "SGK hangi sağlık hizmetlerini karşılar?",
      answer:
        "Sosyal Güvenlik Kurumu (SGK), kamu hastanelerinde muayene, tetkik ve tedavi giderlerinin büyük bölümünü karşılar. Özel hastanelerde ise anlaşma durumuna göre katkı payı ödenmesi gerekebilir. Güncel katkı payı oranları ve istisna listesi için SGK'nın resmi web sitesi takip edilmelidir; bu bilgiler mevzuat değişikliğiyle güncellenebilir.",
    },
    {
      question: "Nöbetçi eczaneyi nasıl bulabilirim?",
      answer:
        "Nöbetçi eczane bilgisine birkaç yoldan ulaşılabilir: eczacı odalarının bölgesel web siteleri, Türkiye Eczacılar Birliği'nin uygulaması ve nokta35.com'un ana sayfasındaki eczane bölümü güncel nöbetçi listesini göstermektedir. Nöbetçi eczaneler günlük döner; bilgiyi o gün için kontrol etmek önerilir.",
    },
    {
      question: "112 ne zaman aranır?",
      answer:
        "112, Türkiye'nin sağlık, yangın ve güvenlik acil hattıdır. Yaşamı tehdit eden tıbbi durumlar (kalp krizi, inme, ciddi kaza, bilinç kaybı), yangın ve güvenlik tehdidi durumlarında 112 aranmalıdır. 112 operatörleri Türkçe yanı sıra yabancı dil desteği de sunmaktadır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Türkiye'de sağlık hizmetleri, Sağlık Bakanlığı koordinasyonunda
        üç basamaklı bir sistem üzerinden sunulmaktadır. Sistemi tanımak;
        doğru noktaya başvurmayı, gereksiz bekleme süresini azaltmayı ve
        SGK katkı paylarını en aza indirmeyi sağlar. Bu rehberde her
        basamağın işlevini, ne zaman nereye gidileceğini ve acil durumlarda
        izlenecek yolu açıklıyoruz.
      </p>

      <h2>Birinci Basamak: Aile Hekimliği ve ASM</h2>
      <p>
        Türkiye sağlık sisteminin ilk halkası <strong>aile hekimliği</strong>dir.
        Her vatandaş, ikamet adresine göre bir aile hekimine kayıtlıdır. Aile
        hekimleri <strong>Aile Sağlığı Merkezleri (ASM)</strong>'nde görev yapar.
      </p>
      <p>ASM'de sunulan başlıca hizmetler:</p>
      <ul>
        <li>Rutin muayene ve kronik hastalık takibi (diyabet, hipertansiyon vb.)</li>
        <li>Bebek ve çocuk sağlığı izlemi</li>
        <li>Bağışıklama (aşı) hizmetleri</li>
        <li>Gebelik ve lohusalık takibi</li>
        <li>Sağlık raporu düzenlenmesi</li>
        <li>Üst basamaklara sevk</li>
      </ul>
      <p>
        Acil olmayan sağlık sorunlarında <strong>ilk başvuru noktası
        ASM olmalıdır.</strong> Bu hem bekleme süresini azaltır hem
        de hastanelerin acil servislerinin gerçekten acil durumlar için
        uygun kalmasını sağlar.
      </p>

      <h2>İkinci Basamak: Devlet ve Özel Hastaneler</h2>
      <p>
        Aile hekiminden sevk alınan veya doğrudan başvurulabilen
        (bazı branşlarda) devlet ve özel hastaneler ikinci basamağı oluşturur.
        Genel cerrahi, dahiliye, ortopedi, kadın doğum gibi branş poliklinikleri
        bu basamakta yer alır.
      </p>
      <ul>
        <li>
          <strong>Devlet hastaneleri:</strong> SGK kapsamında tam veya kısmi
          ücretsiz hizmet. Ek ücret yalnızca yasal katkı payı kadar olabilir.
        </li>
        <li>
          <strong>Özel hastaneler:</strong> SGK ile anlaşmalı ise katkı payı
          ödenerek kullanılabilir. Anlaşmasız özel hastanelerde ücretler
          tamamen hastaya aittir.
        </li>
      </ul>

      <h2>Üçüncü Basamak: Eğitim, Araştırma ve Üniversite Hastaneleri</h2>
      <p>
        Kompleks vakalar, nadir hastalıklar ve ileri tetkik gerektiren
        durumlar için <strong>eğitim ve araştırma hastaneleri</strong> ile
        <strong>üniversite hastaneleri</strong> üçüncü basamağı oluşturur.
        Bu kurumlar hem hasta bakar hem de tıp öğrencilerini ve asistanları
        eğitir. Genellikle sevkle gidilmesi önerilir; randevusuz başvuruda
        bekleme süreleri uzun olabilir.
      </p>

      <h2>SGK Kapsamı Nasıl İşler?</h2>
      <p>
        <strong>Sosyal Güvenlik Kurumu (SGK)</strong>, zorunlu sağlık
        sigortası çerçevesinde pek çok sağlık hizmetinin bedelini karşılar.
        Temel ilkeler:
      </p>
      <ul>
        <li>Kamu hastanelerinde muayene ve tetkik büyük ölçüde SGK tarafından karşılanır</li>
        <li>Bazı hizmetlerde sabit katkı payı alınır (muayene katılım payı)</li>
        <li>Özel hastanelerde SGK anlaşma durumuna göre ek ödeme gerekebilir</li>
        <li>Belirli ilaçlar reçeteyle SGK'dan geri ödeme kapsamındadır</li>
      </ul>
      <p>
        Katkı payı oranları ve muafiyet koşulları mevzuat değişikliğiyle
        güncellenebilir. Güncel bilgi için SGK'nın resmi web sitesi
        (sgk.gov.tr) takip edilmelidir.
      </p>

      <h2>Acil Servis Ne Zaman Kullanılır?</h2>
      <p>
        Acil servisler yalnızca gerçek acil durumlar için tasarlanmıştır.
        Aşağıdaki durumlar acil servisi ya da 112'yi gerektirir:
      </p>
      <ul>
        <li>Göğüs ağrısı, nefes darlığı, kalp ritim bozukluğu şüphesi</li>
        <li>İnme (felç) belirtileri: yüz sarkması, kol güçsüzlüğü, konuşma bozukluğu</li>
        <li>Bilinç kaybı veya ciddi kafa travması</li>
        <li>Ciddi trafik kazası veya düşme</li>
        <li>Yüksek ateş ile birlikte boyun tutukluğu (menenjit şüphesi)</li>
        <li>Şiddetli alerjik reaksiyon (anafilaksi)</li>
      </ul>
      <p>
        Ateş, grip, kronik hastalık kontrolü, reçete yenileme gibi
        <em>acil olmayan</em> durumlar için ASM'ye başvurulmalıdır.
      </p>

      <h2>Nöbetçi Eczane Sistemi</h2>
      <p>
        Türkiye'de eczaneler dönüşümlü nöbet sistemiyle gece ve resmi tatil
        günlerinde de hizmet verir. Nöbetçi eczaneler bölgesel eczacı odaları
        tarafından belirlenir ve her gün değişir.
      </p>
      <p>Nöbetçi eczaneye nasıl ulaşılır:</p>
      <ul>
        <li>
          <strong>nokta35.com</strong> — İzmir için anlık nöbetçi eczane
          listesi (İZSU API verileri)
        </li>
        <li>Türkiye Eczacılar Birliği'nin resmi web sitesi ve uygulaması</li>
        <li>Bölgesel eczacı odası web siteleri</li>
      </ul>
      <p>
        Nöbetçi eczane sistemi hakkında ayrıntılı bilgi için:{" "}
        <a href="/blog/nobetci-eczane-sistemi-nasil-isler">
          Nöbetçi Eczane Sistemi Nasıl İşler?
        </a>
      </p>

      <h2>Acil Hattı: 112</h2>
      <p>
        <strong>112</strong>, Türkiye'nin entegre acil çağrı merkezidir.
        Sağlık (ambulans), itfaiye ve jandarma/polis acil hizmetlerinin
        tamamına tek numara üzerinden ulaşılır. Yabancı dil desteği
        sunulmaktadır. Acil olmayan durumlar için hattı meşgul etmemek,
        gerçek acil vakalara ulaşımı kolaylaştırır.
      </p>

      <h2>Türkiye'de Sağlık Sistemine Nasıl Kayıt Olunur?</h2>
      <p>
        Türk vatandaşları doğumdan itibaren sisteme dahildir. Yabancı
        uyruklu bireyler için kısa süreli ziyaretlerde özel sağlık sigortası
        önerilir; uzun süreli oturumda ise ikamet iznine bağlı olarak SGK
        kapsamına alınabilir. Güncel koşullar için Sağlık Bakanlığı ve SGK
        kaynaklarına başvurulmalıdır.
      </p>
    </>
  )
}
