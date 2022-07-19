import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './reducerAndActions';

/**
 * create store for my app
 * @return reducers
 */
const store = configureStore({
  reducer: {
    movies: movieSlice
  }
});

export default store;
