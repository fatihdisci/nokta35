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
