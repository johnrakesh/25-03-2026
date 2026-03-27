import { useState } from "react"

export function Task2(){

    const [username,setUsername] = useState(false);

    return(
        <>
            <input type="text"  onBlur={(e)=>setUsername(e.target.value)} />
            {
                username && <p>{`Hello ${username} Welcome! We Wish You All the Best`}</p>
            }
        </>
    )
}