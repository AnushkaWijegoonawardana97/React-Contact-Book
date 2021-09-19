import React, { useState } from "react";
import styles from "./NewContactForm.module.css";

function NewContactForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onUsernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const onAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const onPhoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };
  const onAddressChangeHandler = (e) => {
    setAddress(e.target.value);
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    if (
      username.trim().length === 0 ||
      age.trim().length === 0 ||
      phone.trim().length === 0 ||
      address.trim().length === 0
    ) {
      console.log("invalid input");
      props.onErrorMsgOpenHandler({
        status: true,
        title: "Required Fileds",
        message:
          "Please complete all the required input filed. Required input fileds are marked using an * mark",
      });
    } else {
      if (+age < 1) {
        console.log(age);
        props.onErrorMsgOpenHandler({
          status: true,
          title: "Invalid Input Field",
          message: "Age value is invalid please enter an valid age",
        });
      } else {
        const newContactData = {
          username,
          age,
          phone,
          address,
        };

        props.onNewContactSaveHandler(newContactData);
        setUsername("");
        setAge("");
        setPhone("");
        setAddress("");
      }
    }
  };

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={styles.newContactFormGroup}>
        <div className={styles.newContactFormControl}>
          <label htmlFor='username'>Username *</label>
          <input
            type='text'
            name='username'
            id='username'
            onChange={onUsernameChangeHandler}
            value={username}
          />
        </div>

        <div className={styles.newContactFormControl}>
          <label htmlFor='age'>Age *</label>
          <input
            type='number'
            name='age'
            id='age'
            onChange={onAgeChangeHandler}
            value={age}
          />
        </div>
      </div>

      <div className={styles.newContactFormGroup}>
        <div className={styles.newContactFormControl}>
          <label htmlFor='contactnumber'>Contact Number *</label>
          <input
            type='text'
            name='contactnumber'
            id='contactnumber'
            onChange={onPhoneChangeHandler}
            value={phone}
          />
        </div>

        <div className={styles.newContactFormControl}>
          <label htmlFor='address'>Address *</label>
          <input
            type='text'
            name='address'
            id='address'
            onChange={onAddressChangeHandler}
            value={address}
          />
        </div>
      </div>

      <div className={styles.newContactFormActions}>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default NewContactForm;
