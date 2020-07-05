import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
  Container,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [TodoStr, setTodoStr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (TodoStr === "") {
      return alert("please fill todo");
    }
    const Todo = {
      TodoStr,
      id: v4(),
    };
    addTodos(Todo);
    setTodoStr("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter here..."
            value={TodoStr}
            onChange={(e) => setTodoStr(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="success">Add Todo</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
