import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "e-devlet-ne-yapilir-rehber",
  title: "e-Devlet ile Neler Yapılabilir? Türkiye'nin Dijital Kapısı Rehberi",
  description:
    "e-Devlet (turkiye.gov.tr) üzerinden hangi işlemler yapılır? Giriş yöntemleri, en çok kullanılan hizmetler ve sık sorulan sorular için kapsamlı rehber.",
  date: "2026-05-25",
  category: "Resmi İşlemler",
  summary:
    "turkiye.gov.tr üzerinden 6.000'den fazla kamu hizmeti dijital ortamda sunulmaktadır. Adres teyit belgesi, SGK hizmet dökümü, araç sorgulama, adli sicil, diploma belgesi ve daha fazlası kuyruğa girmeden e-Devlet'ten alınabilir. Giriş için e-Devlet şifresi, e-imza, mobil imza veya T.C. kimlik kartı kullanılır.",
  readTime: 6,
  faq: [
    {
      question: "e-Devlet şifresi nasıl alınır?",
      answer:
        "e-Devlet şifresi PTT şubelerinden kimlik ibraz edilerek ücretsiz alınır. Şifre zarfla teslim edilir. Daha sonra e-Devlet portalından şifre değişimi yapılabilir. Alternatif giriş yöntemleri: e-imza, mobil imza veya NFC okuyuculu T.C. kimlik kartı.",
    },
    {
      question: "e-Devlet'te hangi belgeler alınabilir?",
      answer:
        "En çok kullanılan belgeler: Adres Teyit Belgesi (ikametgah), SGK Tescil ve Hizmet Dökümü, Adli Sicil Kaydı (sabıka), Diploma Belgesi Doğrulama, Askerlik Durum Belgesi, Araç Trafik Tescil Belgesi, Nüfus Kayıt Örneği. Bunların büyük çoğunluğu QR kodlu ve karekod doğrulamalı PDF formatında ücretsiz sunulur.",
    },
    {
      question: "e-Devlet belgelerinin resmi geçerliliği var mı?",
      answer:
        "Evet. e-Devlet üzerinden alınan belgeler QR kod ve elektronik imza içerdiğinden resmi geçerliliğe sahiptir. Belgeyi alan kurum, QR kodu okutarak doğrulama yapabilir. Notere onaylattırma çoğu durumda gerekmez; ancak bazı kurumlar ayrıca ıslak imzalı belge talep edebilir.",
    },
    {
      question: "e-Devlet'e cep telefonundan giriş yapılabilir mi?",
      answer:
        "Evet. Türkiye'nin resmi e-Devlet uygulaması (iOS ve Android) veya tarayıcı üzerinden mobil giriş mümkündür. Mobil imza ile giriş için operatörünüzün mobil imza hizmetine kayıtlı olmanız gerekir. SMS doğrulamalı giriş de desteklenmektedir.",
    },
    {
      question: "e-Devlet şifremi unuttum, ne yapmalıyım?",
      answer:
        "Şifrenizi turkiye.gov.tr üzerinden 'Şifremi Unuttum' seçeneğiyle sıfırlayabilirsiniz; bunun için kayıtlı telefon numaranıza SMS gönderilir. Telefonunuza erişiminiz yoksa en yakın PTT şubesine giderek kimliğinizle yeni şifre talep edebilirsiniz.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        <strong>e-Devlet (turkiye.gov.tr)</strong>, Türkiye'deki tüm kamu
        kurumlarının hizmetlerini tek çatı altında sunan devlet portalıdır.
        6.000'den fazla hizmet dijital ortama taşınmış olup çoğu belge
        ücretsiz, anında ve kuyruğa girmeden alınabilmektedir.
      </p>

      <h2>Giriş Yöntemleri</h2>
      <p>
        e-Devlet'e dört farklı yöntemle giriş yapılabilir:
      </p>
      <ul>
        <li>
          <strong>e-Devlet Şifresi:</strong> PTT şubelerinden kimlik
          ibrazıyla alınır. En yaygın yöntemdir.
        </li>
        <li>
          <strong>Mobil İmza:</strong> Türk Telekom, Vodafone veya
          Turkcell'in mobil imza hizmetine kayıtlıysanız operatör
          onayıyla giriş yapılır.
        </li>
        <li>
          <strong>e-İmza:</strong> Akıllı kart ve okuyucu gerektiren
          elektronik imza ile güvenli giriş.
        </li>
        <li>
          <strong>T.C. Kimlik Kartı:</strong> NFC destekli kart okuyucu
          ile giriş; akıllı telefon veya bilgisayar kartı okuyucusu gerekir.
        </li>
      </ul>
      <p>
        Şifre almak için en yakın PTT şubesine kimliğinizle gidin; şifre
        zarfla teslim edilir. Mobil uygulama (iOS/Android) üzerinden de
        giriş desteklenmektedir.
      </p>

      <h2>En Çok Kullanılan Hizmetler</h2>

      <h3>Kimlik ve Adres</h3>
      <ul>
        <li>
          <strong>Adres Teyit Belgesi (İkametgah):</strong>{" "}
          Anlık, ücretsiz, QR kodlu PDF. Pek çok kurum için geçerlidir.
        </li>
        <li>
          <strong>Nüfus Kayıt Örneği:</strong> Doğum, medeni hal ve
          aile bilgileri içeren resmi belge.
        </li>
        <li>
          <strong>Adres Değişikliği Bildirimi:</strong> Adres güncellemesi
          e-Devlet'ten yapılabilir.
        </li>
      </ul>

      <h3>Sosyal Güvenlik (SGK)</h3>
      <ul>
        <li>
          <strong>SGK Tescil ve Hizmet Dökümü:</strong> Tüm iş yerleri,
          sigortalılık süreleri ve prim günleri.
        </li>
        <li>
          <strong>Emeklilik Süresi Sorgulama</strong>
        </li>
        <li>
          <strong>SGK Prim Borcu Sorgulama</strong>
        </li>
      </ul>

      <h3>Hukuk ve Güvenlik</h3>
      <ul>
        <li>
          <strong>Adli Sicil Kaydı (Sabıka Kaydı):</strong> Anlık,
          ücretsiz, elektronik imzalı belge.
        </li>
        <li>
          <strong>İcra Takip Sorgulama:</strong> Üzerinizde icra takibi
          olup olmadığını kontrol edin.
        </li>
      </ul>

      <h3>Araç ve Trafik</h3>
      <ul>
        <li>
          <strong>Araç Tescil ve Muayene Sorgulama</strong>
        </li>
        <li>
          <strong>Trafik Cezası Sorgulama ve Ödeme</strong>
        </li>
        <li>
          <strong>Ehliyet Sorgulama</strong>
        </li>
      </ul>

      <h3>Eğitim ve Kariyer</h3>
      <ul>
        <li>
          <strong>Diploma Belgesi Doğrulama (YÖK):</strong> Üniversite
          diplomasının dijital doğrulaması.
        </li>
        <li>
          <strong>Öğrenci Belgesi (üniversite için):</strong> Bazı
          üniversiteler e-Devlet entegrasyonu sunar.
        </li>
      </ul>

      <h3>Askerlik</h3>
      <ul>
        <li>
          <strong>Askerlik Durum Belgesi:</strong> Muaf, tecil veya
          yapılmış gibi askerlik statünüzü belgeleyen PDF.
        </li>
      </ul>

      <h3>Vergi</h3>
      <ul>
        <li>
          <strong>Vergi Borcu Sorgulama</strong>
        </li>
        <li>
          <strong>Gelir Vergisi Beyannamesi (GİB entegrasyonu)</strong>
        </li>
      </ul>

      <h3>Tapu ve Mülk</h3>
      <ul>
        <li>
          <strong>Tapu Sorgulama:</strong> Üzerinize kayıtlı taşınmazlar
          ve tapu bilgileri.
        </li>
        <li>
          <strong>Bina Deprem Risk Raporu Sorgulama</strong>
        </li>
      </ul>

      <h2>e-Devlet Belgelerinin Geçerliliği</h2>
      <p>
        e-Devlet üzerinden alınan belgeler QR kod ve elektronik imza
        içerir; kurumlar QR'ı okutarak anlık doğrulama yapabilir.
        Bu nedenle çoğu belge için ayrıca noter onayı gerekmez.
        Bazı bankalar veya yabancı kurumlar farklı belge biçimi
        talep edebilir; işlem öncesinde ilgili kurumu arayarak
        teyit almak güvenlidir.
      </p>

      <h2>Sık Kullanılan Kısayollar</h2>
      <p>
        Portal ana sayfasında "En Çok Kullanılan Hizmetler" bölümü
        bulunur. Arama çubuğuna hizmet adını yazmak en hızlı
        yöntemdir (örn. "adres teyit", "sgk döküm", "sabıka kaydı").
      </p>

      <p>
        Adres teyit belgesi için adım adım:{" "}
        <a href="/blog/ikametgah-belgesi-nasil-alinir">
          İkametgah (Adres Teyit) Belgesi Nasıl Alınır?
        </a>
      </p>
      <p>
        SGK hizmet dökümü için:{" "}
        <a href="/blog/sgk-hizmet-dokumu-e-devlet">
          SGK Hizmet Dökümü e-Devlet'ten Nasıl Alınır?
        </a>
      </p>
    </>
  )
}
