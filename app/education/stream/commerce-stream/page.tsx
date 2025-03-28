import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"

export default function CommerceStreamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/education/after-10th" className="text-green-600 hover:underline">
              ← Back to After 10th Options
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Commerce Stream</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Comprehensive guide to the Commerce stream after 10th standard
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                The Commerce stream is an excellent choice for students interested in business, finance, economics, and
                management. It provides a strong foundation in commercial principles and practices, preparing students
                for careers in accounting, banking, marketing, and entrepreneurship.
              </p>
              <p className="text-gray-700 mb-4">
                Commerce education focuses on developing analytical, financial, and managerial skills, along with an
                understanding of business operations, economic principles, and financial systems.
              </p>
              <p className="text-gray-700">
                Students can choose between Commerce with Mathematics or Commerce without Mathematics, depending on
                their career goals and strengths.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Commerce Stream Education"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    Main Subjects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-medium">Accountancy</p>
                        <p className="text-sm text-gray-600">
                          Study of recording, classifying, and summarizing financial transactions. Includes financial
                          statements, accounting principles, and corporate accounting.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-medium">Business Studies</p>
                        <p className="text-sm text-gray-600">
                          Study of business organizations, management principles, marketing, finance, and
                          entrepreneurship.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-medium">Economics</p>
                        <p className="text-sm text-gray-600">
                          Study of how societies allocate resources. Includes microeconomics, macroeconomics, and Indian
                          economic development.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-medium">English</p>
                        <p className="text-sm text-gray-600">
                          Compulsory language subject focusing on reading, writing, and communication skills.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    Optional Subjects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-medium">Mathematics</p>
                        <p className="text-sm text-gray-600">
                          Recommended for students interested in careers like Chartered Accountancy, MBA, or Data
                          Analytics.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-medium">Computer Science/Informatics Practices</p>
                        <p className="text-sm text-gray-600">
                          Provides knowledge of computer applications in business.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-medium">Statistics</p>
                        <p className="text-sm text-gray-600">Study of data collection, analysis, and interpretation.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-medium">Second Language</p>
                        <p className="text-sm text-gray-600">Hindi, Sanskrit, or other regional languages.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Career Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Accounting & Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Chartered Accountant (CA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Company Secretary (CS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Cost and Management Accountant (CMA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Financial Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Investment Banker</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Management & Business
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Business Manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Marketing Executive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Human Resource Manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Entrepreneur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Business Consultant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Other Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Banking Professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Economist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Tax Consultant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Business Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Digital Marketer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Higher Education Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Undergraduate Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">B.Com (Bachelor of Commerce)</p>
                      <p className="text-sm text-gray-600">
                        Regular, Honors, or specialized streams like Accounting, Finance, or Banking.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BBA (Bachelor of Business Administration)</p>
                      <p className="text-sm text-gray-600">Focus on business management and administration.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BBM (Bachelor of Business Management)</p>
                      <p className="text-sm text-gray-600">Similar to BBA with variations in curriculum.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BMS (Bachelor of Management Studies)</p>
                      <p className="text-sm text-gray-600">Comprehensive management education.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">B.Econ (Bachelor of Economics)</p>
                      <p className="text-sm text-gray-600">Specialized study of economic theories and applications.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Professional Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">CA (Chartered Accountancy)</p>
                      <p className="text-sm text-gray-600">
                        Premier accounting qualification with Foundation, Intermediate, and Final levels.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">CS (Company Secretary)</p>
                      <p className="text-sm text-gray-600">
                        Specialization in corporate laws, governance, and compliance.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">CMA (Cost Management Accountancy)</p>
                      <p className="text-sm text-gray-600">Focus on cost accounting and management accounting.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">CFA (Chartered Financial Analyst)</p>
                      <p className="text-sm text-gray-600">Global designation for investment professionals.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Choose the Commerce Stream?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized guidance on subject selection, career planning, and professional course preparation.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
            <Link href="/contact">Contact Our Counselors</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

