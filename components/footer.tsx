"use client"

import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter, Heart, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/booking", label: "Book Event" },
]

const serviceLinks = [
  { href: "/services#movie-style", label: "Movie-Style Setup" },
  { href: "/services#flower-decor", label: "Flower Decorations" },
  { href: "/services#lighting-dj", label: "Lighting & DJ" },
  { href: "/services#photography", label: "4K Photography" },
  { href: "/services#catering", label: "Catering" },
]

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Cancellation Policy" },
  { href: "/contact", label: "Contact Us" },
  { href: "#", label: "FAQ" },
]

const socialLinks = [
  { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
  { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
]

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "oklch(0.04 0.01 280)" }}
    >
      {/* Top gold border */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.5), oklch(0.78 0.16 82 / 0.8), oklch(0.78 0.16 82 / 0.5), transparent)",
        }}
      />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, oklch(0.78 0.16 82 / 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-20 grid md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <h3
                  className="font-serif text-2xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #F5D78E 0%, #D4AF37 50%, #B8860B 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Cormorant Garamond, serif",
                  }}
                >
                  Attuluri Events
                </h3>
                <p
                  className="text-xs tracking-widest uppercase mt-0.5"
                  style={{ color: "oklch(0.78 0.16 82 / 0.6)", fontFamily: "Jost, sans-serif", letterSpacing: "0.25em" }}
                >
                  The Memory Makers
                </p>
              </Link>
            </div>

            <div
              className="h-px mb-6"
              style={{
                background: "linear-gradient(90deg, oklch(0.78 0.16 82 / 0.3), transparent)",
              }}
            />

            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "oklch(0.5 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300, maxWidth: "280px" }}
            >
              Transforming moments into cinematic masterpieces. The Memory Makers of every celebration for over 15 years.
            </p>

            <div className="space-y-3">
              {[
                { Icon: MapPin, text: "Vijayawada, Andhra Pradesh, India" },
                { Icon: Phone, text: "+91 8897778788", href: "tel:+918897778788" },
                { Icon: Mail, text: "attlutievents@gmail.com", href: "mailto:attlutievents@gmail.com" },
              ].map(({ Icon, text, href }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon size={14} className="mt-0.5 flex-shrink-0" style={{ color: "oklch(0.78 0.16 82 / 0.6)" }} />
                  {href ? (
                    <a
                      href={href}
                      className="text-sm transition-colors duration-300 hover:text-primary"
                      style={{ color: "oklch(0.5 0.01 60)", fontFamily: "Jost, sans-serif" }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.5 0.01 60)", fontFamily: "Jost, sans-serif" }}
                    >
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="md:col-span-1" />

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4
              className="text-xs font-medium tracking-widest uppercase mb-6"
              style={{ color: "oklch(0.78 0.16 82)", fontFamily: "Jost, sans-serif", letterSpacing: "0.2em" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm flex items-center gap-1 group transition-colors duration-300 hover:text-primary"
                    style={{ color: "oklch(0.45 0.01 60)", fontFamily: "Jost, sans-serif", textDecoration: "none" }}
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4
              className="text-xs font-medium tracking-widest uppercase mb-6"
              style={{ color: "oklch(0.78 0.16 82)", fontFamily: "Jost, sans-serif", letterSpacing: "0.2em" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-300 hover:text-primary block"
                    style={{ color: "oklch(0.45 0.01 60)", fontFamily: "Jost, sans-serif", textDecoration: "none" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4
              className="text-xs font-medium tracking-widest uppercase mb-6"
              style={{ color: "oklch(0.78 0.16 82)", fontFamily: "Jost, sans-serif", letterSpacing: "0.2em" }}
            >
              Information
            </h4>
            <ul className="space-y-3">
              {legalLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-colors duration-300 hover:text-primary block"
                    style={{ color: "oklch(0.45 0.01 60)", fontFamily: "Jost, sans-serif", textDecoration: "none" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          className="py-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid oklch(0.78 0.16 82 / 0.08)" }}
        >
          <p
            className="text-xs flex items-center gap-2"
            style={{ color: "oklch(0.35 0.01 60)", fontFamily: "Jost, sans-serif" }}
          >
            © 2025 Attuluri Events. All rights reserved.
            <span style={{ color: "oklch(0.25 0.01 60)" }}>·</span>
            Made with <Heart size={12} className="inline" style={{ color: "oklch(0.78 0.16 82)" }} /> in Vijayawada
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center transition-all duration-300"
                style={{
                  border: "1px solid oklch(0.78 0.16 82 / 0.15)",
                  borderRadius: "2px",
                  color: "oklch(0.45 0.01 60)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.78 0.16 82 / 0.5)"
                  e.currentTarget.style.color = "oklch(0.78 0.16 82)"
                  e.currentTarget.style.background = "oklch(0.78 0.16 82 / 0.05)"
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.78 0.16 82 / 0.15)"
                  e.currentTarget.style.color = "oklch(0.45 0.01 60)"
                  e.currentTarget.style.background = "transparent"
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
