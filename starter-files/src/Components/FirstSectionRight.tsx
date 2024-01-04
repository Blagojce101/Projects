import Link from "next/link";
import React from "react";

const FirstSectionRight = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-end mb-100 mt-4">
        <div className="row">
          <div className="col p-0 first-section-bg-img"></div>
        </div>
      </div>
      <Link href={"/products"} className="text-dark">
        <div className="first-section-circle d-flex justify-content-center align-items-center text-center">
          <div className="w-75">
            <p className="new">Ново</p>
            <img src="./sparks.png" alt="" className="sparks" />
            <h6 style={{ fontSize: "20px" }}>Valentines gal Kолекција</h6>
            <p
              className="text-muted m-0"
              style={{ fontSize: "10px", lineHeight: "18px" }}>
              Погледни ги свежите љубовни парчиња
            </p>
            <img src="./toright.jpg" alt="" className="sparks" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default FirstSectionRight;
