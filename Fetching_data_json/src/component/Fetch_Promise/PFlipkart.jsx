import { useEffect, useState } from "react"


export function PFlipkart()
{
    const [product,setProduct]=useState({title:null,price:0,image:null,rating:{rate:0,rating:0,review:0},offers:[]})

    function LoadProduct()
    {
        fetch("Product.json")// Fetching product data

        .then(response=>{// Response in json format
            
            return response.json();// Converting json data to javascript object
        })
        .then(data=>{// Getting javascript object
            setProduct(data)// Setting product data to state
        })

    }

    useEffect(()=>
    {
        LoadProduct();
    },[])
    return (
         <div className="row ">
            <div className="col-3">
            <img src={product.image} width="100%"/>
            </div>
            <div className="col-9">
                <div className="fs-1">{product.title}</div>

                <div className=""><span className="badge bg-success text-white rounded ">{product.rating.rate} <span className="bi bi-star-fill"></span></span> 
                <span className="mx-2 fw-bold text-secondary">{product.rating.rating.toLocaleString('en-in')} rating & {product.rating.review} reviews</span> </div>

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