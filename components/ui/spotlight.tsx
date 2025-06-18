"use client"

import type { ReactNode } from "react"

interface SpotlightProps {
  children: ReactNode
  className?: string
}

export function Spotlight({ children, className = "" }: SpotlightProps) {
  return (
    <div className={`group/spotlight relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500/25 to-purple-500/25 blur-[100px]" />
      </div>
      {children}
    </div>
  )
}
