"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    rating: 5,
    comment: "Excelente servicio, muy profesionales. El corte quedó perfecto y el ambiente es muy agradable.",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Miguel Rodriguez",
    rating: 5,
    comment: "La mejor barbería de la ciudad. Atención personalizada y resultados increíbles.",
    image: "/young-professional-man.png",
  },
  {
    name: "Antonio Silva",
    rating: 5,
    comment: "Llevo años viniendo aquí. Siempre salgo satisfecho con el corte y el trato.",
    image: "/mature-businessman-headshot.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonios" className="py-20 bg-card/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border bg-card shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-lg md:text-2xl text-foreground mb-8 text-pretty font-light leading-relaxed">
                "{testimonials[currentIndex].comment}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div className="text-left">
                  <p className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">Cliente Verificado</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent w-8" : "bg-border hover:bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
