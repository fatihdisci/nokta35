"use client"

import { useEffect, useState } from "react"

type Istasyon = {
  IstasyonId?: number | string
  IstasyonAdi?: string
}

type Ucret = {
  TamUcret?: number
  OgrenciUcret?: number
  Yas60Ucret?: number
  ToplamKm?: number
}

const getId = (i: Istasyon) => String(i.IstasyonId ?? "")
const getAd = (i: Istasyon) => String(i.IstasyonAdi ?? "")

function fmtTL(n: number | undefined) {
  if (n === undefined || n === null || Number.isNaN(n)) return "—"
  return n.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function IzbanUcret() {
  const [istasyonlar, setIstasyonlar] = useState<Istasyon[]>([])
  const [binis, setBinis] = useState("")
  const [inis, setInis] = useState("")
  const [aktarma, setAktarma] = useState("0")
  const [hgs, setHgs] = useState("false")
  const [result, setResult] = useState<Ucret | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch("/api/izban/istasyonlar")
      .then((r) => r.json())
      .then((j: Istasyon[]) => {
        const list = Array.isArray(j) ? j : []
        setIstasyonlar(list)
      })
      .catch(() => setErr("İstasyon listesi alınamadı"))
  }, [])

  async function hesapla() {
    if (!binis || !inis || binis === inis) return
    setLoading(true)
    setErr(null)
    try {
      const r = await fetch(
        `/api/izban/ucret?binis=${binis}&inis=${inis}&aktarma=${aktarma}&hgs=${hgs}`,
      )
      if (!r.ok) throw new Error(`Hata ${r.status}`)
      const j = (await r.json()) as Ucret
      setResult(j)
    } catch (e) {
      setErr((e as Error).message)
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="container">
      <header className="flex items-baseline justify-between mb-4 border-b-2 border-ink pb-2">
        <h2 className="font-serif-display text-3xl">
          İZBAN <span className="text-orange">Ücret</span> Hesaplayıcı
        </h2>
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
          Resmi tarife
        </span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-2 border-ink bg-cream p-5">
        <div className="space-y-3">
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              Biniş İstasyonu
            </span>
            <select
              value={binis}
              onChange={(e) => setBinis(e.target.value)}
              className="mt-1 w-full border-2 border-ink bg-cream px-2 py-1.5 text-xs font-mono uppercase tracking-wide focus:outline-none focus:border-orange"
            >
              <option value="">Seçin</option>
              {istasyonlar.map((i, idx) => (
                <option key={idx} value={getId(i)}>
                  {getAd(i)}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
              İniş İstasyonu
            </span>
            <select
              value={inis}
              onChange={(e) => setInis(e.target.value)}
              className="mt-1 w-full border-2 border-ink bg-cream px-2 py-1.5 text-xs font-mono uppercase tracking-wide focus:outline-none focus:border-orange"
            >
              <option value="">Seçin</option>
              {istasyonlar.map((i, idx) => (
                <option key={idx} value={getId(i)}>
                  {getAd(i)}
                </option>
              ))}
            </select>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
                Aktarma
              </span>
              <select
                value={aktarma}
                onChange={(e) => setAktarma(e.target.value)}
                className="mt-1 w-full border-2 border-ink bg-cream px-2 py-1.5 text-xs font-mono uppercase tracking-wide focus:outline-none focus:border-orange"
              >
                <option value="0">İlk biniş (tam)</option>
                <option value="1">Aktarmalı (indirimli)</option>
              </select>
            </label>
            <label className="block">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray">
                HTT
              </span>
              <select
                value={hgs}
                onChange={(e) => setHgs(e.target.value)}
                className="mt-1 w-full border-2 border-ink bg-cream px-2 py-1.5 text-xs font-mono uppercase tracking-wide focus:outline-none focus:border-orange"
              >
                <option value="false">Hayır</option>
                <option value="true">Evet</option>
              </select>
            </label>
          </div>
          <button
            type="button"
            onClick={hesapla}
            disabled={loading || !binis || !inis || binis === inis}
            className="w-full bg-ink text-cream py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-orange transition-colors disabled:opacity-40"
          >
            {loading ? "Hesaplanıyor…" : "Ücreti Hesapla"}
          </button>
          {err && (
            <div className="text-[11px] text-orange uppercase tracking-widest">
              {err}
            </div>
          )}
        </div>

        <div className="border-l-2 border-ink pl-6 flex flex-col justify-center">
          {!result ? (
            <div className="text-[11px] text-gray uppercase tracking-widest">
              Hesaplama bekleniyor
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gray">
                  Tam Ücret
                </div>
                <div className="font-serif-display text-4xl text-orange">
                  ₺{fmtTL(result.TamUcret)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray">
                    Öğrenci
                  </div>
                  <div className="text-ink">₺{fmtTL(result.OgrenciUcret)}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray">
                    60+ Yaş
                  </div>
                  <div className="text-ink">₺{fmtTL(result.Yas60Ucret)}</div>
                </div>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-gray pt-2 border-t border-light-gray">
                Mesafe ·{" "}
                <span className="text-ink font-mono">
                  {result.ToplamKm !== undefined
                    ? `${result.ToplamKm.toFixed(2)} km`
                    : "—"}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
