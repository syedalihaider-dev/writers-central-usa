import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from 'next/font/google';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Popup from "@/components/layout/Popup";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100','200','300','400','500','600','700','800','900'],
})

export const metadata = {
  title: 'Take Your Story to The World with Writers Central USA',
  description:
    'End your search for the leading book marketing companies in the USA here. We provide all the services you need to become a successful author.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <Popup />
      </body>
    </html>
  )
}