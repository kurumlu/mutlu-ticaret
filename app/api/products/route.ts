import { NextResponse } from "next/server"
import { getAllProducts } from "@/lib/data"

export async function GET() {
  try {
    const products = getAllProducts()
    return NextResponse.json({ products })
  } catch (error) {
    return NextResponse.json({ error: "Ürünler yüklenemedi" }, { status: 500 })
  }
}
