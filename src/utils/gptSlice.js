import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSerachView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
     const { movieNames, movieResults } = action.payload;
     state.movieNames = movieNames;
     state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSerachView,addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;