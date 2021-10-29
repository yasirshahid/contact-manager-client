import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from "../actions/types";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "yasir",
      email: "yasirshahid5@gmaail.com",
      phone: "111-111-1111",
      relationShip: "personal",
    },
    {
      id: 2,
      name: "ٓAdil",
      email: "adil@gmaail.com",
      phone: "222-222-2222",
      relationShip: "professional",
    },
    {
      id: 3,
      name: "ٓZia",
      email: "Zia@gmaail.com",
      phone: "333-333-3333",
      relationShip: "professional",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
