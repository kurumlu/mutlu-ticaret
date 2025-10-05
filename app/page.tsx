import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { getSiteContent, getFeaturedProducts } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Package } from "lucide-react"

export default function HomePage() {
  const content = getSiteContent()
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          ctaText={content.hero.ctaText}
          ctaLink={content.hero.ctaLink}
          imageUrl="/hero-image.png"
        />

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 p-8">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Öne Çıkan Ürünler</h2>
                <p className="text-muted-foreground">En popüler ve kaliteli ürünlerimiz</p>
              </div>
              <Button asChild variant="outline" className="hidden sm:flex bg-transparent">
                <Link href="/urunler">
                  Tüm Ürünler
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <Link key={product.id} href={`/urunler/${product.slug}`}>
                  <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                      {!product.inStock && (
                        <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          Stokta Yok
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded whitespace-nowrap">
                          {product.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.shortDescription}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          {product.price} {product.currency}
                        </span>
                        <Button variant="ghost" size="sm">
                          Detaylar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/urunler">
                  Tüm Ürünleri Görüntüle
                  <Package className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <AboutSection
          title={content.about.title}
          description={content.about.description}
          mission={content.about.mission}
          values={content.about.values}
        />

        <ContactSection contact={content.contact} />
      </main>

      <Footer />
    </div>
  )
}
