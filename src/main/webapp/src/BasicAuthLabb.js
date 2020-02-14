import React from "react";

async function fetchProtectedData(authString){
    const res = await fetch("/protected", {
            method: "GET",
            headers: {
                'Authorization': authString
            }
    });

    const data = await res.text();
    return data;
}


export default function BasicAuthLabb(props){
    const[text, setText] = React.useState("Hello Basic Auth");
    const[authString, setAuthString] = React.useState(undefined);

    // async function onClick(){
    //     const newText = await fetchProtectedData(authString);
    //     setText(newText);

    // }

    async function onLogin(){
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        setAuthString( `Basic ${btoa(username+":"+password)}`);
        console.log(password, username, authString);
        const newText = await fetchProtectedData(authString);
        setText(newText);
    }

    return <div>
        <p><label htmlFor="username">Username:</label>
        <input type="text" id="username"></input></p>
        <p><label htmlFor="password">Password:</label>
        <input type="password" id="password"></input></p>
        <p>
        <button onClick={onLogin}>Login</button>
        </p>


        
        <p>
            {text}
        </p>
    </div>
}