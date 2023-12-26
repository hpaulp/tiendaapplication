import { ProductosRouter }  from './routes/ProductosRouter';
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { ProductoProvider } from "./contexts/ProductoContext";

function App(){
  
  return (
	<>
    <ProductoProvider >
      <ShoppingCartProvider>
        <ProductosRouter></ProductosRouter>
      </ShoppingCartProvider>
    </ProductoProvider>
	</>
  );
};

export default App;