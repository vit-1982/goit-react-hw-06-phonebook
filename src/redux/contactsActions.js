import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction("contacts/delete");
const changeFilter = createAction("contacts/change");
const changeFlag = createAction("contacts/change_flag");

const contactsActions = { addContact, deleteContact, changeFilter, changeFlag };

export default contactsActions;
