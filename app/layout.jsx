import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Weather App',
  description: 'Beautiful dark-themed weather application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.className} bg-slate-950 text-slate-100 `}>
        {children}
      </body>
    </html>
  )
}
