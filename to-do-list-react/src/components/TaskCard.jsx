import React from "react";

function TaskCard(props) {
  console.log(props);
  return (
    <main>
      <li>
        <h2>{props.task.task_name}</h2>
        <h3>{props.task.due_date}</h3>
      </li>
    </main>
  );
}

export default TaskCard;
