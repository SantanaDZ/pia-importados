"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Instagram, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Início", href: "#" },
  { name: "Produtos", href: "#produtos" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src="/logo.jpg"
              alt="Piá Importados"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Piá
            </span>
            <span className="text-xs text-muted-foreground block -mt-1 tracking-widest uppercase">
              Importados
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link
            href="https://instagram.com/piaimportadosbh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass border-t border-border/50">
          <div className="px-6 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-foreground hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex items-center gap-4">
              <Link
                href="https://instagram.com/piaimportadosbh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                @piaimportadosbh
              </Link>
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
