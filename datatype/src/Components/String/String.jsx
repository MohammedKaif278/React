import { useState } from "react"


export function StringExample()
{
    const [errorClass]=useState("text-danger")
    return(
        <div className="container">
            <h1>String Example</h1>
            <h2 className={"border border-5 "+errorClass}>String 1</h2>
            <h2 className={`border border-5 ${errorClass}`}>String 2</h2>
        </div>
    )

}