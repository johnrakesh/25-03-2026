import { useEffect, useState } from "react";
export function Home(){

    const [product,setProduct]= useState(null);

    async function homeproduct(){

        const response = await fetch("https://fakestoreapi.com/products/11");
        const data = await response.json();
        console.log(data);
        setProduct(data);
    }

    useEffect(()=>{
         homeproduct();
    },[])
   

    return(
        <>
        <h2 style={{textAlign:"center"}}>Welcome to Shopping Website</h2>
        <img src={product?.image} alt="image not found" width="400px" height="300px" style={{display:"block", margin:"auto"}}></img>
        </>
        
    )
}