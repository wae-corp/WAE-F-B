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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Alternative for PNG */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
