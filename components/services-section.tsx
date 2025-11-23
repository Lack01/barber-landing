import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Radar as Razor, Sparkles, Users } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Scissors,
    title: "Corte de Cabello",
    description: "Cortes modernos y clásicos adaptados a tu estilo personal",
    price: "Desde $25",
    image: "/fade-haircut.png",
  },
  {
    icon: Razor,
    title: "Afeitado Clásico",
    description: "Afeitado tradicional con navaja y toallas calientes",
    price: "Desde $20",
    image: "/classic-shave.png",
  },
  {
    icon: Sparkles,
    title: "Arreglo de Barba",
    description: "Diseño y mantenimiento profesional de barba",
    price: "Desde $15",
    image: "/beard-trim.png",
  },
  {
    icon: Users,
    title: "Paquete Completo",
    description: "Corte + afeitado + arreglo de barba",
    price: "Desde $50",
    image: "/fade-haircut.png",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos una gama completa de servicios de barbería con técnicas tradicionales y herramientas modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              </div>
              <CardHeader className="relative">
                <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 border-2 border-primary/20 group-hover:border-primary transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-accent font-semibold text-base">{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-pretty">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
