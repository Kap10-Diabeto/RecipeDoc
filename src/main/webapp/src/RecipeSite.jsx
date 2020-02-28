import React from 'react';
import placeholder from './placeholder2.jpg';

export default function RecipeSite(props){
    return(
        <>
            <div className="RecipeSite">

                <h1>
                    Pannkakor
                </h1>

                <h2>Författad av: <strong>Knarkola</strong></h2>

                <img src={placeholder} className="R_img" alt=""></img>

                <h3>Ingredients:</h3>
                <ul>
                    <li>En katt</li>
                    <li>Shreks specialost</li>
                    <li>Big-Tor</li>
                    <li>En smula himlastoft</li>
                    <li>2l Mjölk</li>
                </ul>

                <h3>Instructions:</h3>
                <p>
                Blanda mjöl och salt i en bunke. Vispa i hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen.
                Smält smöret i stekpannan och vispa ner i smeten. Stek tunna pannkakor av smeten i en stek- eller pannkakspanna.
                Servera med sylt, bär eller frukt.
                </p>

            </div>
        </>
    )};