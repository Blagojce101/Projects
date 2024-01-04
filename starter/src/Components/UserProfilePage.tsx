import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserProfilePage = () => {
  const [position, setPosition] = useState<boolean>(true);

  const handlePopUp = () => {
    setPosition(position === true ? false : true);
  };
  return (
    <>
      <div className="col-1 notification">
        <i className="fa-solid fa-bell"></i>
      </div>
      <div className="container p-3 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6 image-profile text-center"></div>
          <div className="col-6  text-center">
            <h6 className="m-0">Иванa Ивановскa</h6>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-between align-items-center flex-row">
            <Link to={"/reportspage"} className="text-dark">
              <div className="d-flex align-items-center">
                <i className="fa-regular fa-image mr-2"></i>
                <p className="my-2">Мои Пријави</p>
              </div>
            </Link>
            <div>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 d-flex justify-content-between align-items-center flex-row">
            <div
              className="d-flex align-items-center"
              onClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                event.preventDefault();
                handlePopUp();
              }}>
              <i className="fa-solid fa-globe mr-2"></i>
              <p className="my-2">Јазик</p>
            </div>
            <div>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 d-flex justify-content-between align-items-center flex-row">
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-circle-info mr-2"></i>
              <p className="my-2">За Нас</p>
            </div>
            <div>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 d-flex justify-content-between align-items-center flex-row">
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-gear mr-2"></i>
              <p className="my-2">Поставки</p>
            </div>
            <div>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-12 d-flex justify-content-between align-items-center flex-row">
            <Link to={"/"} className="text-dark">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-right-from-bracket mr-2"></i>
                <p className="my-2">Одјава</p>
              </div>
            </Link>
            <div>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          position === true ? "language-popup-down" : ""
        } conteiner-fluid language-popup d-flex justify-content-center align-items-center flex-column text-white py-5`}>
        <div className="row mb-3">
          <div className="col-12">
            <h6>Избери јазик</h6>
          </div>
        </div>
        <div className="row border-bottom">
          <div className="col-12 mt-3">
            <p>Македонски</p>
          </div>
        </div>
        <div className="row border-bottom">
          <div className="col-12 mt-3">
            <p>English</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            <p>Albanian</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
