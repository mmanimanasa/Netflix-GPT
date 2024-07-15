import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.TopRated} />
        <MovieList title={"Popular"} movies={movies?.PopularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.UpcomingMovies} /> 
      </div>
    </div>
  );
}

export default SecondaryContainer