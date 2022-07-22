import { configureStore } from '@reduxjs/toolkit';

// Ruducers
import AllReducers from '../Reducers/CombineReducer';

// make a centeral store
const store = configureStore({
  reducer: {
    movies: AllReducers,
  },
});

export default store;
