"use client"

import { useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // email gizli: parçalı string — düz HTML'de görünmez, bot taramaz
    const to = ["av.fatih", "disci", "@gma", "il.com"].join("")
    const subject = encodeURIComponent(`nokta35 iletişim: ${name || "Ziyaretçi"}`)
    const body = encodeURIComponent(`Ad: ${name}\nE-posta: ${email}\n\n${message}`)
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="border-2 border-orange bg-orange/5 p-6">
        <p className="font-bold text-orange">Yönlendiriliyorsunuz…</p>
        <p className="text-sm mt-1">
          E-posta uygulamanız açılmazsa tarayıcı izinlerinizi kontrol edin.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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
          className="w-full border-2 border-light-gray bg-cream px-3 py-2 text-sm text-ink focus:border-orange focus:outline-none"
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
          className="w-full border-2 border-light-gray bg-cream px-3 py-2 text-sm text-ink focus:border-orange focus:outline-none"
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border-2 border-light-gray bg-cream px-3 py-2 text-sm text-ink focus:border-orange focus:outline-none resize-none"
          placeholder="Mesajınız…"
        />
      </div>

      <button
        type="submit"
        className="bg-orange text-cream text-[11px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-ink transition-colors"
      >
        Gönder
      </button>
    </form>
  )
}
