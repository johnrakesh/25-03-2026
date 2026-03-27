import { useState } from "react"

export function Task1(){

    const [names] = useState(["Raj","Prakash","Sid","Sam","Gideon"]);

    return(
        <div>
            { names.map(name => (
                <p>{name}</p>
            ))}
        </div>
        
    )
}