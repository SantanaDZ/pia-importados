"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Início", href: "#" },
    { name: "Produtos", href: "#produtos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ],
  products: [
    { name: "iPhone 15 Pro Max", href: "#produtos" },
    { name: "iPhone 15 Pro", href: "#produtos" },
    { name: "iPhone 15", href: "#produtos" },
    { name: "iPhone 14 Pro", href: "#produtos" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#" className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-lg">
                <Image
                  src="/logo.jpg"
                  alt="Piá Importados"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-semibold tracking-tight text-primary-foreground">
                  Piá
                </span>
                <span className="text-xs text-primary-foreground/60 block -mt-1 tracking-widest uppercase">
                  Importados
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/60 leading-relaxed mb-6">
              Sua loja de confiança para iPhones seminovos com garantia. 
              Qualidade, procedência e atendimento premium.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://instagram.com/piaimportadosbh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground tracking-wider uppercase mb-6">
              Navegação
            </h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground tracking-wider uppercase mb-6">
              Produtos
            </h3>
            <ul className="space-y-4">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground tracking-wider uppercase mb-6">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60">
                  Belo Horizonte, MG<br />
                  Atendemos todo o Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span className="text-primary-foreground/60">
                  WhatsApp disponível
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-accent shrink-0" />
                <Link
                  href="https://instagram.com/piaimportadosbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  @piaimportadosbh
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Piá Importados. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/40">
            iPhone é marca registrada da Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
