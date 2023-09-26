export const Counter = ({ sumar, restar, contador, nombre, setNombre }) => {
  return (
    <div>
      <button onClick={sumar}>Sumar</button>

      <h4>{contador}</h4>
      <button onClick={restar}>Restar</button>
      <h4>{nombre}</h4>
      <button onClick={() => setNombre("juan")}>cambiar</button>
    </div>
  );
};
