import React from "react";
import "semantic-ui-css/semantic.min.css";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      );
    });
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
