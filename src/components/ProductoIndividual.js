import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { useParams } from 'react-router-dom';
import { ProductoContext } from "../contexts/ProductoContext";
import { Link } from "react-router-dom";

export const ProductoIndividual = () => {
	const {id} = useParams();
	
	const [cart, setCart] = useContext(CartContext);
	const [productocontexto, setProductocontexto] = useContext(ProductoContext);
	let filtered = [];
		
	filtered = productocontexto.filter( (dato) =>	dato.id===id);
	
	let precio = filtered[0].precio;	
	let nombre = filtered[0].nombre;
	let image = filtered[0].image;

	const agregarAlCarrito = () => {
		setCart((productosActuales) => {
		  const esProductoEncontrado = productosActuales.find((item) => item.id === id);
		  if (esProductoEncontrado) {
			return productosActuales.map((item) => {
			  if (item.id === id) {
				return { ...item, quantity: item.quantity + 1 };
			  } else {
				return item;
			  }
			});
		  } else {
			return [...productosActuales, { id, quantity: 1, precio, nombre, image }];
		  }
		});
	  };
	
	
	return (
		<>
			<img src={filtered[0].image} width="25%" alt={filtered[0].nombre}/>
			<h3>{filtered[0].nombre}</h3>
			<h3>Marca: {filtered[0].marca}</h3>
			<h3>Modelo: {filtered[0].modelo}</h3>
			<h3>{filtered[0].caracteristicas}</h3>
			<h3>${filtered[0].precio}</h3>
			<button onClick={() => agregarAlCarrito()}>
			  Agregar al carrito
			</button>
			<Link to="/">
				<button>Seguir comprando</button>
			</Link>
		</>
	);

};
