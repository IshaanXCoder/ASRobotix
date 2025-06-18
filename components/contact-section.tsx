"use client"

import { Button } from "@/components/ui/button"
import { ShineBorder } from "@/components/ui/shine-border"
import { Mail, MessageSquare, Phone } from "lucide-react"

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:hello@asrobotix.com"
  }

  const handleChatClick = () => {
    // You can replace this with your actual scheduling link
    window.open("https://calendly.com/asrobotix", "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+91XXXXXXXXX"
  }

  const handleStartConversation = () => {
    window.location.href =
      "mailto:hello@asrobotix.com?subject=Partnership Inquiry&body=Hi ASRobotix team, I'm interested in learning more about your technology and potential collaboration opportunities."
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Interested in collaborating or learning more about our breakthrough robotics technology? We'd love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ShineBorder className="text-center" borderClassName="border border-white/10 rounded-xl">
            <div className="p-6 card-hover border-hover cursor-pointer" onClick={handleEmailClick}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                <Mail className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 text-sm">hello@asrobotix.com</p>
            </div>
          </ShineBorder>

          <ShineBorder className="text-center" borderClassName="border border-white/10 rounded-xl">
            <div className="p-6 card-hover border-hover cursor-pointer" onClick={handleChatClick}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-2">Let's Chat</h3>
              <p className="text-gray-400 text-sm">Schedule a meeting</p>
            </div>
          </ShineBorder>

          <ShineBorder className="text-center" borderClassName="border border-white/10 rounded-xl">
            <div className="p-6 card-hover border-hover cursor-pointer" onClick={handlePhoneClick}>
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Phone className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm">+91 XXX XXX XXXX</p>
            </div>
          </ShineBorder>
        </div>

        <ShineBorder className="text-center" borderClassName="border border-white/10 rounded-xl">
          <div className="p-8">
            <h3 className="text-xl font-semibold mb-4">Ready to Innovate Together?</h3>
            <p className="text-gray-400 mb-6">
              Whether you're interested in partnerships, investments, or just want to learn more about our technology,
              we're excited to connect with fellow innovators.
            </p>
            <Button
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90"
              onClick={handleStartConversation}
            >
              Start a Conversation
            </Button>
          </div>
        </ShineBorder>
      </div>
    </section>
  )
}
