import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";

export const Checkout = () => {
	
  const [cart, setCart] = useContext(CartContext);
  
  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const precioTotal = cart.reduce(
    (acc, curr) => acc + curr.quantity * parseFloat(curr.precio),
    0
  );
  
  function encerarCarrito(){
	  setCart([]);
  }

  return (
	<>
		<h1>Checkout </h1>

		<div className="cart-container">
		  <div>
			<h3>La orden por los productos seleccionados ha sido generada correctamente</h3>
			<div>Ud. ha comprado : {cantidad} productos</div>
			<div>Por un valor total de: ${parseFloat(precioTotal)}</div>
			<p></p>
			<h3>Gracias por su compra!</h3>
	
			<Link to="/">
				<button onClick={encerarCarrito}>Encerar el carrito</button>
			</Link>
	
			
		  </div>
		</div>
	</>
  );
};
