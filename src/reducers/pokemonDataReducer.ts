import { createSlice } from '@reduxjs/toolkit'

export const pokemonDataReducer = createSlice({
  name: 'pokemonData',
  initialState: {
    value: {
      id   : 1,
      name : "",
      image: "",
      type : [],
      stats: []
    },
  },
  reducers: {
    setPokemonData: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { setPokemonData } = pokemonDataReducer.actions

export default pokemonDataReducer.reducer