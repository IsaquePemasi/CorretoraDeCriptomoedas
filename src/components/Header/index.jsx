import React from 'react'
import {Link} from "react-router-dom";
import "./styles.css";

export const Header = () => {
  return (
    <div class="caixa" >
       <Link to={"/"}>Home</Link>
        <Link to={"/Contato"}>Contato</Link>
        <Link to={"/Compra"}>Compra</Link>
    </div>
  )
}