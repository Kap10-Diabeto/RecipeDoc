import React from "react";
import placeholder from './placeholder2.jpg';
import "./Style.scss";
import onLinkClick from  "./App";
import navigate from "./App";


export default function RecipeBlock(props){
    return(
        <>
        <div className="Block">
        
            <img className="Courseimg" src={placeholder}/>


            <div className="info">

            <h2 className="r_title">Pannkakor <p className="b-author">Författad av:<br/>-Knarkola</p></h2>    
            

        <p className="shortinfo">
        Gör traditionella tunna pannkakor genom att blanda mjöl, mjölk och ägg och 
        lite salt till en jämn smet. Stek smeten 
        till tunna och smarriga pannkakor och servera med en söt sylt.
        </p>


        <button onClick={() => props.onNavigate(4)} className="btn btn1">Go to Recipe</button>

        

        </div>

        </div>
        
        </>
    )
}
