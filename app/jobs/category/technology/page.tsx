import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { fetchJobData } from "@/lib/data"

export default async function TechnologyJobsPage() {
  const allJobs = await fetchJobData()

  // Filter for technology jobs
  const technologyJobs = allJobs.filter((job) => {
    const role = job["Job Role"].toLowerCase()
    return (
      role.includes("developer") ||
      role.includes("engineer") ||
      role.includes("architect") ||
      role.includes("data") ||
      role.includes("security") ||
      role.includes("analyst") ||
      role.includes("tech")
    )
  })

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
            <h1 className="text-3xl font-bold text-gray-900">Technology Careers</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore careers in software development, data science, cybersecurity, and more
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{job["Job Role"]}</CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {job["Average Salary (₹ LPA)"]}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-500">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {job["Required Skills"]
                        .split(",")
                        .slice(0, 3)
                        .map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill.trim()}
                          </Badge>
                        ))}
                      {job["Required Skills"].split(",").length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{job["Required Skills"].split(",").length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button variant="link" className="p-0 text-green-600">
                    <Link href={`/jobs/${encodeURIComponent(job["Job Role"])}`} className="flex items-center">
                      View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Technology Career Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Industry Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The technology sector continues to evolve rapidly with emerging fields like artificial intelligence,
                  blockchain, quantum computing, and extended reality creating new career opportunities.
                </p>
                <p>
                  Remote work has become a standard option in tech careers, with many companies offering hybrid or fully
                  remote positions, expanding job opportunities beyond traditional tech hubs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills in Demand</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Cloud computing (AWS, Azure, GCP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>AI/ML frameworks and tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>DevOps and CI/CD pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Cybersecurity expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Data analysis and visualization</span>
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

