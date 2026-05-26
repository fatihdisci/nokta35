import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "acil-servis-mi-asm-mi",
  title: "Acil Servis mi, ASM mi? Doğru Tercih Rehberi",
  description:
    "Acil servise mi yoksa aile sağlığı merkezine mi gitmelisiniz? Hangi durumlar gerçek acil, hangileri ASM'ye yönlendirilmeli? 112 ne zaman aranır? Türkiye.",
  date: "2026-05-24",
  category: "Sağlık",
  summary:
    "Hayatı tehdit eden durumlar acil servis ve 112 içindir. Ateş, grip ve kronik hastalık takibi gibi acil olmayan durumlar için ASM hem daha hızlı hem daha uygun tercih olur. Doğru tercih sistemi de hastayı da rahatlatır.",
  readTime: 5,
  faq: [
    {
      question: "Acil servise ne zaman gidilir?",
      answer:
        "Göğüs ağrısı, nefes darlığı, inme (felç) belirtileri, bilinç kaybı, ciddi kaza ve kanaması durdurulamayan yaralar gibi hayatı tehdit eden durumlarda doğrudan acil servis veya 112 tercih edilmelidir. Bu durumlar zaman kaybına tolerans tanımaz.",
    },
    {
      question: "ASM'ye ne zaman gidilir?",
      answer:
        "Ateş, grip, öksürük, kronik hastalık (diyabet, hipertansiyon) kontrolü, reçete yenileme, aşı, gebelik izlemi ve sağlık raporu gibi acil olmayan durumlar için Aile Sağlığı Merkezi (ASM) ilk tercihiniz olmalıdır. ASM'de bekleme süresi genellikle acil servisten kısadır.",
    },
    {
      question: "112 ne zaman aranır?",
      answer:
        "112, Türkiye'nin entegre acil çağrı merkezidir; sağlık, itfaiye ve jandarma/polis hizmetlerine tek numara üzerinden ulaşılır. Kalp krizi, inme, ciddi trafik kazası, yangın veya güvenlik tehdidi gibi anlık risk barındıran her durumda 112 aranmalıdır. Hat meşgul bırakılmamalıdır.",
    },
    {
      question: "Acil servisi gereksiz kullanmanın sonuçları nelerdir?",
      answer:
        "Acil olmayan vakalar acil servise yöneldiğinde bekleme süreleri uzar ve gerçekten acil olan hastalar daha uzun süre beklemek zorunda kalır. Ayrıca SGK kapsamında acil serviste gereksiz başvurular için ek muayene katılım payı uygulanabilir. Sistem verimliliği açısından doğru noktaya başvurmak önemlidir.",
    },
    {
      question: "ALO 182 Sağlık Hattı ne işe yarar?",
      answer:
        "ALO 182, Türkiye Sağlık Bakanlığı'nın 7/24 hizmet veren ücretsiz danışma hattıdır. 'Nereye gitmeli, hangi poliklinik, hangi hastane' gibi yönlendirme sorularında, randevu sorunlarında ve genel sağlık bilgisi taleplerinde aranabilir. Acil durumlar için 112 geçerliliğini korur.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Türkiye'de her yıl milyonlarca kişi <strong>acil servis</strong>'e
        başvurur; ancak araştırmalar bu başvuruların önemli bir bölümünün
        birinci basamak sağlık merkezleri (ASM) tarafından karşılanabilecek
        durumları kapsadığını ortaya koymaktadır. Yanlış tercih hem sistemi
        zorlar hem de hastanın bekleme süresini uzatır. Bu rehberde hangi
        durumda nereye gidilmesi gerektiğini, triaj sistemini ve 112'nin
        rolünü açıklıyoruz.
      </p>
      <p>
        Türkiye sağlık sistemi hakkında daha geniş bir bakış için:{" "}
        <a href="/blog/turkiye-saglik-sistemi-basamaklar">
          Türkiye'de Sağlık Sistemi: ASM, Hastane ve Acil Servis Rehberi
        </a>
      </p>

      <h2>Acil Servise Gidilmesi Gereken Durumlar</h2>
      <p>
        Aşağıdaki durumlar hayatı tehdit edebilir ve zaman kaybına tolerans
        tanımaz. Bu durumlarda doğrudan acil servis veya <strong>112</strong>
        tercih edilmelidir:
      </p>
      <ul>
        <li>Göğüs ağrısı, nefes darlığı, kalp ritim bozukluğu şüphesi</li>
        <li>İnme (felç) belirtileri: yüz sarkması, tek taraflı kol güçsüzlüğü, ani konuşma bozukluğu</li>
        <li>Bilinç kaybı veya ciddi kafa travması</li>
        <li>Kontrolsüz kanama veya ağır yanık</li>
        <li>Ciddi trafik kazası, düşme ya da ezilme</li>
        <li>Şiddetli alerjik reaksiyon (anafilaksi): dil/dudak şişmesi, solunum güçlüğü</li>
        <li>Yüksek ateş ile birlikte boyun tutukluğu (menenjit şüphesi)</li>
        <li>Zehirlenme veya ilaç aşımı</li>
      </ul>
      <p>
        <strong>Kural:</strong> "Bu durum dakikalar içinde daha da kötüleşebilir mi?"
        sorusuna yanıtınız evetse acil servis; hayırsa ASM daha uygun tercih olacaktır.
      </p>

      <h2>ASM'ye Yönlendirilmesi Gereken Durumlar</h2>
      <p>
        <a href="/blog/aile-sagligi-merkezi-asm-nedir">
          Aile Sağlığı Merkezi (ASM)
        </a>
        , birinci basamak sağlık hizmetlerinin sunulduğu yerdir. Aşağıdaki
        durumlar için önce ASM tercih edilmelidir:
      </p>
      <ul>
        <li>Ateş, boğaz ağrısı, öksürük, nezle gibi üst solunum yolu enfeksiyonları</li>
        <li>Kronik hastalık (diyabet, hipertansiyon, astım) kontrolü ve reçete yenileme</li>
        <li>Bebek ve çocuk sağlığı izlemi, aşı</li>
        <li>Gebelik takibi</li>
        <li>Sağlık raporu düzenlenmesi</li>
        <li>Cilt döküntüsü, kulak ağrısı gibi acil olmayan semptomlar</li>
        <li>Hafif mide-bağırsak şikâyetleri</li>
      </ul>
      <p>
        ASM'de muayene genellikle daha kısa sürer ve gerekli durumlarda
        hastaneye sevk düzenlenir. Sevksiz hastaneye başvurmak hem uzun
        bekleme anlamına gelebilir hem de SGK katkı payını etkileyebilir.
      </p>

      <h2>Triaj: Acil Servislerde Önceliklendirme Sistemi</h2>
      <p>
        Acil servislerde tüm hastalar aynı anda muayene edilmez; önce{" "}
        <strong>triaj</strong> (önceliklendirme) değerlendirmesi yapılır.
        Triaj hemşiresi veya doktoru, hastanın aciliyet durumunu belirleyerek
        bir renk kodu atar:
      </p>
      <ul>
        <li><strong>Kırmızı:</strong> Hemen müdahale — hayatı tehdit eden durum</li>
        <li><strong>Sarı:</strong> Kısa sürede bakım — acil ancak stabil</li>
        <li><strong>Yeşil:</strong> Bekleme sürası — acil olmayan durum</li>
      </ul>
      <p>
        Acil olmayan şikâyetle başvuran hastalar yeşil kod alır ve
        saatlerce bekleyebilir. Oysa aynı şikâyet için ASM'de bekleme
        süresi genellikle çok daha kısadır.
      </p>

      <h2>112 ne zaman Aranır?</h2>
      <p>
        <strong>112</strong>, Türkiye'nin entegre acil çağrı hattıdır.
        Sağlık, itfaiye, jandarma ve polis acil hizmetlerine tek numara
        üzerinden ulaşılır. 112'yi aramak gereken durumlar:
      </p>
      <ul>
        <li>Hastayı hareket ettirmek sakıncalı olduğunda (kaza, omurga travması)</li>
        <li>Hastanın bilinci kapalıysa veya solunum bozuksa</li>
        <li>Kalp krizi veya inme şüphesi varsa — her dakika kritiktir</li>
        <li>Yangın veya anlık güvenlik tehdidi olduğunda</li>
      </ul>
      <p>
        112 operatörleri Türkçe yanı sıra yabancı dil desteği de sunar.
        Acil olmayan sorular için hattı meşgul etmek, gerçek acil vakalara
        ulaşımı geciktirir.
      </p>

      <h2>ALO 182 Sağlık Danışma Hattı</h2>
      <p>
        Nereye başvurulacağından emin olmadığınız durumlarda <strong>ALO 182</strong>
        (Sağlık Bakanlığı danışma hattı) aranabilir. Hat 7/24 ücretsiz hizmet
        verir; yönlendirme, randevu ve genel bilgi taleplerini karşılar. Acil
        durumlarda 182 yerine 112 tercih edilmelidir.
      </p>

      <h2>Nöbetçi Eczane ve Gece Başvurusu</h2>
      <p>
        ASM'ler mesai saatlerinde açıktır; gece veya hafta sonu acil olmayan
        bir ilaç ihtiyacı için nöbetçi eczaneler tercih edilebilir. İzmir'deki
        güncel nöbetçi eczane listesine{" "}
        <a href="/">nokta35.com</a> ana sayfasından ulaşılabilir.
      </p>
      <p>
        Nöbetçi eczane sistemi hakkında:{" "}
        <a href="/blog/nobetci-eczane-sistemi-nasil-isler">
          Nöbetçi Eczane Sistemi Nasıl İşler?
        </a>
      </p>
    </>
  )
}
