import React, { useState } from "react";

function Contador() {
  //inicializando o estado do contador com o valor zero
  const [contador, setContador] = useState(0);

  //função para incrementar o contador
  const contMais = () => {
    setContador(contador + 1);
  };

  //função para decrementar o contador
  const contMenos = () => {
    setContador(contador - 1);
  };

  //função de resetar o contador
  const resetarContador = () => {
    setContador(0);
  };

  return (
    <>
      <h1>Olá, sou o Contador: {contador}</h1>
      <button onClick={contMais}>+</button>
      <button onClick={contMenos}>-</button>
      <button onClick={resetarContador}>Reset</button>
    </>
  );
}

export default Contador;
