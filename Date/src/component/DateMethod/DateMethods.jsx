import { useState } from "react"
import moment from "moment"

export function DateMethods()
{
    const [today]=useState(new Date())
    return (
        <div className="container text-bg-dark p-4">
            <h1>Date Methods :-</h1>
            <div className="container text-bg-danger p-4 mt-4  ">
             <h1>This is normal date method</h1>
            <h2>Today is : {today.toLocaleDateString()}</h2>
            </div>
           
           <div className="container text-bg-primary p-4 mt-4 ">
            <h1>This is moment library date </h1>
            <h2>{moment(today).format("dddd , DD-MM-YYYY , h:mm:ss a")}</h2>
           </div>

        </div>
    )
}