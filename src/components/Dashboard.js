import React, { useContext } from 'react'

// packages
import { Navigate } from 'react-router-dom'

// import context for Authentication
import loginAuth from './userAuthentication'

// import navbar
import Navbar from './Navbar'

// import trending movies and deshboard movies
import TrendingMovies from '../HOC/slider'
import AllMovies from '../HOC/allMovies'

/**
 * Deshboard Page,rendring navbar and all movies
 * @returns  Nabvar, trendingMovie slider, AllMovies
 */
const DeshBoard = () => {
  // using the context from loginAuthenication context
  const userVerifiy = useContext(loginAuth)

  // destructuring the userVerifiy and getting the userLogin
  const { userLogin } = userVerifiy

  // validate the user is login in or not, if not return it to login page always
  if (userLogin === false) {
    return <Navigate to='/' /> // navigate user to login page
  }

  return (
    <div>
      {/* Navbar component  */}
      <Navbar />

      {/* Rendring treading moveis in slider */}
      <TrendingMovies />

      {/* rendring all movies on dashboard */}
      <AllMovies />
    </div>
  )
}

export default DeshBoard
