"use client"

import { Button } from "@/components/ui/button"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import { ShineBorder } from "@/components/ui/shine-border"
import { Play, ArrowRight } from "lucide-react"
import { VideoModal } from "@/components/video-modal"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleWatchDemo = () => {
    setIsVideoModalOpen(true)
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="relative min-h-screen pt-24 sm:pt-32 pb-16 overflow-hidden bg-black hero-gradient">
        <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              We're Robots That
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Think & Collaborate
              </span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-3xl mx-auto px-4">
              Our microbots can roll and connect from any side, forming shapes and structures without human
              intervention. They move unpredictably, without wheels or complicated commands, relying on simple, elegant
              design and teamwork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                variant="outline"
                className="gap-2 border-white/10 bg-white/5 hover:bg-white/10"
                onClick={handleWatchDemo}
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 gap-2"
                onClick={scrollToProjects}
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <ShineBorder className="relative mx-auto" borderClassName="border border-white/10 rounded-xl overflow-hidden">
            <div className="relative bg-black/80 p-4 sm:p-8 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center order-2 lg:order-1">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="ASRobotix Microbots in Formation"
                      width={400}
                      height={400}
                      className="rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">Microbots forming autonomous structures</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 card-hover border-hover">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4">Current Capabilities</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <p className="text-sm sm:text-base">Autonomous connection & disconnection</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <p className="text-sm sm:text-base">Multi-directional movement</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <p className="text-sm sm:text-base">Swarm intelligence coordination</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 card-hover border-hover">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Innovation Status</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <p className="text-sm sm:text-base">Active Development & Testing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ShineBorder>
        </div>
      </section>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/promo.mp4"
      />
    </>
  )
}
