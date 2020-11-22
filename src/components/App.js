import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import MainTitle from "./MainTitle/MainTitle";
import Phonebook from "./Phonebook/Phonebook";
import Note from "./Note/Note";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import contactsActions from "../redux/contactsActions";
import scaleStyles from "./Transitions/scale.module.css";
import noteAppearStyles from "./Transitions/noteAppear.module.css";

const App = ({ contacts, changeFlag }) => {
  if (contacts.inList) {
    setTimeout(() => changeFlag(), 2000);
  }

  return (
    <div>
      <MainTitle message="Phonebook" />

      <CSSTransition
        in={contacts.inList}
        appear
        timeout={250}
        classNames={noteAppearStyles}
        unmountOnExit
      >
        <Note message="Contact already exist!" />
      </CSSTransition>

      <Phonebook />

      <CSSTransition
        in={contacts.list.length > 1}
        classNames={scaleStyles}
        timeout={250}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <Contacts />
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  changeFlag: contactsActions.changeFlag,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
