import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import SearchBar from "@/components/search-bar"
import { ArrowRight } from "lucide-react"
import { fetchJobData } from "@/lib/data"
import type { JobData } from "@/types/job"

interface SearchPageProps {
  searchParams: { q: string }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ""
  const allJobs = await fetchJobData()

  let searchResults: JobData[] = []

  if (query) {
    searchResults = allJobs.filter(
      (job) =>
        job["Job Role"].toLowerCase().includes(query.toLowerCase()) ||
        job["Required Skills"].toLowerCase().includes(query.toLowerCase()),
    )
  }

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
            <h1 className="text-3xl font-bold text-gray-900">Search Results: {query}</h1>
            <p className="text-lg text-gray-700 mt-2">
              {searchResults.length} {searchResults.length === 1 ? "result" : "results"} found
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((job, index) => (
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
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No results found</h2>
              <p className="text-gray-600 mb-8">
                We couldn't find any jobs matching "{query}". Try different keywords or browse our job categories.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/jobs">Browse All Jobs</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

