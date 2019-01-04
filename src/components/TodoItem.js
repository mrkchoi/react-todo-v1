import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <div>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
        </div>
        <Button
          icon="x"
          style={{ float: "right", backgroundColor: "transparent" }}
          onClick={this.props.delTodo.bind(this, id)}
        />
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
