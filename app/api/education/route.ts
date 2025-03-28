import { NextResponse } from "next/server"
import { getEducationPaths } from "@/lib/data"

export async function GET(request: Request) {
  try {
    // Get the URL from the request
    const url = new URL(request.url)

    // Get query parameters
    const level = url.searchParams.get("level") || ""

    // Fetch education paths
    const allPaths = getEducationPaths()

    // Filter paths based on level
    let filteredPaths = allPaths

    if (level) {
      filteredPaths = allPaths.filter((path) => path.level.toLowerCase().includes(level.toLowerCase()))
    }

    return NextResponse.json({ educationPaths: filteredPaths })
  } catch (error) {
    console.error("Error fetching education data:", error)
    return NextResponse.json({ error: "Failed to fetch education data" }, { status: 500 })
  }
}

