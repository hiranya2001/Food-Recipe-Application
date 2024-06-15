import React from "react";
import PopularSlider from "./PopularSlider";
import TredingSlider from "./TredingSlider";
import Navbar from "./Navbar";

const PopularAndTrendingRecipe = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <PopularSlider />
        <TredingSlider />
      </div>
    </>
  );
};

export default PopularAndTrendingRecipe;
