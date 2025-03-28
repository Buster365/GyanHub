import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react"
import { getEducationPaths } from "@/lib/data"

export default function EducationPage() {
  const educationPaths = getEducationPaths()

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Education Pathways</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore various education paths and discover the career opportunities they can lead to
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Choose Your Education Level</h2>
            <p className="text-gray-600 mt-2">Find the right path based on your current education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                    {path.level}
                  </CardTitle>
                  <CardDescription className="text-base">
                    Explore education and career options after {path.level.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {path.paths.map((option, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                        <div>
                          <p className="font-medium">{option.name}</p>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="link" className="p-0 text-green-600">
                      <Link
                        href={`/education/${path.level.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center"
                      >
                        Explore Detailed Paths <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Technical Degrees</h2>
            <p className="text-gray-600 mt-2">Explore technical education paths and their career prospects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                degree: "B.Tech in Computer Science",
                description: "Foundation for software development, data science, and IT careers",
                careers: ["Software Developer", "Data Scientist", "System Architect"],
              },
              {
                degree: "B.Tech in Electronics",
                description: "Foundation for electronics, telecommunications, and hardware careers",
                careers: ["Electronics Engineer", "IoT Developer", "Hardware Designer"],
              },
              {
                degree: "B.Tech in Mechanical",
                description: "Foundation for mechanical design, manufacturing, and automation careers",
                careers: ["Mechanical Engineer", "CAD Designer", "Manufacturing Engineer"],
              },
              {
                degree: "M.Tech in AI & ML",
                description: "Advanced study in artificial intelligence and machine learning",
                careers: ["AI Engineer", "ML Researcher", "Data Scientist"],
              },
              {
                degree: "M.Tech in Robotics",
                description: "Advanced study in robotics and automation systems",
                careers: ["Robotics Engineer", "Automation Specialist", "Research Scientist"],
              },
              {
                degree: "M.Tech in Data Science",
                description: "Advanced study in data analysis and computational methods",
                careers: ["Data Scientist", "Analytics Manager", "Research Scientist"],
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    {item.degree}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <p className="font-medium">Career Opportunities:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.careers.map((career, i) => (
                        <Badge key={i} variant="secondary">
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="link" className="p-0 text-green-600 mt-4">
                    <Link
                      href={`/education/degree/${item.degree.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center"
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Personalized Education Guidance?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our career counselors can help you choose the right education path based on your interests, strengths, and
            career goals.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/contact">Contact a Counselor</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

