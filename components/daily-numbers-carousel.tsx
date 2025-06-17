"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, Sparkles } from "lucide-react"

interface DailyNumbers {
  date: string
  numbers: number[]
  category: string
  description: string
  colors: {
    bg: string
    header: string
  }
}

export default function DailyNumbersCarousel() {
  const [dailyNumbers, setDailyNumbers] = useState<DailyNumbers[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Generate daily numbers that reset every 24 hours
  useEffect(() => {
    const generateDailyNumbers = () => {
      const today = new Date().toDateString()
      const stored = localStorage.getItem("dailyNumbers")
      const storedDate = localStorage.getItem("dailyNumbersDate")

      if (stored && storedDate === today) {
        setDailyNumbers(JSON.parse(stored))
        return
      }

      // Generate new daily numbers with themed colors
      const categories = [
        {
          name: "Lucky Stars",
          desc: "Cosmic alignment numbers",
          colors: {
            bg: "from-yellow-400 to-orange-500",
            header: "from-yellow-500 to-orange-600",
          },
        },
        {
          name: "Fortune Wheel",
          desc: "Destiny-driven selections",
          colors: {
            bg: "from-emerald-400 to-teal-500",
            header: "from-emerald-500 to-teal-600",
          },
        },
        {
          name: "Golden Path",
          desc: "Prosperity indicators",
          colors: {
            bg: "from-amber-400 to-yellow-500",
            header: "from-amber-500 to-yellow-600",
          },
        },
        {
          name: "Dream Numbers",
          desc: "Subconscious picks",
          colors: {
            bg: "from-violet-400 to-purple-500",
            header: "from-violet-500 to-purple-600",
          },
        },
        {
          name: "Power Combo",
          desc: "High-energy numbers",
          colors: {
            bg: "from-red-400 to-pink-500",
            header: "from-red-500 to-pink-600",
          },
        },
      ]

      const newDailyNumbers = categories.map((category) => ({
        date: today,
        numbers: generateRandomNumbers(7, 1, 99),
        category: category.name,
        description: category.desc,
        colors: category.colors,
      }))

      setDailyNumbers(newDailyNumbers)
      localStorage.setItem("dailyNumbers", JSON.stringify(newDailyNumbers))
      localStorage.setItem("dailyNumbersDate", today)
    }

    generateDailyNumbers()
  }, [])

  const generateRandomNumbers = (count: number, min: number, max: number): number[] => {
    const numbers = new Set<number>()
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return Array.from(numbers).sort((a, b) => a - b)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dailyNumbers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + dailyNumbers.length) % dailyNumbers.length)
  }

  if (dailyNumbers.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="animate-pulse">Loading daily numbers...</div>
        </CardContent>
      </Card>
    )
  }

  const currentNumbers = dailyNumbers[currentIndex]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center">
          <Calendar className="mr-2 h-6 w-6 text-purple-600" />
          Today's Lucky Numbers
        </h2>
        <p className="text-gray-600">Fresh predictions updated every 24 hours</p>
      </div>

      <Card className="relative overflow-hidden border-2 border-purple-200 shadow-xl">
        <CardHeader
          className={`bg-gradient-to-r ${currentNumbers.colors?.header || "from-purple-600 to-blue-600"} text-white`}
        >
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles className="mr-2 h-5 w-5" />
              {currentNumbers.category}
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white">
              {currentIndex + 1} of {dailyNumbers.length}
            </Badge>
          </CardTitle>
          <p className="text-purple-100">{currentNumbers.description}</p>
        </CardHeader>

        <CardContent className="p-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {currentNumbers.numbers.map((number, index) => (
              <div
                key={index}
                className={`w-12 h-12 bg-gradient-to-br ${currentNumbers.colors?.bg || "from-purple-500 to-blue-500"} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform hover:scale-110 transition-transform`}
              >
                {number}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-500">Generated on {currentNumbers.date}</div>
        </CardContent>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <Button variant="ghost" size="icon" onClick={prevSlide} className="bg-white/80 hover:bg-white shadow-lg">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <Button variant="ghost" size="icon" onClick={nextSlide} className="bg-white/80 hover:bg-white shadow-lg">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {dailyNumbers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
