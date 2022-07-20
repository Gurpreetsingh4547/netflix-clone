import { configureStore } from '@reduxjs/toolkit';

// Ruducers
import AllReducers from '../Reducers/CombineReducer';

// make a store my app
const store = configureStore({
  reducer: {
    movies: AllReducers,
  },
});

export default store;
