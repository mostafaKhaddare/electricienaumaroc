import Container from "./Container"
import { Oswald } from 'next/font/google'
const oswald = Oswald({
  weight: ["400" , "700"],
  subsets: ['latin'],
})
function Footer() {

  const data = [
    {
     id : 1,
     name : "A propod de nous",
     link : "/"
    },
    {
      id : 2,
      name : "Les Services",
      link : "/"
     },
     {
      id : 3,
      name : "Contactez Nous",
      link : "/"
     },
]

  return (
    <footer className={`${oswald.className} bg-yellow-200 py-10`}>
     <Container>
        <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
      <div>
        <a class="flex-none md:text-3xl" href="#" aria-label="Brand">
             <span className='text-yellow-400 '>ELECTRICIEN</span>AUMAROC
        </a>
      </div>

      <ul class="text-center">
         {data.map((item,i)=>(
           <li class="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-black ">
          <a class="inline-flex gap-x-2 text-xl text-black hover:text-yellow-400" href={item.link}>
             {item.name}
          </a>
        </li>
         ))}
      </ul>

      <div class="md:text-right space-x-2">
       
      </div>
    </div>
     </Container>
    
</footer>
  )
}

export default Footer