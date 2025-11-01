import { Header } from "@/components/header"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-12 px-4 bg-secondary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">Plan Your Event</h1>
          <p className="text-xl text-muted-foreground">
            Begin your journey to creating an unforgettable celebration. Tell us about your vision and let's make it
            reality together.
          </p>
        </div>
      </div>

      <BookingForm />
      <Footer />
    </main>
  )
}
