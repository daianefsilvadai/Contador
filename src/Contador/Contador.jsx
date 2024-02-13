import React, { useState } from "react";
import "./Contador.css";
import papaLeguas from "./papa-leguas.png";

//Hook: tem funcionalidades que permite  manipulação de diversos recurso do react,
//em um componente funcional  exemplo: useState  / hook trabalha com estados, e os estados são os que armazenam valores
function Contador() {
  //inicializando o estado do contador com o valor zero
  const [numero, setNumero] = useState(0);

  //função para incrementar o contador
  const Adicionar = () => {
    if (numero < 20) {
      setNumero(numero + 1);
    }
  };

  //função para decrementar o contador
  const Remover = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  //função de resetar o contador
  const Limpar = () => {
    setNumero(0);
  };

  return (
    <>
      <section className="contador">
        <h1 className="numero">{numero}</h1>
        <div className="boxButton">
          <button id="btn1" onClick={Adicionar}>
            +
          </button>
          <button id="btn2" onClick={Remover}>
            -
          </button>
          <button id="btn3" onClick={Limpar}>
            Reset
          </button>
        </div>

        <section>
          <img className="img-Leguas" src={papaLeguas} alt="papaLeguas" />
        </section>
      </section>
    </>
  );
}

export default Contador;
