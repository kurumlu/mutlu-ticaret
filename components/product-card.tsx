import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package } from "lucide-react"
import type { Product } from "@/lib/data"

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/urunler/${product.slug}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-video relative overflow-hidden bg-muted">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-full" />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                <Package className="h-5 w-5" />
                Stokta Yok
              </div>
            </div>
          )}
          {product.featured && product.inStock && (
            <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Öne Çıkan
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded whitespace-nowrap">
              {product.category}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.shortDescription}</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">{product.price}</span>
              <span className="text-sm text-muted-foreground ml-1">{product.currency}</span>
            </div>
            <Button variant="ghost" size="sm">
              Detaylar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
