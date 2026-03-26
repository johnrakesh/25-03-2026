import { useState } from "react";

export function TodoListObj() {

    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    function handleAdd() {

        let obj = {
            id: Date.now().toString().slice(-4),
            text: task
        };

        setList([...list, obj]);
        setTask("");
    }

    function handleEdit(item) {
        setEditId(item.id);
        setEditText(item.text);
    }

    function handleSave(id) {

        setList(
            list.map(item =>
                item.id === id
                    ? { ...item, text: editText }
                    : item
            )
        );

        setEditId(null);
    }

    return (
        <div>

            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>

            <ul>

                {list.map(item => (

                    <li key={item.id}>

                        {editId === item.id ? (

                            <>
                                <input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />

                                <button onClick={() => handleSave(item.id)}>
                                    Save
                                </button>
                            </>

                        ) : (

                            <>
                                {item.text}

                                <button onClick={() => handleEdit(item)}>
                                    Edit
                                </button>

                            </>

                        )}

                    </li>

                ))}

            </ul>

        </div>
    );
}