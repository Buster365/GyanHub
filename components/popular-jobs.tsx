"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { fetchJobData } from "@/lib/data"
import type { JobData } from "@/types/job"

export default function PopularJobs() {
  const [popularJobs, setPopularJobs] = useState<JobData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const allJobs = await fetchJobData()

        // Filter for technical jobs and take the first 6
        const technicalJobs = allJobs
          .filter((job) => {
            const role = job["Job Role"].toLowerCase()
            return (
              role.includes("developer") ||
              role.includes("engineer") ||
              role.includes("scientist") ||
              role.includes("analyst") ||
              role.includes("architect")
            )
          })
          .slice(0, 6)

        setPopularJobs(technicalJobs)
      } catch (error) {
        console.error("Error loading job data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadJobs()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="h-24 bg-gray-200 rounded-t-lg" />
            <CardContent className="p-6">
              <div className="h-6 bg-gray-200 rounded mb-4" />
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularJobs.map((job, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">{job["Job Role"]}</CardTitle>
            <Badge variant="outline" className="w-fit">
              {job["Average Salary (₹ LPA)"]}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
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
          </CardContent>
          <CardFooter>
            <Button variant="link" className="p-0 text-green-600">
              <Link href={`/jobs/${encodeURIComponent(job["Job Role"])}`} className="flex items-center">
                View Career Path <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

