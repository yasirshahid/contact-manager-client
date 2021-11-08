import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import ContactItem from "./ContactItem";
import { getContacts } from "../../actions/contactActions";
import Spinner from "../layout/Spinner";

const Contacts = ({ contact: { contacts }, loading, getContacts }) => {
  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return (
      <h4>
        Please use the <strong style={{ color: "red" }}>FORM</strong> to add a
        contact.
      </h4>
    );
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Fragment>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  contact: state.contact,
  loading: state.loading,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
