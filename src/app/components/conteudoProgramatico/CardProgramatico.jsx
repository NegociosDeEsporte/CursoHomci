import programatico from '../../../../public/programatico.png'
import Image from 'next/image'
export default function CardProgramataico({descricao}){
  return(
    <div className='flex text-justify justify-center items-center'>
      <p className='md:pl-20 font-light md:absolute md:w-[700px] text-xs md:text-sm text-center flex justify-center items-center text-white md:font-bold pb-5 px-5'>{descricao}</p>
      <Image src={programatico} height={150} className='h-32 hidden md:block'/>
    </div>
  )
}