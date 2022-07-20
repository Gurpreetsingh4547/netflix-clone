import React from 'react';

// packages
// import Carosel from 'carousel-react-rcdev';

// import hoc component to display movie image in slider
import MoviesDataConatiner from '../../HOC/moviesDataContainer';

/**
 * slider for all trending movies
 * @param {*} props
 * @returns movie images for slider
 */
const slider = () => (
  <>
    <h1 className="text-danger bg-dark text-center my-5">Trending Movies</h1>
    <div style={{ width: '100%' }}>
      {/* <Carosel>
          {
            movies.Search.map((item) => (
              <img
                style={{ width: '250px', height: '250px', marginLeft: '10px' }}
                key={item.imdbID}
                src={item.Poster}
                alt="no images found"
              />
            ))
          }
        </Carosel> */}
    </div>
  </>
);

const trendingMovies = MoviesDataConatiner(slider);

export default trendingMovies;
