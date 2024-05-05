import React from "react";
import PickMeals from "../assets/travel.jpeg";
import ChooseMeals from "../assets/hotel.jpg";
import DeliveryMeals from "../assets/budget.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Travel",
      text: "We give plan for you the best way of travelling.",
    },
    {
      image: ChooseMeals,
      title: "Stay",
      text: "Find the best hotels in the city based on reviews, location and budget ",
    },
    {
      image: DeliveryMeals,
      title: "Budget",
      text: "Fit this travel in your budget with suggestions of good place to stay and best offers",
    },
  ];
  return (
    <div id="section2" className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We start with collecting your preferences of budget, destination,
          hotels which is fed to AI to give you the perfect iternary
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
