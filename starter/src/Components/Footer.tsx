import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid pb-4">
      <div className="row">
        <div className="container my-5">
          <div className="row text-white">
            <div className="col-6 pl-4">
              <Link to={"/aboutpage"}>
                <p className="text-white">За Нас</p>
              </Link>
              <p>Блог</p>
              <p>Полиса за пиватност</p>
              <p>Легални Аспекти</p>
              <p>Контакт</p>
            </div>
            <div className="col-6 text-center border-left">
              <h6 className="text-uppercase small">
                ти велат дека не можеш ништо ?
              </h6>
              <h6 className="text-uppercase small">те лажат.</h6>
              <h6 className="text-uppercase small pb-3">диши слободно.</h6>
              <Link to={"/signup"}>
                <button
                  className="text-white btn round"
                  style={{ backgroundColor: "#79B937" }}>
                  Регистрирај се
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-white border-top mt-4 py-4">
              <h6 className="text-center">Следи не на социјални мрежи</h6>
              <div className="d-flex justify-content-around pt-3">
                <a href="" className="text-white">
                  <i className="fa-brands fa-facebook fa-2x"></i>
                </a>
                <a href="" className="text-white">
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </a>
                <a href="" className="text-white">
                  <i className="fa-brands fa-linkedin fa-2x"></i>
                </a>
                <a href="" className="text-white">
                  <i className="fa-brands fa-square-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
