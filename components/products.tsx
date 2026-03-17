"use client"

import { useState } from "react"
import { MessageCircle, ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { id: "all", name: "Todos" },
  { id: "pro-max", name: "Pro Max" },
  { id: "pro", name: "Pro" },
  { id: "standard", name: "Standard" },
]

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    storage: "256GB",
    condition: "Impecável",
    price: "6.499",
    originalPrice: "9.499",
    color: "Titânio Natural",
    category: "pro-max",
    badge: "Mais Vendido",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1692845702708"
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    storage: "512GB",
    condition: "Como Novo",
    price: "7.299",
    originalPrice: "11.499",
    color: "Titânio Preto",
    category: "pro-max",
    badge: null,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1692845699311"
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    storage: "128GB",
    condition: "Excelente",
    price: "5.299",
    originalPrice: "7.799",
    color: "Titânio Azul",
    category: "pro",
    badge: "Oferta",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1692845696320"
  },
  {
    id: 4,
    name: "iPhone 15 Pro",
    storage: "256GB",
    condition: "Impecável",
    price: "5.899",
    originalPrice: "8.799",
    color: "Titânio Branco",
    category: "pro",
    badge: null,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1692845701701"
  },
  {
    id: 5,
    name: "iPhone 15",
    storage: "128GB",
    condition: "Excelente",
    price: "4.299",
    originalPrice: "5.999",
    color: "Rosa",
    category: "standard",
    badge: null,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1692923780020"
  },
  {
    id: 6,
    name: "iPhone 14 Pro Max",
    storage: "256GB",
    condition: "Impecável",
    price: "5.499",
    originalPrice: "8.299",
    color: "Roxo Profundo",
    category: "pro-max",
    badge: "Última Unidade",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1663703841896"
  },
]

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="produtos" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Aparelhos Disponíveis
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Todos os nossos iPhones passam por uma rigorosa avaliação de qualidade.
            Garantimos procedência e funcionamento perfeito.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group hover-lift bg-card border-border/50 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative aspect-square bg-muted/50 p-8">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        <Sparkles className="h-3 w-3" />
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {product.storage} • {product.color}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full whitespace-nowrap">
                      {product.condition}
                    </span>
                  </div>

                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-foreground">
                      R$ {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      R$ {product.originalPrice}
                    </span>
                  </div>

                  <Button 
                    className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group/btn"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Tenho Interesse
                    <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Ver Todos os Produtos
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
