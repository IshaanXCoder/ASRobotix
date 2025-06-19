import { ShineBorder } from "@/components/ui/shine-border"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "MechLid",
      subtitle: "Smart Waste Management System",
      description:
        "An automatic smart lid aiding in efficient waste disposal and collection with retrofittable technology.",
      status: "Patent Applied",
      patentNumber: "202311068504",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-red-500 to-orange-600",
      link: "/mechlid",
    },
    {
      title: "Mini Robots",
      subtitle: "Collaborative Microbot Swarms",
      description:
        "Eraser-sized robots that communicate with each other and form adaptable shapes with breakthrough potential.",
      status: "Active Development",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-orange-500 to-red-600",
      link: "/minirobots",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Breakthrough Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Our innovative projects are pushing the boundaries of robotics, from smart waste management to collaborative
          microbot swarms.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ShineBorder key={project.title} className="h-full" borderClassName="border border-white/10 rounded-xl">
              <div className="p-6 sm:p-8 h-full card-hover border-hover">
                <div className="space-y-6">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="rounded-xl w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                    {project.patentNumber && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-full backdrop-blur-sm">
                        <Award className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs text-yellow-500">Patent</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                    <p
                      className={`text-base font-medium bg-clip-text text-transparent bg-gradient-to-r ${project.color} mb-3`}
                    >
                      {project.subtitle}
                    </p>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${project.status === "Patent Applied" ? "bg-orange-500" : "bg-red-500"}`}
                        />
                        <span className="text-sm font-medium">{project.status}</span>
                      </div>
                      {project.patentNumber && (
                        <span className="text-xs text-gray-500">Patent: {project.patentNumber}</span>
                      )}
                    </div>
                  </div>

                  <Link href={project.link} className="block">
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90 gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ShineBorder>
          ))}
        </div>
      </div>
    </section>
  )
}
