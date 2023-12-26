import React, { createContext, useState } from "react";
import '../styles/shoppingcart.css'; 

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  
  return (
	<CartContext.Provider value={[ cart, setCart ]}>
		{children}
    </CartContext.Provider>
  );
};
