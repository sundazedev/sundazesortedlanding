import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Sundaze Sorted – The App That Solves School Inbox Overload",
  description:
    "Stop digging through school emails. Sundaze Sorted turns inbox chaos into one simple daily plan. Join the waitlist for early access.",
  keywords: "school emails, parent app, school communication, email organization, busy parents",
  authors: [{ name: "Sundaze Sorted" }],
  openGraph: {
    title: "Sundaze Sorted – Never Miss Another School Email",
    description: "We read school emails so you don't have to. Get a daily summary of everything important.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  )
}
