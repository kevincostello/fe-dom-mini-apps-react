import React from "react";
import TaskCard from "./TaskCard";

function TaskList(props) {
  console.log(props.tasks, typeof props.tasks);
  return props.tasks.map(task => {
    return <TaskCard task={task} key={task.task_name} func={props.func} />;
  });
}

export default TaskList;
