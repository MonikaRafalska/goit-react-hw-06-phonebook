import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const saveToLocalStore = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const loadLocalStore = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

if (loadLocalStore("CONTACTS") === undefined) {
  saveToLocalStore("CONTACTS", []);
}

const initialContacts = loadLocalStore("CONTACTS");

const defaultState = {
  contacts: initialContacts,
  filter: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: defaultState,
  reducers: {
    addContact: (state, { payload }) => {
      const id = nanoid();
      state.contacts.push({
        id,
        name: payload.name,
        number: payload.number,
      });
    },
    deleteContact: (state, { payload }) => {
      state.filter(({ id }) => id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;

export default contactSlice.reducer;
export { saveToLocalStore, loadLocalStore };