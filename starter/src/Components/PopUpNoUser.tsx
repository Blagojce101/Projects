import React from "react";
import { Link, useParams } from "react-router-dom";

const PopUpNoUser = () => {
  const router = useParams();
  return (
    <>
      <div className="container d-flex justify-content-center align-content-center text-white pop-up-no-user flex-wrap pb-5">
        <div className="row">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center flex-row pb-3">
              <div className="col-12 text-center">
                <h6>
                  Дали е ова точната локација каде сакате да пријавите
                  загадување ?
                </h6>
              </div>
            </div>
            <div className="row d-flex justify-content-between align-items-center flex-row pb-3">
              <div className="col-4 text-center">
                <i className="fa-solid fa-location-dot bg-green fa-2x"></i>
              </div>
              <div className="col-8">
                <div>
                  <p>Васил Ѓоргов бр. 19</p>
                  <p>Капиштец, Скопје 1000</p>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center flex-row pb-5">
              <div className="col-2 mr-4">
                <Link to={"/"}>
                  <button className="btn round border text-white">
                    <i className="fa-solid fa-x"></i>
                  </button>
                </Link>
              </div>
              <div className="col-6 ml-3 d-flex justify-content-center align-items-center">
                <Link to={"/reportform"}>
                  <button
                    className="btn round m-0 popupbutton text-white"
                    style={{ backgroundColor: "#79B937" }}>
                    Потврди
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpNoUser;
