import { useState } from "react";
import Deleteall from "./Deleteall";
import Form from "./Form";
import Todolist from "./Todolist";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Deleteall setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}
