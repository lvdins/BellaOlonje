import React from "react";
import "./hero.scss";
import "../Buttons/Buttons";

const hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <p className="hero__description">Food App</p>
        <h1 className="hero__title">
          Why stay hungry when you can order from Bella Onojie
        </h1>
        <p className="hero__description">
          Download the bella onoje’s food app now on
        </p>
        <div className="hero__buttons">
          <button className="hero__button">Playstore</button>
          <button className="hero__button2">App store</button>
        </div>
      </div>
    </div>
  );
};

export default hero;
