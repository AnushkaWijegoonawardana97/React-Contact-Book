import React from "react";
import Card from "./Card";
import styles from "./Modal.module.css";

function Modal(props) {
  const onErrorModalCloseHandler = (e) => {
    e.preventDefault();
    props.onModalCloseHandler({ status: false });
  };

  return (
    <Card className={styles.modal}>
      <div className={styles.modalHeader}>
        <h4>{props.errorTitle}</h4>

        <button
          className={styles.closeModal}
          onClick={onErrorModalCloseHandler}>
          <i class='far fa-times-circle'></i>
        </button>
      </div>

      <div className={styles.modalBody}>{props.errorMessage}</div>

      <div className={styles.modalFooter}>
        <button onClick={onErrorModalCloseHandler}>Ok</button>
      </div>
    </Card>
  );
}

export default Modal;
