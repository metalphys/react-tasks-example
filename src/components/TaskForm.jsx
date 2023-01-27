import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    createTask(newTask);
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion de l tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <button className="bg-indigo-500 py-1 px-3 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
