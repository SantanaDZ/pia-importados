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
    <section id="depoimentos" className="py-12 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="mt-3 lg:mt-6 text-sm lg:text-lg text-muted-foreground leading-relaxed">
            Centenas de clientes satisfeitos em todo o Brasil. Confira algumas histórias de quem já comprou conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative p-4 lg:p-8 rounded-2xl bg-card border border-border/50 hover-lift"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 lg:top-6 lg:right-6 h-6 w-6 lg:h-10 lg:w-10 text-accent/20" />

              {/* Rating */}
              <div className="flex items-center gap-0.5 lg:gap-1 mb-3 lg:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 lg:h-5 lg:w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed text-xs lg:text-lg mb-4 lg:mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs lg:text-base font-semibold shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm lg:text-base">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-8 lg:mt-16 text-center">
          <div className="inline-flex items-center gap-4 lg:gap-6 px-5 py-3 lg:px-8 lg:py-4 rounded-full bg-muted">
            <div className="flex -space-x-2 lg:-space-x-3">
              {["MS", "RC", "JM", "PA"].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-primary border-2 border-background flex items-center justify-center text-primary-foreground text-[10px] lg:text-xs font-medium"
                >
                  {initials}
                </div>
              ))}
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-accent border-2 border-background flex items-center justify-center text-accent-foreground text-[10px] lg:text-xs font-medium">
                +500
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground text-sm lg:text-base">Mais de 500 clientes satisfeitos</div>
              <div className="text-xs lg:text-sm text-muted-foreground">Avaliação média de 4.9 estrelas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
