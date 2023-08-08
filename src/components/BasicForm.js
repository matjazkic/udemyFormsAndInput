import { useState } from "react";
import useInput2 from "../Hooks/use-input2";

const BasicForm = (props) => {
  /*   const [enteredName, setEnteredName] = useState("");

  const [nameInputTouched, setNameInputTouched] = useState(false);
  let nameIsValid = enteredName.trim() !== "";

  let hasError = nameInputTouched && !nameIsValid;

  const inputNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const inputBlur = () => {
    setNameInputTouched(true);
  };

  const reset = () => {
    setEnteredName("");
  };
 */
  const [test, setTest] = useState(0);
  const {
    value: enteredName,
    hasError: nameHasError,
    inputValueHandler: firstNameHandler,
    inputBlur: nameInputBlur,
    valueIsValid: nameIsValid,
    reset2: resetName,
  } = useInput2((enteredValue) => enteredValue.trim() !== "");

  const formSubmitHandler = (event) => {
    event.preventDefault();

    resetName();
    setTest(test + 1);
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={enteredName}
            type="text"
            id="name"
            onChange={firstNameHandler}
            onBlur={nameInputBlur}
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="e-mail">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
