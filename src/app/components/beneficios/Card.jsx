export default function Card({ numero, descricao }) {
  return (
    <div className="border-4 border-white rounded-ss-3xl rounded-2xl">
      <div className="bg-white text-xl text-azul-claro font-bold rounded-ss-xl p-2 w-12 rounded-ee-3xl flex justify-center items-center">{numero}</div>
      <div className="p-2 text-white w-44 md:w-36 text-center h-44 flex justify-center items-center">{descricao}</div>
      
    </div>
  )
}