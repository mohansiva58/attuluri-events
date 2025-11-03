import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen pt-20 bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1 py-20">
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-accent tracking-widest uppercase">
              Welcome to Attuluri Events
            </h2>

            <h1 className="text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              The Memory Makers
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Transform your celebrations into cinematic experiences with mesmerizing decorations, dazzling lights, and
              unforgettable moments that create bonds beyond generations.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/book-now"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold inline-flex items-center justify-center"
              >
                Book Now
              </Link>

              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition font-semibold">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="hidden lg:block flex-1">
          <div className="relative w-full aspect-square">
            <img
              src="/cinematic-event-setup-with-lights-and-flowers.jpg"
              alt="Cinematic event setup"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
