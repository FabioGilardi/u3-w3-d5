import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playing from "../reducers/playing";
import favourite from "../reducers/favourite";
import fetch from "../reducers/fetch";
import playlist from "../reducers/playlist";

const globalReducer = combineReducers({
  playing: playing,
  favourite: favourite,
  fetch: fetch,
  playlist: playlist,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
