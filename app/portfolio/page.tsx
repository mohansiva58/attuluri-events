import { Header } from "@/components/header"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of stunning events showcasing cinematic setups, breathtaking decorations, and
            unforgettable celebrations
          </p>
        </div>
      </section>

      <PortfolioGallery />
      <Footer />
    </main>
  )
}
