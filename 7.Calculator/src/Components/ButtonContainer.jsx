import styles from './ButtonContainer.module.css'

function ButtonContainer({fn}) {
  let names = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <>
      <div className={styles.buttonContainer}>
        {names.map(val=><button key={val} className={styles.btn} onClick={fn} value={val}>{val}</button >)}
      </div>
    </>
  );
}

export default ButtonContainer;