import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage"
import Contato from "./pages/Contato"
import Compra from "./pages/Compra"

export default () => {
    return(
        
        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/Contato" element={ <Contato /> }/>
            <Route path="/Compra" element={ <Compra /> }/>
        </Routes>

    )
 }
 