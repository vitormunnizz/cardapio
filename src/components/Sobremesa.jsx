import sobremesa1 from "/home/muniz/Documentos/Web/cardapio/src/assets/s1.webp"
import sobremesa2 from "/home/muniz/Documentos/Web/cardapio/src/assets/s2.jpg"

function Sobremesa() {
  return (
    <>
        <div className="item">
          <div className='descricao'>
            <h2>Pudim Clássico da Casa</h2>
            <p>Pudim de leite condensado artesanal, cremoso e com a textura perfeita. Servido com calda de caramelo fresca e brilhante, derretendo na hora.</p>
            <h3>R$ 18,90</h3>
          </div>
          <div className='imagem'>
            <img src={sobremesa1} alt="Hamburguer" />
          </div>
        </div>

        <div className="item">
          <div className='descricao'>
            <h2>Taça de Chocolate Belga Premium</h2>
            <p>Duas bolas do nosso sorvete artesanal de chocolate belga, com a textura cremosa e sabor intenso que você procura. Simplesmente irresistível.</p>
            <h3>R$ 15,90</h3>
          </div>
          <div className='imagem'>
            <img src={sobremesa2} alt="Hamburguer" />
          </div>
        </div>
    </>
  );
}

export default Sobremesa

