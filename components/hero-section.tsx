import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-[url('/barbershop-interior.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 container text-center space-y-8 py-20">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Estilo Profesional
            <span className="text-accent block mt-2">Barbería Premium</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cortes de precisión, afeitados clásicos y cuidado personal de élite en un ambiente moderno y sofisticado.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
            <Calendar className="mr-2 h-5 w-5" />
            Reservar Ahora
          </Button>
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            Ver Servicios
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
            <MapPin className="h-5 w-5 text-accent" />
            <span>Centro de la Ciudad</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
            <Clock className="h-5 w-5 text-accent" />
            <span>Lun-Sáb 9:00-20:00</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-sm text-muted-foreground bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
            <Calendar className="h-5 w-5 text-accent" />
            <span>Citas Online</span>
          </div>
        </div>
      </div>
    </section>
  )
}
