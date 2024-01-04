import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col about-img">
            <h4 className="text-uppercase text-center pt-5">About Us</h4>
          </div>
        </div>
      </div>
      <div className="container about-container">
        <div className="row my-5">
          <div className="col-12 text-right">
            <h5>The Mission</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              optio numquam inventore eum consequatur adipisci quaerat, dolorem
              quis perspiciatis sapiente!
            </p>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 text-left">
            <h5>The Dedication</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              optio numquam inventore eum consequatur adipisci quaerat, dolorem
              quis perspiciatis sapiente!
            </p>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-12 text-right">
            <h5>The Commitment</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              optio numquam inventore eum consequatur adipisci quaerat, dolorem
              quis perspiciatis sapiente!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
