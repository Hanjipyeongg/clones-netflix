import React, { useEffect, useRef, useState } from "react";
import axios from "../../common/API/axios";
import "../../style/rows.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Row } from "reactstrap";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function Rows({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);
  const [scrollPosition,setScrollPosition] = useState(0);


  const rowImagesRef = useRef();
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      // console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // const sliderLeft = () => {
  //   let slides = document.getElementById("slider");
  //   slides.scrollLeft = slides.scrollLeft - 500;
  // };
  // const sliderRight = () => {
  //   let slides = document.getElementById("slider");
  //   slides.scrollLeft = slides.scrollLeft + 500;
  // };
  const ScrollLeft = () => {
    const CurrentScrollPosition = rowImagesRef.current.ScrollLeft;
    const newScrollPosition = CurrentScrollPosition - 500;
    rowImagesRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    })
    setScrollPosition(newScrollPosition)
  };
  const ScrollRight = () => {
    const CurrentScrollPosition = rowImagesRef.current.ScrollLeft;
    const newScrollPosition = CurrentScrollPosition + 500;
    rowImagesRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });
    setScrollPosition(newScrollPosition);
  }

  return (
    <div className="row">
      <h1 className="movie-title">{title}</h1>
      <div className="group">
        <div className="row-images">
          <MdChevronLeft
            onClick={ScrollLeft}
            className={`slider-action left ${
              ScrollPosition === 0 ? "disabled" : ""
            }`}
            size={30}
          />
          \
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
              loading="lazy"
            />
          ))}
          <MdChevronRight
            onClick={ScrollRight}
            className={`slider-action right ${
              scrollPosition === 0 ? "disabled" : ""
            }`}
            size={30}
          />
        </div>
      </div>
    </div>
  );
}

export default Rows;
