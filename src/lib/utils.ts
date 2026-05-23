import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// new Date().getDay() UTC döner; Türkiye UTC+3 olduğu için gece 00-03 arası
// önceki günü verir. Bu fonksiyon İstanbul saatine göre haftanın gününü döner.
export function istanbulGunu(): number {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Istanbul" })
  ).getDay()
}

export function slugify(s: string): string {
  return s
    .replace(/Ğ/g, "g").replace(/ğ/g, "g")
    .replace(/Ü/g, "u").replace(/ü/g, "u")
    .replace(/Ş/g, "s").replace(/ş/g, "s")
    .replace(/İ/g, "i").replace(/ı/g, "i")
    .replace(/Ö/g, "o").replace(/ö/g, "o")
    .replace(/Ç/g, "c").replace(/ç/g, "c")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function titleCase(s: string): string {
  return s
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/İ/g, "İ")
}

// İzmir'in 30 resmî ilçesi — sitemap fallback ve dinamik sayfa pre-render için
export const IZMIR_ILCELERI = [
  "Aliağa", "Balçova", "Bayındır", "Bayraklı", "Bergama", "Beydağ",
  "Bornova", "Buca", "Çeşme", "Çiğli", "Dikili", "Foça",
  "Gaziemir", "Güzelbahçe", "Karabağlar", "Karaburun", "Karşıyaka",
  "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes", "Menemen",
  "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla",
] as const
