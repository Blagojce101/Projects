import Link from "next/link";
import React from "react";

const FourthSection = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-end pt-4 mb-5">
        <div className="row">
          <div className="col p-0 fourth-section-wrapper">
            <img
              src="./home page images/ova.jpg"
              className="fourth-section-img"
            />
          </div>
        </div>
      </div>
      <Link href={"/giftpage"} className="text-dark">
        <div className="fourth-section-circle d-flex justify-content-center align-items-center text-center">
          <div className="w-75">
            <img src="./sparks.png" alt="" className="sparks" />
            <h6 style={{ fontSize: "20px" }}>GIFT CARDS</h6>
            <p
              className="text-muted m-0"
              style={{ fontSize: "10px", lineHeight: "18px" }}>
              Избери уникатен подарок за твоите најблиски со нашиот избор на
              ultra fancy картички за подарок.
            </p>
            <img src="./toright.jpg" alt="" className="sparks" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default FourthSection;
