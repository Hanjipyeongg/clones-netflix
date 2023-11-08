import React, { useEffect, useState } from "react";
import "../../style/navbar.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    // Define the event listener function
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handlePage = () => {
    window.location.assign("/");
  };
  const handleLogin = () => {
    window.location.assign("/SignIn");
  };
  return (
    <div className={`nav ${show && "nav-block"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="logo"
        onClick={handlePage}
      />
      <button className="nav-button" onClick={handleLogin}>
        Sign In
      </button>
    </div>
  );
}
export default Nav;
