/**
 * IndexNow protokol istemcisi.
 * Bing, Yandex ve diğer destekleyen arama motorlarına yeni/güncellenen
 * URL'leri anlık olarak bildirir. Google IndexNow desteklemez; ayrı
 * Indexing API entegrasyonu gerekir.
 *
 * Key dosyası: public/<KEY>.txt — içeriği yine aynı key olmalı.
 */

export const INDEXNOW_KEY = "18baf7e2e4462309e6ea523334ad355c"
export const INDEXNOW_HOST = "nokta35.com"
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow"
const KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`

export type IndexNowResult = {
  ok: boolean
  status: number
  submitted: number
  message?: string
}

/**
 * Tek bir URL veya URL listesini IndexNow API'sine gönderir.
 * URL'ler tam (https://nokta35.com/...) verilmelidir.
 */
export async function submitToIndexNow(
  urls: string | string[],
): Promise<IndexNowResult> {
  const list = Array.isArray(urls) ? urls : [urls]
  const cleaned = list
    .filter((u) => typeof u === "string" && u.length > 0)
    .filter((u) => u.startsWith(`https://${INDEXNOW_HOST}/`))

  if (cleaned.length === 0) {
    return { ok: false, status: 400, submitted: 0, message: "Geçerli URL yok" }
  }

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: cleaned,
      }),
    })

    return {
      ok: res.ok,
      status: res.status,
      submitted: cleaned.length,
      message: res.ok ? "Gönderildi" : await res.text().catch(() => undefined),
    }
  } catch (err) {
    return {
      ok: false,
      status: 0,
      submitted: 0,
      message: err instanceof Error ? err.message : "Bilinmeyen hata",
    }
  }
}
