import React, { createContext, useState } from "react";

export const ProductoContext = createContext(null);

export const ProductoProvider = ({ children }) => {
  
  const [productocontexto, setProductocontexto] = useState([]);
  
  return (
	<ProductoContext.Provider value={[ productocontexto, setProductocontexto ]}>
		{children}
    </ProductoContext.Provider>
  );
};
