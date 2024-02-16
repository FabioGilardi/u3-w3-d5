import { GET_SONGS1, GET_SONGS2, GET_SONGS3 } from "../actions";

const initialState = {
  getSongs1: [],
  getSongs2: [],
  getSongs3: [],
};

const fetch = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS1: {
      return {
        ...state,
        getSongs1: action.payload,
      };
    }
    case GET_SONGS2: {
      return {
        ...state,
        getSongs2: action.payload,
      };
    }
    case GET_SONGS3: {
      return {
        ...state,
        getSongs3: action.payload,
      };
    }

    default:
      return state;
  }
};

export default fetch;
