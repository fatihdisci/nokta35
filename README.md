# nokta35

**Tek noktadan İzmir'e dair her şey.**

İzmir Büyükşehir Belediyesi açık verilerini (`openapi.izmir.bel.tr`) gerçek zamanlı görselleştiren bağımsız sivil teknoloji (civic tech) platformu.

**Live:** https://nokta35.com  
**Repo:** https://github.com/fatihdisci/nokta35  
**Deploy:** Vercel (Hobby, `fra1` region)  
**Geliştirici:** Fatih Dişçi

---

## Tech Stack

| Katman | Teknoloji |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Stil | Tailwind CSS v3 + özel CSS değişkenleri |
| Harita | MapLibre GL JS 4 (OpenStreetMap / CARTO) |
| Cache | Upstash Redis (REST API — `@upstash/redis`) |
| Analitik | Vercel Analytics + Google Analytics 4 |
| Reklam | Google AdSense (`ca-pub-9695860606070067`) |
| CSV parse | PapaParse |
| Hava | Open-Meteo (ücretsiz, anahtarsız) |
| Icons | Lucide React |
| Deploy | Vercel + GitHub otomatik deploy |

**Python yok.** Her şey TypeScript ile yapılıyor.

---

## Proje Yapısı

```
nokta35/
├── src/
│   ├── app/                    # Next.js App Router sayfaları ve API rotaları
│   │   ├── layout.tsx          # Root layout: font, meta, GA, AdSense script
│   │   ├── page.tsx            # Ana sayfa (/)
│   │   ├── globals.css         # Tasarım token'ları, grid doku
│   │   ├── robots.ts           # robots.txt (API'yi disallow eder)
│   │   ├── sitemap.ts          # XML sitemap
│   │   ├── manifest.ts         # PWA manifest
│   │   ├── icon.tsx            # Favicon (SVG → PNG)
│   │   ├── apple-icon.tsx      # Apple touch icon
│   │   ├── opengraph-image.tsx # OG görseli (otomatik üretim)
│   │   ├── twitter-image.tsx   # Twitter kart görseli
│   │   ├── etkinlikler/        # Kültür & sanat etkinlikleri
│   │   ├── hal-fiyatlari/      # Sebze/meyve hal fiyatları
│   │   ├── harita/             # Tam ekran harita
│   │   ├── hava/               # Hava durumu + hava kalitesi
│   │   ├── onemli-yerler/      # Semt pazarları
│   │   ├── otoparklar/         # İZELMAN/İZUM otopark doluluk
│   │   ├── saglik/             # Nöbetçi eczaneler
│   │   ├── su-baraj/           # Baraj doluluk + su kesintileri
│   │   ├── ulasim/             # ESHOT / İZBAN ulaşım
│   │   └── api/                # Backend API rotaları (Redis proxy)
│   │       ├── baraj/          # İZSU baraj durumu
│   │       ├── cevre/          # Hava kalitesi ölçümleri
│   │       ├── eczane/         # Nöbetçi eczaneler
│   │       ├── etkinlik/       # Kültür sanat etkinlikleri
│   │       ├── hal/            # Hal fiyatları
│   │       ├── hava/           # Open-Meteo proxy
│   │       ├── izban/          # İZBAN istasyon ve sefer
│   │       │   ├── istasyonlar/
│   │       │   └── sefer/
│   │       ├── kesinti/        # Su kesintileri
│   │       ├── otobus/         # ESHOT otobüs konumları
│   │       ├── otopark/        # İZUM otopark doluluk
│   │       ├── pazar/          # Semt pazarları
│   │       └── cron/hal/       # Vercel Cron: hal CSV güncelleme
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky navbar (siyah, turuncu alt border)
│   │   │   ├── Footer.tsx      # Footer
│   │   │   ├── Ticker.tsx      # Kayan canlı veri bandı (turuncu)
│   │   │   └── Placeholder.tsx # Geliştirme skeleton
│   │   ├── widgets/            # Veri widget'ları (server components)
│   │   │   ├── StatBar.tsx         # 6 sayaçlı üst bar
│   │   │   ├── BarajWidget.tsx     # Baraj doluluk çubukları
│   │   │   ├── EczanePanel.tsx     # Nöbetçi eczane listesi
│   │   │   ├── KesintiAlert.tsx    # Su kesintisi uyarısı
│   │   │   ├── OtoparkWidget.tsx   # Otopark doluluk özeti
│   │   │   ├── HavaWidget.tsx      # Hava durumu özeti
│   │   │   ├── PazarWidget.tsx     # Bugünkü semt pazarları
│   │   │   ├── EtkinlikWidget.tsx  # Yaklaşan etkinlikler (5 adet)
│   │   │   ├── HavaKalitesiWidget.tsx  # PM10 kalite widget
│   │   │   ├── HalGrid.tsx         # Hal fiyatları grid
│   │   │   ├── IzbanSefer.tsx      # İZBAN sefer saatleri
│   │   │   ├── MetroTramvay.tsx    # Metro/tramvay bilgisi
│   │   │   ├── EtkinlikList.tsx    # Etkinlik filtreli liste (client)
│   │   │   ├── PazarList.tsx       # Pazar filtreli liste (client)
│   │   │   ├── FaqSection.tsx      # SSS bölümü
│   │   │   └── WidgetMore.tsx      # "Tümünü gör" linki
│   │   ├── map/
│   │   │   ├── MapWrapper.tsx      # SSR guard ('use client' wrapper)
│   │   │   ├── MapClient.tsx       # MapLibre GL JS harita (client)
│   │   │   └── LayerControl.tsx    # Katman seçici toolbar
│   │   └── ads/
│   │       └── AdSlot.tsx          # Reklam alanı (placeholder → AdSense)
│   └── lib/
│       ├── api.ts      # fetchIzmir(), parseCoord(), jsonResponse(), errorResponse()
│       ├── data.ts     # Tüm veri tipleri + server-side fetch fonksiyonları
│       ├── redis.ts    # Upstash Redis client + cached() helper
│       ├── hava.ts     # Open-Meteo entegrasyonu, WMO kod tablosu
│       ├── hal.ts      # Hal CSV parser (PapaParse)
│       ├── jsonLd.tsx  # Schema.org JSON-LD builder'ları
│       ├── ilceler.ts  # İzmir 30 ilçe koordinat tablosu
│       ├── types.ts    # Paylaşılan TypeScript tipleri
│       └── utils.ts    # cn() (clsx + tailwind-merge)
├── public/
│   └── ads.txt         # Google AdSense yetkilendirme
├── next.config.js      # remotePatterns (kultursanat.izmir.bel.tr)
├── vercel.json         # region: fra1
├── tailwind.config.ts
└── CLAUDE.md           # AI geliştirici rehberi (bu dosya ile birlikte okunmalı)
```

---

## Tasarım Sistemi — Brutalist Civic

Tüm renkler CSS değişkeni olarak `globals.css`'te tanımlanmış, Tailwind config'e eklenmiş.

| Token | Hex | Kullanım |
|---|---|---|
| `--cream` / `bg-cream` | `#f4f1ea` | Sayfa arkaplanı, kart zemini |
| `--ink` / `bg-ink` | `#1a1a1a` | Navbar, yazı, border |
| `--orange` / `text-orange` | `#d63800` | Vurgu, aktif nav, turuncu accent |
| `--gray` / `text-gray` | `#888888` | İkincil yazı, etiketler |
| `--light-gray` / `bg-light-gray` | `#e8e4db` | Border, ayraç, hover zemini |

**Font:**
- `font-serif-display` → Playfair Display (başlıklar, büyük sayılar)
- Default (body) → JetBrains Mono (her şey: UI metni, etiketler, sayılar)

**Grid doku:** `body::before` ile 32×32px soluk ızgara (rgba 4% opaklık).

**Bileşen örüntüsü:**
```tsx
// Tipik kart
<article className="border-2 border-ink bg-cream p-4 flex flex-col gap-2">
  <h2 className="font-serif-display text-lg">Başlık</h2>
  <span className="text-[10px] uppercase tracking-widest text-gray">Etiket</span>
  <div className="font-serif-display text-3xl text-orange">42</div>
</article>
```

---

## Sayfa Rehberi

### `/` — Ana Sayfa
- **Revalidate:** 60 saniye
- **Bileşenler:** `Ticker`, `StatBar`, 8× `Suspense` widget, 3× `AdSlot`, `FaqSection`
- Ticker kayan bantta otoparklar, barajlar, eczaneler anlık gösterir
- StatBar 6 sayaç: baraj ort. doluluk, nöbetçi eczane, otopark, kesinti, hava, etkinlik

### `/otoparklar` — İZELMAN & İZUM Otoparkları
- **Kaynak:** `getOtoparklar()` → `openapi.izmir.bel.tr/api/ibb/izum/otoparklar`
- **Revalidate:** 30 saniye (en sık güncellenen sayfa)
- Doluluk yüzdesine göre azalan sıralama, progress bar, Google Maps yönlendirme linki

### `/saglik` — Nöbetçi Eczaneler
- **Kaynak:** `getEczaneler()` → `/api/ibb/nobetcieczaneler`
- **Revalidate:** 1800 saniye (30 dk)
- Bölgeye göre gruplu, Google Maps linki (`LokasyonX` = enlem, `LokasyonY` = boylam — API'de ters!)

### `/su-baraj` — Barajlar & Su Kesintileri
- **Kaynak:** `getBarajlar()` + `getKesintiler()`
- **Revalidate:** 3600 saniye

### `/hava` — Hava Durumu + Hava Kalitesi
- **Hava durumu:** Open-Meteo API, 30 ilçe koordinatı aynı anda batch istek
- **Hava kalitesi:** `getHavaKalitesi()` → `/api/ibb/cevre/havadegerleri`
  - API flat satırlar döner: `{BolgeAdi, GazAdi:"PM10", OlcumDegeri:"72"}`
  - `groupCevreOlcumler()` ile bölge × gaz pivotu yapılıyor
- **Revalidate:** 3600 saniye

### `/etkinlikler` — Kültür & Sanat
- **Kaynak:** `getEtkinlikler()` → `/api/ibb/kultursanat/etkinlikler`
- **Revalidate:** 3600 saniye
- Client component `EtkinlikList`: tür ve ilçe bazlı filtre
- Kartlar: `KucukAfis` görseli, `KisaAciklama` (HTML strip edilmiş), `kultursanat.izmir.bel.tr` detay linki

### `/onemli-yerler` — Semt Pazarları
- **Kaynak:** `getPazarYerleri()` → `/api/ibb/cbs/pazaryerleri`
- Günün pazarları `parsePazarGun()` ile ACIKLAMA metninden regex ile çıkarılıyor
- **Revalidate:** 86400 saniye (günlük)

### `/ulasim` — ESHOT / İZBAN
- ESHOT hat bazlı otobüs konumları, İZBAN sefer saatleri ve ücret hesaplayıcı

### `/harita` — Tam Ekran Harita
- MapLibre GL JS, `'use client'` zorunlu (SSR çalışmaz)
- Katman seçici: otopark, eczane, pazar yeri

### `/hal-fiyatlari` — Hal Fiyatları
- CSV fetch + PapaParse, Vercel Cron günlük güncelleme

---

## Veri Katmanı (`src/lib/data.ts`)

Ana veri dosyası. Tüm tip tanımları ve server-side fetch fonksiyonları burada.

### Tipler

```typescript
BarajItem         // BarajKuyuAdi, DolulukOrani, SuYuksekligi...
EczaneItem        // Adi, Adres, Telefon, Bolge, LokasyonX/Y
OtoparkItem       // name, status, lat, lng, occupancy, isPaid
KesintiItem       // IlceAdi, Mahalleler, Aciklama, KesintiSuresi
EtkinlikItem      // id, adi, tur, mekan, baslangic, bitis, resim, aciklama, detayUrl, ucretsiz
HavaKalitesiItem  // istasyonAdi, pm10, no2, so2, co, o3, tarih
PazarYeriItem     // ILCE, MAHALLE, ADI, BOYLAM, ENLEM, gun
HalFiyat          // urun, birim, enDusuk, enYuksek, ortalama, tarih
```

### Fetch Fonksiyonları

```typescript
getBarajlar()       // /api/izsu/barajdurum                    — 1 saat cache
getEczaneler()      // /api/ibb/nobetcieczaneler               — 1 saat cache
getOtoparklar()     // /api/ibb/izum/otoparklar                — 30 sn cache
getKesintiler()     // /api/izsu/arizakaynaklisukesintileri    — 1 saat cache
getEtkinlikler()    // /api/ibb/kultursanat/etkinlikler        — 1 saat cache
getHavaKalitesi()   // /api/ibb/cevre/havadegerleri            — 1 saat cache
getPazarYerleri()   // /api/ibb/cbs/pazaryerleri               — 24 saat cache
```

Tüm fonksiyonlar Next.js `fetch()` ile `next: { revalidate }` kullanır (ISR).

### Yardımcı Fonksiyonlar

```typescript
otoparkKapasite(o)   // { free, occupied, total } hesaplar
parsePazarGun(str)   // ACIKLAMA metninden gün numarası çıkarır (regex)
parseDeger(v)        // "45,3" gibi string sayıları float'a çevirir
groupCevreOlcumler() // Flat (bölge × gaz) satırları istasyon objelerine pivot eder
pm10Seviye(pm10)     // { label: "İyi"|"Orta"|"Hassas"|"Sağlıksız", renk } döner
normalizeEtkinlik(r) // Ham API kaydını EtkinlikItem'a normalize eder
strField(r, ...keys) // Bir objenin birden fazla olası alan adını dener, ilk doluyu döner
stripHtml(s)         // HTML tag'lerini temizler (KisaAciklama için)
```

---

## API Rotaları (`src/app/api/`)

Next.js Route Handlers. Tüm rotalar:
1. Önce Redis cache'e bakar (`cached()` helper)
2. Cache miss durumunda `openapi.izmir.bel.tr`'yi çağırır
3. Sonucu Redis'e yazar
4. `Cache-Control: public, s-maxage=TTL, stale-while-revalidate` ile döner

```
GET /api/baraj          → İZSU barajlar          TTL: 3600s
GET /api/eczane         → Nöbetçi eczaneler      TTL: 3600s
GET /api/otopark        → İZUM otopark doluluk   TTL: 30s
GET /api/kesinti        → Su kesintileri          TTL: 3600s
GET /api/etkinlik       → Kültür etkinlikleri    TTL: 3600s
GET /api/cevre          → Hava kalitesi (flat)   TTL: 3600s
GET /api/hava           → Open-Meteo proxy       TTL: 900s
GET /api/pazar          → Semt pazarları          TTL: 86400s
GET /api/hal            → Hal fiyatları           TTL: Redis'te
GET /api/otobus         → ESHOT otobüs GPS       TTL: 30s
GET /api/izban/istasyonlar → İZBAN istasyonlar   TTL: 604800s (7 gün)
GET /api/izban/sefer    → İZBAN sefer saatleri   TTL: 3600s
GET /api/cron/hal       → Vercel Cron tetikleyici
```

**robots.ts:** `/api/*` tüm bot'lara disallow edilmiş. Sayfalar (GPTBot dahil) allow.

---

## Cache Katmanı (`src/lib/redis.ts`)

```typescript
// cached() kullanımı
const data = await cached("cache:key:v1", TTL_SECONDS, async () => {
  return await fetchSomething()
})
```

- Redis yoksa (`UPSTASH_REDIS_REST_URL` tanımsızsa) doğrudan fetch yapar
- Cache okuma/yazma hataları sessizce yutulur — uygulama asla Redis'e bağımlı çalışmaz
- Cache key'lerine `:v2` gibi versiyon eklenir, API değiştiğinde stale veri sıfırlanır

---

## Upstream API — `openapi.izmir.bel.tr`

Tüm İzmir Büyükşehir endpoint'leri bu base URL altında. Anonim erişim, JSON yanıt.

### Kullanılan Endpoint'ler

```
/api/izsu/barajdurum                    Baraj doluluk
/api/izsu/arizakaynaklisukesintileri    Su kesintileri
/api/ibb/nobetcieczaneler               Nöbetçi eczaneler
/api/ibb/izum/otoparklar                İZUM/İZELMAN otopark doluluk
/api/ibb/kultursanat/etkinlikler        Kültür sanat etkinlikleri
/api/ibb/cevre/havadegerleri            Hava kalitesi (PM10, SO2, NO2, CO)
/api/ibb/cbs/pazaryerleri               Semt pazarları (CBS katmanı)
/api/iztek/hatotobuskonumlari/{hatId}   ESHOT otobüs GPS
/api/izban/istasyonlar                  İZBAN istasyonlar
/api/izban/sefersaatleri/{k}/{v}        İZBAN sefer saatleri
```

### CBS Endpoint'leri (aynı yapı: `{ onemliyer: [...] }`)

```
/api/ibb/cbs/pazaryerleri   /api/ibb/cbs/hastaneler
/api/ibb/cbs/plajlar        /api/ibb/cbs/muzeler
```

Tüm CBS kayıtları: `{ ILCE, MAHALLE, YOL, ADI, ACIKLAMA, BOYLAM, ENLEM }`

---

## Koordinat Dikkat Noktaları

| API | Enlem | Boylam |
|---|---|---|
| Nöbetçi Eczane | `LokasyonX` | `LokasyonY` |
| İZTEK ESHOT | `KoorX` | `KoorY` |
| CBS Katmanları | `ENLEM` | `BOYLAM` |
| İZUM Otopark | `lat` | `lng` |

**Önemli:** Eczane API'sinde X = enlem (lat), Y = boylam (lon) — matematikteki X/Y'nin tersi.

**Virgüllü koordinat:** API bazı koordinatları `"38,4192"` formatında döner.  
`parseCoord()` fonksiyonu bu durumu handle eder:
```typescript
export function parseCoord(s: string | number | null | undefined): number {
  if (typeof s === "number") return s
  return parseFloat(String(s).replace(",", "."))
}
```

---

## SEO / Structured Data (`src/lib/jsonLd.tsx`)

Her sayfa Server Component'te JSON-LD üretir, `<JsonLdScript>` ile `<head>`'e enjekte eder.

| Builder | Schema.org Tipi | Kullanıldığı Sayfalar |
|---|---|---|
| `organizationJsonLd()` | `WebSite` + `Organization` | Root layout (tüm sayfalar) |
| `breadcrumbJsonLd()` | `BreadcrumbList` | Tüm alt sayfalar |
| `datasetJsonLd()` | `Dataset` | Otopark, sağlık, hava, baraj |
| `faqJsonLd()` | `FAQPage` | Ana sayfa, otopark, sağlık, hava |
| `governmentServiceJsonLd()` | `GovernmentService` | Ulaşım, su-baraj |

FAQPage içerikleri dinamik veri tabanlı: "Şu an kaç boş otopark yeri var?" sorusunun cevabı canlı veri ile dolar.

**Sitemap:** `/sitemap.ts` — tüm statik sayfalar, `changeFrequency: "hourly"`, `priority: 0.9`  
**Robots:** `/api/*` disallow, tüm sayfalar (GPTBot dahil) allow

---

## Monetizasyon — Reklam Alanları

`<AdSlot>` bileşeni şu an styled placeholder döndürüyor. AdSense onayı gelince gerçek unit ID'leri eklenecek.

| Slot | Konum | Boyut |
|---|---|---|
| `AD-1` | StatBar altı | 728×90 leaderboard |
| `AD-3` | Widget grid altı | Tam genişlik inline |
| `AD-4` | İkinci inline | Tam genişlik inline |
| `AD-5` | Footer öncesi | 728×90 leaderboard |

**AdSense ID:** `ca-pub-9695860606070067` (`layout.tsx` head'inde yükleniyor)  
**AdSense durumu:** Hazırlanıyor (onay bekleniyor), `ads.txt` yetki verildi  

---

## Environment Variables

```bash
# .env.local
UPSTASH_REDIS_REST_URL=https://...upstash.io
UPSTASH_REDIS_REST_TOKEN=...

# Opsiyonel — layout.tsx'te hardcoded fallback var
NEXT_PUBLIC_GA_ID=G-VB5V8C9MP0

# Hal fiyatları CSV URL'si (Vercel Cron kullanır)
HAL_CSV_URL=https://acikveri.bizizmir.com/...
```

Redis olmadan uygulama çalışır (cache atlanır, doğrudan upstream'e gider).

---

## Hava Durumu — Open-Meteo

`src/lib/hava.ts` — dışarıdan import edilmez, kendi içinde fetch yapar.

- 30 ilçe koordinatı `IZMIR_ILCELER` tablosundan (`src/lib/ilceler.ts`)
- Open-Meteo batch request: tüm koordinatlar tek URL'de `?latitude=38.4,38.5,...&longitude=27.1,...`
- Yanıt: array, index eşleştirmesi ile ilçeye bind edilir
- WMO hava kodu → Türkçe ad + emoji (`WMO_MAP` tablosu)
- Cache: Next.js `next: { revalidate: 900 }` (15 dk, Redis yok)

---

## Etkinlik Veri Alanları (Doğrulanmış API Yanıtı)

`openapi.izmir.bel.tr/api/ibb/kultursanat/etkinlikler` şu alanları döner:

```typescript
{
  Id: number                  // → EtkinlikItem.id
  Tur: string                 // "FESTİVAL", "KONSER", vb.
  Adi: string                 // Etkinlik adı
  EtkinlikBaslamaTarihi: string  // ISO 8601
  EtkinlikBitisTarihi: string
  EtkinlikMerkezi: string     // Mekan adı
  KisaAciklama: string        // HTML içerebilir — stripHtml() ile temizlenir
  KucukAfis: string           // Thumbnail URL (kultursanat.izmir.bel.tr)
  Resim: string               // Büyük görsel URL
  EtkinlikUrl: string         // URL slug — detay: kultursanat.izmir.bel.tr/etkinlik/{slug}
  BiletSatisLinki: string|null
  UcretsizMi: boolean
}
```

---

## Lokal Geliştirme

```bash
# Bağımlılıkları kur
npm install

# .env.local oluştur (Redis olmadan da çalışır)
cp .env.local.example .env.local   # veya elle yaz

# Geliştirme sunucusu
npm run dev

# Production build testi
npm run build && npm run start

# Lint
npm run lint
```

---

## Deploy

- **Vercel** otomatik deploy: `main` branch'e push → Vercel build + deploy
- **Region:** `fra1` (Frankfurt — Türkiye'ye en yakın Vercel region)
- **DNS:** Hostinger'dan alınan nokta35.com domain, A kaydı Vercel IP'ye yönlendirilmiş (`216.198.79.1`)
  - `www` CNAME → `nokta35.com`
  - `@` A → `216.198.79.1` (Vercel önerilen IP, tek kayıt)

---

## Bilinen Gotcha'lar

1. **MapLibre SSR sorunu:** `MapClient.tsx` mutlaka `'use client'` olmalı. `MapWrapper.tsx` SSR guard olarak `dynamic(() => import(...), { ssr: false })` kullanır.

2. **Etkinlik `normalizeEtkinlik()`:** API alan adları tutarsız olabilir. `strField(r, ...keys)` birden fazla olası isimleri dener. Kesin sıra: `Adi` > `EtkinlikAdi` > diğerleri.

3. **Hava kalitesi flat format:** API `[{BolgeAdi, GazAdi, OlcumDegeri}]` döner — tek satır = tek (bölge, gaz) çifti. `groupCevreOlcumler()` bölge bazlı pivot yaparak `{pm10, so2, no2, co}` objesine dönüştürür.

4. **Hal fiyatları CSV:** Alan adları sürüme göre değişebilir. `parseHalCsv()` `CANDIDATE_KEYS` listesi ile partial match yaparak esneklik sağlar.

5. **Redis cache key versiyonlama:** API yapısı değişirse eski cache'i boşaltmak için key'e `:v2`, `:v3` eklemek yeterli (`redis.flushall` gerekmez).

6. **AdSlot bileşeni:** Şu an sponsorluk mailto linki içeren placeholder. AdSense onayı ve unit ID'leri gelince `<ins class="adsbygoogle">` tag'i ile değiştirilecek.

---

## Yapılacaklar

- [ ] SEO: her sayfa için genişletilmiş meta description + OG görseli
- [ ] Sitemap'e etkinlikler, hal-fiyatlari, onemli-yerler sayfalarını ekle
- [ ] AdSense onayı sonrası gerçek reklam birimleri entegrasyonu
- [ ] Bülten / e-posta özeti (sabah İzmir raporu) — altyapı henüz yok
- [ ] Etkinlik detay sayfaları (`/etkinlikler/[slug]`) — SSG ile pre-render
- [ ] Su kesintisi haritası (`/su-baraj` alt haritası)
- [ ] ESHOT anlık otobüs haritası (gerçek zamanlı WebSocket veya polling)
- [ ] İZBAN ücret hesaplayıcı UI geliştirme
- [ ] Lighthouse skoru ≥ 90 hedefi (şu an Core Web Vitals takibi başlatılmadı)
