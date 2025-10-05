import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

type HeroSectionProps = {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  imageUrl: string
}

export function HeroSection({ title, subtitle, ctaText, ctaLink, imageUrl }: HeroSectionProps) {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={imageUrl || "/placeholder.svg"} alt="Hero background" className="h-full w-full object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-center">
        <div className="max-w-3xl text-white p-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">{title}</h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 text-pretty">{subtitle}</p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
