import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "isi-adasi-etkisi-nedir",
  title: "Isı Adası Etkisi Nedir? Şehirler Neden Daha Sıcak?",
  description:
    "Kentsel ısı adası etkisi nedir, neden oluşur? Asfalt, beton ve yeşil alan azlığının şehir sıcaklıklarına etkisi, sağlık riskleri ve İzmir için pratik çözümler.",
  date: "2026-05-24",
  category: "Çevre",
  summary:
    "Kentsel ısı adası etkisi; beton, asfalt ve binaların ısıyı tutması sonucu şehirlerin çevresindeki kırsal alanlara göre daha sıcak olması olgusudur. Yaz aylarında sağlık riski oluşturur.",
  readTime: 6,
  faq: [
    {
      question: "Isı adası etkisi nedir?",
      answer:
        "Kentsel ısı adası (Urban Heat Island — UHI) etkisi, şehirlerin çevresindeki kırsal alanlara kıyasla daha yüksek sıcaklık göstermesi olgusudur. Beton, asfalt ve camın güneş ısısını depolaması; yeşil alanların azlığı; araç ve bina ısıları bu farkın başlıca nedenleridir. NASA ve EPA araştırmalarına göre büyük şehirler geceleri çevrelerine göre 1–3 °C veya daha fazla sıcak olabilir.",
    },
    {
      question: "Isı adası etkisi sağlığa nasıl zarar verir?",
      answer:
        "WHO verilerine göre aşırı sıcak, özellikle yaşlılar, kronik hastalığı olanlar ve dış mekânda çalışanlar için ölüme yol açabilen bir sağlık tehditidir. Kentsel ısı adası etkisi sıcak hava dalgalarının etkisini artırır; ısı çarpması, dehidrasyon ve kardiyovasküler stres riskini yükseltir.",
    },
    {
      question: "İzmir'de ısı adası etkisi var mı?",
      answer:
        "İzmir, Akdeniz iklimiyle zaten yüksek yaz sıcaklıklarına maruz kalır. Körfez kıyısındaki yoğun yapılaşma ve iç mahallelerdeki düşük yeşil alan oranı, ısı adası etkisini güçlendirir. Özellikle Bornova, Buca ve Karabağlar gibi iç ilçelerde kıyı mahallelerine göre belirgin sıcaklık farkı gözlemlenebilir.",
    },
    {
      question: "Isı adası etkisini azaltmak için ne yapılabilir?",
      answer:
        "Kent ölçeğinde: yeşil çatılar, kentsel ormanlık alanlar, açık renkli yüzey kaplamaları ve su kanalları etkili çözümlerdir. Bireysel ölçekte: balkona veya cepheye bitki yerleştirmek, güneşi engelleyen tente kullanmak ve klima yerine doğal havalandırmayı tercih etmek sıcaklığı düşürmeye yardımcı olur.",
    },
    {
      question: "Isı adası ile küresel ısınma aynı şey midir?",
      answer:
        "Hayır. Küresel ısınma; sera gazlarının artmasına bağlı olarak gezegen genelinde yaşanan uzun vadeli sıcaklık artışıdır. Kentsel ısı adası ise yalnızca şehir alanlarında, yerel arazi kullanımından kaynaklanan lokal bir olgudur. İkisi birbirini güçlendirebilir; ısı adası etkisi, küresel ısınmayla birleşince aşırı sıcak olaylarını daha tehlikeli hâle getirir.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Yaz günü şehirden çıkıp kırsal bir alana geçtiğinizde sıcaklığın
        düştüğünü hissettiniz mi? Bu fark tesadüf değil: <strong>kentsel
        ısı adası etkisi</strong> adı verilen fiziksel bir olgudur. Beton
        ve asfalt güneş ısısını depolayarak geceleri de salmaya devam
        eder; yeşil alanlar azaldıkça serinletici buharlaşma kaybolur.
        Bu yazıda ısı adası etkisinin nedenlerini, sağlık risklerini ve
        çözüm yaklaşımlarını ele alıyoruz.
      </p>
      <p>
        Hava kalitesi ile kentsel kirlilik hakkında:{" "}
        <a href="/blog/hava-kalitesi-rehberi">
          Hava Kalitesi Nedir? AKİ, PM2.5, NO₂ — Eksiksiz Rehber
        </a>
      </p>

      <h2>Isı Adası Etkisi Neden Oluşur?</h2>
      <p>
        Kentsel ısı adası etkisinin birkaç temel mekanizması vardır:
      </p>
      <ul>
        <li>
          <strong>Isı depolayan yüzeyler:</strong> Asfalt ve beton,
          güneş ışınımını yüksek oranda emer ve gün boyu depoladığı
          ısıyı geceleri yavaşça salar. Açık renkli ve doğal yüzeylere
          kıyasla çok daha fazla ısı tutar.
        </li>
        <li>
          <strong>Yeşil alanların azlığı:</strong> Bitkiler terleme
          (transpirasyon) yoluyla su buharlaştırır ve çevreyi serinletir.
          Beton yüzeyler bu mekanizmadan yoksundur.
        </li>
        <li>
          <strong>Yapay ısı kaynakları:</strong> Araçlar, klima dış
          üniteleri, endüstriyel tesisler ve aydınlatma sistemleri doğrudan
          ısı üretir.
        </li>
        <li>
          <strong>Hava akışını engelleyen yapılar:</strong> Yüksek ve
          sık binalı kentsel doku, soğutucu rüzgârları engeller.
        </li>
      </ul>
      <p>
        NASA ve ABD Çevre Koruma Ajansı (EPA) araştırmalarına göre
        büyük şehirler, çevrelerine kıyasla gündüz 1–3 °C, gece ise
        bu farkın daha da artabileceği koşullarda daha sıcak olabilmektedir.
      </p>

      <h2>Sağlık Üzerindeki Etkileri</h2>
      <p>
        Dünya Sağlık Örgütü (WHO) aşırı sıcağı, iklimle bağlantılı
        en öldürücü çevre tehditlerinden biri olarak tanımlar. Kentsel
        ısı adası etkisi bu riski büyütür:
      </p>
      <ul>
        <li>
          <strong>Isı çarpması ve hipertermi:</strong> Vücut sıcaklığının
          kontrolsüz yükselmesi; yaşlılar ve kronik hastalığı olanlar
          için hayati tehlike oluşturur.
        </li>
        <li>
          <strong>Dehidrasyon:</strong> Uzun süreli sıcağa maruz kalmak,
          özellikle dışarıda çalışanlarda ciddi sıvı kaybına yol açar.
        </li>
        <li>
          <strong>Kardiyovasküler ve solunum stresi:</strong> Yüksek
          sıcaklık kalp ve akciğerleri zorlar; PM10 ve ozon kirliliği
          de sıcak havalarda artma eğilimindedir.
        </li>
        <li>
          <strong>Uyku kalitesinin düşmesi:</strong> Gece boyunca yüksek
          kentsel sıcaklık, yeterli uyku uyumayı zorlaştırır.
        </li>
      </ul>

      <h2>İzmir Özelinde Durum</h2>
      <p>
        İzmir, Akdeniz iklimiyle Temmuz-Ağustos aylarında ortalama
        azami sıcaklıkların 33–36 °C'yi bulduğu bir kenttir. Bu tabloya
        kentsel ısı adası etkisi eklendiğinde:
      </p>
      <ul>
        <li>Körfez kıyısındaki mahallelerde deniz etkisi görece serinletici</li>
        <li>İç ilçelerde (Bornova, Buca, Karabağlar) sıcaklık farkı belirginleşebilir</li>
        <li>Yeşil alan oranı düşük mahallelerde gece sıcaklığı kıyı mahallelerine kıyasla yüksek kalır</li>
      </ul>
      <p>
        İzmir hava kalitesi ölçümlerini anlık olarak{" "}
        <a href="/">nokta35.com</a> üzerinden takip edebilirsiniz.
      </p>

      <h2>Çözümler: Kent Ölçeği</h2>
      <p>
        Kentsel ısı adası etkisini azaltmak için belediyeler ve
        plancılar tarafından uygulanan başlıca yöntemler:
      </p>
      <ul>
        <li>
          <strong>Kentsel ormanlık ve ağaç plantasyonu:</strong>
          Gölge ve buharlaşma yoluyla sıcaklığı en etkili azaltan
          yöntemdir.
        </li>
        <li>
          <strong>Yeşil çatılar ve cepheler:</strong> Bitki örtüsü
          güneş ısısını emerek bina yüzeylerini serinletir.
        </li>
        <li>
          <strong>Açık renkli yüzey kaplamaları:</strong> Güneş
          ışınımını yansıtarak daha az ısı depolar.
        </li>
        <li>
          <strong>Su öğeleri ve kentsel peyzaj:</strong> Fıskiyeler,
          kanallar ve su yüzeyleri buharlaşma yoluyla serinletir.
        </li>
        <li>
          <strong>Geçirgen zemin döşemesi:</strong> Yağmur suyunun
          zemine sızmasını sağlar; buharlaşma ile serinleme desteklenir.
        </li>
      </ul>

      <h2>Bireysel Düzeyde Neler Yapılabilir?</h2>
      <ul>
        <li>Balkon ve cepheye saksı bitki yerleştirmek</li>
        <li>Güneş ışınımını engelleyen dış tente veya stor kullanmak</li>
        <li>Klima dış ünitesini gölgede konumlandırmak (verimliliği artırır)</li>
        <li>Gece havalandırması için pencere açmak; gündüz kapalı tutmak</li>
        <li>Koyu renkli zemin veya çatı varsa açık renkli kaplama seçmek</li>
      </ul>
      <p>
        Sürdürülebilir yaşam ve çevre dostu alışkanlıklar için:{" "}
        <a href="/blog/surdurulebilir-yasam-nedir-rehber">
          Sürdürülebilir Yaşam Nedir? Evden Başlamak İçin Kılavuz
        </a>
      </p>
    </>
  )
}
