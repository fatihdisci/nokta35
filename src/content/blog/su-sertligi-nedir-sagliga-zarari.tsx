import type { BlogMeta } from "./types"

export const meta: BlogMeta = {
  slug: "su-sertligi-nedir-sagliga-zarari",
  title: "Su Sertliği Nedir? Sert Su Sağlığa Zararlı mı?",
  description:
    "Su sertliği nedir, nasıl ölçülür? Sert suyun sağlık etkileri, çamaşır makinesi ve elektrikli cihazlara zararı ve İzmir'de su sertliği hakkında bilgiler.",
  date: "2026-05-25",
  category: "Su & Baraj",
  summary:
    "Su sertliği, suda çözünmüş kalsiyum ve magnezyum miktarını ifade eder. Dünya Sağlık Örgütü'ne göre sert su doğrudan sağlığa zararlı değildir; aksine bu mineraller vücut için gereklidir. Asıl sorun cihaz kireçlenmesi ve çamaşır kalitesidir. İzmir suyunun güncel sertlik değeri için İZSU resmi kanalları esas alınmalıdır.",
  readTime: 5,
  faq: [
    {
      question: "Su sertliği nasıl ölçülür?",
      answer:
        "Su sertliği başlıca iki birimle ifade edilir: mg/L CaCO₃ (miligram kalsiyum karbonat/litre) ve Fransız derecesi (°fH veya Fr). 0–100 mg/L arası yumuşak, 100–200 mg/L orta sert, 200–300 mg/L sert, 300 mg/L üzeri çok sert olarak sınıflandırılır.",
    },
    {
      question: "Sert su içmek sağlığa zararlı mı?",
      answer:
        "Dünya Sağlık Örgütü (DSÖ), normal sertlik düzeylerindeki suyun içilmesinin sağlığa zararlı olmadığını belirtmektedir. Kalsiyum ve magnezyum mineraller kemik ve kas sağlığı için gereklidir. Aşırı yüksek sertlik (>500 mg/L) böbrek taşı riski tartışmalı olsa da bu konudaki bilimsel kanıtlar kesin değildir.",
    },
    {
      question: "Sert su ev aletlerine zarar verir mi?",
      answer:
        "Evet. Sert su ısıtıcı, çamaşır makinesi, bulaşık makinesi ve şofben gibi cihazlarda kireç birikintisi (kalsiyum karbonat tortusu) oluşturur. Bu birikinti enerji verimliliğini düşürür, cihaz ömrünü kısaltır ve onarım maliyetlerini artırır. Bu nedenle sert su bölgelerinde düzenli kireç önleme bakımı önerilir.",
    },
    {
      question: "İzmir suyu sert mi?",
      answer:
        "İzmir'in içme suyunu sağlayan kaynaklar (Tahtalı, Gördes, Balçova barajları) dönemin yağış ve kaynak koşullarına göre farklı sertlik değerleri sergileyebilir. Güncel ve kesin sertlik değeri için İZSU'nun (İzmir Su ve Kanalizasyon İdaresi) resmi sitesinde yayımlanan su analiz raporlarına bakın.",
    },
    {
      question: "Musluk suyunu yumuşatmak için ne yapılabilir?",
      answer:
        "Pratik yöntemler: 1) Ev tipi su arıtma cihazları (özellikle iyon değişim filtreli sistemler sertliği düşürür). 2) Beyaz sirke veya limon suyu ev aletlerindeki kireç birikintisini çözer. 3) Kireç önleyici tablet veya sıvı deterjanlar çamaşır makinesi kullanımında yardımcı olur. 4) Büyük ölçekli çözüm için tesisat girişine takılan manyetik kireç önleyiciler kullanılır.",
    },
  ],
}

export function Body() {
  return (
    <>
      <p>
        Çamaşır makinesinde kireç birikimi, çaydanlıkta beyaz tortu ya
        da sabunun zor köpürmesi — bunların hepsinin arkasında tek bir
        neden vardır: <strong>su sertliği.</strong> Peki sert su gerçekten
        sağlığa zararlı mı?
      </p>

      <h2>Su Sertliği Nedir?</h2>
      <p>
        Su sertliği, suda çözünmüş{" "}
        <strong>kalsiyum (Ca²⁺) ve magnezyum (Mg²⁺)</strong> iyon
        konsantrasyonunu ifade eder. Bu iyonlar kaynağa göre değişir:
        kireçtaşı ve dolomit içeren kayaçlardan süzülen yeraltı suları
        genellikle daha sert, yüzey suları (baraj, göl) görece daha
        yumuşaktır.
      </p>

      <h2>Sertlik Sınıflandırması</h2>
      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>mg/L CaCO₃</th>
            <th>Fransız Derecesi (°fH)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Yumuşak</td><td>0–100</td><td>0–10</td></tr>
          <tr><td>Orta sert</td><td>100–200</td><td>10–20</td></tr>
          <tr><td>Sert</td><td>200–300</td><td>20–30</td></tr>
          <tr><td>Çok sert</td><td>&gt;300</td><td>&gt;30</td></tr>
        </tbody>
      </table>

      <h2>Sağlığa Etkileri</h2>
      <p>
        <strong>DSÖ (Dünya Sağlık Örgütü)</strong> ve birçok ulusal
        sağlık kurumu, normal sertlik düzeylerindeki su içmenin sağlığa
        zararlı olmadığını belirtmektedir. Aksine:
      </p>
      <ul>
        <li>
          <strong>Kalsiyum:</strong> Kemik ve diş sağlığı, sinir sistemi
          için gereklidir.
        </li>
        <li>
          <strong>Magnezyum:</strong> Kas fonksiyonu ve enerji metabolizması
          için önemlidir.
        </li>
      </ul>
      <p>
        Bazı araştırmalar yüksek sertlik ile daha düşük kardiyovasküler
        hastalık riski arasında ilişki önermiş olsa da bu kanıt kesin
        değildir. <strong>Böbrek taşı riski</strong> konusunda da
        direkt ilişki kanıtlanmış değildir; böbrek taşı oluşumu birçok
        faktöre bağlıdır.
      </p>

      <h2>Ev Aletleri ve Tesisata Etkisi</h2>
      <p>
        Sert suyun asıl olumsuz etkisi cihazlardadır:
      </p>
      <ul>
        <li>
          <strong>Kireç birikintisi:</strong> Isıtıcı, çamaşır ve
          bulaşık makinesi, şofben, kombi ısı eşanjörü ve su
          borularında beyaz tortu oluşur.
        </li>
        <li>
          <strong>Enerji verimliliği:</strong> 1 mm kireç tabakası
          ısı transferini yaklaşık %10 düşürür; cihaz daha fazla
          enerji tüketir.
        </li>
        <li>
          <strong>Cihaz ömrü:</strong> Kireç birikmesi mekanik parçaları
          yıpratır ve erken arızaya yol açabilir.
        </li>
        <li>
          <strong>Çamaşır kalitesi:</strong> Sert suda sabun daha az
          köpürür; çamaşırlar daha sert ve donuk çıkabilir.
        </li>
      </ul>

      <h2>İzmir Suyu Ne Kadar Sert?</h2>
      <p>
        İzmir'in içme suyu ağırlıklı olarak Tahtalı, Gördes, Balçova
        ve Kemer barajlarından karşılanır. Baraj sularının sertlik
        değeri iklim koşulları, doluluk oranı ve arıtma süreçlerine
        göre değişkenlik gösterir. Güncel, kesin sertlik değeri için:
      </p>
      <ul>
        <li>
          <strong>İZSU (İzmir Su ve Kanalizasyon İdaresi)</strong>{" "}
          izsu.gov.tr adresinde dönemsel su analiz raporları
          yayımlanmaktadır.
        </li>
        <li>
          Faturanızdaki müşteri hizmetleri numarasından da bilgi
          alınabilir.
        </li>
      </ul>

      <h2>Pratik Çözümler</h2>
      <ul>
        <li>
          <strong>Kireç önleyici deterjan:</strong> Çamaşır ve bulaşık
          makinelerinde önerilen miktarda tuz (sofyon tuzu) kullanmak
          kireçlenmeyi önler.
        </li>
        <li>
          <strong>Düzenli temizlik:</strong> Çaydanlık ve ısıtıcıları
          beyaz sirke veya sitrik asit solüsyonuyla ayda bir temizleyin.
        </li>
        <li>
          <strong>Arıtma cihazı:</strong> İyon değişimli su yumuşatıcı
          sertliği düşürür. Ters ozmos (RO) sistemleri mineralleri
          tamamen uzaklaştırır; ancak bu durumda içme suyundaki faydalı
          mineraller de kaldırılmış olur.
        </li>
        <li>
          <strong>Manyetik/elektrostatik kireç önleyici:</strong> Tesisat
          borusuna takılan bu cihazlar kireç oluşumunu fiziksel yöntemle
          azaltmayı hedefler; etkinliği sertlik derecesine göre değişir.
        </li>
      </ul>

      <p>
        İçme suyu arıtma yöntemleri için:{" "}
        <a href="/blog/icme-suyu-aritma-yontemleri">
          İçme Suyu Arıtma Yöntemleri: Hangisi Sizin İçin Doğru?
        </a>
      </p>
      <p>
        İzmir'in su kaynakları için:{" "}
        <a href="/blog/izmir-barajlari-tahtatli-gordes-balcova">
          İzmir'in Barajları: Tahtalı, Gördes, Balçova
        </a>
      </p>
    </>
  )
}
