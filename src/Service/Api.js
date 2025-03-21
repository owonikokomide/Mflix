const API_KEY = "d4b8e2612ede20ca6cc9eddc6b41bd62";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async ()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); 
    const data = await response.json();
    return data.results
}


export const searchMovies = async (query)=>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
}
