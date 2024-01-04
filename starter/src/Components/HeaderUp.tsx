import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderUp = () => {
  const { pathname } = useLocation();
  return (
    <header className="fixed-top bg-transparent">
      <div className="container">
        <div className="row d-flex justify-content-center  align-items-center flex-row">
          <div className={`${pathname === "/" ? "col-0 d-none" : ""} col-0`}>
            <Link to={"/"}>
              <button className="btn border border-dark bg-transparent">
                <i className="fa-solid fa-angle-left"></i>
              </button>
            </Link>
          </div>
          <div className="col-10 text-center">
            <Link to={"/"}>
              <img src="/logo.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderUp;
