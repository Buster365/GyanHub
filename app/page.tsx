import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/components/search-bar"
import PopularJobs from "@/components/popular-jobs"
import { ArrowRight, BookOpen, Briefcase, GraduationCap } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-teal-50 py-20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Leading and Innovative <span className="text-green-600">Career Counselling</span> Centre
            </h1>
            <p className="text-lg text-gray-700 max-w-xl">
              Discover the perfect career path based on your education, skills, and interests. Get comprehensive
              guidance for your professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/jobs">Explore Careers</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/education">Education Paths</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Career Guidance"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-4 md:px-6 mt-8">
          <SearchBar />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">OUR SERVICES</h2>
            <p className="text-gray-600 mt-2">Comprehensive career guidance services to help you succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Education Pathways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Discover career options based on your education level - 10th, 12th, or higher degrees.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 text-green-600">
                  <Link href="/education" className="flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  High-Paying Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Explore top-paying career options across various industries and domains.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 text-green-600">
                  <Link href="/jobs/high-paying" className="flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Skill Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Learn about the skills required for your dream job and how to acquire them.
                </CardDescription>
                <Button variant="link" className="mt-4 p-0 text-green-600">
                  <Link href="/skills" className="flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">POPULAR TECHNICAL CAREERS</h2>
            <p className="text-gray-600 mt-2">Explore in-demand technical careers with great growth potential</p>
          </div>

          <PopularJobs />

          <div className="text-center mt-10">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/jobs">View All Careers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized career guidance based on your education, skills, and interests.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
            <Link href="/contact">Contact Our Counselors</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

