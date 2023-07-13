import Image from 'next/image'
import traco from '../../../../public/traco.png'
import Button from '../Button'
export default function Price(){
  return(
    <div id='marcelo' className="bg-main bg-cover flex items-center flex-col py-20 border-t border-white ">
    <Image src={traco} height={5} className='h-px md:h-auto' />
    <div className="flex flex-col items-center mt-5">
      <p className="font-orbitron text-white text-lg md:text-4xl font-bold px-10 md:px-20 text-center font-orbirtron">"Supere seus limites, alcance seu potencial máximo e conquiste a vitória com o nosso coaching esportivo personalizado com o  <span className='text-amarelo'>Prof. Marcelo Homci.</span> Desperte o campeão dentro de você!"</p>
      <p className='text-white mt-10 md:mt-20 text-center font-orbitron text-lg md:text-4xl font-bold md:px-20 '>Por apenas <span className='text-amarelo'>12x R$ 258,46</span></p>
      <p className='md:text-2xl font-bold text-white text-center'>ou <span className='text-amarelo'>R$ 2.499,00 à vista</span></p>
      <p className='text-amarelo mt-5 text-xs md:text-base mb-5'>Certificado - Comprovação de 40 horas</p>
      <Button/>
    </div>
  </div>
)
}
  
