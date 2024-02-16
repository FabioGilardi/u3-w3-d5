// ACTION REFERENCES -------------------------------------------------------------------------------------------------------

export const PLAY_SONG = "PLAY_SONG";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_SONGS1 = "GET_SONGS1";
export const GET_SONGS2 = "GET_SONGS2";
export const GET_SONGS3 = "GET_SONGS3";
export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";
export const REMOVE_FROM_PLAYLIST = "REMOVE_FROM_PLAYLIST";
export const IS_LOADING1 = "IS_LOADING1";
export const IS_LOADING2 = "IS_LOADING2";
export const IS_LOADING3 = "IS_LOADING3";

// ACTION CREATORS --------------------------------------------------------------------------------------------------------
// Per la rimozione degli elementi da un array solitamente si utilizza l'indice dell'elemento come parametro

export const actionPlaySong = (selectedSong) => ({
  type: PLAY_SONG,
  payload: selectedSong,
});

export const actionAddToFavourite = (likeSong) => ({
  type: ADD_TO_FAVOURITE,
  payload: likeSong,
});

export const actionRemoveFromFavuorite = (dislikedSong) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: dislikedSong,
});

export const actionAddToPlaylist = (songToAdd) => ({
  type: ADD_TO_PLAYLIST,
  payload: songToAdd,
});

export const actionRemoveFromPlaylist = (songToRemove) => ({
  type: REMOVE_FROM_PLAYLIST,
  payload: songToRemove,
});

export const getSongs = (artistName, action, actionLoading) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        const data = await response.json();
        const newData = data.data.slice(0, 4);
        dispatch({
          type: action,
          payload: newData,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: actionLoading,
      });
    }
  };
};
