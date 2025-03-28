import { NextResponse } from "next/server"
import { fetchJobData } from "@/lib/data"

export async function GET(request: Request) {
  try {
    // Get the URL from the request
    const url = new URL(request.url)

    // Get query parameters
    const searchQuery = url.searchParams.get("q") || ""
    const category = url.searchParams.get("category") || ""

    // Fetch all job data
    const allJobs = await fetchJobData()

    // Filter jobs based on search query and category
    let filteredJobs = allJobs

    if (searchQuery) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job["Job Role"].toLowerCase().includes(searchQuery.toLowerCase()) ||
          job["Required Skills"].toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    if (category) {
      filteredJobs = filteredJobs.filter((job) => {
        const role = job["Job Role"].toLowerCase()

        switch (category.toLowerCase()) {
          case "technology":
            return (
              role.includes("developer") ||
              role.includes("engineer") ||
              role.includes("architect") ||
              role.includes("data") ||
              role.includes("security") ||
              role.includes("analyst")
            )
          case "engineering":
            return role.includes("engineer") || role.includes("designer") || role.includes("architect")
          case "healthcare":
            return (
              role.includes("doctor") ||
              role.includes("nurse") ||
              role.includes("medical") ||
              role.includes("health") ||
              role.includes("pharma") ||
              role.includes("therapist")
            )
          case "business":
            return (
              role.includes("manager") ||
              role.includes("analyst") ||
              role.includes("consultant") ||
              role.includes("executive") ||
              role.includes("finance")
            )
          default:
            return true
        }
      })
    }

    return NextResponse.json({ jobs: filteredJobs })
  } catch (error) {
    console.error("Error fetching job data:", error)
    return NextResponse.json({ error: "Failed to fetch job data" }, { status: 500 })
  }
}

