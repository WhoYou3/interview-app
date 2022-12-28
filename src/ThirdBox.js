import ButtonColor from "./ButtonColor";
function ThirdBox() {
  return (
    <div className="third-box">
      <div className="last-box">
        <div className="button-box">
          <p>RED</p>
          <ButtonColor>+</ButtonColor>
          <ButtonColor>-</ButtonColor>
        </div>
        <div className="button-box">
          <p>GREEN</p>
          <ButtonColor>+</ButtonColor>
          <ButtonColor>-</ButtonColor>
        </div>
        <div className="button-box">
          <p>BLUE</p>
          <ButtonColor>+</ButtonColor>
          <ButtonColor>-</ButtonColor>
        </div>
      </div>
    </div>
  );
}

export default ThirdBox;
