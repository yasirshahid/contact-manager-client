import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  SET_LOADING,
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
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
