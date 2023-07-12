import Image from 'next/image'
import braco from '../../../public/braco.png'
export default function Button() {
  return (
    <div className='z-10'>
      <a href="#garantaSuaVaga">
        <button className='drop-shadow-drop1 text-white flex items-center justify-center bg-azul-claro  md:w-52 p-2 md:px-5 md:py-3 rounded-2xl font-bold hover:text-amarelo transition-all duration-300 z-10'>Garanta sua Vaga
          <Image src={braco} width={30} />
        </button>
      </a>
    </div>
  )
}