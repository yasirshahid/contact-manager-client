import React, { useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import { connect } from "react-redux";
import { loadUser } from "../../actions/authActions";

const Home = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default connect(null, { loadUser })(Home);
