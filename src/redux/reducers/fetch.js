import { GET_SONGS1, GET_SONGS2, GET_SONGS3 } from "../actions";

// IL REDUCER FUNZIONA BENE TUTTAVIA NON SONO RIUSCITO A PASSARE GETSONGS1-2-3 COME PARAMETRI NEI SINGOLI COMPONENTI
// L'IDEA ERA DI FARE LE FETCH NEL MAINSECTION E NELLE FILMS ROW UTILIZZARE LO USE SELECTOR PER PRELEVARE I SINGOLI VALORI
// SI ROMPEVA NEL MOMENTO IN CUI NELLA DICITURA INSERIVO.
// const selector = useSelector((state) => state.fetch.prop)
// DOVE LA PROP ERA GETSONGS1/2/3 A SECONDA DEL COMPONENTE

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
