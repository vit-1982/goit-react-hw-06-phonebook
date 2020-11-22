import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const itemsState = {
  list: [],
  inList: false,
};

const onAddContact = (state, action) => {
  const itemInList = state.list.find(
    (listItem) => listItem.name === action.payload.name
  );
  return itemInList
    ? { list: [...state.list], inList: true }
    : { ...state, list: [action.payload, ...state.list] };
};

const onDeleteContact = (state, action) => {
  return {
    ...state,
    list: state.list.filter(({ id }) => id !== action.payload),
  };
};

const onChangeFlag = (state, action) => {
  return { ...state, inList: false };
};

const items = createReducer(itemsState, {
  [contactsActions.addContact]: onAddContact,
  [contactsActions.deleteContact]: onDeleteContact,
  [contactsActions.changeFlag]: onChangeFlag,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
