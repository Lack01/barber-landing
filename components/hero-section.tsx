import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background to-card">
      <div className="absolute inset-0 bg-[url('/modern-barber-shop-interior-with-leather-chairs.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">
            Experiencia Profesional en
            <span className="text-accent block">Barbería Moderna</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto text-pretty">
            Cortes de cabello precisos, afeitados clásicos y cuidado personal de primera calidad en un ambiente moderno
            y relajante.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Calendar className="mr-2 h-4 w-4" />
            Reservar Ahora
          </Button>
          <Button size="lg" variant="outline">
            Ver Servicios
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted">
            <MapPin className="h-4 w-4" />
            <span>Centro de la Ciudad</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted">
            <Clock className="h-4 w-4" />
            <span>Lun-Sáb 9:00-20:00</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted">
            <Calendar className="h-4 w-4" />
            <span>Citas Online</span>
          </div>
        </div>
      </div>
    </section>
  )
}
