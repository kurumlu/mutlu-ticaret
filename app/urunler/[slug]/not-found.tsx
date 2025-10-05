import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Package } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container text-center">
          <Package className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-4xl font-bold mb-4">Ürün Bulunamadı</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Aradığınız ürün bulunamadı veya artık mevcut değil. Lütfen diğer ürünlerimize göz atın.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/urunler">Tüm Ürünler</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Ana Sayfa</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
