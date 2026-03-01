"use client"

import type React from "react"
import { useState } from "react"
import { Sparkles, Lock, Eye, EyeOff, AlertCircle } from "lucide-react"

interface AdminLoginProps {
  onLoginSuccess: () => void
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [focused, setFocused] = useState(false)
  const ADMIN_PASSWORD = "Attuluri@2026"

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminToken", "true")
      onLoginSuccess()
    } else {
      setError("Invalid password. Please try again.")
      setPassword("")
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "oklch(0.06 0.01 280)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, oklch(0.78 0.16 82 / 0.06) 0%, transparent 60%)" }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.3), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.3), transparent)" }} />

      <div className="w-full max-w-md relative z-10">
        {/* Panel */}
        <div
          className="p-10"
          style={{
            background: "oklch(0.09 0.01 280)",
            border: "1px solid oklch(0.78 0.16 82 / 0.2)",
            borderRadius: "4px",
          }}
        >
          {/* Gold top border */}
          <div className="h-px -mx-10 mb-10" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82), transparent)" }} />

          {/* Logo */}
          <div className="text-center mb-10">
            <div
              className="w-14 h-14 flex items-center justify-center mx-auto mb-4"
              style={{ border: "1px solid oklch(0.78 0.16 82 / 0.4)", borderRadius: "2px", color: "oklch(0.78 0.16 82)" }}
            >
              <Sparkles size={24} />
            </div>
            <h1
              className="font-serif font-bold text-2xl mb-1"
              style={{ color: "oklch(0.95 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
            >
              Admin <span className="text-gold-gradient">Portal</span>
            </h1>
            <p className="text-xs tracking-widest uppercase" style={{ color: "oklch(0.5 0.01 60)", fontFamily: "Jost, sans-serif", letterSpacing: "0.2em" }}>
              Attuluri Events
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "oklch(0.78 0.16 82 / 0.8)",
                  fontFamily: "Jost, sans-serif",
                  fontWeight: 500,
                  marginBottom: "0.5rem",
                }}
              >
                Admin Password
              </label>
              <div className="relative">
                <div
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: "oklch(0.5 0.01 60)" }}
                >
                  <Lock size={15} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.875rem 2.8rem",
                    background: "oklch(0.06 0.01 280)",
                    border: `1px solid ${focused ? "oklch(0.78 0.16 82 / 0.5)" : "oklch(0.78 0.16 82 / 0.2)"}`,
                    borderRadius: "2px",
                    color: "oklch(0.9 0.01 60)",
                    fontFamily: "Jost, sans-serif",
                    fontSize: "0.9rem",
                    outline: "none",
                    boxShadow: focused ? "0 0 0 1px oklch(0.78 0.16 82 / 0.1)" : "none",
                    transition: "all 0.3s ease",
                  }}
                  placeholder="Enter admin password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300"
                  style={{ color: "oklch(0.45 0.01 60)" }}
                  onMouseOver={(e) => { e.currentTarget.style.color = "oklch(0.78 0.16 82)" }}
                  onMouseOut={(e) => { e.currentTarget.style.color = "oklch(0.45 0.01 60)" }}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {error && (
              <div
                className="flex items-center gap-3 p-3"
                style={{
                  background: "oklch(0.12 0.05 15 / 0.4)",
                  border: "1px solid oklch(0.5 0.15 15 / 0.4)",
                  borderRadius: "2px",
                  color: "oklch(0.65 0.15 15)",
                }}
              >
                <AlertCircle size={14} />
                <span className="text-xs" style={{ fontFamily: "Jost, sans-serif" }}>{error}</span>
              </div>
            )}

            <button type="submit" className="btn-gold w-full">
              Access Dashboard
            </button>
          </form>

          {/* Bottom gold border */}
          <div className="h-px -mx-10 mt-10" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.3), transparent)" }} />
        </div>

        <p
          className="text-center text-xs mt-4"
          style={{ color: "oklch(0.35 0.01 60)", fontFamily: "Jost, sans-serif" }}
        >
          Authorized personnel only
        </p>
      </div>
    </div>
  )
}
