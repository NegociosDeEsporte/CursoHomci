import Image from 'next/image'
import Nav from './Nav'
import homci from '../../../../public/homci.png'
import Sidebar from './SideBar'
import Button from '../Button'
export default function Header() {
  return (
    <div className="text-sm bg-header bg-cover flex flex-col md:items-center h-[450px] md:h-[610px]">
      <Nav />
      <Sidebar />
      <div className='md:w-[1200px] md:pl-0 h-[450px] flex md:block md:justify-start  md:items-start'>
        <div className='flex md:hidden justify-end items-end relative w-44 md:w-auto'>
          <Image src={homci} alt='Foto do Marcelo Homci' width={400} />
        </div>
        <div className='flex flex-col justify-end items-end md:justify-start md:items-start md:ml-48  md:h-96 w-screen md:w-[820px] absolute pr-5 md:pr-5'>
          <h2 className='text-white text-xl md:text-5xl font-orbirtron mt-10'>Formação em</h2>
          <h1 className='text-amarelo text-2xl md:text-7xl font-bold font-orbirtron'>Coaching Esportivo</h1>
          <div className='text-white my-10 border-l flex justify-end items-end  border-white text-xs md:text-sm pl-2 md:pl-0'>
            <p className='md:pl-5 w-44 md:w-80 text-justify'>Preparo mental e aumento de performance para sucesso nos esportes de alto rendimento</p>
          </div>
          <Button />
          <p className='text-amarelo mt-5 text-xs md:text-base'>Certificado - Comprovação de 40 horas</p>
        </div>

        <div className='hidden md:flex justify-end items-end relative w-44 md:w-auto'>
          <Image src={homci} alt='Foto do Marcelo Homci' width={352} />
        </div>
      </div>
    </div>
  )
}