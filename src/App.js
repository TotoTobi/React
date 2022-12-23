import React from "react";
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import {BrowserRouter} from 'react-router-dom';
import Provider from "./components/CustomProvider";

function App() {
    return(
        <Provider>
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
        </Provider>
    )  
}

 export default App;
