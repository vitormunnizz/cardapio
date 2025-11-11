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
import logo from "/home/muniz/Documentos/Web/cardapio/src/assets/logo.jpg"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="banner">
        <img src={logo} alt="Hamburguer" />
      </div>
      <div id="cardapio">

        <div className="hamburguer">
          <div className='descricao'>
            <h2>Torre de Bacon e Cebola Crispy</h2>
            <p>Pão levemente tostado, blend de carne de 200g, bacon rústico, anéis de cebola crispy, molho barbecue, alface e nossa maionese defumada.</p>
            <h3>R$ 44,90</h3>
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
            <h2>Torre de Bacon e Cebola Crispy</h2>
            <p>Pão levemente tostado, blend de carne de 200g, bacon rústico, anéis de cebola crispy, molho barbecue, alface e nossa maionese defumada.</p>
            <h3>R$ 44,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer3} alt="Hamburguer" />
          </div>
        </div>
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Torre de Bacon e Cebola Crispy</h2>
            <p>Pão levemente tostado, blend de carne de 200g, bacon rústico, anéis de cebola crispy, molho barbecue, alface e nossa maionese defumada.</p>
            <h3>R$ 44,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer4} alt="Hamburguer" />
          </div>
        </div>
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Torre de Bacon e Cebola Crispy</h2>
            <p>Pão levemente tostado, blend de carne de 200g, bacon rústico, anéis de cebola crispy, molho barbecue, alface e nossa maionese defumada.</p>
            <h3>R$ 44,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer5} alt="Hamburguer" />
          </div>
        </div>
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Torre de Bacon e Cebola Crispy</h2>
            <p>Pão levemente tostado, blend de carne de 200g, bacon rústico, anéis de cebola crispy, molho barbecue, alface e nossa maionese defumada.</p>
            <h3>R$ 44,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer6} alt="Hamburguer" />
          </div>
        </div>
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Torre de Bacon e Cebola Crispy</h2>
            <p>Pão levemente tostado, blend de carne de 200g, bacon rústico, anéis de cebola crispy, molho barbecue, alface e nossa maionese defumada.</p>
            <h3>R$ 44,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer7} alt="Hamburguer" />
          </div>
        </div>
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Torre de Bacon e Cebola Crispy</h2>
            <p>Pão levemente tostado, blend de carne de 200g, bacon rústico, anéis de cebola crispy, molho barbecue, alface e nossa maionese defumada.</p>
            <h3>R$ 44,90</h3>
          </div>
          <div className='imagem'>
            <img src={hamburguer8} alt="Hamburguer" />
          </div>
        </div>
        <div className="hamburguer">
          <div className='descricao'>
            <h2>Torre de Bacon e Cebola Crispy</h2>
            <p>Pão levemente tostado, blend de carne de 200g, bacon rústico, anéis de cebola crispy, molho barbecue, alface e nossa maionese defumada.</p>
            <h3>R$ 44,90</h3>
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
