import React, { useEffect, useRef, useState } from "react";
import axios from "../../common/API/axios";
import "../../style/rows.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import YouTube from "react-youtube";
// import movieTrailer from "movie"
function Rows({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const listRef = useRef();
  const baseUrl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movie)
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const fetchYouTubeTrailer = async (film) => {
    try {
      // Ganti dengan kunci API TMDb Anda
      // const apiKey = "7efff132f25417f845d9875309dd6d6d";

      // Mengambil data film dari API TMDb
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${film.id}}/videos?${process.env.REACT_APP_API_KEY}language=en-US`
        )
        .then((res) => res.json)
        .then((res) => console.log(res.data.results));

      // Mengekstrak URL trailer YouTube jika ada
      if (response.data.videos && response.data.videos.results.length === 0) {
        const youtubeKey = response.data.videos.results[0].key;
        setTrailer(youtubeKey);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
      setTrailer(""); // Setel trailer ke nilai kosong jika terjadi kesalahan
    }
  };
  
  const handleClick = (film) => {
    fetchYouTubeTrailer(film);
  };
  const handleDirection = (direction) => {};
  const sliderLeft = () => {
    let slides = document.getElementsById("slider");
    slides.scrollLeft = slides.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slides = document.getElementsById("slider");
    slides.scrollLeft = slides.scrollLeft + 500;
  };
  return (
    <div
      className="row"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1 className="movie-title">{title}</h1>
      <div className="group">
        <div className="row-images">
          <MdChevronLeft onClick={sliderLeft} className="sliders" size={30} />
          {movie.map((film) => (
            <img
              id={"slider"}
              className={`movie-pictures ${
                isLargeRow && "movie-picture-large"
              }`}
              src={`${baseUrl}${
                isLargeRow ? film.poster_path : film.backdrop_path
              }`}
              alt="row-images"
              key={film.id}
              ref={listRef}
              onClick={() => handleClick(film)}
              loading="lazy"
            />
          ))}
          <MdChevronRight onClick={sliderRight} className="sliders" size={30} />
        </div>
      </div>
      {/* <ReactPlayer
       url={}
       height="80vh"
       width="100vw"
       controls={true}
       className="movie-player"

       
       /> */}
    </div>
  );
}

export default Rows;
