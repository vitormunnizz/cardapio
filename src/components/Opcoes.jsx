import { useState } from "react"

function Opcoes({mudarCategoria}) {

    return (
        <>
            <button onClick={() => mudarCategoria(0)}>Hambúrguer</button>
            <button onClick={() => mudarCategoria(1)}>Sobremesas</button>
            <button onClick={() => mudarCategoria(2)}>Bebidas</button>
            
        </>
    );
}

export default Opcoes;