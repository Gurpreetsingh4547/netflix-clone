import React, { } from 'react';

// components
import Navbar from '../Login';
import SliderMovies from '../../Containers/SliderContainer';
import AllMovies from '../../Containers/AllMoviesContainer';

function DeshBoard() {
  return (
    <div>
      {/* Navbar component  */}
      <Navbar />

      {/* Rendring treading moveis in slider */}
      <SliderMovies />

      {/* rendring all movies on dashboard */}
      <AllMovies />
    </div>
  );
}

export default DeshBoard;
