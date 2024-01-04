import React from "react";
import style from "./style.module.css";
import ButtonComp from "../ButtonComponent/Button";
import { handleRoute } from "@/utils/route";

// interface ISecondSection {
//   text: string;
// }
const SecondSection = () => {
  return (
    <div className={style.SecondSection}>
      <div className={style.bgSpiralButterfly}>
        <div className={style.secondSectionText}>
          <h2>Always unique, never exactly the same!</h2>
          <p>
            Each piece is handcrafted with meticulous attention to detail in our
            workshop in Ohrid.
          </p>
        </div>
      </div>
      <div className={style.Razglednica}></div>
      <div className={style.thirdSectionText}>
        <h2>Over a century old tradition</h2>
        <p>
          As time unfolds, our family business has been growing and evolving,
          adapting to the changing tides while remaining rooted in our heritage.
        </p>
        <ButtonComp
          text={"See our story"}
          className={style.SecondSectionButton}
          handleRoute={() => {
            handleRoute("ourstory");
          }}
        />
      </div>
      <div className={style.frameButterfly}></div>
      <div className={style.ohrid_Old_Town}>
        <div className={style.fourthSectionText}>
          <h2>Visit Our Shop</h2>
          <p>
            Come meet us at the heart of Ohrid’s old town and experience the art
            of craftsmanship firsthand!
          </p>
          <ButtonComp
            text={"Contact Details"}
            className={style.buttonTextOldTown}
            handleRoute={() => {
              handleRoute("contact");
            }}
          />{" "}
        </div>
      </div>
      <div className={style.reviews}>
        <div className={style.reviewsText}>
          <h2>What Our Clients Say</h2>
        </div>
        <div className={style.textContainerOne}>
          <p>
            “I stumbled upon Marinov during my trip to Ohrid, and I'm so glad I
            did. Their shop is a hidden gem filled with beautifully handcrafted
            copper pieces. I bought a pair of earrings, and every time I wear
            them, I receive compliments. The unique designs and the warmth of
            the staff make Marinov an unforgettable experience. Highly
            recommended!”{" "}
          </p>
          <h2>
            - Elsa Johansson, <span>Sweden</span>
          </h2>
        </div>
        <div className={style.textContainerOne}>
          <p>
            “I stumbled upon Marinov during my trip to Ohrid, and I'm so glad I
            did. Their shop is a hidden gem filled with beautifully handcrafted
            copper pieces. I bought a pair of earrings, and every time I wear
            them, I receive compliments. The unique designs and the warmth of
            the staff make Marinov an unforgettable experience. Highly
            recommended!”{" "}
          </p>
          <h2>
            - Elsa Johansson, <span>Sweden</span>
          </h2>
        </div>
        <div className={style.textContainerOne}>
          <p>
            “I stumbled upon Marinov during my trip to Ohrid, and I'm so glad I
            did. Their shop is a hidden gem filled with beautifully handcrafted
            copper pieces. I bought a pair of earrings, and every time I wear
            them, I receive compliments. The unique designs and the warmth of
            the staff make Marinov an unforgettable experience. Highly
            recommended!”{" "}
          </p>
          <h2>
            - Elsa Johansson, <span>Sweden</span>
          </h2>
        </div>
        <div className={style.textContainerOne}>
          <p>
            “I stumbled upon Marinov during my trip to Ohrid, and I'm so glad I
            did. Their shop is a hidden gem filled with beautifully handcrafted
            copper pieces. I bought a pair of earrings, and every time I wear
            them, I receive compliments. The unique designs and the warmth of
            the staff make Marinov an unforgettable experience. Highly
            recommended!”{" "}
          </p>
          <h2>
            - Elsa Johansson, <span>Sweden</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
