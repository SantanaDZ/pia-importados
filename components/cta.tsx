"use client"

import { MessageCircle, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CTA() {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl bg-primary overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground">
                  Pronto para ter seu iPhone?
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas. 
                  Atendimento rápido, personalizado e sem compromisso.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-base font-medium group"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chamar no WhatsApp
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base font-medium"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    @piaimportadosbh
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-10 pt-10 border-t border-primary-foreground/10">
                  <p className="text-primary-foreground/60 text-sm">
                    Horário de atendimento: Segunda a Sábado, 9h às 20h
                  </p>
                </div>
              </div>

              {/* Image/Logo */}
              <div className="hidden lg:flex justify-center">
                <div className="relative w-72 h-72">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl" />
                  <div className="relative w-full h-full rounded-3xl bg-primary-foreground/10 border border-primary-foreground/10 p-12 flex items-center justify-center">
                    <Image
                      src="/logo.jpg"
                      alt="Piá Importados"
                      width={200}
                      height={200}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
