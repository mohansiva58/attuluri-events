import { Header } from "@/components/header"
import { ContactFormWeb3 } from "@/components/contact-form-web3"
import { SocialLinks } from "@/components/social-links"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-20 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about your event? Want to discuss your vision? We're here to help make your celebration
              unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <ContactFormWeb3 />
            <SocialLinks />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
