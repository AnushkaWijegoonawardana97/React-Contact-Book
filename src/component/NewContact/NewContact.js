import React from "react";
import Card from "../UI/Card";
import styles from "./NewContact.module.css";
import NewContactForm from "./NewContactForm";

function NewContact(props) {
  const onNewContactDataSubmitHandler = (newContactDataValues) => {
    const newContactData = {
      ...newContactDataValues,
      id: Math.random().toString(),
    };

    props.onAddNewContact(newContactData);
  };

  const onErrorMsgOpenHandler = (errorDataValues) => {
    props.onErrorModalOpenHandler(errorDataValues);
  };

  return (
    <Card className={styles.NewContact}>
      <NewContactForm
        onNewContactSaveHandler={onNewContactDataSubmitHandler}
        onErrorMsgOpenHandler={onErrorMsgOpenHandler}
      />
    </Card>
  );
}

export default NewContact;
