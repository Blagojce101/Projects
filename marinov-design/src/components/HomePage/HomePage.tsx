import React from "react";
import style from "./style.module.css";
import ScrollBar from "../Scroll/ScrollBar";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const HomePage = () => {
  return (
    <div className={style.HomePageComponent}>
      <FirstSection />
      <SecondSection />
      {/* <ScrollBar /> */}
    </div>
  );
};

export default HomePage;
