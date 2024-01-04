import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderDown = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="header-down fixed-bottom">
        <div className="button-container d-flex justify-content-around p-3">
          <Link to={"/"}>
            <button className="bg-transparent border-0 text-white">
              <i className="fa-solid fa-house fa-2x"></i>
            </button>
          </Link>
          <Link
            to={"/secondpage"}
            className={`${
              pathname === "/reportform" ? "display-none" : ""
            } rounded-button-container`}>
            <button className="rounded-button text-white">
              <i className="fa-solid fa-plus fa-2x"></i>
            </button>
          </Link>
          <Link to={"/userprofile"}>
            <button className="bg-transparent border-0 text-white">
              <i className="fa-regular fa-user fa-2x"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderDown;
