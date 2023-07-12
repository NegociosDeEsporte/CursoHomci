import Image from 'next/image'
import traco from '../../../../public/traco.png'
import Button from '../Button'
import Card from './Card'
export default function Beneficios() {
  return (
    <div className="bg-main bg-cover flex items-center flex-col pt-20 pb-20 border-t border-white">
      <Image src={traco} height={5} className='h-px md:h-auto' />
      <div className="flex items-center gap-1 mt-5"> 
        <h2 className="font-orbitron text-white text-lg md:text-4xl font-bold">Benefícios</h2>
        <h2 className="font-orbitron text-amarelo text-lg md:text-4xl font-bold">da formação</h2>
      </div>
      <div className='my-10'>
      </div>
      <div className='my-10 flex justify-center items-center gap-5 md:px-36 flex-wrap'>
      <Card numero="#01"
        descricao="Melhorar a preparação de atletas e equipes para o alto rendimento."
      />
      <Card numero="#02"
        descricao="Contribuir com o aumento da performance mental e física do atleta."
      />
      <Card numero="#03"
        descricao="Aprimorar a comunicação e a liderança e para obter melhores resultados."
      />
      <Card numero="#04"
        descricao="Conhecer e aplicar técnicas eficazes internacionais de coaching esportivo."
      />
      <Card numero="#05"
        descricao="Desenvolver autoestima, autoconfiança, disciplina, foco e resiliência."
      />
      <Card numero="#06"
        descricao="Auxiliar no planejamento da temporada com a criação de planos de ação."
      />
      <Card numero="#07"
        descricao="Favorecer comportamentos de alto desempenho na gestão da carreira."
      />
      <Card numero="#08"
        descricao="Proporcionar um melhor equilíbrio entre treino, competição, família e estudos."
      />
      <Card numero="#09"
        descricao="Obter técnicas para lidar com mais eficácia com atletas de diferentes perfis."
      />
      <Card numero="#10"
        descricao="Ser reconhecido como um profissional atualizado e muito mais!"
      />
      </div>
      <Button />
    </div>
  )
}