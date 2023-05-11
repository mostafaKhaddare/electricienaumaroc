import Image from 'next/image'
import { Inter } from 'next/font/google'
import Featurs from '@/components/Featurs'
import AboutUs from '@/components/AboutUs'
import SectorActivity from '@/components/SectorActivity'
import ContactUs from '@/components/ContactUs'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main
      className=""
    >
      <Services/>
      <AboutUs/>
      <Featurs/>
      <SectorActivity/>
      <Testimonials/>
      <ContactUs/>
    </main>
  )
}
