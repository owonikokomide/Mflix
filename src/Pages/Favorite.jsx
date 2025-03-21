<<<<<<< HEAD
import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../Contexts/MovieContext'
import MovieCard from '../Components/MovieCard'
 
function Favorite() {
  const {favorites} = useMovieContext();
  if(favorites) 
    return( 
     <div className='favorites'>
      <h2>Your Favorites</h2>
    <div className="movies-grid">
  {favorites.map((movie) =>(
     <MovieCard movie={movie} key={movie.id} />
  ))}
</div> 
</div>
);
=======
import React from 'react';
import '../css/Favorites.css';
import { useMovieContext } from '../Contexts/MovieContext';
import MovieCard from '../Components/MovieCard';

function Favorite() {
  const { favorites } = useMovieContext();

>>>>>>> f61fb43 (css adjusted)
  return (
    <div className='favorites'>
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className='favorites-empty'>
          <h1>No favorite movies yet</h1>
          <p>Start adding movies to your favorites and they will appear here</p>
        </div>
      )}
    </div>
  );
}

<<<<<<< HEAD
export default Favorite
=======
export default Favorite;
>>>>>>> f61fb43 (css adjusted)
