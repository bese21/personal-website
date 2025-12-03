"use client"

import type React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, Moon, Sun, Download } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100 // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section)
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Header height offset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="text-xl font-bold text-primary">
            Besufikad Zenebe
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
              <a href="https://drive.google.com/uc?export=download&id=1ZRms8u6azAv-_ZEobf1xzzfTmgeee7GO" download>
                <Download className="h-4 w-4" /> CV
              </a>
            </Button>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://drive.google.com/uc?export=download&id=1ZRms8u6azAv-_ZEobf1xzzfTmgeee7GO" download aria-label="Download CV">
                <Download className="h-5 w-5" />
              </a>
            </Button>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="outline" size="sm" className="gap-2 w-full justify-center bg-transparent" asChild>
                <a href="https://drive.google.com/uc?export=download&id=1ZRms8u6azAv-_ZEobf1xzzfTmgeee7GO" download>
                  <Download className="h-4 w-4" /> CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
