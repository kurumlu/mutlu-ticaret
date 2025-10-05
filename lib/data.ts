import siteContent from "@/data/site-content.json"
import productsData from "@/data/products.json"

export type Product = {
  id: string
  name: string
  slug: string
  shortDescription: string
  price: string
  currency: string
  image: string
  category: string
  featured: boolean
  inStock: boolean
  fullDescription: string
  features: string[]
  specifications: Record<string, string>
}

export type SiteContent = typeof siteContent

export function getSiteContent(): SiteContent {
  return siteContent
}

export function getAllProducts(): Product[] {
  return productsData.products
}

export function getFeaturedProducts(): Product[] {
  return productsData.products.filter((product) => product.featured)
}

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return productsData.products.filter((product) => product.category === category)
}
