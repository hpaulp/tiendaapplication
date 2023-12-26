import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";

export const Producto = ({ nombre, precio, id, image, marca }) => {
  const [cart, setCart] = useContext(CartContext);
  
  const obtenerCantidadPorId = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };
  
  const quitarProducto = (id) => {
    setCart((productosActuales) => {
      if (productosActuales.find((item) => item.id === id)?.quantity === 1) {
        return productosActuales.filter((item) => item.id !== id);
      } else {
        return productosActuales.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

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

  const cantidadPorItem = obtenerCantidadPorId(id);

  return (
    <div className="item-box">
      {cantidadPorItem > 0 && (
        <div className="item-quantity">{cantidadPorItem}</div>
      )}

      <div>{nombre}</div>
	  <div>{marca}</div>
	  <Link to={"/productoindividual/" + id }>
		<img src={image} width="80" height="55" alt={nombre}/>
      </Link>
	  
	  <div className="item-price">${precio}</div>
	  

      {cantidadPorItem === 0 ? (
        <button className="item-add-button" onClick={() => agregarAlCarrito()}>
          + Agregar al carrito
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => agregarAlCarrito()}>
          + Agregar más
        </button>
      )}

      {cantidadPorItem > 0 && (
        <button className="item-minus-button" onClick={() => quitarProducto(id)}>
          Quitar producto del carrito
        </button>
      )}
    </div>
  );
};
