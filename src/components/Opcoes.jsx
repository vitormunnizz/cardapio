import { useState } from "react"

function Opcoes({mudarCategoria}) {

    return (
        <>
            <button onClick={() => mudarCategoria(0)}><h2>Hambúrguer</h2></button>
            <button onClick={() => mudarCategoria(1)}><h2>Sobremesas</h2></button>
            <button onClick={() => mudarCategoria(2)}><h2>Bebidas</h2></button>
            
        </>
    );
}

export default Opcoes;