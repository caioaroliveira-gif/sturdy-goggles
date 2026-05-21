import React, { useState } from 'react'

function Cadastro() {
    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")
    const [punicao, setPunicao] = useState("")
    const [devedores, setDevedores] = useState([])

    function cuidar_cadastro() {
        const novoDevedor = {
            nome: nome,
            valor: valor,
            punicao: punicao
        };

        setDevedores([...devedores, novoDevedor]);

        setNome("");
        setValor("");
        setPunicao("")
    }

    function apagar(index) {
        const nova_lista = devedores.filter((_, i) => i !== index);
        setDevedores(nova_lista);
    }

    return (
        <div className="cont-cadastro">

            Nome: <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            Valor Devedor: <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
            Punição: <input type="text" value={punicao} onChange={(e) => setPunicao(e.target.value)} />
            <button onClick={cuidar_cadastro}> Cadastrar </button>
            <hr />

            <h3>Lista dos devedores</h3>

            <ul>
                {devedores.map((devedor, index) => (
                    <li key={index}>
                        <strong>Nome:</strong> {devedor.nome} <br />
                        <strong>Valor:</strong> R$ {devedor.valor} <br />
                        <strong>Punição:</strong> {devedor.punicao} <br />
                        <button onClick={() => apagar(index)}>🗑️ Apagar</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Cadastro