"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Settings, Package, FileText, Save } from "lucide-react"
import { getSiteContent, getAllProducts } from "@/lib/data"

export default function AdminPage() {
  const { toast } = useToast()
  const initialContent = getSiteContent()
  const initialProducts = getAllProducts()

  const [siteContent, setSiteContent] = useState(initialContent)
  const [products, setProducts] = useState(initialProducts)
  const [isSaving, setIsSaving] = useState(false)

  const handleSaveContent = async () => {
    setIsSaving(true)

    // Simulate saving - In production, this would call an API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "İçerik kaydedildi!",
      description: "Site içeriği başarıyla güncellendi.",
    })

    setIsSaving(false)
  }

  const handleSaveProducts = async () => {
    setIsSaving(true)

    // Simulate saving - In production, this would call an API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Ürünler kaydedildi!",
      description: "Ürün bilgileri başarıyla güncellendi.",
    })

    setIsSaving(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Yönetim Paneli</h1>
            <p className="text-muted-foreground">Site içeriğini ve ürünleri buradan yönetebilirsiniz.</p>
          </div>

          <Tabs defaultValue="content" className="space-y-6">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="content">
                <FileText className="mr-2 h-4 w-4" />
                İçerik
              </TabsTrigger>
              <TabsTrigger value="products">
                <Package className="mr-2 h-4 w-4" />
                Ürünler
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="mr-2 h-4 w-4" />
                Ayarlar
              </TabsTrigger>
            </TabsList>

            {/* Content Management */}
            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ana Sayfa Hero Bölümü</CardTitle>
                  <CardDescription>Hero bölümünün başlık ve açıklama metinlerini düzenleyin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-title">Başlık</Label>
                    <Input
                      id="hero-title"
                      value={siteContent.hero.title}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          hero: { ...siteContent.hero, title: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-subtitle">Alt Başlık</Label>
                    <Textarea
                      id="hero-subtitle"
                      value={siteContent.hero.subtitle}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          hero: { ...siteContent.hero, subtitle: e.target.value },
                        })
                      }
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-cta">Buton Metni</Label>
                    <Input
                      id="hero-cta"
                      value={siteContent.hero.ctaText}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          hero: { ...siteContent.hero, ctaText: e.target.value },
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hakkımızda Bölümü</CardTitle>
                  <CardDescription>Şirket bilgilerini ve değerlerini düzenleyin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="about-title">Başlık</Label>
                    <Input
                      id="about-title"
                      value={siteContent.about.title}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          about: { ...siteContent.about, title: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="about-description">Açıklama</Label>
                    <Textarea
                      id="about-description"
                      value={siteContent.about.description}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          about: { ...siteContent.about, description: e.target.value },
                        })
                      }
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="about-mission">Misyon</Label>
                    <Textarea
                      id="about-mission"
                      value={siteContent.about.mission}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          about: { ...siteContent.about, mission: e.target.value },
                        })
                      }
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>İletişim Bilgileri</CardTitle>
                  <CardDescription>İletişim bilgilerini güncelleyin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Telefon</Label>
                      <Input
                        id="contact-phone"
                        value={siteContent.contact.phone}
                        onChange={(e) =>
                          setSiteContent({
                            ...siteContent,
                            contact: { ...siteContent.contact, phone: e.target.value },
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                      <Input
                        id="contact-whatsapp"
                        value={siteContent.contact.whatsapp}
                        onChange={(e) =>
                          setSiteContent({
                            ...siteContent,
                            contact: { ...siteContent.contact, whatsapp: e.target.value },
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">E-posta</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={siteContent.contact.email}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          contact: { ...siteContent.contact, email: e.target.value },
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-address">Adres</Label>
                    <Textarea
                      id="contact-address"
                      value={siteContent.contact.address}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          contact: { ...siteContent.contact, address: e.target.value },
                        })
                      }
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-hours">Çalışma Saatleri</Label>
                    <Input
                      id="contact-hours"
                      value={siteContent.contact.workingHours}
                      onChange={(e) =>
                        setSiteContent({
                          ...siteContent,
                          contact: { ...siteContent.contact, workingHours: e.target.value },
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Button onClick={handleSaveContent} disabled={isSaving} size="lg" className="w-full sm:w-auto">
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
              </Button>
            </TabsContent>

            {/* Products Management */}
            <TabsContent value="products" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ürün Yönetimi</CardTitle>
                  <CardDescription>Ürünleri düzenlemek için aşağıdaki JSON dosyasını güncelleyin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="products-json">Ürünler (JSON Format)</Label>
                    <Textarea
                      id="products-json"
                      value={JSON.stringify({ products }, null, 2)}
                      onChange={(e) => {
                        try {
                          const parsed = JSON.parse(e.target.value)
                          setProducts(parsed.products)
                        } catch (error) {
                          // Invalid JSON, don't update
                        }
                      }}
                      rows={20}
                      className="font-mono text-sm"
                    />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Ürün Yapısı:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        • <strong>id:</strong> Benzersiz ürün kimliği
                      </li>
                      <li>
                        • <strong>name:</strong> Ürün adı
                      </li>
                      <li>
                        • <strong>slug:</strong> URL dostu isim (örn: premium-urun-a)
                      </li>
                      <li>
                        • <strong>shortDescription:</strong> Kısa açıklama
                      </li>
                      <li>
                        • <strong>price:</strong> Fiyat (string)
                      </li>
                      <li>
                        • <strong>currency:</strong> Para birimi (TL)
                      </li>
                      <li>
                        • <strong>category:</strong> Kategori adı
                      </li>
                      <li>
                        • <strong>featured:</strong> Öne çıkan mı? (true/false)
                      </li>
                      <li>
                        • <strong>inStock:</strong> Stokta mı? (true/false)
                      </li>
                      <li>
                        • <strong>fullDescription:</strong> Detaylı açıklama
                      </li>
                      <li>
                        • <strong>features:</strong> Özellikler listesi (array)
                      </li>
                      <li>
                        • <strong>specifications:</strong> Teknik özellikler (object)
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={handleSaveProducts} disabled={isSaving} size="lg" className="w-full sm:w-auto">
                <Save className="mr-2 h-4 w-4" />
                {isSaving ? "Kaydediliyor..." : "Ürünleri Kaydet"}
              </Button>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dosya Konumları</CardTitle>
                  <CardDescription>İçerik dosyalarının konumları</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Site İçeriği</Label>
                    <code className="block p-3 bg-muted rounded text-sm">data/site-content.json</code>
                    <p className="text-sm text-muted-foreground">Hero, hakkımızda ve iletişim bölümlerinin içeriği</p>
                  </div>
                  <div className="space-y-2">
                    <Label>Ürünler</Label>
                    <code className="block p-3 bg-muted rounded text-sm">data/products.json</code>
                    <p className="text-sm text-muted-foreground">Tüm ürün bilgileri ve özellikleri</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kullanım Talimatları</CardTitle>
                  <CardDescription>İçerik yönetimi için ipuçları</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">1. İçerik Düzenleme</h4>
                    <p className="text-muted-foreground">
                      İçerik sekmesinden site metinlerini doğrudan düzenleyebilirsiniz. Değişiklikler anında kaydedilir.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">2. Ürün Ekleme/Düzenleme</h4>
                    <p className="text-muted-foreground">
                      Ürünler sekmesinde JSON formatında ürün ekleyebilir veya mevcut ürünleri düzenleyebilirsiniz. JSON
                      formatına dikkat edin.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">3. Görseller</h4>
                    <p className="text-muted-foreground">
                      Ürün görselleri için /public klasörüne resim yükleyin ve ürün JSON'unda image alanına yolunu yazın
                      (örn: /images/urun1.jpg)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">4. Harita</h4>
                    <p className="text-muted-foreground">
                      Google Maps'ten embed kodu alıp contact.mapUrl alanına yapıştırın.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
