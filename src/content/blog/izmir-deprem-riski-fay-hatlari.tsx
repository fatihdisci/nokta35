import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-deprem-riski-fay-hatlari",
  title: "İzmir'de Deprem Riski: Fay Hatları, Tarihsel Depremler ve Hazırlık",
  description:
    "İzmir'in deprem riski neden yüksek? Ege açık deniz fayları, 2020 Sisam depremi, DASK zorunlu deprem sigortası ve İzmir için depreme hazırlık rehberi.",
  date: "2026-05-24",
  category: "İzmir",
  summary:
    "İzmir, Ege'nin aktif tektonik yapısı nedeniyle Türkiye'nin yüksek deprem riski taşıyan kentlerinden biridir. 30 Ekim 2020 depremi bu gerçeği bir kez daha ortaya koydu. Hazırlık yaşam kurtarır.",
  readTime: 7,
  faq: [
    {
      question: "İzmir neden deprem açısından riskli bir şehirdir?",
      answer:
        "İzmir, Ege'nin yoğun tektonik aktivite gösteren açık deniz fay sistemleri üzerinde yer alır. Anadolu levhasının batıya doğru hareketi, Ege bölgesinde çok sayıda aktif fayın oluşmasına neden olmuştur. Bu faylar üzerinde tarih boyunca büyük depremler yaşanmış; İzmir ve çevresi bu aktiviteden en çok etkilenen bölgeler arasındadır.",
    },
    {
      question: "2020 İzmir depremi nasıl gerçekleşti?",
      answer:
        "30 Ekim 2020'de Sisam Adası (Yunanistan) açıklarında 6.9-7.0 büyüklüğünde bir deprem meydana geldi. Tsunami de oluşturan bu depremde İzmir'de 114 kişi hayatını kaybetti ve binlerce kişi yaralandı. Seferihisar, Bayraklı ve Bornova ilçelerinde çok sayıda bina yıkıldı. Deprem, İzmir'in yapı stoğu ve afet hazırlığı konusundaki sorunları bir kez daha gündeme getirdi.",
    },
    {
      question: "DASK nedir ve zorunlu mu?",
      answer:
        "DASK (Doğal Afet Sigortaları Kurumu), Türkiye'de zorunlu deprem sigortasını yürüten kurumdur. Konut sahiplerinin yaptırmak zorunda olduğu zorunlu deprem sigortası (ZDS), binanın hasar görmesi durumunda belirli bir tazminat sağlar. Sigortasız konutlar için tapu işlemleri yapılamaz; güncel tazminat limitleri için DASK'ın resmi web sitesi takip edilmelidir.",
    },
    {
      question: "Türkiye'de deprem risk haritası nereden görüntülenebilir?",
      answer:
        "AFAD (Afet ve Acil Durum Yönetimi Başkanlığı), Türkiye Deprem Tehlike Haritası'nı düzenli olarak günceller. 2018 yılında yayımlanan güncel harita, bölgesel ivme değerlerini göstermektedir. AFAD'ın resmi web sitesinden görüntülenebilir.",
    },
    {
      question: "İzmir'de depreme karşı ne yapılmalı?",
      answer:
        "İzmir'de yaşayanlar için temel hazırlık adımları: deprem çantası hazırlamak, aile tahliye planı oluşturmak, konutu depreme dayanıklılık açısından uzman mühendise değerlendirtmek, toplanma alanını öğrenmek ve DASK sigortasını yaptırmaktır. Detaylı rehber için 'Depreme Hazırlık' yazımızı inceleyebilirsiniz.",
    },
    {
      question: "İzmir'deki toplanma alanları nerede?",
      answer:
        "AFAD ve İzmir Büyükşehir Belediyesi tarafından belirlenen toplanma alanları, park, meydan ve açık spor tesislerinde konuşlandırılmaktadır. Bulunduğunuz mahallenin toplanma alanını e-Devlet üzerinden veya muhtarlık aracılığıyla öğrenebilirsiniz. nokta35.com haritasında da toplanma alanı konumları görüntülenebilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        İzmir, Türkiye'nin en büyük üçüncü kenti olmasının yanı sıra
        deprem açısından yüksek risk taşıyan bölgeler arasında yer alır.
        30 Ekim 2020'de yaşanan ve 114 can kaybına neden olan deprem, bu
        riski somut biçimde ortaya koydu. Bu yazıda İzmir'in deprem riskinin
        jeolojik nedenlerini, tarihsel depremleri ve hazırlık için atılabilecek
        somut adımları ele alıyoruz.
      </p>
      <p>
        Depreme hazırlık hakkında kapsamlı bilgi için:{" "}
        <a href="/blog/depreme-hazirlik-rehberi">
          Depreme Hazırlık: Ev, Çanta, Tahliye Planı
        </a>
      </p>

      <h2>İzmir Neden Yüksek Deprem Riskine Sahip?</h2>
      <p>
        Türkiye, Avrasya, Afrika ve Arabistan levhalarının birbirine yakın
        olduğu tektonik açıdan son derece aktif bir bölgede yer alır. Anadolu
        levhası, bu sıkışma sonucunda batıya doğru hareket etmekte ve Ege
        denizinde yayılmaya (açılmaya) neden olmaktadır. Bu süreç, Ege'de çok
        sayıda kuzey-güney doğrultulu normal fayın oluşmasını sağlamıştır.
      </p>
      <p>
        İzmir ve çevresi, bu fay sistemi içinde özellikle aktif bir bölgede
        yer alır. AFAD'ın Türkiye Deprem Tehlike Haritası, İzmir genelini
        yüksek ivme beklenen alanlar kapsamında göstermektedir.
      </p>

      <h2>30 Ekim 2020 Depremi</h2>
      <p>
        Türkiye ile Yunanistan arasındaki Ege Denizi'nde, Sisam Adası
        (Yunanistan) açıklarında, 30 Ekim 2020 tarihinde yerel saatle
        14:51'de 6.9–7.0 büyüklüğünde bir deprem meydana geldi. Deprem
        aynı zamanda kıyılarda küçük çaplı bir tsunamiye neden oldu.
      </p>
      <p>
        İzmir'deki etkiler son derece ağır oldu:
      </p>
      <ul>
        <li>114 kişi hayatını kaybetti (tamamına yakını İzmir'de)</li>
        <li>1.000'i aşkın kişi yaralandı</li>
        <li>Bayraklı başta olmak üzere Bornova ve Seferihisar'da çok sayıda bina yıkıldı veya ağır hasar gördü</li>
        <li>Onlarca apartman çöktü; enkaz çalışmaları günlerce sürdü</li>
      </ul>
      <p>
        Bu deprem; kaçak yapılaşma, zemin sıvılaşması ve yetersiz denetim
        gibi yapı güvenliği sorunlarını yeniden gündeme getirdi.
      </p>

      <h2>Tarihsel Depremler: İzmir Her Dönemde Etkilendi</h2>
      <p>
        İzmir çevresi, tarih boyunca büyük depremlerle sarsılmıştır.
        Öne çıkan tarihsel depremlerden bazıları:
      </p>
      <ul>
        <li><strong>1688 İzmir Depremi:</strong> Büyük can ve mal kaybına neden olmuştur</li>
        <li><strong>1778 İzmir Depremi:</strong> Kenti büyük ölçüde tahrip etmiştir</li>
        <li><strong>1939 Dikili Depremi</strong> ve bölgedeki çeşitli orta büyüklüklü depremler</li>
        <li><strong>2020 Sisam Depremi:</strong> Modern dönemin en yıkıcı depremi</li>
      </ul>
      <p>
        Tarihsel kayıtlar, İzmir bölgesinin periyodik büyük depremler ürettiğini
        açıkça ortaya koymaktadır.
      </p>

      <h2>Zemin Sıvılaşması: İzmir'e Özgü Risk</h2>
      <p>
        İzmir körfezinin kıyı şeridinde, özellikle dolgu alanlarında ve alüvyon
        zemine sahip mahallelerde <strong>zemin sıvılaşması</strong> riski
        yüksektir. Sıvılaşma; deprem sırasında gevşek ve suya doymuş zeminlerin
        sıvı gibi davranması olgusudur. Bu, temelli binaların yan yatmasına veya
        batmasına neden olabilir.
      </p>
      <p>
        2020 depreminde en fazla hasar gören Bayraklı ilçesinin büyük
        bölümünün dolgu ve alüvyon zemin üzerine kurulu olduğu bilinmektedir.
        Konutunuzun zemin koşullarını öğrenmek için yerel belediyenin imar
        müdürlüğüne başvurulabilir.
      </p>

      <h2>DASK: Zorunlu Deprem Sigortası</h2>
      <p>
        Türkiye'de konut sahipleri için <strong>DASK (Doğal Afet Sigortaları
        Kurumu)</strong> tarafından sunulan Zorunlu Deprem Sigortası (ZDS)
        yaptırmak yasal zorunluluktur. Sigortasız konuta tapu işlemi yapılamaz.
      </p>
      <ul>
        <li>Prim, konutun metrekaresi, inşaat tarzı ve bulunduğu deprem bölgesine göre değişir</li>
        <li>Tazminat limitleri DASK tarafından düzenli olarak güncellenir</li>
        <li>Deprem sonucu oluşan yangın, patlama ve tsunami hasarlarını da kapsar</li>
        <li>Güncel tarife ve tazminat limitleri için DASK'ın resmi web sitesi takip edilmelidir</li>
      </ul>

      <h2>Konutunuzu Değerlendirin</h2>
      <p>
        İzmir'de yaşayanlar için en önemli adımlardan biri, konutun depreme
        dayanıklılığını bir inşaat veya yapı mühendisine değerlendirtmektir.
        Özellikle 1999 öncesi yapılan binaların mevcut deprem yönetmeliğine
        göre güçlendirilmesi gerekebilir.
      </p>
      <ul>
        <li>Binanın inşaat yılı ve kullanılan yönetmeliği sorgulayın</li>
        <li>Zemin etüdü raporunu belediyeden talep edebilirsiniz</li>
        <li>Kentsel dönüşüm kapsamında güçlendirme desteğinden yararlanmak için müteahhit ve belediye ile görüşün</li>
      </ul>

      <h2>Toplanma Alanınızı Öğrenin</h2>
      <p>
        Deprem anında ve sonrasında kullanılacak toplanma alanları AFAD ve
        belediyeler tarafından park, meydan ve açık alanlarda belirlenir.
        Toplanma alanınızı öğrenmek için:
      </p>
      <ul>
        <li>e-Devlet üzerinden "Afet Toplanma Alanı Sorgulama" hizmeti</li>
        <li>Mahalle muhtarlığı</li>
        <li><a href="/">nokta35.com</a> haritasında toplanma alanı katmanı</li>
      </ul>
      <p>
        Deprem çantası ve aile tahliye planı için:{" "}
        <a href="/blog/deprem-cantasi-icinde-ne-olmali">
          Deprem Çantası: İçinde Ne Olmalı?
        </a>
      </p>
    </>
  )
}
