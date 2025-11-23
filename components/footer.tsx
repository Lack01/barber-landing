import { Scissors, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-card border-t border-border py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">BarberPro</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Tu barbería de confianza para un look profesional y moderno.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@barberpro.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-accent transition-colors">
                <MapPin className="h-4 w-4" />
                <span>123 Main St, Ciudad</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Horarios</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Lun-Vie: 9:00-20:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Sábado: 9:00-18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Domingo: Cerrado</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Servicios</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="hover:text-accent transition-colors cursor-pointer">Corte de Cabello</p>
              <p className="hover:text-accent transition-colors cursor-pointer">Afeitado Clásico</p>
              <p className="hover:text-accent transition-colors cursor-pointer">Arreglo de Barba</p>
              <p className="hover:text-accent transition-colors cursor-pointer">Paquetes Completos</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 BarberPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
