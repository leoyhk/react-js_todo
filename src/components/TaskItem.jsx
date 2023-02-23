import React from "react";

const TaskItem = ({ key, task }) => {
  console.log(key, task);
  return <li>{task}</li>;
};

export default TaskItem;
