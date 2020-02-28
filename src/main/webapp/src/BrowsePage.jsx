import React from "react";
import RecipeBlock from "./Recipe-block";
import navigate from "./App";

export default function RecipeBrowse(props){
    function onLinkClick(id){
        props.onNavigate(id);
    }
    return(

        <>
        <div id="RecipeBrowse">

        <RecipeBlock onNavigate={props.onNavigate}/>


        </div>
        </>
    )
}

