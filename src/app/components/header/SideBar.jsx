'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import { faInstagram, faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className='flex justify-end p-2 md:hidden absolute right-4'>
      <svg
        onClick={() => setShowSidebar(!showSidebar)}
        className="right-10 top-6 z-30 flex cursor-pointer items-center"
        fill="#fff"
        viewBox="0 0 100 80"
        width="30"
        height="30"
      >
        <rect width="100" height="10"></rect>
        <rect y="30" width="70" height="10" fill='#F6A302'></rect>
        <rect y="60" width="40" height="10"></rect>
      </svg>
      <div
        className={`text-white fixed right-0 top-0 z-40 flex h-full w-[70vw]  flex-col bg-degrade transition-all duration-1000 ease-in-out ${showSidebar ? 'translate-x-0 ' : 'translate-x-full'
          }`}
      >
       
        <button
          className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-2xl text-vermelho"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <a
          href="#sobre"
          className="mt-20 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-base font-bold shadow-lg duration-300 ease-in-out hover:text-zinc-400"
        >
          <p>Sobre</p>
        </a>
        <a
          href="#marcelo"
          className=" text-white mt-5 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-base font-bold shadow-lg duration-300 ease-in-out hover:text-zinc-400"
        >
          <p>Marcelo Homci</p>
        </a>
        <div className='flex items-center justify-center gap-5 mt-16'>
          <Link href='https://instagram.com/negociosdeesporte' target="blank"><FontAwesomeIcon icon={faInstagram} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href='https://www.facebook.com/negociosdeesporte?mibextid=ZbWKwL' target="blank"> <FontAwesomeIcon icon={faFacebook} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href='https://twitter.com/NegocioEsportes' target="blank"> <FontAwesomeIcon icon={faTwitter} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
          <Link href="https://wa.me/553599689766" target="blank"> <FontAwesomeIcon icon={faWhatsapp} className="h-7 text-vermelho hover:text-amarelo transition-all duration-300" /></Link>
        </div>
        <div className='flex justify-center items-center m-10'>
          <Image src={logo} alt='logo da negocios de esporte' width={300} />
        </div>
      </div>
    </div>
  )
}