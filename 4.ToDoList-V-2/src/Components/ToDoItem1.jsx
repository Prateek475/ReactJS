import styles from './Row.module.css';

function ToDoItem1({todoName,todoDate}) {
  return (
    <div className={`row ${styles['kg-row']}`}>
      <div class="col-sm-6">{todoName}</div>
      <div class="col-sm-3">{todoDate}</div>
      <div class="col-sm-2"><button type="button" className={`btn btn-danger ${styles['kg-button']}`}>Delete</button></div>
    </div>
  );
}

export default ToDoItem1;