import React, { useRef } from 'react';
import lang from "../utils/languageConstants";
import {useSelector} from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from "react-redux";
import { addGptMovieResult } from '../utils/gptSlice';
const GptSearchBar = () => {
    const langkey = useSelector((store) => store.config.lang);
    const dispatch = useDispatch();
    const serachText = useRef(null);
    const hadleGptSearchClick = async () => {
        const gptQuery =
          "Act as a Movie Recommendation system and suggest some movies for the query" +
          serachText.current.value +
          ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if(!gptResults.choices){

        }
            console.log(gptResults.choices?.[0]?.message?.content);
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        const promiseArray = gptMovies.map((movie) => serachMovieTMD(movie));
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(
          addGptMovieResult({
            movieNames: gptMovies,
            movieResults: tmdbResults,
          })
        );
    }
    const serachMovieTMD = async (movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );
        const json = await data.json();

        return json.results;
    }
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" 
      onSubmit={(e) => e.preventDefault()}>
        <input
          ref={serachText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-2 bg-red-700 text-white rounded-lg" onClick={hadleGptSearchClick}>
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar