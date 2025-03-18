import { createContext, useState, useEffect, useContext } from "react";

const movieContext = createContext();

export const useMovieContext = ()=> useContext(movieContext);

export const movieProvider = ({children}) => {
   const [favorites, setFavorites] = useState([]);

   useEffect(()=>{
    const storedFavs = localStorage.getItem("favorites");
    if(storedFavs) setFavorites(JSON.parse(storedFavs));
   },[])

   useEffect(()=>{
    localStorage.setItem('favorites', JSON.stringify(favorites))
   },[favorites])

   const addFavorites = (movie)=>{
     setFavorites(prev =>[...prev, movie]);
   }

   const removeFromFavorites = (moveId) =>{
    setFavorites(prev =>[...prev.filter(movie => movie.id !== moveId)]);
   }


   const isFavorites = (moveId) =>{
    return favorites.some(movie => movie.id === moveId);
   }

   const value = {
    favorites,
    addFavorites,
    removeFromFavorites,
    isFavorites
   }

    return<movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
}