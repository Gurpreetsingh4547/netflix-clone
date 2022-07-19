import React, { useEffect } from 'react'
// packages
import { useSelector, useDispatch } from 'react-redux'

// import actions from reducers
import { moviesData } from '../Redux/reducerAndActions'
/**
 * create hoc compoent to get data from redux store
 * @param {*} Wrapcomponent
 * @param {*} entity
 * @returns Wrapcomponent with additon functionality
 */
const AllMoviesData = (Wrapcomponent, entity) => {
  return function fetchMovieData () {
    // getting the state from reducer using useSelector
    const { movies } = useSelector(state => state.movies)

    // dispatch an action for getting new state from redux store
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(moviesData)
    })
    return (
        <>
          <Wrapcomponent movies={movies} />
        </>
    )
  }
}

export default AllMoviesData
