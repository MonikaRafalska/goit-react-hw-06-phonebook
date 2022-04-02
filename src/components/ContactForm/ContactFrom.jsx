import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../features/contact/contactSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;
    dispatch(
      addContact({ name, number })
    );
    form.reset();
  };

 return (
   <form onSubmit={handleSubmit}>
     <h1 className={styles.title}>Phonebook</h1>
     <label>
       Name
       <input
         className={styles.imput}
         type="text"
         name="name"
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         required
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