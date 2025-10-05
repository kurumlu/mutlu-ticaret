# Türkçe Tarım Ekipmanları Web Sitesi

Next.js 15 ve shadcn/ui ile geliştirilmiş modern, responsive tarım ekipmanları kurumsal web sitesi.

## Özellikler

- ✅ Tam responsive tasarım (mobil, tablet, masaüstü)
- ✅ Türkçe dil desteği
- ✅ Etkileyici hero bölümü ile ana sayfa
- ✅ Hakkımızda bölümü
- ✅ İletişim formu ve WhatsApp entegrasyonu
- ✅ Google Maps entegrasyonu
- ✅ Ürün listeleme ve detay sayfaları
- ✅ Ürün filtreleme ve arama
- ✅ Kolay içerik yönetimi paneli
- ✅ SEO dostu yapı
- ✅ Erişilebilirlik standartları

## Hızlı Başlangıç

### Gereksinimler

- Node.js 18.0.0 veya üzeri
- npm, yarn veya pnpm

### Kurulum

1. Bağımlılıkları yükleyin:

\`\`\`bash
npm install
# veya
yarn install
# veya
pnpm install
\`\`\`

2. Geliştirme sunucusunu başlatın:

\`\`\`bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
\`\`\`

3. Tarayıcınızda açın: [http://localhost:3000](http://localhost:3000)

## Vercel'e Deployment

### Adım 1: GitHub'a Yükleme

\`\`\`bash
git init
git add .
git commit -m "Initial commit: Turkish agricultural website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
\`\`\`

### Adım 2: Vercel'de Deploy

1. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
2. "Add New Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Vercel otomatik olarak Next.js ayarlarını algılayacaktır
5. "Deploy" butonuna tıklayın

Deployment tamamlandığında siteniz canlıya alınmış olacaktır!

## İçerik Yönetimi

### Yönetim Paneli ile Düzenleme

Tarayıcınızda `/admin` adresine giderek yönetim paneline erişebilirsiniz:

\`\`\`
http://localhost:3000/admin
\`\`\`

veya canlı sitede:

\`\`\`
https://your-domain.vercel.app/admin
\`\`\`

Yönetim panelinden yapabilecekleriniz:
- ✏️ Site içeriğini düzenleme (hero, hakkımızda, iletişim)
- ➕ Ürün ekleme
- ✏️ Ürün düzenleme
- 🗑️ Ürün silme
- 📞 İletişim bilgilerini güncelleme

### Manuel JSON Düzenleme

Alternatif olarak, JSON dosyalarını doğrudan düzenleyebilirsiniz:

#### Site İçeriği (`data/site-content.json`)

\`\`\`json
{
  "hero": {
    "title": "Ana başlık",
    "subtitle": "Alt başlık",
    "ctaText": "Buton metni",
    "ctaLink": "/urunler"
  },
  "about": { ... },
  "contact": { ... }
}
\`\`\`

#### Ürünler (`data/products.json`)

\`\`\`json
{
  "products": [
    {
      "id": "urun-1",
      "name": "Ürün Adı",
      "slug": "urun-adi",
      "price": "10.000",
      ...
    }
  ]
}
\`\`\`

## Ürün Görselleri Ekleme

1. Görseli `/public/images/` klasörüne yükleyin
2. `data/products.json` dosyasında ilgili ürünün `image` alanını güncelleyin:

\`\`\`json
{
  "image": "/images/traktor-150hp.jpg"
}
\`\`\`

## Google Maps Entegrasyonu

Harita konumunu değiştirmek için:

1. [Google Maps](https://www.google.com/maps) adresine gidin
2. İşletmenizin konumunu bulun
3. "Paylaş" butonuna tıklayın
4. "Haritayı göm" sekmesini seçin
5. Embed kodunu kopyalayın
6. `data/site-content.json` dosyasında `contact.mapUrl` alanına yapıştırın

## WhatsApp Entegrasyonu

WhatsApp numarasını değiştirmek için:

1. `data/site-content.json` dosyasını açın
2. `contact.whatsapp` alanını güncelleyin
3. Ülke kodu ile birlikte, boşluksuz yazın (örn: "+905321234567")

## Proje Yapısı

\`\`\`
turkish-agricultural-enterprise/
├── app/
│   ├── page.tsx                    # Ana sayfa
│   ├── layout.tsx                  # Ana layout
│   ├── globals.css                 # Global stiller
│   ├── urunler/
│   │   ├── page.tsx                # Ürün listesi sayfası
│   │   └── [slug]/
│   │       ├── page.tsx            # Ürün detay sayfası
│   │       └── not-found.tsx       # 404 sayfası
│   ├── admin/
│   │   ├── page.tsx                # Yönetim paneli
│   │   └── layout.tsx              # Admin layout
│   └── api/
│       ├── content/route.ts        # İçerik API
│       └── products/
│           ├── route.ts            # Ürünler API
│           └── [slug]/route.ts     # Tek ürün API
├── components/
│   ├── header.tsx                  # Site başlığı
│   ├── footer.tsx                  # Site alt bilgisi
│   ├── hero-section.tsx            # Hero bölümü
│   ├── about-section.tsx           # Hakkımızda bölümü
│   ├── contact-section.tsx         # İletişim bölümü
│   ├── product-card.tsx            # Ürün kartı
│   ├── product-filters.tsx         # Ürün filtreleri
│   └── ui/                         # shadcn/ui bileşenleri
├── data/
│   ├── site-content.json           # Site içeriği
│   └── products.json               # Ürün verileri
├── lib/
│   ├── data.ts                     # Veri yönetimi
│   └── utils.ts                    # Yardımcı fonksiyonlar
├── public/
│   ├── hero-image.png              # Hero görseli
│   └── images/                     # Ürün görselleri
├── package.json                    # Proje bağımlılıkları
├── tsconfig.json                   # TypeScript yapılandırması
├── next.config.mjs                 # Next.js yapılandırması
└── README.md                       # Bu dosya
\`\`\`

## Teknolojiler

- **Next.js 15** - React framework (App Router)
- **TypeScript** - Tip güvenliği
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Yeniden kullanılabilir UI bileşenleri
- **Geist Font** - Modern tipografi
- **Lucide React** - İkon kütüphanesi
- **React Hook Form** - Form yönetimi
- **Zod** - Şema validasyonu

## Özelleştirme

### Renk Paleti

`app/globals.css` dosyasında renk paletini özelleştirebilirsiniz:

\`\`\`css
@theme inline {
  --primary: oklch(0.45 0.15 142);
  --secondary: oklch(0.35 0.12 142);
  /* diğer renkler */
}
\`\`\`

### Şirket Logosu

Logo eklemek için:

1. Logo dosyasını `/public/logo.png` olarak kaydedin
2. `components/header.tsx` ve `components/footer.tsx` dosyalarını düzenleyin
3. Placeholder metni yerine logo görselini kullanın

### Font Değiştirme

`app/layout.tsx` dosyasında font'u değiştirebilirsiniz:

\`\`\`tsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
\`\`\`

## Build ve Production

### Production Build

\`\`\`bash
npm run build
\`\`\`

### Production Sunucusu

\`\`\`bash
npm start
\`\`\`

### Lint Kontrolü

\`\`\`bash
npm run lint
\`\`\`

## Performans Optimizasyonu

- ✅ Next.js Image Optimization otomatik aktif
- ✅ Static Generation kullanılıyor
- ✅ Code splitting otomatik yapılıyor
- ✅ Font optimization aktif
- ✅ CSS minification aktif

## SEO

Her sayfa için meta etiketleri otomatik oluşturulur:
- Sayfa başlıkları
- Açıklamalar
- Open Graph etiketleri
- Twitter Card etiketleri

## Tarayıcı Desteği

- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

## Destek ve İletişim

Sorularınız için:
- 📧 E-posta: info@tarimekipmanlari.com
- 📱 WhatsApp: +90 532 123 45 67
- 🌐 Web: https://your-domain.vercel.app

## Lisans

MIT License - Ticari kullanım için uygundur.

---

**Not:** Bu proje Vercel'de barındırılmak üzere optimize edilmiştir. Diğer platformlarda da çalışır ancak en iyi performans için Vercel önerilir.
