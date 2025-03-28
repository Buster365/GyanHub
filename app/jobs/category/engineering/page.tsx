import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, Building, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function EngineeringJobsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/jobs" className="text-green-600 hover:underline">
              ← Back to Jobs
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Engineering Careers</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore various engineering disciplines, requirements, and career opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview of Engineering Careers</h2>
              <p className="text-gray-700 mb-4">
                Engineering is a diverse field that applies scientific and mathematical principles to design, build, and
                optimize solutions for real-world problems. Engineers are problem-solvers who develop new products,
                improve existing systems, and create technologies that advance society.
              </p>
              <p className="text-gray-700">
                With numerous specializations available, engineering offers career paths across various industries
                including construction, manufacturing, technology, energy, healthcare, and transportation.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Engineering Careers"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Engineering Disciplines</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Civil Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Civil engineers design, construct, and maintain infrastructure projects like buildings, bridges,
                  roads, dams, and water systems.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Roles:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Structural Engineer</Badge>
                      <Badge variant="outline">Transportation Engineer</Badge>
                      <Badge variant="outline">Environmental Engineer</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹4-20 LPA depending on experience and specialization</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>L&T, NHAI, RITES, DLF, Shapoorji Pallonji</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Mechanical Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Mechanical engineers design, develop, build, and test mechanical devices, including tools, engines,
                  and machines.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Roles:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Design Engineer</Badge>
                      <Badge variant="outline">Manufacturing Engineer</Badge>
                      <Badge variant="outline">Automotive Engineer</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹3.5-18 LPA depending on experience and industry</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Tata Motors, Maruti Suzuki, BHEL, Siemens, L&T</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Electrical Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Electrical engineers design, develop, test, and supervise the manufacturing of electrical equipment
                  and systems.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Roles:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Power Systems Engineer</Badge>
                      <Badge variant="outline">Control Systems Engineer</Badge>
                      <Badge variant="outline">Electronics Engineer</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹3.5-20 LPA depending on experience and specialization</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>NTPC, Power Grid, ABB, Siemens, Schneider Electric</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Chemical Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Chemical engineers apply principles of chemistry, physics, and biology to solve problems involving the
                  production or use of chemicals and other products.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Roles:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Process Engineer</Badge>
                      <Badge variant="outline">Production Engineer</Badge>
                      <Badge variant="outline">Biochemical Engineer</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹4-22 LPA depending on experience and industry</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Reliance Industries, ONGC, IOCL, Dr. Reddy's, Hindustan Unilever</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Aerospace Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Aerospace engineers design, develop, and test aircraft, spacecraft, satellites, and missiles.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Roles:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Aircraft Designer</Badge>
                      <Badge variant="outline">Propulsion Engineer</Badge>
                      <Badge variant="outline">Avionics Engineer</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹5-30 LPA depending on experience and specialization</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>ISRO, HAL, DRDO, Boeing India, Airbus India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Computer Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Computer engineers design and develop computer systems, hardware, and software.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Roles:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Hardware Engineer</Badge>
                      <Badge variant="outline">Embedded Systems Engineer</Badge>
                      <Badge variant="outline">VLSI Design Engineer</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹5-25 LPA depending on experience and specialization</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Intel, AMD, Qualcomm, Samsung, Nvidia</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Educational Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Undergraduate Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">B.Tech/B.E. (4 years)</p>
                      <p className="text-sm text-gray-600">
                        The standard qualification for entry-level engineering positions. Available in various
                        specializations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Diploma in Engineering (3 years)</p>
                      <p className="text-sm text-gray-600">
                        An alternative path that can lead to a B.Tech/B.E. through lateral entry or direct employment in
                        technical roles.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Entrance Exams</p>
                      <p className="text-sm text-gray-600">
                        JEE Main, JEE Advanced, BITSAT, and state-level engineering entrance exams for admission to
                        engineering colleges.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Postgraduate & Beyond
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">M.Tech/M.E. (2 years)</p>
                      <p className="text-sm text-gray-600">
                        Specialized master's degree for advanced knowledge and research opportunities. Entrance through
                        GATE exam.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Ph.D. in Engineering</p>
                      <p className="text-sm text-gray-600">
                        Doctoral degree for those interested in research, academia, or specialized industry positions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Professional Certifications</p>
                      <p className="text-sm text-gray-600">
                        Specialized certifications in areas like project management (PMP), quality management, or
                        specific technologies.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Industry Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-green-600" />
                  Current Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Sustainable Engineering</p>
                      <p className="text-sm text-gray-600">
                        Growing focus on environmentally friendly designs, renewable energy, and green technologies.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Industry 4.0</p>
                      <p className="text-sm text-gray-600">
                        Integration of IoT, AI, and automation in manufacturing and industrial processes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Interdisciplinary Approach</p>
                      <p className="text-sm text-gray-600">
                        Increasing overlap between engineering disciplines and fields like biology, medicine, and
                        computer science.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-green-600" />
                  Skills in Demand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Technical Skills</p>
                      <p className="text-sm text-gray-600">
                        Proficiency in CAD/CAM software, programming languages, simulation tools, and industry-specific
                        technologies.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Soft Skills</p>
                      <p className="text-sm text-gray-600">
                        Problem-solving, teamwork, communication, project management, and adaptability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Emerging Areas</p>
                      <p className="text-sm text-gray-600">
                        Knowledge of AI/ML, robotics, renewable energy, nanotechnology, and data analytics.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

