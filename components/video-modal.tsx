"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          <X className="h-4 w-4" />
        </button>
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full object-cover"
          poster="/placeholder.svg?height=450&width=800"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
