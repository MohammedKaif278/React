import { useState } from "react"


export function ToPrecision()
{
    const [price]=useState(35000.564)
    return(
        <div className="container">
            <h1>To Precision - <span>Count Overall</span></h1>
            <h4 style={{color:"red"}}>price : {price.toPrecision(6)}</h4>
        </div>
    )
}