import React from "react";

function NavBar(){
    return(
        <nav className="">                 
            <a href="">Quienes somos</a>
            <a href="">Nuestro productos</a>
            <a href="">Nuestra ubicacíon</a>
            <span className="material-symbols-outlined">
                shopping_cart_checkout
            </span>
        </nav>
    );
};

export default NavBar;