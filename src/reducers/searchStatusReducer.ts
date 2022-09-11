import { createSlice } from '@reduxjs/toolkit'

export const searchStatusReducer = createSlice({
  name: 'searchStatus',
  initialState: {
    value: true,
  },
  reducers: {
    showSearch: (state) => {
      state.value = true;
    },
    hideSearch: (state) => {
      state.value = false;
    },
    toggleSearch: (state) => {
      state.value = !state.value;
    },
  },
})

export const { showSearch, hideSearch, toggleSearch } = searchStatusReducer.actions

export default searchStatusReducer.reducer