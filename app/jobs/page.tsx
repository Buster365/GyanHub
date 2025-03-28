import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import SearchBar from "@/components/search-bar"
import { ArrowRight, Briefcase } from "lucide-react"

export default function JobsPage() {
  const jobCategories = [
    {
      title: "Technology",
      description: "Software development, data science, cybersecurity, and more",
      jobs: ["Software Developer", "Data Scientist", "Cybersecurity Analyst", "DevOps Engineer", "AI/ML Engineer"],
    },
    {
      title: "Engineering",
      description: "Civil, mechanical, electrical, and other engineering fields",
      jobs: ["Civil Engineer", "Mechanical Engineer", "Electrical Engineer", "Chemical Engineer", "Aerospace Engineer"],
    },
    {
      title: "Healthcare",
      description: "Medical, nursing, pharmacy, and allied health professions",
      jobs: ["Doctor", "Nurse", "Pharmacist", "Physiotherapist", "Medical Researcher"],
    },
    {
      title: "Business & Finance",
      description: "Management, accounting, finance, and entrepreneurship",
      jobs: [
        "Financial Analyst",
        "Management Consultant",
        "Chartered Accountant",
        "Investment Banker",
        "Marketing Manager",
      ],
    },
    {
      title: "Creative Arts",
      description: "Design, media, entertainment, and creative professions",
      jobs: ["UX/UI Designer", "Content Creator", "Graphic Designer", "Film Director", "Animator"],
    },
    {
      title: "Education & Research",
      description: "Teaching, research, and academic careers",
      jobs: ["Professor", "Research Scientist", "Education Consultant", "Curriculum Developer", "Academic Counselor"],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Explore Career Opportunities</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Discover detailed information about various career paths, requirements, and opportunities
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Career Categories</h2>
            <p className="text-gray-600 mt-2">Explore careers across various industries and domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-green-600" />
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.jobs.map((job, i) => (
                      <Badge key={i} variant="secondary">
                        {job}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="link" className="p-0 text-green-600">
                    <Link
                      href={`/jobs/category/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center"
                    >
                      View All {category.title} Jobs <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">High-Paying Career Paths in BTech CSE</h2>
            <p className="text-gray-600 mt-2">
              Explore careers with excellent compensation and growth potential for Computer Science graduates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Data Scientist",
              "Software Architect",
              "AI Engineer",
              "Cloud Solutions Architect",
              "Cybersecurity Expert",
              "DevOps Engineer",
              "Blockchain Developer",
              "Product Manager",
            ].map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{job}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Link href={`/jobs/${encodeURIComponent(job)}`}>View Career Path</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

