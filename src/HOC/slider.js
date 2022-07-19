import React from 'react';

// packages
import Carosel from 'carousel-react-rcdev';

// import hoc component to pass the component get Movies data
import allMoviesData from './hocForDisplayMovieData';

/**
 * slider for all trending movies
 * @param {*} props
 * @returns movie images for slider
 */
const slider = (props) => {
  const { movies } = props;
  return (
    <>
    <h1 className='text-danger bg-dark text-center my-5'>Trending Movies</h1>
    <div style={{ width: '100%' }}>
        <Carosel>
          {
            movies.Search.map((item) => {
              return (
                <img style={{ width: '250px', height: '250px', marginLeft: '10px' }} key={item.imdbID} src={item.Poster} alt='no images found'/>
              );
            })
          }
        </Carosel>
    </div>
    </>
  );
};

const trendingMovies = allMoviesData(slider);

export default trendingMovies;
