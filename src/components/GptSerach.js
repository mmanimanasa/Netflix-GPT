import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from "../utils/constants";
const GptSerach = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={BG_URL}
          alt="background-img"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSerach