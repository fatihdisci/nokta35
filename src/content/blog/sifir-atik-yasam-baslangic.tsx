import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "sifir-atik-yasam-baslangic",
  title: "Sıfır Atık Yaşam: Başlamak İçin 10 Pratik Adım",
  description:
    "Sıfır atık yaşam nedir, nasıl başlanır? Alışveriş çantasından kompostlamaya, tek kullanımlık plastikten doldurulabilir ürünlere — somut 10 adımla sıfır.",
  date: "2026-05-24",
  category: "Sürdürülebilir Yaşam",
  summary:
    "Sıfır atık yaşam; çöpe giden malzeme miktarını en aza indirmeyi hedefler. Tam anlamıyla sıfır zor olsa da 5 temel ilke (reddet, azalt, yeniden kullan, geri dönüştür, kompostla) ile ciddi azaltım mümkündür.",
  readTime: 6,
  faq: [
    {
      question: "Sıfır atık yaşam nedir?",
      answer:
        "Sıfır atık (zero waste), tüm ürünlerin tasarımlanıp tüketildiği döngüsel bir ekonomi hedefini tanımlayan kavramdır. Bireysel düzeyde ise çöpe giden malzeme miktarını mümkün olduğunca azaltmak anlamına gelir. Bea Johnson'ın öncülük ettiği modern sıfır atık hareketi '5R' ilkesine dayanır: Refuse (reddet), Reduce (azalt), Reuse (yeniden kullan), Recycle (geri dönüştür), Rot (kompostla).",
    },
    {
      question: "Sıfır atık yaşama başlamak için ne gerekir?",
      answer:
        "Başlamak için büyük yatırımlar gerekmez. Evdeki çöp kutusunu inceleyerek en çok neleri attığınızı gözlemlemek iyi bir başlangıç noktasıdır. Tek kullanımlık plastikten vazgeçmek, bez çanta ve yeniden kullanılabilir su matarası edinmek ilk somut adımlardır.",
    },
    {
      question: "Türkiye'de geri dönüşüm nasıl yapılır?",
      answer:
        "Türkiye'de kağıt, cam, metal ve plastik için mavi renkli geri dönüşüm kutuları yaygınlaşmaktadır. Belediyeler ayrı toplama hizmetleri sunar; ancak kapsam ilçeye göre farklılık gösterir. Elektronik atıklar için yetkili toplama noktaları, tehlikeli atıklar (pil, ilaç) için ise özel kutular kullanılmalıdır.",
    },
    {
      question: "Kompost evde yapılabilir mi?",
      answer:
        "Evet. Sebze-meyve kabukları, kahve telvesi ve yumurta kabuğu gibi organik atıklar küçük bir kompost kabında ya da balkon komposterinde kolaylıkla işlenebilir. Elde edilen kompost balkon bitkilerini gübrelemek için kullanılabilir. Koku ve sinek sorununu önlemek için kuru malzeme (karton, yaprak) ile ıslak malzemeyi dengelemek önemlidir.",
    },
    {
      question: "Sıfır atık yaşam pahalı mı?",
      answer:
        "Tam tersine, uzun vadede daha ekonomiktir. Tek kullanımlık ürünler yerine kalıcı alternatiflere yapılan başlangıç yatırımı zamanla karşınıza çıkar. Daha az satın almak, ikinci el tercih etmek ve gıda israfını azaltmak doğrudan hane halkı bütçesine katkı sağlar.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Her yıl küresel ölçekte milyarlarca ton atık üretilmekte; bunun
        önemli bir bölümü düzenli depolama alanlarına ya da doğaya karışmaktadır.
        <strong> Sıfır atık yaşam</strong>, bu döngüyü kırmaya çalışan
        bir yaklaşımdır. Tam anlamıyla "sıfır" çöp hedeflemek gerçekçi
        olmasa da bilinçli adımlarla atık miktarını büyük ölçüde azaltmak
        mümkündür. İşte başlangıç için 10 somut adım.
      </p>
      <p>
        Sürdürülebilir yaşamın genel çerçevesi için:{" "}
        <a href="/blog/surdurulebilir-yasam-nedir-rehber">
          Sürdürülebilir Yaşam Nedir? Evden Başlamak İçin Kılavuz
        </a>
      </p>

      <h2>5R: Sıfır Atığın Temel İlkeleri</h2>
      <p>
        Modern sıfır atık hareketi beş ilkeye dayanır ve bu sırayla
        uygulanması önerilir:
      </p>
      <ol>
        <li><strong>Refuse (Reddet):</strong> İhtiyaç duymadıklarını almayı reddet — promosyon ürünleri, tek kullanımlık plastik, gereksiz ambalaj</li>
        <li><strong>Reduce (Azalt):</strong> Tüketimi genel olarak azalt; daha az satın al, daha uzun kullan</li>
        <li><strong>Reuse (Yeniden Kullan):</strong> Tek kullanımlık yerine yeniden kullanılabilir ürün seç</li>
        <li><strong>Recycle (Geri Dönüştür):</strong> Kaçınılamayan atıkları doğru kutuya at</li>
        <li><strong>Rot (Kompostla):</strong> Organik atıkları çöpe değil kompost kutusuna ver</li>
      </ol>

      <h2>10 Başlangıç Adımı</h2>

      <h3>1. Çöpünüzü Analiz Edin</h3>
      <p>
        Bir hafta boyunca evdeki çöp kutusunu gözlemleyin: en çok ne
        atıyorsunuz? Plastik ambalaj, gıda atığı, kağıt mı? En büyük
        kaynaktan başlamak ilerlemeyi en hızlı sağlar.
      </p>

      <h3>2. Bez Çanta ve Su Matarası Edinin</h3>
      <p>
        Tek kullanımlık plastik torbalar ve pet şişelerin yerini alan
        bez alışveriş çantası ve yeniden doldurulabilir su matarası,
        sıfır atık yolculuğunun en kolay ilk adımıdır. Yanınızda bulundurmak
        alışkanlık meselesidir.
      </p>

      <h3>3. Katı Sabun ve Şampuan Barı Deneyin</h3>
      <p>
        Plastik şişeli sıvı sabun ve şampuan yerine katı bar formatları
        kullanmak, plastik ambalajı ortadan kaldırır. Ömürleri de
        genellikle daha uzundur.
      </p>

      <h3>4. Doldurulabilir Ürünleri Tercih Edin</h3>
      <p>
        Deterjan, yumuşatıcı ve temizlik ürünleri için doldurma istasyonu
        veya konsantre ürün sunan markalar giderek yaygınlaşmaktadır.
        Eski şişeyi doldurmak, yeni plastik almayı önler.
      </p>

      <h3>5. Kahve ve Çay Alışkanlığını Gözden Geçirin</h3>
      <p>
        Kapsüllü kahve ve tek kullanımlık bardaklar önemli atık kaynakları
        arasındadır. Yeniden kullanılabilir kahve filtresi, çay süzgeci
        ve termos tercih etmek bu atığı ortadan kaldırır.
      </p>

      <h3>6. Gıda İsrafını Azaltın</h3>
      <p>
        Ev çöpünün büyük bölümü gıdadan oluşur. Haftalık yemek planı
        yapmak, listeyle alışveriş etmek ve buzdolabını "ilk giren ilk
        çıkar" düzeninde tutmak israfı belirgin biçimde azaltır.
      </p>

      <h3>7. Ayrı Geri Dönüşüm Kutusu Koyun</h3>
      <p>
        Kağıt, cam, metal ve plastik için ayrı kutular oluşturun. Türkiye'deki
        mavi geri dönüşüm kutuları kağıt, plastik ve metali kabul eder.
        Cam için ayrı cam kutuları bulunmaktadır. Pil ve elektronik atıklar
        için yetkili toplama noktalarını kullanın.
      </p>

      <h3>8. Organik Atıkları Kompostlayın</h3>
      <p>
        Sebze-meyve kabukları, kahve telvesi ve yumurta kabuğu; küçük
        bir balkon komposterinde ya da kapalı kompost kabında işlenebilir.
        Elde edilen humus balkon bitkilerinize destek olur. Koku oluşmaması
        için ıslak ve kuru malzemeyi dengelemek yeterlidir.
      </p>

      <h3>9. İkinci El Tercih Edin</h3>
      <p>
        Giyim, mobilya, kitap ve elektronik için ikinci el alışveriş;
        hem ekonomiktir hem de yeni üretim gerektirmez. İkinci el
        pazar ve platformları Türkiye'de giderek yaygınlaşmaktadır.
      </p>

      <h3>10. Onarın, Atmayın</h3>
      <p>
        Bozulan bir ürünü tamir etmek, yenisini üretmek için harcanan
        enerji ve hammaddeyi korur. Terzi, tamirci ve elektronik
        servislerinden faydalanmak hem tasarruf hem de atık azaltımı
        anlamına gelir.
      </p>

      <h2>Beklentileri Gerçekçi Tutun</h2>
      <p>
        Sıfır atık bir hedef değil, bir yönelimdir. Her adım, hiç
        adım atmamaktan daha değerlidir. Mükemmeliyetçilik yerine
        sürdürülebilirliği hedefleyin: küçük ve tutarlı alışkanlıklar,
        büyük ama kısa ömürlü çabaların önüne geçer.
      </p>
      <p>
        Karbon ayak izi ve iklim bağlantısı için:{" "}
        <a href="/blog/karbon-ayak-izi-nedir-hesaplanir">
          Karbon Ayak İzi Nedir? Nasıl Hesaplanır ve Azaltılır?
        </a>
      </p>
    </>
  )
}
