import { useState } from 'react'
import hamburguer1 from "/home/muniz/Documentos/Web/cardapio/src/assets/1.jpg"
import hamburguer2 from "/home/muniz/Documentos/Web/cardapio/src/assets/2.jpg"
import hamburguer3 from "/home/muniz/Documentos/Web/cardapio/src/assets/3.jpg"
import hamburguer4 from "/home/muniz/Documentos/Web/cardapio/src/assets/4.jpg"
import hamburguer5 from "/home/muniz/Documentos/Web/cardapio/src/assets/5.jpg"
import hamburguer6 from "/home/muniz/Documentos/Web/cardapio/src/assets/6.jpg"
import hamburguer7 from "/home/muniz/Documentos/Web/cardapio/src/assets/7.jpg"
import hamburguer8 from "/home/muniz/Documentos/Web/cardapio/src/assets/8.jpg"
import hamburguer9 from "/home/muniz/Documentos/Web/cardapio/src/assets/9.jpg"
import hamburguer10 from "/home/muniz/Documentos/Web/cardapio/src/assets/10.jpg"
import hamburguer11 from "/home/muniz/Documentos/Web/cardapio/src/assets/11.jpg"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="banner">
        <img src={hamburguer1} alt="Hamburguer" />
      </div>
      <div id="cardapio">
        <img src={hamburguer2} alt="Hamburguer" />
        <img src={hamburguer3} alt="Hamburguer" />
        <img src={hamburguer4} alt="Hamburguer" />
        <img src={hamburguer5} alt="Hamburguer" />
        <img src={hamburguer6} alt="Hamburguer" />
        <img src={hamburguer7} alt="Hamburguer" />
        <img src={hamburguer8} alt="Hamburguer" />
        <img src={hamburguer9} alt="Hamburguer" />
        <img src={hamburguer10} alt="Hamburguer" />
        <img src={hamburguer11} alt="Hamburguer" />
      </div>
    </>
  )
}

export default App
