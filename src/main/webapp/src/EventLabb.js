import React from "react";

export function EventLabb(props){

    const [counter, setCounter] = React.useState(0);

function click(){
    console.log("bam bam")
    setCounter(counter+100);
    
}

function clicker(){
    console.log("blip blop")
    setCounter(counter-100);
    
}

    return <div>
    <p> {counter} Bam Bam </p>
    <button onClick={click}>Click clock, watch out for the glock</button>
    <button onClick={clicker}>blip blop</button>
    </div>
}