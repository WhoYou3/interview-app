import SecondBox from "../../SecondBox";
import "./BoxesStyle.css";
import { useState } from "react";
import useColorChanger from "./useColorChanger";

function FirstBox() {
  const [redValue, greenValue, blueValue, blueChange, redChange, greenChange] =
    useColorChanger(255, 0, 0);

  const incrementGreenChangeHandler = () => {
    greenChange("increment");
  };

  const decrementGreenChangeHandler = () => {
    greenChange("decrement");
  };

  const incrementRedChangeHanlder = () => {
    redChange("increment");
  };

  const decrementRedChangeHandler = () => {
    redChange("decrement");
  };

  const incrementBlueChangeHandler = () => {
    blueChange("increment");
  };

  const decrementBlueChangeHandler = () => {
    blueChange("decrement");
  };

  const backgroundRed = {
    backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
  };

  return (
    <div style={backgroundRed} className="first-box">
      <SecondBox
        onIncrementBlueFromFirstBox={incrementBlueChangeHandler}
        onDecrementBlueFromFirstBox={decrementBlueChangeHandler}
        onIncrementRedFromFirstBox={incrementRedChangeHanlder}
        onDecrementRedFromFirstBox={decrementRedChangeHandler}
        onIncrementGreenFromFirstBox={incrementGreenChangeHandler}
        onDecrementGreenFromFirstBox={decrementGreenChangeHandler}
      />
    </div>
  );
}

export default FirstBox;
