"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/generator-5", label: "5 Numbers" },
  { href: "/generator-10", label: "10 Numbers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg
              width="32"
              height="40"
              viewBox="0 0 200 250"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              {/* Robot Head */}
              <rect x="60" y="20" width="80" height="60" rx="10" ry="10" fill="#4A90E2" stroke="#333" strokeWidth="2" />

              {/* Eyes */}
              <circle cx="80" cy="45" r="6" fill="#fff" />
              <circle cx="120" cy="45" r="6" fill="#fff" />

              {/* Antenna */}
              <line x1="100" y1="10" x2="100" y2="20" stroke="#333" strokeWidth="3" />
              <circle cx="100" cy="10" r="5" fill="#f00" />

              {/* Body */}
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

              {/* "AI" Text */}
              <text x="100" y="140" fontSize="30" fontFamily="Arial" fontWeight="bold" fill="#333" textAnchor="middle">
                AI
              </text>

              {/* Arms */}
              <rect x="30" y="90" width="15" height="60" rx="5" fill="#95A5A6" />
              <rect x="155" y="90" width="15" height="60" rx="5" fill="#95A5A6" />

              {/* Legs */}
              <rect x="65" y="180" width="20" height="40" rx="5" fill="#34495E" />
              <rect x="115" y="180" width="20" height="40" rx="5" fill="#34495E" />
            </svg>
            <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Lucky Lotto AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-gray-600 hover:text-purple-600 transition-colors font-medium",
                  pathname === item.href && "text-purple-600 font-semibold",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium text-gray-600 hover:text-purple-600 transition-colors p-2 rounded-lg hover:bg-purple-50",
                      pathname === item.href && "text-purple-600 bg-purple-50",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
