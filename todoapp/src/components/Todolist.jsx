import Todoitem from "./Todoitem";
import styles from "./Todolist.module.css";

export default function Todolist({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <Todoitem key={item.id} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
