import type { ReactNode } from "react"

export const metadata = {
  title: "Yönetim Paneli - Şirketiniz",
  description: "Site içeriği ve ürün yönetimi",
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return children
}
