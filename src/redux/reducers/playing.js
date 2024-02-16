import { PLAY_SONG } from "../actions";

const initialState = {
  activeSong: null,
};

const playing = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG: {
      return {
        ...state,
        activeSong: action.payload,
      };
    }

    default:
      return state;
  }
};

export default playing;
