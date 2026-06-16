import styles from './Row.module.css';

function AddTodo() {
  return (
    <div className={`row ${styles['kg-row']}`}>
        <div class="col-sm-6"><input type="text" placeholder="Enter todo here"/></div>
        <div class="col-sm-3"><input type="date"/></div>
        <div class="col-sm-2"><button type="button" className={`btn btn-success ${styles['kg-button']}`}>Add</button></div>
      </div>
  );
}

export default AddTodo;