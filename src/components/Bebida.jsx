import bebida1 from "/home/muniz/Documentos/Web/cardapio/src/assets/d1.avif"
import bebida2 from "/home/muniz/Documentos/Web/cardapio/src/assets/d2.jpg"
import bebida3 from "/home/muniz/Documentos/Web/cardapio/src/assets/d3.webp"
import bebida4 from "/home/muniz/Documentos/Web/cardapio/src/assets/d4.jpeg"

function Bedida() {
    return (
        <>
            <div className="item">
                <div className='descricao'>
                    <h2>Água LBR - Clássica e Essencial</h2>
                    <p>A pureza da água mineral natural em duas opções refrescantes: Sem Gás e Com Gás - Garrafa de 500ml.</p>
                    <h3>A partir de R$ 6,00</h3>
                </div>
                <div className='imagem'>
                    <img src={bebida1} alt="Água Mineral" />
                </div>
            </div>

            <div className="item">
                <div className='descricao'>
                    <h2>Refrigerante Lata Gelada</h2>
                    <p>Aquele clássico que não pode faltar! Refrigerante Coca-Cola Original, servido na lata, extremamente gelado.</p>
                    <h3>R$ 8,00</h3>
                </div>
                <div className='imagem'>
                    <img src={bebida2} alt="Refrigerante Lata" />
                </div>
            </div>

            <div className="item">
                <div className='descricao'>
                    <h2>Seleção Microlote - Vinhos Premium</h2>
                    <p>Vinhos tintos ideais para acompanhar pratos e celebrar momentos. Temos as safras Merlot, Pinot Noir e mais.</p>
                    <h3>Taça R$ 25,00</h3>
                </div>
                <div className='imagem'>
                    <img src={bebida3} alt="Garrafas de Vinho" />
                </div>
            </div>

            <div className="item">
                <div className='descricao'>
                    <h2>Sucos Naturais</h2>
                    <p>Preparamos sucos e vitaminas com frutas frescas e ingredientes selecionados, ideais para nutrir ou refrescar.</p>
                    <h3>R$ 14,90</h3>
                </div>
                <div className='imagem'>
                    <img src={bebida4} alt="Smoothies Naturais" />
                </div>
            </div>
        </>
    );
}

export default Bedida

