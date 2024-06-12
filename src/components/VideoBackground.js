import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo} from "../utils/moviesSlice"
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId)
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  console.log(trailerVideo)
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground