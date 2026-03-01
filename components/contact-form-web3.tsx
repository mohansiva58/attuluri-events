"use client"

import type React from "react"
import { useState } from "react"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/lib/web3forms"
import { addContactMessage } from "@/lib/firebase-service"

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  background: "oklch(0.06 0.01 280)",
  border: "1px solid oklch(0.78 0.16 82 / 0.2)",
  borderRadius: "2px",
  color: "oklch(0.9 0.01 60)",
  fontFamily: "Jost, sans-serif",
  fontSize: "0.9rem",
  fontWeight: 300,
  outline: "none",
  transition: "border-color 0.3s ease",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.7rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "oklch(0.78 0.16 82 / 0.8)",
  fontFamily: "Jost, sans-serif",
  fontWeight: 500,
  marginBottom: "0.5rem",
}

export function ContactFormWeb3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [focused, setFocused] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)
    try {
      await addContactMessage(formData)
      await sendContactEmail(formData, "admin@attuluriEvents.com")
      setSuccess(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError("Failed to send message. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getFocusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === field ? "oklch(0.78 0.16 82 / 0.6)" : "oklch(0.78 0.16 82 / 0.2)",
    boxShadow: focused === field ? "0 0 0 1px oklch(0.78 0.16 82 / 0.15)" : "none",
  })

  return (
    <div
      className="p-8 lg:p-10"
      style={{
        background: "oklch(0.09 0.01 280)",
        border: "1px solid oklch(0.78 0.16 82 / 0.15)",
        borderRadius: "4px",
      }}
    >
      {/* Gold top border */}
      <div className="h-px -mx-8 lg:-mx-10 mb-8" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.5), transparent)" }} />

      <h3
        className="font-serif font-bold text-2xl mb-8"
        style={{ color: "oklch(0.95 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
      >
        Send Us a <span className="text-gold-gradient">Message</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
              required
              style={getFocusStyle("name")}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused("")}
              required
              style={getFocusStyle("email")}
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused("")}
              required
              style={getFocusStyle("phone")}
              placeholder="+91 00000 00000"
            />
          </div>
          <div>
            <label style={labelStyle}>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onFocus={() => setFocused("subject")}
              onBlur={() => setFocused("")}
              required
              style={getFocusStyle("subject")}
              placeholder="Wedding, Birthday, Corporate..."
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused("")}
            required
            rows={5}
            style={{ ...getFocusStyle("message"), resize: "none" }}
            placeholder="Tell us about your vision, date, venue, and guest count..."
          />
        </div>

        {success && (
          <div
            className="flex items-center gap-3 p-4"
            style={{
              background: "oklch(0.15 0.05 145 / 0.3)",
              border: "1px solid oklch(0.5 0.12 145 / 0.4)",
              borderRadius: "2px",
              color: "oklch(0.7 0.1 145)",
            }}
          >
            <CheckCircle2 size={16} />
            <span className="text-sm" style={{ fontFamily: "Jost, sans-serif" }}>
              Message sent! We'll get back to you within 24 hours.
            </span>
          </div>
        )}

        {error && (
          <div
            className="flex items-center gap-3 p-4"
            style={{
              background: "oklch(0.15 0.05 15 / 0.3)",
              border: "1px solid oklch(0.5 0.15 15 / 0.4)",
              borderRadius: "2px",
              color: "oklch(0.65 0.15 15)",
            }}
          >
            <AlertCircle size={16} />
            <span className="text-sm" style={{ fontFamily: "Jost, sans-serif" }}>{error}</span>
          </div>
        )}

        <button type="submit" disabled={loading} className="btn-gold w-full flex items-center justify-center gap-2">
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  )
}
