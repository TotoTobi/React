import React from "react";
import {useState,useEffect} from "react";



function Main (props){
    const [pintar,setPintar] = useState([]);
    
    const respuesta = () => {
        fetch('https://fakestoreapi.com/products') 
        .then(res=>res.json()) 
        .then(json=> setPintar(json)) 
        .catch((error) => 
        console.log(error)
        )
    };
    respuesta();
    
    const [contador, setContador] = useState(0);
    return(
        <main>
            {/* <p>{props.params}</p> */}
            <button onClick= {() => setContador(contador + 1)}>{contador}Bienn tutuuusss entendiste useState</button>
            <button onClick={setPintar(pintar)}>Hace click padre para mas frases del comandante</button>
            {pintar.map(item => <p>{pintar.name} </p> )}
        </main>
        );
};

export default Main