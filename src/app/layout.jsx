import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto,Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Annuaire ANOCR',
  description: 'Annuaire ANOCR by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <h1>C'est l'entête général</h1>
        <div className="container">
          <Navbar/>
          {children}
          <Footer/>
        </div>
        </body>
    </html>
  )
}
