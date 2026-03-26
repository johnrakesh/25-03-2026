import { useState } from "react";

export function TodoList() {


    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    function add() {
        setList([...list, task]);
    }

    function fundelete(e){
        let index = Number(e.target.dataset.index);
        if(e.target.tagName === "BUTTON"){
            setList(list.filter((_,i)=> i !== index ));
        }
    
    }

    return (
        <div>
            <input type="text" value={task}
                onChange={(e) => setTask(e.target.value)}></input>
            <button onClick={add}>Add</button>
           
            {
              
                <ul onClick= {fundelete}>
                    { 
                        list.map((item,index) => <li key={index}> {item} <button data-index = {index}>Delete</button></li>)
                    } 
                </ul>
            }

             {list.map((item,index) =><p key={index}>{item}</p>)}

        </div>

    )
}