import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  const classes = `${styles.Card} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
