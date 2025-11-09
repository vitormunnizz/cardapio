import { useState } from 'react'
import './App.css'
import img0 from "/home/muniz/Documentos/Web/cardapio/src/assets/pexels-horizon-content-2100060-3738755.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={img0} alt="" />
    </>
  )
}

export default App
