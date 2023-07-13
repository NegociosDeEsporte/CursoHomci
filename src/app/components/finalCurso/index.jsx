import Image from 'next/image'
import traco from '../../../../public/traco.png'

import Button from '../Button'

export default function FinalCurso() {
  return (
    <div className="bg-main bg-cover flex items-center flex-col py-20 px-5 border-t border-white">
      <Image src={traco} height={5} className='h-px md:h-auto'/>
      <div className="flex flex-col md:flex-row items-center gap-1 mt-5">
        <h2 className="font-orbitron text-white text-lg md:text-4xl font-bold font-orbirtron">Ao final do curso,</h2>
        <h2 className="font-orbitron text-amarelo text-lg md:text-4xl font-bold font-orbirtron">Você estará apto a:</h2>
      </div>
      <div className='my-10'>
      </div>
      <div className='text-white md:text-xl flex flex-col justify-center gap-2 px-5 pb-10'>
      <p><span className='text-amarelo'>Melhorar</span> a preparação de atletas e equipes para o alto rendimento. </p>
      <p><span className='text-amarelo'>Contribuir</span> com o aumento da performance mental e física do atleta.</p>
      <p><span className='text-amarelo'>Aprimorar</span> a comunicação e a liderança para obter melhores resultados. </p>
      <p><span className='text-amarelo'>Conhecer</span> e aplicar técnicas eficazes internacionais de coaching esportivo. </p>
      <p><span className='text-amarelo'>Desenvolver</span> autoestima, autoconfiança, disciplina, foco e resiliência.</p>
     <p><span className='text-amarelo'>Auxiliar</span> no planejamento da temporada com a criação de planos de ação.</p>  
      <p><span className='text-amarelo'>Favorecer</span> comportamentos de alto desempenho na gestão da carreira.</p> 
      <p><span className='text-amarelo'>Proporcionar</span> um melhor equilíbrio entre treino, competição, família e estudos. </p>
      <p><span className='text-amarelo'>Obter</span> técnicas para lidar com mais eficácia com atletas de diferentes perfis.</p>
      <p><span className='text-amarelo'>Ser</span> reconhecido como um profissional atualizado e muito mais!</p>
      </div>
      <Button />
    </div>
  )
}