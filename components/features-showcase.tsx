import { Sparkles, Flower2, Music, Camera, Zap, Users } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Movie-Style Setups",
    description: "Cinematic decorations and stage designs that transform any venue into a production set",
  },
  {
    icon: Flower2,
    title: "Flower Decorations",
    description: "Mesmerizing floral arrangements and flower showers that create magical moments",
  },
  {
    icon: Zap,
    title: "Lighting & Effects",
    description: "Dazzling lights and fireworks that illuminate your celebration with brilliance",
  },
  {
    icon: Music,
    title: "DJ & Live Programs",
    description: "Professional DJs, orchestras, and live performances from top artists",
  },
  {
    icon: Camera,
    title: "4K Coverage",
    description: "Professional photo and video coverage to capture every precious moment",
  },
  {
    icon: Users,
    title: "Complete Planning",
    description: "Catering, accommodations, and end-to-end event management",
  },
]

export function FeaturesShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-2">Our Services</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">Premium Event Services</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every detail crafted to perfection, every moment made unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition group"
              >
                <div className="mb-4 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={28} />
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
