import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoPintonet.jpeg"
import { CartContext } from "../contexts/ShoppingCartContext";
import '../styles/menu.css'

export const Menu = () => {
  const [cart, setCart] = useContext(CartContext);
  const quantity = cart.reduce((acc, curr) => {
		return acc + curr.quantity;
	}, 0);
  
 
  return (
    <nav  >
      <Link to={"/"} className="link" >
      <img src={logo} alt="Logo" className="logo" />
      <div className="titulo">
      <h2>Tienda de Productos Tecnológicos</h2>
    </div>        
      </Link>
      <ul className="nav-list" >
        <Link to={"/carrito"} className="linkul">
          <li>
            Items en el carrito: <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
