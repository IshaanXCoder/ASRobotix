import { ShineBorder } from "@/components/ui/shine-border"
import { Rocket, Building, Heart, Search } from "lucide-react"

export function VisionSection() {
  const visionAreas = [
    {
      icon: <Search className="h-8 w-8 text-red-500" />,
      title: "Disaster Response",
      description: "Rapid deployment of microbot swarms for search and rescue operations in dangerous environments",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Building className="h-8 w-8 text-orange-500" />,
      title: "Infrastructure Projects",
      description: "Adaptable, self-assembling systems for construction in hard-to-reach places",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: <Rocket className="h-8 w-8 text-yellow-500" />,
      title: "Defense & Security",
      description: "Autonomous scouting and reconnaissance capabilities for military applications",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Healthcare Innovation",
      description: "Microscale medical applications for targeted treatment and healing",
      color: "from-red-500 to-pink-600",
    },
  ]

  return (
    <section id="vision" className="py-16 px-4 sm:px-6 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Vision for the Future</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
            We envision a future where swarms of intelligent microbots revolutionize industries, from disaster response
            to construction, defense, and healthcare. Our goal is to push the boundaries of what small, intelligent
            machines can achieve together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {visionAreas.map((area) => (
            <ShineBorder key={area.title} className="h-full" borderClassName="border border-white/10 rounded-xl">
              <div className="p-6 h-full card-hover border-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5">{area.icon}</div>
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${area.color}`}
                    >
                      {area.title}
                    </h3>
                    <p className="text-gray-400">{area.description}</p>
                  </div>
                </div>
              </div>
            </ShineBorder>
          ))}
        </div>

        <ShineBorder className="text-center" borderClassName="border border-white/10 rounded-xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Scaling for Tomorrow
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Looking ahead, we plan to scale this technology to enable larger, more complex formations and develop
              advanced coordination strategies. We aim to create systems that can adapt, learn, and evolve to meet the
              challenges of tomorrow.
            </p>
          </div>
        </ShineBorder>
      </div>
    </section>
  )
}
