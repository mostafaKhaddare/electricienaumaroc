import Container from "./Container"
import ServiceCard from "./cards/ServiceCard"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "@/public/services/courant_faible/vidéosurveillance/img-1.jpg"
import img2 from "@/public/services/courant_faible/vidéosurveillance/img-2.jpg"
import img3 from "@/public/services/courant_faible/vidéosurveillance/img-3.jpg"

import img4 from "@/public/services/courant_faible/informatique/img-1.jpg"
import img5 from "@/public/services/courant_faible/informatique/img-2.jpg"
export default function Services() {

  const data = [
     {
      id : 1,
      title : "installation  de sécurité",
      category : "courant faible" ,
      images : [img2 , img1 , img3]
     },
     
     {
      id : 2,
      title : "nstallation de réseaux informatiques",
      category : "courant faible" ,
      images : [img4 , img5]
     } ,
     {
      id : 1,
      title : "installation  de sécurité",
      category : "courant faible" ,
      images : [img2 , img1 , img3]
     },
     {
      id : 2,
      title : "nstallation de réseaux informatiques",
      category : "courant faible" ,
      images : [img4 , img5]
     } ,
     {
      id : 1,
      title : "installation  de sécurité",
      category : "courant faible" ,
      images : [img2 , img1 , img3]
     },
     {
      id : 2,
      title : "nstallation de réseaux informatiques",
      category : "courant faible" ,
      images : [img4 , img5]
     } ,
     {
      id : 1,
      title : "installation  de sécurité",
      category : "courant faible" ,
      images : [img2 , img1 , img3]
     },


  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (

<section id='services' className="py-20 bg-white ">
    <Container>
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h1 className="text-2xl font-bold md:text-4xl md:leading-tight">Découvrez toutes  <span className="text-yellow-400"> les offres que nous proposons</span>  en matière <span className="text-yellow-400">d'électricité.</span> </h1>
         </div> 
          <div className="category_one  mb-4 md:mb-6">
                  <div className="service_category flex justify-between items-center py-4 md:py-6">
                         <h2 className="text-xl md:text-3xl font-bold  uppercase  "> courant fort </h2>
                         <span className="font-bold textbase md:text-xl underline cursor-pointer"> see all </span>
                  </div>
                  <Carousel
                     responsive={responsive}
                     swipeable={true}
                     containerClass="-mx-[10px]"
                     itemClass="px-[10px]">
                         {data.map((item , i)=>(
                             <ServiceCard key={i} item={item}/>
                         ))}
                   </Carousel>
          </div>
          <div className="category_two">
                  <div className="service_category flex justify-between items-center py-4 md:py-6">
                         <h2 className="text-xl md:text-3xl font-bold  uppercase  "> courant faible </h2>
                         <span className="font-bold textbase md:text-xl underline cursor-pointer"> see all </span>
                  </div>
                  <Carousel
                     responsive={responsive}
                     containerClass="-mx-[10px]"
                     itemClass="px-[10px]">
                          {data.map((item , i)=>(
                             <ServiceCard key={i} item={item}/>
                         ))}
                   </Carousel>
          </div>
    </Container>
 

 
</section>
  )
}
