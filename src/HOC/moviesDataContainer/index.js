import React, { useEffect } from 'react';

// PACKAGES
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS
import CallFakeJsonData from '../../store/actions';
/**
 * create hoc compoent to get data from redux store
 * @param {*} Wrapcomponent
 * @param {*} entity
 * @returns Wrapcomponent with additon functionality
 */
const AllMoviesData = (Wrapcomponent) => {
  function fetchMovieData() {
    // getting the state from reducer using useSelector
    const movies = useSelector((state) => state);
    // dispatch an action for getting new state from redux store
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(CallFakeJsonData);
    }, []);
    return (
      <div>
        <Wrapcomponent movies={movies} />
      </div>
    );
  }
  return fetchMovieData;
};

// const mapStateToProps = (state) => ({ data: state.data });

// const mapDispatchToProps = (dispatch) => ({
//   CallFakeJsonData: () => dispatch(CallFakeJsonData),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AllMoviesData);
export default AllMoviesData;
