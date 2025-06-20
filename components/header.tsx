"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 backdrop-blur-xl bg-black/50">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="ASRobotix Logo" width={40} height={40} className="rounded-full" />
            <span className="font-medium text-white">ASRobotix</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/mechlid" className="text-sm text-gray-300 hover:text-white transition-colors">
            MechLid
          </Link>
          <Link href="/minirobots" className="text-sm text-gray-300 hover:text-white transition-colors">
            Mini Robots
          </Link>
          <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/#contact">
            <Button
              variant="secondary"
              className="hidden sm:flex bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90"
            >
              Get in Touch
            </Button>
          </Link>

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
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/mechlid"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              MechLid
            </Link>
            <Link
              href="/minirobots"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mini Robots
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90">
                Get in Touch
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
