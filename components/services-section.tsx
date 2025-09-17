import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Radar as Razor, Sparkles, Users } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Corte de Cabello",
    description: "Cortes modernos y clásicos adaptados a tu estilo personal",
    price: "Desde $25",
  },
  {
    icon: Razor,
    title: "Afeitado Clásico",
    description: "Afeitado tradicional con navaja y toallas calientes",
    price: "Desde $20",
  },
  {
    icon: Sparkles,
    title: "Arreglo de Barba",
    description: "Diseño y mantenimiento profesional de barba",
    price: "Desde $15",
  },
  {
    icon: Users,
    title: "Paquete Completo",
    description: "Corte + afeitado + arreglo de barba",
    price: "Desde $50",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-50 bg-card">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Nuestros Servicios</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto text-pretty">
            Ofrecemos una gama completa de servicios de barbería con técnicas tradicionales y herramientas modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-accent font-semibold">{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted text-pretty">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
