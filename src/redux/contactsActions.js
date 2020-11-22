import { ADD, DELETE, CHANGE_FILTER, CHANGE_FLAG } from "./contactTypes";
import { v4 as uuidv4 } from "uuid";

const addContact = ({ name, number }) => ({
  type: ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = (contactId) => ({
  type: DELETE,
  payload: {
    contactId,
  },
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  },
});

const changeFlag = (inList) => ({
  type: CHANGE_FLAG,
  payload: {
    inList,
  },
});

export default { addContact, deleteContact, changeFilter, changeFlag };
