import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";

import "semantic-ui-css/semantic.min.css";
import Todos from "./Todos";
import { AppHeader } from "./layout/Header";
import AddTodo from "./AddTodo";
import uuid from "uuid";
import axios from "axios";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  //   Toggle Completed
  markComplete = id => {
    this.setState(
      {
        todos: [
          ...this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
        ]
      },
      console.log(this.state.todos)
    );
  };

  //   Delete Todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      })
    );
  };

  //   Add new todo
  newTodo = todo => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        id: new Date(),
        title: todo
      })
      .then(res =>
        this.setState({
          todos: [...this.state.todos, res.data]
        })
      );
  };

  render() {
    return (
      <Router>
        <div className="ui container">
          <AppHeader />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo newTodo={this.newTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
