import React from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TredingSlider";
import Footer from "./Footer";
import PopularSlider from "./PopularSlider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/recipe");
  };

  return (
    <div className="container">
      <Navbar />
      <div class="hero-image">
        <img src="/images/food_heroimg.jpg" alt="Image not found" />
        <span>
          <h1>Welcome To Food Recipe Site</h1>
          <button onClick={handleClick}>Go to Receipe</button>
        </span>
      </div>
      {/* <PopularSlider />
      <TrendingSlider /> */}
      <Footer />
    </div>
  );
};

export default Home;
