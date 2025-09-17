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
    <section id="testimonios" className="py-20 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto text-pretty">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-muted mb-6 text-pretty">
                "{testimonials[currentIndex].comment}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted">Cliente Verificado</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
