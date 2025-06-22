"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Copy, Check } from "lucide-react"
import Navigation from "@/components/navigation"

export default function Generator10Page() {
  const [numbers, setNumbers] = useState<number[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateNumbers = async () => {
    setIsGenerating(true)

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const newNumbers = new Set<number>()
    while (newNumbers.size < 10) {
      newNumbers.add(Math.floor(Math.random() * 90) + 1)
    }

    setNumbers(Array.from(newNumbers).sort((a, b) => a - b))
    setIsGenerating(false)
  }

  const copyNumbers = () => {
    const numbersText = numbers.join(", ")
    navigator.clipboard.writeText(numbersText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <svg width="40" height="50" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <rect
                  x="60"
                  y="20"
                  width="80"
                  height="60"
                  rx="10"
                  ry="10"
                  fill="#2563eb"
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
              10-Number Generator
            </h1>
            <p className="text-xl text-gray-600">Generate 10 powerful numbers with enhanced AI precision</p>
            <Badge className="mt-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white">Premium Generator</Badge>
          </div>

          {/* Generator Card */}
          <Card className="border-2 border-blue-200 shadow-xl mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl">Advanced AI Number Generator</CardTitle>
              <CardDescription className="text-blue-100">
                Our most sophisticated AI model generates 10 numbers with maximum winning potential
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              {/* Generate Button */}
              <div className="text-center mb-8">
                <Button
                  onClick={generateNumbers}
                  disabled={isGenerating}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      AI Processing...
                    </>
                  ) : (
                    <>
                      <svg
                        width="20"
                        height="25"
                        viewBox="0 0 200 250"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        <rect
                          x="60"
                          y="20"
                          width="80"
                          height="60"
                          rx="10"
                          ry="10"
                          fill="#fff"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                        <circle cx="80" cy="45" r="6" fill="#2563eb" />
                        <circle cx="120" cy="45" r="6" fill="#2563eb" />
                        <line x1="100" y1="10" x2="100" y2="20" stroke="#fff" strokeWidth="3" />
                        <circle cx="100" cy="10" r="5" fill="#f00" />
                        <rect
                          x="50"
                          y="80"
                          width="100"
                          height="100"
                          rx="15"
                          ry="15"
                          fill="#fff"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                        <text
                          x="100"
                          y="140"
                          fontSize="30"
                          fontFamily="Arial"
                          fontWeight="bold"
                          fill="#2563eb"
                          textAnchor="middle"
                        >
                          AI
                        </text>
                        <rect x="30" y="90" width="15" height="60" rx="5" fill="#e5e7eb" />
                        <rect x="155" y="90" width="15" height="60" rx="5" fill="#e5e7eb" />
                        <rect x="65" y="180" width="20" height="40" rx="5" fill="#6b7280" />
                        <rect x="115" y="180" width="20" height="40" rx="5" fill="#6b7280" />
                      </svg>
                      Generate 10 Numbers
                    </>
                  )}
                </Button>
              </div>

              {/* Numbers Display */}
              {numbers.length > 0 && (
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Premium Lucky Numbers:</h3>
                  <div className="grid grid-cols-5 gap-3 max-w-md mx-auto mb-6">
                    {numbers.map((number, index) => {
                      // Assign colors based on position for visual variety
                      const colorClasses = [
                        "from-cyan-500 to-blue-600",
                        "from-indigo-500 to-purple-600",
                        "from-violet-500 to-pink-600",
                        "from-rose-500 to-red-600",
                        "from-orange-500 to-amber-600",
                        "from-yellow-500 to-lime-600",
                        "from-emerald-500 to-teal-600",
                        "from-sky-500 to-cyan-600",
                        "from-blue-500 to-indigo-600",
                        "from-purple-500 to-violet-600",
                      ]
                      const colorClass = colorClasses[index % colorClasses.length]

                      return (
                        <div
                          key={index}
                          className={`w-14 h-14 bg-gradient-to-br ${colorClass} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounce`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {number}
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={copyNumbers}
                      variant="outline"
                      className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Numbers
                        </>
                      )}
                    </Button>

                    <Button
                      onClick={generateNumbers}
                      variant="outline"
                      className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Generate New
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">Advanced AI</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Deep learning algorithms</li>
                  <li>• Pattern recognition</li>
                  <li>• Statistical analysis</li>
                  <li>• Probability optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200">
              <CardHeader>
                <CardTitle className="text-indigo-700">Premium Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 10 unique numbers</li>
                  <li>• Enhanced accuracy</li>
                  <li>• Cosmic timing</li>
                  <li>• Maximum coverage</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-700">Success Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Use multiple combinations</li>
                  <li>• Track your numbers</li>
                  <li>• Stay consistent</li>
                  <li>• Believe in luck!</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
