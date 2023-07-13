import './globals.css'
import { Orbitron, Roboto_Flex } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
export const metadata = {
  title: 'Coaching Esportivo',
  description: 'Bem-vindo ao site de Marcelo Homci, referência em coaching esportivo de alto desempenho. Aqui, você encontrará um universo de conhecimento e experiência, dedicado a ajudá-lo a alcançar seus objetivos esportivos e maximizar seu potencial. Com metodologias inovadoras, suporte personalizado e uma paixão incansável pelo sucesso de nossos clientes, estamos prontos para elevar sua performance e levá-lo ao próximo nível. Descubra o poder do coaching esportivo com Marcelo Homci e inicie sua jornada rumo ao sucesso extraordinário.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${orbitron.variable} font-roboto`}>{children}</body>
    </html>
  )
}
