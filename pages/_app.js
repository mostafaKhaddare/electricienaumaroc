import '@/styles/globals.css'
import {Oswald } from 'next/font/google'
import Header2 from '@/components/Header2'
import Footer from '@/components/Footer'
import WhathsappButton from '@/components/WhathsappButton'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../next-seo-config'

const oswald = Oswald({
  weight: ["400" , "700"],
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  
  return (
      <>
      <DefaultSeo 
      {...SEO}
      />
      <Header2/>
          <main className={oswald.className}>
          <Component {...pageProps} />
          </main>
       <Footer/>
      </>
      
  )
}
