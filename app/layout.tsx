import SearchBar from './components/searchBar/SearchBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], preload: true })

export const metadata = {
  title: 'Football',
  description: 'Football/Soccer Info App',
  openGraph: {
    title: 'FootyPopo',
    description: "Football/Soccer Stats, Matches and Team Info App"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='relative bg-black'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <img
              src="/background.png"
              alt="Image"
              className='h-screen w-full object-cover'
            />
          </div>
          <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-transparent to-black opacity-100'></div>
          <div className='relative'>
            <SearchBar />
            {children}
          </div>
        </div>
      </body>
    </html >
  )
}
