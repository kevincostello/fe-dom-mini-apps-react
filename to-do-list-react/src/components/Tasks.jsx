import React, { Component } from "react";
import TaskList from "./TaskList";
import * as api from "../api";

export class Tasks extends Component {
  state = {
    tasks: [],
    isLoading: true
  };
  render() {
    return (
      <main>
        {this.state.isLoading ? (
          <h2>Please wait for things to load</h2>
        ) : (
          <>
            <ul>
              <TaskList tasks={this.state.tasks} func={this.handleClick} />
              {/* {console.log(
                "maximumj id is: ",
                this.state.tasks.reduce((a, c) => {
                  return Math.max(a.task_id, c.task_id);
                })
              )} */}
            </ul>

            <form action="" onSubmit={this.handleSubmit}>
              <label htmlFor="">
                Enter task name:
                <input
                  type="text"
                  name="task_name"
                  onChange={this.handleChange}
                ></input>
              </label>
              <label htmlFor="">
                Due date:
                <input
                  type="date"
                  id=""
                  name="due_date"
                  onChange={this.handleChange}
                />
              </label>
              <button>Submit</button>
            </form>

            <form action="" onClick={this.handleSave}>
              <button>Save tasks</button>
            </form>
          </>
        )}
      </main>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name + value);
    this.setState(currentState => {
      return { newTask: { ...currentState.newTask, [name]: value } };
    });
    console.log("Tasks are:", this.state.newTask);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    this.setState(currentState => {
      return { tasks: [...currentState.tasks, currentState.newTask] };
    });
  };

  handleClick = clickedTask => {
    // const { name, value } = event.target;
    console.dir(clickedTask);
    // event.target.className = "clicked";
    // console.log(event.target.className);
    this.setState(currentState => {
      const newTasks = currentState.tasks.map(task => {
        console.log("task is:", task, clickedTask);
        if (task.task_name === clickedTask) {
          console.log("in here?");
          task.completed = !task.completed;
        }
        return task;
      });
      return { tasks: [...newTasks] };
    });
    console.log("current state", this.state.tasks);
  };

  handleSave = event => {
    event.preventDefault();
    const { tasks, isLoading } = this.state;
    const isSaved = true;
    localStorage.setItem("tasksSaved", JSON.stringify(tasks));
    localStorage.setItem("isSaved", isSaved);
    // localStorage.setItem("isLoading", isLoading)
    console.log("isLoading: ", isSaved, tasks);
  };

  componentDidMount() {
    const isSaved = localStorage.getItem("isSaved");
    const tasksSaved = localStorage.getItem("tasksSaved");

    // const isSaved = false;
    // const tasksSaved = [];

    console.log("mounting:", isSaved, tasksSaved.substr(0, 4), typeof parsed);

    if (isSaved) {
      this.setState({
        tasks: tasksSaved,
        isLoading: false
      });
    } else {
      this.setState({
        tasks: [
          {
            // task_id: 10,
            task_name: "Tidy sock drawer",
            due_date: new Date("2022-02-05").toISOString(),
            completed: false
          },
          {
            // task_id: 2,
            task_name: "Sort stamp collection",
            due_date: new Date("2020-03-05").toISOString(),
            completed: false
          }
        ],
        isLoading: false
      });
    }
  }

  componentDidUpdate(props, prevProps) {
    // console.log("the length is", this.state.tasks);
    // api.autoIncrementID(this.state.tasks);
    // console.log("the tasks will be:", props, prevProps);
  }
}

export default Tasks;
