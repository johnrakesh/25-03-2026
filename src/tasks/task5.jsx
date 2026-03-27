import { useState } from "react"

export function Task5(){

    const [color, setColor] = useState("#000000");

    return(
        <>
            <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}></input>
            <div style={{height:200, width:200, backgroundColor: color, color:"white"}}>Hello Hi</div>
        </>
        
    )
}