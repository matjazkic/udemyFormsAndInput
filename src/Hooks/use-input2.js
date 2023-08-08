import { useState } from "react";

const useInput2 = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = inputTouched && !valueIsValid;

  const inputValueHandler = (event) => {
    setEnteredValue(event.target.value);
    console.log(enteredValue);
  };

  const inputBlur = (event) => {
    setInputTouched(true);
  };

  const reset2 = () => {
    setEnteredValue("");
    setInputTouched(false);
    console.log("to dela");
  };

  return {
    value: enteredValue,
    hasError: hasError,
    inputValueHandler,
    inputBlur,
    valueIsValid: valueIsValid,
    reset2,
  };
};

export default useInput2;
