import React, { useEffect, useState } from "react";
import axios from "../../common/API/axios";
import requests from "../../common/API/request";
import "../../style/banner.css";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
function Heading() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movies);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
    )`,
        backgroundPosition: "center center",
      }}
      loading="lazy"
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movies?.title || movies?.name || movies?.original_name}{" "}
        </h1>
        <div className="banner-button">
          <button className="button">
            {" "}
            <FaPlay className="icon-play" />
            Play
          </button>
          <button className="button">
            <AiOutlineInfoCircle className="icon-info" />
            More Info
          </button>
        </div>
        <h1 className="banner-description">
          {truncate(movies?.overview, 160)}
        </h1>
      </div>
      <div className="banner-fade" />
    </header>
  );
}

export default Heading;
