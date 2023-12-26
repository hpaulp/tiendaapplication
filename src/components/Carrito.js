import React, { useContext } from "react";
import { CarritoDetalle } from "./CarritoDetalle";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";
import '../styles/carrito.css' 

export const Carrito = () => {
	
  const [cart, setCart] = useContext(CartContext);
  
  const cantidad = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const precioTotal = cart.reduce(
    (acc, curr) => acc + curr.quantity * parseFloat(curr.precio),
    0
  );

  return (
	<>
		<h1>Carrito de compras </h1>
		<CarritoDetalle carrito={cart} />	
		
		<div className="cart-container">
		  <div>
		  { cart.length>0 ? (
		    <div>
			<div>Items en el carrito: {cantidad}</div>
			<div>Total: ${parseFloat(precioTotal)}</div>
			<Link to="/checkout">
				<button>Checkout</button>
			</Link>
			</div>
			) : (
				<h3>El carrito está vacio</h3>
			)
		  }
		  </div>
		</div>
	</>
  );
};
