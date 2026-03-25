import { useState } from "react";

export function InputFieldState(){
    
    let [inputfield, setInputField] = useState();

    function input(){
        
        let input = document.getElementById("inputfield");
        inputfield = input.value;
      
        setInputField(inputfield);
    }
    
    return(
        <div>
            <input id="inputfield" type="text" onChange={input} placeholder="type something"></input>
            {inputfield && <p>Hello {inputfield}</p>}
        </div>
    )
}