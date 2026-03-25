import { useState } from "react";

export function InputFieldState1() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" value= {text}
       onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <p>{text}</p>
    </div>
  );
}