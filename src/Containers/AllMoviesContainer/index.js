import React from 'react';

// import hoc component to pass dashboard Movies to get all movie data
import MoviesDataConatiner from '../../HOC/moviesDataContainer';

// Card for display every movie with image, movie name and year
import MoviesDetailCard from '../../components/movieDetailCard';

const dashboardMovies = ({ movies: { Search: { Search } } }) => (
  <div>
    <div className="row">
      <h1 className="text-center bg-dark text-danger my-5">Netflix Most Watched Movies</h1>
      {
          //  map all movies
          Search.map((item) => (
            <div className="col-md-2" key={item.imdbID}>

              {/* passing props to MoviesDetail card component to render perticular movie */}
              <MoviesDetailCard
                movieImage={item.Poster}
                movieName={item.Title}
                movieReleaseData={item.Year}
              />

            </div>
          ))
        }
    </div>
  </div>
);
// Wrap dashboardMovies Component to HOC component to get hoc functionnality
const allMovies = MoviesDataConatiner(dashboardMovies);

export default allMovies;
