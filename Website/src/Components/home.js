import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/back-image.png";
import { FiArrowRight } from "react-icons/fi";
import "../App.css";
const home = () => {
  return (
    <div classname="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h3 className="primary-heading">
            Your trips planned up to the minute
          </h3>
          <p className="primary-text">
            Worried about planning the iternary for an unknown place?
          </p>
          <p className="primary-text">Let AI help you</p>
          <button className="secondary-button">
            Plan Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default home;
