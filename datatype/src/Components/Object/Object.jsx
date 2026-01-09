import { useState } from "react"



export function ObjectExample()
{
    const [product]=useState({Name:"Samsung Tv",Price:45000,ShippedTo:["Delhi","Mumbai","Chennaai"],Rating:{Rate:4.5,count:600}})

    return(
        <div className="container">
            <h1>Object Example</h1>

            <h2>Product Table</h2>
            <table className="table bg-black text-white">
                <thead>
                    {Object.keys(product).map((heading,index)=><th key={index}>
                        {heading}
                    </th>)}
                </thead>
                
            </table>
        <h4>Product Name : {product.Name}</h4>
        <h4>Product Price : {product.Price.toLocaleString('en-in',{style:"currency",currency:"INR"})}</h4>
        <h4>Shipped To : {product.ShippedTo.map((location,index)=><li key={index}>{location}</li>)}</h4>
        <h4>Rating : {product.Rating.Rate} ({product.Rating.count})</h4>

        </div>
    )
}