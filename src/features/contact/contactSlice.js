import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { initialContacts } from "./localStorage";

const state = {
  contacts: initialContacts,
  filter: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: state,
  reducers: {
    addContact: (state, { payload }) => {
      const id = nanoid();
      if (state.contacts.some((contacts) => contacts.name === payload.name)) {
        alert(`${payload.name} is already on the contacts list`);
      } else {
        state.contacts.push({
          id,
          name: payload.name,
          number: payload.number,
        });
        localStorage.setItem("contacts", JSON.stringify(state.contacts));
      }
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;

export default contactSlice.reducer;