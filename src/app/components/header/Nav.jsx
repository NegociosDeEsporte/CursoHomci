import Link from 'next/link'
import logo from '../../../../public/logo.png'
import Image from 'next/image'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Button'
export default function Nav() {
  return (
    <div id='inicio' className='p-2 md:py-10 md:pr-20 flex justify-between items-center w-screen z-20 '>
      <Image src={logo} alt='logo da empresa negocios de esporte' className='md:ml-10 w-32 md:w-44' />
      <div className='text-white md:flex hidden'>
        <div className='font-bold flex text-xl justify-center items-center mr-20'>
        <p className="relative group mx-5">
        <a href='#marcelo'>Marcelo Homci</a>
            <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white group-hover:w-1/2 transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-px bg-amarelo group-hover:w-1/2 transition-all duration-500"></span>
          </p>
          <p className="relative group mx-5">
          <a href='#sobre'>Sobre o curso</a>
            <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white group-hover:w-1/2 clip  transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-px bg-amarelo group-hover:w-1/2 transition-all duration-500 polygon b-3 d-3"></span>
          </p>
        </div>
        <div className='flex items-center justify-center gap-5 mr-5'>
          <Link href=''><FontAwesomeIcon icon={faInstagram} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href=''> <FontAwesomeIcon icon={faFacebook} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href=''> <FontAwesomeIcon icon={faTwitter} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
        </div>
        <Button/>
      </div>
    </div>
  )
}