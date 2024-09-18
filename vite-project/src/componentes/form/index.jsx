import { useState } from "react";

export function Form() {
  const [content, setContent] = useState("");
  return (
    <>
      <label>
        Escriba algo:
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <p id="parrafoForm"> {content}</p>
    </>
  );
}
