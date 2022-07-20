// Actions types
import getFAkeJosnData from '../../const';

// import moviesData from '../../../movies';

// Initial State
const initialState = {
  movies: [],
};
// eslint-disable-next-line default-param-last
const jsonDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case getFAkeJosnData:
      return {
        ...state.movies, movies: action.payload.Search,
      };

    default:
      return state.movies;
  }
};

export default jsonDataReducer;
