import { useState } from "react";
import styles from "./Todoitem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.name);

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleToggle(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  }

  function handleEditSave() {
    setTodos(
      todos.map((todo) =>
        todo.id === item.id ? { ...todo, name: editText } : todo
      )
    );
    setIsEditing(false);
  }

  const itemClass = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {isEditing ? (
          <>
            <input
              className={styles.editInput}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button className={styles.saveButton} onClick={handleEditSave}>
              save
            </button>
          </>
        ) : (
          <>
            <span className={itemClass} onClick={() => handleToggle(item.id)}>
              {item.name}
            </span>
            <button
              className={styles.editButton}
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </>
        )}

        <button
          className={styles.deleteButton}
          onClick={() => handleDelete(item.id)}
        >
          del
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
