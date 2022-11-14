import React from "react";
import {useState,useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Productos from "./Productos";
import QuienSoy from "./QuienSoy";
import Carrito from "./Carrito";

function Main (){

    return(
        <main>
            <Routes>
                {/* <Route path="/URL" element={<componente/>} /> <--- Ahi Tambien podemos 
                escribir tipo como <p>Hola, esto tambien es valido</p> pero no me va a mostrar 
                comocomponente ya que soy una simple etiqueta p "  */}
                <Route path="/Home" element={<Home />} />
                <Route path="/QuienSoy" element={<QuienSoy />} />
                <Route path="/Productos" element={<Productos />} />
                <Route path="/Carrito" element={<Carrito />} />
                <Route/>
            </Routes>
            {/* {pintar.map(item => <p>{item.title} </p> )} */}
        </main>
        );
};

export default Main;