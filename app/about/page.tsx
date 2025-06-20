import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShineBorder } from "@/components/ui/shine-border"
import { ArrowLeft, Users, Target, Lightbulb, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const institutions = [
    { 
      name: "IIT Delhi", 
      logo: "/uni-logo/indian-institute-of-technology-delhi-logo-freelogovectors.net_.png", 
      description: "Indian Institute of Technology Delhi" 
    },
    {
      name: "IIT Roorkee",
      logo: "/uni-logo/iit-roorkee.png",
      description: "Indian Institute of Technology Roorkee",
    },
    { 
      name: "IIT Guwahati", 
      logo: "/uni-logo/IIT-Guwahati_1.png", 
      description: "Indian Institute of Technology Guwahati" 
    },
    { 
      name: "IIT Madras", 
      logo: "/uni-logo/IITM_logo_center.png", 
      description: "Indian Institute of Technology Madras" 
    },
    { 
      name: "DTU", 
      logo: "/uni-logo/delhi-technological-university-logo.png", 
      description: "Delhi Technological University" 
    },
    {
      name: "BITS Pilani",
      logo: "/uni-logo/bits pilani.png",
      description: "Birla Institute of Technology and Science, Pilani",
    },
    { 
      name: "UC Davis", 
      logo: "/uni-logo/ucd.png", 
      description: "University of California, Davis" 
    },
  ]

  const teamMembers = [
    {
      name: "Arnav Sharma",
      role: "Founder & CEO",
      image: "/team-members/Arnav Sharma.jpg"
    },
    {
      name: "Saksham Kamboj",
      role: "Co-Founder & CTO",
      image: "/team-members/Saksham Kamboj.jpg"
    },
    {
      name: "Ishaan Kesarwani",
      role: "Software Engineer",
      image: "/team-members/Ishaan kesarwani.png"
    },
    {
      name: "Taanish Gupta",
      role: "Hardware Engineer",
      image: "/team-members/Taanish Gupta.jpg"
    },
    {
      name: "Ridhi Sehgal",
      role: "UI/UX Designer",
      image: "/team-members/Ridhi Sehgal.jpg"
    },
    {
      name: "Tanishka Gupta",
      role: "Research Engineer",
      image: "/team-members/Tanishka Gupta.png"
    },
    {
      name: "Kartikay Lakhotia",
      role: "Robotics Engineer",
      image: "/team-members/Kartikay Lakhotia.png"
    },
    {
      name: "Manit Mehta",
      role: "Software Developer",
      image: "/team-members/Manit Mehta.jpg"
    }
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member) => (
              <div key={member.name} className="neumorphism rounded-xl p-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-1">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-8">Members from Top Institutes</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {institutions.map((institution) => (
                <div key={institution.name} className="neumorphism rounded-xl p-4 text-center card-hover">
                  <div className="h-20 flex items-center justify-center mb-3">
                    <Image
                      src={institution.logo}
                      alt={institution.name}
                      width={138}
                      height={69}
                      className="h-14 w-auto object-contain"
                    />
                  </div>
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

      <Footer />
    </main>
  )
}
