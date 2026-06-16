import Display from './Components/display';
import styles from './App.module.css';
import ButtonContainer from './Components/ButtonContainer';
import { useState } from 'react';

function App() {
  let [str,setMethod] = useState("");
  function dis(event) {
    if(event.target.value == 'C') {
      setMethod("");
      return;
    }
    if(event.target.value != '=') {
      setMethod(str+event.target.value);
    } else {
      let val = eval(str);
      if(val == undefined) setMethod('');
      else setMethod(val);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display disp ={str}></Display>
      <ButtonContainer fn ={dis}></ButtonContainer>
    </div>
  );

}

export default App
