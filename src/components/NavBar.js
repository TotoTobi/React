import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {contexto} from "./CustomProvider.js";



function NavBar(){

    const valorContexto = useContext(contexto)
    
    return(
        <nav className="">                 
            <Link to="/QuienSoy">Quienes somos</Link>
            <Link to="/Productos">Nuestros productos</Link>
            <Link to="/Carrito">
                <div className="material-symbols-outlined">
                    shopping_cart_checkout 
                </div>  
                <span>{valorContexto.cantidad}</span>
            </Link>
            
            
        </nav>
    );
};

export default NavBar;