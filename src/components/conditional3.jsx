import { useEffect } from "react";
import { useState } from "react";

export function Conditional3(){

    const [loading,setLoading] = useState(true);
    const [items] = useState(["bat","ball","cricket"])

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 2000)
    }, []);

    return(

        <>  
            
            {
                loading? <p>Loading...</p> : (
                    <ul>{items.map((item) => {
                        return <li>{item}</li>
                        }
                        )}
                    </ul>
                )
            }
        
        </>
    )
}