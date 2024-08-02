// HomePage.jsx
import React, { useState } from "react";
import Carousel from "./Carousel";
import Brand from "./Brand";
import BestSeller from "./BestSeller";
import Review from "./Review";
import Faq from "./Faq";

const HomePage = () => {

  return (
    <>
      <Carousel />
      <Brand />
      <BestSeller />
      <Review />
      <Faq />
    </>
  );
};

export default HomePage;
