import React from 'react'

// import all movies from the hoc component
import allMoviesData from './hocForDisplayMovieData'

// a card for every movie
import Moviesitems from './MoviesItems'

const dashboardMovies = (props) => {
  const { movies } = props
  return (
    <div>
        <div className='container my-3'></div>
          <div className='row'>
          <h1 className='text-center bg-dark text-danger my-5'>Netflix Most Watched Movies</h1>
            {
              //  iterting the array using map
              movies.Search.map((item) => {
                return (
                  <div className='col-md-2' key={item.imdbID}>
                  {/* passing props to Moviesitems component to render all movies */}
                  <Moviesitems movieImage = {item.Poster} movieName = {item.Title} movieReleaseData = {item.Year}/>

                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

const allMovies = allMoviesData(dashboardMovies, 'allMovies')

export default allMovies
