import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, Palette, GraduationCap, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function CreativeArtsJobsPage() {
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
            <h1 className="text-3xl font-bold text-gray-900">Creative Arts Careers</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore careers in design, media, entertainment, and creative professions
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview of Creative Arts Careers</h2>
              <p className="text-gray-700 mb-4">
                Creative arts careers encompass a diverse range of professions that involve artistic expression, design
                thinking, and creative problem-solving. These careers allow individuals to use their imagination and
                technical skills to create content, experiences, and products that engage, entertain, and inspire
                audiences.
              </p>
              <p className="text-gray-700">
                The creative industry continues to evolve with technological advancements, offering new opportunities in
                digital media, interactive design, and content creation. While these careers can be competitive, they
                offer the reward of turning passion into profession and making a cultural impact.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Creative Arts Careers"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Creative Arts Careers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-green-600" />
                  UX/UI Designer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  UX/UI designers create user-friendly and visually appealing digital interfaces for websites, apps, and
                  software products.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">User Research</Badge>
                      <Badge variant="outline">Wireframing</Badge>
                      <Badge variant="outline">Prototyping</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹5-25 LPA depending on experience and company</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Tech Companies, Design Agencies, E-commerce Platforms</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-green-600" />
                  Graphic Designer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Graphic designers create visual concepts to communicate ideas that inspire, inform, or captivate
                  consumers through various media.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Brand Identity</Badge>
                      <Badge variant="outline">Layout Design</Badge>
                      <Badge variant="outline">Visual Communication</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹3-15 LPA depending on experience and location</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Advertising Agencies, Publishing Houses, Corporate Marketing Departments</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-green-600" />
                  Content Creator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Content creators develop and produce engaging content for various platforms including social media,
                  blogs, videos, and podcasts.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Content Strategy</Badge>
                      <Badge variant="outline">Media Production</Badge>
                      <Badge variant="outline">Audience Engagement</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹3-20 LPA depending on platform, audience size, and monetization</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Digital Media Companies, Brands, Self-employed/Freelance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-green-600" />
                  Film Director
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Film directors oversee the creative aspects of film production, guiding the technical crew and actors
                  to fulfill their vision of the script.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Visual Storytelling</Badge>
                      <Badge variant="outline">Actor Direction</Badge>
                      <Badge variant="outline">Production Management</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>Highly variable, from ₹5-50+ LPA depending on projects and recognition</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Production Houses, OTT Platforms, Advertising Agencies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-green-600" />
                  Animator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Animators create moving images through various techniques including 2D, 3D, stop motion, and
                  computer-generated imagery.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Character Design</Badge>
                      <Badge variant="outline">Motion Creation</Badge>
                      <Badge variant="outline">Visual Effects</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹3-20 LPA depending on skills and experience</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Animation Studios, Gaming Companies, Advertising Agencies</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-green-600" />
                  Fashion Designer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Fashion designers create clothing, accessories, and footwear, combining artistic vision with practical
                  considerations of production and market trends.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Design Conceptualization</Badge>
                      <Badge variant="outline">Pattern Making</Badge>
                      <Badge variant="outline">Trend Analysis</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹3-25 LPA depending on brand and experience</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Fashion Houses, Retail Brands, Textile Companies</p>
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
                  Formal Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Bachelor's Degrees</p>
                      <p className="text-sm text-gray-600">
                        BFA (Bachelor of Fine Arts), B.Des (Bachelor of Design), BA in Film Studies, BA in Animation,
                        etc.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Master's Programs</p>
                      <p className="text-sm text-gray-600">
                        MFA (Master of Fine Arts), M.Des (Master of Design), MA in various creative disciplines.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Diploma Courses</p>
                      <p className="text-sm text-gray-600">
                        Specialized diplomas in graphic design, animation, fashion design, photography, etc.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-green-600" />
                  Alternative Pathways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Self-Learning & Online Courses</p>
                      <p className="text-sm text-gray-600">
                        Many creative professionals are self-taught or learn through online platforms like Coursera,
                        Udemy, or YouTube.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Apprenticeships & Mentorships</p>
                      <p className="text-sm text-gray-600">
                        Learning directly from established professionals through internships or assistant positions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Portfolio Development</p>
                      <p className="text-sm text-gray-600">
                        Building a strong portfolio of work is often more important than formal education in creative
                        fields.
                      </p>
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
                  <Briefcase className="h-5 w-5 text-green-600" />
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
                        Increasing demand for digital content creation, virtual experiences, and interactive media.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Remote Collaboration</p>
                      <p className="text-sm text-gray-600">
                        Growth in remote work opportunities and global creative collaborations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">AI and Creative Tools</p>
                      <p className="text-sm text-gray-600">
                        Integration of AI-powered tools in creative workflows, changing how content is created.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
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
                        Proficiency in industry-standard software like Adobe Creative Suite, 3D modeling tools, video
                        editing software, etc.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Soft Skills</p>
                      <p className="text-sm text-gray-600">
                        Creativity, communication, collaboration, time management, and adaptability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Business Acumen</p>
                      <p className="text-sm text-gray-600">
                        Understanding of marketing, client management, and entrepreneurship for freelancers and
                        independent creators.
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

