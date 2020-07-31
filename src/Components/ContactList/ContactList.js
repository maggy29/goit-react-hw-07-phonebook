import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id }) => (
        <Contact key={id} id={id} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
