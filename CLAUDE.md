# nokta35 — CLAUDE.md
> Bu dosya her Claude Code oturumunda ilk okunacak proje rehberidir.
> Yarım kalan işler, kararlar, API'ler, tasarım sistemi hepsi burada.

---

## Proje Özeti

**nokta35.com** — "Tek noktadan İzmir'e dair her şey."
İzmir Büyükşehir Belediyesi açık verilerini (acikveri.bizizmir.com + openapi.izmir.bel.tr) gerçek zamanlı olarak görselleştiren bağımsız, reklamsız (reklam alanları ayrılmış) şehir veri platformu.

**Domain:** nokta35.com (Hostinger'dan alındı)
**Repo:** github.com/fatihdisci/nokta35
**Deploy:** Vercel (Hobby plan, ücretsiz)
**Geliştirici:** Fatih Dişçi — vibe coding, Claude Code + Gemini CLI

---

## Tech Stack

```
Frontend:   Next.js 14 (App Router) + TypeScript
Stil:       Tailwind CSS + shadcn/ui
Harita:     MapLibre GL JS (ücretsiz, OpenStreetMap)
Cache:      Upstash Redis (API yanıtları için)
Cron:       Vercel Cron Jobs (XLSX/CSV güncelleme)
Deploy:     Vercel + GitHub otomatik deploy
Paketler:   xlsx (SheetJS), papaparse, pdf-parse
```

**Python YOK.** Her şey TypeScript ile yapılıyor.

---

## Tasarım Sistemi — Brutalist Civic

```css
--cream:      #f4f1ea   /* arkaplan */
--ink:        #1a1a1a   /* yazı, navbar */
--orange:     #d63800   /* vurgu, aktif */
--gray:       #888888   /* ikincil yazı */
--light-gray: #e8e4db   /* border, ayraç */
```

**Font:** Playfair Display (serif, başlıklar) + JetBrains Mono (monospace, her şey)
**Grid doku:** 32px × 32px ızgara, body::before pseudo-element
**Navbar:** Siyah (#1a1a1a), turuncu alt border (3px), sticky
**Ticker:** Turuncu (#d63800) kayan bant, sayfa genişliği
**Stat bar:** 6 kolon grid, her hücre border ile ayrılmış
**Harita:** Koyu navbar + krem zemin, soluk grid arka plan

---

## Onaylanmış API Listesi

Tüm API'ler `https://openapi.izmir.bel.tr` altında, anonim erişim, JSON.

### 🚌 Ulaşım (İZTEK/ESHOT)
```
GET /api/iztek/hatotobuskonumlari/{hatId}
  → Hatta ait otobüslerin anlık GPS konumu
  → Dönüş: { HatOtobusKonumlari: [{OtobusId, Yon, KoorX, KoorY}] }

GET /api/iztek/duragayaklasanotobusler/{durakId}
  → Durağa yaklaşan otobüsler
  → Dönüş: [{KalanDurakSayisi, HatNumarasi, HatAdi, KoorX, KoorY}]

GET /api/iztek/hattinyaklasanotobusleri/{hatId}/{durakId}
  → Hat + durak bazlı yaklaşan
```

### 🚆 İZBAN
```
GET /api/izban/istasyonlar
  → 40 istasyon, GPS dahil

GET /api/izban/sefersaatleri/{kalkisId}/{varisId}
  → Sefer saatleri

GET /api/izban/tutarhesaplama/{binisId}/{inisId}/{aktarma}/{httMi}
  → Örnek: /api/izban/tutarhesaplama/1/15/1/false
  → Dönüş: {TamUcret:2.57, OgrenciUcret:1.04, Yas60Ucret:1.24, ToplamKm:45.63}
```

### 💧 İZSU
```
GET /api/izsu/barajdurum
  → 5 baraj: doluluk oranı, su yüksekliği, kapasite (anlık)

GET /api/izsu/arizakaynaklisukesintileri
  → Aktif su kesintileri: ilçe, mahalle, saat, açıklama

GET /api/izsu/gunluksuuretimi
  → Günlük baraj+kuyu bazlı üretim miktarı (m³)

GET /api/izsu/barajvekuyular
  → Baraj ve kuyu listesi + GPS
```

### 💊 Sağlık / Günlük
```
GET /api/ibb/nobetcieczaneler
  → Bugünün tüm nöbetçi eczaneleri: isim, adres, GPS, telefon

GET /api/ibb/izum/otoparklar
  → Anlık doluluk: dolu/boş adet, konum, çalışma saatleri
```

### 🏙️ CBS (Coğrafi Bilgi Sistemi) — Harita Katmanları
```
Hepsi: GET /api/ibb/cbs/{endpoint}
Örnek endpoint'ler:
  pazaryerleri, plajlar, hastaneler, muzeler, antikkentler
  sporsalonlari, kutuphaneler, tiyatrolar, sinemalar
  acilyardimistasyonu, ailesagligimerkezleri
  taksiduraklari, otobusterminalleri, trengarlari
  afetaciltoplanmaalani, noktayayakinduraklar
  wizmirnetnoktalari (ücretsiz WiFi noktaları)
```
Tüm CBS endpoint'leri aynı yapıda döner:
`{ ILCE, MAHALLE, YOL, ADI, ACIKLAMA, BOYLAM, ENLEM }`

### 📊 Diğer (CKAN API - bizizmir.com)
```
Sebze/meyve hal fiyatları: CSV endpoint (günlük)
Balık hal fiyatları: CSV endpoint (günlük)
Kültür sanat etkinlikleri: API
Semt pazar yerleri: /api/ibb/cbs/pazaryerleri
Barajların doluluk (tarihsel): CSV
```

---

## Sayfa Yapısı

### Ana Sayfa `/`
- Navbar (sticky, siyah)
- Hero — büyük başlık + tarih
- Ticker — kayan canlı veri bandı (turuncu)
- Stat Bar — 6 sayaç (baraj, otobüs, eczane, otopark, kesinti, hava)
- **[AD-1]** Leaderboard 728×90
- Ana Grid: Harita (sol, 2/3) + Panel (sağ, 1/3)
  - Harita: MapLibre, katman seçici (otobüs/eczane/otopark/pazar)
  - Panel: barajlar + [AD-2] rectangle 300×250 + eczaneler + su kesintisi
- **[AD-3]** Inline banner tam genişlik
- Hal Fiyatları grid (8 ürün)
- **[AD-4]** Inline banner tam genişlik
- Ulaşım (ESHOT / İZBAN / Metro-Tramvay) — 3 kolon
- İZBAN Ücret Hesaplayıcı
- **[AD-5]** Leaderboard footer öncesi
- Footer + **[AD-6]** kurumsal sponsor alanı

### Diğer Sayfalar (sonra eklenecek)
- `/ulasim` — detaylı ulaşım sayfası
- `/su-baraj` — baraj grafikleri, su kesintisi haritası
- `/saglik` — eczane + hastane haritası
- `/hal-fiyatlari` — tüm ürün listesi, filtreli
- `/harita` — tam ekran harita, tüm katmanlar

---

## Reklam Alanları

6 alan, AdSense + doğrudan satış uyumlu:

| ID | Konum | Boyut | Açıklama |
|----|-------|-------|----------|
| AD-1 | Header altı | 728×90 | En değerli, hemen görülür |
| AD-2 | Sağ panel içi | 300×250 | Baraj widget altında |
| AD-3 | Bölüm arası #1 | Tam genişlik 90px | Harita-hal arası |
| AD-4 | Bölüm arası #2 | Tam genişlik 90px | Hal-ulaşım arası |
| AD-5 | Sayfa sonu | 728×90 | Footer öncesi |
| AD-6 | Footer içi | 728×90 | Kurumsal sponsor |

Reklam component'i: `<AdSlot id="AD-1" size="leaderboard" />`
AdSense gelene kadar placeholder gösterilir.

---

## Cache Stratejisi (Upstash Redis)

```
Canlı (30 sn cache):   otobüs konumları, otopark doluluk
Saatlik (1 saat):      nöbetçi eczane, su kesintisi, baraj doluluk
Günlük (24 saat):      hal fiyatları, CBS katman verileri
Haftalık (7 gün):      İZBAN istasyonları, pazar yerleri
```

API route pattern:
```typescript
// src/app/api/[endpoint]/route.ts
export async function GET() {
  const cached = await redis.get('baraj:durum')
  if (cached) return Response.json(JSON.parse(cached))
  
  const data = await fetch('https://openapi.izmir.bel.tr/api/izsu/barajdurum')
  await redis.set('baraj:durum', JSON.stringify(data), { ex: 3600 })
  return Response.json(data)
}
```

---

## Environment Variables (.env.local)

```
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
NEXT_PUBLIC_MAPLIBRE_STYLE=https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json
```

---

## Yapılacaklar — MVP

### Faz 1 — Temel Altyapı
- [ ] Next.js projesi oluştur (App Router + TS + Tailwind)
- [ ] shadcn/ui kur
- [ ] Upstash Redis bağla
- [ ] Temel layout: Navbar + Footer
- [ ] Tasarım token'ları (renk, font) global.css'e ekle

### Faz 2 — API Katmanı
- [ ] `/api/baraj` route (izsu/barajdurum)
- [ ] `/api/eczane` route (nobetcieczaneler)
- [ ] `/api/otopark` route (izum/otoparklar)
- [ ] `/api/otobüs` route (hatotobuskonumlari)
- [ ] `/api/kesinti` route (arizakaynaklisukesintileri)

### Faz 3 — Ana Sayfa Bileşenleri
- [ ] StatBar bileşeni (6 sayaç)
- [ ] Ticker bileşeni (kayan bant)
- [ ] BarajWidget bileşeni (doluluk çubukları)
- [ ] EczanePanel bileşeni
- [ ] KesintiAlert bileşeni
- [ ] OtoparkWidget bileşeni
- [ ] AdSlot bileşeni (placeholder)

### Faz 4 — Harita
- [ ] MapLibre GL JS kur
- [ ] Harita wrapper bileşeni
- [ ] Otobüs layer (canlı, 30sn refresh)
- [ ] Eczane layer
- [ ] Otopark layer
- [ ] Pazar yeri layer
- [ ] Katman seçici toolbar

### Faz 5 — Hal Fiyatları
- [ ] CSV fetch + parse (papaparse)
- [ ] HalGrid bileşeni (8 ürün kart)
- [ ] Vercel Cron Job (günlük güncelleme)

### Faz 6 — Ulaşım Bölümü
- [ ] ESHOT yaklaşan otobüsler
- [ ] İZBAN sefer saatleri
- [ ] İZBAN ücret hesaplayıcı
- [ ] Metro/tramvay bilgisi

### Faz 7 — Polish & Deploy
- [ ] Meta tags, OG image
- [ ] Favicon (nokta · 35 ikonu)
- [ ] Domain bağlama (nokta35.com → Vercel)
- [ ] AdSense başvurusu
- [ ] Lighthouse skoru ≥ 90

---

## Dosya Yapısı

```
src/
├── app/
│   ├── layout.tsx          # Root layout, font, metadata
│   ├── page.tsx            # Ana sayfa
│   ├── globals.css         # Tasarım token'ları, grid doku
│   └── api/
│       ├── baraj/route.ts
│       ├── eczane/route.ts
│       ├── otopark/route.ts
│       ├── otobüs/route.ts
│       └── kesinti/route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Ticker.tsx
│   ├── widgets/
│   │   ├── StatBar.tsx
│   │   ├── BarajWidget.tsx
│   │   ├── EczanePanel.tsx
│   │   ├── KesintiAlert.tsx
│   │   ├── OtoparkWidget.tsx
│   │   └── HalGrid.tsx
│   ├── map/
│   │   ├── MapWrapper.tsx  # 'use client'
│   │   └── LayerControl.tsx
│   └── ads/
│       └── AdSlot.tsx      # Placeholder → AdSense
└── lib/
    ├── redis.ts            # Upstash client
    ├── api.ts              # Fetch helper'ları
    └── types.ts            # TypeScript tipleri
```

---

## Notlar

- Harita component'i mutlaka `'use client'` olmalı (MapLibre SSR çalışmaz)
- KoorX = enlem (latitude), KoorY = boylam (longitude) — İZTEK API'sinde ters
- Virgüllü koordinatlar gelir ("38,48165833") → parseFloat ile dönüştür: `parseFloat(s.replace(',','.'))`
- XLSX veri için: belediye güncelleyince cron job yakalar, Redis'e yazar
- AdSense başvurusu için site en az 2-4 hafta ayakta ve içerik dolu olmalı

---

## Kaynaklar

- Tasarım mockup: `/design/nokta35-stil01-brutalist.html`
- Reklam planı: `/design/nokta35-reklam-plani.html`
- API dokümanları: `/docs/` klasöründe PDF'ler
- acikveri.bizizmir.com — açık veri portalı
- openapi.izmir.bel.tr — canlı API'ler
