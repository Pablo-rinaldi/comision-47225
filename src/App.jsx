import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { MaterialUI } from "./components/pages/materialUI/MaterialUI.jsx";
// importacion por defecto
// import EsteEsElHome from "./components/pages/home/Home"

import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { Login } from "./components/pages/login/Login";

function App() {
  return (
    <div>
      <MaterialUI />
      <ItemListContainer saludo="como estas" edad="15" />
      <Navbar />
      {/* <Home />
      <Login /> */}
    </div>
  );
}

export default App;

// const sumar = (a, b)=>{
//   return a + b
// }

// <Sumar a={12} b={1}/>
