import React from "react";
import { connect } from "react-redux";
import styles from "./Contact.module.css";
import contactsOperations from "../../redux/contacts/contactsOperations";

function Contact({ id, name, number, onRemove }) {
  return (
    <li className={styles.container} key={id}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.button} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
}

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
