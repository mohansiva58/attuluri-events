import { Award, Users, Sparkles } from "lucide-react"

const stats = [
  { icon: Award, label: "Events Delivered", value: "500+" },
  { icon: Users, label: "Happy Clients", value: "1000+" },
  { icon: Sparkles, label: "Years of Excellence", value: "15+" },
]

const team = [
  { name: "Rajesh Attuluri", role: "Founder & Creative Director", image: "/professional-man-founder-event-planner.jpg" },
  { name: "Priya Attuluri", role: "Event Planning Head", image: "/professional-woman-event-planner.jpg" },
  { name: "Vikram Singh", role: "Technical & Production Lead", image: "/professional-man-technical-lead.jpg" },
  { name: "Ananya Sharma", role: "Catering & Hospitality Manager", image: "/professional-woman-hospitality-manager.jpg" },
]

export function About() {
  return (
    <section className="pt-20 pb-20 bg-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">About Attuluri Events</h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              At Attuluri Events, we believe every celebration deserves to be extraordinary. Since 2009, we've been
              transforming visions into reality, creating cinematic experiences that forge lifelong memories.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're not just event planners—we're memory makers, storytellers, and artists dedicated to crafting
              celebrations that transcend the ordinary.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold">
              Schedule a Consultation
            </button>
          </div>

          <div className="relative">
            <img
              src="/elegant-wedding-setup-with-flowers-and-lights.jpg"
              alt="Attuluri Events Team"
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-secondary/10 py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className="text-primary" size={32} />
                    </div>
                  </div>
                  <p className="text-5xl font-serif font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-lg text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2009 by Rajesh Attuluri, Attuluri Events was born from a simple dream: to create celebrations
              that feel like cinematic masterpieces. What started as a boutique event planning service has grown into
              one of the region's most trusted names in premium event management.
            </p>
            <p>
              Every event we handle is treated as a unique story. We don't follow templates—we create bespoke
              experiences that reflect the personality, values, and dreams of our clients. From intimate gatherings to
              grand celebrations with thousands of guests, we bring the same dedication and artistry to every occasion.
            </p>
            <p>
              Our philosophy is simple: "A celebration is not just an event; it's a memory that lasts a lifetime." This
              belief drives us to innovate, to invest in the best talent and technology, and to never settle for
              anything less than extraordinary.
            </p>
            <p>
              Today, with a team of 50+ dedicated professionals spanning event planning, design, technical production,
              catering, and photography, we continue to set new standards in the events industry.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-secondary/5 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">Our Core Values</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Excellence", desc: "We never compromise on quality or attention to detail." },
              { title: "Innovation", desc: "We constantly explore new ideas and creative approaches." },
              { title: "Reliability", desc: "Our clients trust us to deliver on every promise." },
              { title: "Passion", desc: "We love what we do and it shows in every event." },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">Meet Our Team</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-accent font-semibold text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
