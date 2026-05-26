import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "sel-taskin-oncesi-sirasinda-ne-yapmali",
  title: "Sel ve Taşkın: Önce, Sırası ve Sonrası Ne Yapmalı?",
  description:
    "Sel ve taşkın öncesinde hazırlık, sel sırasında hayatta kalma kuralları ve sel sonrası güvenlik adımları. AFAD rehberine göre taşkın afet planı.",
  date: "2026-05-25",
  category: "Afet & Hazırlık",
  summary:
    "Sel, Türkiye'nin en sık yaşanan doğal afetlerinden biridir; İzmir dahil birçok bölgede ani sel riski mevcuttur. Hazırlık aşamasında acil çanta, tahliye güzergahı ve erken uyarı sistemlerini bilmek hayat kurtarır. Sel sırasında kesinlikle sel suyu içinde yürünmemeli veya araç kullanılmamalıdır. Güncel uyarılar için AFAD (afad.gov.tr) ve meteoroloji (mgm.gov.tr) takip edilmelidir.",
  readTime: 6,
  faq: [
    {
      question: "Sel öncesinde neler yapılmalı?",
      answer:
        "Sel öncesinde ev ve iş yerinin risk bölgesinde olup olmadığını öğrenin; AFAD'ın taşkın risk haritalarını inceleyin. Bodrum kattaki değerli eşyaları üst katlara taşıyın, elektrik paneli ve sigorta kutusunu kontrol edin. Su geçirmez acil çanta (ilaç, belgeler, şarj aleti, yedek giysi) hazırlayın ve tahliye noktalarını öğrenin.",
    },
    {
      question: "Sel sırasında nerede ve nasıl durulmalı?",
      answer:
        "Sel sırasında derhal yüksek zemine çıkın. Sel suyu içinde yürümeyin; 15 cm derinliğindeki hızlı akan su bile düşürür, 30 cm su taşıtları sürükleyebilir. Elektrik tellerine, dere yataklarına ve köprülere yaklaşmayın. Bodrum kata veya zemin kata inmeyin. Sel suyu çekilene dek güvenli alanda kalın.",
    },
    {
      question: "Araçla sel suyu geçilir mi?",
      answer:
        "Hayır. Sel suyunun derinliği ve hızını dışarıdan tahmin etmek mümkün değildir; görünürde sığ bir sel suyu aracı sürükleyebilir. 60 cm su içinde büyük araçlar bile kontrol kaybedebilir. Sel suyunda araç kullanmak, Türkiye'deki sel kayıplarının önemli bir bölümünden sorumludur.",
    },
    {
      question: "Sel sonrası eve dönüş ne zaman güvenlidir?",
      answer:
        "AFAD veya ilgili kamu otoritesi eve dönüşün güvenli olduğunu açıklamadan geri dönmeyin. Eve döndüğünüzde elektriği açmadan önce bir elektrik teknisyeni kontrol etmeli; suya batan gıdaları tüketmeyin; yapısal hasar varsa binanın değerlendirilmesini bekleyin. Sel suyu, görünmez tehlikeler (kanalizasyon, kimyasal) içerebilir; elleri iyice yıkayın.",
    },
    {
      question: "Türkiye'de sel uyarısı nereden takip edilir?",
      answer:
        "Meteoroloji Genel Müdürlüğü (mgm.gov.tr) şiddetli yağış ve taşkın uyarıları yayımlar. AFAD (afad.gov.tr) ve il afet müdürlükleri tahliye ve acil durum bilgisi verir. Belediyeler ve valiliklerin sosyal medya kanalları ve e-posta/SMS sistemleri de acil bildirimlerde kullanılır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Sel, Türkiye'de her yıl can ve mal kayıplarına yol açan en
        yaygın doğal afetlerden biridir. İzmir ve çevresi, derin
        vadiler ve ani yağış potansiyeli nedeniyle taşkın riskiyle
        karşı karşıya kalabilen bölgeler arasındadır. Doğru bilgi
        ve hazırlık, bir sel anında hayat kurtarır.
      </p>

      <h2>Sel Öncesi Hazırlık</h2>

      <h3>Riskinizi Bilin</h3>
      <ul>
        <li>
          AFAD (afad.gov.tr) taşkın tehlike haritalarında bölgenizin
          risk derecesini kontrol edin.
        </li>
        <li>
          Evinizin veya iş yerinizin dere yatağına, vadi tabanına
          ya da alçak kesimlere yakınlığını değerlendirin.
        </li>
        <li>
          Belediyenizin ve muhtarlığınızın tahliye planını öğrenin;
          toplanma noktalarını not edin.
        </li>
      </ul>

      <h3>Acil Çanta Hazırlayın</h3>
      <p>
        Sel veya herhangi bir afette ilk 72 saat kendi başınıza
        yeterli olabilecek şekilde hazırlanmanız önerilir:
      </p>
      <ul>
        <li>Su (kişi başı günde en az 2 litre, 3 günlük)</li>
        <li>Temel gıda malzemeleri (konserve, kuru gıda)</li>
        <li>İlaçlar (kronik hastalık varsa yedek stok)</li>
        <li>Kimlik, sigorta poliçesi, mülk belgeleri (plastik kılıfta)</li>
        <li>Şarj aleti / güç bankası, el feneri ve yedek pil</li>
        <li>Yedek giysi ve ayakkabı</li>
        <li>Temel ilk yardım malzemeleri</li>
      </ul>

      <h3>Eve Hazırlık</h3>
      <ul>
        <li>
          Bodrum katta değerli eşya, belge ve cihazları üst katlara taşıyın.
        </li>
        <li>
          Elektrik panosunu, doğal gaz vanasını ve su vanasını nasıl
          kapatacağınızı öğrenin.
        </li>
        <li>
          Drenaj kanallarının ve olukların temiz olduğundan emin olun;
          tıkalı drenaj sel riskini artırır.
        </li>
        <li>
          Kapı ve pencere aralarını su geçirmez bant veya kum torbalarıyla
          destekleyebilirsiniz (risk durumunda önceden hazırlık).
        </li>
      </ul>

      <h2>Sel Sırasında Ne Yapılmalı?</h2>

      <h3>Hemen Yüksek Zemine Çıkın</h3>
      <p>
        Ani sel (flash flood) saniyeler içinde gelişebilir.
        Uyarı aldığınızda veya sel işareti gördüğünüzde (ani
        gürültü, suyun bulanıklaşması, su seviyesinin hızlı
        yükselmesi) derhal yüksek zemine geçin.
      </p>

      <h3>Asla Sel Suyuna Girmeyin</h3>
      <ul>
        <li>
          <strong>Yaya olarak:</strong> 15 cm derinliğindeki hızlı
          akan su yetişkin bir insanı düşürebilir.
        </li>
        <li>
          <strong>Araçla:</strong> 30 cm su araçları sürüklemeye
          başlar; 60 cm suda büyük araçlar bile kontrol kaybedebilir.
          Kapak altında ne olduğu görünmez — asla geçmeyin.
        </li>
      </ul>

      <h3>Tehlikeli Alanlardan Uzak Durun</h3>
      <ul>
        <li>Dere yatakları, vadiler, geçitler ve köprüler</li>
        <li>Elektrik hatları ve devrilmiş direklere yakın alanlar</li>
        <li>Bodrum katlar ve yeraltı geçitleri</li>
        <li>Araç altı geçitler (köprü altları)</li>
      </ul>

      <h3>Haberdar Olun</h3>
      <p>
        Radyo (pil veya el çevirme), MGM ve AFAD uygulamaları,
        valiliğin ve belediyenin sosyal medya kanalları güncel
        durum için takip edilmelidir.
      </p>

      <h2>Sel Sonrası Güvenlik</h2>
      <ul>
        <li>
          <strong>Yetkililer güvenli demeden dönmeyin.</strong> Sel
          suyu çekildikten sonra bile zemin kaygan, yapılar zayıflamış
          olabilir.
        </li>
        <li>
          <strong>Elektrik:</strong> Suya batan elektrik tesisatını
          açmadan önce yetkili elektrik teknisyenine inceletin.
        </li>
        <li>
          <strong>Gıda güvenliği:</strong> Sel suyuna temas etmiş
          hiçbir gıdayı tüketmeyin.
        </li>
        <li>
          <strong>Su:</strong> Şebeke suyunun içilebilir olduğuna
          dair resmi açıklama gelene kadar güvenilir kaynak kullanın.
        </li>
        <li>
          <strong>Hijyen:</strong> Sel suyu kanalizasyon ve kimyasal
          içerebilir; temas sonrası elleri sabun ve suyla iyice yıkayın.
        </li>
        <li>
          <strong>Yapısal kontrol:</strong> Binalarda çatlak, eğilme
          veya hasarı bir uzman değerlendirmeden binaya girmeyin.
        </li>
      </ul>

      <h2>Resmi Kaynaklar ve Uyarı Sistemleri</h2>
      <ul>
        <li>
          <strong>AFAD (afad.gov.tr):</strong> Afet yönetimi, tahliye
          planları ve taşkın risk haritaları
        </li>
        <li>
          <strong>Meteoroloji Genel Müdürlüğü (mgm.gov.tr):</strong>{" "}
          Şiddetli yağış ve fırtına uyarıları, renk kodlu alarm sistemi
        </li>
        <li>
          <strong>İzmir Valiliği ve İBB:</strong> Yerel acil durum
          duyuruları
        </li>
        <li>
          <strong>AFAD 122:</strong> Arama kurtarma ve acil müdahale
          için çağrı hattı
        </li>
      </ul>

      <p>
        Deprem hazırlığı için:{" "}
        <a href="/blog/deprem-cantasi-icinde-ne-olmali">
          Deprem Çantası: Ne Koymalı? Tam Hazırlık Listesi
        </a>
      </p>
      <p>
        İzmir iklimi ve yağış mevsimi için:{" "}
        <a href="/blog/izmir-hava-iklim-ozellikleri">
          İzmir'de Hava Nasıl? İklim Özellikleri ve Mevsimler
        </a>
      </p>
    </>
  )
}
