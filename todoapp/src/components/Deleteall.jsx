import Style from "./Deleteall.module.css";
export default function Deleteall({ setTodos }) {
  function handleDeleteAll() {
    setTodos([]);
  }

  return (
    <button className={Style.Deleteall} onClick={handleDeleteAll}>
      Delete All
    </button>
  );
}