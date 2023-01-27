import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  let { tasks } = useContext(TaskContext);
  if (tasks.length <= 0) {
    return (
      <div className="text-white text-4xl font-bold text-center">
        No hay tareas
      </div>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, index) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
