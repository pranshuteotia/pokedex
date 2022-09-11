import { configureStore } from "@reduxjs/toolkit";
import displaySearchReducer from "reducers/searchStatusReducer";
import pokemonDataReducer from "reducers/pokemonDataReducer";

export default configureStore({
  reducer: {
    displaySearch: displaySearchReducer,
    pokemonData: pokemonDataReducer,
  }
});