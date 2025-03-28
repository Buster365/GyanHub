import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { fetchJobData } from "@/lib/data"

export default async function HealthcareJobsPage() {
  const allJobs = await fetchJobData()

  // Filter for healthcare jobs
  const healthcareJobs = allJobs.filter((job) => {
    const role = job["Job Role"].toLowerCase()
    return (
      role.includes("doctor") ||
      role.includes("nurse") ||
      role.includes("medical") ||
      role.includes("health") ||
      role.includes("pharma") ||
      role.includes("clinical") ||
      role.includes("therapist")
    )
  })

  // If no healthcare jobs found in the data, provide some default ones
  const defaultHealthcareJobs =
    healthcareJobs.length > 0
      ? healthcareJobs
      : [
          {
            "Job Role": "Medical Doctor",
            "Required Skills": "Medical degree, clinical expertise, patient care, diagnostic skills",
            "Average Salary (₹ LPA)": "₹15-60",
            "Top Hiring Companies": "Apollo Hospitals, Fortis Healthcare, AIIMS, Max Healthcare",
          },
          {
            "Job Role": "Registered Nurse",
            "Required Skills": "Patient care, medical knowledge, critical thinking, communication",
            "Average Salary (₹ LPA)": "₹3-12",
            "Top Hiring Companies": "Apollo Hospitals, Fortis Healthcare, Manipal Hospitals, Narayana Health",
          },
          {
            "Job Role": "Pharmacist",
            "Required Skills": "Pharmaceutical knowledge, medication management, patient counseling",
            "Average Salary (₹ LPA)": "₹4-15",
            "Top Hiring Companies": "Apollo Pharmacy, MedPlus, Cipla, Sun Pharma",
          },
          {
            "Job Role": "Medical Researcher",
            "Required Skills": "Research methodology, data analysis, scientific writing, specialized knowledge",
            "Average Salary (₹ LPA)": "₹8-25",
            "Top Hiring Companies": "ICMR, CSIR, Biocon, Serum Institute of India",
          },
          {
            "Job Role": "Healthcare Administrator",
            "Required Skills": "Management, healthcare regulations, budgeting, leadership",
            "Average Salary (₹ LPA)": "₹7-30",
            "Top Hiring Companies": "Apollo Hospitals, Fortis Healthcare, Max Healthcare, Manipal Hospitals",
          },
          {
            "Job Role": "Physiotherapist",
            "Required Skills": "Rehabilitation techniques, anatomy knowledge, patient assessment",
            "Average Salary (₹ LPA)": "₹3-12",
            "Top Hiring Companies": "Apollo Hospitals, AIIMS, Manipal Hospitals, Rehabilitation Centers",
          },
        ]

  const jobsToDisplay = healthcareJobs.length > 0 ? healthcareJobs : defaultHealthcareJobs

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
            <h1 className="text-3xl font-bold text-gray-900">Healthcare Careers</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore careers in medicine, nursing, pharmacy, and allied health professions
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobsToDisplay.map((job, index) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Healthcare Career Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Industry Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The healthcare sector is experiencing rapid growth with increasing demand for professionals across all
                  specialties, particularly in telemedicine, preventive care, and geriatric services.
                </p>
                <p>
                  Technology integration in healthcare is creating new roles at the intersection of medicine and
                  technology, such as health informatics specialists and medical technology consultants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education Pathways</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Medical degrees (MBBS, MD) for physician roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Nursing degrees (BSc, MSc Nursing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Pharmacy degrees (B.Pharm, M.Pharm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Allied health professional courses (Physiotherapy, Lab Technology)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Healthcare management degrees (MHA, MBA Healthcare)</span>
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

