import React from "react";
import { Route, Routes } from "react-router-dom";

import Compra from "./pages/Compra"

export default () => {
    return(
        
        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/compra" element={ <Compra /> }/>
            <Route path="*" element={ <ErrorPage /> }/>
        </Routes>

    )
 }