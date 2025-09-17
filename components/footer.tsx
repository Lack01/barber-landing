import { Scissors, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-6 w-6" />
              <span className="text-xl font-bold">BarberPro</span>
            </div>
            <p className="text-sm opacity-90 text-pretty">
              Tu barbería de confianza para un look profesional y moderno.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@barberpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Main St, Ciudad</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Horarios</h3>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Lun-Vie: 9:00-20:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Sábado: 9:00-18:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Domingo: Cerrado</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Servicios</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p>Corte de Cabello</p>
              <p>Afeitado Clásico</p>
              <p>Arreglo de Barba</p>
              <p>Paquetes Completos</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-90">© 2024 BarberPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
