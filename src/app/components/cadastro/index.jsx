import Image from 'next/image'
import traco from '../../../../public/traco.png'
import form from '../../../../public/form.png'
import logo from '../../../../public/logo.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Cadastro() {
  return (
    <div id='garantaSuaVaga' className="bg-main bg-cover flex items-center flex-col pt-20 pb-20 border-t border-white">
      <Image src={traco} height={5} className='h-px md:h-auto'/>
      <div className="flex flex-col md:flex-row items-center gap-1 mt-5 px-5 md:px-0">
        <h2 className="font-orbitron text-white text-lg md:text-4xl font-bold font-orbirtron">Garanta sua vaga</h2>
        <h2 className="font-orbitron text-amarelo text-lg md:text-4xl font-bold font-orbirtron">e mude sua carreira</h2>
      </div>
      <div className='my-10'>
      </div>
      <div className=' flex justify-center gap-5 md:px-36 flex-wrap'>
        <div className='absolute z-20 text-white flex flex-col justify-center items-center pt-10'>
          <Image src={logo} width={400} className='pb-5 w-44 md:w-64' />
          <h2 className='text-sm w-44 md:w-72 font-bold'>"Você está a um passo de alcançar sua melhor versão no esporte! Não espere mais, envie uma mensagem pelo WhatsApp e comece sua jornada de transformação rumo às suas metas esportivas. Estou aqui para guiá-lo(a) rumo à vitória!"</h2>
          <Link href="https://wa.me/553599689766" target="blank">
            <button className='flex justify-center items-center bg-green-600 hover:bg-green-500 mt-10 text-2xl py-2 px-5 border border-white rounded-xl'>
              WhatsApp
              <FontAwesomeIcon icon={faWhatsapp}
          className=" ml-2 rounded-full h-8"
        />
            </button>
          </Link>
        </div>
        <Image src={form} height={500} className='h-[450px] w-64 md:h-[500px] md:w-auto'/>
      </div>
    </div>
  )
}