import type { JobData } from "@/types/job"

export async function fetchJobData(): Promise<JobData[]> {
  try {
    const response = await fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-HFqcGXDd06THl4pfXY8i4NgfmUVfoz.csv",
    )
    const csvText = await response.text()

    // Parse CSV
    const rows = csvText.split("\n")
    const headers = rows[0].split(",")

    const data: JobData[] = []

    for (let i = 1; i < rows.length; i++) {
      if (!rows[i].trim()) continue

      // Handle commas within quoted fields
      const row: string[] = []
      let inQuotes = false
      let currentField = ""

      for (let j = 0; j < rows[i].length; j++) {
        const char = rows[i][j]

        if (char === '"') {
          inQuotes = !inQuotes
        } else if (char === "," && !inQuotes) {
          row.push(currentField)
          currentField = ""
        } else {
          currentField += char
        }
      }

      row.push(currentField) // Add the last field

      const jobData: any = {}
      headers.forEach((header, index) => {
        if (index < row.length) {
          jobData[header.trim()] = row[index].trim().replace(/^"|"$/g, "")
        }
      })

      data.push(jobData as JobData)
    }

    return data
  } catch (error) {
    console.error("Error fetching job data:", error)
    return []
  }
}

export function getEducationPaths() {
  return [
    {
      level: "After 10th",
      paths: [
        { name: "Science Stream (PCM/PCB)", description: "Foundation for engineering, medical, and science careers" },
        { name: "Commerce Stream", description: "Foundation for business, finance, and accounting careers" },
        {
          name: "Arts/Humanities Stream",
          description: "Foundation for careers in social sciences, literature, and creative fields",
        },
        { name: "Diploma Courses", description: "Technical education in engineering, pharmacy, etc." },
        { name: "ITI Courses", description: "Vocational training in various trades" },
      ],
    },
    {
      level: "After 12th (Science)",
      paths: [
        { name: "B.Tech/B.E.", description: "Engineering degree in various specializations" },
        { name: "B.Sc", description: "Bachelor's degree in scientific disciplines" },
        { name: "MBBS", description: "Medical degree for becoming a doctor" },
        { name: "BDS", description: "Dental surgery degree" },
        { name: "B.Pharm", description: "Pharmacy degree" },
      ],
    },
    {
      level: "After 12th (Commerce)",
      paths: [
        { name: "B.Com", description: "Bachelor's degree in commerce" },
        { name: "BBA", description: "Bachelor's in Business Administration" },
        { name: "CA", description: "Chartered Accountancy" },
        { name: "CS", description: "Company Secretary" },
        { name: "CMA", description: "Cost Management Accountancy" },
      ],
    },
    {
      level: "After 12th (Arts)",
      paths: [
        { name: "BA", description: "Bachelor's degree in arts subjects" },
        { name: "BFA", description: "Bachelor's in Fine Arts" },
        { name: "BDes", description: "Bachelor's in Design" },
        { name: "BMM", description: "Bachelor's in Mass Media" },
        { name: "BHM", description: "Bachelor's in Hotel Management" },
      ],
    },
  ]
}

