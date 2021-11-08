import axios from "axios";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_CONTACTS,
  CLEAR_CONTACTS,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_LOADING,
  CONTACT_ERROR,
} from "./types";

// getContacts
export const getContacts = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get("api/contacts");
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg,
    });
  }
};

// Add Contact
export const addContact = (contact) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    setLoading();
    const res = await axios.post("api/contacts", contact, config);
    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  } catch (errors) {
    dispatch({
      type: CONTACT_ERROR,
      payload: errors.response.msg,
    });
  }
};

// Delete Contact
export const deleteContact = (id) => (dispatch) => {
  dispatch({
    type: DELETE_CONTACT,
    payload: id,
  });
};

// Set Current Contact
export const setCurrent = (contact) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    payload: contact,
  });
};

// Clear Current Contact
export const clearCurrent = (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

// clear contacts
export const clearContacts = () => async (dispatch) => {
  dispatch({ type: CLEAR_CONTACTS });
};

// Update Contact

// Filter Contacts

// Clear Filter

// set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
