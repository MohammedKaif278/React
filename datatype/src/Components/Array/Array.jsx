import { useEffect, useState } from "react"


export function ArrayExample()
{
    const [categories]=useState(["Electronics","Fashion","Toys","Groceries"])

    useEffect(()=>{
        
         /*
            setCategories([...categories,"Sports"])
        Spread Operator Adding new value to existing array*/

        /*
         setCategories(["Furniture"])
         setter can reinitialize the array*/
    },[])

    return(
        <div className="container">
            <h1>Array Example</h1>
            <ol>
                {
                    //Key value Pair is mandatory while using map function in react 
                    // key is used to identify each element uniquely
                    categories.map((category,index) =><li key={index}>{category}</li>)
                }
            </ol>
            <br />
            <select name="" id="">
                {
                    categories.map((category,index)=> <option key={index}>
                        {category}
                    </option>)
                }
            </select>

                <br />
                <br />
                <ul className="list-unstyled">
                    {
                        categories.map((category,index)=> <li key={index}><input type="checkbox" name="" id="" /><label htmlFor="">{category}</label></li>)
                    }
                </ul>

                <br />
                

                <nav>
                    {
                        categories.map((category,index)=> <a className="mx-4 text-decoration-none bg-black text-white pointer-event" key={index}>{category}</a>)
                    }
                </nav>

        </div>
    )
}