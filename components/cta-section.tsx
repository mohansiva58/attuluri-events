import { CheckCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
              Ready for Your Unforgettable Celebration?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a cinematic experience that transforms your event into an unforgettable memory.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Custom event planning tailored to your vision",
                "Professional setup and execution",
                "Stunning photography and videography",
                "24/7 support during your event",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold">
                Get Started Today
              </button>
              <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent/10 transition font-semibold">
                Schedule Call
              </button>
            </div>
          </div>

          <div className="relative">
            <img src="/bride-and-groom-at-wedding-celebration-with-firewo.jpg" alt="Celebration" className="w-full rounded-xl shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
