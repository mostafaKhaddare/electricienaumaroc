
import Container from "./Container"
import {ImPriceTags} from "react-icons/im"
import { GrUserWorker } from "react-icons/gr"
import {MdGppGood} from "react-icons/md"
import {BsFastForwardFill} from "react-icons/bs"

export default function Featurs() {

  const data = [
    {
      id : 1 ,
      title : "Un prix juste et équilibré",
      subtitle : "Des tarifs honnêtes et clairs pour éviter les surprises",
      icon :<ImPriceTags className="text-yellow-400 text-4xl md:text-5xl"/>
    },
    {
      id : 2 ,
      title : "Connaissance et savoir-faire",
      subtitle : "Des électriciens expérimentés, formés et qualifiés",
      icon :<GrUserWorker className="text-yellow-400 text-4xl md:text-5xl"/>

    },
    {
      id : 3 ,
      title : "Garantie de résultat",
      subtitle : "Nous sommes là pour vous satisfaire, quoi qu'il arrive",
      icon :<MdGppGood className="text-yellow-400 text-4xl md:text-5xl"/>

    },
    {
      id : 4 ,
      title : "Rapidité et fiabilité",
      subtitle : "Nous savons que votre temps est précieux, c'est pourquoi nous travaillons avec rapidité et efficacité",
      icon :<ImPriceTags className=" text-4xl md:text-5xl"/>

    },
]

  return (
    <section class="py-20 bg-white">
          <Container>
               <h1 className='text-2xl md:text-4xl mx-auto text-black/80 font-bold text-center max-w-[40rem] leading-relaxed md:leading-tight  mb-8 '>Pourquoi  <span className='text-yellow-400 uppercase'>ElectricienAuMaroc</span>  est la solution idéale pour  vous</h1>
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap- ">
                 {data.map((item , i)=> (
                  <div key={i} className='p-8 rounded-lg cursor-pointer  text-center md:text-left  '>
                            <div className="relative mx-auto md:m-0 flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-yellow-600 before:via-transparent before:to-violet-600 before:rounded-xl ">
                              {item.icon}
                            </div>
                             <div class="mt-5 ">
                                     <h1 className="text-2xl font-bold text-black/80">{item.title}</h1>
                                      <p className="mt-1 text-lg font-semibold text-slate-500 ">{item.subtitle}</p>
                            </div>
                  </div>
                 ))}   
               </div>
          </Container>
    </section>
  )
}
