import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                About <span className="text-green-600">GyanHub</span>
              </h1>
              <p className="text-lg text-gray-700">
                GyanHub is a comprehensive career guidance platform dedicated to helping students and professionals make
                informed decisions about their education and career paths.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="About GyanHub"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              To empower individuals with the knowledge and resources they need to make informed career decisions and
              achieve their professional goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Guidance",
                description:
                  "Provide detailed information about various career paths, education requirements, and job opportunities.",
              },
              {
                title: "Personalized Approach",
                description:
                  "Offer tailored guidance based on individual interests, skills, and educational background.",
              },
              {
                title: "Industry Insights",
                description:
                  "Share up-to-date information about industry trends, job market demands, and emerging career opportunities.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="text-gray-600 mt-2">Meet the experts behind GyanHub</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Nibedita Swain",
                role: "Career Counselor",
                expertise: "Technical Education",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sangeeta Pradhan",
                role: "Education Specialist",
                expertise: "Higher Education",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Abhitosh Samal",
                role: "Industry Expert",
                expertise: "IT & Software",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sheikh Ilyas Quadri",
                role: "Research Lead",
                expertise: "Career Trends",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sugyan Santosh Mishra",
                role: "Career Advisor",
                expertise: "Engineering Careers",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Prangyajeet Pattanayak",
                role: "Technical Consultant",
                expertise: "Computer Science",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Deepak Kumar Sahu",
                role: "Education Counselor",
                expertise: "Professional Development",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Prahallad Sahoo",
                role: "Industry Liaison",
                expertise: "Corporate Relations",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-green-600">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose GyanHub?</h2>
              <div className="space-y-4">
                {[
                  "Expert guidance from industry professionals and education specialists",
                  "Comprehensive information about various career paths and education options",
                  "Personalized recommendations based on your interests, skills, and background",
                  "Up-to-date insights about job market trends and emerging opportunities",
                  "Resources to help you make informed decisions about your future",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Why Choose GyanHub"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors and take the first step towards your dream career.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

