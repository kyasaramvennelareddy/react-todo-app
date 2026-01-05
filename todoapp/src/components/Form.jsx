import { useState } from "react";
import styles from "./Form.module.css";

export default function form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handlesubmit(e) {
    if (todo.name.trim() === "") {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false });
      console.log(todos);
    }
  }

  return (
    <form className={styles.todoform} onSubmit={handlesubmit}>
      <div className={styles.inputcontainer}>
        <input
          className={styles.moderninput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter Todo Item"
        />
        <button className={styles.modernbutton} type="Submit">
          Add
        </button>
      </div>
    </form>
  );
}
