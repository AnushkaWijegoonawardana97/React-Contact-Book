import React from "react";
import Card from "../UI/Card";
import styles from "./ContactItem.module.css";

function ContactItem(props) {
  return (
    <Card className={styles.contactItem}>
      <div className={styles.contactItemHeader}>
        <div className={styles.contactItemText}>
          <div className={styles.contactUserName}>{props.username}</div>
        </div>
        <div className={styles.contactItemText}>Age : {props.age}</div>
      </div>

      <div className={styles.contactItemBody}>
        <div className={styles.contactItemText}>
          <i className='fas fa-map-marker-alt'></i> {props.address}
        </div>
        <div className={styles.contactItemText}>
          <i className='fas fa-phone-alt'></i> {props.phone}
        </div>
      </div>
    </Card>
  );
}

export default ContactItem;
