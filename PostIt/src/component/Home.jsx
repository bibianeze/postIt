// import React from "react";
import "../style/Home.css";

import lifestyle from "../assets/lifestyle.png";
import nature from "../assets/nature.png";
import technology from "../assets/technology.png";
import TryPostit from "../assets/TryPostit.png";

const Home = () => {
  return (
    <div>
      <div>
        <div className="grouptext1">
          <div className="txt">
            <h1>Stay Curious.</h1>
            <p>
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.
            </p>
            <button className=" border-0 rounded-lg buttonnav">
              {" "}
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="sec2">
        <div className="lifestylesec">
          <div>
            <img src={lifestyle} alt="" />
          </div>
          <div>
            <button className="lifestyle">Lifestyle</button>
            <p>The 20 Biggest Fashion Companies In Nigeria 2022</p>
          </div>
        </div>
        <div className="naturesec">
          <div>
            <img src={nature} alt="" />
          </div>
          <div>
            <button className="nature">Nature</button>
            <p>The 20 Biggest Agro Companies In Nigeria 2022</p>
          </div>
        </div>
        <div className="techsec">
          <div>
            <img src={technology} alt="" />
          </div>
          <div>
            <button className="technology">Technology</button>
            <p>The 20 Biggest Technology Companies In Nigeria 2022</p>
          </div>
        </div>
      </div>

      <div className="sec3">
        <div>
          <img src={TryPostit} alt="" />
        </div>
        <div>
          <p>
            Do you want to write or discover stories from writers on any topic?
          </p>
        
          <input
            className="input"
            type="text"
            placeholder="Enter Email Address"
          />
          <button className="inputbtn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
