import React from "react";
import {useState,useEffect} from "react";

function Productos() {
    const [pintar,setPintar] = useState([]);
    
     useEffect(() => {
         fetch('https://fakestoreapi.com/products') 
         .then(res=>res.json()) 
         .then(json=> setPintar(json)) 
         .catch((error) => 
         console.log(error)
         )
     }, []);

    return(
        <section>
            
            {pintar.map(item => <p>{item.title}</p>)}
        </section>
    )
   
}

export default Productos;