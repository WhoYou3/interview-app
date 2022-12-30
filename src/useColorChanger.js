import { useState } from "react";
import React from "react";

export default function useColorChanger(
  redInitialValue,
  greenInitialValue,
  blueInitialValue
) {
  const [redValue, setRedValue] = useState(redInitialValue);
  const [greenValue, setGreenValue] = useState(greenInitialValue);
  const [blueValue, setBlueValue] = useState(blueInitialValue);

  const blueChange = (value) => {
    if (value === "increment") {
      if (blueValue >= 255) {
        return;
      }
      setBlueValue((prevBlue) => prevBlue + 15);
    } else {
      if (blueValue <= 0) {
        return;
      }

      setBlueValue((prevBlue) => prevBlue - 15);
    }
  };

  const redChange = (value) => {
    if (value === "increment") {
      if (redValue >= 255) {
        return;
      }
      setRedValue((prevRed) => prevRed + 15);
    } else {
      if (redValue <= 0) {
        return;
      }
      setRedValue((prevRed) => prevRed - 15);
    }
  };

  const greenChange = (value) => {
    if (value === "increment") {
      if (greenValue >= 255) {
        return;
      }
      setGreenValue((prevGreen) => prevGreen + 15);
    } else {
      if (greenValue <= 0) {
        return;
      }
      setGreenValue((prevGreen) => prevGreen - 15);
    }
  };

  return [redValue, greenValue, blueValue, blueChange, redChange, greenChange];
}
