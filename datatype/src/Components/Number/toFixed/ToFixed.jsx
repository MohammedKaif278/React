import { useState } from "react"

export function ToFixed()
{
    const [price]=useState(35000.1234);
    return (
        <div className="container">
            <h1>To Fixed - Count Decimal</h1>
           <h4 style={{color:"red"}}>price : {price.toFixed(2)}</h4>

        </div>
    )
}