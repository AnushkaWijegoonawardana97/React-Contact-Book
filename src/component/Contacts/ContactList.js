import React from "react";
import Card from "../UI/Card";
import ContactItem from "./ContactItem";

function ContactList(props) {
  return (
    <Card>
      {props.contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          username={contact.username}
          age={contact.age}
          address={contact.address}
          phone={contact.phone}
        />
      ))}
    </Card>
  );
}

export default ContactList;
