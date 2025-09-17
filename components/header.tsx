import { Button } from "@/components/ui/button"
import { Scissors } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Scissors className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold text-foreground">BarberPro</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            Nosotros
          </a>
          <a href="#testimonios" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            Testimonios
          </a>
          <a href="#contacto" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            Contacto
          </a>
        </nav>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Reservar Cita</Button>
      </div>
    </header>
  )
}
