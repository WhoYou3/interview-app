import SecondBox from "./SecondBox";
import "./BoxesStyle.css";

function FirstBox() {
  return (
    <div className="first-box">
      <SecondBox />
    </div>
  );
}

export default FirstBox;
