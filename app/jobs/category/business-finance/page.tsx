import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, Building, GraduationCap, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function BusinessFinanceJobsPage() {
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
            <h1 className="text-3xl font-bold text-gray-900">Business & Finance Careers</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore opportunities in management, accounting, finance, and entrepreneurship
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview of Business & Finance Careers</h2>
              <p className="text-gray-700 mb-4">
                Business and finance careers encompass a wide range of roles focused on the management of organizations,
                financial operations, strategic planning, and market analysis. These professions are essential for the
                functioning of companies across all industries.
              </p>
              <p className="text-gray-700">
                Professionals in this field help businesses make sound financial decisions, manage resources
                efficiently, develop growth strategies, and ensure compliance with regulations. With the right
                qualifications and experience, business and finance careers can offer excellent compensation, job
                security, and opportunities for advancement.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Business and Finance Careers"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Business & Finance Careers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Chartered Accountant (CA)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  CAs are financial experts who handle accounting, auditing, taxation, and financial advisory services
                  for organizations and individuals.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Financial Reporting</Badge>
                      <Badge variant="outline">Auditing</Badge>
                      <Badge variant="outline">Tax Planning</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹7-30 LPA depending on experience and specialization</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Big 4 (Deloitte, PwC, EY, KPMG), Corporate Finance Departments</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Financial Analyst
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Financial analysts evaluate investment opportunities, analyze financial data, and provide
                  recommendations to help businesses and individuals make investment decisions.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Financial Modeling</Badge>
                      <Badge variant="outline">Market Analysis</Badge>
                      <Badge variant="outline">Investment Research</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹5-20 LPA depending on experience and employer</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Investment Banks, Mutual Funds, Corporate Finance Departments</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Investment Banker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Investment bankers help companies and governments raise capital, provide advisory services for mergers
                  and acquisitions, and facilitate other financial transactions.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Deal Structuring</Badge>
                      <Badge variant="outline">Financial Modeling</Badge>
                      <Badge variant="outline">Client Advisory</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹10-50 LPA depending on experience and position</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Goldman Sachs, JP Morgan, Morgan Stanley, Citi, Bank of America</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Management Consultant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Management consultants help organizations improve their performance by analyzing existing problems and
                  developing plans for improvement.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Business Analysis</Badge>
                      <Badge variant="outline">Strategy Development</Badge>
                      <Badge variant="outline">Process Optimization</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹8-40 LPA depending on experience and firm</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>McKinsey, BCG, Bain & Company, Deloitte, Accenture</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Marketing Manager
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Marketing managers develop and implement marketing strategies to promote products or services and
                  drive business growth.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Campaign Planning</Badge>
                      <Badge variant="outline">Market Research</Badge>
                      <Badge variant="outline">Brand Management</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹6-25 LPA depending on experience and company size</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>FMCG Companies, Tech Giants, Advertising Agencies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Human Resources Manager
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  HR managers oversee the recruitment, selection, training, and development of an organization's
                  workforce.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Talent Acquisition</Badge>
                      <Badge variant="outline">Employee Relations</Badge>
                      <Badge variant="outline">Performance Management</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹6-20 LPA depending on experience and company size</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Large Corporations, Consulting Firms, HR Service Providers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Educational Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Undergraduate Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">B.Com (Bachelor of Commerce)</p>
                      <p className="text-sm text-gray-600">
                        Foundation for accounting, finance, and business careers. Available in regular and honors
                        options.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BBA (Bachelor of Business Administration)</p>
                      <p className="text-sm text-gray-600">Focuses on business management principles and practices.</p>
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
                  Postgraduate & Professional Qualifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">MBA (Master of Business Administration)</p>
                      <p className="text-sm text-gray-600">
                        Advanced degree in business management with various specializations like Finance, Marketing, HR,
                        etc.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Professional Certifications</p>
                      <p className="text-sm text-gray-600">
                        CA (Chartered Accountant), CS (Company Secretary), CMA (Cost Management Accountant), CFA
                        (Chartered Financial Analyst), etc.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Specialized Master's Programs</p>
                      <p className="text-sm text-gray-600">M.Com, Master's in Finance, Master's in Economics, etc.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Industry Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Current Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Digital Transformation</p>
                      <p className="text-sm text-gray-600">
                        Increasing use of technology in financial services, including fintech, blockchain, and AI-driven
                        analytics.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">ESG (Environmental, Social, Governance)</p>
                      <p className="text-sm text-gray-600">
                        Growing focus on sustainable and responsible business practices and investments.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Remote Work & Global Teams</p>
                      <p className="text-sm text-gray-600">
                        Shift towards flexible work arrangements and managing distributed teams across different
                        locations.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-green-600" />
                  Skills in Demand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Technical Skills</p>
                      <p className="text-sm text-gray-600">
                        Financial modeling, data analysis, proficiency in tools like Excel, PowerBI, and financial
                        software.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Soft Skills</p>
                      <p className="text-sm text-gray-600">
                        Communication, negotiation, leadership, problem-solving, and adaptability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Emerging Areas</p>
                      <p className="text-sm text-gray-600">
                        Knowledge of digital finance, analytics, regulatory compliance, and risk management.
                      </p>
                    </div>
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

