import React from "react";
import { Link } from "react-router-dom";


function NavBar(){
    return(
        <nav className="">                 
            <Link to="/QuienSoy">Quienes somos</Link>
            <Link to="/Productos">Nuestros productos</Link>
            <Link to="/Carrito">
                <span className="material-symbols-outlined">
                    shopping_cart_checkout
                </span>
            </Link>
            
        </nav>
    );
};

export default NavBar;