import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./components/todoform";

import TodoContext from "./context/TodoContext";
import TodoReducer from "./context/reducer";
import TodoContainer from "./components/todocontainer";

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  console.log(dispatch);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <TodoContainer />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
