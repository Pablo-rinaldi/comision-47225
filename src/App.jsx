import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { MaterialUI } from "./components/pages/materialUI/MaterialUI.jsx";

function App() {
  return (
    <div>
      <MaterialUI />
      <ItemListContainer saludo="como estas" edad="15" />
    </div>
  );
}

export default App;
