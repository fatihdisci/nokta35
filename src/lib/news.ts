export type HaberItem = {
  baslik: string
  link: string
  tarih: string
  kaynak: string
  ozet: string
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(parseInt(dec, 10)))
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
}

function unwrapCdata(s: string): string {
  return s.replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "").trim()
}

function getTag(xml: string, tag: string): string {
  const m = xml.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`))
  if (!m) return ""
  return decodeEntities(unwrapCdata(m[1]))
}

// Allowed sources: AA + İzmir-specific local outlets
const KAYNAK_ALLOWLIST = [
  "aa",
  "anadolu ajansı",
  "anadolu ajansi",
  "yeni asır",
  "yeni asir",
  "9 eylül",
  "9 eylul",
  "ege",        // Ege'de Son Söz, Ege Telgraf, vb.
  "izmir",      // İzmir Haber, İzmir Gazetesi, vb.
  "egeli",
  "demokrasi",
  "halkin sesi",
  "halkın sesi",
]

function kaynakIzinli(kaynak: string): boolean {
  if (!kaynak) return false
  const k = kaynak
    .toLowerCase()
    .replace(/İ/g, "i")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
  return KAYNAK_ALLOWLIST.some((term) => k.includes(term))
}

function parseItem(itemXml: string): HaberItem {
  let baslik = getTag(itemXml, "title")
  const link = getTag(itemXml, "link")
  const tarih = getTag(itemXml, "pubDate")
  const kaynak = getTag(itemXml, "source")
  const desc = getTag(itemXml, "description")

  // Google News başlık formatı: "Başlık - Kaynak Adı" → kaynağı temizle
  if (kaynak && baslik.endsWith(` - ${kaynak}`)) {
    baslik = baslik.slice(0, -(kaynak.length + 3)).trim()
  }

  const ozet = stripHtml(desc).slice(0, 220)

  return { baslik, link, tarih, kaynak, ozet }
}

const RSS_URL =
  "https://news.google.com/rss/search?q=izmir&hl=tr&gl=TR&ceid=TR:tr"

export async function getIzmirHaberleri(): Promise<HaberItem[]> {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 1800 },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
        "User-Agent": "nokta35/1.0 (+https://nokta35.com)",
      },
    })
    if (!res.ok) return []

    const xml = await res.text()
    const items: HaberItem[] = []
    const re = /<item\b[^>]*>([\s\S]*?)<\/item>/g
    let m: RegExpExecArray | null
    while ((m = re.exec(xml)) !== null) {
      const it = parseItem(m[1])
      if (it.baslik && it.link) items.push(it)
    }

    const filtered = items.filter((it) => kaynakIzinli(it.kaynak))
    const result = filtered.length >= 3 ? filtered : items

    return result.sort(
      (a, b) => new Date(b.tarih).getTime() - new Date(a.tarih).getTime()
    )
  } catch {
    return []
  }
}

export function formatHaberZamani(tarih: string): string {
  if (!tarih) return ""
  try {
    const d = new Date(tarih)
    if (isNaN(d.getTime())) return ""
    const diff = Date.now() - d.getTime()
    const dk = Math.floor(diff / 60000)
    if (dk < 1) return "az önce"
    if (dk < 60) return `${dk} dk önce`
    const saat = Math.floor(dk / 60)
    if (saat < 24) return `${saat} saat önce`
    const gun = Math.floor(saat / 24)
    if (gun < 7) return `${gun} gün önce`
    return d.toLocaleDateString("tr-TR", {
      timeZone: "Europe/Istanbul",
      day: "numeric",
      month: "short",
    })
  } catch {
    return ""
  }
}
