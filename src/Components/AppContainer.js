import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../redux/contacts/contactsOperations";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import App from "./App";
class AppContainer extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getContacts(state),
    isContactsLoading: contactsSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
