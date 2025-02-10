import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Heartfelt Moments - Event Planning",
  description: "Crafting memories that last a lifetime. Professional event planning services for all occasions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

