import { useState } from "react";

export function CondtionalRendering() {

    const [classatt, setClass] = useState("");

    function color() {

        setClass("red");

    }

    return (
        <div id="text">
            {
                classatt == "red" ?
                    <p style={{ color: "red" }} onClick={color}>Hello! Click me to Change the text color to Red</p> :
                    <p onClick={color}>Hello! Click me to Change the text color to Red</p>
            }

        </div>
    )
}