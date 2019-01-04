import React, { Component } from "react";
import { Button, Segment, Form } from "semantic-ui-react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.title !== "") {
      this.props.newTodo(this.state.title);
    }
    this.setState({ title: "" });
  };

  render() {
    return (
      <Segment>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Add todo</label>
            <input
              placeholder="Add todo..."
              value={this.state.title}
              name="title"
              type="text"
              onChange={this.onChange}
            />
          </Form.Field>
          <Button type="submit" basic color="blue">
            Submit
          </Button>
        </Form>
      </Segment>
    );
  }
}

AddTodo.propTypes = {
  newTodo: PropTypes.func.isRequired
};

export default AddTodo;
