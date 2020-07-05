import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./components/todoform";
import Todos from "./components/todo";

// import TodoContext from "./context/TodoContext";
// import TodoReducer from "./context/reducer";
// import TodoContainer from "./components/todocontainer";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
    console.log(todos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const complete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container fluid>
      <h1>Todo App</h1>
      <Todos todos={todos} complete={complete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
};

export default App;
