import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "tapu-sorgusu-e-devlet",
  title: "Tapu Sorgusu e-Devlet: Parsel ve Tapu Bilgisi Nasıl Sorgulanır?",
  description:
    "e-Devlet üzerinden tapu sorgulama nasıl yapılır? Parsel sorgulama, tapu bilgisi görüntüleme, TAKBİS ve TKGM hizmetlerine erişim rehberi.",
  date: "2026-05-25",
  category: "Resmi İşlemler",
  summary:
    "Tapu ve Kadastro Genel Müdürlüğü (TKGM), parsel sorgulama ve tapu bilgisi görüntüleme hizmetlerini e-Devlet kapısı (turkiye.gov.tr) ve TAKBİS üzerinden sunmaktadır. TC kimlik numarası ile kayıtlı taşınmazları görmek veya ada/parsel numarasıyla bilgi almak mümkündür. Resmi tapu işlemleri için tapu müdürlüğüne başvuru zorunluluğu devam eder.",
  readTime: 5,
  faq: [
    {
      question: "e-Devlet'te tapu bilgisi nasıl sorgulanır?",
      answer:
        "turkiye.gov.tr adresine giriş yaptıktan sonra arama kutusuna 'tapu bilgisi' veya 'parsel sorgulama' yazın. Tapu ve Kadastro Genel Müdürlüğü'nün ilgili hizmetine girin. TC kimlik numaranıza kayıtlı taşınmazları listeleyebilir, ada ve parsel numarasıyla belirli bir taşınmazın temel bilgilerine ulaşabilirsiniz.",
    },
    {
      question: "TAKBİS nedir?",
      answer:
        "TAKBİS (Tapu ve Kadastro Bilgi Sistemi), Tapu ve Kadastro Genel Müdürlüğü'nün (TKGM) yürüttüğü elektronik tapu kayıt sistemidir. Parsel bilgileri, tapu senedi verileri ve kadastro kayıtları bu sistem üzerinde tutulmaktadır. TAKBİS üzerinden e-Devlet ile bütünleşik sorgulama yapılabilir.",
    },
    {
      question: "Parsel sorgulama ile ne bilgisi öğrenilir?",
      answer:
        "Ada ve parsel numarası girilerek ilgili taşınmazın il, ilçe, mahalle, yüzölçümü ve mülkiyet türü gibi temel kadastro bilgilerine ulaşılabilir. Üzerinde ipotek, haciz veya şerh bulunup bulunmadığı gibi detaylar resmi tapu belgesi ya da tapu müdürlüğü sorgusundan teyit edilmelidir.",
    },
    {
      question: "e-Devlet tapu sorgusunun resmi belge geçerliliği var mı?",
      answer:
        "e-Devlet üzerinden alınan tapu bilgileri bilgi amaçlıdır; resmi tapu senedi veya tapu müdürlüğü onaylı belge yerine geçmez. Satış, ipotek, miras ve hukuki işlemler için tapu müdürlüğünden resmi belge alınması gerekmektedir.",
    },
    {
      question: "Tapu müdürlüğüne randevu nasıl alınır?",
      answer:
        "Tapu ve Kadastro Genel Müdürlüğü'nün ALO 181 hattından veya TKGM'nin resmi web sitesi (tkgm.gov.tr) üzerinden online randevu alınabilir. e-Devlet kapısı üzerinden de randevu sistemi erişilebilir durumdadır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Bir taşınmazın kimin adına kayıtlı olduğunu, üzerinde
        ipotek veya şerh bulunup bulunmadığını merak ediyorsanız{" "}
        <strong>e-Devlet</strong> ve{" "}
        <strong>TAKBİS</strong> üzerinden temel bilgilere
        hızlıca ulaşabilirsiniz. Ancak resmi işlemler için
        tapu müdürlüğü başvurusu her zaman gereklidir.
      </p>

      <h2>e-Devlet Üzerinden Tapu Sorgulama</h2>

      <h3>Adım Adım Kılavuz</h3>
      <ol>
        <li>
          <strong>turkiye.gov.tr</strong> adresine e-Devlet şifresi,
          mobil imza veya e-imza ile giriş yapın.
        </li>
        <li>
          Arama kutusuna <em>"tapu bilgisi sorgulama"</em> veya{" "}
          <em>"parsel sorgulama"</em> yazın.
        </li>
        <li>
          <strong>Tapu ve Kadastro Genel Müdürlüğü</strong>{" "}
          hizmetleri arasından ilgili işlemi seçin.
        </li>
        <li>
          İki seçenek sunulur:
          <ul>
            <li>
              <strong>TC kimlik numaranıza kayıtlı taşınmazlar:</strong>{" "}
              Sisteme bağlı taşınmazların listesi ve özet bilgileri.
            </li>
            <li>
              <strong>Ada / parsel bazlı sorgulama:</strong> İl, ilçe,
              mahalle ve ada/parsel numarasını girerek belirli bir
              taşınmazın kadastro bilgilerine ulaşma.
            </li>
          </ul>
        </li>
      </ol>

      <h2>TAKBİS Nedir, Ne İşe Yarar?</h2>
      <p>
        <strong>TAKBİS (Tapu ve Kadastro Bilgi Sistemi)</strong>,
        TKGM'nin tüm tapu ve kadastro kayıtlarını dijital ortamda
        yönettiği ulusal sistemdir. 1990'ların sonundan itibaren
        geliştirilen sistem, bugün tüm tapu müdürlüklerini kapsayan
        bütünleşik bir kayıt altyapısı sunmaktadır.
      </p>
      <p>
        e-Devlet üzerindeki tapu sorgulamaları arka planda
        TAKBİS'e bağlanarak çalışır. TKGM'nin parsel bazlı
        harita servisi olan <strong>parselsorgu.tkgm.gov.tr</strong>{" "}
        adresinden kadastro parsellerini harita üzerinde görselleştirmek
        de mümkündür.
      </p>

      <h2>Parsel Sorgulama ile Öğrenilebilecek Bilgiler</h2>
      <ul>
        <li>Taşınmazın il, ilçe, mahalle/köy bilgisi</li>
        <li>Ada ve parsel numarası, yüzölçümü</li>
        <li>Mülkiyet türü (şahıs, müşterek, hisseli vb.)</li>
        <li>Nitelik (arsa, tarla, bina vb.)</li>
        <li>
          İpotek, haciz veya şerh bilgisi — bu bilgilerin
          eksiksiz teyidi için tapu müdürlüğü kaydı esas alınmalıdır
        </li>
      </ul>

      <h2>e-Devlet Tapu Sorgusunun Sınırlılıkları</h2>
      <p>
        e-Devlet tapu sorgusunun bazı önemli sınırları vardır:
      </p>
      <ul>
        <li>
          <strong>Resmi belge değildir.</strong> Satış, ipotek,
          miras paylaşımı ve hukuki süreçlerde e-Devlet çıktısı
          kabul edilmez; tapu müdürlüğünden onaylı belge gerekir.
        </li>
        <li>
          <strong>Gerçek zamanlı olmayabilir.</strong> Veriler
          TAKBİS sisteminden beslenir; son yapılan işlem henüz
          sisteme yansımamış olabilir.
        </li>
        <li>
          <strong>Detaylı hukuki bilgi sunmaz.</strong> Kat irtifakı,
          irtifak hakları, beyanlar ve özel notlar gibi bilgiler
          için tapu müdürlüğü kaydı incelenmelidir.
        </li>
      </ul>

      <h2>Resmi Tapu İşlemleri İçin Tapu Müdürlüğü</h2>
      <p>
        Satış, bağış, ipotek kurma/kaldırma, miras tescili,
        kat mülkiyeti tesisi gibi işlemler için ilgili tapu
        müdürlüğüne başvuru zorunludur.
      </p>
      <p>
        Randevu almak için:
      </p>
      <ul>
        <li>
          <strong>ALO 181</strong> — TKGM çağrı merkezi
        </li>
        <li>
          <strong>tkgm.gov.tr</strong> — online randevu sistemi
        </li>
        <li>
          <strong>e-Devlet</strong> → Tapu Randevu Sistemi
        </li>
      </ul>

      <h2>Parsel Haritası: Görsel Sorgulama</h2>
      <p>
        Kadastro parsellerini harita üzerinde görmek için
        TKGM'nin <strong>parselsorgu.tkgm.gov.tr</strong>{" "}
        hizmetinden yararlanabilirsiniz. Adres veya ada/parsel
        numarasıyla arama yapıldığında parsel sınırları
        harita üzerinde gösterilir.
      </p>

      <p>
        e-Devlet şifresi almak ve diğer e-Devlet işlemleri için:{" "}
        <a href="/blog/e-devlet-sifre-nasil-alinir">
          e-Devlet Şifresi Nasıl Alınır? Adım Adım Kılavuz
        </a>
      </p>
      <p>
        Adres değişikliği bildirimi için:{" "}
        <a href="/blog/adres-degisikligi-bildirimi">
          Adres Değişikliği Bildirimi: Taşınınca Ne Yapmalısınız?
        </a>
      </p>
    </>
  )
}
