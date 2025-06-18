import { Cpu, Network, Zap, Brain, Shield, Wrench } from "lucide-react"

export function TechnologySection() {
  const technologies = [
    {
      title: "Autonomous Connection",
      description: "Microbots can connect from any side without human intervention, forming complex structures",
      icon: <Network className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Swarm Intelligence",
      description: "Advanced coordination algorithms enable collective problem-solving and decision-making",
      icon: <Brain className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Unpredictable Movement",
      description: "Elegant design allows movement without wheels or complex commands, adapting to any terrain",
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Miniaturized Computing",
      description: "Powerful processing capabilities packed into eraser-sized robots for maximum efficiency",
      icon: <Cpu className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Defense Applications",
      description: "Autonomous scouting capabilities for military and security reconnaissance missions",
      icon: <Shield className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Construction Aid",
      description: "Self-assembling systems for building structures in hard-to-reach or dangerous locations",
      icon: <Wrench className="h-6 w-6 text-yellow-500" />,
    },
  ]

  return (
    <section id="technology" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Revolutionary Technology
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Our breakthrough approach combines miniaturization, artificial intelligence, and swarm robotics to create
          machines that think and collaborate like never before.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {technologies.map((tech) => (
            <div key={tech.title} className="neumorphism rounded-xl p-6">
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4 p-4 rounded-full neumorphism-inset">{tech.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">{tech.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
