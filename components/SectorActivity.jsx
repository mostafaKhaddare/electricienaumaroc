import React from 'react'
import Img1 from "@/public/SectorActivity/img-1.jpg"
import Img3 from "@/public/SectorActivity/img-3.jpg"
import Img4 from "@/public/SectorActivity/img-4.webp"
import Img5 from "@/public/SectorActivity/img-6.jpg"
import Img6 from "@/public/SectorActivity/img-7.jpg"
import Image from 'next/image'
export default function SectorActivity() {

    const data = [
        {
        id : 1,
        name : 'les hotels',
        img : Img6
       },
       {
        id : 2,
        name : 'entreprises',
        img : Img5
       },
       {
        id :3,
        name : 'Appartements',
        img : Img4
       },
       {
        id : 4,
        name : 'offices',
        img : Img1
       },
]


  return (
<section class="px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
  <div class="grid lg:grid-cols-4 gap-4">
     {data.map((item , i ) =>(
        <a key={i} class="group relative block" href="#">
      <div class="flex-shrink-0 relative  overflow-hidden w-full h-[500px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
          <Image src={item.img} className='h-full w-full' />
      
      </div>
      <div class="absolute bottom-0 inset-x-0 z-10">
        <div class="flex flex-col h-full p-4 sm:p-6">
          <h1 class="text-lg sm:text-4xl font-semibold text-white group-hover:text-white/[.8] text-center pb-16">
            {item.name}
          </h1>
        </div>
      </div>
    </a>
     ))}
    
  </div>
</section>
  )
}
