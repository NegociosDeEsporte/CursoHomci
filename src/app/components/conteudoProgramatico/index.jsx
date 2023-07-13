import Image from 'next/image'
import traco from '../../../../public/traco.png'

import Button from '../Button'
import CardProgramataico from './CardProgramatico'
export default function ConteudoProgramatico() {
  return (
    <div className="bg-main bg-cover flex items-center flex-col py-20 border-t border-white">
      <Image src={traco} height={5} className='h-px md:h-auto' />
      <div className="flex items-center gap-1 mt-5">
        <h2 className="font-orbitron text-white text-lg md:text-4xl font-bold font-orbirtron">Conteúdo</h2>
        <h2 className="font-orbitron text-amarelo text-lg md:text-4xl font-bold font-orbirtron">programático</h2>
      </div>
      <div className='my-10'>
      </div>
      <CardProgramataico descricao="Fundamentos do coaching esportivo: histórico, conceitos e premissas gerais"/>
      <CardProgramataico descricao="Perfil do coach: competências, diferenças entre o coach esportivo e o treinador de esportes, coaching formal x coaching informal, autocoaching."/>
      <CardProgramataico descricao="A estrutura do programa de coaching: atendimento, sessões e tarefas."/>
      <CardProgramataico descricao="Aprimoramento da comunicação: técnicas conversacionais de alto impacto, rapport, sistemas representacionais, preferência cerebral e outras técnicas."/>
      <CardProgramataico descricao="Aumento da percepção: perguntas poderosas, lista de desejos e sonhos, perdas e ganhos, crenças e sonhos, valores e missão."/>
      <CardProgramataico descricao="Resultados e metas: meta s.m.a.r.t., modelos diversos de planos de ação;"/>
      <CardProgramataico descricao="Comportamento: técnicas de treinamento mental de alta performance, como lidar com pensamentos limitantes, níveis neurológicos, janela de johari, feedbacks, âncoras, redução de ansiedade, relaxamento, melhora de estado emocional, ensaio motor visual, mapeamento de perfil comportamental etc."/>
      <CardProgramataico descricao="Alguns modelos de coaching: GROW, House of Change e Coaching Rápido em 7 Passos;"/>
      <CardProgramataico descricao="Questões comerciais: a venda de um programa de coaching para clubes, atletas e treinadores, valores, contratos e muito mais!"/>
      <Button />
    </div>
  )
}