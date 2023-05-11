import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

function ServiceCard({item}) {

console.log(item.images)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="group flex flex-col h-full border border-yellow-200 hover:border-transparent hover:shadow-md hover:shadow-yellow-100 transition-all duration-300 rounded-xl p-1 md:p-3 " >
                     <Carousel
                      showDots={true}
                      arrows={false}
                      containerClass="-mx-[10px]"
                      itemClass="px-[10px]"
                      draggable={false}
                      
                      responsive={responsive}
                     >
                      {item.images.map((image , i)=> (
                          <div className="aspect-w-16 aspect-h-11" href="#contact">
                            <Image src={image} className="w-full object-cover rounded-xl" alt="Image Description"/>
                        </div>
                        ))}
                      
                     </Carousel>
                      <div className=" my-2 md:my-4">
                        <h3 className=" text-sm md:text-xl font-semibold text-gray-800 ">
                          {item.title}
                        </h3>
                      </div>
             <div className="w-56 mt-2 md:mt-4">
                   <a className="inline-flex  justify-center items-center gap-x-2 text-center  font-bold bg-white border hover:border-gray-300  text-[0.65rem] md:text-base text-yellow-400 hover:text-blue-700 hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition  py-2 md:py-3  px-2 md:px-4" href="#">
                        demander un service
                         <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                   </a>
             </div>
    </div>
  )
}

export default ServiceCard