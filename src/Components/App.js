import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../redux/contacts/contactsOperations";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Layout from "./Layout/Layout";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { isContactsLoading, contacts } = this.props;
    return (
      <>
        <Layout>
          {isContactsLoading && <h1>LOADING...</h1>}
          <h1>Phonebook</h1>
          <Form />
          {contacts.length > 1 && <Filter />}
          {contacts.length > 0 && <h2>Contacts</h2>}
          <ContactList />
        </Layout>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
    isContactsLoading: state.contacts.loading,
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
