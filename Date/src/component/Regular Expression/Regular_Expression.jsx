import { useState } from "react"


export function Regular_Expression()
{
    const [pattern]=useState(/\+91\d{10}/);
        const [mobile]=useState('+918956507490');
    return (
        <div className="container mt-2 p-4 text-bg-dark">
            <h1>Regular Expression :-</h1>
            <h2>{(mobile.match(pattern))?"valid":"invalid"}</h2>


        </div>
    )
}