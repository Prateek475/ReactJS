import { useState } from 'react';
import styles from './Row.module.css';
import { BiMessageAdd } from "react-icons/bi";


function AddTodo({fn}) {
  let [name,setM] = useState("");
  let [date,setD] = useState("");
  return (
    <div className={`row ${styles['kg-row']}`}>
        <div className="col-sm-6"><input type="text" placeholder="Enter todo here" onChange={(event) => setM(event.target.value)} value={name}/></div>
        <div className="col-sm-3"><input type="date" onChange={(event) => setD(event.target.value)} value={date}/></div>
        <div className="col-sm-2"><button onClick={()=>{
          fn(name,date);
          setD("");
          setM("");
          }} type="button" className={`btn btn-success ${styles['kg-button']}`}><BiMessageAdd /></button></div>
      </div>
  );
}

export default AddTodo;