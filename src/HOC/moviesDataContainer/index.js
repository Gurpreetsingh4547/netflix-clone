import React, { useEffect } from 'react';

// PACKAGES
import { connect } from 'react-redux';

// ACTIONS
import CallFakeJsonData from '../../store/actions';
/**
 * create hoc compoent to get data from redux store
 * @param {*} Wrapcomponent
 * @param {*} entity
 * @returns Wrapcomponent with additon functionality
 */
const AllMoviesData = (Wrapcomponent) => {
  function fetchMovieData(props) {
    // Dispatch an action to store to get the data from store
    useEffect(() => {
      props.CallFakeJsonData();
    }, []);
    return (
      <div>

        {/* Passing my store's state to warp component */}
        <Wrapcomponent movies={props.state.movies.jsonDataReducer} />

      </div>
    );
  }

  // map my store's state to props
  const mapStatetoprops = (state) => ({
    state,
  });

  // map my store's actions to props
  const mapDispatchToProps = (dispatch) => ({
    CallFakeJsonData: () => dispatch(CallFakeJsonData()),
  });

  // Connect component with store's state and actions
  return connect(mapStatetoprops, mapDispatchToProps)(fetchMovieData);
};

export default AllMoviesData;
