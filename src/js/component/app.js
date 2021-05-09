import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          decrement={this.decrement}
          increment={this.increment}
        />
        <Counter
          count={this.state.count}
          decrement={this.decrement}
          increment={this.increment}
        />
        <TodoList />
      </div>
    );
  }
}