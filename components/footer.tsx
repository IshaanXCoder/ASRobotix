"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="ASRobotix Logo" width={40} height={40} className="rounded-full" />
                <span className="font-medium text-white">ASRobotix</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Pioneering the future of collaborative robotics with breakthrough microbot technology.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/asrobotix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/asrobotix?igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/asrobotixfb/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:Info@asrobotix.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/minirobots" className="text-gray-400 hover:text-white">
                  Microbots
                </Link>
              </li>
              <li>
                <Link href="/mechlid" className="text-gray-400 hover:text-white">
                  Mechlid
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("vision")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} ASRobotix. All rights reserved. | Pioneering the future of collaborative
            robotics.
          </p>
        </div>
      </div>
    </footer>
  )
}
