import React from "react";
import styles from "./Contacts.module.css";
import { useSelector } from "react-redux";
import { deleteContact } from "../../features/contact/contactSlice";
import { store } from "../../app/store";

const showContacts = (contacts, filter) => {
  const normalizedFilter = contacts.filter.toLowerCase().trim();

  return contacts.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};


const Contacts = () => {
  const contacts = useSelector(({ contacts, filter }) =>
    showContacts(contacts, filter)
  );
  return (
    <ul className={styles.list}>
      <h2 className={styles.title}>Contacts</h2>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button
            className={styles.button}
            type="button"
            onClick={() =>store.dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Contacts;