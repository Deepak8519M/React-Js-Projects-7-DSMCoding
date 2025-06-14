import React from "react";
import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

function Button({ text, icon, isOutline }) {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
