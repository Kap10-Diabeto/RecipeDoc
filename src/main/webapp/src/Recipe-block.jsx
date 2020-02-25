import React from "react";
import placeholder from './placeholder.png';
import "./Style.scss";
import onLinkClick from  "./App";

export default function RecipeBlock(props){
    return(
        <>
        <div className="Block">
        
            <img className="Courseimg" src={placeholder}/>


            <div className="info">

            <h2 className="r_title">Pannkakor</h2>    

        <p className="shortinfo">
        Gör traditionella tunna pannkakor genom att blanda mjöl, mjölk och ägg och 
        lite salt till en jämn smet. Stek smeten 
        till tunna och smarriga pannkakor och servera med en söt sylt.
        </p>


        <button onClick={() => onLinkClick(4)} className="btn btn1">Go to Recipe</button>

        

        </div>

        </div>
        
        </>
    )
}
