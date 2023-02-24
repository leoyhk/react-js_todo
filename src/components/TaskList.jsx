import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task.name} />
      ))}
    </ul>
  );
};

export default TaskList;
