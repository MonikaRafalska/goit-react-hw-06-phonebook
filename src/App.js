import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactFrom";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  return (
    <div className="App-header">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;