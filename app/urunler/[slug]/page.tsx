import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { getProductBySlug, getAllProducts } from "@/lib/data"
import { ArrowLeft, Check, Package, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Ürün Bulunamadı",
    }
  }

  return {
    title: `${product.name} - Şirketiniz`,
    description: product.shortDescription,
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Merhaba, ${product.name} ürünü hakkında bilgi almak istiyorum.`)
    return `https://wa.me/905321234567?text=${message}`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-6">
          <div className="container">
            <Link
              href="/urunler"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Ürünlere Dön
            </Link>
          </div>
        </section>

        {/* Product Detail */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Product Image */}
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="bg-destructive text-destructive-foreground px-6 py-3 rounded-lg font-semibold text-lg flex items-center gap-2">
                      <Package className="h-6 w-6" />
                      Stokta Yok
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">
                    {product.category}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                  <p className="text-lg text-muted-foreground">{product.shortDescription}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{product.price}</span>
                    <span className="text-xl text-muted-foreground">{product.currency}</span>
                  </div>
                  {product.inStock ? (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2 flex items-center gap-1">
                      <Check className="h-4 w-4" />
                      Stokta mevcut
                    </p>
                  ) : (
                    <p className="text-sm text-destructive mt-2">Şu anda stokta bulunmamaktadır</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button size="lg" className="flex-1" asChild>
                    <a href={`tel:+903121234567`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Hemen Ara
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={handleWhatsAppContact()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <Separator className="my-6" />

                {/* Product Description */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-3">Ürün Açıklaması</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
                </div>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-3">Özellikler</h2>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <Card className="mt-12">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Teknik Özellikler</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">{key}</p>
                        <p className="text-base font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact CTA */}
            <Card className="mt-12 bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">Sorularınız mı var?</h2>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  Ürünlerimiz hakkında detaylı bilgi almak veya özel fiyat teklifi için bizimle iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/#iletisim">İletişime Geç</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    asChild
                  >
                    <Link href="/urunler">Diğer Ürünler</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
