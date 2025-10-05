import { NextResponse } from "next/server"
import { getProductBySlug } from "@/lib/data"

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const product = getProductBySlug(slug)

    if (!product) {
      return NextResponse.json({ error: "Ürün bulunamadı" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: "Ürün yüklenemedi" }, { status: 500 })
  }
}
