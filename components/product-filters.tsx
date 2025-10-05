"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ProductFiltersProps = {
  searchQuery: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  categories: string[]
  showInStock: boolean
  onInStockChange: (value: boolean) => void
}

export function ProductFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  showInStock,
  onInStockChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-4 p-6 bg-muted/30 rounded-lg">
      <div>
        <Label htmlFor="search" className="mb-2 block">
          Ürün Ara
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            type="search"
            placeholder="Ürün adı veya açıklama..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="category" className="mb-2 block">
          Kategori
        </Label>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger id="category">
            <SelectValue placeholder="Tüm Kategoriler" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tüm Kategoriler</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="inStock"
          checked={showInStock}
          onChange={(e) => onInStockChange(e.target.checked)}
          className="h-4 w-4 rounded border-input"
        />
        <Label htmlFor="inStock" className="cursor-pointer">
          Sadece stokta olanları göster
        </Label>
      </div>

      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() => {
          onSearchChange("")
          onCategoryChange("all")
          onInStockChange(false)
        }}
      >
        Filtreleri Temizle
      </Button>
    </div>
  )
}
