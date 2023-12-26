import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ProductoCarrito = ({ nombre, precio, id, image, marca }) => {
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
      const isItemsFound = productosActuales.find((item) => item.id === id);
      if (isItemsFound) {
        return productosActuales.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...productosActuales, { id, quantity: 1, precio }];
      }
    });
  };
  

  const cantidadPorProducto = obtenerCantidadPorId(id);

  return (
    <div className="item-box">Cantidad:
      {cantidadPorProducto > 0 && (
        <div className="item-quantity">{cantidadPorProducto}</div>
      )}

      <div>{nombre}</div>
	  <div>{marca}</div>
      <img src={image} width="80" height="55" alt={nombre}/>
      <div className="item-price">${precio}</div>
	  

      {cantidadPorProducto === 0 ? (
        <button className="item-add-button" onClick={() => agregarAlCarrito()}>
          + Agregar al carrito
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => agregarAlCarrito()}>
          + Agregar más
        </button>
      )}

      {cantidadPorProducto > 0 && (
        <button className="item-minus-button" onClick={() => quitarProducto(id)}>
          Quitar producto del carrito
        </button>
      )}
    </div>
  );
};
