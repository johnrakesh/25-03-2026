import { useState } from "react";
export function Conditional1(){


    const [show,setShow] = useState(false);

    function showmessage(){
        setShow(true);
    }
    return(
        <>
        <button onClick = {showmessage}>Click Me to see Message</button>
        {
            show == false ? "" : <p>Hi Hello</p>
        }
        </>
    )

}