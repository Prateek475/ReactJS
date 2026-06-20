import { useContext, useRef } from 'react';
import styles from './Row.module.css';
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsCtxt } from '../store/TodoItemsCtxt';


function AddTodo() {
  let itemsCtxt = new useContext(TodoItemsCtxt);
  let name1 = useRef();
  let date1 = useRef();
  function handleClick(event) {
    event.preventDefault();
    itemsCtxt.modify(name1.current.value,date1.current.value);
    name1.current.value = "";
    date1.current.value ="";
  }
  return (
    <form className={`row ${styles['kg-row']}`} onSubmit = {handleClick}
    >
        <div className="col-sm-6"><input type="text" placeholder="Enter todo here" ref ={name1}/></div>
        <div className="col-sm-3"><input type="date" ref={date1}/></div>
        <div className="col-sm-2"><button  className={`btn btn-success ${styles['kg-button']}`}
          ><BiMessageAdd /></button></div>
      </form>
  );
}

export default AddTodo;