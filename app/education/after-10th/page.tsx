import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, GraduationCap } from "lucide-react"

export default function After10thPage() {
  const streamOptions = [
    {
      name: "Science Stream (PCM/PCB)",
      description: "Foundation for engineering, medical, and science careers",
      subjects: ["Physics", "Chemistry", "Mathematics/Biology", "English", "Optional Subject"],
      careers: ["Engineering", "Medicine", "Research", "Architecture"],
      details:
        "The Science stream is divided into PCM (Physics, Chemistry, Mathematics) and PCB (Physics, Chemistry, Biology) combinations. PCM is ideal for students interested in engineering and technology careers, while PCB is suitable for those aiming for medical and life sciences professions.",
    },
    {
      name: "Commerce Stream",
      description: "Foundation for business, finance, and accounting careers",
      subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics/Optional"],
      careers: ["Chartered Accountancy", "Business Management", "Banking", "Finance"],
      details:
        "The Commerce stream provides a strong foundation in business principles, accounting, and economics. Students can opt for Mathematics to keep technical career options open or choose other subjects like Statistics or Computer Science.",
    },
    {
      name: "Arts/Humanities Stream",
      description: "Foundation for careers in social sciences, literature, and creative fields",
      subjects: ["History", "Geography", "Political Science", "Sociology", "Languages"],
      careers: ["Civil Services", "Law", "Journalism", "Teaching", "Social Work"],
      details:
        "The Arts/Humanities stream offers flexibility in subject combinations. Students can choose from a wide range of subjects including Psychology, Economics, Fine Arts, and various languages based on their interests and career goals.",
    },
    {
      name: "Diploma Courses",
      description: "Technical education in engineering, pharmacy, etc.",
      subjects: ["Core Technical Subjects", "Mathematics", "Science", "English", "Practical Training"],
      careers: ["Technical Roles", "Supervisory Positions", "Entrepreneurship"],
      details:
        "Diploma courses offer a practical approach to education with hands-on training in specific technical fields. These 3-year programs can be pursued directly after 10th standard and provide a pathway to employment or further education through lateral entry into degree programs.",
    },
    {
      name: "ITI Courses",
      description: "Vocational training in various trades",
      subjects: ["Trade-specific Skills", "Workshop Practice", "Engineering Drawing", "Basic Sciences"],
      careers: ["Skilled Technician", "Service Technician", "Self-employment"],
      details:
        "Industrial Training Institute (ITI) courses focus on developing specific vocational skills in trades like electrician, plumber, mechanic, etc. These courses typically range from 6 months to 2 years and emphasize practical training for immediate employment.",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/education" className="text-green-600 hover:underline">
              ← Back to Education Pathways
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">After 10th Standard: Education Pathways</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore your options after completing 10th standard and find the right path for your future
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {streamOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                    {option.name}
                  </CardTitle>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-3">Key Subjects</h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {option.subjects.map((subject, i) => (
                          <Badge key={i} variant="secondary">
                            {subject}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="font-bold text-lg mb-3">Career Opportunities</h3>
                      <div className="flex flex-wrap gap-2">
                        {option.careers.map((career, i) => (
                          <Badge key={i} variant="outline" className="bg-green-50">
                            {career}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3">Details</h3>
                      <p className="text-gray-700">{option.details}</p>

                      <Button className="mt-6 bg-green-600 hover:bg-green-700">
                        <Link
                          href={`/education/stream/${option.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")
                            .replace(/[/()]/g, "")}`}
                        >
                          Explore {option.name} in Detail
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Making the Right Choice</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Consider Your Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Choose a stream that aligns with your interests and passions. You're more likely to excel in subjects
                  you enjoy studying.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Assess Your Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Evaluate your academic strengths and choose a path where these strengths can be leveraged for better
                  performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Research Career Prospects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Understand the career opportunities each stream offers and how they align with your long-term goals
                  and aspirations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Personalized Guidance?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our career counselors can help you choose the right path based on your interests, strengths, and career
            goals.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/contact">Contact a Counselor</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

