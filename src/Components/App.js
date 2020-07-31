import React from "react";
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Layout from "./Layout/Layout";

export default function App({ isContactsLoading, contacts }) {
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
