// Packages
import { combineReducers } from 'redux';

// Reducers
import jsonDataReducer from '../jsonDataReducer';

const allReducers = combineReducers({ jsonDataReducer });

export default allReducers;
