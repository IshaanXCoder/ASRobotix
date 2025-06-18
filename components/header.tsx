"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 backdrop-blur-xl bg-black/50">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1" opacity="0.5" />
                <circle cx="6" cy="6" r="2" fill="white" opacity="0.7" />
                <circle cx="18" cy="6" r="2" fill="white" opacity="0.7" />
                <circle cx="6" cy="18" r="2" fill="white" opacity="0.7" />
                <circle cx="18" cy="18" r="2" fill="white" opacity="0.7" />
              </svg>
            </div>
            <span className="font-medium text-white">ASRobotix</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#technology" className="text-sm text-gray-300 hover:text-white transition-colors">
            Technology
          </Link>
          <Link href="/#projects" className="text-sm text-gray-300 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/#vision" className="text-sm text-gray-300 hover:text-white transition-colors">
            Vision
          </Link>
          <Link href="/#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
            className="hidden sm:flex bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90"
            onClick={handleContactClick}
          >
            Get in Touch
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-white/10 bg-white/5 hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <Link
              href="/#technology"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              href="/#projects"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/#vision"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Vision
            </Link>
            <Link
              href="/#contact"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 mt-4"
              onClick={() => {
                setIsMenuOpen(false)
                handleContactClick()
              }}
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
