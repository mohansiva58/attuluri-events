import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Movie-Style Décor",
    description: "Transform your venue into a cinematic masterpiece with our signature movie-style setups",
    highlights: ["Stage Design", "Props & Set Design", "Themed Decorations"],
  },
  {
    title: "Lighting & Fireworks",
    description: "Create magical moments with dazzling lights and spectacular fireworks displays",
    highlights: ["LED Screens", "Professional Lighting", "Fireworks Shows"],
  },
  {
    title: "4K Photography & Videography",
    description: "Capture every precious moment in stunning 4K quality with professional cinematography",
    highlights: ["4K Video Coverage", "Professional Photography", "Editing & Albums"],
  },
  {
    title: "Catering & Hospitality",
    description: "Exquisite culinary experiences with vegetarian and non-vegetarian menus",
    highlights: ["Custom Menus", "Professional Hosts", "Guest Accommodation"],
  },
]

export function ServicesPreview() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-2">Services</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Premium Event Services</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-serif font-bold text-foreground flex-1">{service.title}</h4>
                <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition" size={24} />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.highlights.map((highlight, idx) => (
                  <p key={idx} className="text-sm text-accent font-semibold">
                    • {highlight}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
