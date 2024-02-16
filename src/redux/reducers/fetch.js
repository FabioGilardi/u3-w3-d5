import {
  GET_SONGS1,
  GET_SONGS2,
  GET_SONGS3,
  IS_LOADING1,
  IS_LOADING2,
  IS_LOADING3,
} from "../actions";

const initialState = {
  getSongs1: [],
  getSongs2: [],
  getSongs3: [],
  isLoading1: true,
  isLoading2: true,
  isLoading3: true,
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

    case IS_LOADING1: {
      return {
        ...state,
        isLoading1: false,
      };
    }
    case IS_LOADING2: {
      return {
        ...state,
        isLoading2: false,
      };
    }
    case IS_LOADING3: {
      return {
        ...state,
        isLoading3: false,
      };
    }

    default:
      return state;
  }
};

export default fetch;
