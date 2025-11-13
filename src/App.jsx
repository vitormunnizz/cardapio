import { useState } from 'react'
import Opcoes from "/home/muniz/Documentos/Web/cardapio/src/components/Opcoes.jsx"
import Hamburguer from "/home/muniz/Documentos/Web/cardapio/src/components/Hamburguer.jsx"
import Banner from "/home/muniz/Documentos/Web/cardapio/src/components/Banner.jsx"


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
        <Hamburguer />
      </div>

    </>
  )
}

export default App
