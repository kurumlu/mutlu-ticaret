import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

type Value = {
  title: string
  description: string
}

type AboutSectionProps = {
  title: string
  description: string
  mission: string
  values: Value[]
}

export function AboutSection({ title, description, mission, values }: AboutSectionProps) {
  return (
    <section id="hakkimizda" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-muted-foreground text-pretty">{description}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Misyonumuz
              </h3>
              <p className="text-primary-foreground/90 text-pretty">{mission}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
