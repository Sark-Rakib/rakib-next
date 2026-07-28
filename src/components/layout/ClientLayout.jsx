"use client"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import ScrollProgress from "@/components/ui/ScrollProgress"
import ThemeProvider from "@/components/providers/ThemeProvider"

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 h-0">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
