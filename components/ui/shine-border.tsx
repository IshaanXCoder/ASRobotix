"use client"

import type React from "react"

interface ShineBorderProps {
  children: React.ReactNode
  className?: string
  borderClassName?: string
  duration?: number
}

export function ShineBorder({ children, className = "", borderClassName = "" }: ShineBorderProps) {
  return (
    <div className={`group relative ${className}`}>
      <div className={`absolute inset-0 rounded-xl ${borderClassName}`}>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-white/10 to-transparent" />
      </div>
      {children}
    </div>
  )
}
