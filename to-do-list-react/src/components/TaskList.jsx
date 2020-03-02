import React from "react";
import TaskCard from "./TaskCard";

function TaskList(props) {
  return (
    <main>
      {props.tasks.map(task => {
        return <TaskCard task={task} key={task.task_id} />;
      })}
    </main>
  );
}

export default TaskList;
