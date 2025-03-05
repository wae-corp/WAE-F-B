import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WAE FnB',
  description: 'WAE FnB launching soon...',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <head>
        <link
          rel="icon"
          href="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/34843184-1524-47cf-c856-423bf2b69700/public"
          type="image/png"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
