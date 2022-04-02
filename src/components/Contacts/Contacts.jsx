import React from "react";
import styles from "./Contacts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../features/contact/contactSlice";
import { saveToLocalStore } from "../../features/contact/localStorage";

const getContacts = (contacts, filter) => {
  const normalizedFilter = contacts.filter.toLowerCase().trim();

  return contacts.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const Contacts = () => {
  const contacts = useSelector(({ contacts, filter }) =>
    getContacts(contacts, filter)
  );
  const dispatch = useDispatch();
  saveToLocalStore("CONTACTS", contacts);
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={styles.list}>
        <h2 className={styles.title}>Contacts:</h2>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.item}>
              {name}: {number}
              <button
                className={styles.button}
                type="button"
                onClick={() => dispatch(deleteContact(id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
       ) : (
        <div></div>
      )}
    </>
  );
};
export default Contacts;