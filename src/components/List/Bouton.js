import React, { useState } from "react";
import Modal from "./Modal";
import './Bouton.css';
const Button = ()=>{
    const [state, setState] = useState(false)
    return (
        <>
        <button className="Bouton" onClick={()=>{setState(true)}}>Add</button>
        { state && <Modal close={setState}/> }
        
        </>
        
    )
}

export default Button;