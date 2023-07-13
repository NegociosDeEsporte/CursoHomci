import Main from "./components/main";
import Header from "./components/header";
import Pin from "./components/Pin";
import Beneficios from "./components/beneficios";
import ConteudoProgramatico from "./components/conteudoProgramatico";
import FinalCurso from "./components/finalCurso";
import MarceloHomci from "./components/marceloHomci";
import Cadastro from "./components/cadastro";
import Footer from "./components/footer";
import BackToTop from "./components/Backtotop";
import Price from "./components/price";

export default function Home() {
  return (
    <div>
      <Pin />
      <BackToTop />
      <Header />
      <Main />
      <Beneficios />
      <ConteudoProgramatico />
      <FinalCurso />
      <MarceloHomci />
      <Price />
      <Cadastro />
      <Footer />
    </div>
  )
}
