"use client"

import { Shield, Award, Truck, Headphones, RefreshCcw, CreditCard } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Garantia Real",
    description: "Todos os aparelhos com garantia de 3 meses contra defeitos de fabricação. Sua segurança em primeiro lugar.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Avaliação rigorosa de cada aparelho. Bateria acima de 80%, sem marcas de uso visíveis.",
  },
  {
    icon: RefreshCcw,
    title: "Procedência Garantida",
    description: "iPhones originais com nota fiscal. Verificação completa de IMEI e desbloqueio.",
  },
  {
    icon: CreditCard,
    title: "Parcelamento",
    description: "Pague em até 12x no cartão ou à vista com desconto especial via PIX.",
  },
  {
    icon: Truck,
    title: "Entrega Segura",
    description: "Enviamos para todo o Brasil com rastreamento. Embalagem premium e segura.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Atendimento humanizado via WhatsApp. Tire dúvidas antes e depois da compra.",
  },
]

export function Features() {
  return (
    <section id="diferenciais" className="py-12 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-accent/20 text-accent text-xs lg:text-sm font-medium mb-4 lg:mb-6">
            Por que escolher a Piá?
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground">
            A experiência completa que você merece
          </h2>
          <p className="mt-3 lg:mt-6 text-sm lg:text-lg text-primary-foreground/70 leading-relaxed">
            Mais do que vender iPhones, entregamos confiança, qualidade e um
            atendimento que faz a diferença.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-4 lg:p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-accent/20 text-accent mb-3 lg:mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-5 w-5 lg:h-7 lg:w-7" />
              </div>

              {/* Content */}
              <h3 className="text-sm lg:text-xl font-semibold text-primary-foreground mb-1.5 lg:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs lg:text-base text-primary-foreground/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Number */}
              <div className="absolute top-3 right-3 lg:top-6 lg:right-6 text-3xl lg:text-5xl font-bold text-primary-foreground/5">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
