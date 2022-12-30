function ButtonColor(props) {
  return (
    <>
      <button className="button-color" onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
}

export default ButtonColor;
