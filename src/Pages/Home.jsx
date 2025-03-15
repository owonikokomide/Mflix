import React from 'react'
import MovieCard from '../Components/MovieCard';
import { useState } from 'react';
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "The Rock", release_date: 2012},
        {id: 2, title: "The Flash", release_date: 2017},
        {id: 3, title: "Fast and Furios", release_date: 2019},
    ];

    const handleForm = (e)=>{
        e.preventDefault();
      alert(searchQuery);
      setSearchQuery("");
    }
  return (
    <div className='home'>
        <form onSubmit={handleForm} className='search-form'>
          <input type="text" 
          placeholder='search for movies...'
          className='search-input' 
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          />
          <button type="submit" className='search-button'>Search</button>
        </form>
       <div className="movies-grid">
         {movies.map((movie) =>(
            <MovieCard movie={movie} key={movie.id} />
         ))}
       </div>
    </div>
  )
}

export default Home