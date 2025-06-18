import Image from "next/image"

export function TeamSection() {
  const institutions = [
    { name: "IIT", logo: "/placeholder.svg?height=60&width=120" },
    { name: "BITS", logo: "/placeholder.svg?height=60&width=120" },
    { name: "UC Berkeley", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DTU", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section id="team" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">World-Class Team</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-sm sm:text-base">
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
                A group of passionate robotics enthusiasts taking on breakthrough projects and innovating for the world.
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
                Committed to changing how we build, explore, and heal, one microbot at a time.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8">Alumni From Premier Institutions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {institutions.map((institution) => (
              <div key={institution.name} className="neumorphism rounded-xl p-4 w-full text-center card-hover">
                <Image
                  src={institution.logo || "/placeholder.svg"}
                  alt={institution.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto mx-auto mb-2"
                />
                <p className="text-sm font-medium text-white">{institution.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
