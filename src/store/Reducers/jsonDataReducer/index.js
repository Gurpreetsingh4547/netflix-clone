// Actions types
import getFAkeJosnData from '../../const';

// import moviesData from '../../../movies';

// Initial State
const initialState = {
  data: null,
};
// eslint-disable-next-line default-param-last
const jsonDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case getFAkeJosnData:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default jsonDataReducer;
