import { useState } from 'react'
import Opcoes from "/home/muniz/Documentos/Web/cardapio/src/components/Opcoes.jsx"
import Hamburguer from "/home/muniz/Documentos/Web/cardapio/src/components/Hamburguer.jsx"
import Banner from "/home/muniz/Documentos/Web/cardapio/src/components/Banner.jsx"
import Sobremesa from "/home/muniz/Documentos/Web/cardapio/src/components/Sobremesa.jsx"
import Bebida from "/home/muniz/Documentos/Web/cardapio/src/components/Bebida.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="banner">
        <Banner></Banner>
      </div>
      <div id='opcoes'>
        <Opcoes></Opcoes>
      </div>
      <div id='cardapio'>
        <Bebida />
      </div>

    </>
  )
}

export default App
