"use client"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import DailyNumbersCarousel from "@/components/daily-numbers-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <svg width="48" height="60" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" className="mr-4">
              <rect x="60" y="20" width="80" height="60" rx="10" ry="10" fill="#4A90E2" stroke="#333" strokeWidth="2" />
              <circle cx="80" cy="45" r="6" fill="#fff" />
              <circle cx="120" cy="45" r="6" fill="#fff" />
              <line x1="100" y1="10" x2="100" y2="20" stroke="#333" strokeWidth="3" />
              <circle cx="100" cy="10" r="5" fill="#f00" />
              <rect
                x="50"
                y="80"
                width="100"
                height="100"
                rx="15"
                ry="15"
                fill="#7ED6DF"
                stroke="#333"
                strokeWidth="2"
              />
              <text x="100" y="140" fontSize="30" fontFamily="Arial" fontWeight="bold" fill="#333" textAnchor="middle">
                AI
              </text>
              <rect x="30" y="90" width="15" height="60" rx="5" fill="#95A5A6" />
              <rect x="155" y="90" width="15" height="60" rx="5" fill="#95A5A6" />
              <rect x="65" y="180" width="20" height="40" rx="5" fill="#34495E" />
              <rect x="115" y="180" width="20" height="40" rx="5" fill="#34495E" />
            </svg>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Lucky Lotto AI
            </h1>
            <svg width="48" height="60" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" className="ml-4">
              <rect x="60" y="20" width="80" height="60" rx="10" ry="10" fill="#4A90E2" stroke="#333" strokeWidth="2" />
              <circle cx="80" cy="45" r="6" fill="#fff" />
              <circle cx="120" cy="45" r="6" fill="#fff" />
              <line x1="100" y1="10" x2="100" y2="20" stroke="#333" strokeWidth="3" />
              <circle cx="100" cy="10" r="5" fill="#f00" />
              <rect
                x="50"
                y="80"
                width="100"
                height="100"
                rx="15"
                ry="15"
                fill="#7ED6DF"
                stroke="#333"
                strokeWidth="2"
              />
              <text x="100" y="140" fontSize="30" fontFamily="Arial" fontWeight="bold" fill="#333" textAnchor="middle">
                AI
              </text>
              <rect x="30" y="90" width="15" height="60" rx="5" fill="#95A5A6" />
              <rect x="155" y="90" width="15" height="60" rx="5" fill="#95A5A6" />
              <rect x="65" y="180" width="20" height="40" rx="5" fill="#34495E" />
              <rect x="115" y="180" width="20" height="40" rx="5" fill="#34495E" />
            </svg>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Harness the power of AI to generate your lucky lottery numbers. Get fresh daily predictions and create
            custom number combinations!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator-5">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                <Zap className="mr-2 h-5 w-5" />
                Generate 5 Numbers
              </Button>
            </Link>
            <Link href="/generator-10">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Generate 10 Numbers
              </Button>
            </Link>
          </div>
        </div>

        {/* Daily Lucky Numbers Carousel */}
        <div className="mb-12">
          <DailyNumbersCarousel />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700">
                <svg width="20" height="25" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <rect
                    x="60"
                    y="20"
                    width="80"
                    height="60"
                    rx="10"
                    ry="10"
                    fill="#4A90E2"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <circle cx="80" cy="45" r="6" fill="#fff" />
                  <circle cx="120" cy="45" r="6" fill="#fff" />
                  <line x1="100" y1="10" x2="100" y2="20" stroke="#333" strokeWidth="3" />
                  <circle cx="100" cy="10" r="5" fill="#f00" />
                  <rect
                    x="50"
                    y="80"
                    width="100"
                    height="100"
                    rx="15"
                    ry="15"
                    fill="#7ED6DF"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  <text
                    x="100"
                    y="140"
                    fontSize="30"
                    fontFamily="Arial"
                    fontWeight="bold"
                    fill="#333"
                    textAnchor="middle"
                  >
                    AI
                  </text>
                  <rect x="30" y="90" width="15" height="60" rx="5" fill="#95A5A6" />
                  <rect x="155" y="90" width="15" height="60" rx="5" fill="#95A5A6" />
                  <rect x="65" y="180" width="20" height="40" rx="5" fill="#34495E" />
                  <rect x="115" y="180" width="20" height="40" rx="5" fill="#34495E" />
                </svg>
                AI-Powered
              </CardTitle>
              <CardDescription>
                Advanced algorithms analyze patterns to generate optimized number combinations
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <TrendingUp className="mr-2 h-5 w-5" />
                Daily Updates
              </CardTitle>
              <CardDescription>Fresh lucky numbers generated every 24 hours based on cosmic alignments</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-indigo-700">
                <Users className="mr-2 h-5 w-5" />
                Trusted by Thousands
              </CardTitle>
              <CardDescription>Join our community of lucky winners who trust our AI predictions</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Lucky Lotto AI?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Daily Generations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Lucky?</h2>
          <p className="text-xl mb-6 opacity-90">Start generating your winning numbers today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator-5">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Try 5-Number Generator
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
