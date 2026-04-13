import { useEffect, useState } from "react"
import "../fetch-axios/cards.css"

import axios from "axios"

export function Mens(){

    const [product, setdata] = useState([]);

    useEffect(()=>{
        async function getMensFashion(){
            /*---Using Fetch-----*/
            // const response = await  fetch("https://fakestoreapi.com/products");
            // const data = await response.json();
        try{
            const response = await axios.get("https://fakestoreapi.com/products")
            console.log(response);
            setdata(response.data);
            }
        catch(error){
            console.error("Error:", error);
        }
        }

        getMensFashion();
      
    },[])

      console.log(product);

    return(
        <>
        <h2>Mens</h2>
        <div className="card-container">
        {
            product.map((item)=>(
                
                <div className="card">
                    <h4>{item.category}</h4>
                    <hr></hr>
                    <img src={item.image} alt="image not available"></img>
                    <hr></hr>
                    <p>Description: {item.description}</p>
                    <hr></hr>
                    
                    <h5><b>Price:</b>&#8377;{item.price}</h5>
                </div>
             
            ))
        }
        </div>
        </>
    )
}