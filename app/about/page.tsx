import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShineBorder } from "@/components/ui/shine-border"
import { ArrowLeft, Users, Target, Lightbulb, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const institutions = [
    { name: "IIT", logo: "/placeholder.svg?height=60&width=120", description: "Indian Institute of Technology" },
    {
      name: "BITS",
      logo: "/placeholder.svg?height=60&width=120",
      description: "Birla Institute of Technology and Science",
    },
    {
      name: "UC Berkeley",
      logo: "/placeholder.svg?height=60&width=120",
      description: "University of California, Berkeley",
    },
    { name: "DTU", logo: "/placeholder.svg?height=60&width=120", description: "Delhi Technological University" },
  ]

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-red-500" />,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in robotics, always seeking breakthrough solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Collaborative Spirit",
      description: "Just like our robots, we believe in the power of teamwork and collective intelligence.",
    },
    {
      icon: <Target className="h-8 w-8 text-yellow-500" />,
      title: "Purpose Driven",
      description: "Every project we undertake aims to solve real-world problems and improve lives.",
    },
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Excellence Standard",
      description: "We maintain the highest standards in research, development, and execution.",
    },
  ]

  const achievements = [
    { number: "1", label: "Patent Application Filed", description: "MechLid smart waste management system" },
    { number: "2", label: "Breakthrough Projects", description: "MechLid and Mini Robots in active development" },
    { number: "4", label: "Premier Institutions", description: "Team members from top global universities" },
    { number: "50+", label: "Prototypes Tested", description: "Continuous iteration and improvement" },
  ]

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About ASRobotix</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A group of robotics enthusiasts taking on breakthrough projects and innovating for the world. Driven by a
              big dream, our small team is committed to changing how we build, explore, and heal, one microbot at a
              time.
            </p>
          </div>
        </div>
      </section>

      {/* World-Class Team */}
      <section className="py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">World-Class Team</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A lean team that consists of the brightest minds of India hailing from premier institutions worldwide.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="neumorphism rounded-xl p-6 sm:p-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Team Photo"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Robotics Enthusiasts</h3>
                <p className="text-gray-400">
                  A passionate group of engineers, researchers, and innovators united by a shared vision of transforming
                  robotics through collaborative intelligence.
                </p>
              </div>
            </div>

            <div className="neumorphism rounded-xl p-6 sm:p-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Innovation Lab"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation Driven</h3>
                <p className="text-gray-400">
                  Our diverse backgrounds in mechanical engineering, computer science, and AI research create the
                  perfect foundation for breakthrough innovations.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-8">Alumni From Premier Institutions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {institutions.map((institution) => (
                <div key={institution.name} className="neumorphism rounded-xl p-4 text-center card-hover">
                  <Image
                    src={institution.logo || "/placeholder.svg"}
                    alt={institution.name}
                    width={120}
                    height={60}
                    className="h-12 w-auto mx-auto mb-3"
                  />
                  <h4 className="font-semibold text-sm text-white">{institution.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{institution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="neumorphism rounded-xl p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full neumorphism-inset flex items-center justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ShineBorder borderClassName="border border-red-500/30 rounded-xl">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                Looking Ahead
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                We envision swarms of microbots supporting defense by scouting autonomously and aiding construction by
                assembling structures in hard-to-reach places. Our vision includes applications in disaster response for
                rapid deployment and infrastructure projects that require adaptable, self-assembling systems.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We plan to scale this technology to enable larger, more complex formations and develop advanced
                coordination strategies. We aim to push the boundaries of what small, intelligent machines can achieve
                together.
              </p>
            </div>
          </ShineBorder>
        </div>
      </section>

      <Footer />
    </main>
  )
}
