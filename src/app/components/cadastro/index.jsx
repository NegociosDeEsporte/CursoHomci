import Image from 'next/image'
import traco from '../../../../public/traco.png'
import form from '../../../../public/form.png'
import logo from '../../../../public/logo.png'
import braco from '../../../../public/braco.png'


export default function Cadastro() {
  return (
    <div id='garantaSuaVaga' className="bg-main bg-cover flex items-center flex-col pt-20 pb-20 border-t border-white">
      <Image src={traco} height={5} className='h-px md:h-auto'/>
      <div className="flex flex-col md:flex-row items-center gap-1 mt-5 px-5 md:px-0">
        <h2 className="font-orbitron text-white text-lg md:text-4xl font-bold">Garanta sua vaga</h2>
        <h2 className="font-orbitron text-amarelo text-lg md:text-4xl font-bold">e mude sua carreira</h2>
      </div>
      <div className='my-10'>
      </div>
      <div className=' flex justify-center gap-5 md:px-36 flex-wrap'>
        <form className='absolute z-20 text-white flex flex-col justify-center items-center pt-10'>
          <Image src={logo} width={200} className='pb-5 w-32' />
          <label className='font-bold text-sm'>Nome:</label>
          <input type="text" className='rounded-xl w-60 text-black px-2' />
          <label className='pt-5 font-bold text-sm'>Email:</label>
          <input type="email" className='rounded-xl w-60 text-black px-2' />
          <label className='pt-5 font-bold text-sm'>Telefone:</label>
          <input type="tel" className='rounded-xl w-60 mb-10 text-black px-2' />
          <button className='drop-shadow-drop1 text-white flex items-center justify-center bg-azul-claro  md:w-52 p-2 md:px-5 md:py-3 rounded-2xl font-bold hover:text-amarelo transition-all duration-300 z-10'>Garanta sua Vaga
          <Image src={braco} width={30} />
        </button>
        </form>
        <Image src={form} height={500} className='h-[450px] w-64 md:h-[500px] md:w-auto'/>
      </div>
    </div>
  )
}