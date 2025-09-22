import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar" 

export const metadata: Metadata = {
  title: "AcadVault - Academic Achievement Platform",
  description:
    "Comprehensive platform for students and faculty to manage academic achievements, build portfolios, and streamline mentorship",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <SidebarProvider>
        <Suspense fallback={null}>{children}</Suspense>
        </SidebarProvider>
        <Analytics />
      </body>
    </html>
  )
}
