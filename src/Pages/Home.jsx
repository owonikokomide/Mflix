import React from 'react'
import MovieCard from '../Components/MovieCard';
import { useState, useEffect } from 'react';
import "../css/Home.css"
import { getPopularMovies, searchMovies } from '../Service/Api';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      const loadPopularMovies = async ()=>{
        try{
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);
          console.log(popularMovies);
        } catch(err) {
          console.log(err)
          setError("Failed to load movies...")
        }
        finally {
          setLoading(false)
        }
      }
      loadPopularMovies()
    }, [])

    const handleForm = async (e)=>{
        e.preventDefault();
      if(!searchQuery.trim()) return;
      if(loading) return;
      setLoading(true);
      try{
       const searchResults = await searchMovies(searchQuery);
       setMovies(searchResults);
       setError(null);
      }catch(err){
       console.log(err);
       setError("Failed to search movies")
      }finally{
        setLoading(false);
      }

      

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
        {error && <div className='error-loading'>{error}</div>}
        {loading ? (
          <div className='loading'>Loading</div>
          ): (
          <div className="movies-grid">
         {movies.map((movie) =>(
            <MovieCard movie={movie} key={movie.id} />
         ))}
       </div>
      )}
       
    </div>
  )
}

export default Home