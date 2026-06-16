import './App.css';
import ErrorMsg from '../Components/Errormsg';
import FoodItems from '../Components/FoodItems';
import Container from '../Components/Container';
import FoodInput from '../Components/FoodInput';
import { useState } from 'react';

function App() {
  // let foodItems = ['Dal','Green Vegetables','Roti','Salad','Doodh'];
  let [foodItems,setState] = useState(['Dal','Green Vegetables','Roti']);
  let change = function(event) {
    if(event.key == "Enter") {
      let a = event.target.value;
      event.target.value = "";
      setState([...foodItems,a]);
    }
  }
  return (
    <>
    <Container>
      <h1 className='food-heading'>Healthy Food</h1>
      <FoodInput fn = {change}></FoodInput>
      <ErrorMsg item={foodItems}></ErrorMsg>
      <FoodItems items = {foodItems}></FoodItems>
    </Container>
    </>
  );
}

export default App
