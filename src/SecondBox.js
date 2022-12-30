import ThirdBox from "./ThirdBox";
import { useState } from "react";
import useColorChanger from "./useColorChanger";

function SecondBox(props) {
  const [redValue, greenValue, blueValue, blueChange, redChange, greenChange] =
    useColorChanger(0, 255, 0);

  const incrementGreenChangeHandler = () => {
    props.onIncrementGreenFromFirstBox();
    greenChange("increment");
  };

  const decrementGreenChangeHandler = () => {
    props.onDecrementGreenFromFirstBox();
    greenChange("decrement");
  };

  const incrementRedChangeHanlder = () => {
    props.onIncrementRedFromFirstBox();
    redChange("increment");
  };

  const decrementRedChangeHandler = () => {
    props.onDecrementRedFromFirstBox();
    redChange("decrement");
  };

  const incrementBlueChangeHandler = () => {
    props.onIncrementBlueFromFirstBox();
    blueChange("increment");
  };

  const decrementBlueChangeHandler = () => {
    props.onDecrementBlueFromFirstBox();
    blueChange("decrement");
  };

  const backgroundGreen = {
    backgroundColor: `rgb(${redValue},${greenValue}, ${blueValue})`,
  };

  return (
    <div style={backgroundGreen} className="second-box">
      <ThirdBox
        onGreenIncrementChange={incrementGreenChangeHandler}
        onGreenDecrementChange={decrementGreenChangeHandler}
        onRedIncrementChange={incrementRedChangeHanlder}
        onRedDecrementChange={decrementRedChangeHandler}
        onBlueIncrementChange={incrementBlueChangeHandler}
        onBlueDecrementChange={decrementBlueChangeHandler}
      />
    </div>
  );
}

export default SecondBox;
