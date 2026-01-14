import { useEffect, useState } from "react"
import axios from "axios";

export function AxiosFetch()
{
   const [product,setProduct]=useState({title:null,price:0,image:null,rating:{rate:0,rating:0,review:0},offers:[]})

    function LoadProduct()
    {
        axios.get("Product.json")// Fetching product data using axios
        .then(response=>{// Getting response
            setProduct(response.data)// Setting product data to state
        })
    }

    useEffect(()=>//componentDidMount
    {
    LoadProduct();// Loading product data
    },[])

    return(
         <div className="row ">
            <div className="col-3">
            <img src={product.image} width="100%"/>
            </div>
            <div className="col-9">
                <div className="fs-1">{product.title}</div>

                <div className="mt-2"><span className="badge bg-success text-white rounded ">{product.rating.rate} <span className="bi bi-star-fill"></span> </span> 
                <span className="mx-2 fw-bold text-secondary">{product.rating.rating.toLocaleString('en-in')} ratings & {product.rating.review} reviews</span> </div>

                <div className=" my-2 fs-1 fw-bold">{product.price.toLocaleString('en-IN',{style:'currency',currency:"INR",maximumFractionDigits:0})}</div>
                <div className="mt-4">
                    <h6>Avaialable Offers : </h6>
                    <ul className="list-unstyled">
                      {product.offers.map((offer,index)=>(<li className="bi bi-tag-fill text-success" key={index}><span className="text-secondary">{offer}</span></li>))}
                    </ul>
                  
                </div>
            </div>
        </div>
    )
}