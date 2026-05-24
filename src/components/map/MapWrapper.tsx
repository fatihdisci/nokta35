"use client"

import { useEffect, useRef, useState } from "react"
import maplibregl, { type Map, type GeoJSONSource } from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import { LayerControl, type LayerKey } from "./LayerControl"

const IZMIR_CENTER: [number, number] = [27.1287, 38.4192]
const DEFAULT_BUS_HAT = "20"

// CARTO Positron — minimal gri/krem, brutalist tasarımla uyumlu
const RASTER_STYLE = {
  version: 8 as const,
  sources: {
    base: {
      type: "raster" as const,
      tiles: [
        "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png",
        "https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png",
        "https://c.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png",
        "https://d.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png",
      ],
      tileSize: 256,
      attribution: "© OpenStreetMap · © CARTO",
    },
  },
  layers: [{ id: "base", type: "raster" as const, source: "base" }],
}


function parseCoord(v: unknown): number {
  if (typeof v === "number") return v
  if (typeof v === "string") return parseFloat(v.replace(",", "."))
  return NaN
}

type Feature = GeoJSON.Feature<GeoJSON.Point, Record<string, unknown>>
type FC = GeoJSON.FeatureCollection<GeoJSON.Point, Record<string, unknown>>

const empty: FC = { type: "FeatureCollection", features: [] }

function pointsFrom(
  items: unknown[] | null | undefined,
  lonKey: string,
  latKey: string,
  props: (i: Record<string, unknown>) => Record<string, unknown>,
): FC {
  if (!items) return empty
  const features: Feature[] = []
  for (const raw of items) {
    if (typeof raw !== "object" || raw === null) continue
    const o = raw as Record<string, unknown>
    const lon = parseCoord(o[lonKey])
    const lat = parseCoord(o[latKey])
    if (!Number.isFinite(lon) || !Number.isFinite(lat)) continue
    if (lon < 25 || lon > 30 || lat < 37 || lat > 40) continue
    features.push({
      type: "Feature",
      geometry: { type: "Point", coordinates: [lon, lat] },
      properties: props(o),
    })
  }
  return { type: "FeatureCollection", features }
}

const LAYER_STYLES: Record<
  LayerKey,
  { color: string; radius: number; stroke: string }
> = {
  otobus: { color: "#d63800", radius: 5, stroke: "#1a1a1a" },
  eczane: { color: "#1a1a1a", radius: 5, stroke: "#f4f1ea" },
  pazar: { color: "#d63800", radius: 4, stroke: "#1a1a1a" },
}

export function MapWrapper() {
  const ref = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<Map | null>(null)
  const loadedRef = useRef(false)
  const [mapError, setMapError] = useState<string | null>(null)

  const [active, setActive] = useState<Record<LayerKey, boolean>>({
    otobus: true,
    eczane: true,
    pazar: false,
  })

  // init map
  useEffect(() => {
    if (!ref.current || mapRef.current) return

    let map: Map
    try {
      map = new maplibregl.Map({
        container: ref.current,
        style: RASTER_STYLE,
        center: IZMIR_CENTER,
        zoom: 11,
        attributionControl: { compact: true },
      })
    } catch (e) {
      setMapError(`Harita oluşturulamadı: ${(e as Error).message}`)
      return
    }

    map.on("error", (e) => {
      console.error("[map] error:", e?.error ?? e)
    })

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right")

    // Container yeniden boyutlandığında harita canvas'ini güncelle
    const ro = new ResizeObserver(() => {
      try {
        map.resize()
      } catch {
        // ignore
      }
    })
    ro.observe(ref.current)
    // Birden çok zamanlamada resize zorla (dynamic import + fonts + grid layout sırasında container yüksekliği değişir)
    const initTimers = [50, 200, 500, 1000, 2000].map((ms) =>
      setTimeout(() => {
        try {
          map.resize()
        } catch {
          // ignore
        }
      }, ms),
    )

    map.on("load", () => {
      const keys: LayerKey[] = ["pazar", "eczane", "otobus"]
      for (const k of keys) {
        const s = LAYER_STYLES[k]
        map.addSource(`src-${k}`, { type: "geojson", data: empty })
        map.addLayer({
          id: `layer-${k}`,
          type: "circle",
          source: `src-${k}`,
          paint: {
            "circle-radius": s.radius,
            "circle-color": s.color,
            "circle-stroke-width": 1.5,
            "circle-stroke-color": s.stroke,
            "circle-opacity": 0.9,
          },
        })

        map.on("click", `layer-${k}`, (e) => {
          const f = e.features?.[0]
          if (!f) return
          const p = f.properties ?? {}
          const title = String(p.title ?? "")
          const sub = String(p.sub ?? "")
          new maplibregl.Popup({ offset: 8 })
            .setLngLat((f.geometry as GeoJSON.Point).coordinates as [number, number])
            .setHTML(
              `<div style="font-family:ui-monospace,monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#1a1a1a">
                 <div style="font-weight:700">${title || "—"}</div>
                 ${sub ? `<div style="color:#888;margin-top:2px;text-transform:none;letter-spacing:0">${sub}</div>` : ""}
               </div>`,
            )
            .addTo(map)
        })

        map.on("mouseenter", `layer-${k}`, () => {
          map.getCanvas().style.cursor = "pointer"
        })
        map.on("mouseleave", `layer-${k}`, () => {
          map.getCanvas().style.cursor = ""
        })
      }
      loadedRef.current = true
      mapRef.current = map
      void refreshAll()
    })

    mapRef.current = map
    return () => {
      initTimers.forEach(clearTimeout)
      ro.disconnect()
      map.remove()
      mapRef.current = null
      loadedRef.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // toggle visibility
  useEffect(() => {
    const map = mapRef.current
    if (!map || !loadedRef.current) return
    for (const k of Object.keys(active) as LayerKey[]) {
      const id = `layer-${k}`
      if (map.getLayer(id)) {
        map.setLayoutProperty(id, "visibility", active[k] ? "visible" : "none")
      }
    }
  }, [active])

  // data loader
  async function loadLayer(k: LayerKey) {
    const map = mapRef.current
    if (!map || !loadedRef.current) return
    const src = map.getSource(`src-${k}`) as GeoJSONSource | undefined
    if (!src) return

    try {
      if (k === "eczane") {
        const r = await fetch("/api/eczane")
        const items = (await r.json()) as unknown[]
        // Eczane API'sinde X = enlem, Y = boylam (ters)
        src.setData(
          pointsFrom(items, "LokasyonY", "LokasyonX", (o) => ({
            title: o.Adi ?? "Eczane",
            sub: [o.Bolge, o.Adres, o.Telefon].filter(Boolean).join(" · "),
          })),
        )
      } else if (k === "pazar") {
        const r = await fetch("/api/pazar")
        const items = (await r.json()) as unknown[]
        src.setData(
          pointsFrom(items, "BOYLAM", "ENLEM", (o) => ({
            title: o.ADI ?? o.MAHALLE ?? "Pazar",
            sub: [o.ILCE, o.MAHALLE].filter(Boolean).join(" · "),
          })),
        )
      } else if (k === "otobus") {
        const r = await fetch(`/api/otobus?hat=${DEFAULT_BUS_HAT}`)
        const json = (await r.json()) as {
          HatOtobusKonumlari?: unknown[]
        }
        // İZTEK quirk: KoorX = lat, KoorY = lon (CLAUDE.md notu)
        src.setData(
          pointsFrom(json?.HatOtobusKonumlari ?? [], "KoorY", "KoorX", (o) => ({
            title: `Otobüs ${o.OtobusId ?? ""}`,
            sub: `Hat ${DEFAULT_BUS_HAT} · ${o.Yon ?? ""}`,
          })),
        )
      }
    } catch {
      // sessiz geç
    }
  }

  async function refreshAll() {
    await Promise.all(
      (["eczane", "pazar", "otobus"] as LayerKey[]).map(loadLayer),
    )
  }

  // canlı: otobüs 30 sn
  useEffect(() => {
    const t = setInterval(() => {
      if (active.otobus) void loadLayer("otobus")
    }, 30_000)
    return () => clearInterval(t)
  }, [active.otobus])

  return (
    <div
      ref={ref}
      className="relative w-full h-full"
      style={{ position: "absolute", inset: 0 }}
    >
      {mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-cream/90 text-orange text-xs uppercase tracking-widest p-4 text-center z-20">
          {mapError}
        </div>
      )}
      <div className="absolute top-3 left-3 z-10">
        <LayerControl active={active} onChange={setActive} />
      </div>
      <div className="absolute bottom-3 left-3 z-10 text-[10px] uppercase tracking-[0.2em] bg-ink text-cream px-2 py-1 pointer-events-none">
        canlı · otobüs hat {DEFAULT_BUS_HAT}
      </div>
    </div>
  )
}
