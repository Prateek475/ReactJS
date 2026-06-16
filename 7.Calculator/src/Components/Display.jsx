import styles from './Display.module.css';

function Display({disp}) {
  return (
    <>
      <input type="text" value={disp} className={styles.display} readOnly/>
    </>
  );
}

export default Display;
