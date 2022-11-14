import React from "react";
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import {BrowserRouter} from 'react-router-dom';
function App() {
    return(
    <BrowserRouter>
        <Header />
        <Main />
    </BrowserRouter>
    )  
}

 export default App;
