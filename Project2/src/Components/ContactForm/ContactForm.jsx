import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdEmail />} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">TEXT</label>
            <textarea rows={6} name="text"></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>

          <div className="output">
            <p>{name}</p>
            <p>{email}</p>
            <p>{text}</p>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="images/contact.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
