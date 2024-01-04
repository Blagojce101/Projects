import Link from "next/link";
import React from "react";

const ThirdSectionLeft = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-start mb-100">
        <div className="row">
          <div className="col p-0 third-section-bg-img"></div>
          <Link href={"/products?category=accessories"} className="text-dark">
            <div>
              <div className="third-section-circle d-flex justify-content-center align-items-center text-center">
                <div className="w-75">
                  <img src="./sparks.png" alt="" className="sparks" />
                  <h6 style={{ fontSize: "20px" }}>Козметика & аксесоари</h6>
                  <p
                    className="text-muted m-0"
                    style={{ fontSize: "10px", lineHeight: "18px" }}>
                    Погледни ги свежите љубовни парчиња
                  </p>
                  <img src="./toright.jpg" alt="" className="sparks" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThirdSectionLeft;
