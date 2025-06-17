"use client"

import { useActionState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <MessageCircle className="mr-2 h-8 w-8 text-purple-600" />
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our AI lottery number generator? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-2 border-purple-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-purple-100">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form action={action} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <Input id="subject" name="subject" placeholder="How can we help you?" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your question or feedback..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Message */}
                  {state && (
                    <div
                      className={`p-4 rounded-lg text-center ${
                        state.success
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                    >
                      {state.message}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-700">Get in Touch</CardTitle>
                  <CardDescription>Multiple ways to reach our support team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">niiabeabbey@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-LUCK</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        123 Fortune Street
                        <br />
                        Lucky City, LC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">
                        Mon-Fri: 9AM-6PM EST
                        <br />
                        Sat-Sun: 10AM-4PM EST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-indigo-700">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-800">How does the AI generate numbers?</p>
                    <p className="text-sm text-gray-600">
                      Our AI uses machine learning algorithms to analyze patterns and generate optimized number
                      combinations.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">Are the numbers truly random?</p>
                    <p className="text-sm text-gray-600">
                      Yes, while our AI optimizes selection, each generation includes randomization to ensure fairness.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">Is there a cost to use the service?</p>
                    <p className="text-sm text-gray-600">
                      Our basic number generators are completely free to use. Premium features may be added in the
                      future.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-700">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 text-sm mb-3">
                    For urgent technical issues or questions about your generated numbers, our support team is available
                    24/7.
                  </p>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-100">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Live Chat Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
