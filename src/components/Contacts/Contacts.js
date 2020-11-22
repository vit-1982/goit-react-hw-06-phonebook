import React from "react";
import { connect } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Contacts.module.css";
import groupStyles from "../Transitions/group.module.css";
import PropTypes from "prop-types";

function Contacts({ contacts }) {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={groupStyles}>
          <ContactItem id={contact.id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired),
  onDelete: PropTypes.func,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items.list.filter((listItem) =>
    listItem.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  ),
});

// const mapDispatchToProps = {
//   onDelete: contactsActions.deleteContact,
// };

export default connect(mapStateToProps)(Contacts);
