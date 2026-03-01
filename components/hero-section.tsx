"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const stats = [
  { value: "50+", label: "Events Crafted" },
  { value: "1+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Expert Team" },
]

function FloatingParticle({ delay, duration, left }: { delay: number; duration: number; left: string }) {
  return (
    <div
      className="particle"
      style={{
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        bottom: "-10px",
      }}
    />
  )
}

export function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ background: "oklch(0.06 0.01 280)" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://wallpaperbat.com/img/902965-corporate-event-wallpaper.jpg"
          alt="Event background"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.25) saturate(0.6)" }}
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, oklch(0.06 0.01 280 / 0.95) 40%, oklch(0.06 0.01 280 / 0.5) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, oklch(0.78 0.16 82 / 0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[
          { delay: 0, duration: 12, left: "10%" },
          { delay: 2, duration: 16, left: "25%" },
          { delay: 5, duration: 10, left: "40%" },
          { delay: 1, duration: 18, left: "60%" },
          { delay: 7, duration: 14, left: "75%" },
          { delay: 3, duration: 11, left: "85%" },
          { delay: 9, duration: 15, left: "92%" },
        ].map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
      </div>

      {/* Vertical decorative line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px hidden xl:block"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.78 0.16 82 / 0.4), transparent)",
          left: "5rem",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh] py-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <div
                className="h-px w-12"
                style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }}
              />
              <span className="section-label">Welcome to Attuluri Events</span>
            </div>

            {/* Headline */}
            <div>
              <h1
                className="font-serif font-bold leading-[1.05]"
                style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontFamily: "Cormorant Garamond, serif" }}
              >
                <span style={{ color: "oklch(0.95 0.01 60)" }}>The Memory</span>
                <br />
                <span className="text-gold-gradient">Makers</span>
              </h1>

              <div className="luxury-divider mt-4" style={{ maxWidth: "400px" }}>
                <span className="section-label whitespace-nowrap">Vijayawada, India</span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "oklch(0.7 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
            >
              Transform your celebrations into cinematic masterpieces. From mesmerizing floral artistry
              to dazzling fireworks — we craft moments that transcend generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/book-now" className="btn-gold">
                Begin Your Story
              </Link>
              <Link href="/portfolio" className="btn-gold-outline">
                View Portfolio
              </Link>
            </div>

            {/* Trust indicators */}
            <div
              className="flex items-center gap-6 pt-4"
              style={{ borderTop: "1px solid oklch(0.78 0.16 82 / 0.1)" }}
            >
              <div className="flex -space-x-2">
                {["P", "R", "A", "N"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold border-2"
                    style={{
                      background: `oklch(${0.2 + i * 0.05} 0.04 ${280 + i * 30})`,
                      borderColor: "oklch(0.08 0.01 280)",
                      color: "oklch(0.78 0.16 82)",
                      zIndex: 4 - i,
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "oklch(0.78 0.16 82)", fontSize: "0.75rem" }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: "0.75rem", color: "oklch(0.6 0.01 60)", fontFamily: "Jost, sans-serif" }}>
                  Trusted by 500+ families
                </p>
              </div>
            </div>
          </div>

          {/* Right — Stats Grid */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="luxury-card p-8 text-center noise-overlay relative"
                  style={{ borderRadius: "4px" }}
                >
                  <div className="stat-number mb-1">{stat.value}</div>
                  <div
                    className="section-label"
                    style={{ color: "oklch(0.6 0.01 60)", letterSpacing: "0.2em", fontSize: "0.65rem" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative image */}
            <div
              className="mt-4 relative overflow-hidden"
              style={{ borderRadius: "4px", height: "200px" }}
            >
              <img
                src="https://wallpaperbat.com/img/902965-corporate-event-wallpaper.jpg"
                alt="Elegant event setup"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.6) saturate(0.7)" }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "oklch(0.06 0.01 280 / 0.4)" }}
              >
                <p
                  className="font-serif italic text-xl"
                  style={{ color: "oklch(0.88 0.12 82)" }}
                >
                  "Your moment, forever"
                </p>
              </div>
              {/* Gold corner accents */}
              <div
                className="absolute top-3 left-3 w-6 h-6"
                style={{
                  borderTop: "2px solid oklch(0.78 0.16 82)",
                  borderLeft: "2px solid oklch(0.78 0.16 82)",
                }}
              />
              <div
                className="absolute bottom-3 right-3 w-6 h-6"
                style={{
                  borderBottom: "2px solid oklch(0.78 0.16 82)",
                  borderRight: "2px solid oklch(0.78 0.16 82)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, oklch(0.78 0.16 82 / 0.6), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
        <span
          className="section-label"
          style={{ fontSize: "0.55rem", color: "oklch(0.5 0.01 60)" }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}
