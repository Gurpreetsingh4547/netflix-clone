import React from 'react';

// import hoc component to pass dashboard Movies to get all movie data
import MoviesDataConatiner from '../../HOC/moviesDataContainer';

// Card for display every movie with image, movie name and year
// import MoviesDetailCard from '../../components/movieDetailCard';

const dashboardMovies = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <div className="row">
        <h1 className="text-center bg-dark text-danger my-5">Netflix Most Watched Movies</h1>
        {
          // //  iterting the array using map
          // movies.Search.map((item) => (
          //   <div className="col-md-2" key={item.imdbID}>

          //     {/* passing props to Moviesitems component to render all movies */}
          //     <MoviesDetailCard
          //       movieImage={item.Poster}
          //       movieName={item.Title}
          //       movieReleaseData={item.Year}
          //     />

          //   </div>
          // ))
        }
      </div>
    </div>
  );
};
const allMovies = MoviesDataConatiner(dashboardMovies, 'allMovies');

export default allMovies;
