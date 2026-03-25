import { useState } from "react";

export function TodoList() {

    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    function add() {
        setList([...list, task]);
    }


    return (
        <div>
            <input type="text" value={task}
                onChange = {(e) => setTask(e.target.value)}></input>
            <button onClick={add}>Add</button>
            {
                <ul>{list.forEach((item, index) =>{
                    let A = <li key={index}>{item}</li>
                    return A;
                }
            )}
            </ul>
            }
            <ul>
                {/* {
                   list.map(item => <li>{item}</li>)
                } */}
            </ul>
            
        </div>

    )
}