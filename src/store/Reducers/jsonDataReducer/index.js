// Actions types
import getFAkeJosnData from '../../const';

// Initial State
const initialState = { data: { Search: [{ imdbID: 1 }] } };
// eslint-disable-next-line default-param-last
const jsonDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case getFAkeJosnData:
      return {
        ...state, data: action.payload,
      };
    default:
      return state;
  }
};

export default jsonDataReducer;
