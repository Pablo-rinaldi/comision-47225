import { useState, useEffect } from "react";
import { Counter } from "./Counter";

export const CounterContainer = ({ stock }) => {
  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("pepe");

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("cantidad maxima");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    console.log("se realizo el fetch");
  }, [nombre]);

  console.log("montado");

  return (
    <Counter
      sumar={sumar}
      restar={restar}
      contador={contador}
      nombre={nombre}
      setNombre={setNombre}
    />
  );
};
