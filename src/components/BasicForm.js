import { useState, useEffect } from "react";
import useInput2 from "../Hooks/use-input2";

const BasicForm = (props) => {
  const [formIsValid, setFromisValid] = useState(false);

  const {
    value: enteredName,
    hasError: nameHasError,
    inputValueHandler: firstNameHandler,
    inputBlur: nameInputBlur,
    valueIsValid: nameIsValid,
    reset2: resetName,
  } = useInput2((enteredValue) => enteredValue.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameHasError,
    inputValueHandler: lastNameHandler,
    inputBlur: lastNameInputBlur,
    valueIsValid: lastNameIsValid,
    reset2: resetLastName,
  } = useInput2((enteredValue) => enteredValue.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    inputValueHandler: emailHandler,
    inputBlur: emailInputBlur,
    valueIsValid: emailIsValid,
    reset2: resetEmail,
  } = useInput2((enteredValue) => enteredValue.includes("@"));

  const formSubmitHandler = (event) => {
    event.preventDefault();
    resetName();
    resetLastName();
    resetEmail();
  };

  useEffect(() => {
    if (nameIsValid && lastNameIsValid && emailIsValid) {
      setFromisValid(true);
    } else {
      setFromisValid(false);
    }
  }, [nameIsValid, lastNameIsValid, emailIsValid]);

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control ";
  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control ";
  const EmailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameHandler}
            onBlur={nameInputBlur}
            value={enteredName}
          />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameHandler}
            onBlur={lastNameInputBlur}
            value={enteredLastName}
          />
        </div>
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor="e-mail">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailHandler}
          onBlur={emailInputBlur}
          value={enteredEmail}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
