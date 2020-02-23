import React from "react";
import "./Style.scss";
import Start from "./Start.js";
import Drop from "./Drop.jsx";
import logo from './RecipeDoc.png'
import RecipeBlock from "./Recipe-block";


function Meny(props){
    function onLinkClick(id){
        props.onNavigate(id);
    }

    return(
       
        <>
        <div className="MenuContainer">

        
        

        {/* <button className="btn btn1">About</button>
        <button className="btn btn2">Contact</button> */}
        <nav>
        <img class="RecipeDoc" src={logo} alt="RecipeDoc"/> 
            <div className="toggle">
                <span>Menu</span>
                </div>
            <ul>
                <li><a href="#">Browse</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Log In</a></li>
                <li><a href="#">Account</a></li>
            </ul>
        </nav>

        </div>

        </>
    )

}



    export function App(props){
        const [currentPage, setCurrentPage] = React.useState(null);

        function navigate(id){
            console.log(`Navigate: ${id}`)
            setCurrentPage(id);
        }

        let currentContent = <RecipeBlock />;
        
        if(currentPage === 1)
        currentContent = <RecipeBlock />

        else if (currentPage === 2)
        currentContent = <p>Under construction #1</p>

        else if (currentPage === 3)
        currentContent = <p>Under construction #2</p>

        return ( 
        <div className="app">
            <Meny onNavigate={navigate} />
            <div className="guistate-content">
                {currentContent}
            </div>
        </div>)
    }

    
