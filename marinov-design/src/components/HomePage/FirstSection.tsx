import React from "react";
import style from "./style.module.css";
import ButtonComp from "../ButtonComponent/Button";
import dynamic from "next/dynamic";
import beeAnimation from "../../../public/images/json-animations/bee_animation.json";
import braceletAnimation from "../../../public/images/json-animations/bracelet_animation.json";
import helmetAnimation from "../../../public/images/json-animations/helmet_animation.json";
import { handleRoute } from "@/utils/route";
const LottieAnimation = dynamic(() => import("./LottieAnimation"), {
  ssr: false,
});

const FirstSection = () => {
  return (
    <div className={style.FirstSection}>
      <div className={style.hero_jewelry}>
        <div className={style.text}>
          <h3>Unique Handcrafted Jewelry</h3>
          <ButtonComp
            text={"Shop now"}
            style={{ color: "black" }}
            className={style.ButtonBrwn}
            handleRoute={() => {
              handleRoute("jewelry");
            }}
          />
        </div>
        <div className={style.jewelryAnimation}>
          <LottieAnimation animationData={braceletAnimation} />
        </div>
      </div>
      <div className={style.hero_custom}>
        <div className={style.text}>
          <h2>Custom Made Orders</h2>
          <ButtonComp
            className={style.ButtonBrwn}
            text={"Order now"}
            style={{ color: "black" }}
            handleRoute={() => {
              handleRoute("customorders");
            }}
          />
        </div>
        <div className={style.customAnimation}>
          <LottieAnimation animationData={beeAnimation} />
        </div>
      </div>
      <div className={style.hero_decor}>
        <div className={style.text}>
          <h2>Exceptional Home Decor</h2>
          <ButtonComp
            className={style.ButtonBrwn}
            text={"Discover"}
            style={{ color: "black" }}
            handleRoute={() => {
              handleRoute("homedecor");
            }}
          />
        </div>
        <div className={style.decorAnimation}>
          <LottieAnimation animationData={helmetAnimation} />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
