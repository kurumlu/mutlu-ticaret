import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">Ş</span>
              </div>
              <span className="text-xl font-bold">Şirketiniz</span>
            </div>
            <p className="text-sm text-muted-foreground">
              2010 yılından bu yana kaliteli hizmet anlayışıyla yanınızdayız.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="#hakkimizda" className="text-muted-foreground hover:text-foreground transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#iletisim" className="text-muted-foreground hover:text-foreground transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kategoriler</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Premium Ürünler</li>
              <li className="text-muted-foreground">Standart Ürünler</li>
              <li className="text-muted-foreground">Profesyonel Çözümler</li>
              <li className="text-muted-foreground">Özel Seriler</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Atatürk Caddesi No: 123, Çankaya, Ankara</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+90 312 123 45 67</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@sirketiniz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Şirketiniz. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
