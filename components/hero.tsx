"use client"

import { ArrowRight, Shield, Award, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-8">
              <Shield className="h-4 w-4" />
              <span>Garantia em todos os aparelhos</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary-foreground leading-tight">
              <span className="block">iPhone</span>
              <span className="block text-gradient">Seminovo</span>
              <span className="block">Premium.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-lg sm:text-xl text-primary-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Aparelhos selecionados com garantia, qualidade e procedência. 
              A experiência Apple que você merece, com o preço que cabe no seu bolso.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base font-medium"
              >
                Ver Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base font-medium"
              >
                Falar no WhatsApp
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/60 mt-1">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">3 meses</div>
                <div className="text-sm text-primary-foreground/60 mt-1">de Garantia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/60 mt-1">Original</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl transform scale-90" />
              
              {/* Product Image Container */}
              <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-primary-foreground/10 to-transparent p-8 backdrop-blur-sm border border-primary-foreground/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3dwQUGpmOu65aPGsBlC3mahmXBM7yP.png"
                  alt="iPhones Piá Importados"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
