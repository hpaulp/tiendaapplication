import { ProductoCarrito } from "../components/ProductoCarrito";

export const CarritoDetalle = (props) => {
	let carrito = props.carrito;
	return(
		<div className="items-list">
		  {carrito.map((producto, idx) => {
			return <ProductoCarrito key={producto.id} {...producto} />;
		  })}
		</div>
	)

};
