import "./App.css";
import firebase, { db } from "./firebase";
import { ref, set, push } from "firebase/database";
import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState("");
  const tasksRef = ref(db, "tasks/");

  const addTask = (task) => {
    const newTasksRef = push(tasksRef);
    set(newTasksRef, {
      name: task.name,
      time: task.id,
    });
    console.log(task);
    setTasks((prevState) => [...prevState, task]);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="text-3xl font-bold">Task List</h1>
        <CustomForm addTask={addTask} />
        <div className="tasks">{tasks && <TaskList tasks={tasks} />}</div>
      </div>
    </div>
  );
}

export default App;
