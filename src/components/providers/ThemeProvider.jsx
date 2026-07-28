"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
      document.documentElement.setAttribute("data-theme", stored)
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const t = prefersDark ? "dark" : "light"
      setTheme(t)
      document.documentElement.setAttribute("data-theme", t)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mq.matches) {
      document.documentElement.setAttribute("data-reduced-motion", "true")
    }
    const handler = (e) => {
      document.documentElement.setAttribute("data-reduced-motion", e.matches ? "true" : "false")
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.setAttribute("data-theme", next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}
