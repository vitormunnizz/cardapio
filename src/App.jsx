import { useState } from "react" // <-- PRECISA do useState AQUI!
import Opcoes from "/home/muniz/Documentos/Web/cardapio/src/components/Opcoes.jsx"
import Banner from "/home/muniz/Documentos/Web/cardapio/src/components/Banner.jsx"
import Hamburguer from "/home/muniz/Documentos/Web/cardapio/src/components/Hamburguer.jsx"
import Sobremesa from "/home/muniz/Documentos/Web/cardapio/src/components/Sobremesa.jsx"
import Bebida from "/home/muniz/Documentos/Web/cardapio/src/components/Bebida.jsx"


function App() {
    const [categoria, setCategoria] = useState()

    function mudarCategoria(i) {
        setCategoria(i)
    }

    function renderSecao() {
        switch (categoria) {
            case 0:
                return <Hamburguer />
            case 1:
                return <Sobremesa />
            case 2:
                return <Bebida />
            default:
                return <Hamburguer />
        }
    }

    return (
      <>
        <div id="banner">
          <Banner />
        </div>
        <div id='opcoes'>
          {/* A função de MUDAR CATEGORIA é passada para Opcoes como prop */}
          <Opcoes mudarCategoria={mudarCategoria} />
        </div>
        <div id='cardapio'>
          {renderSecao()}
        </div>
      </>
    )
}

export default App