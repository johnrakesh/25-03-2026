import { useState } from "react";

export function TodoList() {

    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    function add() {
        setList(prev => [...prev, task]);
        setTask("");
    }

    const items = [];

    list.forEach((item, index) => {
        items.push(<li key={index}>{item}</li>);
    });

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />

            <button onClick={add}>Add</button>

            <ul>{items}</ul>

        </div>
    );
}