"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    content: "Comprei meu iPhone 15 Pro Max e chegou impecável! Bateria 100%, sem nenhum risco. Atendimento incrível pelo WhatsApp, responderam todas as minhas dúvidas.",
    author: "Marina Silva",
    role: "Designer, São Paulo",
    rating: 5,
    avatar: "MS",
  },
  {
    content: "Segundo iPhone que compro na Piá. Preço justo, produto original e garantia que funciona de verdade. Recomendo para todos os meus amigos!",
    author: "Rafael Costa",
    role: "Empresário, Belo Horizonte",
    rating: 5,
    avatar: "RC",
  },
  {
    content: "Estava receosa de comprar seminovo online, mas a Piá me passou muita confiança. O iPhone veio melhor do que esperava, nota fiscal e tudo certinho.",
    author: "Juliana Mendes",
    role: "Advogada, Rio de Janeiro",
    rating: 5,
    avatar: "JM",
  },
  {
    content: "Entrega super rápida para Curitiba! Embalagem caprichada, aparelho perfeito. Com certeza minha próxima compra será com eles também.",
    author: "Pedro Almeida",
    role: "Médico, Curitiba",
    rating: 5,
    avatar: "PA",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Centenas de clientes satisfeitos em todo o Brasil. Confira algumas histórias de quem já comprou conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl bg-card border border-border/50 hover-lift"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed text-lg mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full bg-muted">
            <div className="flex -space-x-3">
              {["MS", "RC", "JM", "PA"].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-primary border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-medium"
                >
                  {initials}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-accent border-2 border-background flex items-center justify-center text-accent-foreground text-xs font-medium">
                +500
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Mais de 500 clientes satisfeitos</div>
              <div className="text-sm text-muted-foreground">Avaliação média de 4.9 estrelas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
