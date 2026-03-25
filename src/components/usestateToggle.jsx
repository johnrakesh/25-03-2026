import { useState } from "react";

export function Toggle() {

    const [message] = useState('Hello React Developer');

    function show() {
        let div = document.getElementById("div");
        div.style.display = "block";
    }

    return (
        <div>
            <button onClick= {show} >Show Message</button>
            <div id="div" style={{display: "none"}}>{message}</div>
        </div>

    )
}