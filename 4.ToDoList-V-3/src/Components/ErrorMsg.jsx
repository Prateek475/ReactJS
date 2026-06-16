function ErrorMsg({todoItems}) {
  return (
    <>
      {todoItems.length == 0 ?<h1>Congratulations your task are completed...</h1> : null};
    </>
  );
}
export default ErrorMsg;