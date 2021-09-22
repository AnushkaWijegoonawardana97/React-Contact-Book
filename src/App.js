import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import ContactList from "./component/Contacts/ContactList";
import NewContact from "./component/NewContact/NewContact";
import BackDrop from "./component/UI/BackDrop";
import Modal from "./component/UI/Modal";

const contactList = [
  {
    id: 1,
    username: "Anushka Wijegoonawardana",
    age: "24",
    address: "132/6 Nahena 1st Lane Hunupitiya Wattala",
    phone: "0711971313",
  },
  {
    id: 2,
    username: "Dickson Wijegoonawardana",
    age: "65",
    address: "132/6 Nahena 1st Lane Hunupitiya Wattala",
    phone: "0711994745",
  },
];

function App() {
  const [error, setError] = useState({
    status: false,
    title: "",
    message: "",
  });
  const [contacts, setcontacts] = useState(contactList);

  const onAddNewContactToListHandler = (newContactData) => {
    console.log(newContactData);
    setcontacts((prevState) => {
      return [newContactData, ...prevState];
    });
  };

  const onErrorModalOpenHandler = (errorData) => {
    setError((prevState) => ({
      ...prevState,
      status: errorData.status,
      title: errorData.title,
      message: errorData.message,
    }));
  };

  const onErrorModalCloseHandler = (errorData) => {
    setError((prevState) => ({
      ...prevState,
      status: errorData.status,
    }));
  };

  return (
    <Fragment>
      {error.status &&
        ReactDOM.createPortal(
          <BackDrop>
            <Modal
              errorTitle={error.title}
              errorMessage={error.message}
              onModalCloseHandler={onErrorModalCloseHandler}
            />
          </BackDrop>,
          document.getElementById("overlayer-root")
        )}

      <div className='container'>
        <h1 className='mainHeading'>Contact List</h1>

        <NewContact
          onAddNewContact={onAddNewContactToListHandler}
          onErrorModalOpenHandler={onErrorModalOpenHandler}
        />

        <ContactList contacts={contacts} />
      </div>
    </Fragment>
  );
}

export default App;
