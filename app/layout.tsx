import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucky Lotto AI - AI-Powered Lottery Number Generator",
  description:
    "Generate lucky lottery numbers with advanced AI algorithms. Get daily predictions and custom number combinations for better winning chances.",
  keywords: "lottery, AI, lucky numbers, number generator, lotto, predictions",
  authors: [{ name: "Lucky Lotto AI Team" }],
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml;base64," +
          btoa(`
          <svg width="32" height="40" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="20" width="80" height="60" rx="10" ry="10" fill="#4A90E2" stroke="#333" strokeWidth="2"/>
            <circle cx="80" cy="45" r="6" fill="#fff"/>
            <circle cx="120" cy="45" r="6" fill="#fff"/>
            <line x1="100" y1="10" x2="100" y2="20" stroke="#333" strokeWidth="3"/>
            <circle cx="100" cy="10" r="5" fill="#f00"/>
            <rect x="50" y="80" width="100" height="100" rx="15" ry="15" fill="#7ED6DF" stroke="#333" strokeWidth="2"/>
            <text x="100" y="140" fontSize="30" fontFamily="Arial" fontWeight="bold" fill="#333" textAnchor="middle">AI</text>
            <rect x="30" y="90" width="15" height="60" rx="5" fill="#95A5A6"/>
            <rect x="155" y="90" width="15" height="60" rx="5" fill="#95A5A6"/>
            <rect x="65" y="180" width="20" height="40" rx="5" fill="#34495E"/>
            <rect x="115" y="180" width="20" height="40" rx="5" fill="#34495E"/>
          </svg>
        `),
        sizes: "32x40",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url:
          "data:image/svg+xml;base64," +
          btoa(`
          <svg width="180" height="180" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
            <rect x="60" y="20" width="80" height="60" rx="10" ry="10" fill="#4A90E2" stroke="#333" strokeWidth="2"/>
            <circle cx="80" cy="45" r="6" fill="#fff"/>
            <circle cx="120" cy="45" r="6" fill="#fff"/>
            <line x1="100" y1="10" x2="100" y2="20" stroke="#333" strokeWidth="3"/>
            <circle cx="100" cy="10" r="5" fill="#f00"/>
            <rect x="50" y="80" width="100" height="100" rx="15" ry="15" fill="#7ED6DF" stroke="#333" strokeWidth="2"/>
            <text x="100" y="140" fontSize="30" fontFamily="Arial" fontWeight="bold" fill="#333" textAnchor="middle">AI</text>
            <rect x="30" y="90" width="15" height="60" rx="5" fill="#95A5A6"/>
            <rect x="155" y="90" width="15" height="60" rx="5" fill="#95A5A6"/>
            <rect x="65" y="180" width="20" height="40" rx="5" fill="#34495E"/>
            <rect x="115" y="180" width="20" height="40" rx="5" fill="#34495E"/>
          </svg>
        `),
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
