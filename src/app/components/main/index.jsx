import Image from 'next/image'
import traco from '../../../../public/traco.png'
import sobre from '../../../../public/sobre.png'
import Button from '../Button'
export default function Main() {
  return (
    <div id='sobre' className="bg-main bg-cover flex items-center flex-col pt-20 pb-20 border-t border-white">
      <Image src={traco} height={5} className='h-px md:h-auto'/>
        <div className="flex items-center gap-1 mt-5">
          <h2 className="font-orbitron text-white text-lg md:text-4xl font-bold">Sobre</h2>
          <h2 className="font-orbitron text-amarelo text-lg md:text-4xl font-bold">o curso</h2>
        </div>
        <div className='my-10'>
          <p className='text-white md:absolute md:w-[450px] text-justify text-sm md:mt-20 px-5 md:px-5 md:p-5'>
            O Coaching Esportivo é um processo em que um coach e seu cliente formam uma parceria para identificar oportunidades de melhorias na performance, definindo metas desejadas e as mudanças comportamentais necessárias para alcançá-las. O coach esportivo não diz ao cliente o que fazer, apenas atua como questionador e provocador de ideias e comportamentos para contribuir com o aumento da performance de atletas, treinadores, equipes e demais profissionais do esporte. O coach também pode gerar cenários que existem no contexto do mundo esportivo a fim de que o cliente se imagine em diversas situações e encontre alternativas para solucionar problemas ou identificar necessidades de aprimoramento. Informação importante para quem já fez algum curso de coaching: se você já possui um curso de coaching, provavelmente conhecerá grande parte das ferramentas utilizadas nesta formação, com exceção do conteúdo desenvolvido pelo professor Marcelo Homci. Mesmo assim, você é bem-vindo ao treinamento para aproveitá-lo como reciclagem de conhecimentos e para conhecer uma metodologia diferente com mais ferramentas aplicadas ao mundo dos esportes.</p>
          <Image src={sobre} width={850} className='w-80 md:w-[852px] hidden md:block'/>
        </div>
        <Button/>
    </div>
  )
}