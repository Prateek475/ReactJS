import { useState } from "react";
import Item from "./Item";

function FoodItems({items}) {
  let [solve,method] = useState("");
  return (
    <ul   className="list-group">
    {items.map(item => <Item key={item} ele={item} handleButton={(event)=> {
      method(item);
    }} brought={solve == item}></Item>)}
  </ul>
  );
}

export default FoodItems;