import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  function aumentarContador() {
    setContador(contador + 1);
  }

  function dismContador() {
    setContador(contador - 1);
  }

  return (
    <>
      <h1> {contador} </h1>
      <button onClick={aumentarContador}> aumentar </button>
      <button onClick={dismContador}> disminuir </button>
    </>
  );
}
