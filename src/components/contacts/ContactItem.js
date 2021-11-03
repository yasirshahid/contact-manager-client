import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deleteContact,
  setCurrent,
  clearCurrent,
} from "../../actions/contactActions";

const ContactItem = ({ contact, deleteContact, setCurrent, clearCurrent }) => {
  const { id, name, email, phone, relationShip } = contact;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (relationShip === "professional"
              ? "badge-success"
              : "badge-primary")
          }
        >
          {relationShip.charAt(0).toUpperCase() + relationShip.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(null, { deleteContact, setCurrent, clearCurrent })(
  ContactItem
);
