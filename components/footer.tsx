import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
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
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A group of robotics enthusiasts taking on breakthrough projects and innovating for the world. Driven by a
              big dream, committed to changing how we build, explore, and heal, one microbot at a time.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/asrobotix/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/10 bg-white/5 hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.instagram.com/asrobotix?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/10 bg-white/5 hover:bg-white/10"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.facebook.com/asrobotixfb/?_rdr" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/10 bg-white/5 hover:bg-white/10"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:Info@asrobotix.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/10 bg-white/5 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                </Button>
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
                <Link href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </Link>
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
                <Link href="#vision" className="text-gray-400 hover:text-white">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
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
