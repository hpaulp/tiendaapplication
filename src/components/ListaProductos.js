import React,{useState, useEffect, useContext} from "react";
import { useProductos } from "../hooks/UseProductos";
import { Producto } from "./Producto";
import { ProductoContext } from "../contexts/ProductoContext";
import '../styles/listaproductos.css'

export const ListaProductos = () => {

	const [resultado,setResultado] = useState([]);
	const [busqueda,setBusqueda] = useState("")
	const [productocontexto, setProductocontexto] = useContext(ProductoContext);

	const navStyles = {
		padding: '10px',
	};
	
	const productos = useProductos();
	let filtered = [];
	
	const datos = e =>{
		e.preventDefault();
		let productoscopiados = [...productos];
		filtered = productoscopiados.filter( (dato) =>
			dato.nombre.toLowerCase().includes(busqueda.toLowerCase())
		)
		setResultado(filtered);
	}

	function cambiarState(e) {
		setBusqueda(e.target.value);
	}
	
	useEffect(() => {
		setResultado(productos);
		setProductocontexto(productos);
	},[productos]);
		
  return (
	<>
		<form onSubmit={datos} style={navStyles}>
			<input name="query" onChange={cambiarState} />
			<button type="submit">Buscar</button>
		</form>
		<div className="items-list">
		  {resultado.map((producto, idx) => {
			return <Producto key={producto.id} {...producto} />;
		  })}
		</div>
	</>
  );
};
