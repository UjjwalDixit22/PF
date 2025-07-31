import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollProgress from "@/components/scroll-progress"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ujjwal Dixit | Portfolio",
  description: "Full Stack Developer specializing in MERN stack development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
