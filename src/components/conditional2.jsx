import { useState } from "react";

export function Conditional2(){

 const [isLogged, setLogged] = useState(true)

 let button;

 function click(){
    setLogged(false)
 }

 if(isLogged){
   button = <button onClick={click}>Logout</button>
 }else{
   button = <button>Login</button>
 }

 return(
   <div>
      {button}
   </div>
 )
}