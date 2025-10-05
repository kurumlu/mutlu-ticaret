"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type ContactInfo = {
  title: string
  address: string
  phone: string
  whatsapp: string
  email: string
  mapUrl: string
  workingHours: string
}

type ContactSectionProps = {
  contact: ContactInfo
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Mesajınız gönderildi!",
      description: "En kısa sürede size dönüş yapacağız.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Merhaba, ürünleriniz hakkında bilgi almak istiyorum.")
    window.open(`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
  }

  return (
    <section id="iletisim" className="py-16 md:py-24 p-8">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{contact.title}</h2>
          <p className="text-lg text-muted-foreground">
            Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Bize Mesaj Gönderin</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ad Soyad
                    </label>
                    <Input id="name" name="name" required placeholder="Adınız Soyadınız" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefon
                    </label>
                    <Input id="phone" name="phone" type="tel" required placeholder="+90 5XX XXX XX XX" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-posta
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="ornek@email.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Konu
                  </label>
                  <Input id="subject" name="subject" required placeholder="Mesaj konusu" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mesajınız
                  </label>
                  <Textarea id="message" name="message" required placeholder="Mesajınızı buraya yazın..." rows={5} />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-sm text-muted-foreground">{contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a href={`tel:${contact.phone}`} className="text-sm text-muted-foreground hover:text-primary">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">E-posta</h3>
                    <a href={`mailto:${contact.email}`} className="text-sm text-muted-foreground hover:text-primary">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
                    <p className="text-sm text-muted-foreground">{contact.workingHours}</p>
                  </div>
                </div>

                <Button onClick={handleWhatsApp} className="w-full bg-transparent" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp ile İletişime Geç
                </Button>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={contact.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Şirket Konumu"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
