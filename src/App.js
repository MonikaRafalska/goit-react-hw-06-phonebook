import "./App.css";
// import React from "react";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactFrom";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(
    (prevState) => {
      const nextContacts = contacts;
      const prevContacts = prevState;
      if (nextContacts !== prevContacts) {
        localStorage.setItem("contacts", JSON.stringify(nextContacts));
      }
    },
    [contacts]
  );

  function addContact({ name, number }) {
    const contact = { id: nanoid(), name, number };
    contacts.some((contact) => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts([contact, ...contacts]);
  }

  function deleteContact(contactId) {
    return setContacts(contacts.filter((contact) => contact.id !== contactId));
  }

  function filterChange(evt) {
    return setFilter(evt.currentTarget.value);
  }

  function getContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const thisContacts = getContacts();

  return (
    <div className="App">
      <header className="App-header">
        <ContactForm onSubmit={addContact} />
        <Filter value={filter} onChange={filterChange} />
        <ContactList contacts={thisContacts} onDeleteContact={deleteContact} />
      </header>
    </div>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;