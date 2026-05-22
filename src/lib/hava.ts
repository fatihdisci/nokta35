import { IZMIR_ILCELER } from "./ilceler"

export type IlceHava = {
  ilce: string
  sicaklik: number | null
  hissedilen?: number | null
  havaKodu: number | null
  ruzgar?: number | null
  nem?: number | null
  zaman?: string | null
}

// WMO Weather interpretation codes → Türkçe ad + emoji
const WMO_MAP: Record<number, { ad: string; ikon: string }> = {
  0: { ad: "Açık", ikon: "☀" },
  1: { ad: "Çoğunlukla açık", ikon: "🌤" },
  2: { ad: "Parçalı bulutlu", ikon: "⛅" },
  3: { ad: "Bulutlu", ikon: "☁" },
  45: { ad: "Sisli", ikon: "🌫" },
  48: { ad: "Kırağı", ikon: "🌫" },
  51: { ad: "Hafif çisenti", ikon: "🌦" },
  53: { ad: "Çisenti", ikon: "🌦" },
  55: { ad: "Yoğun çisenti", ikon: "🌦" },
  61: { ad: "Hafif yağmur", ikon: "🌧" },
  63: { ad: "Yağmur", ikon: "🌧" },
  65: { ad: "Şiddetli yağmur", ikon: "🌧" },
  71: { ad: "Hafif kar", ikon: "🌨" },
  73: { ad: "Kar", ikon: "🌨" },
  75: { ad: "Şiddetli kar", ikon: "❄" },
  80: { ad: "Sağanak", ikon: "🌧" },
  81: { ad: "Sağanak", ikon: "🌧" },
  82: { ad: "Şiddetli sağanak", ikon: "⛈" },
  95: { ad: "Gök gürültülü", ikon: "⛈" },
  96: { ad: "Dolu fırtınası", ikon: "⛈" },
  99: { ad: "Şiddetli dolu", ikon: "⛈" },
}

export function havaLabel(code: number | null): { ad: string; ikon: string } {
  if (code === null) return { ad: "—", ikon: "·" }
  return WMO_MAP[code] ?? { ad: "—", ikon: "·" }
}

type OpenMeteoCurrent = {
  temperature_2m?: number
  apparent_temperature?: number
  weather_code?: number
  wind_speed_10m?: number
  relative_humidity_2m?: number
  time?: string
}

type OpenMeteoYanit =
  | { current?: OpenMeteoCurrent }
  | Array<{ current?: OpenMeteoCurrent }>

export async function fetchHavaDurumu(): Promise<IlceHava[]> {
  const lats = IZMIR_ILCELER.map((i) => i.lat).join(",")
  const lons = IZMIR_ILCELER.map((i) => i.lon).join(",")
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${lats}&longitude=${lons}` +
    "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m" +
    "&timezone=Europe%2FIstanbul"

  const res = await fetch(url, {
    next: { revalidate: 900 }, // 15 dk
    headers: { Accept: "application/json" },
  })
  if (!res.ok) throw new Error(`Open-Meteo ${res.status}`)
  const json = (await res.json()) as OpenMeteoYanit
  const arr = Array.isArray(json) ? json : [json]

  return IZMIR_ILCELER.map((i, idx) => {
    const c = arr[idx]?.current ?? {}
    return {
      ilce: i.ad,
      sicaklik: c.temperature_2m ?? null,
      hissedilen: c.apparent_temperature ?? null,
      havaKodu: c.weather_code ?? null,
      ruzgar: c.wind_speed_10m ?? null,
      nem: c.relative_humidity_2m ?? null,
      zaman: c.time ?? null,
    }
  })
}

export async function getHavaDurumu(): Promise<IlceHava[] | null> {
  try {
    return await fetchHavaDurumu()
  } catch {
    return null
  }
}
