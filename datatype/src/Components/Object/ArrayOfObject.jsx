import { useState } from "react"


export function ArrayOfObject()
{
    const [products]=useState([
        {Name : "Iphone 14",Price : 90000},
        {Name : "Samsung S22",Price : 80000},
        {Name : "Oneplus 10T",Price : 60000}
    ])
    return(
        <div className="container">
            <table className="table table-hover table-bordered bg-black text-white border border-5">
                <thead>
                    <th>Name </th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {
                       products.map((product,index)=>
                        <tr key={index}>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                        </tr>
                       ) 
                    }
                </tbody>

            </table>
        </div>
    )
}