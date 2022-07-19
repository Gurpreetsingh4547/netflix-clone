import { createSlice } from '@reduxjs/toolkit';
import allMovies from '../movies';

/**
 * create reducers and actions
 * @return state action reducer
 */
const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: allMovies
  },
  reducers: {
    moviesData: (state) => {
      // eslint-disable-next-line no-unused-expressions
      state.movies;
    }
  }
});

export const { moviesData } = movieSlice.actions;

export default movieSlice.reducer;
