import React, { Component } from "react";

import TodoItem from "../todo-item";

export class Todo extends Component {
  state = {
    todos: [],
    item: ""
  };
  setItem = event => {
    this.setState({
      item: event.target.value
    });
  };
  handleKeyDown = event => {
    if (event.key === "Enter") {
      this.pushItem();
    }
  };
  pushItem = () => {
    if (!this.state.item) {
      return false;
    }
    this.setState(previousState => ({
      todos: [...previousState.todos, this.state.item]
    }));

    this.clearInput();
  };
  clearInput() {
    this.setState({
      item: ""
    });
  }
  render() {
    return (
      <div className="py-3">
        <ul className="list-group list-group-flush">
          {this.state.todos.map((todo, index) => (
            <TodoItem key={index} listIndex={index + 1} todo={todo} />
          ))}
        </ul>
        <div className="input-group">
          <input
            onChange={this.setItem}
            value={this.state.item}
            onKeyDown={this.handleKeyDown}
            name="something"
            className="form-control"
            placeholder="Write something"
          />
          <button className="btn btn-primary" onClick={this.pushItem}>
            Push item
          </button>
        </div>
      </div>
    );
  }
}
