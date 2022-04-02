import "./App.css";
import React from "react";
import PropTypes from "prop-types";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactFrom";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  return (
    <div className="App-header">
      <ContactForm />
      <Filter />
      <Contacts />
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;