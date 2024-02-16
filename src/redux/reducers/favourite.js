import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

// HO FATTO IN MODO CHE LO STATO INIZIALE PRENDA I DATI DAL LOCAL STORAGE IN MODO DA TENERSI AGGIORNATO ANCHE AL CARICAMENTO DELLA PAGINA

const initialState = {
  likedSongs: JSON.parse(localStorage.getItem("like")),
};

const favourite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE: {
      return {
        ...state,
        likedSongs: [...state.likedSongs, action.payload],
      };
    }
    case REMOVE_FROM_FAVOURITE: {
      return {
        ...state,
        likedSongs: state.likedSongs.filter((song) => {
          return song !== action.payload;
        }),
      };
    }

    default:
      return state;
  }
};

export default favourite;
