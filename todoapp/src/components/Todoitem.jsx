import styles from "./Todoitem.module.css";
export default function Todoitem({ item , todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    // Handle deletion logic here
  }

  function handleclick(name) {
    const newArray = todos.map((todo)=>
        todo.name===name?{...todo, done:!todo.done}:todo);
    setTodos(newArray);
  }
  const itemClass = item.done ? styles.completed :"";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={itemClass} onClick={() => handleclick(item.name)}>{item.name}</span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            del
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
