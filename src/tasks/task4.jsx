import { useState } from "react"

export function Task4(){

    const [counter,setCount] = useState(0);

    return(
        <>
        <button onClick ={()=>setCount((prev)=>prev+1)}>+</button>
            Count: {counter}
            <button onClick ={()=>setCount((prev)=>{
                if(prev ==0)
                    return 0;
                return prev-1})}>-</button>
        </>
        
    )
}