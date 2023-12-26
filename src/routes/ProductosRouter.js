import NotFound from '../views/NotFound';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ViewCarrito } from '../views/ViewCarrito';
import { ViewCheckout } from '../views/ViewCheckout';
import { ViewProductos } from "../views/ViewProductos";
import { ProductoIndividual } from "../components/ProductoIndividual";
import { Menu } from "../components/Menu";

export const ProductosRouter = () => {
    
    return(
        <BrowserRouter>
			<Menu />
            <Routes>
				<Route path="/" element={<ViewProductos />} />
				<Route path="/carrito" element={<ViewCarrito />} />
				<Route path="/checkout" element={<ViewCheckout />} />
				<Route path="/productoindividual/:id" element={<ProductoIndividual />} />
				<Route path="*" element={<NotFound />}/>
				
            </Routes>
        </BrowserRouter>
    );
};