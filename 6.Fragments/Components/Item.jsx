import styles from  './Item.module.css';

function Item({ele,brought,handleButton}) {
  return (
    <li className={`${styles['kg-item']} list-group-item ${brought ? 'active' : null}`}>
    {ele} 
    <button type="button" className={`${styles.btn} btn btn-outline-primary`}onClick={handleButton}>Buy</button></li>
  );
}

export default Item;