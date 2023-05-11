import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {GrClose} from "react-icons/gr"
import {RiMenu3Fill} from "react-icons/ri"
import {BsMouse} from "react-icons/bs"
import {BiArrowBack} from "react-icons/bi"
import ImgOne from "@/public/landing/img-1.webp"
import ImgTwo from "@/public/hero/img-1.jpg"
import Image from 'next/image'
import Container from './Container'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Oswald } from 'next/font/google'
const oswald = Oswald({
  weight: ["400" , "700"],
  subsets: ['latin'],
})
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export default function Header2() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const goToFirstSection = () =>{
    window.scrollTo({top : 714 , behavior : "smooth"})
   }

  return (
    <div className={oswald.className}>
      <header className="fixed inset-x-0 top-0 z-50 bg-black/80">
        <Container>
           <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 text-white md:text-3xl">
                <span className='text-yellow-400 '>ELECTRICIEN</span>AUMAROC
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <RiMenu3Fill className='text-white' size={35} aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-2xl font-semibold leading-6 text-white/80 hover:text-yellow-400 transition duration-200">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#services" className="text-xl font-bold leading-6 text-white rounded-2xl py-3 px-5 bg-yellow-400 hover:bg-yellow-300 transition duration-200 w-48 text-center uppercase  ">
                nos services 
            </a>
          </div>
        </nav>
        </Container>
       
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-yellow-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <GrClose  size={30} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-yellow-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                        <a class="text-blue-700 cursor-pointer hover:text-gray-700">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-red-400 cursor-pointer hover:text-gray-700">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                    </span>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
          <Carousel
           interval={2500}
           autoPlay={true}
           infiniteLoop={true}
           showThumbs={false}
           showIndicators={true}
           showStatus={false}
           className='z-30'
           renderArrowPrev={(clickHandler , hasPrev)=> (
            <div
               onClick={clickHandler}
               className="absolute hidden md:flex rounded-lg right-[31px] md:left-[20px] bottom-1/2 translate-y-[50%] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-yellow-400 z-10  items-center justify-center cursor-pointer hover:bg-yellow-200"
            >
             <BiArrowBack size={25} className="text-sm md:text-lg text-white"/>    
            </div>
          ) }
            renderArrowNext={(clickHandler , hasNext)=> (
             <div
                onClick={clickHandler}
                className="absolute hidden rounded-lg md:right-[20px] bottom-1/2 translate-y-[50%]  w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-yellow-400 z-10 md:flex items-center justify-center cursor-pointer hover:bg-yellow-200"
             >
              <BiArrowBack size={25} className="rotate-180 text-sm md:text-lg text-white"/>    
             </div>
           ) }
          >
                <div className='relative px-6 pt-14 lg:px-8  h-[64vh] md:h-screen z-40' >
                      <Image
                        className="bg-cover bg-center" 
                        fill
                        src={ImgOne}
                       />
                     <div className=" max-w-2xl absolute left-1/2 -translate-x-1/2 py-32 sm:py-48 lg:py-56 z-20 ">
                          <div className="text-center">
                               <h1 className=" w-80 md:w-full   text-2xl md:text-5xl font-bold tracking-tight text-white sm:text-6xl">
                                             Des solutions électriques complètes pour tous vos besoins
                               </h1>
                              <p className="mt-2 md:mt-6  text-md md:text-xl leading-8 font-semibold text-gray-800">
                                           Découvrez notre expertise en installation, maintenance et réparation électrique
                               </p>
                              <div className="mt-4 md:mt-10 flex items-center justify-center gap-x-6">
                                   <a
                                      href="#"
                                      className="rounded-md w-40 md:w-48 bg-yellow-400 hover:bg-yellow-300  px-3 py-1.5 md:px-3.5 md:py-2.5  text-base md:text-xl font-bold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                            Contactez-nous
                                   </a>
                              </div>
                          </div>
                      </div> 
                  </div>
          </Carousel>
          {/* overlay */}
        <div className=" w-full  h-[64vh]  md:h-full absolute bg-black opacity-90 top-0 left-0 right-0 bottom-0 "></div>
        <div className="text-yellow-400 hover:text-yellow-200  absolute bottom-80 md:bottom-14 left-[50%] transform translate-x-[-50%] z-20">
                <BsMouse onClick={goToFirstSection}   className="animate-bounce text-3xl md:text-5xl cursor-pointer "/>
       </div>  
    </div>
  )
}
