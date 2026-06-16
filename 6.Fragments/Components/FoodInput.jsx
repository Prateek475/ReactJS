import styles from './FoodInput.module.css';

function FoodInput({fn}) {
  return (
    <>
      <input type="text" className={styles.inp} placeholder='Enter the name of food' onKeyDown={fn} />
    </>
  );

}

export default FoodInput;