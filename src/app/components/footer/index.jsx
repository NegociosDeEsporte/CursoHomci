import Image from 'next/image'
import logo from '../../../../public/logo.png'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Footer() {
  const data = new Date()
  const ano = data.getFullYear()

  return (
    <div className="bg-degrade space-y-10 border-t border-white">
      <div className='flex flex-col md:flex-row justify-center items-center py-10 '>
        <div className='flex justify-center items-center z-20'>
          <a href="#inicio"> <Image src={logo} width={200} /></a>
        </div>
        <div className=' pt-14 md:pt-0 text-center flex flex-col md:flex-row justify-center text-white md:w-[650px] h-10 z-20'>
          <a href='#sobre' className='hover:text-amarelo transition-all duration-300 px-5 h-10 '>Sobre o curso</a>
          <div className='w-px h-5 md:border-r border-white'></div>
          <a href='#marcelo' className='hover:text-amarelo transition-all duration-300 px-5 h-10 '>Marcelo Homci</a>
        </div>
        <div className= 'pt-14 md:pt-0 text-white gap-5 flex justify-center items-center z-20'>
          <Link href=''><FontAwesomeIcon icon={faInstagram} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href=''> <FontAwesomeIcon icon={faFacebook} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href=''> <FontAwesomeIcon icon={faTwitter} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center text-white">
        <p className="text-xs">
          {ano},Negocios de Esporte - Todos os Direitos Reservados
        </p>
        <div className="flex">
          <p className="text-xs">Developed by&nbsp; </p>{' '}
          <a href="" className="font-bold hover:text-amarelo">
            Rixxer &trade;
          </a>
        </div>
      </div>
    </div>
  )
}