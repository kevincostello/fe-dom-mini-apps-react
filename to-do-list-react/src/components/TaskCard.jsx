import React from "react";

function TaskCard(props) {
  console.log(props);
  return (
    <main>
      {!props.task.completed ? (
        <li
          className="notDone"
          onClick={() => props.func(props.task.task_name)}
        >
          Task name:
          <h2>{props.task.task_name}</h2>Due date:
          <h3>{props.task.due_date}</h3>
          <p>Click to complete:</p>
        </li>
      ) : (
        <li
          className="completed"
          onClick={() => props.func(props.task.task_name)}
        >
          Task name:
          <h2>{props.task.task_name}</h2>Due date:
          <h3>{props.task.due_date}</h3>
          <p>Completed :)</p>
        </li>
      )}
    </main>
  );
}

export default TaskCard;
