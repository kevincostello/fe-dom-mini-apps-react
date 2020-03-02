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
              <TaskList tasks={this.state.tasks} />
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

  componentDidMount() {
    this.setState({
      tasks: [
        {
          // task_id: 10,
          task_name: "Tidy sock drawer",
          due_date: new Date("2022-02-05").toISOString()
        },
        {
          // task_id: 2,
          task_name: "Sort stamp collection",
          due_date: new Date("2020-03-05").toISOString()
        }
      ],
      isLoading: false
    });
  }

  componentDidUpdate(props, prevProps) {
    // console.log("the length is", this.state.tasks);
    // api.autoIncrementID(this.state.tasks);
    // console.log("the tasks will be:", props, prevProps);
  }
}

export default Tasks;
