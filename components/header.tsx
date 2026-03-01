"use client"

import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/rentals", label: "Rentals" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className="fixed w-full top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "oklch(0.08 0.01 280 / 0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.78 0.16 82 / 0.15)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Sparkles
              size={18}
              className="text-primary transition-transform duration-300 group-hover:rotate-12"
            />
          </div>
          <div>
            <span
              className="text-xl font-serif font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, #F5D78E 0%, #D4AF37 50%, #B8860B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Attuluri Events
            </span>
            <div
              className="text-xs tracking-widest uppercase opacity-60 -mt-0.5"
              style={{ color: "oklch(0.78 0.16 82)", fontFamily: "Jost, sans-serif", fontSize: "0.55rem", letterSpacing: "0.25em" }}
            >
              The Memory Makers
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300 group"
              style={{ fontFamily: "Jost, sans-serif", letterSpacing: "0.05em" }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }}
              />
            </Link>
          ))}
          <Link
            href="/book-now"
            className="ml-4 relative group overflow-hidden inline-flex items-center gap-2"
            style={{
              background: "linear-gradient(135deg, #C9970A 0%, #F5D78E 40%, #D4AF37 60%, #B8860B 100%)",
              backgroundSize: "200% auto",
              color: "#0a0a14",
              fontFamily: "Jost, sans-serif",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.65rem 1.6rem",
              borderRadius: "2px",
              boxShadow: "0 0 0 1px oklch(0.78 0.16 82 / 0.5), 0 4px 20px oklch(0.78 0.16 82 / 0.2)",
              transition: "all 0.4s ease",
              animation: "gold-shimmer 3s linear infinite",
            }}
            onMouseOver={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.boxShadow = "0 0 0 1px oklch(0.78 0.16 82 / 0.9), 0 6px 28px oklch(0.78 0.16 82 / 0.45)"
              el.style.transform = "translateY(-1px)"
              el.style.backgroundPosition = "right center"
            }}
            onMouseOut={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.boxShadow = "0 0 0 1px oklch(0.78 0.16 82 / 0.5), 0 4px 20px oklch(0.78 0.16 82 / 0.2)"
              el.style.transform = "translateY(0)"
              el.style.backgroundPosition = "left center"
            }}
          >
            {/* Shimmer sweep */}
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
                animation: "gold-shimmer 2.5s linear infinite",
              }}
            />
            <span style={{ fontSize: "0.6rem", opacity: 0.85 }}>✦</span>
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300"
          style={{ borderColor: "oklch(0.78 0.16 82 / 0.3)", color: "oklch(0.78 0.16 82)" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen ? "400px" : "0",
          background: "oklch(0.08 0.01 280 / 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: isOpen ? "1px solid oklch(0.78 0.16 82 / 0.2)" : "none",
        }}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-foreground/70 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-widest uppercase"
              style={{ fontFamily: "Jost, sans-serif", fontSize: "0.75rem" }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-now"
            className="inline-flex items-center gap-2 mt-4"
            onClick={() => setIsOpen(false)}
            style={{
              background: "linear-gradient(135deg, #C9970A 0%, #F5D78E 40%, #D4AF37 60%, #B8860B 100%)",
              backgroundSize: "200% auto",
              color: "#0a0a14",
              fontFamily: "Jost, sans-serif",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.65rem 1.6rem",
              borderRadius: "2px",
              boxShadow: "0 0 0 1px oklch(0.78 0.16 82 / 0.5), 0 4px 20px oklch(0.78 0.16 82 / 0.2)",
              animation: "gold-shimmer 3s linear infinite",
            }}
          >
            <span style={{ fontSize: "0.6rem", opacity: 0.85 }}>✦</span>
            Book Now
          </Link>
        </div>
      </div>
    </header>
  )
}
