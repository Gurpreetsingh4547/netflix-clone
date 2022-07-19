/* eslint-disable react/prop-types */
import React from 'react';

/**
 * Movie card for every perticular movie with movie details and image
 * @param props
 * @returns
 */
function MoviesItems (props) {
  // desructuring the props
  const { movieImage, movieName, movieReleaseData } = props;

  return (
        <div className='container'>
            <div className='card bg-dark my-4' style={{ color: 'white' }}>
                {/* movie image */}
                <img src={movieImage} className='card-img-top' alt='...' />
                {/* movie name and movie release data */}
                <div className='card-body'>
                    <p className='card-text'>{movieName}</p>
                    <p >{movieReleaseData}</p>
                </div>
            </div>

        </div>
  );
}

export default MoviesItems;
