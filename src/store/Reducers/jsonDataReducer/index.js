// Actions types
import getFAkeJosnData from '../../const';

// Initial State
const initialState = {
  data: {
    Search: { Search: [{ imdbID: 1 }] },
  },
};
const jsonDataReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case getFAkeJosnData:
      return {
        ...state,
        data: {
          ...state.data,
          Search: action.payload,
        },
      };
    default:
      return state;
  }
};

export default jsonDataReducer;
