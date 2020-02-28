import React from 'react';
import ReactDOM from 'react-dom';



export default function Rform(props){
    function onLinkClick(id){
        props.onNavigate(id);
    }

    const [nut, setNut] = React.useState([
        <input type="text" className="IInput" 
        placeholder="Enter an ingredient"/>
    ]);


    return(

        <>
        <div className="Rform">

        <h1>
            Title
        </h1>
        <input className="Inputfield" type="text" placeholder="Enter a fitting title..."/>
        

        <h3>
            Ingredients
        </h3>
        <div className="IngredientsInputWrap">
            {nut}
        </div>
        <br/>
        <button id="add" onClick={AddI}>+</button>

        <h3>
            Instructions:
        </h3>

        <textarea className="Instructions" rows="5" cols="60" placeholder="Liten katt? eller två?"/>
        <br/>
        <input type="submit" value="Post"/>

        </div>
        </>
    )
    function AddI(){
        let newArray = [...nut];
        newArray.push(<><br/><input type="text" className="IInput" 
        placeholder="Enter an ingredient"/></>);
        setNut(newArray);
    }
}


