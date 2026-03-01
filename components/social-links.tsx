"use client"

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function SocialLinks() {
  const socials = [
    { icon: Facebook, label: "Facebook", href: "https://facebook.com/attuluriEvents" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/attuluriEvents" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@attuluriEvents" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/attuluriEvents" },
  ]

  const contactInfo = [
    { Icon: Phone, label: "Phone", value: "+91 8897778788", href: "tel:+918897778788" },
    { Icon: Mail, label: "Email", value: "attlurievents@gmail.com", href: "mailto:attlurievents@gmail.com" },
    { Icon: MapPin, label: "Location", value: "Vijayawada, Andhra Pradesh, India", href: undefined },
  ]

  return (
    <div
      className="p-8 lg:p-10 h-full"
      style={{
        background: "oklch(0.09 0.01 280)",
        border: "1px solid oklch(0.78 0.16 82 / 0.15)",
        borderRadius: "4px",
      }}
    >
      {/* Gold top border */}
      <div className="h-px -mx-8 lg:-mx-10 mb-8" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.5), transparent)" }} />

      <h3
        className="font-serif font-bold text-2xl mb-3"
        style={{ color: "oklch(0.95 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
      >
        Connect <span className="text-gold-gradient">With Us</span>
      </h3>
      <p className="text-sm mb-8" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
        Follow us on social media for event inspiration, behind-the-scenes, and exclusive offers.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3 mb-10">
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-11 h-11 flex items-center justify-center transition-all duration-300 group"
            style={{
              border: "1px solid oklch(0.78 0.16 82 / 0.2)",
              borderRadius: "2px",
              color: "oklch(0.55 0.01 60)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.78 0.16 82 / 0.6)"
              e.currentTarget.style.color = "oklch(0.78 0.16 82)"
              e.currentTarget.style.background = "oklch(0.78 0.16 82 / 0.06)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "oklch(0.78 0.16 82 / 0.2)"
              e.currentTarget.style.color = "oklch(0.55 0.01 60)"
              e.currentTarget.style.background = "transparent"
            }}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px mb-8" style={{ background: "oklch(0.78 0.16 82 / 0.1)" }} />

      {/* Contact Info */}
      <div className="space-y-6">
        {contactInfo.map(({ Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div
              className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{
                border: "1px solid oklch(0.78 0.16 82 / 0.25)",
                borderRadius: "2px",
                color: "oklch(0.78 0.16 82)",
              }}
            >
              <Icon size={15} />
            </div>
            <div>
              <p className="section-label mb-0.5" style={{ fontSize: "0.6rem", color: "oklch(0.78 0.16 82 / 0.7)" }}>
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-sm transition-colors duration-300 hover:text-primary"
                  style={{ color: "oklch(0.7 0.01 60)", fontFamily: "Jost, sans-serif", textDecoration: "none" }}
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm" style={{ color: "oklch(0.7 0.01 60)", fontFamily: "Jost, sans-serif" }}>
                  {value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Map embed or decorative */}
      <div
        className="mt-10 overflow-hidden relative"
        style={{
          borderRadius: "4px",
          border: "1px solid oklch(0.78 0.16 82 / 0.1)",
          height: "160px",
          background: "oklch(0.07 0.01 280)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.30!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efa11f0975c7%3A0xaa657d4a39ffd026!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.5) brightness(0.7)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
