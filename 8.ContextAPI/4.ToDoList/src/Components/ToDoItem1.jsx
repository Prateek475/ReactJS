import styles from './Row.module.css';
import { MdDelete } from "react-icons/md";

function ToDoItem1({todoName,todoDate,del,idx}) {
  return (
    <div className={`row ${styles['kg-row']}`}>
      <div className="col-sm-6">{todoName}</div>
      <div className="col-sm-3">{todoDate}</div>
      <div className="col-sm-2"><button type="button" className={`btn btn-danger ${styles['kg-button']}`}onClick = {()=>del(idx)}><MdDelete /></button></div>
    </div>
  );
}

export default ToDoItem1;