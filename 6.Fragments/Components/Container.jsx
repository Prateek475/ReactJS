import styles from './Container.module.css';

function Container(props) {
  return (
    <div className={styles.Cont}>
     {props.children}
    </div>
  );
}

export default Container;