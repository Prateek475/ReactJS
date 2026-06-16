function Time() {
  let now = new Date();
  return (
    <p>This is current time: {now.toLocaleDateString()}-{now.toLocaleTimeString()}</p>
  ); 
}

export default Time;