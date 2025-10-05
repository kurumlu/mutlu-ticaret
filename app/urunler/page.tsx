"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilters } from "@/components/product-filters"
import { ProductCard } from "@/components/product-card"
import { getAllProducts } from "@/lib/data"
import { Package } from "lucide-react"

export default function ProductsPage() {
  const allProducts = getAllProducts()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showInStock, setShowInStock] = useState(false)

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(allProducts.map((p) => p.category))
    return Array.from(cats).sort()
  }, [allProducts])

  // Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())

      // Category filter
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

      // Stock filter
      const matchesStock = !showInStock || product.inStock

      return matchesSearch && matchesCategory && matchesStock
    })
  }, [allProducts, searchQuery, selectedCategory, showInStock])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ürünlerimiz</h1>
              <p className="text-lg text-muted-foreground">
                Kaliteli ve güvenilir ürünlerimizi keşfedin. Her bütçeye uygun çözümler sunuyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
              {/* Filters Sidebar */}
              <aside className="lg:sticky lg:top-20 h-fit">
                <ProductFilters
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  categories={categories}
                  showInStock={showInStock}
                  onInStockChange={setShowInStock}
                />
              </aside>

              {/* Products Grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredProducts.length}</span> ürün bulundu
                  </p>
                </div>

                {filteredProducts.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Ürün bulunamadı</h3>
                    <p className="text-muted-foreground mb-6">
                      Arama kriterlerinize uygun ürün bulunamadı. Lütfen filtreleri değiştirip tekrar deneyin.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
