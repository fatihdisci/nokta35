import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "izmir-geri-donusum-elektronik-atik",
  title: "İzmir Geri Dönüşüm Noktaları ve Elektronik Atık Toplama Rehberi",
  description:
    "İzmir'de geri dönüşüm kutuları nerede, hangi atık nereye atılır? Elektronik atık (e-atık), pil, ilaç, kızartma yağı toplama noktaları ve teslim yöntemleri.",
  date: "2026-05-24",
  category: "Sürdürülebilirlik",
  summary:
    "İzmir'de mavi geri dönüşüm kutuları kağıt-plastik-metal için, cam kumbaraları cam için kullanılır. Elektronik atık, pil, ilaç ve kızartma yağı için ayrı kanallar vardır; bu atıklar normal çöpe atılmamalıdır. Konumlar belediye ve TAP (Taşınabilir Pil Üreticileri ve İthalatçıları Derneği) kanallarından sorgulanmalıdır.",
  readTime: 5,
  faq: [
    {
      question: "İzmir'de geri dönüşüm kutuları hangi atıkları kabul eder?",
      answer:
        "İzmir'deki mavi renkli geri dönüşüm kutuları genellikle kağıt, karton, plastik şişe, metal kutu ve içecek kartonu (tetra pak) gibi ambalaj atıklarını kabul eder. Cam ambalajlar için ayrı cam kumbaraları kullanılır. Organik atık, tekstil, elektronik atık ve pil bu kutulara atılmamalıdır.",
    },
    {
      question: "Elektronik atık (e-atık) nereye verilir?",
      answer:
        "Elektronik atıklar (bilgisayar, telefon, beyaz eşya, küçük ev aleti) belediye e-atık toplama merkezlerine, yetkili özel atık toplayıcılarına ya da bazı zincir mağazaların (elektronik market) iade noktalarına teslim edilmelidir. Türkiye'de e-atıkların evsel çöpe atılması Elektrikli ve Elektronik Eşyalarda Bazı Zararlı Maddelerin Kullanımının Sınırlandırılmasına Dair Yönetmelik kapsamında yasaktır.",
    },
    {
      question: "Atık pil nereye atılır?",
      answer:
        "Türkiye'de atık piller TAP (Taşınabilir Pil Üreticileri ve İthalatçıları Derneği) tarafından koordine edilen pil toplama noktalarına atılır. Bu noktalar okul, market, eczane, belediye binası gibi yerlerde yaygın olarak bulunur. Pilin normal çöpe veya geri dönüşüm kutusuna atılması toprak ve su kirliliğine yol açar.",
    },
    {
      question: "Kullanılmış kızartma yağı nereye verilir?",
      answer:
        "Kullanılmış bitki yağları lavaboya dökülmemelidir; kanalizasyon tıkanıklığına ve atık su arıtma yükünün artmasına yol açar. Belediyelerin ve lisanslı toplama firmalarının kızartma yağı toplama kampanyaları kapsamında özel kaplara biriktirilerek teslim edilmelidir. Bazı belediyeler topladıkları yağ karşılığında promosyon ya da çekiliş kampanyaları düzenler.",
    },
    {
      question: "Son kullanma tarihi geçmiş ilaçlar nereye verilir?",
      answer:
        "Tarihi geçmiş ya da kullanılmayan ilaçlar evsel çöpe ya da tuvalete atılmamalıdır. Eczanelerde yer alan ilaç atık kumbaralarına teslim edilmelidir. İlaçlar lağım sularına karıştığında su ekosistemini bozar ve antibiyotik direncinin yayılmasına katkı sağlayabilir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Çöp kutusuna attığınız her atık aslında "çöp" değildir. Doğru
        ayrıştırıldığında kağıt, cam, plastik ve metal yeniden hammaddeye
        dönüşür; pil ve elektronik atık ise toprağı ve suyu kirletmeden
        bertaraf edilir. Bu yazıda İzmir'deki <strong>geri dönüşüm
        noktalarını ve elektronik atık dahil özel atık kategorilerini</strong>{" "}
        nereye, nasıl teslim edebileceğinizi anlatıyoruz.
      </p>
      <p>
        Sıfır atık yaşamın temel ilkeleri için:{" "}
        <a href="/blog/sifir-atik-yasam-baslangic">
          Sıfır Atık Yaşam: Başlamak İçin 10 Pratik Adım
        </a>
      </p>

      <h2>Standart Geri Dönüşüm (Mavi Kutu)</h2>
      <p>
        İzmir'de yaygın olarak görülen <strong>mavi renkli geri
        dönüşüm kutuları</strong>, ambalaj atığı toplamak için
        konumlandırılmıştır. Kabul edilen atıklar genel olarak:
      </p>
      <ul>
        <li>Kağıt ve karton (gazete, dergi, ambalaj kartonu)</li>
        <li>Plastik şişeler ve plastik ambalajlar</li>
        <li>Metal içecek kutuları, konserve kutuları</li>
        <li>İçecek kartonları (tetra pak)</li>
      </ul>
      <p>
        Pratik kural: Atılacak ambalaj <strong>temiz ve kuru</strong>
        olmalıdır. Yağlı pizza kutusu ya da içi dolu yoğurt kabı geri
        dönüşüm sürecini bozar; bu tür atıklar normal çöpe atılmalıdır.
      </p>

      <h2>Cam Kumbaraları</h2>
      <p>
        Cam ambalajlar (şişe, kavanoz) mavi kutuya değil ayrı{" "}
        <strong>cam kumbaralarına</strong> atılmalıdır. Cam ayrı
        toplandığında daha düşük enerji ile yeniden işlenebilir. Cam
        kumbaraları çoğunlukla apartman önleri, market yakınları ve
        meydanlarda bulunur.
      </p>
      <p>
        Pencere camı, ayna, ampul ve seramik cam kumbarasına
        atılmamalıdır; bunlar farklı erime sıcaklığına sahip olduğundan
        geri dönüşüm sürecini bozar.
      </p>

      <h2>Elektronik Atık (E-Atık)</h2>
      <p>
        Elektrikli ve elektronik atıkların (E-atık) içinde kurşun,
        cıva, kadmiyum gibi ağır metaller bulunur. Bu atıklar evsel
        çöpe atılırsa toprak ve yer altı suyunu kirletir.
      </p>
      <p>
        İzmir'de e-atıkları teslim edebileceğiniz başlıca kanallar:
      </p>
      <ul>
        <li>
          <strong>Belediye e-atık toplama merkezleri:</strong> İlçe
          belediyelerinin bir kısmı e-atık toplama hizmeti sunar;
          bazı belediyeler kapıdan ücretsiz toplama da yapar.
        </li>
        <li>
          <strong>Yetkili toplayıcılar:</strong> Çevre, Şehircilik
          ve İklim Değişikliği Bakanlığı lisanslı atık toplama
          firmaları büyük hacimli atıklar için tercih edilebilir.
        </li>
        <li>
          <strong>Zincir elektronik mağazaları:</strong> Bazı büyük
          mağazalar kullanılmış küçük ev aleti veya cep telefonu
          iadesi için kutu bulundurur.
        </li>
        <li>
          <strong>Mobil toplama kampanyaları:</strong> Belediyelerin
          dönemsel düzenlediği e-atık kampanyaları sosyal medya
          duyurularıyla ilan edilir.
        </li>
      </ul>

      <h2>Atık Pil</h2>
      <p>
        Türkiye'de atık piller, <strong>TAP (Taşınabilir Pil
        Üreticileri ve İthalatçıları Derneği)</strong> koordinasyonunda
        toplanır. Pil toplama kutuları:
      </p>
      <ul>
        <li>Okullar</li>
        <li>Marketler ve büyük zincir mağazalar</li>
        <li>Eczaneler</li>
        <li>Belediye binaları</li>
        <li>Bazı iş yerleri ve toplu konut alanları</li>
      </ul>
      <p>
        gibi yaygın noktalarda bulunur. Pil; geri dönüşüm kutusuna
        atılmamalıdır.
      </p>

      <h2>Atık İlaç</h2>
      <p>
        Son kullanma tarihi geçmiş ya da kullanılmayan ilaçlar
        eczanelerdeki <strong>ilaç atık kutularına</strong> teslim
        edilmelidir. Tuvalete dökülen veya çöpe atılan ilaçlar su
        kaynaklarına karışarak ekosistemi etkiler.
      </p>

      <h2>Kullanılmış Kızartma Yağı</h2>
      <p>
        Lavaboya dökülen yağ, kanalizasyon tıkanmasına ve atık su
        arıtma sistemine ek yük binmesine sebep olur. Doğru kullanım:
      </p>
      <ul>
        <li>Yağ soğuduktan sonra cam veya plastik şişede biriktirin</li>
        <li>Belediyelerin veya yetkili toplayıcıların kampanyalarına teslim edin</li>
        <li>Bazı belediyeler toplanan yağ karşılığı promosyon (peçete, sabun) sunar</li>
      </ul>

      <h2>Tekstil Atığı</h2>
      <p>
        Kullanılmayan giysiler; mahalle aralarındaki tekstil
        kumbaralarına, ikinci el bağış noktalarına veya çeşitli
        STK'ların toplama kampanyalarına bağışlanabilir. Yıpranmış,
        kullanılamayacak durumdaki tekstil ise belediye tekstil
        toplama programlarına yönlendirilebilir.
      </p>

      <h2>Toplama Noktası Sorgulama</h2>
      <p>
        Toplama noktalarının konum ve çalışma saatleri zaman zaman
        güncellenebildiğinden, güncel bilgi için:
      </p>
      <ul>
        <li>İzmir Büyükşehir Belediyesi'nin sıfır atık portalı</li>
        <li>İlçe belediyesinin çevre koruma müdürlüğü</li>
        <li>TAP'ın resmi pil toplama noktası sorgu hizmeti</li>
        <li>ALO 153 vatandaş iletişim merkezi</li>
      </ul>
      <p>
        kaynaklarına başvurmak en doğru yoldur.
      </p>
      <p>
        Karbon ayak izi ve çevresel etki hakkında:{" "}
        <a href="/blog/karbon-ayak-izi-nedir-hesaplanir">
          Karbon Ayak İzi Nedir? Nasıl Hesaplanır ve Azaltılır?
        </a>
      </p>
    </>
  )
}
