import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, GraduationCap, LineChart, ListChecks } from "lucide-react"
import Link from "next/link"
import { fetchJobData } from "@/lib/data"
import type { JobData } from "@/types/job"

interface JobRolePageProps {
  params: {
    jobRole: string
  }
}

export default async function JobRolePage({ params }: JobRolePageProps) {
  const jobRole = decodeURIComponent(params.jobRole)
  const allJobs = await fetchJobData()

  // Find the job in our dataset
  let job = allJobs.find((j) => j["Job Role"].toLowerCase() === jobRole.toLowerCase())

  // If job not found, create a fallback job data object
  if (!job) {
    job = createFallbackJobData(jobRole)
  }

  // Career path steps based on job role
  const careerPathSteps = getCareerPathSteps(job["Job Role"])

  // Education requirements based on job role
  const educationRequirements = getEducationRequirements(job["Job Role"])

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/jobs" className="text-green-600 hover:underline">
              ← Back to Jobs
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{job["Job Role"]}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="text-base py-1 px-3 bg-green-100 text-green-800 hover:bg-green-200">
                  {job["Average Salary (₹ LPA)"]}
                </Badge>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                A {job["Job Role"]} is responsible for designing, developing, and implementing solutions using
                specialized skills and knowledge in their domain.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {job["Required Skills"].split(",").map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-sm py-1">
                    {skill.trim()}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex-1 md:flex-none md:w-1/3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Building className="h-5 w-5 text-green-600" />
                    Top Hiring Companies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job["Top Hiring Companies"].split(",").map((company, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Badge variant="secondary" className="h-2 w-2 p-0 rounded-full" />
                        {company.trim()}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-green-600" />
            Education Requirements
          </h2>

          <div className="space-y-6">
            {educationRequirements.map((req, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{req.level}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {req.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <LineChart className="h-6 w-6 text-green-600" />
            Career Path
          </h2>

          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gray-200 hidden md:block"></div>

            <div className="space-y-8">
              {careerPathSteps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-600 text-white font-bold flex-shrink-0 relative z-10">
                    {index + 1}
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{step.description}</p>
                      {step.skills && (
                        <div>
                          <p className="font-medium mb-2 flex items-center gap-2">
                            <ListChecks className="h-4 w-4 text-green-600" />
                            Key Skills to Develop:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.skills.map((skill, i) => (
                              <Badge key={i} variant="outline">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Career as a {job["Job Role"]}?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Get personalized guidance on how to prepare for this career path and connect with industry professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">Contact a Counselor</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/education">Explore Education Paths</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Function to create fallback job data when a job isn't found in our dataset
function createFallbackJobData(jobRole: string): JobData {
  // Special case for Blockchain Developer
  if (jobRole.toLowerCase() === "blockchain developer") {
    return {
      "Job Role": "Blockchain Developer",
      "Required Skills":
        "Blockchain, Smart Contracts, Solidity, Web3.js, Ethereum, Cryptography, JavaScript, Distributed Systems",
      "Average Salary (₹ LPA)": "₹8-40",
      "Top Hiring Companies": "ConsenSys, Polygon, Infosys, TCS, IBM, Accenture, WazirX, CoinDCX",
    }
  }

  // Generic fallback for other job roles
  return {
    "Job Role": jobRole,
    "Required Skills": "Technical Skills, Communication, Problem Solving, Teamwork, Domain Knowledge",
    "Average Salary (₹ LPA)": "₹5-25",
    "Top Hiring Companies": "Top Tech Companies, Startups, Consulting Firms, Industry Leaders",
  }
}

function getCareerPathSteps(jobRole: string) {
  // Special case for Blockchain Developer
  if (jobRole.toLowerCase() === "blockchain developer") {
    return [
      {
        title: "Education & Foundation",
        description:
          "Obtain a degree in Computer Science, Engineering, or a related field. Build programming fundamentals and learn about blockchain technology.",
        skills: ["Programming Basics", "Data Structures", "Algorithms", "Cryptography"],
      },
      {
        title: "Junior Blockchain Developer",
        description:
          "Start as a junior developer working on blockchain applications and smart contracts under supervision.",
        skills: ["Solidity", "Web3.js", "Ethereum", "JavaScript/TypeScript"],
      },
      {
        title: "Mid-Level Blockchain Developer",
        description:
          "Take ownership of blockchain features and modules with less supervision. Develop more complex smart contracts and dApps.",
        skills: ["Smart Contract Security", "DeFi Protocols", "Layer 2 Solutions", "Cross-chain Development"],
      },
      {
        title: "Senior Blockchain Developer",
        description:
          "Lead blockchain development efforts, mentor juniors, and make architectural decisions for blockchain applications.",
        skills: ["Blockchain Architecture", "Technical Leadership", "Code Reviews", "Consensus Mechanisms"],
      },
      {
        title: "Blockchain Architect or Lead",
        description:
          "Define technical direction for blockchain projects, make high-level design decisions, and guide teams.",
        skills: ["System Architecture", "Technical Strategy", "Cross-team Collaboration", "Blockchain Governance"],
      },
    ]
  }

  // Default career path steps
  const defaultSteps = [
    {
      title: "Education & Foundation",
      description: "Obtain relevant educational qualifications and build foundational knowledge in the field.",
      skills: ["Core Concepts", "Basic Tools", "Theoretical Knowledge"],
    },
    {
      title: "Entry-Level Position",
      description: "Start with an entry-level role to gain practical experience and industry exposure.",
      skills: ["Practical Application", "Team Collaboration", "Problem Solving"],
    },
    {
      title: "Skill Development & Specialization",
      description: "Develop specialized skills and expertise in specific areas of the field.",
      skills: ["Advanced Techniques", "Specialized Tools", "Domain Knowledge"],
    },
    {
      title: "Mid-Level Position",
      description: "Progress to a mid-level role with increased responsibilities and project ownership.",
      skills: ["Project Management", "Technical Leadership", "Advanced Problem Solving"],
    },
    {
      title: "Senior Position",
      description: "Advance to a senior role with leadership responsibilities and strategic decision-making.",
      skills: ["Strategic Thinking", "Mentoring", "Innovation"],
    },
  ]

  // Customize based on job role if needed
  if (jobRole.toLowerCase().includes("developer") || jobRole.toLowerCase().includes("engineer")) {
    return [
      {
        title: "Education & Foundation",
        description:
          "Obtain a degree in Computer Science, Engineering, or a related field. Build programming fundamentals.",
        skills: ["Programming Basics", "Data Structures", "Algorithms"],
      },
      {
        title: "Junior Developer/Engineer",
        description: "Start as a junior developer working on smaller components under supervision.",
        skills: ["Coding Standards", "Version Control", "Testing"],
      },
      {
        title: "Mid-Level Developer/Engineer",
        description: "Take ownership of features and modules with less supervision.",
        skills: ["System Design", "Performance Optimization", "Technical Documentation"],
      },
      {
        title: "Senior Developer/Engineer",
        description: "Lead development efforts, mentor juniors, and make architectural decisions.",
        skills: ["Architecture Design", "Technical Leadership", "Code Reviews"],
      },
      {
        title: "Lead/Principal Engineer or Architect",
        description: "Define technical direction, make high-level design decisions, and guide teams.",
        skills: ["System Architecture", "Technical Strategy", "Cross-team Collaboration"],
      },
    ]
  }

  return defaultSteps
}

function getEducationRequirements(jobRole: string) {
  // Special case for Blockchain Developer
  if (jobRole.toLowerCase() === "blockchain developer") {
    return [
      {
        level: "Bachelor's Degree",
        requirements: [
          {
            name: "Computer Science or Engineering",
            description: "A bachelor's degree in Computer Science, Software Engineering, or related technical field.",
          },
          {
            name: "Alternative Paths",
            description:
              "Coding bootcamps with blockchain specialization or self-learning combined with a strong portfolio of blockchain projects.",
          },
        ],
      },
      {
        level: "Technical Skills",
        requirements: [
          {
            name: "Programming Languages",
            description:
              "Proficiency in Solidity, JavaScript/TypeScript, and at least one general-purpose language like Python or Java.",
          },
          {
            name: "Blockchain Fundamentals",
            description:
              "Understanding of blockchain architecture, consensus mechanisms, cryptography, and distributed systems.",
          },
          {
            name: "Web3 Development",
            description:
              "Experience with Web3.js, Ethers.js, Truffle, Hardhat, and other blockchain development tools.",
          },
        ],
      },
      {
        level: "Advanced Education (Optional)",
        requirements: [
          {
            name: "Master's Degree",
            description:
              "A master's degree in Computer Science, Blockchain Technology, or Cryptography can be beneficial for advanced positions.",
          },
          {
            name: "Blockchain Certifications",
            description:
              "Specialized certifications like Certified Blockchain Developer, Ethereum Developer Certification, or Hyperledger Certification.",
          },
        ],
      },
    ]
  }

  // Default education requirements
  const defaultRequirements = [
    {
      level: "Bachelor's Degree",
      requirements: [
        {
          name: "Relevant Field of Study",
          description:
            "A bachelor's degree in a relevant field provides the foundational knowledge required for this role.",
        },
      ],
    },
    {
      level: "Additional Qualifications",
      requirements: [
        {
          name: "Professional Certifications",
          description: "Industry-recognized certifications can enhance your credentials and demonstrate expertise.",
        },
        {
          name: "Continuing Education",
          description: "Ongoing learning through courses, workshops, and self-study is essential to stay current.",
        },
      ],
    },
  ]

  // Customize based on job role
  if (jobRole.toLowerCase().includes("developer") || jobRole.toLowerCase().includes("engineer")) {
    return [
      {
        level: "Bachelor's Degree",
        requirements: [
          {
            name: "Computer Science or Engineering",
            description: "A bachelor's degree in Computer Science, Software Engineering, or related technical field.",
          },
          {
            name: "Alternative Paths",
            description:
              "Coding bootcamps or self-learning combined with a strong portfolio can sometimes substitute formal education.",
          },
        ],
      },
      {
        level: "Technical Skills",
        requirements: [
          {
            name: "Programming Languages",
            description: "Proficiency in relevant programming languages (e.g., Python, JavaScript, Java, C++, etc.).",
          },
          {
            name: "Development Tools & Frameworks",
            description: "Experience with industry-standard tools, frameworks, and development methodologies.",
          },
        ],
      },
      {
        level: "Advanced Education (Optional)",
        requirements: [
          {
            name: "Master's Degree",
            description:
              "A master's degree in Computer Science or specialized field can be beneficial for advanced positions.",
          },
          {
            name: "Technical Certifications",
            description: "Specialized certifications in relevant technologies or methodologies.",
          },
        ],
      },
    ]
  }

  return defaultRequirements
}

