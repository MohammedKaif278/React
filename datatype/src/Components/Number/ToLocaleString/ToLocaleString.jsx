import { useState } from "react";


export function ToLocaleString()
{
    const [price]=useState(35000.564);
    const [rate]=useState(0.12);
    const [weight]=useState(60)
    return (
        <div className="container">
            <h1>ToLocaleString - format with regional notations and styles</h1>
            <h4 style={{color:"red"}}>price : {price.toLocaleString('en-in')}</h4>

        <br />
            <h2>ToLocaleString - Currency : - Gives The currency Icon</h2>
            <h5 style={{color:"red"}}>price : {price.toLocaleString('en-in',{style:"currency",currency:"INR"})}</h5>


         <br />
            <h2>ToLocaleString - Percentage : - Convert Value to percentage</h2>
            <h5 style={{color:"red"}}>Rate : {rate.toLocaleString('en-in',{style:"percent"})}</h5>

            <br />

            <h2>ToLocaleString - Unit : - Number will display with certain units</h2>
            <h5 style={{color:"red"}}> Weight : {weight.toLocaleString('en-in',{style:"unit",unit:"kilogram"})}</h5>
        </div>
    )
}