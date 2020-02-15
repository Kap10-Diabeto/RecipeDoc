import React from "react";
import "./Style.scss";
import Start from "./Start.js";

{/* <script src="https://code.jquery.com/jquery-3.4.1.js"></script> */}

// $(document).ready(function(){
//     $('toggle span').click(function(){
//         $('ul').toggleClassName('active')
//     })
// })

 export function myFunction(){
    var element = document.getElementsByClassName("toggle");
    element.classList.toggle("active");
 }