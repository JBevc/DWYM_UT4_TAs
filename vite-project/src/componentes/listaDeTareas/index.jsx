import { useState } from "react";

export function TaskList() {
  const [nombre, setNombre] = useState("");
  const [tareas, setTarea] = useState([]);
  const [id, setId] = useState(0);

  function addTaskHandler() {
    setId(id + 1);
    setTarea([...tareas, { id: id, nombre: nombre }]);
  }

  return (
    <>
      <h1> Lista de Tareas:</h1>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <button onClick={addTaskHandler}> Agregar Tarea </button>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.nombre}</li>
        ))}
      </ul>
    </>
  );
}
