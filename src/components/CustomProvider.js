import React from "react";
import { createContext, useState } from "react";


export const contexto = createContext();

const {Provider} = contexto;

function CustomProvider({children}) {
    
    const {carrito, setCarrito} = useState([
        {id: "1", products:"remera", price:10},
        {id: "2", products:"jeans", price:15}
    ]);

    const {total, setTotal} = useState(4);

    const valorContexto = {
        producto : carrito,
        cantidad: total,
    };

    

    return(
        <Provider value={valorContexto}>
            {children}
        </Provider>
        )
}

export default CustomProvider;