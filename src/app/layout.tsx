import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "UI Design + Dev Challenges",
  description: "Practicing my UI design and development skills",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
