"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShineBorder } from "@/components/ui/shine-border"
import { Button } from "@/components/ui/button"
import { Award, ArrowLeft, CheckCircle, Zap, BarChart3, Recycle } from "lucide-react"
import { InteractiveGrid } from "@/components/ui/interactive-grid"
import Image from "next/image"
import Link from "next/link"
import { VideoModal } from "@/components/video-modal"
import { useState } from "react"

export default function MechLidPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-red-500" />,
      title: "Automatic Operation",
      description: "Smart lid opens and closes automatically using advanced sensor technology",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
      title: "Real-time Monitoring",
      description: "IR sensors provide continuous fill level monitoring with data analytics",
    },
    {
      icon: <Recycle className="h-6 w-6 text-yellow-500" />,
      title: "Retrofittable Design",
      description: "Compatible with existing dustbins, no need for complete replacement",
    },
  ]

  const specifications = [
    { label: "Sensor Type", value: "Infrared (IR) Sensors" },
    { label: "Power Source", value: "Rechargeable Battery" },
    { label: "Connectivity", value: "IoT Enabled" },
    { label: "Compatibility", value: "Universal Dustbin Fit" },
    { label: "Material", value: "Weather-resistant ABS Plastic" },
    { label: "Operating Temperature", value: "-10°C to 60°C" },
  ]

  const handleRequestDemo = () => {
    setIsVideoModalOpen(true)
  }

  const handleDownloadBrochure = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/brochure_mechlid.pdf'
    link.download = 'MechLid_Brochure.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleContactSales = () => {
    window.location.href = "mailto:Info@asrobotix.com?subject=MechLid Sales Inquiry"
  }

  const handleScheduleDemo = () => {
    window.open("https://wa.me/919821657500", "_blank")
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
                    <h1 className="text-4xl sm:text-5xl font-bold">MechLid</h1>
                    <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 rounded-full">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-yellow-500 font-medium">Patent Published</span>
                    </div>
                  </div>
                  <p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 mb-6">
                    Smart Waste Management System
                  </p>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    MechLid revolutionizes waste management with an automatic smart lid that aids in efficient waste
                    disposal and collection. Our innovative system features automatic lid opening and closing mechanisms
                    with retrofittable technology for versatile use with any existing dustbin.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90"
                      onClick={handleRequestDemo}
                    >
                      Watch Demo
                    </Button>
                    <a href="/brochure_mechlid.pdf" download="MechLid_Brochure.pdf">
                      <Button
                        variant="outline"
                        className="w-full border-white/10 bg-white/5 hover:bg-white/10"
                      >
                        Download Brochure
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="MechLid Smart Waste Management System"
                    width={600}
                    height={500}
                    className="rounded-xl w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="py-16 px-4 sm:px-6 bg-black/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <ShineBorder key={feature.title} className="h-full" borderClassName="border border-white/10 rounded-xl">
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </ShineBorder>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed Features */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Complete Feature Set</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Advanced Capabilities</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Automatic Lid Mechanism</h4>
                        <p className="text-gray-400 text-sm">
                          Sensor-triggered opening and closing for hands-free operation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Real-time Fill Monitoring</h4>
                        <p className="text-gray-400 text-sm">
                          IR sensors continuously monitor waste levels to prevent overfilling
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">In-house Data Analytics</h4>
                        <p className="text-gray-400 text-sm">
                          Advanced analytics for route optimization and waste management insights
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Retrofittable Technology</h4>
                        <p className="text-gray-400 text-sm">
                          Universal design compatible with existing dustbins of various sizes
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">Environmental Data Collection</h4>
                        <p className="text-gray-400 text-sm">
                          Collects and analyzes surrounding environmental data for insights
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

          {/* Patent Information */}
          <section className="py-16 px-4 sm:px-6 bg-black/50">
            <div className="max-w-4xl mx-auto text-center">
              <ShineBorder borderClassName="border border-yellow-500/30 rounded-xl">
                <div className="p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <Award className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Patent Protection</h3>
                  <p className="text-gray-400 mb-4">
                    MechLid's innovative technology is protected under patent application, ensuring our unique approach to
                    smart waste management remains at the forefront of the industry.
                  </p>
                  <p className="text-yellow-500 font-mono text-lg">Patent Application Number: 202311068504</p>
                </div>
              </ShineBorder>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Waste Management?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join the revolution in smart waste management. Contact us to learn more about MechLid and how it can benefit
                your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:Info@asrobotix.com?subject=MechLid Sales Inquiry">
                  <Button
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90"
                  >
                    Contact Sales
                  </Button>
                </Link>
                <Link href="https://wa.me/919821657500" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-white/10 bg-white/5 hover:bg-white/10"
                  >
                    Schedule Demo
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="/promo.mp4"
      />
    </main>
  )
}
