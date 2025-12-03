import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { VisitTracker } from "@/components/visit-tracker"
import { ChatBot } from "@/components/chat-bot"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Besufikad Zeneb - Full Stack Developer",
  description:
    "Personal portfolio of Besufikad Zeneb, Full Stack Developer and Software Engineering graduate from Addis Ababa Science and Technology University",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
          <Analytics />
          <VisitTracker />
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}
