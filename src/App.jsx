import "./App.css";
import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState("");
  const addTask = (task) => {
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
