import React from "react";
import "./GUI.css";
function NavBar(props){

    function onLinkClick(id){
        props.onNavigate(id);
    }
return (
    <div>
    <nav>
     <span onClick={() => onLinkClick(1)}>S1</span>
     <span onClick={() => onLinkClick(2)}>S2</span>     
     <span onClick={() => onLinkClick(3)}>S3</span>
     </nav>
</div>
)
}

function Lista(props) {
    return (
        <ul>
            <li>Hehj</li>
            <li>Tja</li>
            <li>Bror</li>
        </ul>
    )
}


export default function GUIstate(props){
    const [currentPage, setCurrentPage] = React.useState(1);

    function navigate(id){
        console.log(`Navigate: ${id}`)
        setCurrentPage(id);
    }

    let currentContent = null;
    if( currentPage === 1)
       currentContent = `Välkommen. Sida ${currentPage}`;

    else if(currentPage === 2){
        currentContent = <button>Knapp på sida 2</button>
    }

    else if(currentPage === 3){
        currentContent = <Lista />;
    }
    
   return (
       <div>
           <NavBar onNavigate={navigate}/>
       <div className="guistate-content"> 
        {currentContent}
       </div>
       </div>
   )
}
