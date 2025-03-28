import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"

export default function ScienceStreamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/education/after-10th" className="text-green-600 hover:underline">
              ← Back to After 10th Options
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Science Stream (PCM/PCB)</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Comprehensive guide to the Science stream after 10th standard
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                The Science stream is one of the most popular choices after 10th standard, offering pathways to careers
                in engineering, medicine, research, and technology. It is divided into two main combinations:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <span>
                    <strong>PCM (Physics, Chemistry, Mathematics):</strong> Ideal for students interested in
                    engineering, technology, and physical sciences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <span>
                    <strong>PCB (Physics, Chemistry, Biology):</strong> Suitable for students aiming for medical,
                    healthcare, and life sciences careers
                  </span>
                </li>
              </ul>
              <p className="text-gray-700">
                Students in the Science stream develop strong analytical and problem-solving skills, along with a deep
                understanding of scientific principles and mathematical concepts.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Science Stream Education"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  PCM Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Physics</p>
                      <p className="text-sm text-gray-600">
                        Study of matter, energy, and the interaction between them. Includes mechanics, thermodynamics,
                        optics, electricity, and modern physics.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Chemistry</p>
                      <p className="text-sm text-gray-600">
                        Study of substances, their properties, structure, composition, and the changes they undergo.
                        Includes organic, inorganic, and physical chemistry.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Mathematics</p>
                      <p className="text-sm text-gray-600">
                        Study of numbers, quantities, and shapes. Includes algebra, calculus, trigonometry, and
                        coordinate geometry.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">English</p>
                      <p className="text-sm text-gray-600">
                        Compulsory language subject focusing on reading, writing, and communication skills.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Optional Subject</p>
                      <p className="text-sm text-gray-600">
                        Can include Computer Science, Physical Education, Economics, or a second language.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  PCB Subjects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Physics</p>
                      <p className="text-sm text-gray-600">
                        Study of matter, energy, and the interaction between them. Includes mechanics, thermodynamics,
                        optics, electricity, and modern physics.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Chemistry</p>
                      <p className="text-sm text-gray-600">
                        Study of substances, their properties, structure, composition, and the changes they undergo.
                        Includes organic, inorganic, and physical chemistry.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Biology</p>
                      <p className="text-sm text-gray-600">
                        Study of living organisms and their interactions with each other and the environment. Includes
                        botany, zoology, and human physiology.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">English</p>
                      <p className="text-sm text-gray-600">
                        Compulsory language subject focusing on reading, writing, and communication skills.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Optional Subject</p>
                      <p className="text-sm text-gray-600">
                        Can include Mathematics (for keeping both medical and engineering options open), Psychology,
                        Biotechnology, or a second language.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Career Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  PCM Career Paths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Engineering</p>
                      <p className="text-sm text-gray-600">
                        Various branches including Computer Science, Mechanical, Electrical, Civil, Electronics, and
                        more.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Architecture</p>
                      <p className="text-sm text-gray-600">Design and planning of buildings and structures.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Pure Sciences</p>
                      <p className="text-sm text-gray-600">
                        Research and academic careers in Physics, Chemistry, and Mathematics.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Information Technology</p>
                      <p className="text-sm text-gray-600">
                        Software development, data science, artificial intelligence, and cybersecurity.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Quantitative Finance</p>
                      <p className="text-sm text-gray-600">
                        Financial analysis, investment banking, and actuarial science.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  PCB Career Paths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Medicine</p>
                      <p className="text-sm text-gray-600">
                        MBBS, BDS (Dental), BAMS (Ayurveda), BHMS (Homeopathy), and other medical degrees.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Allied Health Sciences</p>
                      <p className="text-sm text-gray-600">
                        Nursing, Physiotherapy, Occupational Therapy, and Medical Laboratory Technology.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Pharmacy</p>
                      <p className="text-sm text-gray-600">Pharmaceutical research, development, and practice.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Life Sciences</p>
                      <p className="text-sm text-gray-600">Microbiology, Biochemistry, Biotechnology, and Genetics.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Veterinary Science</p>
                      <p className="text-sm text-gray-600">Animal healthcare and research.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Entrance Exams</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  For PCM Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">JEE Main & Advanced</p>
                      <p className="text-sm text-gray-600">
                        For admission to IITs, NITs, and other top engineering colleges.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BITSAT</p>
                      <p className="text-sm text-gray-600">For admission to BITS Pilani and its campuses.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">State Engineering Entrance Exams</p>
                      <p className="text-sm text-gray-600">
                        Like WBJEE, KCET, MHT-CET, etc. for state-level engineering colleges.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">NATA</p>
                      <p className="text-sm text-gray-600">For architecture courses.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  For PCB Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">NEET-UG</p>
                      <p className="text-sm text-gray-600">
                        For admission to MBBS, BDS, BAMS, BHMS, and other medical courses.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">AIIMS & JIPMER</p>
                      <p className="text-sm text-gray-600">
                        For admission to these specific premier medical institutions (now part of NEET).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">NEET-VET</p>
                      <p className="text-sm text-gray-600">For veterinary courses.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Various University Entrance Tests</p>
                      <p className="text-sm text-gray-600">For admission to BSc and other life science courses.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Choose the Science Stream?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized guidance on subject selection, exam preparation, and career planning.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
            <Link href="/contact">Contact Our Counselors</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

