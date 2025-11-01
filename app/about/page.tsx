import { Header } from "@/components/header"
import { About } from "@/components/about-section"
import { ExpandedTestimonials } from "@/components/expanded-testimonials"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <About />
      <ExpandedTestimonials />
      <Footer />
    </main>
  )
}
