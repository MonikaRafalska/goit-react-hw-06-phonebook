import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

function ContactForm ({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleChange (evt) {
    evt.currentTarget.name === "name"
      ? setName(evt.target.value)
      : setNumber(evt.target.value);
  };

  function handleSubmit (evt) {
    evt.preventDefault();
    const form = evt.target;
    onSubmit({ name, number });
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Phonebook</h1>
      <label>
        Name
        <input
          className={styles.imput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className={styles.imput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactForm;