import { Award, Users, Sparkles, Quote } from "lucide-react"
import Link from "next/link"

const stats = [
  { icon: Award, label: "Events Crafted", value: "500+" },
  { icon: Users, label: "Happy Clients", value: "1000+" },
  { icon: Sparkles, label: "Years of Excellence", value: "15+" },
]

const teamMembers = [
  { name: "RANGARAO ATLURI", role: "Founder & Chairman", image: "/1.jpeg" },
  { name: "PRASAD BABU UNNAM", role: "Event Manager", image: "/2.png" },
  { name: "G RAVI TEJA", role: "Event Co-Ordinator", image: "/3.png" },
]

const values = [
  { number: "01", title: "Excellence", desc: "We never compromise on quality or meticulous attention to every detail." },
  { number: "02", title: "Innovation", desc: "We constantly explore new ideas and groundbreaking creative approaches." },
  { number: "03", title: "Reliability", desc: "Our clients trust us completely to deliver on every single promise." },
  { number: "04", title: "Passion", desc: "We love what we do, and it shines through in every event we craft." },
]

function SectionDivider() {
  return (
    <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.15), transparent)" }} />
  )
}

export function About() {
  return (
    <div style={{ background: "oklch(0.07 0.01 280)" }}>

      {/* Story Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }} />
                <span className="section-label">Since 2009</span>
              </div>
              <h2
                className="font-serif font-bold leading-tight mb-8"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontFamily: "Cormorant Garamond, serif", color: "oklch(0.95 0.01 60)" }}
              >
                We Are <span className="text-gold-gradient">Memory Makers</span>,<br />Not Just Event Planners
              </h2>

              <div className="space-y-5 mb-10" style={{ color: "oklch(0.6 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300, lineHeight: 1.8 }}>
                <p>
                  Founded in 2009, Attuluri Events was born from a simple dream: to create celebrations that feel like cinematic masterpieces. What started as a boutique event planning service has grown into one of the region's most trusted names in premium event management.
                </p>
                <p>
                  Every event we handle is treated as a unique story. We don't follow templates — we create bespoke experiences that reflect the personality, values, and dreams of our clients.
                </p>
              </div>

              {/* Quote */}
              <div
                className="relative p-6 mb-10"
                style={{
                  background: "oklch(0.78 0.16 82 / 0.05)",
                  border: "1px solid oklch(0.78 0.16 82 / 0.15)",
                  borderLeft: "3px solid oklch(0.78 0.16 82)",
                  borderRadius: "2px",
                }}
              >
                <Quote size={20} className="mb-3" style={{ color: "oklch(0.78 0.16 82 / 0.5)" }} />
                <p
                  className="font-serif italic text-lg"
                  style={{ color: "oklch(0.82 0.01 60)", fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}
                >
                  "A celebration is not just an event; it's a memory that lasts a lifetime."
                </p>
              </div>

              <Link href="/book-now" className="btn-gold">
                Schedule a Consultation
              </Link>
            </div>

            <div className="relative">
              <img
                src="/elegant-wedding-setup-with-flowers-and-lights.jpg"
                alt="Attuluri Events"
                className="w-full object-cover"
                style={{ borderRadius: "4px", height: "560px", filter: "brightness(0.75) saturate(0.8)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, oklch(0.07 0.01 280 / 0.6) 0%, transparent 60%)",
                  borderRadius: "4px",
                }}
              />
              {/* Gold corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: "2px solid oklch(0.78 0.16 82)", borderLeft: "2px solid oklch(0.78 0.16 82)" }} />
              <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: "2px solid oklch(0.78 0.16 82)", borderRight: "2px solid oklch(0.78 0.16 82)" }} />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Stats */}
      <section className="py-20" style={{ background: "oklch(0.06 0.01 280)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-px" style={{ background: "oklch(0.78 0.16 82 / 0.1)" }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="text-center py-14 px-8" style={{ background: "oklch(0.06 0.01 280)" }}>
                  <div
                    className="w-12 h-12 flex items-center justify-center mx-auto mb-6"
                    style={{ border: "1px solid oklch(0.78 0.16 82 / 0.3)", borderRadius: "2px" }}
                  >
                    <Icon size={20} style={{ color: "oklch(0.78 0.16 82)" }} />
                  </div>
                  <div className="stat-number mb-2">{stat.value}</div>
                  <p className="section-label" style={{ fontSize: "0.65rem", color: "oklch(0.55 0.01 60)" }}>{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }} />
              <span className="section-label">What Drives Us</span>
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, oklch(0.78 0.16 82), transparent)" }} />
            </div>
            <h2
              className="font-serif font-bold"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "Cormorant Garamond, serif", color: "oklch(0.95 0.01 60)" }}
            >
              Our Core <span className="text-gold-gradient">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "oklch(0.78 0.16 82 / 0.1)" }}>
            {values.map((value, i) => (
              <div
                key={i}
                className="group relative p-8 transition-all duration-500"
                style={{ background: "oklch(0.07 0.01 280)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, oklch(0.78 0.16 82 / 0.04) 0%, transparent 100%)" }}
                />
                <div
                  className="text-5xl font-serif font-bold mb-6 opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ color: "oklch(0.78 0.16 82)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {value.number}
                </div>
                <h3
                  className="font-serif font-semibold text-xl mb-3"
                  style={{ color: "oklch(0.9 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                  {value.desc}
                </p>
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, oklch(0.78 0.16 82), transparent)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Team */}
      <section className="py-28" style={{ background: "oklch(0.06 0.01 280)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }} />
              <span className="section-label">The People Behind the Magic</span>
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, oklch(0.78 0.16 82), transparent)" }} />
            </div>
            <h2
              className="font-serif font-bold"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "Cormorant Garamond, serif", color: "oklch(0.95 0.01 60)" }}
            >
              Meet Our <span className="text-gold-gradient">Expert Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <div key={i} className="group relative overflow-hidden" style={{ borderRadius: "4px" }}>
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: "360px", filter: "brightness(0.65) saturate(0.7)" }}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: "linear-gradient(to top, oklch(0.04 0.01 280 / 0.95) 0%, oklch(0.04 0.01 280 / 0.3) 50%, transparent 100%)",
                  }}
                />
                {/* Gold corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderTop: "1.5px solid oklch(0.78 0.16 82)", borderLeft: "1.5px solid oklch(0.78 0.16 82)" }} />
                <div className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderBottom: "1.5px solid oklch(0.78 0.16 82)", borderRight: "1.5px solid oklch(0.78 0.16 82)" }} />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="font-serif font-bold text-lg mb-1"
                    style={{ color: "oklch(0.95 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="section-label" style={{ fontSize: "0.6rem", color: "oklch(0.78 0.16 82 / 0.8)" }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
