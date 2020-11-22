import { combineReducers } from "redux";
import { ADD, DELETE, CHANGE_FILTER, CHANGE_FLAG } from "./contactTypes";

const itemsState = {
  list: [],
  inList: false,
};

const items = (state = itemsState, { type, payload }) => {
  switch (type) {
    case ADD:
      const itemInList = state.list.find(
        (listItem) => listItem.name === payload.name
      );
      return itemInList
        ? { list: [...state.list], inList: true }
        : { ...state, list: [payload, ...state.list] };
    case DELETE:
      return {
        ...state,
        list: state.list.filter(({ id }) => id !== payload.contactId),
      };
    case CHANGE_FLAG:
      return { ...state, inList: false };
    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
