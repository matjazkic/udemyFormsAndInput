import { useEffect, useState } from "react";
import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const {
    isValid: enteredNameIsValid,
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    isValid: enteredEmailIsValid,
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const [formIsValid, setFromisValid] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFromisValid(true);
    } else {
      setFromisValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameBlurHandler}
          value={enteredName}
          type="text"
          id="name"
          onChange={nameChangedHandler}
        />
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onBlur={emailBlurHandler}
          value={enteredEmail}
          type="e-mail"
          id="email"
          onChange={emailChangedHandler}
        />{" "}
      </div>
      {nameInputHasError && (
        <p className="error-text">name must not be empty</p>
      )}
      {emailInputHasError && (
        <p className="error-text">email must not be empty and include a '@'</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
