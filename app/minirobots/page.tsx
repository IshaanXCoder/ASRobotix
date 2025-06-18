"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShineBorder } from "@/components/ui/shine-border"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cpu, Network, Brain, Zap } from "lucide-react"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import Image from "next/image"
import Link from "next/link"

export default function MiniRobotsPage() {
  const capabilities = [
    {
      icon: <Network className="h-6 w-6 text-red-500" />,
      title: "Inter-robot Communication",
      description: "Advanced protocols enable seamless communication between individual microbots",
    },
    {
      icon: <Brain className="h-6 w-6 text-orange-500" />,
      title: "Swarm Intelligence",
      description: "Collective decision-making algorithms for coordinated group behavior",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Adaptive Formation",
      description: "Dynamic shape formation and reconfiguration based on task requirements",
    },
    {
      icon: <Cpu className="h-6 w-6 text-red-500" />,
      title: "Autonomous Operation",
      description: "Self-directed movement and decision-making without human intervention",
    },
  ]

  const applications = [
    {
      title: "Search & Rescue",
      description: "Navigate through debris and tight spaces to locate survivors in disaster scenarios",
      icon: "🔍",
    },
    {
      title: "Construction Assembly",
      description: "Build structures in hard-to-reach places where human workers cannot safely operate",
      icon: "🏗️",
    },
    {
      title: "Medical Applications",
      description: "Potential for microscale medical interventions and targeted drug delivery",
      icon: "🏥",
    },
    {
      title: "Environmental Monitoring",
      description: "Deploy swarms for environmental data collection and ecosystem monitoring",
      icon: "🌱",
    },
  ]

  const specifications = [
    { label: "Size", value: "Eraser-sized (approx. 2cm³)" },
    { label: "Weight", value: "< 5 grams" },
    { label: "Communication Range", value: "10-50 meters" },
    { label: "Battery Life", value: "2-4 hours continuous operation" },
    { label: "Movement Type", value: "Omnidirectional rolling" },
    { label: "Connection Method", value: "Magnetic coupling from any side" },
  ]

  const handleJoinResearch = () => {
    window.location.href =
      "mailto:research@asrobotix.com?subject=Mini Robots Research Program&body=Hi, I'm interested in joining the Mini Robots research program."
  }

  const handleTechnicalDocs = () => {
    alert("Technical documentation will be available soon. Please contact our research team for detailed information.")
  }

  const handleContactResearch = () => {
    window.location.href = "mailto:research@asrobotix.com?subject=Mini Robots Research Inquiry"
  }

  const handleResearchCollaboration = () => {
    window.open("https://calendly.com/asrobotix/research-collaboration", "_blank")
  }

  return (
    <main className="min-h-screen bg-black">
      <div className="relative">
        <InteractiveGrid containerClassName="fixed inset-0" className="opacity-30" points={40} />
        <div className="relative z-10">
          <Header />

          {/* Hero Section */}
          <section className="pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-b from-black via-black/95 to-black/90">
            <div className="max-w-6xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h1 className="text-4xl sm:text-5xl font-bold">Mini Robots</h1>
                    <div className="flex items-center gap-1 px-3 py-1 bg-red-500/20 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-sm text-red-500 font-medium">Active Development</span>
                    </div>
                  </div>
                  <p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 mb-6">
                    Collaborative Microbot Swarms
                  </p>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Our Mini Robots represent a breakthrough in collaborative robotics. These eraser-sized autonomous robots
                    can communicate with each other and form adaptable shapes and structures. They move unpredictably
                    without wheels or complicated commands, relying on elegant design and teamwork.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90"
                      onClick={handleJoinResearch}
                    >
                      Join Research Program
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/10 bg-white/5 hover:bg-white/10"
                      onClick={handleTechnicalDocs}
                    >
                      Technical Documentation
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Mini Robots Collaborative Swarm"
                    width={600}
                    height={500}
                    className="rounded-xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Core Capabilities */}
          <section className="py-16 px-4 sm:px-6 bg-black/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Core Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {capabilities.map((capability) => (
                  <ShineBorder
                    key={capability.title}
                    className="h-full"
                    borderClassName="border border-white/10 rounded-xl"
                  >
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                        {capability.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{capability.title}</h3>
                      <p className="text-gray-400 text-sm">{capability.description}</p>
                    </div>
                  </ShineBorder>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">How Mini Robots Work</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Revolutionary Design Principles</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-red-500 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Omnidirectional Movement</h4>
                        <p className="text-gray-400">
                          Each robot can move in any direction without traditional wheels, using innovative propulsion
                          mechanisms.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-orange-500 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Universal Connection</h4>
                        <p className="text-gray-400">
                          Magnetic coupling system allows robots to connect from any side, enabling complex 3D structures.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-yellow-500 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Collective Intelligence</h4>
                        <p className="text-gray-400">
                          Swarm algorithms enable the group to make decisions and solve problems collectively.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-red-500 font-bold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Adaptive Behavior</h4>
                        <p className="text-gray-400">
                          Robots adapt their behavior based on environmental conditions and task requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">Technical Specifications</h3>
                  <ShineBorder borderClassName="border border-white/10 rounded-xl">
                    <div className="p-6">
                      <div className="space-y-4">
                        {specifications.map((spec) => (
                          <div
                            key={spec.label}
                            className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0"
                          >
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="font-medium">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ShineBorder>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="py-16 px-4 sm:px-6 bg-black/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Future Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {applications.map((app) => (
                  <ShineBorder key={app.title} className="h-full" borderClassName="border border-white/10 rounded-xl">
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{app.icon}</div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                          <p className="text-gray-400">{app.description}</p>
                        </div>
                      </div>
                    </div>
                  </ShineBorder>
                ))}
              </div>
            </div>
          </section>

          {/* Research Status */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <ShineBorder borderClassName="border border-red-500/30 rounded-xl">
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Active Research & Development</h3>
                  <p className="text-gray-400 mb-6">
                    Mini Robots are currently in active development phase. Our team is working on perfecting the
                    communication protocols, swarm algorithms, and mechanical design to achieve breakthrough performance in
                    collaborative robotics.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-red-500">50+</p>
                      <p className="text-sm text-gray-400">Prototypes Tested</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-500">12</p>
                      <p className="text-sm text-gray-400">Months in Development</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-500">5</p>
                      <p className="text-sm text-gray-400">Research Papers</p>
                    </div>
                  </div>
                </div>
              </ShineBorder>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join the Future of Robotics</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Be part of the breakthrough in collaborative robotics. Connect with our research team to learn more about
                Mini Robots and potential collaboration opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90"
                  onClick={handleContactResearch}
                >
                  Contact Research Team
                </Button>
                <Button
                  variant="outline"
                  className="border-white/10 bg-white/5 hover:bg-white/10"
                  onClick={handleResearchCollaboration}
                >
                  Research Collaboration
                </Button>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  )
}
