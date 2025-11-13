import { useState } from "react"

function Opcoes({mudarCategoria}) {

    return (
        <>
            <button onClick={() => mudarCategoria(0)}>Hambúrguer</button>
            <button onClick={() => mudarCategoria(1)}>Bebidas</button>
            <button onClick={() => mudarCategoria(2)}>Sobremesas</button>
        </>
    );
}

export default Opcoes;