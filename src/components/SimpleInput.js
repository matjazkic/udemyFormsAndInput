import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [formIsValid, setFromisValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");

  const nameInputisInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFromisValid(true);
    } else {
      setFromisValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredEmail("");
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    // nameInputRef.current.value = ""; not the best way, manipulating the DOM
  };
  const nameInputClasses = nameInputisInvalid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameInputBlurHandler}
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
        />
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          type="e-mail"
          id="email"
          onChange={emailInputChangeHandler}
        />{" "}
      </div>
      {nameInputisInvalid && (
        <p className="error-text">name must not be empty</p>
      )}
      {emailInputIsInvalid && (
        <p className="error-text">email must not be empty and include a '@'</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
