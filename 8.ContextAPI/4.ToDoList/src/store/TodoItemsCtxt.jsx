import { createContext, useReducer } from "react";

export const TodoItemsCtxt = createContext([{
  todoItems : [],
  modify : () => {},
  del : () => {}
}]);

const TodoItemsReducer = (currToDoItems,action) => {
  let newItems = currToDoItems;
  if(action.type == 'NEW_ITEM') {
    newItems = [...currToDoItems,{idx:action.idx,name:action.name,date:action.date}];
    return newItems;
  } else {
    newItems = currToDoItems.filter((item)=>item.idx != action.idx);
  }
  return newItems;
}

function ToDoItemsCtxProvider({children}) {
  let [todoItems,Dispatch] = useReducer(TodoItemsReducer,[]);
  function modify(name,date) {
    let obj = {
      type : "NEW_ITEM",
      idx : todoItems.length+1,
      name : name,
      date : date,
    }
    Dispatch(obj);
  }
  function del(idx) {
    let obj = {
      type: "DEL_ITEM",
      idx: idx
    }
    Dispatch(obj);
  }
  return (
    <TodoItemsCtxt.Provider value ={{todoItems:todoItems,modify:modify,del:del}}>
      {children}
    </TodoItemsCtxt.Provider>
  )
}

export default ToDoItemsCtxProvider;
