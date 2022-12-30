import ButtonColor from "./ButtonColor";
import React, { useState } from "react";
import { produceWithPatches } from "immer";
import useColorChanger from "./useColorChanger";
function ThirdBox(props) {
  const [redValue, greenValue, blueValue, blueChange, redChange, greenChange] =
    useColorChanger(0, 0, 255);

  const redIncrement = () => {
    props.onRedIncrementChange();
    redChange("increment");
  };

  const redDecrement = () => {
    props.onRedDecrementChange();
    redChange("decrement");
  };

  const greenIncrement = () => {
    props.onGreenIncrementChange();
    greenChange("increment");
  };

  const greenDecrement = () => {
    props.onGreenDecrementChange();
    greenChange("decrement");
  };

  const blueIncrement = () => {
    blueChange("increment");
    props.onBlueIncrementChange();
  };

  const blueDecrement = () => {
    props.onBlueDecrementChange();
    blueChange("decrement");
  };

  const backgroundRed = {
    backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
  };

  return (
    <div style={backgroundRed} className="third-box">
      <div className="last-box">
        <div className="button-box">
          <p>RED</p>
          <ButtonColor onClick={redIncrement}>+</ButtonColor>
          <ButtonColor onClick={redDecrement}>-</ButtonColor>
        </div>
        <div className="button-box">
          <p>GREEN</p>
          <ButtonColor onClick={greenIncrement}>+</ButtonColor>
          <ButtonColor onClick={greenDecrement}>-</ButtonColor>
        </div>
        <div className="button-box">
          <p>BLUE</p>
          <ButtonColor onClick={blueIncrement}>+</ButtonColor>
          <ButtonColor onClick={blueDecrement}>-</ButtonColor>
        </div>
      </div>
    </div>
  );
}

export default ThirdBox;
