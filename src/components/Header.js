import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header(){
    return (
            <header>
                    <Link to="/home"><h1>SARITA MIA</h1></Link>
                    <NavBar />
            </header>    
        );
       
};

export default Header