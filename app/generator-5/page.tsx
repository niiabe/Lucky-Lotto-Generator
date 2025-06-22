"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Copy, Check } from "lucide-react"
import Navigation from "@/components/navigation"

export default function Generator5Page() {
  const [numbers, setNumbers] = useState<number[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateNumbers = async () => {
    setIsGenerating(true)

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const newNumbers = new Set<number>()
    while (newNumbers.size < 5) {
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
        <div className="max-w-2xl mx-auto">
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
              5-Number Generator
            </h1>
            <p className="text-xl text-gray-600">Generate 5 lucky numbers powered by advanced AI algorithms</p>
          </div>

          {/* Generator Card */}
          <Card className="border-2 border-purple-200 shadow-xl mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardTitle className="text-2xl">AI Lucky Number Generator</CardTitle>
              <CardDescription className="text-purple-100">
                Our AI analyzes patterns and cosmic alignments to generate your perfect 5-number combination
              </CardDescription>
            </CardHeader>

            <CardContent className="p-8">
              {/* Generate Button */}
              <div className="text-center mb-8">
                <Button
                  onClick={generateNumbers}
                  disabled={isGenerating}
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-lg"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
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
                        <circle cx="80" cy="45" r="6" fill="#7c3aed" />
                        <circle cx="120" cy="45" r="6" fill="#7c3aed" />
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
                          fill="#7c3aed"
                          textAnchor="middle"
                        >
                          AI
                        </text>
                        <rect x="30" y="90" width="15" height="60" rx="5" fill="#e5e7eb" />
                        <rect x="155" y="90" width="15" height="60" rx="5" fill="#e5e7eb" />
                        <rect x="65" y="180" width="20" height="40" rx="5" fill="#6b7280" />
                        <rect x="115" y="180" width="20" height="40" rx="5" fill="#6b7280" />
                      </svg>
                      Generate Numbers
                    </>
                  )}
                </Button>
              </div>

              {/* Numbers Display */}
              {numbers.length > 0 && (
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Lucky Numbers:</h3>
                  <div className="flex justify-center gap-4 mb-6">
                    {numbers.map((number, index) => {
                      // Assign colors based on number ranges for visual variety
                      const colorClasses = [
                        "from-emerald-500 to-teal-600",
                        "from-blue-500 to-indigo-600",
                        "from-purple-500 to-violet-600",
                        "from-pink-500 to-rose-600",
                        "from-orange-500 to-red-600",
                      ]
                      const colorClass = colorClasses[index % colorClasses.length]

                      return (
                        <div
                          key={index}
                          className={`w-16 h-16 bg-gradient-to-br ${colorClass} text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounce`}
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
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
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
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
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
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-purple-700">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI analyzes historical patterns</li>
                  <li>• Considers cosmic alignments</li>
                  <li>• Generates optimized combinations</li>
                  <li>• Numbers range from 1-90</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">Tips for Success</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Generate multiple sets</li>
                  <li>• Trust your intuition</li>
                  <li>• Play responsibly</li>
                  <li>• Good luck!</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
