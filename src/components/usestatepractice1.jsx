import { useState } from "react"

export function Practice(){

    const [number,setNumber] = useState(0);

    function counterInc(){
        setNumber(prev => prev+1);
    }

    function counterDec(){
        
        setNumber(prev => {
            if(prev<=0){
                return 0;
            }else(prev>=0)
                return prev = prev -1;
            
        });
    }

    return(
        <div>
            <button onClick={counterInc}>Increment</button>
            <button onClick ={counterDec}>Decrement</button>
            <div>Count is: {number}</div>
        </div>
    )
}