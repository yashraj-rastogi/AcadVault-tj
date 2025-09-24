import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
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
<<<<<<< HEAD
        <Suspense fallback={null}>{children}</Suspense>
=======
          <div className="flex justify-center min-h-screen w-full bg-gradient-to-br from-white to-gray-50">
            {/* Max width centers content + responsive padding */}
            <div className="w-full max-w-5xl px-4 py-12 flex flex-col items-center">
              <Suspense fallback={null}>{children}</Suspense>
            </div>
          </div>
>>>>>>> 5402ed6cdd0e46a1a78d63de63994b9609c02734
        </SidebarProvider>
        <Analytics />
      </body>
    </html>
  )
}
