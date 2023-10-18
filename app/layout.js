import NavigationBar from '@/components/NavigationBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin-ext'] })

export const metadata = {
  title: {
    default: 'App',
    template: '%s | App',
  },
  description: 'next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`} >
      <NavigationBar />
      {children}
      </body>
    </html>
  )
}
