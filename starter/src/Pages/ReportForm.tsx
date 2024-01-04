import React from "react";
import { Link } from "react-router-dom";

const ReportForm = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center py-5">
          <div className="col-12">
            <h5 className="text-uppercase">Пријави загадување</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 pb-3">
            <p>Избери извор на загадување</p>
          </div>
        </div>
        <div className="row d-flex justify-content-around align-items-center border-bottom pb-5">
          <div className="col-3 report-filters">
            <i className="fa-solid fa-industry fa-3x text-muted"></i>
          </div>
          <div className="col-3 report-filters">
            <i className="fa-solid fa-house-chimney fa-3x text-muted"></i>
          </div>
          <div className="col-3 report-filters">
            <i className="fa-solid fa-smog fa-3x text-muted"></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-6 p-0 pl-3 d-flex">
            <h6 className="mt-1">Прикачи фотографија</h6>
          </div>
          <div className="col-6">
            <p className="p-0">(*задолжително)</p>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-6 photo-btn ">
              <i className="fa-solid fa-camera fa-5x"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col-6 p-0 pl-3 d-flex">
            <h6 className="mt-1">Дополнително објаснување</h6>
          </div>
          <div className="col-6">
            <p className="p-0">(*опционално)</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-12 text-center w-100 mb-2">
            <textarea
              name=""
              id=""
              cols={37}
              rows={6}
              placeholder="Внеси текст тука.."></textarea>
          </div>
        </div>
      </div>
      <div className="container last-conteiner">
        <div className="row d-flex justify-content-center align-items-center text-center">
          <Link to={"/secondpage"}>
            <div className="col-4">
              <i className="fa-solid text-dark fa-x fa-1x x-button"></i>
            </div>
          </Link>
          <div className="col-8">
            <button className="btn  text-white custom-button">Потврди</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportForm;
