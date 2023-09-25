import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { MaterialUI } from "./components/pages/materialUI/MaterialUI.jsx";
// importacion por defecto
// import EsteEsElHome from "./components/pages/home/Home"

import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { Login } from "./components/pages/login/Login";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig.js";
import { PruebaResponsive } from "./components/pages/pruebaResponsive/PruebaResponsive.jsx";

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <PruebaResponsive />
        {/*<MaterialUI />*/}
      </ThemeProvider>
    </div>
  );
}

export default App;

// const sumar = (a, b)=>{
//   return a + b
// }

// <Sumar a={12} b={1}/>
