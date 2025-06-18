"use client"

interface InteractiveGridProps {
  className?: string
  containerClassName?: string
  points?: number
}

export function InteractiveGrid({ className = "", containerClassName = "", points = 40 }: InteractiveGridProps) {
  return (
    <div className={`absolute inset-0 ${containerClassName}`}>
      <div className={`dotted-grid absolute inset-0 ${className}`} />
    </div>
  )
}
