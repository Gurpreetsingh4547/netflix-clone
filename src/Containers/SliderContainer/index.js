import React from 'react';

// PACKAGES
import Carosel from 'carousel-react-rcdev';

// import hoc component to display movie image in slider
import MoviesDataConatiner from '../../HOC/moviesDataContainer';

/**
 * Slider for all trending movies
 * @param {object} props
 */
const slider = ({ movies: { Search: { Search } } }) => (
  <div>
    <h1 className="text-danger bg-dark text-center my-5">Trending Movies</h1>
    <div style={{ widht: '100%' }}>
      <Carosel>
        {
          // map all movies image in slider
            Search.map((item) => (
              <img
                style={{ width: '250px', height: '250px', marginLeft: '10px' }}
                key={item.imdbID}
                src={item.Poster}
                alt="no images found"
              />
            ))
          }
      </Carosel>
    </div>
  </div>
);

// Warp Slider component to hoc component to get hoc functionnality
const trendingMovies = MoviesDataConatiner(slider);

export default trendingMovies;
