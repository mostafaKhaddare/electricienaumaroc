'use client'
import {SiWhatsapp} from "react-icons/si"
import {AiFillMail} from "react-icons/ai"
import Link from "next/link"

export default function WhathsappButton() {
   const whatsappIcon = <SiWhatsapp className="text-2xl md:text-3xl" />;
   const emailIcon = <AiFillMail className="text-2xl md:text-3xl" />;

  return (

    <>
     <Link href={`https://wa.me/+212671747669`} target='_blank' aria-label="Message us on WhatsApp">
       <div className="flex justify-center group  items-center fixed bottom-20 md:bottom-24 right-[1.1rem] md:right-[1.6rem] z-40 ">
          <button
           aria-label="Message us on WhatsApp"
           type="button" 
           className="hover:scale-110 ml-4 flex justify-center items-center w-12 h-12  md:w-[60px] md:h-[60px] shadow-lg shadow-green-500  rounded-full p-1  bg-green-500 text-slate-50  md:text-lg  " >
              {whatsappIcon}
          </button>
       </div>
       </Link>
       <Link href="mailto:info@mannyanishipping.com" target='_blank' aria-label="Send us an email">
       <div className=" flex justify-center group transition duration-300   items-center fixed  bottom-4 md:bottom-4 right-[1.1rem] md:right-[1.6rem] z-40 ">
          <button
           aria-label="Send us an email"
            type="button" className="hover:scale-110  ml-4 flex justify-center items-center w-12 h-12  md:w-[60px] md:h-[60px] shadow-lg shadow-blue-100  rounded-full p-1 bg-blue-600 text-slate-50  md:text-lg  " >
              {emailIcon}
          </button>
       </div>
       </Link>
       
    </>
     
  )
}
