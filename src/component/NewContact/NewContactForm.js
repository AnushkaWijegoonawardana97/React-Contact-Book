import React, { useRef, useState } from "react";
import styles from "./NewContactForm.module.css";

function NewContactForm(props) {
  const usernameRef = useRef();
  const ageRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    const enteredUsername = usernameRef.current.value;
    const enteredAge = ageRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredAddress = addressRef.current.value;

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredPhone.trim().length === 0 ||
      enteredAddress.trim().length === 0
    ) {
      // console.log("invalid input");
      props.onErrorMsgOpenHandler({
        status: true,
        title: "Required Fileds",
        message:
          "Please complete all the required input filed. Required input fileds are marked using an * mark",
      });
    } else {
      if (+enteredAge < 1) {
        // console.log(enteredAge);
        props.onErrorMsgOpenHandler({
          status: true,
          title: "Invalid Input Field",
          message: "Age value is invalid please enter an valid age",
        });
      } else {
        const newContactData = {
          username: enteredUsername,
          age: enteredAge,
          phone: enteredPhone,
          address: enteredAddress,
        };

        props.onNewContactSaveHandler(newContactData);
        enteredUsername.current.value = "";
        enteredAge.current.value = "";
        enteredPhone.current.value = "";
        enteredAddress.current.value = "";
      }
    }
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={styles.newContactFormGroup}>
        <div className={styles.newContactFormControl}>
          <label htmlFor='username'>Username *</label>
          <input type='text' name='username' id='username' ref={usernameRef} />
        </div>

        <div className={styles.newContactFormControl}>
          <label htmlFor='age'>Age *</label>
          <input type='number' name='age' id='age' ref={ageRef} />
        </div>
      </div>

      <div className={styles.newContactFormGroup}>
        <div className={styles.newContactFormControl}>
          <label htmlFor='contactnumber'>Contact Number *</label>
          <input
            type='text'
            name='contactnumber'
            id='contactnumber'
            ref={phoneRef}
          />
        </div>

        <div className={styles.newContactFormControl}>
          <label htmlFor='address'>Address *</label>
          <input type='text' name='address' id='address' ref={addressRef} />
        </div>
      </div>

      <div className={styles.newContactFormActions}>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default NewContactForm;
