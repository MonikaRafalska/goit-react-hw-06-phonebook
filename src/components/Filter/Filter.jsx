import styles from "./Filter.module.css";
import React from "react";
import { store } from "../../app/store";
import { setFilter } from "../../features/contact/contactSlice";

const Filter = () => {
  const onFilter = (evt) => {
    store.dispatch(setFilter(evt.target.value));
  };
  return (
    <label>
      <p className={styles.title}>Find contacts by name</p>
      <input
        className={styles.imput}
        type="text"
        name="filter"
        // value={value}
        onChange={onFilter}
      />
    </label>
  );
};

export default Filter;
