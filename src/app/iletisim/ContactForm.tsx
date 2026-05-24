"use client"

import { useState } from "react"

type Status = "idle" | "sending" | "sent" | "error"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [website, setWebsite] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setErrorMsg(data.error || "Mesaj gönderilemedi")
        setStatus("error")
        return
      }

      setStatus("sent")
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setErrorMsg("Bağlantı hatası")
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="border-2 border-orange bg-orange/5 p-6">
        <p className="font-bold text-orange uppercase tracking-wider text-sm">
          Mesajınız iletildi
        </p>
        <p className="text-sm mt-2">
          En kısa sürede e-posta adresinize döneceğiz. Teşekkürler.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-xs uppercase tracking-wider text-orange hover:underline"
        >
          Yeni mesaj gönder
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* honeypot — botların doldurduğu görünmez alan */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}
      >
        <label htmlFor="website">Web sitesi (boş bırakın)</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-[10px] uppercase tracking-[0.15em] text-gray mb-1"
        >
          Ad Soyad
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          disabled={status === "sending"}
          className="w-full border-2 border-light-gray bg-cream px-3 py-2 text-sm text-ink focus:border-orange focus:outline-none disabled:opacity-50"
          placeholder="Adınız"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[10px] uppercase tracking-[0.15em] text-gray mb-1"
        >
          E-posta
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={200}
          disabled={status === "sending"}
          className="w-full border-2 border-light-gray bg-cream px-3 py-2 text-sm text-ink focus:border-orange focus:outline-none disabled:opacity-50"
          placeholder="ornek@eposta.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] uppercase tracking-[0.15em] text-gray mb-1"
        >
          Mesaj <span className="text-orange">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={6}
          minLength={5}
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === "sending"}
          className="w-full border-2 border-light-gray bg-cream px-3 py-2 text-sm text-ink focus:border-orange focus:outline-none resize-none disabled:opacity-50"
          placeholder="Mesajınız…"
        />
      </div>

      {status === "error" && errorMsg && (
        <div className="border-2 border-orange bg-orange/5 p-3 text-sm text-ink">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-orange text-cream text-[11px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-ink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Gönderiliyor…" : "Gönder"}
      </button>
    </form>
  )
}
