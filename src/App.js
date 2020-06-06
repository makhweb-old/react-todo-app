import React from "react";

import Todo from "./components/todo";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">Todos</h1>
      <div className="d-flex justify-content-center">
        <Todo />
      </div>
    </div>
  );
};

export default App;
