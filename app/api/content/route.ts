import { NextResponse } from "next/server"
import { getSiteContent } from "@/lib/data"

export async function GET() {
  try {
    const content = getSiteContent()
    return NextResponse.json(content)
  } catch (error) {
    return NextResponse.json({ error: "İçerik yüklenemedi" }, { status: 500 })
  }
}
