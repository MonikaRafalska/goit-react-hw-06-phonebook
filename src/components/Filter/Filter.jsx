import styles from "./Filter.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/contact/contactSlice";
 
const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onFilter = (evt) => {
    dispatch(setFilter(evt.target.value));
  };
  return (
    <label>
      <p className={styles.title}>Find contacts by name</p>
      <input
        className={styles.imput}
        type="text"
        name="filter"
        onChange={onFilter}
        value={filter}
      />
    </label>
  );
};

export default Filter;
