import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  }

  function deleteTask(idtask) {
    setTasks(tasks.filter((i) => i.id != idtask));
  }
  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
