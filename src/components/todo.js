import React, { useEffect } from "react";
import TodoForm from "./todoForm";
import { ListGroupItem, ListGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckSquare } from "react-icons/fa";

const Todos = ({ todos, complete }) => {
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.TodoStr}
          <span className="float-right" onClick={() => complete(todo.id)}>
            <FaCheckSquare></FaCheckSquare>
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
