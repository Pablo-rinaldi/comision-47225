import { Navbar } from "./components/layout/navbar/Navbar";
import { CounterContainer } from "./components/common/counter/CounterContainer.jsx";
import { useState } from "react";

function App() {
  const [montar, setMontar] = useState(false);
  return (
    <>
      <Navbar />
      <button onClick={() => setMontar(!montar)}>Montar/desmontar</button>
      {montar && <CounterContainer stock={5} />}
    </>
  );
}

export default App;
