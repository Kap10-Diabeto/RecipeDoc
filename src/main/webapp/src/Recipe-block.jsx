import React from "react";
import placeholder from './placeholder.png';
import "./Style.scss";

export default function RecipeBlock(props){
    return(
        <>
        <div className="Block">
        
        <img className="Courseimg" src={placeholder}/>

        <div className="info">

        <p>
            varför fungerar det inte?
        </p>

        </div>

        </div>
        
        </>
    )
}
