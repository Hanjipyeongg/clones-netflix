import React from "react";
import "../../style/footer.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

function Footer() {
  const handleFacebook = () => {
    window.open("https://www.facebook.com/NetflixAsia", "_blank");
  };
  const handleTwitter = () => {
    window.open("https://twitter.com/NetflixAsia", "_blank");
  };
  const handleInstagram = () => {
    window.open("https://www.instagram.com/netflixasia/", "_blank");
  };
  const handleYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos",
      "_blank"
    );
  };
  return (
    <footer>
      <div className="container">
        <div>
          <div className="icons-sosmed">
            <a href="https://www.facebook.com/NetflixAsia" target="_blank">
              <span>
                <FiFacebook onClick={handleFacebook} />
              </span>
            </a>
            <a href="https://www.instagram.com/netflixasia/" target="_blank">
              <span>
                <BsInstagram onClick={handleInstagram} />
              </span>
            </a>
            <a href="https://twitter.com/NetflixAsia" target="_blank">
              <span>
                <FaXTwitter onClick={handleTwitter} />
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos"
              target="_blank"
            >
              <span>
                <AiOutlineYoutube
                  className="icons-youtube"
                  onClick={handleYoutube}
                />
              </span>
            </a>
          </div>
        </div>

        <div className="rows">
          <div className="content-footer">
            <p>
              <a href="/">Audio Description</a>
            </p>
            <p>
              <a href="/">Investor Relations</a>
            </p>
            <p>
              <a href="/">Legal Notices </a>
            </p>
          </div>
          <div className="content-footer">
            <p>
              <a href="/">Help Center</a>
            </p>
            <p>
              <a href="/">Jobs</a>
            </p>
            <p>
              <a href="/">Cookie Preference</a>
            </p>
          </div>
          <div className="content-footer">
            <p>
              <a href="/">Gift Cards</a>
            </p>
            <p>
              <a href="/">Terms of Use</a>
            </p>
            <p>
              <a href="/">Corporate Information</a>
            </p>
          </div>
          <div className="content-footer">
            <p>
              <a href="/">Media Center</a>
            </p>
            <p>
              <a href="/">Privacy</a>
            </p>
            <p>
              <a href="/">Contact Us</a>
            </p>
          </div>
        </div>
        <div className="end">
          <p>@ 2023-2023 Netflix.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
