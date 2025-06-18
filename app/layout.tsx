import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ASRobotix - Pioneering Collaborative Microbot Technology",
  description:
    "Creating tiny robots that think and collaborate. Building the future of autonomous robotics, one microbot at a time.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
