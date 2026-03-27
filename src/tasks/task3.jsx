import { useState } from "react"

export function Task3(){

    const [isButton, setButton] = useState(false);

    return(
        <>
        <button onClick={()=>setButton(true)}>Click to show the Message</button>
        {
            isButton && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti est, odit at earum beatae ratione asperiores nulla quae cum qui sequi necessitatibus molestiae illo quod ullam. Voluptate eos reiciendis necessitatibus.<br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro omnis modi aut nam quo maiores sunt animi nobis distinctio a nostrum quas libero expedita dolorem, laborum eaque. Non, id doloribus?</p>
        }
        </>
    )
}