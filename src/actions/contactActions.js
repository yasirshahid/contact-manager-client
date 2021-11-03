import axios from "axios";
import { v4 as uuid } from "uuid";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_LOADING,
} from "./types";

// Add Contact
export const addContact = (contact) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "appliaction/json",
    },
  };
  try {
    setLoading();
    const res = await axios.post("/contacts", contact, config);
    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  } catch (err) {}
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

// Update Contact

// Filter Contacts

// Clear Filter

// set loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
