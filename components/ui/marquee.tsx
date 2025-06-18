"use client"

import { useEffect, useRef } from "react"
import type React from "react"

interface MarqueeProps {
  children: React.ReactNode
  direction?: "left" | "right"
  pauseOnHover?: boolean
  speed?: number
}

export function Marquee({ children, direction = "left", pauseOnHover = false, speed = 20 }: MarqueeProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    // Clone the children for seamless loop
    const scrollerContent = Array.from(scroller.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scroller.appendChild(duplicatedItem)
    })
  }, [])

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        ref={scrollerRef}
        className={`inline-flex animate-marquee ${pauseOnHover ? "hover:pause" : ""}`}
        style={{
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationDuration: `${60 / speed}s`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
