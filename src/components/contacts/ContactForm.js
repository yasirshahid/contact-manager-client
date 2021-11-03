import React, { useState } from "react";
import { connect } from "react-redux";
import { addContact } from "../../actions/contactActions";
import PropTypes from "prop-types";

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    relationShip: "personal",
  });

  const { name, email, phone, relationShip } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      relationShip: "personal",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'> Add a Contact</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='relationShip'
        value='personal'
        checked={relationShip === "personal"}
      />{" "}
      Personal &nbsp;
      <input
        type='radio'
        name='relationShip'
        value='professional'
        checked={relationShip === "professional"}
        onChange={onChange}
      />{" "}
      professional
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
          onChange={onChange}
        />
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(null, { addContact })(ContactForm);
