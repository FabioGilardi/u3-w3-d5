import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from "../actions";

const initialState = {
  playlistSong: JSON.parse(localStorage.getItem("playlist")),
};

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYLIST: {
      return {
        ...state,
        playlistSong: [...state.playlistSong, action.payload],
      };
    }

    case REMOVE_FROM_PLAYLIST: {
      return {
        ...state,
        playlistSong: state.playlistSong.filter((song) => {
          return song !== action.payload;
        }),
      };
    }

    default:
      return state;
  }
};
export default playlist;
