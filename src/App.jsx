import { useState } from 'react'
import hamburguer1 from "/home/muniz/Documentos/Web/cardapio/src/assets/1.jpg"
import hamburguer2 from "/home/muniz/Documentos/Web/cardapio/src/assets/2.jpg"
import hamburguer4 from "/home/muniz/Documentos/Web/cardapio/src/assets/4.jpg"
import hamburguer5 from "/home/muniz/Documentos/Web/cardapio/src/assets/5.jpg"
import hamburguer6 from "/home/muniz/Documentos/Web/cardapio/src/assets/6.jpg"
import hamburguer7 from "/home/muniz/Documentos/Web/cardapio/src/assets/7.jpg"
import hamburguer8 from "/home/muniz/Documentos/Web/cardapio/src/assets/8.jpg"
import hamburguer9 from "/home/muniz/Documentos/Web/cardapio/src/assets/9.jpg"
import logo from "/home/muniz/Documentos/Web/cardapio/src/assets/logo.jpeg"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="banner">
        <img src={logo} alt="Hamburguer" />
      </div>

      <div id='opcoes'>
        <p>Hambúrguer</p>
        <p>Bebidas</p>
        <p>Sobremesas</p>
      </div>

      <div id="cardapio">
        <div className="hamburguer">
          <div className='descricao'>
            <h2>The Cheesy Volcano</h2>
            <p>Pão escuro de malte, triplo smash burger, e uma avalanche de molho cheddar cremoso (cheddar sauce). Acompanha batata frita e molhos.</p>
            <h3>R$ 48,00</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer1} alt="Hamburguer" />
          </div>
        </div>
        
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Torre de Bacon e Cebola Crispy</h2>
            <p>Pão levemente tostado, blend de carne de 200g, bacon rústico, anéis de cebola crispy, molho barbecue, alface e nossa maionese defumada.</p>
            <h3>R$ 44,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer2} alt="Hamburguer" />
          </div>
        </div>
        
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Mediterrâneo Gourmet</h2>
            <p>PPão de brioche, blend de carne, folhas de alface frescas, uma fatia de tomate seco e um toque de maionese de ervas.</p>
            <h3>R$ 36,00</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer4} alt="Hamburguer" />
          </div>
        </div>
        
        <div className="hamburguer">
          <div className='descricao'>
            <h2>The Black Bacon Melt</h2>
            <p>Pão australiano escuro, blend de carne suculento, queijo cremoso derretido, bacon em tiras e nosso exclusivo molho BBQ de Jack Daniel's. Acompanha batata frita.</p>
            <h3>R$ 42,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer5} alt="Hamburguer" />
          </div>
        </div>
        
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Double Smash Supreme</h2>
            <p>Pão brioche de gergelim, dois smash burgers de 100g, cheddar, bacon crocante, e um toque do nosso molho especial da casa.</p>
            <h3>R$ 38,50</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer6} alt="Hamburguer" />
          </div>
        </div>
        
        <div className="hamburguer">
          <div className='descricao'>
            <h2>O Clássico Chef's</h2>
            <p>Pão de brioche, blend de carne de 180g, queijo cheddar, cebola caramelizada, tomate fresco, alface americana e maionese de alho.</p>
            <h3>R$ 34,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer7} alt="Hamburguer" />
          </div>
        </div>
        
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Duplo BBQ Desfiado</h2>
            <p>Pão tradicional, dois blends de carne, uma camada de carne de porco desfiada no molho BBQ, cheddar, cebola picada, alface e nossos molhos especiais.</p>
            <h3>R$ 39,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer8} alt="Hamburguer" />
          </div>
        </div>
        
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Queijo e Bacon Rústico</h2>
            <p>Pão australiano, blend de carne, generosa camada de queijo derretido, bacon rústico e um mix de molhos cremosos. Acompanha batata frita.</p>
            <h3>R$ 40,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer9} alt="Hamburguer" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
