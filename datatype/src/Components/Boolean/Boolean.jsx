import { useState } from "react"


export function BooleanExample()
{
    const [stock]=useState(true);
    return(
        <div className="container">
          <h1>Boolean Example</h1>
          <h2>stock : {stock}</h2>
          <h2>Stock : {(stock===true)?"In stock":"Out Of Stock"}</h2>
        </div>
    )
}