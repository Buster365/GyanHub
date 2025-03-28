import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Get in touch with our career counselors for personalized guidance
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-green-600" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">info@gyanhub.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-green-600" />
                      Visit Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">CUTM, Bhubaneswar, Odisha, 752050</p>
                    <p className="text-sm text-gray-500">Centurion University of Technology and Management</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Get Personalized Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="education">Current Education Level</Label>
                        <Select>
                          <SelectTrigger id="education">
                            <SelectValue placeholder="Select your education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10th">10th Standard</SelectItem>
                            <SelectItem value="12th">12th Standard</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="postgraduate">Postgraduate</SelectItem>
                            <SelectItem value="working">Working Professional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Select>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select your area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology & IT</SelectItem>
                          <SelectItem value="engineering">Engineering</SelectItem>
                          <SelectItem value="medical">Medical & Healthcare</SelectItem>
                          <SelectItem value="business">Business & Management</SelectItem>
                          <SelectItem value="science">Science & Research</SelectItem>
                          <SelectItem value="arts">Arts & Humanities</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea id="message" placeholder="Tell us about your career goals and questions" rows={5} />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-8 space-y-6 text-left">
            {[
              {
                question: "How can GyanHub help me with my career decisions?",
                answer:
                  "GyanHub provides comprehensive information about various career paths, education requirements, and job opportunities. Our expert counselors can offer personalized guidance based on your interests, skills, and educational background.",
              },
              {
                question: "Is career counseling free?",
                answer:
                  "We offer basic career information for free on our website. For personalized counseling sessions with our experts, we have affordable packages designed to meet different needs and budgets.",
              },
              {
                question: "How do I schedule a counseling session?",
                answer:
                  "You can schedule a counseling session by filling out the contact form on this page, calling our office, or sending us an email. Our team will get back to you within 24 hours to arrange a convenient time.",
              },
              {
                question: "Can GyanHub help with college admissions?",
                answer:
                  "Yes, our counselors can provide guidance on college selection, application processes, entrance exam preparation, and scholarship opportunities based on your career goals and academic profile.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

