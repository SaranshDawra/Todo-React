import React, { useState } from "react";
import "./App.css";
import Form from "../form/Form";

const App = () => {
  const [todos, setTodos] = useState([
  ]);

  return (
    <div className="App">
      <Form setTodos={setTodos} todos={todos}/>
    </div>
  );
};

export default App;
