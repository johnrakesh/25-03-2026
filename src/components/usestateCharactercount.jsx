import { useState } from "react";

export function CharacterCount() {
  const [text, setText] = useState("");
    const [count, setCount] = useState(0);
  return (
    <div>
      <input type="text" value= {text}
       onChange={(e) => {
        setText(e.target.value);
        let value = e.target.value;
        setCount(value.length);
        }}
        placeholder="Type something" />

      <p>Count : {count}</p>
    </div>
  );
}