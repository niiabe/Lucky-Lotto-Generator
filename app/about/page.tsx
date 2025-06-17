import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Brain, TrendingUp, Users, Shield, Zap } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
              <svg width="40" height="50" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <rect
                  x="60"
                  y="20"
                  width="80"
                  height="60"
                  rx="10"
                  ry="10"
                  fill="#7c3aed"
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
              About Lucky Lotto AI
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our advanced AI technology revolutionizes lottery number generation with cutting-edge
              algorithms and cosmic intelligence.
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="border-2 border-purple-200 shadow-xl mb-8">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                At Lucky Lotto AI, we believe that everyone deserves a chance at fortune. Our mission is to democratize
                luck by providing cutting-edge AI-powered lottery number generation that combines advanced machine
                learning algorithms with cosmic timing and statistical analysis to maximize your winning potential.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How Our AI Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Brain className="mr-2 h-5 w-5" />
                    Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our neural networks analyze millions of historical lottery draws to identify patterns and trends
                    that human analysis might miss.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Statistical Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Advanced statistical models process probability distributions and frequency analysis to optimize
                    number selection strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-indigo-700">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Cosmic Timing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We incorporate celestial alignments and cosmic cycles to enhance the metaphysical aspects of number
                    generation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <Shield className="mr-2 h-5 w-5" />
                    Trusted & Secure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 100% secure number generation</li>
                    <li>• No personal data collection</li>
                    <li>• Transparent algorithms</li>
                    <li>• Privacy-first approach</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-700">
                    <Zap className="mr-2 h-5 w-5" />
                    Lightning Fast
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Instant number generation</li>
                    <li>• Real-time AI processing</li>
                    <li>• 24/7 availability</li>
                    <li>• Mobile-optimized experience</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Team */}
          <Card className="border-2 border-blue-200 shadow-xl mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle className="text-2xl flex items-center">
                <Users className="mr-2 h-6 w-6" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Lucky Lotto AI was founded by a team of data scientists, mathematicians, and lottery enthusiasts who
                combined their expertise to create the most advanced lottery number generation system available today.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <Badge className="bg-purple-100 text-purple-800 mb-2">AI Specialists</Badge>
                  <p className="text-sm text-gray-600">Machine learning experts</p>
                </div>
                <div>
                  <Badge className="bg-blue-100 text-blue-800 mb-2">Mathematicians</Badge>
                  <p className="text-sm text-gray-600">Statistical analysis pros</p>
                </div>
                <div>
                  <Badge className="bg-indigo-100 text-indigo-800 mb-2">Lottery Veterans</Badge>
                  <p className="text-sm text-gray-600">Years of experience</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">Important Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-700 text-sm">
                Lucky Lotto AI is designed for entertainment purposes. While our AI uses advanced algorithms to generate
                numbers, lottery games are games of chance and no system can guarantee winning results. Please play
                responsibly and within your means.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
