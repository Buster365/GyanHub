import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, GraduationCap, Clock } from "lucide-react"

export default function BTechCSPage() {
  const careerPaths = [
    {
      title: "Software Developer",
      description: "Design, develop, and maintain software applications and systems",
      skills: ["Programming Languages", "Data Structures", "Algorithms", "Software Design"],
      companies: ["Google", "Microsoft", "Amazon", "TCS", "Infosys"],
    },
    {
      title: "Data Scientist",
      description: "Analyze and interpret complex data to help organizations make better decisions",
      skills: ["Machine Learning", "Statistics", "Data Analysis", "Python/R"],
      companies: ["Amazon", "IBM", "Microsoft", "Statistics", "Data Analysis", "Python/R"],
      companies: ["Amazon", "IBM", "Microsoft", "Mu Sigma", "Tiger Analytics"],
    },
    {
      title: "Web Developer",
      description: "Create and maintain websites and web applications",
      skills: ["HTML/CSS", "JavaScript", "Frontend Frameworks", "Backend Technologies"],
      companies: ["Google", "Meta", "Flipkart", "Razorpay", "Startups"],
    },
    {
      title: "DevOps Engineer",
      description: "Implement and manage continuous integration and delivery systems",
      skills: ["Cloud Platforms", "Containerization", "CI/CD", "Scripting"],
      companies: ["Amazon", "Microsoft", "IBM", "Infosys", "TCS"],
    },
    {
      title: "AI/ML Engineer",
      description: "Develop and implement artificial intelligence and machine learning solutions",
      skills: ["Machine Learning", "Deep Learning", "Python", "TensorFlow/PyTorch"],
      companies: ["Google", "Microsoft", "Amazon", "NVIDIA", "OpenAI"],
    },
    {
      title: "Cybersecurity Specialist",
      description: "Protect systems, networks, and data from cyber threats",
      skills: ["Network Security", "Ethical Hacking", "Security Tools", "Risk Assessment"],
      companies: ["IBM", "Cisco", "Deloitte", "TCS", "Tech Mahindra"],
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
            <h1 className="text-3xl font-bold text-gray-900">B.Tech in Computer Science</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Comprehensive guide to pursuing a Bachelor of Technology in Computer Science
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">4 years (8 semesters)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">10+2 with PCM (Physics, Chemistry, Mathematics)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Career Prospects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Excellent job opportunities in IT, software development, and tech industries
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              B.Tech in Computer Science is a four-year undergraduate program that focuses on the fundamentals of
              computer programming, software development, algorithms, data structures, and various aspects of computing.
              The program provides a strong foundation in both theoretical and practical aspects of computer science.
            </p>
            <p className="text-gray-700 mb-4">
              The curriculum typically includes core computer science subjects, mathematics, electives, and project
              work. Students also gain hands-on experience through laboratory sessions, internships, and capstone
              projects.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Data Structures & Algorithms",
                "Object-Oriented Programming",
                "Database Management Systems",
                "Computer Networks",
                "Operating Systems",
                "Software Engineering",
                "Web Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Architecture",
                "Theory of Computation",
                "Compiler Design",
                "Cloud Computing",
                "Cybersecurity",
                "Mobile Application Development",
              ].map((subject, index) => (
                <Badge key={index} className="py-2 px-4 text-base bg-green-50 text-green-800 hover:bg-green-100">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Career Paths after B.Tech in Computer Science</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">Key Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">Top Hiring Companies</h3>
                      <div className="flex flex-wrap gap-2">
                        {path.companies.map((company, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Colleges for B.Tech in Computer Science</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>IITs and NITs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Indian Institutes of Technology (IITs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>National Institutes of Technology (NITs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Indian Institutes of Information Technology (IIITs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Birla Institute of Technology and Science (BITS)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Top Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Delhi Technological University (DTU)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Vellore Institute of Technology (VIT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>SRM Institute of Science and Technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Manipal Institute of Technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Centurion University of Technology and Management (CUTM)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Pursue B.Tech in Computer Science?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized guidance on college selection, entrance exam preparation, and career planning.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
            <Link href="/contact">Contact Our Counselors</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

