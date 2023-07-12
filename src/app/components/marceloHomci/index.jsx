import Image from 'next/image'
import traco from '../../../../public/traco.png'
import homci1 from '../../../../public/homci1.png'
import fundoHomci from '../../../../public/fundoHomci.png'
import Button from '../Button'

export default function MarceloHomci() {
  return (
    <div id='marcelo' className="bg-main bg-cover flex items-center flex-col py-20 border-t border-white ">
      <Image src={traco} height={5} className='h-px md:h-auto' />
      <div className="flex items-center gap-1 mt-5">
        <h2 className="font-orbitron text-white text-lg md:text-4xl font-bold">Prof.</h2>
        <h2 className="font-orbitron text-amarelo text-lg md:text-4xl font-bold">Marcelo Homci</h2>
      </div>
      <Image src={homci1} height={200} className='md:hidden rounded-full'/>
      <div className='flex justify-center items-center flex-col md:justify-start md:items-start my-10 bg-fundoHomci1 z-20 relative  md:text-sm'>
        <p className='md:absolute md:text-sm p-5 text-white text-justify text-xs w-80 md:w-auto'><span className='text-amarelo font-bold'>Marcelo Homci</span> é um dos precursores do coaching no Brasil e foi executivo em empresas como Natura, Tupperware e Grupo Silvio Santos. Fundou a Academia Panamericana de Coaching e a MindDISC. Atende de forma personalizada empresas, treinadores, professores e pessoas que desejam melhores resultados por meio de palestras, formações e sessões de coaching profissional, executivo e esportivo, hipnose clínica, PNL e outros programas de treinamento mental de alta performance.
          Método de Padrão Internacional.
          Marcelo utiliza uma metodologia inspirada nas seguintes áreas: Psicologia Positiva; Inteligência Emocional; Programação Neurolinguística; Coaching Comportamental, Brain Based Learning; Estilos de Aprendizagem; Theory of Planned Behavior; Múltiplas Inteligências; Andragogia; Hipnose Clássica e Ericksoniana, Neurociência e outras áreas do desenvolvimento humano.
        </p>
        <div className='md:absolute w-80 md:w-[710px] text-xs md:text-base top-36 p-5 text-white space-y-2'>
          <p># Advanced Master Coach – Behavioral</p>
          <p># Coaching Institute – Realizado em Cingapura; </p>
          <p># Certified Master Coach – Graduate School of Master Coaches – Realizado nos EUA; </p>
          <p># Hypnotherapist – American Board of Hypnotherapy / Instituto Rogério Castilho; </p>
          <p># Hipnólogo Clínico – Instituto Fábio Puentes – ABECE da Hipnose; </p>
          <p># Hipnoterapeuta Sistêmico – Instituto Rogério Castilho; </p>
          <p># Hipnólogo Clínico Master – Hipnomaster – Formação Profissional Edumind; Formação Base em Hipnose Clínica – Instituto Lucas Naves;</p>
          <p># Hipnose do Zero – Instituto Alberto Dell’Isola Hypnotic Inductions Mastery – Scottish Centre of NLP; </p>
          <p># Master Hypnotherapist Course – The KEW Training Academy; </p>
          <p>Hypnotherapy & Hypnosis Certification Course – The KEW Training Academy;</p>
          <p># Hypnotherapy Certification Course – Strategic Life Academy / Scottish Centre of NLP; </p>
          <p>Teoria e Prática de Hipnose – Instituto de performance Humana Continuum; </p>
          <p># Executive & Corporate Coach – Net Profit / Center for Advanced Coaching; </p>
          <p># Life & Global Coach – Net Profit / Center for Advanced Coaching; </p>
          <p># Certified Executive Coach – SBCoaching / Behavioral Coaching Institute; </p>
          <p>Personal & Professional Coach – Sociedade Brasileira de Coaching; </p>
          <p># Professional & Dynamic Coach – Abracoaching / BCI;</p>
          <p># Certified Coach Practitioner – Certified Coaches Federation – CCF, Realizado nos EUA; </p>
          <p># Certificação Internacional em Mentoring & Coaching Holo-Sistêmico ISOR® Coaching Clinic – Net Profit / Coach You / ICF – International Coach Federation; </p>
          <p># Introduction to Coaching – International Coaching Community – ICC Programação Neurolinguística – Interflow – American Board of NLP Instrutor Analista Comportamental DISC – Coachecom; Analista Comportamental DISC – MindDISC / Coachecom; </p>
          <p># Analista Comportamental DoctorCoach Essence – Solides; </p>
          <p># Analista Comportamental Quantum Assessment – Quantum U.</p>
        </div>
        <div className='hidden md:block absolute bottom-5 left-20 z-20'>
          <Button />
        </div>
        <Image src={fundoHomci} height={1100} className='hidden md:block ' />
        <Image src={homci1} width={400} className='hidden md:block absolute bottom-0 right-4 w-40 md:w-[400px]' />
      </div>
    </div>
  )
}