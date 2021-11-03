import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
import { v4 as uuid } from "uuid";

//set alert
export const setAlert =
  (msg, type, timeout = 8000) =>
  (dispatch) => {
    const id = uuid();
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
