import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contactsActions";
import styles from "./ContactItem.module.css";

const ContactItem = ({ name, number, onItemDelete, value }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.p}>
        {name}
        <span>{number}</span>
      </p>
      {value === "" ? (
        <button
          type="button"
          className={styles.button}
          onClick={onItemDelete}
        ></button>
      ) : (
        <button
          type="button"
          className={styles.button}
          // onClick={onItemDelete}
          disabled
        ></button>
      )}
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.list.find(
    (item) => item.id === ownProps.id
  );

  return {
    ...item,
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onItemDelete: () => dispatch(contactsActions.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
